---
title: 추상계층 불일치
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/r4vOF7WpxgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*객체 간(클래스 간) 의존성* 을 잘 맺어야 한다.    
이 때, 반드시 **계층관계**를 보고 설정해야한다.

## 계층 관계의 이해
이 클래스의 추상 레이어를 왜 만들었는지와 일치해야 한다.

Visitor 와 DomVisitor 가 있다. 

![image](https://user-images.githubusercontent.com/31977543/113477966-d437f200-94c0-11eb-93af-767042408ce6.png)

## 계약 불일치
Scanner 는 어떤 시점 *constructor* 에서는 → SubType(DomVisitor) 가 필요한데

실제 사용할 때 `this.#visitor.visit(...)`  → SuperType 을 사용
- override 해서 쓰고 있기 때문이다. 

순수하게 SuperType 지식을 사용하려면 SuperType 과 계약을 맺었어야 한다.

매칭의 문제
- Dom 전용 Scanner
- Dom 전용이 아닌 visitor 와 Dom 전용인 DomVisitor 가 있는 추상화 계층


Scanner 도 똑같이 계층을 나눠보자

스캐너에서 실제 el 에 관련된 지식들이다.
![image](https://user-images.githubusercontent.com/31977543/113478341-3a257900-94c3-11eb-87a4-18bfe0b20500.png)

```javascript
const Scanner = class {
  #visitor;

  constructor(visitor, _ = type(visitor, Visitor)) {
    this.#visitor = visitor;
  }

  visit(f, target) {
    this.#visitor.visit(f, target);
  }

  scan(target) {
    throw 'override';
  }
};

const DomScanner = class extends Scanner {
  constructor(visitor, _ = type(visitor, DomVisitor)){
    // 업캐스팅, 리스코프 치환원칙
    super(visitor);
  }
  scan(target, _ = type(target, HTMLElement)) {
    const binder = new Binder, f = el => {
      const vm = el.getAttribute('data-viewmodel');
      if (vm) binder.add(new BinderItem(el, vm));
    };
    f(target);
    // 자신의 비지터가 아닌 부모의 비지터를 사용함
    this.visit(f, target);
    return binder;
  }
};
```

## 도메인 패턴
코드를 짤 때 
1. 기능적인부분과 도메인적인 부분을 나눈다.
2. 기능적인 부분과 도메인 부분을 서로 협력하게 한다.

기능적인부분과 도메인적인 부분을 나누면,
- 상황에 따라 도메인적인 부분을 교체할 수 있다.

여기서의 도메인은 DOM 이라고 할 수 있다.
- 기능적인 구현이 도메인에 있는 구현에 침범 받지 않는다. 

변하는부분과 변하지 않는 부분을 구분하라
- 코드에서 중요한 것은 변화율인데 이것에 따라 레이어를 나눈다.
- 변화율에 따라 코드를 나눠서, 코드를 고치지 않고 코드를 추가할 수 있게 되었다.

돔이 아닌 캔버스를 다룰 때, 캔버스 스캐너와 캔버스 비지터를 만들면 된다.

기존에는 코드를 수정했다면, 이제는, 레이어가 나눠지면 코드를 추가하면 된다. 

*추상화를 분리* 함으로써 **OCP** 를 지키고 있다.
```javascript
// const scanner = new Scanner;
const scanner = new DomScanner(new DomVisitor);
```
