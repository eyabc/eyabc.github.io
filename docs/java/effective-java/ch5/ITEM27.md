# ITEM27 비검사 경고를 제거하라

## 제너렉의 컴파일 경고들
- 비검사 형변환 경고
- 비검사 메서드 호출 경고
- 비검사 매개변수화 가변인수타입 경고
- 비검사 변환 경고

## unchecked warning
*unchecked warning, 확인되지 않은 경고, [비검사 경고](https://stackoverflow.com/questions/1129795/what-is-suppresswarnings-unchecked-in-java)*
  
cast 로 인해, 프로그램이 다른 곳에서 예외를 throw 할 수 있음을 프로그래머에게 알려준다.

- 비검사 경고를 모두 제거했을 때
    - 타입 안전성 보장
    - 런타임에 *ClassCastException* 이 나타나지 않고 의도대로 잘 동작한다.

## 비검사 경고 제거
`new HashSet()` 의 타입 매개변수를 명시하지 않았다.    
```java
Set<Lark> exaltation = new HashSet();
```
다음은 잘못된 코드임을 컴파일러를 통해 알 수 있다.       
(javac 명령줄 인수에 -Xlint:uncheck 옵션 추가) 
```text
...java:line: waring: [unchecked] unchecked conversion
    Set<Lark> exaltation = new HashSet();
required: Set<Lark>
found: HashSet
```

```java
Set<Lark> exaltation = new HashSet<Lark>();
```
혹은 자바7 부터, **다이아몬드 연산자`<>`** 사용 → 컴파일러가 타입 매개변수 추론
```java
Set<Lark> exaltation = new HashSet<>();
```

## @Suppress Warnings("unchecked")
### 사용 상황
- 경고를 제거할 수는 없고,
- 타입 안전의 확신이 있을 경우
    - 경고를 무시해도 안전한 이유를 항상 주석으로 남겨야 한다.

위와 같은 경우에 사용을 하지 않으면,
- 제거하지 않은 수 많은 경고 → 진짜 문제를 알리는 새로운 경고가 파묻힐 수도 있음


### 사용 범위
**모든 선언**에서 사용가능
- 개별 지역변수 선언 ~ 클래스 선체 선언

가능한한 **좁은 범위**에 적용해야 함.
- 변수 선언
- 아주짧은 메서드
- 생성자

클래스 전체에 적용할 경우
- 자칫 심각한 경고를 놓칠 수 있다.

### 한줄이 넘는 메서드/생성자의 @SuppressWarnings
한줄이 넘는 메서드/생성자의 @SuppressWarnings 는 지역 변수 선언 쪽으로 옮긴다

```java
public <T> T[] toArray(T[] a) {
    if (a.length < size) 
        return (T[]) Arrays.copyOf(elements, size, a.getClass());
    System.arraycopy(elements, 0, a, 0, size);
    if (a.length > size)
        a[size] = null;
    return a;
}
```
ArrayList 를 컴파일 하면, 다음 경고가 발생한다.
```text
Array.List.java:305: warning: [unchecked] unchecked cast
    return (T[]) Arrays.copyOf(elements, size, a.getClass());
required: T[]
found: Object[]
```

지역 변수를 추가해 @SuppressWarnings 의 범위를 좁힌다.
```java
public <T> T[] toArray(T[] a) {
    if (a.length < size) {
        @SuppressWarnings("unchecked") 
        T[] result = (T[])Arrays.copyOf(elements, size, a.getClass());
        return result;
    }
    // ...
}
```
