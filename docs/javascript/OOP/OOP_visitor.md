---
title: Visitors 
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/r4vOF7WpxgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```javascript
const Scanner = class {
  scan(el, _ = type(el, HTMLElement)) {
    const binder = new Binder;
    this.checkItem(binder, el);
    /* 2) start */
    const stack = [el.firstElementChild];
    let target;
    while (target = stack.pop()) {
      this.checkItem(binder, target);
      if (target.firstElementChild) stack.push(target.firstElementChild);
      if (target.nextElementSibling) stack.push(target.nextElementSibling);
    }
    /* end 이 부분을 위임해야 한다.  */
    return binder;
  }

  checkItem(binder, el) {
    // 1) 바인더에서 스캐너를 빼는 것의 이유는 이곳에 있다.  
    // 스캐너의 존재이유 (변화율) 그렇다면 scan 메서드에는 과한 역할(loop)이 있다고 생각되지 않는가.?
    const vm = el.getAttribute('data-viewmodel');
    if (vm) binder.add(new BinderItem(el, vm));
  }
};
```
위임하는 과정에서 Visitor 를 설계하게 된다.

## Visitor 의 등장인물 
### 1. care taker 보살핌을 받는 것
- 원본 데이터 소스 구조

### 2. Visitor

Visitor 에게 자기 자신을 주면 Visitor 가 자기 자신의 구조를 돌아주는 것.
- care taker 가 Visitor 를 소유하게 된다.

그렇다면 비지터에게 필요한 것은 무엇일까?
```javascript
const Visitor = class {
  // 추상 인터페이스 입장에서는 target 의 타입에 관심이 없다.
  visit(action, target, _0 = type(action, 'function')) {
    throw 'override';
  }
};
```
## DomVisitor
주어진 el 를 순회하는 제어 코드를 갖고 있다. 

설계의 궁극적인 목표 → **제어의 역전** 

*스캐너의 종류가 무엇이 됐든, DomVisitor 를 갖게 되면 DOM 에 대한 순회제어코드를 수행할 수 있다*

Visitor 패턴
- 어려운 자료구조나 특정한 코드의 제어를 외부에서 완전히 유입이 된다.
- Visitor 를 통한 제어의 역전
- 코드 → 객체
    - 역할때문이 아닌, **제어를 외부에 위임하기 위해서** 객체로 바꾸었다. 

*DOM Loop 는 Scanner 만의 역할이 아니다.* 
- DOM 의 서브루프를 도는 모든 곳에서 쓸 수 있다. 

```javascript
const DomVisitor = class extends Visitor {
 // 자식에서 구체적인 형을 얻게 된다 (generic).. 언어가 지원하는 기능 보다는 개념을 어떻게 적용하느냐가 중요하다.....
  visit(action, target, _0 = type(action, 'function'), _1 = type(target, HTMLElement)) {
    const stack = [];
    let curr = target.firstElementChild;
    do {
      // 비지터를 호출한 곳과의 상호작용이 일어난다.
      // 마치 템플릿 메서드의 훅과 같은 역할을 한다. careTaker 와의 긴밀한 협조
      action(curr);
      if (curr.firstElementChild) stack.push(curr.firstElementChild);
      if (curr.nextElementSibling) stack.push(curr.nextElementSibling);
    } while (curr = stack.pop());
  }
};
```
```javascript
const Scanner = class {
  #visitor;

  constructor(visitor, _ = type(visitor, DomVisitor)) {
    this.#visitor = visitor;
  }

  scan(target, _ = type(target, HTMLElement)) {
    const binder = new Binder, f = el => {
      const vm = el.getAttribute('data-viewmodel');
      if (vm) binder.add(new BinderItem(el, vm));
    };
    f(target);
    this.#visitor.visit(f, target);
    return binder;
  }
};
```
