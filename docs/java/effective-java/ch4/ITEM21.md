---
title: 21. 인터페이스는 구현하는 쪽을 생각해 설계하라
---

## Default Method
:::note Default Method (java 8)
**기존 인터페이스에 메서드를 추가**할 수 있는 방법
:::

**핵심 컬렉션 인터페이스**에 디폴트 메서드가 추가 되었다. 
:::tip 
주로 **람다**를 활용하기 위함
:::

자바 라이브러리의 디폴트 메서드는 코드품질이 높고 범용적 → 대부분 잘 작동

## Before Java 1.8
디자인패턴에 관심이 있는 개발자라면 인터페이스의 중요성은 잘 알고 있을 것이다. 

자바 8 이후로는 인터페이스의 하위 호환성을 지킬 수 있게 되었다.
- 자바 8 이전에는 하위 호환성을 지키면서 인터페이스에 메서드를 추가하는 것이 불가능했다.
- 자바 8 이후, default method 가 추가되면서 새로운 인터페이스를 구현하지 않아 발생하는 컴파일 에러를 잡을 수 있게 되었다.

## 주의 사항
### 1. 불변식을 해치지 않는 디폴트 메서드 작성의 어려움
:::note
모든 기존 구현체들과 매끄럽게 연동되리라는 보장은 없다.         
불변식을 해치지 않는 디폴트 메서드를 작성하기 어렵다.

→ 자바 7까지의 세상에서는 모든 클래스가 **"현재의 인터페이스에 새로운 메서드가 추가될 일은 영원히 없다"** 고 가정하고 작성되었기 때문이다.
:::

#### 문제점
자바 8 의 Collection 인터페이스에 추가된 removeIf 디폴트 메서드
```java
public interface Collection<E> extends Iterable<E> {
    default boolean removeIf(Predicate<? super E> filter) {
        Objects.requireNonNull(filter);
        boolean result = false;
        for (Iterator<E> it = iterator(); it.hasNext(); ) {
            if (filter.test(it.next())) {
                it.remove();
                result = true;
            } 
        }
        return result;
    }
}
```
```java
public static void main(String[] args) {
    List<Integer> numbers= new ArrayList();
	numbers.add(1);
	numbers.add(2);
	numbers.add(3);

    numbers.removeIf(a -> a == 2);

    // number -> 1, 3
}
```
:::caution `apache.commons.collections4.collection.SynchronizedCollection` 
- 클라이언트가 제공한 객체로 락을 거는 능력을 추가로 제공 (Thread-safe 한 객체를 만들 수 있다.)
- 모든 메서드에서 주어진 락 객체로 동기화 한 후 내부 컬렉션 객체에 위임하는 래퍼클래스

`removeIf` 와 맞지 않음 (effective java 3판 작성시점)
- removeIf 의 구현은 동기화에 대해 모르므로 락 객체를 사용할 수 없다.
- 3.2.2 버전에서는 removeIf를 재정의하지 않고 있다.
    ![](https://user-images.githubusercontent.com/42836576/106704468-8a04d280-662f-11eb-979d-3905cb495335.png)
    - ConcurrentModificationException이 발생하거나 예기치 못한 결과가 발생할 수 있다.
    

- 4.4 버전에서는 removeIf를 재정의하고 있다.
    ![](https://user-images.githubusercontent.com/42836576/106704478-8c672c80-662f-11eb-8434-d37db32b0134.png)
    ```java
    @Override
    public boolean removeIf(Predicate<? super E> filter) {
       synchronized (mutex) { // 동기화처리를 해주고 있다.
            return c.removeIf(filter);
         }
    }
    ```

:::

#### 해결 방안
- 구현한 인터페이스의 디폴트 메서드 재정의

자바 플랫폼에 속하지 않은 제 3의 기존 컬렉션 구현체에서는 여전히 수정되지 않고 있을 수 있다.

### 2. 디폴트 메서드는 컴파일에 성공하더라도 기존 구현체에 런타임 오류를 일으킬 수 있다.
흔한일은 아니지만 일어날 수 있다.

### 3. 기존 인터페이스에 디폴트 메서드로 새 메서드를 추가하는 일은 꼭 필요한 경우가 아니면 피한다.
:::note 
디폴트 메서드가 기존 구현체들과 충돌하지 않는지 고려한다.
:::
새로운 인터페이스를 만드는 경우라면 유용한 수단이다.

### 4. 디폴트 메서드는 인터페이스로부터 메서드를 제거하거나 기존 메서드의 시그니처를 수정하는 용도가 아니다.
이런 형태로 인터페이스를 변경하면 기존 클라이언트를 망가뜨리게 된다.

### 5. 새로운 인터페이스라면 릴리스 전에 반드시 테스트를 거쳐야 한다.
인터페이스를 릴리즈 한 후의 결함 수정 가능성에 대해 기대서는 안된다.



Reference
---
- https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/21_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%8A%94_%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94_%EC%AA%BD%EC%9D%84_%EC%83%9D%EA%B0%81%ED%95%B4_%EC%84%A4%EA%B3%84%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md
- https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/21_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%8A%94_%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94_%EC%AA%BD%EC%9D%84_%EC%83%9D%EA%B0%81%ED%95%B4_%EC%84%A4%EA%B3%84%ED%95%98%EB%9D%BC_%EB%B0%95%EC%B0%BD%EC%9B%90.md
