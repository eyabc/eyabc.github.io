---
title: 7. 다 쓴 객체 참조를 해제하라
---
 
GC 가 있는 언어에서도 메모리 관리를 신경써야 한다.

메모리 누수는 겉으로 잘 드러나지 않아 시스템에 수년간 잠복하는 사례도 있다.
이러한 누수는 철저한 코드 리뷰나 힙 프로파일러 같은 디버깅 도구를 동원해야만 발견되기도 한다.
그래서 이런 종류의 문제는 예방법을 익혀두는 것이 매우 중요하다.

## 스택에서 꺼내진 객체들을 GC 가 회수하지 않음

```java
public class Stack {
    private Object[] elements;
    private int size = 0;
    private static final int DEFAULT_INITIAL_CAPACITY = 16;
    
    public Stack() {
        elements = new Object[DEFAULT_INITIAL_CAPACITY];
    }
    
    public void push(Object e) {
        ensureCapacity();
        elements[size++] = e;
    }

    public Object pop() {
        if (size == 0)
            throw new EmptyStackException();
        return elements[--size];
    }

    private void ensureCapacity() {
        if (elements.length == size) {
            elements = Arrays.copyOf(elements, 2 * size + 1);            
        }
    }

}
```
- 스택들이 그 객체들의 다쓴 참조 obsolete reference(다시 쓰지 않을 참조) 를 여전히 가지고 있기 때문
- 해당 참조를 다 썼을 때 null 처리 해줘야 한다.

```java
public Object pop() {
    if (size == 0) 
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null;
    return result;
}
```

## null 처리는 언제 해야 할까?
객체 참조를 null 처리 하는 일은 예외적인 경우여야 한다.

### 1. 자기 메모리를 직접 관리하는 클래스
Stack 클래스는, 스택이 자기 메모리를 직접 관리하기 때문에 메모리 누수에 취약하다.
- 객체의 참조를 담는 배열은, 저장소 풀을 만들어 원소를 관리함.
- GC 는 배열의 활성 영역과 비활성 영역을 구분할 수 없다.

### 2. 캐시 메모리
#### `WeakHashMap`
- 캐시 외부에서, 키를 참조하는 동안에만 엔트리가 살아있는 캐시가 필요한 상황일 때
- 다쓴 엔트리는 즉시 제거됨

```java
public static void main(String[] args) {
    Map<Integer, String> map = new WeakHashMap<>();

    Integer key1 = 1000;
    Integer key2 = 2000;

    map.put(key1, "test a");
    map.put(key2, "test b");

    key1 = null;

    System.gc();  //강제 Garbage Collection

    map.entrySet().stream().forEach(el -> System.out.println(el));
}
2000=test b
```

:::note 약한 참조 
`WeakReference weak = new WeakReference<>(prime);` 
와 같이 prime 이 null이 되면 GC의 대상이 된다.
:::


캐시 엔트리의 유효 기간을 정확히 정의하기 어려울 때 
- 직접 청소
- Scheduled ThreadPoolExecutor 과 같은 백그라운드 쓰레드 활용

#### `LinkedHashMap`
캐시에 새로운 항목이 추가될 때 removeEldestEntry 메소드를 실행하는데 이게 가장 오래된 캐시를 제거하는 것이다.
```java
public static void main(String[] args) {
    LinkedHashMap<Integer, Integer> map = new LinkedHashMap<>(1000, 0.75f, true) {

        private final static int MAX = 10;

        protected boolean removeEldestEntry(java.util.Map.Entry<Integer, Integer> eldest) {
            return size() >= MAX;
        }
    };

    for (int i = 0; i < 20; i++) {
        map.put(i, i);
    }

    for (Map.Entry<Integer, Integer> string : map.entrySet()) {
        System.out.println(string);
    }
}
/*
    11=11
    12=12
    13=13
    14=14
    15=15
    16=16
    17=17
    18=18
    19=19
*/
```

- 더 복잡한 캐시를 만들고 싶다면 java.lang.ref 패키지 직접 활용

### 3. 리스너 (콜백)
클라이언트가 콜백을 등록하고 명확한 해지를 하지 않을 때, 콜백은 계속 쌓여감.
- 콜백을 약한참조로 저장하면 GC 가 즉시 수거해 간다.
- WeakHashMap 에 키로 저장한다.

> 콜백의 해지를 하지 않은 경우, java.lang.ref 가 무엇일까?

Reference
---
- https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/7_%EB%8B%A4%20%EC%93%B4%20%EA%B0%9D%EC%B2%B4%20%EC%B0%B8%EC%A1%B0%EB%A5%BC%20%ED%95%B4%EC%A0%9C%ED%95%98%EB%9D%BC_%EA%B9%80%EC%84%B8%EC%9C%A4.md
