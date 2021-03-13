---
title: SOLID Principle
---

알려진 기본 설계 요령

## Isolation of Change
객체지향 프로그래밍은 어떠한 변화에 대해서도 파급력을 최소화 한다. 

## SRP Single Responsibility 단일 책임
- 코드를 피치못할 사정으로, 수정하는 원인이 하나밖에 없는 것.
- 격리 수준이 높다면 촘촘한 단위테스트가 필요가 없을 것이다.
- 잘 지키지 못하면 [shotgun surgery](https://en.wikipedia.org/wiki/Shotgun_surgery) 발생

### Shotgun surgery
여러 위치에서 동일한 논리를 복제하면 나중에 동일한 논리를 변경하는 데 드는 비용이 크게 증가 할 수 있습니다. 
```javascript
void  MyFunc ()  {...} 
void  MyFunc2 ()  {...} 
... 
void  MyFuncN ()  {...}
```
```javascript
void  MyFunc ()  { 
  printf ( "Entering MyFunc \ n " ); 
  ... 
} 
void  MyFunc2 ()  { 
  printf ( "Entering MyFunc2 \ n " ); 
  ... 
} 
... 
void  MyFuncN ()  { 
  printf ( "Entering MyFuncN \ n " ); 
  ... 
}
```
    
## OCP OpenClosed 개방폐쇄
- Open 
    - 확장에는 열려 있다
    - `extends` `implements` 를 할 수 있게 만드는것
- Closed
    - 설계할 때, 수정해야 되면 기존 클래스를 건드리는 것이 아닌,
    - 또 다른 Implement 클래스나 extends 클래스를 만들어 수정한다.
    
## LSP Liskov Substitution 업캐스팅 안전
### Polymorphism 대체 가능성
- 업캐스팅이 언제나 안전하다. 
- Super 타입으로 형변환하는 것

### 성급한 일반화의 모순
추상층의 정의가 너무 구체적이면 구상층의 구현에서 모순이 발생함

- 추상층 - 생물(super class)
    - 숨을쉰다, 다리로 이동한다.     
- 구상층 - sub class
    - 사람 ok
    - 타조 ok
    - 아메바 no
    - 독수리 no
    - 고래 no
- 아메바 독수리 고래는 생물이지만 upcasting 을 할 수 없다. 
- 다리로 이동한다를 지운다. 
- 추상층을 생물(숨을 쉰다) 다리이동(다리로 이동한다) 로 분리한다.
- 구상층 
    - 사람:생물,다리이동ok!
    - 타조:생물,다리이동ok!
    - 아메바:생물ok!
    - 독수리:생물ok!
        - 고래:생물ok!
        
## ISP Interface Segregation 인터페이스 분리
![image](https://user-images.githubusercontent.com/31977543/110199580-5a4e2200-7e9c-11eb-88e6-f8c617b1b03a.png)

객체가 조금만 수정이되도 모듈 ABC 가 영향을 받는다.      
객체의 변화가 각각의 모듈에만 영향을 끼치도록 분리하는 것.
    
![image](https://user-images.githubusercontent.com/31977543/110199742-38a16a80-7e9d-11eb-9db6-4fc7afba1a20.png)

## DIP Dependency Inversion 다운 캐스팅 금지
의존성은 부모쪽으로만 흘러야 된다.

### DI (Dependency Injection) 의존성 주입
- (IoC Inversion of Control 제어 역전) 
###  DRY Don't Repeat Yourself 중복 방지
### Hollywood Principle 의존성 부패 방지
- Wrong : 연락하게 전화 번호 줘, return 전화번호 → 격리위반
    - 전화번호를 바꾸면? 실패한다 
- Right : 전화 해줘, 내가 연락하고 싶을 때 연락할 게
- Wrong: 연료봉에 있는 온도를 받아와서 온도에 대한 로직을 처리한다
    - 그 사이에 연료봉의 온도가 변해 있으면?
- Right: 연료봉에 온도를 바꿔달라고 요청해야 한다. 
    - *내부에서 상태를 관리한다.* 
    - *클라이언트는 온도를 낮춘다 라는 캡슐화 된 메서드를 호출할 수 있음* 
- 이것을 지키지 않으면 정보은닉과 캡슐화를 위반할 가능성이 높다.

### Law of demeter 최소 지식
최소한의 지식은
1. method 인자로 넘어온 객체의 타입이다. 
    - *인자로 받아온 객체의 `...` 으로 객체를 캐내는 것은 나쁘다.*  
    - 인자로 받아온 객체 타입 이외에 객체 안에 있는 타입까지 다 알게 된다.
    - 의존성이 단순해 지지 않고 복잡해 진다. 이 중에 하나라도 바뀌면 메서드가 깨진다. 
2. method 내부에서 생성한 객체의 타입
3. 원래 객체가 갖고있던 필드의 타입

이것을 깨면 열차전복 train wreck 이 발생한다
