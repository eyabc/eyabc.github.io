---
title: 25. 톱레벨 클래스는 한 파일에 하나만 담으라
---

## 한 파일에 멀티 톱레벨 클래스
- 컴파일러 에러는 안난다.
- 아무런 득이 없다
- 심각한 위험이 있을 수 있다.

```java title="Utensil.java"
class Utensil {
    static final String NAME = "pan";
}
class Dessert {
    static final String NAME = "cake";
}
```
```java title="Dessert.java"
class Utensil {
    static final String NAME = "pot";
}
class Dessert {
    static final String NAME = "pie";
}
```

**똑같은 클래스의 이름을 가지고 있는 두가지 파일**이 존재할 때, 아래 컴파일 결과는 무엇일까? 
```java
public class Main {
    public static void main(String[] args) {
        System.out.println(Utensil.NAME + Dessert.NAME); // what ??
    }   
}
```
### 컴파일러에 넣는 명령어의 소스파일 순서에 따라 동작이 달라지는 문제

#### `javac Main.java Dessert.java`  
- 컴파일 오류, Utensil, Dessert 클래스의 중복 정의를 알림
- 컴파일러는 `Main.java` 를 컴파일 한다.
- 그 안에서 Dessert 참조보다 먼저 나오는 Utensil 참조를 만나면 `Utensil.java` 파일의 Utensil 과 Dessert 를 찾아냄
- 컴파일러가 두 번째 명령줄 인수로 넘어온 `Dessert.java` 를 처리하려 할 때, 같은 클래스의 정의를 감지한다.

#### `javac Main.java`, `javac Main.java Utensil.java` 
- pencake 출력

#### `javac Dessert.java Main.java` 
- potpie 출력


## 문제 해결
톱레벨 클래스 (Utensil, Dessert) 를 서로 다른 소스 파일로 분리한다

- 굳이 한파일에 담고 싶으면 정적 멤버 클래스[24](/docs/java/effective-java/ch4/ITEM24) 를 사용한다
```java
public class Test {
    public static void main(String[] args) {
        System.out.println(Utensil.Name + Dessert.NAME);
    }
    
    private static class Utensil {
        static final String NAME = "pen";
    }
    
    private static class Dessert {
        static final String NAME = "cake";
    }
}
``` 
