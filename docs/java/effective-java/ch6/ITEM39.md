---
title: 39. 명명 패턴보다 애너테이션을 사용하라
---

애너테이션으로 할 수 있는 일을 명명 패턴으로 처리할 이유는 없다.

자바 프로그래머라면 예외 없이 자바가 제공하는 애너테이션 타입들을 사용해야 한다.

전통적 도구와 프레임워크 ~JUnit3
- 테스트 메서드 이름을 *test* 로 시작해야 한다.

## 명명 패턴의 단점
1. 오타가 나면 테스트 안함 → 성공했다고 오해 가능
2. 올바른 프로그램 요소에서만 사용되리라 보증할 방법이 없다.
    - JUnit3 에서, test 를 메서드가 아닌 클래스의 이름에 붙이면 동작하지 않는다.
3. 프로그램 요소를 매개변수로 전달할 방법이 마땅하지 않다.
    - 특정 예외를 던져야만 성공하는 테스트
        - 기대하는 예외 타입을 테스트에 매개변수로 전달해야 하는 상황

## 애너테이션
JUnit4 ~

### 메타애너테이션 meta-annotation
*@Retention(RetentionPolicy.RUNTIME)*
- *@Test* 가 런타임에도 유지되어야 한다는 의미

*@Target(ElementType.METHOD)*
- *@Test* 가 반드시 메서드 선언에서만 사용돼야 한다.

### 마커 (marker) 애너테이션 타입 선언
아무 매개변수 없이 단순히 대상에 마킹한다는 뜻

테스트 메서드임을 선언하는 애너테이션
```java
import java.lang.annotation.*;

// 매개변수 없는 정적 메서드 전용
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Test { }
```

*매개변수 없는 정적 메서드 전용* 주석을 단 이유
- 컴파일러가 강제할 수 없기 때문
- 직접 애너테이션 처리기를 구현해야 함
- *javax.annotation.processing API* 문서 참고

#### 사용 예
```java
public class Sample {
    @Test public static void m1() { }   // tobe Success

    public static void m2() { }         // ignored

    @Test public static void m3() {     // tobe Fail
        throw new RuntimeException("Fail");
    }

    public static void m4() { }         // ignored
    
    @Test public void m5() { }          // 잘못 사용한 예 : 정적 메서드가 아니다

    public static void m6() { }         // ignored
    
    @Test public static void m7() {     // tobe Fail
        throw new RuntimeException("Fail");   
    }

    public static void m8() { }         // ignored
}
```

#### 마커 애너테이션을 처리하는 프로그램
```java
import java.lang.reflect.*;

public class RunTests {
    public static void main(String[] args) throws Exception {
        int test = 0;
        int passed = 0;
        Class<?> testClass = Class.forName(args[0]);
        for (Method m : testClass.getDeclatedMethods()) {
            if (m.isAnnotationPresent(Test.class)) {
                tests++;
                try {
                    m.invoke(null);
                    passed++;                

                // 테스트 메서드가 예외를 던지면, 
                // 리플렉션 매커니즘?? 이 InvocationTargetException 으로 감싸서 다시 던진다.
                } catch(InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    System.out.println(m + "실패: " + exc);
                } catch (Exception exc) {
                    System.out.println("잘못 사용한 @Test: " + m);                    
                }
            }
        }
        System.out.println("성공: %d, 실패\: %d%n", passed, tests - passed);
    }
}
```

### 매개변수 하나를 받는 애너테이션 타입
명시한 예외를 던져야만 성공하는 테스트 메서드용 애너테이션
```java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface ExceptionTest {
    Class<? extends Throwable> value();
}
```

*Class<? extends Throwable> value();*
- 애너테이션의 매개변수 타입
- 모든 예외(오류) 타입을 다 수용한다.

#### 사용예
```java
public class Sample2 {
    @ExceptionTest(ArithmeticException.class)
    public static void m1() {                   // tobe Success
        int i = 0;
        i = i / i;
    }

    @ExceptionTest(ArithmeticException.class)
    public static void m2() {                   // tobe Fail
        int[] a = new int[0];
        int i = a[1];                           // not a ArithmeticException
    }   

    @ExceptionTest(ArithmeticException.class)
    public static void m3() { }                 // tobe Fail (not throws a Exception)

}
```

