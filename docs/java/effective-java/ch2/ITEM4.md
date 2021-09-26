---
title: 4. 인스턴스화를 막으려거든 private 생성자를 사용하라
---

:::note 정적 메서드와 정적 필드만을 담은 클래스
1. 객체 지향적으로 사고하지 않는 이들이 종종 남용하는 방식
1. 나름의 쓰임새
:::

## 정적 메서드와 정적 필드만을 담은 클래스, 나름의 쓰임새
- `java.lang.Math` `java.util.Arrays` 
    - 기본 타입 값이나 배열 관련 메서드들을 모아놓은 클래스    
- `java.util.Collections` 
    - 특정 인터페이스를 구현하는 객체를 생성해주는 정적 메서드(팩터리)
- final 클래스와 관련한 메서드들을 모아놓을 때
    - final 클래스를 상속해서 하위 클래스에 메서드를 넣는 건 불가능 하기 때문.

## 정적 멤버만 담은 유틸리티 클래스의 인스턴스화 방지
private 생성자를 추가하여 클래스의 인스턴화를 막아야 한다.

```java
private UtilityClass() {
    // 클래스 안에서 실수로라도 생성자를 호출하지 않도록 함.
    throw new AssertionError();
}
```

1. 생성자를 명시하지 않으면 컴파일러가 자동으로 기본 생성자를 생성함.
1. 추상클래스로 만드는 것은 인스턴스화를 막을 수 없음
    - 하위 클래스를 만들어 인스턴스화 할 수 있음

상속을 불가능하게 하는 효과
- 모든 생성자는 명시적이든 묵시적이든 상위 클래스의 생성자를 호출한다.
- private 으로 선언되어, 하위 클래스가 상위 클래스의 생성자에 접근할 수 없다.


:::note [인스턴스를 생성할 수 없는데 생성자 테스트코드를 작성할 수 있을까?](https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/4_%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%ED%99%94%EB%A5%BC_%EB%A7%89%EC%9C%BC%EB%A0%A4%EA%B1%B0%EB%93%A0_private_%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC_%EC%82%AC%EC%9A%A9%ED%95%98%EB%9D%BC_%EC%9D%B4%ED%98%B8%EB%B9%88.md)
리플렉션을 이용해서 테스트 가능

```java
// Junit 5
@DisplayName("유틸리티 클래스 생성 실패 - 예외 처리")
@Test
void constructor() throws Exception {
    Constructor<CustomStringUtils> constructor = CustomStringUtils.class
                                                    .getDeclaredConstructor();
    constructor.setAccessible(true);

    assertThatThrownBy(constructor::newInstance)
        .isInstanceOf(InvocationTargetException.class)
        .getCause()
        .isInstanceOf(IllegalStateException.class);
}
```
setAccessible(true) 으로 접근 가능하도록 만든 후에 newInstance() 메서드를 호출하면 private 생성자도 테스트가 가능합니다.

다만, 개인적으로는 해당 테스트코드가 의미가 있는지 잘 모르겠습니다. 테스트 커버리지가 낮다는 이유로 테스트 커버리지를 높이기 위해 테스트코드를 작성하기보다 현재 테스트코드가 의미있는지 생각해보면 좋을 것 같습니다.
:::

:::note 어떠한 상황에서 static 함수 모음 클래스를 만들고, 어떠한 상황에서는 객체를 생성하는 POJO Bean 클래스를 만들어야 할까? 
여기서 static 함수 모음 class 란  
- Apache Commons Lang StringUtils 처럼 순전히 static 함수들만을 가지고 있고, 객체를 생성하지 않고 사용하는 클래스를 의미한다

static 함수 모음 클래스의 모든 함수는 
- 인자가 동일할 경우 항상 동일한 결과를 리턴해야 한다.
    - 함수 안에서는 외부 자원(Resource)에 대해 하나도 의존하면 안된다는 선결 조건을 충족해야 한다. 
        - 외부 자원은 그 실행 결과의 일관성을 보장할 수 없기 때문이다.
  
이 규칙을 지킬 수 없으면 POJO Bean으로 만들라.




:::


Reference
---
- https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/4_%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%ED%99%94%EB%A5%BC_%EB%A7%89%EC%9C%BC%EB%A0%A4%EA%B1%B0%EB%93%A0_private_%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC_%EC%82%AC%EC%9A%A9%ED%95%98%EB%9D%BC_%EC%9D%B4%ED%98%B8%EB%B9%88.md
- http://kwon37xi.egloos.com/4844149
