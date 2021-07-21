---
title: MVVM Role Design
---

## view book & bind
![image](https://user-images.githubusercontent.com/31977543/111024565-cdb6dd00-8422-11eb-99b6-cf1a420040e3.png)

## Role Design

### Framework
각각 장단점이 있다. 

#### vue angular
binder 가 존재하는 view 를 스캔한다. 

- 모델과 뷰를 완전히 분리해서 관리하기 쉽다. 

#### react
처음부터 데이터와 연결되어있는 뷰를 만든다. (컴포넌트 방식??) 
- 리액트는 컴포넌트에서 state 를 소유 
- 모델과 뷰를 같이 관리해야 된다. 

### 역할의 분리
scanner 로 인해서 binder 와 html 의 관계를 끊었다. 
![image](https://user-images.githubusercontent.com/31977543/111025033-2be4bf80-8425-11eb-908c-5b38b4628bf4.png)

HTMLElement 는 **자주변함** →  Binder 에서 Scanner 를 분리

#### 변화율 *객체가 바뀌는 이유를 하나로 만들자 SRP*
binder
- viewModel 을 이용해서 view 를 그릴때만 로직이 바뀌면 된다.

scanner
- HTML 을 해석하는 것이 다르면 바뀐다.

### hook 을 각각 binderItem 으로 만든다.
![image](https://user-images.githubusercontent.com/31977543/111024700-89780c80-8423-11eb-8b41-5349d5c169a2.png)
![image](https://user-images.githubusercontent.com/31977543/111025101-81b96780-8425-11eb-962e-19de651552d9.png)

## ViewModel 
순수한 *인메모리 객체*이기 때문에 만들기 제일 쉽다.        

단위테스트도 쉬워진다. 
- dom 을 테스트하기는 어렵지만 viewModel 을 테스트 하기는 쉽다. 

```javascript
const ViewModel = class {
  static #private = Symbol();

  static get(data) {
    return new ViewModel(this.#private, data);
  }

  /** 2) ViewModel 는 하나의 dom 객체를 대신하는 메모리 객체기 때문에
    *    dom 을 대신할 속성들을 가진다. (키)
  **/
  styles = {};
  attributes = {};
  properties = {};
  events = {};

  constructor(checker, data) {
    /**
    * 1) 외부에서는 절대 첫번째 인자에 static private 을 넘길 수 없다.
    * 오직 get(data) (클래스 내부) 에서만 첫번째 속성을 #private 을 넘길 수 있다.
    * 따라서, 외부에서 생성자를 호출할 수 없다. 
    **/
    if (checker != ViewModel.#private) throw 'useViewModel.get()!';
    Object.entries(data).forEach(([k, v]) => {
      switch (k) {
        case'styles':
          this.styles = v;
          break;
        case'attributes':
          this.attributes = v;
          break;
        case'properties':
          this.properties = v;
          break;
        case'events':
          this.events = v;
          break;
        default:
          this[k] = v;
      }
    });
    // 3) 값은 변화할 수 있지만 더이상 키는 추가할 수 없게 함. 
    Object.seal(this);
  }
};
```

## Binder
### 제어의 역전
어떠한 종류의 뷰라고 할지라도, paint(render) 로직을 binder 가 가진다. 

```javascript
const BinderItem = class {
  el;
  viewmodel;

  constructor(el, viewmodel, _0 = type(el, HTMLElement), _1 = type(viewmodel, 'string')) {
    this.el = el;
    this.viewmodel = viewmodel;
    Object.freeze(this);  // 불변객체화
  }
};
```

```javascript
new BinderItem(section, 'wrapper');
new BinderItem(h2, 'title');
new BinderItem(section2, 'contents');
```

```html
<section id="target" data-viewmodel="wrapper">
  <h2 data-viewmodel="title"/>
  <section data-viewmodel="contents"/>
</section>
```


> 언제 Set 을 쓰고 언제 Array 를 쓸까? 
- Set 은 중복 방지기능이 있다. 
- *Set 은 객체의 컨테이너다.* 
- Array 는 똑같은 객체를 두번 넣을 수 있다. 

```javascript
const Binder = class {
  #items = new Set;

  add(v, _ = type(v, BinderItem)) {
    this.#items.add(v);
  }

  render(viewmodel, _ = type(viewmodel, ViewModel)) {
    this.#items.forEach(item => {
      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;
      Object.entries(vm.styles).forEach(([k, v]) => el.style[k] = v);
      Object.entries(vm.attributes).forEach(([k, v]) => el.setAttribute(k, v));
      Object.entries(vm.properties).forEach(([k, v]) => el[k] = v);
      Object.entries(vm.events).forEach(([k, v]) => el['on' + k] = e => v.call(el, e, viewmodel)); // this 를 el 로 바인딩
    });
  }
};
```

## Scanner
```javascript
const Scanner = class {
  scan(el, _ = type(el, HTMLElement)) {
    const binder = new Binder;
    this.checkItem(binder, el);

    const stack = [el.firstElementChild];
    let target;   // 임시변수
    while (target = stack.pop()) {
      this.checkItem(binder, target);
      if (target.firstElementChild) stack.push(target.firstElementChild);
      if (target.nextElementSibling) stack.push(target.nextElementSibling);
    }
    return binder;
  }

  checkItem(binder, el) {
    const vm = el.getAttribute('data-viewmodel');
    if (vm) binder.add(new BinderItem(el, vm));
  }
};
```

## Client

```javascript
const viewmodel = ViewModel.get({
  wrapper: ViewModel.get({styles: {width: '50%', background: '#ffa', cursor: 'pointer'}}),
  title: ViewModel.get({properties: {innerHTML: 'Title'}}),
  contents: ViewModel.get({properties: {innerHTML: 'Contents'}}),
});

const scanner = new Scanner;
const binder = scanner.scan(document.querySelector('#target'));
binder.render(viewmodel);
```

model render
```javascript
const viewmodel = ViewModel.get({
  isStop: false,
  changeContents() {
    this.wrapper.styles.background = `rgb(${parseInt(Math.random() * 150) + 100},${...},${...})`;
    this.contents.properties.innerHTML = Math.random().toString(16).replace('.', '');
  }, wrapper: ViewModel.get({
    styles: {width: '50%', background: '#ffa', cursor: 'pointer'}, events: {
      click(e, vm) {
        vm.isStop = true;
      },
    },
  }),
  // ...
});

const f = _ => {
  viewmodel.changeContents();
  binder.render(viewmodel);
  if (!viewmodel.isStop) requestAnimationFrame(f);
};
requestAnimationFrame(f);
```

> 브라우저의 렌더성능은, 대부분 paint 에 든다.
인메모리의 객체의 탐색과 같은 부분은 성능영향에 거의 미미하다. 

![MVVM1](/img/MVVM1.svg)
