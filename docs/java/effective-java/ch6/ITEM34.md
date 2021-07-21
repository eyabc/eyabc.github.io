---
title: 34. int 상수 대신 열거 타입을 사용하라
---


## 정수 열거 패턴 int enum pattern
```java
public static final int APPLE_FUJI = 0;
public static final int APPLE_PIPPIN = 1;
public static final int APPLE_GRANNY_SMITH = 2;

public static final int ORANGE_NAVEL = 0;
public static final int ORANGE_TEMPLE = 1;
public static final int ORANGE_BLOOD = 2;
```

### 단점
#### 1. 타입 안전을 보장할 수 없다
아무런 경고 메세지도 출력하지 않는다.
```java
// 향긋한 오렌지 향의 사과 소스!
int i = (APPLE_FUJI - ORANGE_TEMPLE) / APPLE_PUPPIN;  
```
#### 2. 표현력이 좋지 않다.
namespace 가 없음 
- `APPLE_` `ORANGE_` 접두어를 사용해야 한다.
    
#### 3. 프로그램이 깨지기 쉽다. 
평범한 상수의 나열이다. 
- 컴파일하면 그 값이 클라이언트 파일에 그대로 새겨짐
- 상수의 값이 변하면 클라이언트도 다시 컴파일 해야 한다.

#### 4. 정수 상수는 문자열로 출력하기 다소 까다롭다.
- 디버거로 살펴보면 의미가 아닌 숫자로만 보여서 난해할 수 있다.
- 열거그룹을 순회방법이 마땅치 않다.
- 상수가 몇 개인지 알 수 없다.

## 문자열 열거 패턴 string enum pattern
상수의 의미를 출력할 수 있다.

1. 문자열 상수의 이름 대신, 문자열 값을 그대로 하드코딩 할 수 있다.
    - 하드 코딩한 문자열에 오타가 있어도 컴파일러가 확인할 수 없음 → 런타임 버그
2.  문자열 비교에 따른 성능저하

정수 열거 패턴보다 더 나쁘다

## 열거타입 enum type
일정 개수의 상수 값을 정의하고, 그 외의 값은 허용하지 않는다.

```java
public enum Apple { FUJI, PIPPIN, GRANNY_SMITH }
public enum Orange { NAVEL, TEMPLE, BLOOD }
```

정수 열거 패턴의 단점을 해소해준다. 

성능은 정수 상수와 비슷하다.
- 열거 타입을 메모리에 올리는 공간과 초기화하는 시간이 있지만, 체감될 정도는 아니다.

필요한 원소를 컴파일타임에 다 알 수 있는 상수 집합이라면 항상 열거 타입을 사용하자

### 열거 타입 자체는 클래스 이다
1. 상수 하나 당 자신의 인스턴스를 하나씩 만든다.
1. 인스턴스를 public static final 필드로 공개한다.

### 밖에서 접근할 수 있는 생성자를 제공하지 않는다
- 열거타입으로 생성된 인스턴스들은 딱 하나씩만 존재함
- 열거 타입은 인스턴스 통제된다[9]

### 컴파일 타임 타입 안전성 제공

### 네임스페이스 존재
- 이름이 같은 상수도 공존한다

### 상수의 변화가 있어도 다시 컴파일 하지 않아도 된다
새로운 상수를 추가, 순서 변경 → 다시 컴파일 하지 않아도 된다.

이유
- 공개되는 것은 오직 필드의 이름뿐이다.
- 클라이언트에게 상수 값이 컴파일 되어 각인 되지 않는다.
- 상수가 추가되도 바이너리 수준에서 호환되도록 설계되었다. 

클라이언트는 
- 다시 컴파일 하면 디버깅에서 유용한 메세지를 담은 컴파일 오류를 볼 수 있다.
- 컴파일 하지 않으면, 런타임에 유용한 메세지를 담은 예외를 발견할 수 있다.

### 열거 타입의 toString 메서드는 출력하기에 적합한 문자열을 가진다.

### 임의의 메소드/필드 를 추가할 수 있다

```java
public enum Ball {
    BASKETBALL(10, 10),
    FOOTBALL(5, 5),
    BASEBALL(3, 3)
    ;

    private final int mass;  
    private final int radius;
    private final int volume;
    
    // 상수 원주율
    private static int PI = 314;
    
    // 생성자
    Ball(int mass, int radius) {
        this.mass = mass;   
        this.radius = radius;
        volume = PI * mass / (radius * radius);
    }

    public int mass() { return mass; }
    public int radius() { return radius; }
    public int volume() { return volume; }
    
    public int weight(int mass) {
        return mass * volume;
    } 
    
}
```

합당한 이유가 없다면 private 혹은 package-private 으로 선언한다[15]

### 임의의 인터페이스를 구현하게 할 수 있다.
Object 메서드들[3장], Comparable[14], Serializable[12] 을 구현하였다. 
```java
public abstract class Enum<E extends Enum<E>>
        implements Comparable<E>, Serializable { ... }
```

### values()
자신 안에 정의된 상수들의 값을 배열에 담아 반환하는 정적 메서드를 제공
```java
public class WeightTable {
    public static void main(String[] args) {
        int basketBallWeight = Integer.parseInt(args[0]);    
        int mass = basketBallWeight / Ball.BASKETBALL.volume();
        for (Ball b : Ball.values())
            System.out.printf("%s 에서의 무게는 %d 이다. %n", p, p.weight(mass));
    }
}
```
- 값들은 선언된 순서대로 저장된다.

