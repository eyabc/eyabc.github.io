---
title: 20. 추상 클래스보다는 인터페이스를 우선하라
---

:::tip
- 다중 구현용 타입 → 인터페이스가 가장 적합
- 복잡한 인터페이스 → 골격 구현을 함께 제공
- 골격 구현은 가능한 한 디폴트 메서드로 제공
:::

## 자바의 다중 구현 매커니즘
1. 인터페이스
2. 추상클래스

### 인터페이스와 추상클래스의 공통점
1. 인스턴스 메서드를 구현 형태로 제공 가능
    - 인터페이스는 자바8부터 default method 제공 
2. 인스턴스로 생성이 불가능하다.
3. 선언부만 있는 추상 메서드를 갖는다.

### 인터페이스와 추상클래스의 차이점
:::note 0. 목적
**추상 클래스**
- 추상 클래스를 상속받아 기능을 이용하고 확장시켜야한다.

**인터페이스**
- 구현을 강제해서 구현 객체가 같은 동작을 하도록 보장한다.
:::

:::note 1. 새로운 타입의 정의
**추상클래스**
- 추상 클래스의 하위 클래스
    - 추상클래스가 정의한 타입을 구현하는 클래스 
- 새로운 타입 정의에 제약 존재   
    - 자바는 단일 상속만 지원

**인터페이스**
- 인터페이스의 규약을 잘 지킨 클래스     
→ 어떤 클래스를 상속했든 같은 타입으로 취급
:::

 
:::note 2. 기존 클래스에서의 구현
**인터페이스 → 쉽다**
1. 인터페이스가 요구하는 메서드 추가
2. 클래스 선언에 implements 구문 추가

**추상 클래스 → 어렵다**
- 계층 구조상 클래스의 공통 조상을 찾는다.
- 새로 추가된 추상 클래스의 모든 자손이 이를 상속하게 하는 것은 어렵다.
```java
// 만약 여기서 추상 클래스 Person을 확장해야한다면?
public class Amy extends Student {
  // ...
}

public class Jason extends Student {
  // ...
}

abstract class Student {
	// ...
}

// 이렇게??
public abstract class Person {
  public abstract void walk();
}

abstract class Student extends Person {
	// ...
}

// Student를 상속 받았던 객체들은 모두 walk()이라는 메소드의 구현을 해야한다.
public class Amy extends Student {
  // ...
}
```
:::

:::note 3. mixin
클래스가 구현할 수 있는 타입
- 원래의 주타입 외에 특정 선택적 행위를 제공(혼합; mixed in) 한다고 선언하는 효과 제공

**인터페이스**
- 안성맞춤
- 예) Comparable 은 자신을 구현한 클래스의 
    - **인스턴스들끼리는 순서를 정할 수 있다고 선언** 한 믹스인 인터페이스

**추상 클래스**
- 믹스인을 정의할 수 없다.
- 기존 클래스에 덧씌울 수 없기 때문
- 클래스는 두 부모를 섬길 수 없음
- 클래스 계층 구조 → 믹스인을 삽입하기에 합리적인 위치가 없음

```java
public class Amy extends Student implements Comparable {

  @Override
  public int compareTo(Object o) {
    return 0;
  }
}
// 만약 Comparable이 추상 클래스라면?
public abstract class Comparable<T> {
  public abstract int compareTo(T o);
}

// 들어갈 자리가 없다! 😱
public class Amy extends Student {
	// ...
}
```
:::

:::note 4. 인터페이스로는 계층구조가 없는 타입 프레임워크를 만들 수 있다.
```java
public interface Singer {
    AudioClip sing(Song s);
}

public interface Songwriter {
    Song compose(int chartPosition);
}
```

타입을 인터페이스로 정의
- Singer 와 Songwriter 모두를 구현해도 전혀 문제되지 않는다.
- 제3의 인터페이스 정의 
```java
public interface SingerSongwriter extends Singer, Songwriter {
    AudioClip strum(); 
    void actSensitive();
}
```
:::

## 인터페이스 디폴트 메서드
:::note 인터페이스 디폴트 메서드
인터페이스의 메서드 중 **구현 방법이 명백한 것**   
:::
→ 프로그래머의 일감을 덜어줄 수 있다.

- 디폴트 메서드를 제공할 땐 → **문서화 필요**

```java
public interface Student {
  public void study();
  public default void syaHello() {
    System.out.println("안녕하세요");
  }
}
```

:::caution 인터페이스 디폴트 메서드의 제약사항
1. `equals`, `hashCode` 는 디폴트 메서드로 제공할 수 없다.
2. 인터페이스는 인스턴스 필드와, public 이 아닌 정적 멤버를 가질 수 없다. 
1. Java 9 이후부터는 private static 메서드도 구현이 가능하게 변경되었다.
3. 우리가 만들지 않은 인터페이스에는 디폴트 메서드를 추가할 수 없다.
:::

## 추상 클래스는 언제 사용하는게 좋을까?
1. 추상 클래스는 인터페이스와 달리 프로퍼티를 정의할 수 있다. 
    - 참고로 인터페이스도 프로퍼티를 정의할 수 있지만 기본적으로 public static 형태로 정의된다 (상수취급)
    - 추상 클래스의 구현 클래스는 추상 클래스가 가진 프로퍼티에 접근할 수 있다.

