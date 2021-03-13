# ITEM28 배열보다는 리스트를 사용하라

배열과 제네릭타입의 차이점

## 배열 → 공변, 제네릭타입 → 불공변

### 배열, 공변 covariant (함께 변한다)
Sub 가 Super 의 하위 타입이면 → Sub[] 는 Super[] 의 하위 타입이다.

### 제네릭, 불공변 invariant
서로 다른 타입 Type1, Type2 가 있을 때, `List<Type1>` 은 `List<Type2>` 의 하위 타입도 아니고 상위타입도 아니다.

## 배열 → 런타임에 실패, 제네릭타입 → 컴파일에 실패
배열과 제네릭타입 모두 Long 저장소에 String 을 넣을 수는 없다. 그러나 컴파일시에 알아 차리는 것이 선호된다.

### 배열은 런타임에 실패한다.
```java
Object[] objectArray = new Long[1];
objectArray[0] = "타입이 달라 넣을 수 없다."  // ArrayStoreException 을 던진다.
```
### 제네릭타입은 컴파일 되지 않는다.
```java
List<Object> ol = new ArrayList<Long>();    // 호환되지 않는 타입이다.
ol.add("타입이 달라 넣을 수 없다.");
```

## 배열 → 실체화가능 reify
배열은 런타임에도 자신이 담기로 한 원소의 타입을 인지하고 확인함.
- 런타임에 Long 배열에 String 을 넣으려 하면 ArrayStoreException 발생

## 제네릭, 타입정보가 런타임에 소거 erasure
원소타입을 컴파일에만 검사한다.

소거
- 제네릭 지원이전, 레거시 코드와 제네릭 타입을 함께 사용할 수 있도록 해주는 매커니즘 [26]

## 배열과 제네릭은 잘 어우러지지 못한다.
배열은 제네릭타입, 매개변수화타입, 타입 매개변수로 사용불가       
`new List<E>[]`, `new List<String>[]`, `new E[]` 
- 컴파일시, 제네릭 배열 생성 오류 발생

### 제네릭 배열 → 타입 불안전 → 금지
런타임에 ClassCastException 방지하는 제네릭 타입 시스템에 어긋남

제네릭 배열 생성을 허용하지 않는 이유 - 컴파일 되지 않는다.
```java
// (1) 제네릭 배열 생성이 가능하다고 가정
List<String>[] stringLists = new List<String>[1]; 

// (2) 원소가 하나인 List<Integer> 생성
List<Integer> intList = List.of(42);                

// (3) (1) 에서 생성한 List<String> 배열을 Object 배열에 할당 
// 배열은 공변이니 아무 문제 없다.
Object[] objects = stringLists;

// (4) (2) 에서 생성한 List<Integer> 인스턴스를 Object 배열의 첫 원소로 저장
// 제네릭은 소거방식이므로, 성공함
objects[0] = intList;

// 런타임에 
// List<Integer> 인스턴스 타입 → List 
// List<Integer>[] 인스턴스 타입 → List[]

// (5) stringLists 는 List<String>[] 만 담기로 하였지만, List<Integer> 인스턴스가 저장되있음
// 컴파일러가 첫 원소를 꺼낼 때 String 으로 형변환 한다. 그러나 Integer 원소이므로 런타임에 ClassCastException 이 발생함.
String s = stringLists[0].get(0);
```

## 실체화 불가 타입 `E` `List<E>` `List<String>` non-reifiable type 
실체화 되지 않아서, 런타임에는 컴파일타임보다 타입정보를 적게 가진다.

### 비한정적 와일드카드 `List<?>` `Map<?,?>`
소거 매커니즘 때문에 매개변수화타입이지만 실체화 될 수 있는 타입

배열을 비한정적 와일드카드 타입으로 만들 수 있지만 유용하게 쓸 일은 거의 없다.

## 제네릭 배열이 없어 아쉬운 점
1. 제네릭 컬렉션에서는, 자신의 원소 타입을 담은 배열을 반환하는 것이 보통은 불가능하다. ??
2. 제네릭타입과 가변인수 메서드(varargs method [53]) 를 함께 쓰면 해석하기 어려운 경고 메세지를 받게된다.
    - 가변인수 메서드를 호출할 때마다 가변인수 매개변수를 담을 배열이 하나 생성된다.
    - 그 배열의 원소가 실체화 불가 타입이라면 경고가 발생한다.
    - @SafeVarargs 로 대처 가능

## 배열을 리스트로 대체하자
제네릭 배열 생성 오류나, 비검사 형변환 경고가 뜨는 경우는 대부분 
- 배열인 `E[]` 대신 컬렉션인 `List<E>` 를 사용하면 해결 된다.
- **조금** 코드가 복잡/성능 저하
- 타입 안전성과 상호운용성의 향상
 
### 제네릭 컬렉션을 배열로 형변환 문제
생성자에서 컬렉션을 받는 Chooser 클래스 - 제네릭을 시급히 적용해야 한다
```java
public class Chooser { 
    private final Object[] choiceArray;
    
    public Chooser(Collection choices) {
        choiceArray = choices.toArray();
    }
    
    // 클라이언트는, 반환된 Object 를 사용할 때마다 원하는 타입으로 형변환 해야 함
    // 형변환 오류가 날 가능성이 큼  
    public Object choose() {
        Random rnd = ThreadLocalRandom.current();
        return choiceArray[rnd.nextInt(choiceArray.length)]; 
    }
}
```

Chooser 를 제네릭으로 만들기 위한 첫 시도 - 컴파일 되지 않는다.
```java
public class Chooser<T> {
    private final T[] choiceArray;
    
    public Chooser(Collection<T> choices) {
        choiceArray = (T[]) choices.toArray();
    }
    // ...
}
```
컴파일러는, T 가 무슨타입인지 알 수 없으니 형변환이 런타임에도 안전한지 보장할 수 없다는 메세지
```shell script
Chooser.java:9: warning: [unchecked] unchecked cast;
        choiceArray = (T[]) choices.toArray();            
    requried: T[], found: Object[];
    where T is a type-variable:
T extends Object declared in class Chooser
```

코드를 작성하는 사람이 안전하다고 확신한다면 주석을 남기고 애너테이션을 달아 경고를 숨겨도 된다.      
그러나 경고의 원인을 제거하는 편이 훨씬 낫다.

비검사 형변환 경고 제거 → 배열 대신 리스트 사용
```java
public class Chooser<T> {
    private final List<T> choiceList;
    public Chooser(Collection<T> choices) {
        choiceList = new ArrayList<>(choices);
    }
    
    public T choose() {
        Random rnd = ThreadLocalRamdom.current();
        return choiceList.get(rnd.nextInt(choiceList.size()));
    }
}
```