### 널리 쓰이는 열거 타입은 톱레벨 클래스로 만든다.

### 특정 톱레벨 클래스에만 쓰인다면 해당 클래스의 멤버 클래스로 만든다.

## 값에 따라 분기하는 열거 타입

깨지기 쉬운 코드
- 새로운 상수를 추가할 때마다 case 문을 추가해야함.
- 추가하지 않으면 런타임 오류를 낼 수 있다.
```java
public enum Operation {
    PLUS, MINUS, TIMES, DIVIDE;
    
    public double apply(double x, double y) {
        switch(this) {  
            case PLUS: return x + y;
            case MINUS: return x - y;
            case TIMES: return x * y;
            case DIVIDE: return x / y;
        }
        // 실제로 도달할 일이 없지만, 기술적으로는 도달할 수 있다.
        // 생략하면 컴파일이 되지 않음.
        throw new AssertionError("알수 없는 연산" + this);
    }
}
```

### 상수 별 메서드 구현을 활용한 열거 타입
```java
public enum Operation {
    PLUS    { public double apply(double x, double y) { return x + y; }},
    MINUS   { public double apply(double x, double y) { return x - y; }},
    TIMES   { public double apply(double x, double y) { return x * y; }},
    DIVIDE  { public double apply(double x, double y) { return x / y; }};
    
    // 추상 메서드 이므로 재정의 하지 않았다면 → 컴파일 오류
    public abstract double apply(double x, double y);
}
```

### 상수별 클래스 몸체(class body)와 데이터를 사용한 열거 타입
```java
public enum Operation {
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

    Operation(String symbol) { this.symbol = symbol; };
    @Override public String toString() { return symbol; }
    public abstract double apply(double x, double y);
}
```

### valueOf(String)
상수 이름을 입력 받아 그 이름에 해당하는 상수를 반환하는 메서드
- 자동 생성된다.

## 열거 타입용 fromString 메서드 구현하기

### fromString 메서드
toString 메서드를 재정의 할 때,      
toString 이 반환하는 문자열을, 해당 열거 타입 상수로 변환해주는 메서드도 같이 제공해보자.

```java
private static final Map<String Operation> stringToEnum = 
    Stream.of(values()).collect(
        toMap(Object::toString, e -> e);
    );

public stataic Optional<Operation> fromString(String symbol) {
    return Optional.ofNullable(stringToEnum.get(symbol));
}
```
> 열거 타입의 정적 필드 중, 오직 상수 변수 → 열거타입 생성자에 접근 가능[24]

## 전략 열거 타입 패턴
상수별 메서드 구현에는
- 열거 타입 상수끼리 코드를 공유하기 어렵다

값에 따라 분기하여 코드를 공유하는 열거 타입
```java
enum PayrollDay {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
    
    private static final int MINS_PER_SHIFT = 8 * 60;
    int pay(int minutesWorked, int payRate) {
        int basePay = minutesWorked * payRate;
        
        int overtimePay;
        switch(this) {
            case SATURDAY: case SUNDAY:     // 주말
                overtimePay = basePay / 2;
                break;
            default:    // 주중
                overtimePay = minutesWorked <= MINS_PER_SHIFT ?
                    0 : (minutesWorked - MINS_PER_SHIFT) * payRate / 2;
        }
        return basePay + overtimePay;
    }
}
```

전략 열거 타임 패턴
- switch 문 보다 복잡하지만 더 안전하고 유연하다.
```java
enum PayrollDay {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, 
    SATURDAY(PayType.WEEKEND), SUNDAY(PayTpe.WEEKEND);

    private final PayType payType;
    PayrollDay(PayType payType) { this.payType = payType; }

    int pay(int minutesWorked, int payRate) {
        return payType.pay(minutesWorked, payRate);
    }   

    enum PayType {
        WEEKDAY {
            int overtimePay(int minsWorked, int payRate) {
                return minsWorked <= MINS_PER_SHIFT ? 0 :
                    (minsWorked - MINS_PER_SHIFT) * payRate / 2;
            }
        },
        WEEKEND {
            int overtimePay(int minsWorked, int payRate) {
                return minsWorked * payRate / 2;
            }  
        }
        ;
        abstract int overtimePay(int mins, int payRate);
        private static final int MINS_PER_SHIFT = 8 * 60;
        int pay(int minsWorked, int payRate) {
            int basePay = minsWorked * payRate;
            return basePay + overtimePay(minsWorked, payRate);
        }
    }
    
}
```

## 상수별 동작의 혼합
기존 열거 타입에 상수별 동작을 혼합 해 넣을 때는 switch 문이 좋은 선택이 될 수도 있다.

서브파티의 Operation 열거타입이 있을 때,
각 연산의 반대 연산을 반환하는 메서드의 구현
```java
public static Operation inverse(Operation op) {
    switch(op) {
        case PLUS:  return Operation.MINUS;    
        case MINUS: return Operation.PLUS;
        case TIMES: return Operation.DIVIDE;
        case DEVIDE: return Operation.TIMES;
        default: throw new AssertionError("알수없는연산:" + op);
    }   
}
```