2. protected 추상 메서드를 정의할 수 있다.
    - 인터페이스에서는 protected 접근자를 사용할 수 없다.

위 두 특징으로 가장 잘 활용할 수 있는 방법이 바로 템플릿 메서드 패턴이다.

## 템플릿 메서드 패턴
:::note 템플릿 메서드 패턴
인터페이스 + 추상 골격 구현 (skeletal implementation) 클래스
- 인터페이스와 추상 클래스의 장점을 모두 취하는 방법
:::
- 인터페이스 → 타입 정의, 디폴트 메서드 제공
- 골격 구현 클래스 → 나머지 메서드 구현

### 네이밍
- 인터페이스 Interface
- 골격 구현 클래스 AbstractInterface
    - AbstractCollection, AbstractList, AbstractSet, AbstractMap

### 골격 구현 클래스
Map.Entry 인터페이스 
- 디폴트 메서드의 기반 메서드 
    - getKey, getValue, [setValue]
- 골격 구현 클래스의 기반 메서드 
    - Object 메서드들 
    - equals, hashCode, toString  

```java
public abstract class AbstractMapEntry<K, V> implements Map.Entry<K, V> {

    // 변경 가능한 엔트리는 이 메서드를 반드시 재정의 해야함
    @Override public V setValue(V value) {
        throw new UnsupportedOperationException();
    }
    // Map.Entry.equals 의 일반 규약을 구현함.
    @Override public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Map.Entry))
            return false;
        // ...
    }   
    @Override public int hashCode() {
        // Map.Entry.hashCode 의 일반 규약을 구현함
    }
    
    @Override public String toString() {
        return getKey() + "=" + getValue();
    }

}
```

### 골격 구현 클래스의 문서화
:::tip
골격 구현은 기본적으로 **상속**해서 사용하는 것을 가정함 
:::
- [19](/docs/java/effective-java/ch4/ITEM19) 설계 및 문서화 지침을 모두 따라야 함.


### 골격 구현을 사용해 완성한 구체 클래스
List 구현체를 반환하는 정적 팩터리 메서드, AbstractList 골격 구현으로 활용함.
```java
static List<Integer> intArrayAsList(int[] a) {
    Objects.requireNonNull(a);

    // 다이아몬드 연산자 <>, 자바9 부터 가능
    return new AbstractList<>() {
        @Override public Integer get(int i) {
            return a[i];    // 오토박싱
        }
    
        @Override public Integer set(int i, Integer val) {
            int oldVal = a[i];
            a[i] = val;     // 오토언박싱
            return oldVal;  // 오토박싱
        }
    
        @Override public int size() {
            return a.length;
        }   
    };
}
```

### 골격 구현 클래스의 의의
- 추상 클래스처럼 구현을 도와줌
- 추상 클래스로 타입을 정의할 때의 제약에서 벗어남

### 시뮬레이트한 다중상속 simulated multiple inheritance
1. 인터페이스를 구현한 클래스에서 **해당 골격 구현을 확장한 private 내부 클래스를 정의함** 
1. **각 메서드 호출을 내부 클래스의 인스턴스에 전달**

래퍼 클래스와 비슷한 방식

```java
public class PhoneManufacturer {
  public void printManuFacturer() {
    System.out.println("Made by Apple");
  }
}

// 골격 구현을 확장한 클래스
public class InnerAbstractPhone extends AbstractPhone {

  @Override
  public void greeting() {
    System.out.println("I am iPhone");
  }
}

public class IPhone extends PhoneManufacturer implements Phone {
  InnerAbstractPhone innerAbstractPhone = new InnerAbstractPhone(); // 내부 클래스로 정의

  @Override
  public void booting() {
    innerAbstractPhone.booting();
  }

  @Override
  public void greeting() {
    innerAbstractPhone.greeting();
  }

  @Override
  public void shutdown() {
    innerAbstractPhone.shutdown();
  }

  @Override
  public void process() {
    printManuFacturer();
    innerAbstractPhone.process();
  }
}
```

### 골격 구현의 작성
1. 인터페이스의 기반 메서드를 선정함
2. 기반 메서드들을 사용해 직접 구현할 수 있는 메서드 → 디폴트 메서드로 제공
    - 기반 메서드를 모두 디폴트 메서드로 구현하였다면 골격 구현 클래스의 작성이 필요 없다.
3. 나머지 기반 메서드 → 골격 구현 클래스에 작성
    - 골격 구현 클래스에는 필요하면 public 이 아닌 필드와 메서드를 추가할 수 있다.
    

Reference
---
- https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/20_%EC%B6%94%EC%83%81_%ED%81%B4%EB%9E%98%EC%8A%A4_%EB%B3%B4%EB%8B%A4%EB%8A%94_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%A5%BC_%EC%9A%B0%EC%84%A0%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md
- https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/20_%EC%B6%94%EC%83%81%ED%81%B4%EB%9E%98%EC%8A%A4%EB%B3%B4%EB%8B%A4%EB%8A%94_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%A5%BC_%EC%9A%B0%EC%84%A0%ED%95%98%EB%9D%BC_%EB%B0%95%EA%B2%BD%EC%B2%A0.md
