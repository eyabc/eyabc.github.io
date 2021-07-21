---
title: Observer 2
---
![MVVM1](/img/MVVM1.svg)

## Observer
ViewModel 의 실질적인 주인은 Binder(Observer) 이다

Binder 가 ViewModel 을 Observe

Binder(Observer) 는 ViewModel 의 리스너 이기도 하다

```javascript
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
};
```

### Visitor 
두 곳 이상의 알고리즘에 개입하는 외부에서 공급된 전략을 Visitor 라고 한다. 

1. render 에서 process 를 사용
2. viewmodelUpdated 에서 process 를 사용


```javascript
const Binder = class extends ViewModelListener {
  #items = new Set;
  #processors = {};
  // 2) updated Set 에는 ViewModelValue 가 있다. subKey, cat, k, v..  
  viewmodelUpdated(updated) {
    const items = {};
    // Set (#items) 은 forEach 만 쓸 수 있기 때문에 obj 로 바꿨다. 
    this.#items.forEach(item => {
      items[item.viewmodel] = [type(viewmodel[item.viewmodel], ViewModel), item.el];
    });
    updated.forEach(v => {
      if (!items[v.subKey]) return;
      const [vm, el] = items[v.subKey], processor = this.#processors[v.cat];
      if (!el || !processor) return;
      processor.process(vm, el, v.k, v.v);
    });
  }
  add(v, _ = type(v, BinderItem)) {
    this.#items.add(v);
  }
  addProcessor(v, _0 = type(v, Processor)) {
    // ..
  }
  render(viewmodel, _ = type(viewmodel, ViewModel)) {
    // ..
  }

  watch(viewmodel, _ = type(viewmodel, ViewModel)) {
    // Binder 에서는 ViewModel 을 받아서, ViewModel 에게 구독을 신청한다 
    viewmodel.addListener(this);
    this.render(viewmodel);
  }
  unwatch(viewmodel, _ = type(viewmodel, ViewModel)) {
    viewmodel.removeListener(this);
  }
};
```

## client
```javascript
const scanner = new Scanner;
const binder = scanner.scan(document.querySelector('#target'));
binder.addProcessor(new (class extends Processor {
  _process(vm, el, k, v) {
    el.style[k] = v;
  }
})('styles'));
binder.addProcessor(new (class extends Processor {
  _process(vm, el, k, v) {
    el.setAttribute(k, v);
  }
})('attributes'));
binder.addProcessor(new (class extends Processor {
  _process(vm, el, k, v) {
    el[k] = v;
  }
})('properties'));
binder.addProcessor(new (class extends Processor {
  _process(vm, el, k, v) {
    console.log('event', k, v, el);
    el['on' + k] = e => v.call(el, e, vm);
  }
})('events'));
```

```javascript
const viewmodel = ViewModel.get({
  isStop: false, changeContents() {
    this.wrapper.styles.background = `rgb(${/*...*/})`;
    this.contents.properties.innerHTML = Math;
    // ...
    ;
  }, 
  wrapper: ViewModel.get({
    styles: {width: '50%', background: '#ffa', cursor: 'pointer'}, events: {
      click(e, vm) {
        // 자식 vm 도 vm 객체이고
        // vm 은 무조건 wrapper 이다. 어휴..    
        // 부모에 있는 것을 바꾸고 싶을땐 간접참조인 parent 에 있는 것을 바꾼다. 
        vm.parent.isStop = true;
        console.log('click', vm);
      },
    },
  }), 
  title: /* .. */ , 
  contents: /* .. */ ,
});
```

```javascript
binder.watch(viewmodel);
const f = _ => {
  viewmodel.changeContents();
  if (!viewmodel.isStop) requestAnimationFrame(f);
};
requestAnimationFrame(f);
```

- Binder 에서 render 를 호출하는 부분이 없어졌다.
- ViewModel 의 값을 바꾸는 부분만 존재한다. 

전략, 탬플릿 메서드, 옵저브, 컴포짓 패턴만 잘써도 많은 문제를 해결할 수 있다. 

다음시간에는 배열받아서 돔엘리먼트를 만들어주는것을 할 것이다.


