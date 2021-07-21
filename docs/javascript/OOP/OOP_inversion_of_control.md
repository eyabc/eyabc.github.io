---
title: Inversion of Control
---

IoC 가 달성되면 객체 지향 전체가 달성됐다고 볼 수 있다. 

## 제어 역전의 개념과 필요성 
### 개념
#### 1. Control = flow control(흐름제어) 
for, if, switch 

#### 2. 광의에서 흐름 제어 = 프로그램 실행 통제 
- 의존성의 제어를, 제어를 잘하는 한 놈이 하는 것
    - 코드의 제어는 프레임워크가 한다. 
- 라이브러리는 제어의 역전을 하지 않는다. 
- 프레임워크는 제어의 역전을 한다. 
    - IoC 가 되는 것을 프레임워크라고 한다. 

#### 3. 동기흐름제어, 비동기흐름제어 등 
for, if, switch 이 많이 섞인 것들 

문제점
1. 흐름 제어는 상태와 결합하여 진행 됨
2. 상태 통제와 흐름제어 = 알고리즘
3. 변화에 취약하고 구현하기도 어려움 

대안
1. 제어를 추상화 하고
2. 개별 제어의 차이점만 외부에서 주입받는다.

```javascript
const View = class {
  getElement(data) {
    throw 'override!';
  }

  initAni() {
    throw 'override!';
  }

  startAni() {
    throw 'override!';
  }
};
```

```javascript
const Renderer = class {
  #view = null;
  #base = null;

  constructor(baseElement) {
    this.#base = baseElement;
  }

  set view(v) {
    if (v instanceof View) this.#view = v; else throw `invalid view :${v}`;
  }

  // Render 하는 Control 제어 부분이 개별 View 에서는 존재하지 않게 된다.  
  // 제어의 역전. view 는 필요한 부품만 공급한다.
  render(data) {   
    const base = this.#base, view = this.#view;
    if (!base || !view) throw 'no base or view';
    let target = base.firstElementChild;
    do base.removeChild(target); while (target = target.nextElementSibling);
    base.appendChild(view.getElement(data));
    view.initAni();
    view.startAni();
  }
};
```
```javascript
const renderer = new Renderer(document.body);
renderer.view = new class extends View {
  #el;

  getElement(data) {
    this.#el = document.createElement('div');
    this.#el.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
    this.#el.style.cssText = `width:100%;background:${data.background}`;
    return this.#el;
  }

  initAni() {
    const style = this.#el.style;
    style.marginLeft = '100%';
    style.transition = 'all 0.3s';
  }

  startAni() {
    requestAnimationFrame(_ => this.#el.style.marginLeft = 0);
  }
};
renderer.render({ title: 'title test', description: 'contents.......', background: '#ffffaa' });
```


--- 아래 부분은 추후에 보충하겠습니다 TODO

## 제어 역전 실제 구현
아래 순위는, 보다 넓은 범위의 제어 역전을 실현한다.
1. [비지터 패턴](https://ko.wikipedia.org/wiki/%EB%B9%84%EC%A7%80%ED%84%B0_%ED%8C%A8%ED%84%B4) (렌더러도 비지터 패턴의 일부)
    - 알고리즘을 객체 구조에서 분리시키는 디자인 패턴
2. [컴포지트패턴](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%8F%AC%EC%A7%80%ED%8A%B8_%ED%8C%A8%ED%84%B4)
    - 
3. 전략패턴(소유를 통한 제어역전) & 템플릿 메소드 패턴(상속을 통한 제어역전)  


## 추상 팩토리 메소드 패턴 
2 번 패턴은 이미 만들어진 객체의 행위를 제어 역전에 참여시킬 수 있지만 
참여할 객체 자체를 생성 할 수 없음.
참여 할 객체를 상황에 맞게 생성하고 행위까지 위임하기 위해 추상 팩토리메소드를 사용 함~

