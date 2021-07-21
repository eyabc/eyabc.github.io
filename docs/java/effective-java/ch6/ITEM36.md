---
title: 36. 비트 필드 대신 EnumSet 을 사용하라
---

## 비트 필드 열거 상수 - 오래된 기법
- 열거한 값들이 주로 집합으로 사용될 경우
- 각 상수에서 서로 다른 *2 의 거듭제곱 값*을 할당한 정수 열거 패턴[34] 을 사용하였다.

### bit field 
비트 별 OR 을 사용해 여러 상수를 하나의 집합으로 모을 수 있다.
```java
public class Text {
    public static final int STYLE_BOLD          = 1 << 0;   // 1
    public static final int STYLE_ITALIC        = 1 << 1;   // 2 
    public static final int STYLE_UNDERLINE     = 1 << 2;   // 4 
    public static final int STYLE_STRIKETHROUGH = 1 << 3;   // 8 

    // 매개변수 styles 는 0 개 이상의 STYLE_ 상수를 비트별 OR한 값이다.
    public void applyStyles(int styles);
}

text.applyStyles(STYLE_BOLD | STYLE_ITALIC);
```

- 합집합, 교집합같은 집합연산을 효율적으로 수행
- 정수 열거 상수의 단점을 지닌다
- 비트 필드 값이 그대로 출력 되면 단순 정수열거상수보다 해석하기 훨씬 어렵다
- API 를 수정하지 않고는 비트 수를 더 늘릴 수 없다.
    - 최대 몇 비트까지 필요한지 API 작성시 미리 예측하여 적절한 타입을 선택해야 한다.

## EnumSet
열거 타입 상수의 값으로 구성된 집합을 효과적으로 표현 가능

### 특징
1. Set 인터페이스를 완벽히 구현함
![image](https://user-images.githubusercontent.com/31977543/111162750-cc7edf00-85df-11eb-9630-3a47474f39b9.png)

2. 타입 안전함
3. 다른 Set 구현체와도 함께 사용 가능
4. 비트 벡터로 구현됨
    - 원소가 64개 이하라면, 대부분의 경우 EnumSet 전체를 long 변수 하나로 표현하여 비트필드에 비견되는 성능을 가짐
    - 대량작업 removeAll, retainAll → 비트를 효율적으로 처리할 수 있는 산술연산으로 구현됨 
5. 비트를 직접 다룰 때 흔히 겪는 오류들에서 해방됨
```java
public class Text {
    public enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }
    
    // 어떤 Set 을 넘겨도 되나, EnumSet 이 가장 좋다.
    public oid applyStyles(Set<Style> styles){ ... }
}

text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC));
```

### Immutable EnumSet
`Collections.unmodifiableSet` 으로 EnumSet 을 감싸 사용할 수 있다.

Reference
-
- https://www.baeldung.com/java-enumset

