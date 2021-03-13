# ITEM32 제네릭과 가변인수를 함께 쓸 때는 신중하라
가변인수 varargs 메서드와 제네릭은 자바5 때 함께 추가되었지만, 궁합이 좋지 않다.

가변인수 기능은
- 배열을 노출하여, 추상화가 완벽하지 못함
- 배열과 제네릭의 타입 규칙이 서로 다르다.

제네릭 varargs 매개변수
- 타입 불안전 하지만, 허용된다.

메서드에 제네릭(매개변수화된) varargs 매개변수를 사용하고자 한다면,   
- 그 메서드의 타입안전을 확인하고
- @SafeVarargs 을 달아 불편함을 없앤다.

## 가변인수 varargs 메서드
메서드에 넘기는 인수의 개수를 클라이언트 조절 할 수 있음

### 허점
가변인수 메서드 호출 → 가변인수를 담기위한 *배열*이 생성됨
- 이 배열은 감춰지지 못하고 클라이언트에게 노출되는 허점을 가짐

## 제네릭 varargs

메서드를 선언할 때 varargs 매개변수가 
- *실체화 불가 타입*(제네릭이나 매개변수화 타입) → 런타임에 타입이 소거
    - 컴파일 경고 발생
    ```text
    warning: [unchecked] Possible heap pollution from 
        parameterized vararg type List<String>
    ```
    - *IF* 매개변수화 타입의 변수가 타입이 다른 객체를 참조 → 힙 오염 발생

타입 안정성이 깨지니 제네릭 varargs 배열 매개변수에 값을 저장하는 것은 안전하지 않다.    
```java
static void dangerous(List<String>... stringLists) {
    List<Integer> intList = List.of(42); // JDK 9 이상
    Object[] objects = stringLists;     // 공변 stringLists 와 objects 는 같은 주소를 참조한다
    objects[0] = intList;               // 힙 오염 발생         
    String s = stringLists[0].get(0);   // ClassCastException
}
```
> stringLists 의 타입은 `java.util.List` 이다.    
> `Object[] objects = stringLists; ` 이후의    
> objects 의 타입은 `java.util.List` 이다.
> `Object[]` 에 `java.util.List` 타입을 할당할 수 있는 점이 신기했다.
> ?? List 는 Array 나 Object 를 상속하고 있지 않은데, 왜 그렇게 되는지 모르겠다. 
> 자바에서 모든 객체는 Object 의 하위 타입이라서 그런가??


그럼에도 불구하고, 제네릭 varargs 매개변수 메서드는 실무에서 매우 유용하게 쓰인다.      
자바라이브러리에서 제공하는 메서드는 타입 안전하다
- `Arrays.asList(T... a)`
- `Collections.addAll(Collection<? super T> c, T... elements)`
- `EnumSet.of(E first, E... rest)`

## @SafeVarargs
제네릭 가변인수 메서드에 대한 경고에 

자바 7 이전, `@SuppressWarnings("unchecked")`

자바 7 이후, `@SafeVarargs` 
- 메서드 작성자가 타입 안전함을 보장하는 장치

### 정의 규칙
1. 제네릭이나 매개변수화 타입의 varargs 매개변수를 받는 모든 메서드에 @SafeVarargs 를 달도록 코딩하자
    - 안전하지 않은 varargs 메서드는 작성하면 안된다.

2. 재정의할 수 없는 메서드에만 달아야 한다.
    - 자바8 에서는, 정적 메서드와, final 인스턴스에만 가능
    - 자바9 부터는, private 인스턴스 메서드에도 허용

## 제네릭 varargs 타입 안전함을 보장하는 방법
varargs 매개변수로 만들어지는 배열이, *인수를 전달하는 일만 할 때*
- 덮어쓰여지지 않는다.
- 참조가 밖으로 노출되지 않는다. (신뢰할 수 없는 코드에 노출되면 안된다)
    - 신뢰된 `@SafeVarargs` 메서드에는 참조를 넘겨도 안전하다
    
## varargs 매개변수 → List 매개변수 로 바꾸기
- 컴파일러가 메서드의 타입 안전성을 검증할 수 있다.
- @SafeVarargs 를 달지 않아도 된다.

코드가 살짝 지저분해지고 조금 느려지는 단점만 있다.

```java
static <T> List<T> flatten(List<List? extends T> lists) { 
    List<T> result = new ArrayList<>();
    for (List<? extends T> list : lists)
        result.addAll(list);    // lists 를 생산자로 쓰고 있다. PECS!
    return result;
}
```
`List.of` 
- 임의 개수의 인수를 넘길 수 있다
- `@SafeVarargs` 가 존재함
```java
audience = flatten(List.of(friends, romans, countrymen));
```