#### 애너테이션 처리기
```java
import java.lang.reflect.*;

public class RunTests {
    public static void main(String[] args) throws Exception {
        int test = 0;
        int passed = 0;
        Class<?> testClass = Class.forName(args[0]);
        for (Method m : testClass.getDeclatedMethods()) {
            if (m.isAnnotationPresent(ExceptionTest.class)) {
                tests++;
                try {
                    m.invoke(null);
                    System.out.println("테스트 %s 실패: 예외를 던지지 않음%n", m);
                } catch(InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    Class<? extends Throwable> excType = 
                            m.getAnnotation(ExceptionTest.class).value();

                    if (excType.isInstance(exc)) {
                        passed++;
                    } else {
                        System.out.println("테스트 %s 실패: 기대한 예외 %s, 발생한 예외 %s%n",
                                                    m, excType.getName(), exc);
                    }
                } catch (Exception exc) {
                    System.out.println("잘못 사용한 @ExceptionTest: " + m);                    
                }
            }
        }
        System.out.println("성공: %d, 실패\: %d%n", passed, tests - passed);
    }
}
```

### 배열 매개변수를 받는 애너테이션 타입 1
```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @intereface ExceptionTest {
    Class<? extends Throwable>[] value();
}
```
#### 사용 예
```java
@ExceptionTest({ IndexOfOutOfBoundsException.class, NullPointerException.class })
public static void doublyBad() {
    List<String> list = new ArrayList<>();

    // will throws a IndexOutOfBoundsException or NullPointerException
    list.addAll(5, null);       
}
```

#### 애네테이션 처리기
```java
import java.lang.reflect.*;

public class RunTests {
    public static void main(String[] args) throws Exception {
        int test = 0;
        int passed = 0;
        Class<?> testClass = Class.forName(args[0]);
        for (Method m : testClass.getDeclatedMethods()) {
            if (m.isAnnotationPresent(ExceptionTest.class)) {
                tests++;
                try {
                    m.invoke(null);
                    System.out.println("테스트 %s 실패: 예외를 던지지 않음%n", m);
                } catch(InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    int oldPassed = passed;

                    Class<? extends Throwable>[] excTypes = 
                            m.getAnnotation(ExceptionTest.class).value();

                    for (Class<? extends Throwable> excType : excTypes) {
                        if (excType.isInstance(exc)) {
                            passed++;
                            break;
                        }
                    }

                    if (passed == oldPassed)
                        System.out.println("테스트 %s 실패: %s%n", m, exc);
                } catch (Exception exc) {
                    System.out.println("잘못 사용한 @ExceptionTest: " + m);                    
                }
            }
        }
        System.out.println("성공: %d, 실패\: %d%n", passed, tests - passed);
    }
}
```

### 배열 매개변수를 받는 애너테이션 타입 2 *@Repeatable*
*@Repeatable*
- 하나의 프로그램 요소에 여러 번 달 수 있다

컨테이너 애너테이션
- 내부 애너테이션 타입의 배열을 반환하는 value 메서드를 정의해야 한다. 
```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface ExceptionTestContainer {
    ExceptionTest[] value();
}
```

반복 가능한 애너테이션
```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)

// @Repeatable 에 이 컨테이너 애너테이션의 class 객체를 매개변수로 전달해야 한다.
@Repeatable(ExceptionTestContainer.class)
public @interface ExceptionTest {
    Class<? extends Throwable> value();
}
```

#### 반복 가능한 애너테이션을 두 번 단 코드 
```java
@ExceptionTest(IndexOutOfBoundsException.class)
@ExceptionTest(NullPointerException.class)
public static void doublyBad() { ... }
```

#### 애너테이션 처리기
```java
import java.lang.reflect.*;

public class RunTests {
    public static void main(String[] args) throws Exception {
        int test = 0;
        int passed = 0;
        Class<?> testClass = Class.forName(args[0]);
        for (Method m : testClass.getDeclatedMethods()) {
            if (m.isAnnotationPresent(ExceptionTest.class) 
                || m.isAnnotationPresent(ExceptionTestContainer.class)) {
                tests++;
                try {
                    m.invoke(null);
                    System.out.println("테스트 %s 실패: 예외를 던지지 않음%n", m);
                } catch(InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    int oldPassed = passed;

                    ExceptionTest[] excTests = 
                        m.getAnnotationsByType(ExceptionTest.class);

                    for (ExceptionTest excTest : excTests) {
                        if (excType.value().isInstance(exc)) {
                            passed++;
                            break;
                        }
                    }

                    if (passed == oldPassed)
                        System.out.println("테스트 %s 실패: %s%n", m, exc);
                } catch (Exception exc) {
                    System.out.println("잘못 사용한 @ExceptionTest: " + m);                    
                }
            }
        }
        System.out.println("성공: %d, 실패\: %d%n", passed, tests - passed);
    }
}
```
