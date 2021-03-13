# ITEM31 한정적 와일드카드를 사용해 API 유연성을 높이라

## 매개변수화 타입은 불공변 invariant
`List<Object>` 에는 어떤 객체든 넣을수 있다.
`List<String>` 에는 문자열만 넣을 수 있다.

`List<String>` 은 `List<Object>` 가 하는 일을 제대로 수행하지 못하니 하위 타입이 될 수 없다.(업캐스팅 불가)

## 불공변 방식보다 유연한, 와일드 타입 카드 타입

와일드카드 타입을 사용하지 않은 pushAll 메서드 - 결함이 있다.
```java
public class Stack<E> {
    public Stack();
    public void push(E e);
    public E pop();
    public boolean isEmpty();

    public void pushAll(Iterable<E> src) {
        for(E e : src)
            push(e);
    }
}
```

Integer 는 Number 의 하위타입이다.  
그러나 매개변수화 타입이 불공변이기 때문에 오류가 뜬다.
```java
Stack<Number> numberStack = new Stack<>();
Iterable<Integer> integers = ...;
numberStack.pushAll(integers);  // error: incompatible types
```

이럴 때, *한정적 와일드카드 타입*이라는 *매개변수화 타입*을 사용한다
- `Iterable<? extends E>` E 의 하위타입의 Iterable 
- 하위타입은 자기자신도 포함하는 의미에서 extends 는 다소 어색할 수 있다.
```java
public void pushAll(Iterable<? extends E> src) {
    for(E e : src) 
        push(e);
}
```

popAll 은 super 를 사용하였다.
```java
public void popAll(Collection<? super E> dst) {
    while(!isEmpty())
        dst.add(pop());
}
``` 

## PECS 와일드카드 타입의 기본원칙
PECS: producer-extends, consumer-super

- 원소의 생산자나 소비자용 입력 매개변수에 와일드카드 타입을 사용하라
- 유연성을 극대화 한다.

### pushAll 의 src 매개변수
- Stack 이 사용할 E 인스턴스를 생산함 
- `Iterable<? extends E>`

### popAll 의 dst 매개변수
- Stack 으로 부터 E 인스턴스를 소비함
- `Collection<? super E>`

반환타입에는 한정적 와일드카드 타입
- 사용하면 안된다.
- 클라이언트 코드에서도 와일드카드 타입을 써야 하는 문제점

## 명시적 타입 인수 explicit type arguments
```java
public static <E> Set<E> union(Set<? extends E> s1, Set<? extends E> s2)
...

Set<Integer> integers = Set.of(1, 3, 5);
Set<Double> doubles = Set.of(2.0, 4.0, 6.0);
Set<Number> numbers = union(integers, doubles); // java7 에서는 incompatible types error!
```

자바 7까지는 명시적 타입 인수를 사용해야 한다.
- 컴파일러가 올바른 타입을 추론하지 못하기 때문이다.

```java
Set<Number> numbers = Union.<Number>union<integers, doubles>;
```

자바8 부터 목표타이핑 ??(target typing) 을 지원.

## Comparable, Comparator
before ITEM30 
```java
public static <E extends Comparable<E>> E max(List<E> list)
```

after
```java
public static <E extends Comparable<? super E>> E max(List<? extends E> list)
// ...
List<ScheduledFuture<?>> scheduledFutures = ...;
```
- `List<? extends E>` 입력 매개변수는 E 인스턴스를 생산한다.
- `Comparable<? super E>>` E 인스턴스를 소비한다.
- Comparable, Comparator 은 항상 소비자

`java.util.concurrent` 패키지의 ScheduledFuture 는 
- `Comparable<ScheduledFuture>` 를 구현하지 않았다.
- 따라서, 수정 전 max 는 리스트를 처리할 수 없다.

```java
public interface Comparable<E>
public interface Delayed extends Comparable<Delayed>
public interface ScheduledFuture<V> extends Delayed, Future<V>
```

Comparable(Comparator) 를 직접구현하지 않고, 직접 구현한 다른 타입을 확장한 타입을 지원하기 위해
와일드카드가 필요하다.



## 메서드 선언에, 타입 매개변수가 한 번만 나오면 와일드카드로 대체하라
타입 매개변수와 와일드카드의 공통되는 부분이 있어서 무엇을 사용해도 괜찮을 경우
```java
public static <E> void swap(List<E> list, int i, int j);
public static void swap(List<E> list, int i, int j);
```
두 번째 방법이 간단하다.      
그러나, `list.get(i)` 에서 incompatible types 오류가 발생한다.  
`List<?>` 에는 null 이외에 어떤 값도 넣을 수 없기 때문이다.     
```java
public static void swap(List<?> list, int i, int j) {
    list.set(i, list.set(j, list.get(i)));  // error!
}
```

### private 도우미 메서드
와일드카드 타입의 실제 타입을 알려주는 메서드를 작성한다.

실제 타입을 알아내려면, 도우미 메서드는 제네릭 메서드를 사용한다.
```java
public static void swap(List<?> list, int i, int j) {
    swapHelper(list, i, j);
}

private static <E> void swapHelper(List<E> list, int i, int j) {
    list.set(i, list.set(j, list.get(i)));
}
```
 


