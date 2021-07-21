---
title: 37. ordinal 인덱싱 대신 EnumMap 을 사용하라
---
배열 인덱스를 얻기 위한 방법
- *ordinal* X → *EnumMap*

다차원 관계 → *EnumMap<..., EnumMap<...>>*

애플리케이션 프로그래머는 Enum.ordinal 을 웬만해서는 사용하지 말아야 한다.[35]

## 배열 인덱스를 얻기 위한 방법
```java
class Plant {
    enum LifeCycle { ANNUAL, PERENNIAL, BIENNIAL }
    
    final String name;
    final LifeCycle lifeCycle;
    
    Plant(String name, LifeCycle lifeCycle) {
        this.name = name;   
        this.lifeCycle = lifeCycle;
    }

    @Override public String toString() {
        return name;
    }
}
```
식물을 생애주기별로 총 3개의 집합을 만들어 보자.

### ordinal() → 🅧
```java
// 1) 배열은 제네릭과 호환되지 않아 비검사 형변환[35]을 수행해야 한다.
// 깔끔하게 컴파일 되지 않을 것.
Set<Plant>[] plantsByLifeCycle
         = (Set<Plant>[]) new Set[Plant.LifeCycle.values().length];

// init
for (int i = 0; i < plantsByLifeCycle.length; i++) 
    plantsByLifeCycle[i] = new HashSet<>(); 

for (Plant p : garden)
    plantByLifeCycle[p.lifeCycle.ordinal()].add(p)

// 2) 배열은 각 인덱스의 의미를 알수 없어, 출력 결과에 직접 레이블을 달아야 한다.
// 정수는 타입 안전하지 않다. → ArrayIndexOutOfBoundException
for (int i = 0; i < plantsByLifeCycle.length; i++) {
    System.out.printf("%s: %s%n",
        Plant.LifeCycle.values()[i], plantsByLifeCycle[i]);
}
```

### EnumMap
열거 타입을 키로 사용하도록 설계한 아주 빠른 Map 구현체 

```java
// EnumMap 의 생성자가 받는 키 타입의 Class 객체
// -> 한정적 타입 토큰, 런타임 제네릭 타입 정보를 제공함[33]
Map<Plant.LifeCycle, Set<Plant>> plantsByLifeCycle = 
    new EnumMap<>(Plant.LifeCycle.class);

// init
for (Plant.LifeCycle lc : Plant.LifeCycle.values())
    plantsByLifeCycle.put(lc, new HashSet<>());

for (Plant p : garden)
    planetsByLifeCycle.get(p.lifeCycle).add(p);

System.out.printlnf(plantsByLifeCycle);
```

- 짧고 명료함
    - 맵의 키인 열거 타입 그 자체로 출력용 문자열을 제공하여 레이블이 필요 없음
- 안전함
    - 형변환을 쓰지 않는다.
- 성능도 ordinal 과 비견된다.
    - EnumMap 내부에서 배열을 사용하기 때문


### 스트림을 사용한 Map 코드 1
생애주기에 속하는 식물이 있을 때만 맵을 만든다.
```java
System.out.println(Arrays.stream(garden)
        .collect(groupingBy(p -> p.lifeCycle)));   
```
EnumMap 이 아닌 고유한 맵 구현체를 사용
- EnumMap 의 공간 성능 이점이 사라짐

> Collectors.groupingBy 메서드
> - mapFactory 매개변수에 원하는 맵 구현체를 명시해 호출 할 수 있다.

### 스트림 + EnumMap : 데이터와 열거타입의 매핑
식물의 생애주기 당 하나씩의 중첩 맵을 만든다.
```java
System.out.println(Arrays.stream(garden)
                         .collect(groupingBy(p -> p.lifeCycle, 
                                            () -> new EnumMap<>(LifeCycle.class),
                                            toSet())));
```

## 다차원 관계 : 데이터와 열거 타입쌍의 연결
한 상태에서 다른 상태로의 전이를 반환하는 프로그램을 만들어보자

### 안좋은 예: ordinal
```java
public enum Phase {
    SOLID, LIQUID, GAS;

    public enum Transition {
        MELT, FREEZE, BOIL, CONDENSE, SUBLIME, DEPOSIT;

        private static final Transition[][] TRANSITIONS = {
            { null, MELT, SUBLIME },
            { FREEZE, null, BOIL },
            { DEPOSIT, CONDENSE, null }
        };
        // 한 상태에서 다른 상태로의 전이를 반환한다.
        public static Transition from(Phase from, Phase to) {
            return TRANSITIONS[from.ordinal()][to.ordinal()];
        }

    }
}
```
- 컴파일러는 ordinal 과 배열 인덱스의 관계를 모른다.
    - Phase 나, Phase.Transition 열거 타입을 수정하면 표 TRANSITIONS 를 함께 수정하지 않거나 잘 못 수정하면 런타임 오류 발생
- ArrayIndexOutOfBoundsException, NullPointerException 을 던질 수 있다.
- 상태가지수가 늘어나면 제곱해서 null 칸도 증가한다.

### 중첩 EnumMap 데이터와 열거 타입쌍의 연결
```java
public enum Phase {
    SOLID, LIQUID, GAS;

    public enum Transition {
        MELT(SOLID, LIQUID), FREEZE(LIQUID, SOLID),
        BOIL(LIQUID, GAS), CONDENSE(GAS, LIQUID),
        SUBLIME(SOLID, GAS), DEPOSIT(GAS, SOLID);

        private final Phase from;  
        private final Phase to;

        Transition(Phase from, Phase to) {
            this.from = from;
            this.to = to;
        }
        // 이전 상태에서 "이후 상태에서 전이로의 맵" 에 대응시키는 맵
        private static final Map<Phase, Map<Phase, Transition>> m = 
                Stream.of(values())
                                          // 전이를 이전 상태를 기준으로 묶는다.
                      .collect(groupingBy(t -> t.from, 
                                         () -> new EnumMap<>(Phase.class),
                                         // 이후 상태를 전이에 대응 시키는 EnumMap 생성
                                         toMap(t -> t.to, t -> t,
                                               (x, y) -> y, 
                                               () -> new EnumMap<>(Phase.class))
                      ));
    }
}
```

새로운 상태 추가하기
```java
public enum Phase {
    SOLID, LIQUID, GAS, PLASMA;

    public enum Transition {
        MELT(SOLID, LIQUID), FREEZE(LIQUID, SOLID),
        BOIL(LIQUID, GAS), CONDENSE(GAS, LIQUID),
        SUBLIME(SOLID, GAS), DEPOSIT(GAS, SOLID),
        IONIZE(GAS, PLASMA), DEIONIZE(PLAZMA, GAS);
        // ...
    }
}
```
