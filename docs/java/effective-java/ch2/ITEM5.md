---
title: 5. 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라
---

:::tip
많은 클래스가 하나 이상의 자원에 의존한다.        
- 맞춤법 검사기를 예를 들면, 맞춤법 검사기는 사전(dictionary) 에 의존한다.
 
이것을 어떻게 구현하면 좋을 지 알아보도록 하자.
:::

정적 유틸리티와 싱글턴의 사용은 **사전을 단 하나만 사용** 한다고 가정했을 때 유효하다.     
따라서 여러 사전이 있을때의 대응이 어렵다.

1. 정적 유틸리티를 잘못 사용한 예 - 유연하지 않고 테스트하기 어렵다.
```java
public class SpellChecker {
    private static final Lexicon dictionary = ...;
    private SpellChecker() {} 
    public static boolean isValid(String word) { ... }
    public static List<String> suggestions(String typo) { ... }
}
```

2. 싱글턴을 잘못 사용한 예 - 유연하지 않고 테스트하기 어렵다.
```java
public class SpellChecker {
    private final Lexicon dictionary = ...;
    private SpellChecker() {} 
    public static SpellChecker INSTANCE = new SpellChecker(...);
    public boolean isValid(String word) { ... }
    public List<String> suggestions(String typo) { ... }
}
```

SpellChecker가 여러 사전을 바꿔가며 사용할 수 있도록 setter를 추가하는 방법
- 어색하고 오류를 내기 쉽다
- 멀티쓰레드 환경에서는 쓸 수 없다


## 의존 객체 주입
SpellChecker 인스턴스 생성자에 필요한 자원 (dictionary) 를 넘겨주는 방식.

```java
public class SpellChecker {
    private final Lexicon dictionary;
    
    public SpellChecker(Lexicon dictionary) {
        this.dictionary = Objects.requireNonNull(dictionary);
    }

    // ...
}
```
- 유연성과 테스트 용이성을 높여준다.
- 불변성을 보장
- 의존성이 수천개나 되는 큰 프로젝트에서는 코드를 어지럽게 만들기도 한다.
    - 의존 객체 주입 프레임워크를 사용할 수 있다.
        - Dagger, Guice, Spring

<details>
<summary> requireNonNull</summary>
<div>
한번도 사용해 본적이 없는데, 생성자를 만들 때 이러한 동작이 얼마나 필요할까?

```java
public static <T> T requireNonNull(T obj) {
    if (obj == null)
        throw new NullPointerException();
    return obj;
}
``` 

사용 이유
- explicity (명시성)
    - 과거에 짠 코드가 미래에 사용될 때 해당 객체가 null이면 안된다는 것을 개발자가 명시적으로 알 수 있다.
- fail fast (빠른 실패)
    - 장애가 발생한 시점에서 즉시 (혹은 최대한 빠르게) 파악할 수 있는 것을 뜻한다.
    ```java
    A a = null;
    B b = new B(a);     // 생성 시점에 바로 NPE 발생
    ```
    반면 다음과 같이 requireNonNull을 사용하지 않은 경우는 어떨까?
    
    ```java
    public class C{
    
        A a;
    
        public C(A a) {
            this.a = a;     //Objects.requireNonNull 사용x
        }
    
        //...getter
    }
    ```
    바로 익셉션을 발생하지 않고 이후에 해당 객체가 사용될 때 알 수 있게 된다.
    
    ```java
    A a = null;
    C c = new C(a);
    c.getA();      // 객체 생성 이후에 늦게 NPE 발생
    ```
    이는 시스템이 복잡해 질 수록 장애를 발견하기 어렵게 만들 수 있다.    

기타 장점
- 디버깅이 용이해지고 안정성이 높아 진다.
- 항상 같은 시점에 익셉션을 발생시키는 것은 시스템의 일관성을 높이고. 개발자가 나머지 부분에 더 신경 쓸 수 있게 해준다.
- NPE를 명시적으로 던지는 것이 JVM이 발견해서 발생시키는 것 보다 성능상의 이점이 있다고 한다.

vs Optional
- Optional은 null일지도 모르는 값을 처리하는데 초점이 맞춰져 있지만
- requireNonNull은 해당 참조가 null일 경우 즉시 개발자에게 알리는 것이 목적이다.

requireNonNullElseGet
- 자바9버전 부터는 다음과 같은 메서드가 추가되면서 Optional과 비슷하게 사용이 가능하다.

</div>
</details>
   

## 생성자에 자원 팩터리를 넘겨주는 방식
### 팩터리
- 호출할 때마다, 특정 타입의 인스턴스를 반복해서 만들어 주는 객체
- 자바8 의 `Supplier<T>` 인터페이스가 팩터리를 표현.

`Mosaic create(Supplier<? extends Tile> tileFactory)`
- 클라이언트가 제공한 팩터리가 생성한 타일들로 구성된 모자이크를 만드는 메서드
```java
Mosaic flowerMosaic = mosaicCreator.create(() -> new Tile("꽃무늬"));
Mosaic checkMosaic = mosaicCreator.create(() -> new Tile("체크무늬"));

//MosaicCreator.java
public Mosaic create(Supplier<? extends Tile> tileFactory) {
    Tile tile1 = tileFactory.get();
    Tile tile2 = tileFactory.get();
    Tile tile3 = tileFactory.get();
    Tile tile4 = tileFactory.get();
    return new Mosaic(Arrays.asList(tile1, tile2, tile3, tile4));
}
```
    
    
## 요약
- 클래스가 내부적으로 하나 이상의 자원에 의존하고,     
- 그 자원이 클래스 동작에 영향을 준다면     

싱글턴과 정적 유틸리티 클래스는 사용하지 않는 것이 좋다.    
이 자원들을 클래스가 직접 만들게 해서도 안된다.

- 대신 필요한 자원을 생성자에 넘겨주자.
- 혹은 그 자원을 만들어주는 팩터리를 정적 팩터리나 빌더에 넘겨주자.

의존 객체 주입 기법은 **클래스의 유연성, 재사용성, 테스트 용이성**을 대폭 개선해준다.


Reference
---
- https://velog.io/@rockpago/Objects.requireNonNull
- https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/5_%EC%9E%90%EC%9B%90%EC%9D%84_%EC%A7%81%EC%A0%91_%EB%AA%85%EC%8B%9C%ED%95%98%EC%A7%80_%EB%A7%90%EA%B3%A0_%EC%9D%98%EC%A1%B4_%EA%B0%9D%EC%B2%B4_%EC%A3%BC%EC%9E%85%EC%9D%84_%EC%82%AC%EC%9A%A9%ED%95%98%EB%9D%BC_%ED%99%A9%EC%A4%80%ED%98%B8.md
