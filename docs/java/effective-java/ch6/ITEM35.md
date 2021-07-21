---
title: 35. ordinal 메서드 대신 인스턴스 필드를 사용하라
---

## ordinal 메서드
해당 상수가 그 열거 타입이 몇 번째 위치인지 반환하는 메서드

### 유지보수가 어렵다
- 상수 선언순서를 바꾸면 오동작 하는 코드
```java
public enum Ensemble {
    SOLO, DUET, TRIO, QUARTET, QUINTET,
    SEXTET, SEPTET, OCTET, NONET, DECTET;

    public int numberOfMusicians() { return ordinal() + 1; } 
}
```

## 열거 타입 상수에 연결된 값은 인스턴스 필드에 저장하자
```java
public enum Ensemble {
    SOLO(1), DUET(2), TRIO(3), QUARTET(4), QUINTET(5),
    SEXTET(6), SEPTET(7), OCTET(8), NONET(9), DECTET(10), TRIPLE_QUARTET(12);

    private final int numberOfMusicians = size;
    Ensemble(int size) { this.numberOfMusicians = size; }
    public int numberOfMusicians() { return ordinal() + 1; } 
}
```

## Enum API ordinal
대부분 프로그래머는 이 메서드를 쓸 일이 없다.

EnumSet EnumMap 같이 열거 타입 기반의 범용 자료구조에 쓸 목적으로 설계되었다.
