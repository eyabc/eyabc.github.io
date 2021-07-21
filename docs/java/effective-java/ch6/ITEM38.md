---
title: 38. 확장할 수 있는 열거 타입이 필요하면 인터페이스를 사용하라  
---

## 확장할 수 있는 열거 타입
### 대부분의 상황 → 🅧
- 확장한 타입의 원소는 기반 타입의 원소로 취급하지만, 그 반대는 성립하지 않는다면 이상하지 않은가? ???
    - 펭귄(확장한 타입의 원소)은 동물(기반 타입의 원소)이다
    - 동물은 펭귄이다 X
- 기반 타입과 확장된 타입들의 원소 모두를 순회할 방법도 마땅치 않다.
- 고려할 요소가 늘어나 설계와 구현이 복잡해진다.

### *연산코드* :: 인터페이스
확장할 수 있는 열거 타입의 쓰임과 어울린다.   
 
API 가 제공하는 기본 연산 외
- 사용자 확장 연산을 추가할 수 있도록 할 수 있게 함.

*인터페이스* 를 이용해 확장 가능 열거 타입을 흉내 냈다
```java
public interface Operation {
    // 열거 타입에 따로 추상 메서드로 선언하지 않아도 된다.
    double apply(double x, double y);
}

public enum BasicOperation implements Operation {
    PLUS("+") {
        public double apply(double x, double y) { return x + y; }
    },
    MINUS("-") {
        public double apply(double x, double y) { return x - y; }
    },
    TIMES("*") {
        public double apply(double x, double y) { return x * y; }
    },
    DIVIDE("/") {
        public double apply(double x, double y) { return x / y; }
    };

    private final String symbol;
    
    BasicOperation(String symbol) {
        this.symbol = symbol;
    }

    @Override public String toString() {
        return symbol;
    }
}
``` 
- *BasicOperation* 을 확장할 수 없다
- *Operation* 을 확장하여 인터페이스를 연산의 타입으로 사용할 수 있다.
- BasicOperation 을 대체할 수 있는 또 따른 확장된 열거 타입을 사용할 수 있음
```java
public enum ExtendedOperation implements Operation {
    EXP("^") {
        public double apply(double x, double y) {
            return Math.pow(x, y);
        }
    },
    REMAINDER("%") {
        public double apply(double x, double y) {
            return x % y;
        }
    };

    private final String symbol;

    ExtendedOperation(String symbol) {
        this.symbol = symbol;
    }
    
    @Override public String toString() {
        return symbol;
    }
}
```

## 타입을 매개변수로 사용
열거 타입의 원소를 모두 사용하는 방법
 
### Class 객체와 한정적 타입토큰
```java
public static void main(String[] args) {
    double x = Double.parseDouble(args[0]);
    double y = Double.parseDouble(args[1]);
    // class 리터럴을 넘긴다.
    test(ExtendedOperation.class, x, y);
}

// 한정적 타입토큰 class 리터럴이다.
// 타입 매개변수의 선언 : Class 객체가 열거타입인 동시에 Operation 의 하위타입이어야 한다.
private static <T extends Enum<T> & Operation> void test(
    Class<T> opEnumType, double x, double y) {
    for(Operation op: opEnumType.getEnumConstants())
        System.out.printf("%f %s %f = %f%n", 
                            x, op, y, op.apply(x, y));   
}
```

### 한정적 와일드 카드 타입
*Collection<? extends Operation>* 을 넘기는 방법
```java
public static void main(String[] args) {
    double x = Double.parseDouble(args[0]);
    double y = Double.parseDouble(args[1]);
    test(Arrays.asList(ExtendedOperation.values()), x, y);
}

private static void test(Collection<? extends Operation> opSet, double x, double y) {
    for (Operation op : opSet) 
        System.out.printf("%f %s %f = %f%n", x, op, y, op.apply(x, y));  
}
```
한정적 타입토큰보다 
- 덜 복잡하고 유연하다
- 여러 구현타입의 연산을 조합해 호출할 수 있다

반면, 특정연산에서?? 는 EnumSet[36] 과 EnumMap[37] 를 사용하지 못한다??

