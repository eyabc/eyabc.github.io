---
title: Strategy
---
## Goal
기존의 Binder 동작 방식 중, 코드로 확정되있는 부분을 전략적으로 빼내는 방법들

## Strategy 의 의미
- 도메인, knowledge 지식 로 대체 가능한 것
- 어떤 문제를 해결하기 위한 지식적인 부분
- 그 도메인 만의 지식
- (범용적으로) 알고리즘이 될 수 있다 

프로그램을 짰을 때, 어떤 부분을 해결하기 위한 핵심적인 지식 부분이다.

그 문제가 보다 추상적인 개념에서 범용으로 적용할 수 있다고하면 지식부분만 바꿔주면 얼마든지 처리할 수 있다. 

지난 시간의 Binder 코드이다.
이 코드는 하나로 보이겠지만 사실은 그렇지 않다.
 
![image](https://user-images.githubusercontent.com/31977543/111868967-53f19700-89c0-11eb-9f52-23f2b79bcf81.png)

## Structure & control
1. Binder 의 Field
2. Field 의 구조
2. 구조를 루프돌고 있는 부분

*자료구조를 갖고 있는 객체* → 순회 

![image](https://user-images.githubusercontent.com/31977543/111868984-6b308480-89c0-11eb-878c-d5c06baaf459.png)
## 객체의 상태측면과 행동측면
객체지향에서 객체는,
- 자신의 상태를 갖고 자신만의 행위 한다. 
- 상태와 행위를 분리할 수 없다. 

### 구조적 측면
필드의 자료 구조 때문에 생겨나는 구조 
- items 구조 Set, → forEach 루프 순회 
- viewModel 구조 → styles, events, properties, attributes 

### 전략적 측면
특정 도메인을 해결하기 위한 알고리즘 지식 혹은 도메인

**전략 부분을 외재화 할 것이다.**   
- 하지만 전략부분의 일부는 구조의 문제에 항상 관여한다.
- 절대 분리되어 전략이 작동될 수 없다. 

언제나 상태의 자료구조를 갖고 있을 때만 전략이 성립한다. 
- 특정한 자료구조 → 특정한 알고리즘과 매핑 
- 전략은 특정한 데이터를 지칭할 수 있는 포인터를 갖고있어야 매핑할 수 있는 알고리즘을 만들 수 있다.
![image](https://user-images.githubusercontent.com/31977543/111869101-04f83180-89c1-11eb-8a22-b4045a0d4474.png)

## Composition
이것은 흔히 짜고 있는 코드로부터 **전략을 빼내는 발상법**의 아이디어가 된다. 
- 객체지향에서 이 부분을 컴포지션이라는 것으로 해결 한다.
- **코드를 객체로 바꾸는 것**

코드를 수정하는 행위 → 회귀 테스트를 해야한다.     

### (전략) 객체의 도출
전략이 구조와의 관계를 생각하고 코드를 객체로 바꾼다.

**인터페이스와 클래스로 도출해야 한다.**

![image](https://user-images.githubusercontent.com/31977543/111873524-fe26ea00-89d3-11eb-8d36-1955427d0ff9.png)

### **의존성** 발생
*Code* 는 객체 *Object* 의 타입을 **알야야 한다.**

#### 객체지향에서 의존성 발생이유 
- 위임 X
- 전략을 외부 객체의 도움으로 해결하기 위함

### Dependency Injection
의존성을 내부가 아닌 외부에서 공급받는 것이 좋다.
- 내부에서 공급받는 경우, 내부 변화가 생길 때 마다 코드를 수정해야 한다.

## Template Method 
![image](https://user-images.githubusercontent.com/31977543/111873681-d4ba8e00-89d4-11eb-899c-3b2e203ee9f7.png)

전략(Processor) 을 상속 받은 객체에서 위임 받는다 *override*
- *Processor* 생성자는 내부에서 `_process(...){ throw "override"; }` 를 호출한다.
- `_process` 를 재정의해서 사용하지 않으면 사용할 수 없다.
    
### 템플릿 메서드 process
*process* 는 템플릿 메서드 이다.

### 템플릿 메서드의 Hook
*_process*
- SubClass 에 의존하고 있는 메서드
- 템플릿 메서드에서 훅이라고 한다. 

> [템플릿 메서드 패턴](https://eyabc.github.io/Doc/dev/java/effective-java/ch4/ITEM20.html#%EC%9E%90%EB%B0%94%EC%9D%98-%EB%8B%A4%EC%A4%91-%EA%B5%AC%ED%98%84-%EB%A7%A4%EC%BB%A4%EB%8B%88%EC%A6%98)

Binder 는 SubClass 로 injection 된 메서드에 의존한다. 
- Binder 에서는 SuperClass 타입으로 사용
    - 주입 할 때에는 SubClass 타입으로 주입
    - 업캐스팅 발생 
- 내부에 변화가 생길 때 마다 Binder 코드(객체의 타입)를 바꿔주지 않아도 된다.
 
![image](https://user-images.githubusercontent.com/31977543/111873947-2dd6f180-89d6-11eb-9097-fb97285e7aed.png)
```javascript
const Processor = class {
  cat;

  constructor(cat) {
    this.cat = cat;
    Object.freeze(this);
  }

  process(vm, el, k, v, _0 = type(vm, ViewModel), _1 = type(el, HTMLElement), _2 = type(k, 'string')) {
    this._process(vm, el, k, v);
  }

  _process(vm, el, k, v) {
    throw'override';
  }
};
```
```javascript
new (class extends Processor {
  _process(vm, el, k, v) {
    el.style[k] = v;
  }
})('styles');

new (class extends Processor {
  _process(vm, el, k, v) {
    el.setAttribute(k, v);
  }
})('attributes');

new (class extends Processor {
  _process(vm, el, k, v) {
    el[k] = v;
  }
})('properties');

new (class extends Processor {
  _process(vm, el, k, v) {
    el['on' + k] = e => v.call(el, e, vm);
  }
})('events');
```

> *익명 클래스*        
자바스크립트에서 클래스는 문이 아니라 **값(식)***이다.    
즉시실행함수 시그니쳐와 비슷하다.  
- 한번만 쓰는 클래스,
- 인스턴스는 하나만 필요
- 클래스 인스턴스를 찍어내지 않기위해. 

```javascript {3,10,14,17-21}
const Binder = class extends ViewModelListener {
  #items = new Set;
  #processors = {};
  
  add(v, _ = type(v, BinderItem)) {
    this.#items.add(v);
  }
  
  addProcessor(v, _0 = type(v, Processor)) {
    this.#processors[v.cat] = v;
  }
  
  render(viewmodel, _ = type(viewmodel, ViewModel)) {
    const processores = Object.entries(this.#processors);
    this.#items.forEach(item => {
      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;
      processores.forEach(([pk, processor]) => {
        Object.entries(vm[pk]).forEach(([k, v]) => {
          processor.process(vm, el, k, v);
        });
      });
    });
  }
}
``` 
#### 전략을 확장할 수 있다.
전략을 4개 외에도 얼마든지 만들 수 있게 되었다. 

#### *#processors* Object 이다. 
객체는 주소로 식별 되어야 하는데(Set), 이번에는 값(Object)을 사용했다.
 
Object 키는 중복될 수 없다. 
- 문자열 v.cat 당 하나의 Processor 만 사용할 수 있게 한다.
- *cat* 가 같고, 값으로 다른 Processor 객체가 들어올 때, 값은 덮어쓰기 된다.
- *cat* 가 중복되어 있을 때 사용 할 Processor 가 헷갈리는 것을 방지하기 위해 오브젝트 사용. 
- 자료구조를 신중하게 선택해야 한다. 

값을 쓰지 않는 방법
- v.cat 이 *String*이 아닌 미리 정의한 *Symbol* 을 받는다.
- 값을 방어하기 위한 체계를 만들어 줘야 한다.
- 값을 외부에 노출할 때는 신중하게 생각해야 한다.

다음시간에서는 심볼로 전환할 것임.

#### `const processores = Object.entries(this.#processors);`
자바스크립트는 싱글 스레드 머신
- *render* 메서드 동안에 *addProcessor* 가 일어나지 않는다.

## 객체 사이의 의존성 또는 계약
Processor 에서 정의하고 있는 프로토콜
- cat 과 process

Binder 는 Processor 의 프로토콜을 사용하여 알고리즘을 바꿨다. 
- Binder 는 Processor 랑 계약을 했기 때문에 Processor 명세서를 사용 가능

### 알고리즘의 일반화(추상화), 제네릭 알고리즘
- Binder 알고리즘을 Processor 에서 공개하고있는 계약 내용만 갖는 알고리즘으로 바꿔줘야 한다.
- (전략)복잡한 코드들의 공통점을 모아서 객체 형으로 뺀 뒤에 
- 형과 계약하고 형으로 계약한 내용으로 알고리즘을 바꾸는 것을 의미한다. 

코드는 Processor 의 메서드나 속성이 바뀌지 않는 이상, Binder 는 더이상 코드를 고칠 필요가 없다.

## 전략 패턴
제네릭 알고리즘에서, 수 많은 전략들을 추가하거나 바꿀 수 있다. 

프로토콜의 내용이 적당하고 적어야 한다.

1. 구조적인 부분과 전략적인 부분을 나눈다.
2. 전략부분의 공통부분을 찾는다.
3. 전략이 어떻게 상태와 관계를 맺는지 찾는다
4. 이것들로 도출된 형으로 가지고 알고리즘을 고친다.

## 단방향 의존성
Binder 가 Processor 를 의존하게 되었다.      
객체에서, 단방향 의존성을 설정해야 한다. 

객체지향에서 의존성이 없다
- 코드를 발랐다? 라는 것이고, 코드를 맨날 고쳐야 된다는 이야기다.
 
객체지향을 쓰는 이유
- **코드 부분을 객체로 바꿔서 객체만 따로 공급하면 그 코드를 건들 필요가 없게 하기 위해서 이다.***

의존성이 많은 코드가 나쁜 게 아니다. 의존성은 당연히 생기는 것이다. 

- 의존성이 양방형으로 흐르는 것이 나쁜 것

제대로 짰으면, DI 가 자동으로 따라온다.
![image](https://user-images.githubusercontent.com/31977543/111900492-2d8e3300-8a76-11eb-9b83-44a059f2fb97.png)

코드를 객체로 바꾸면 의존성이 따라오고, 의존성이 생겼는데 DI 메서드가 없다면 잘못된 것이다.

## 객체망의 구성 3가지
객체지향은 문제를 객체망이 해결한다.
 
어떤 객체가 다른 객체를 
1. 필드수준으로 안다. 
2. 메서드 수준에서 안다 
3. SubClass 로 안다.

예제에서는 Processor 를 알고있는 SubClass 4개를 만들었다. 

