---
title: 40. @Override 애너테이션을 일관되게 사용하라
--- 

## @Override 
- 메서드 선언에만 달 수 있다.
- 상위 타입의 메서드를 재정의 했음을 뜻한다.

## 장점
- 재정의 한 모든 메서드에 @Override 를 의식적으로 달면, 
우리가 실수했을때 컴파일러가 바로 알려준다.


- 일관되게 사용하면 여러가지 악명 높은 버그들을 예방해 준다. 

영어 알파벳 2개로 구성된 문자열을 표현하는 클래스 - 버그를 찾아보자
```java
public class Bigram {
    private final char first;
    private final char second;

    public Bigram(char first, char second) {
        this.first = first;
        this.second = second;
    }

    public boolean equals(Bigram b) {
        return b.first == first & b.second == second;        
    }

    public int hashCode() {
        return 31 * first + second;
    }

    /*
        똑같은 소문자 2개로 구성된 바이그램 26개를 10번 반복해서 집합에 추가하고 있다.
        Set 은 중복을 허용되지 않으므로 26이 출력될 것 같지만 실제로 260이 출력된다.
    */
    public static void main(String[] args) {;
        Set<Bigram> s = new HashSet<>();
        for (int i = 0; i < 10; i++) 
            for (char ch = 'a'; ch <= 'z'; ch++)
                s.add(new Bigram(ch, ch));
        System.out.println(s.size());
    }   
}                                                                                                          b
```
equals 와 hashCode 을 재정의 *overriding* 이 아닌, 다중 정의 *overloading* [52] 을 하였기 때문
- 메서드의 시그니처가 다르다. 
- Object 의 equals 를 재정의하려면 매개변수 타입을 Object 로 해야한다.

*@Override* 를 사용하여 재정의한다는 의도를 명시한다.
```java
@Override public boolean equals(Bigram b) {
    return b.first == first && b.second == second;
}
```
이 때 매개변수가 Object 타입이 아니므로 컴파일 오류를 발견할 수 있다.
```java
@Override public boolean equals(Object o) {
    if (!(o instanceof Bigram))
        return false;
    Bigram b = (Bigram) o;
    retur b.first == first && b.second == second;
}
```
    
@Override 를 사용하면 **상위 메서드를 더 정확히 재정의** 할 수 있다.

## 추상메서드 재정의
- 굳이 @Override 를 사용하지 않아도, 재정의 관련 컴파일 오류를 알려준다.
- 일관적으로 @Override 를 붙여줘도 좋다.

## 인터페이스 메서드 재정의
디폴트 메서드를 지원하기 시작하면서,
- 인터페이스 메서드를 구현한 메서드에도 @Override 할 수 있다.

