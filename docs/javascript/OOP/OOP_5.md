---
title: 5. 코드 개선
---

Reference
---
- https://junilhwang.github.io/TIL/CodeSpitz/Object-Oriented-Javascript/05-Extension/#viewmodellistener-%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB


<iframe width="560" height="315" src="https://www.youtube.com/embed/5UUISCK6CL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

기존문제를 하나씩 짚어보도록 한다.

- [code 3.js](https://gist.github.com/hikaMaeng/b7f0bed1cb1cce42373e810a77454f0f)

<details>
<summary>html</summary>
<p>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<section id="target" data-viewmodel="wrapper">
    <h2 data-viewmodel="title"></h2>
    <section data-viewmodel="contents"></section>
    <ol data-viewmodel="list">
        <li data-template="listItem" data-viewmodel="item"></li>
    </ol>
</section>
<script src="3.js"></script>
</body>
</html>
```

</p> </details>

<details>
<summary>전체코드</summary>
<p>

```javascript
const type = (target, type) => {
  if (typeof type == 'string') {
    if (typeof target != type) throw `invaild type ${target} : ${type}`;
  } else if (!(target instanceof type)) throw `invaild type ${target} : ${type}`;
  return target;
};

const ViewModelListener = class {
  viewmodelUpdated(updated) {
    throw 'override';
  }
};

const ViewModelValue = class {
  subKey;
  cat;
  k;
  v;

  constructor(subKey, cat, k, v) {
    this.subKey = subKey;
    this.cat = cat;
    this.k = k;
    this.v = v;
    Object.freeze(this);
  }
};

const ViewModel = class extends ViewModelListener {
  static get(data) {
    return new ViewModel(data);
  }

  static #subjects = new Set;
  static #inited = false;

  static notify(vm) {
    this.#subjects.add(vm);
    if (this.#inited) return;
    this.#inited = true;
    const f = _ => {
      this.#subjects.forEach(vm => {
        if (vm.#isUpdated.size) {
          vm.notify();
          vm.#isUpdated.clear();
        }
      });
      requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }

  static define(vm, cat, obj) {
    return Object.defineProperties(obj, Object.entries(obj).reduce((r, [k, v]) => {
      r[k] = {
        enumerable: true,
        get: _ => v,
        set: newV => {
          v = newV;
          vm.#isUpdated.add(new ViewModelValue(vm.subKey, cat, k, v));
        },
      };
      return r;
    }, {}));
  }

  styles = {};
  attributes = {};
  properties = {};
  events = {};
  subKey = '';
  parent = null;
  #isUpdated = new Set;
  #listeners = new Set;

  constructor(data, _ = type(data, 'object')) {
    super();
    Object.entries(data).forEach(([k, v]) => {
      if ('styles,attributes,properties'.includes(k)) {
        if (!v || typeof v != 'object') throw `invalid object k:${k}, v:${v}`;
        this[k] = ViewModel.define(this, k, v);
      } else {
        Object.defineProperty(this, k, {
          enumerable: true,
          get: _ => v,
          set: newV => {
            v = newV;
            this.#isUpdated.add(new ViewModelValue(this.subKey, '', k, v));
          },
        });
        if (v instanceof ViewModel) {
          v.parent = this;
          v.subKey = k;
          v.addListener(this);
        }
      }
    });
    ViewModel.notify(this);
    Object.seal(this);
  }

  viewmodelUpdated(updated) {
    updated.forEach(v => this.#isUpdated.add(v));
  }

  addListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.add(v);
  }

  removeListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.delete(v);
  }

  notify() {
    this.#listeners.forEach(v => v.viewmodelUpdated(this.#isUpdated));
  }
};
const Scanner = class {
  scan(el, _ = type(el, HTMLElement)) {
    const binder = new Binder;
    this.checkItem(binder, el);
    const stack = [el.firstElementChild];
    let target;
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
    throw 'override';
  }
};

const Binder = class extends ViewModelListener {
  #items = new Set;
  #processors = {};

  add(v, _ = type(v, BinderItem)) {
    this.#items.add(v);
  }

  viewmodelUpdated(updated) {
    const items = {};
    this.#items.forEach(item => {
      items[item.viewmodel] = [
        type(viewmodel[item.viewmodel], ViewModel),
        item.el,
      ];
    });
    updated.forEach(v => {
      if (!items[v.subKey]) return;
      const [vm, el] = items[v.subKey], processor = this.#processors[v.cat];
      if (!el || !processor) return;
      processor.process(vm, el, v.k, v.v);
    });
  }

  addProcessor(v, _0 = type(v, Processor)) {
    this.#processors[v.cat] = v;
  }

  watch(viewmodel, _ = type(viewmodel, ViewModel)) {
    viewmodel.addListener(this);
    this.render(viewmodel);
  }

  unwatch(viewmodel, _ = type(viewmodel, ViewModel)) {
    viewmodel.removeListener(this);
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
const BinderItem = class {
  el;
  viewmodel;

  constructor(el, viewmodel, _0 = type(el, HTMLElement), _1 = type(viewmodel, 'string')) {
    this.el = el;
    this.viewmodel = viewmodel;
    Object.freeze(this);
  }
};
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
const viewmodel = ViewModel.get({
  isStop: false,
  changeContents() {
    this.wrapper.styles.background = `rgb(${parseInt(Math.random() * 150) + 100},${parseInt(Math.random() * 150) + 100},${parseInt(Math.random() * 150) + 100})`;
    this.contents.properties.innerHTML = Math.random().toString(16).replace('.', '');
  },
  wrapper: ViewModel.get({
    styles: {
      width: '50%',
      background: '#ffa',
      cursor: 'pointer',
    },
    events: {
      click(e, vm) {
        vm.parent.isStop = true;
        console.log('click', vm);
      },
    },
  }),
  title: ViewModel.get({
    properties: {
      innerHTML: 'Title',
    },
  }),
  contents: ViewModel.get({
    properties: {
      innerHTML: 'Contents',
    },
  }),
});
binder.watch(viewmodel);
const f = _ => {
  viewmodel.changeContents();
  if (!viewmodel.isStop) requestAnimationFrame(f);
};
requestAnimationFrame(f);
```

</p> </details>

---
## 1. 기존 Binder 의 viewmodelUpdated 의 문제

viewmodel 은 client 코드에서 생성한 전역변수(전역객체)

```javascript {3,7}
const Binder = class extends ViewModelListener {
  // ...
  viewmodelUpdated(updated) {
    const items = {};
    this.#items.forEach(item => {
      items[item.viewmodel] = [
        type(viewmodel[item.viewmodel], ViewModel),
        item.el,
      ];
    });
    updated.forEach(v => {
      if (!items[v.subKey]) return;
      const [vm, el] = items[v.subKey], processor = this.#processors[v.cat];
      if (!el || !processor) return;
      processor.process(vm, el, v.k, v.v);
    });
  }
}
```

viewmodelUpdated에서 viewmodel을 인자로 받아오도록 한다.
```javascript {2,6,9}
const ViewModelListener = class extends {
  viewmodelUpdated (viewmodel, updated) { throw 'override!' }
}

const Binder = class extends ViewModelListener {
  viewmodelUpdated (viewmodel, updated) {
    const items = {}
    this.#items.forEach(({ vmName, el }) => {
      items[vmName] = [type(viewdmoel[vmName], ViewModel), el]
    })
    // ...
  }
}
```

ViewModel에서 notify로 Binder 에게 최신 정보를 보내게 된다. 이 코드 또한 수정해야 한다
![](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuKhEpyb9JIx9pCyhLWZBJ2ttpKz9pU7Aooz9LSWlIor2Y2bOAPG1sRaWTcX1Ic99QWeNGbBNJi4fCoy5gC5AGKiBg3qphL9B2yaSk2o68L0Pe0aWuu0gWb910fbvwLmEG1RGaG00)

viewModel 에서 실행한 viewmodelUpdated 는 viewmodel 인자를 사용하지 않는다.
```javascript
const ViewModel = class extends ViewModelListener {
  notify () { this.#listeners.forEach(v => v.viewmodelUpdated(this, this.#isUpdated)) }
  viewmodelUpdated (viewmodel, updated) { updated.forEach(v => this.#isUpdated.add(v)) }
}
```

Binder viewmodelUpdated 의 viewmodel 인자는 ViewModelSubject 이거나 ViewModel 이다.      
→ 인자가 ViewModel 이 되도록 만들자.

ViewModelSubject 는 Binder 에게 넘기는 Parameter(viewmodel)를 ViewModel 에게 위임한다.
```javascript
const ViewModelSubject = class extends ViewModelListener {
  notify () { 
    this.#listeners.forEach(v => v.viewmodelUpdated(this.notifyTarget, this.#info)) 
  }
  get notifyTarget () { throw 'must be override!' } // ViewModel에게 위임한다.
}

const ViewModel = class extends ViewModelSubject {
  get notifyTarget () { return this } // notifyTarget 을 호출하면 ViewModel을 보낸다.
}
```

Binder 는 다음과 같이 변경된다.

```javascript {3}
const Binder = class extends ViewModelListener {
  viewmodelUpdated(target, updated,
                   _ = type(target, ViewModel)){ // target은 ViewModel 이여야 한다.
    const items = {}
    this.#items.forEach(({ vmName, el }) => {
      items[vmName] = [type(target[vmName], ViewModel), el]
    })
    // ...
  }
}
```

Binder 가 받아들이는 viewmodel(target)은 ViewModelSubject 가 아니라 ViewModel 이여야 한다.

**추상 계층을 분리하게 될 경우, 어떠한 문제가 생겼을 때 각각의 계층에서 해결하도록 만드는 것을 지향해야 한다.**

## 2. Processor 개선
**처리기(Processor)는 데이터 구조(ViewModel)과 동기화 되어야 한다.**  
- Processor 는 확장 가능 하도록 만들었다.
- 그러나, ViewModel 에서 Processor 의 종류를 style attributes properties 등으로 제한 하고 있다
- 즉, *ViewModel 이 Processor의 확장을 제한*하고 있는 것이다. 그래서 이 부분을 잘 확장되도록 일반화 시켜야 한다.
- 데이터 구조를 동적으로 바꿀 수 있게 한다. 

<details>
<summary>Before</summary>
<p>

```javascript {9}
const Binder = class extends ViewModelListener {
  // ... 생략
  render (viewmodel, _ = type(viewmodel, ViewModel)) {
    const processores = Object.entries(this.#processors)
    this.#items.forEach(({ vmName, el }) => {
      const vm = type(viewmodel[vmName], ViewModel)
      processores.forEach(([pk, processor]) => {
        Object.entries(vm[pk]).forEach(([k, v]) => {
          processor.process(vm, el, k, v)
        })
      })
    })
  }
}
```

```javascript {6}
const ViewModel = class extends ViewModelSubject {
  // ... 생략
  constructor(data, _ = type(data, 'object')) {
    super();
    Object.entries(data).forEach(([k, v]) => {
      if('styles,attributes,properties'.includes(k)) {
        if(!v || typeof v != 'object') throw `invalid object k: ${k}, v:${v}`
        // ...
      } else {
        Object.defineProperty(this, k, ViewModel.descriptor(this, '', k, v))
        if (v instanceof ViewModel) {
          v._setParent(this, k)
        }
      }
    })
    Object.seal(this)
  }
}
```
Client 코드
```javascript {2,5,8,11}
binder.addProcessor(new class extends Processor {
  _process (vm, el, k, v) { el.style[k] = v }
}('styles'))
binder.addProcessor(new class extends Processor {
  _process (vm, el, k, v) { el.setAttribute(k, v) }
}('attributes'))
binder.addProcessor(new class extends Processor {
  _process (vm, el, k, v) { el[k] = v }
}('properties'))
binder.addProcessor(new class extends Processor {
  _process (vm, el, k, v) { el[`on${k}`] = e => v.call(el, e, vm) }
}('events'))
```

</p>
</details>

**Processor의 Spec이 Code로 정의 된 상태다**     
→ code 를 읽지 않으면 데이터 형식을 올바르게 작성할 수 없게 된다.

자유롭게 데이터를 기술할 수 있게 만드는 방법
- 지금까지의 viewModel 파서는 *엄격한 형식을 갖고 있는 파서*이다.
- *자유로운 Parser*
   - Object 가 들어오면 Object 의 트리를 마음대로 탐색하면서 Object 의 키와 값들을 getter setter 로 바꿔주고
배열의 원소들을 getter setter 로 바꿔주어야 한다.
    - 즉. 어떤 형식이든 안정적으로 Observer 패턴이 잘 적용되는 Getter 와 Setter 로 만드는 Parser 를 만들어야 한다.

기존 viewModel 의 constructor 는 viewModel 의 구조를 엄격히 제한하는 파서의 기능을 하고 있었다.       
이 기능을 define 메서드에게 위임을 할 것이다. 
```javascript 
const ViewModel = class extends ViewModelSubject {
  static KEY = Symbol()

  constructor(data, _ = type(data, 'object')) {
    super();
    this[ViewMode.KEY] = 'root';
    Object.entries(data).forEach(([k, v]) => this.define(this, k, v));
    Object.seal(this);
  }

  // 모든 Key를 Observer에게 보고한다.
  define(target, k, v) {
    // ViewModel 은 생성하지 않아도 이미 생성자에서 스캔했기 때문에 ? 스캔하지 않는다. 
    if (v && typeof v == 'object' && !(v instanceof ViewModel)) {
      if (v instanceof Array) {
        target[k] = []
        // 상대적인 경로 표기. key의 확장 -> 키로부터 카테고리를 알 수 있게 된다.
        target[k][ViewModel.KEY] = target[ViewModel.KEY] + '.' + k 
        // 재귀
        v.forEach((v, i) => this.define(target[k], i, v))
      } else {
        target[k] = { [ViewModel.KEY]: target[ViewModel.KEY] + '.' + k } 
        Object.entries(v).forEach(([ik, iv]) => this.define(target[k], ik, iv))
      }
      Object.defineProperty(target[k], 'subKey', {
        get: () => target.subKey
      })
    } else {
      // 재귀 함수는 재귀가 끝나는 조건을 명확하게 알면 된다.
      // 종결 조건을 반드시 만들어야 한다.
      if (v instanceof ViewModel) v._setParent(this, k)
      Object.defineProperties(target, {
        [k]: {
          enumerable: true,
          get: _ => v,
          set: newV => {
            v = newV
            // 키로부터 카테고리를 알 수 있게 된다.
            this.add(new ViewModelValue(target.subKey, target[ViewModel.KEY], k, v))
          }
        }
      })
    }
  }
}
```

아무 객체나 observe 가 되는 viewModel 로 바뀌었다. 

Binder 에서 Processor 를 가져올 때 Category 를 식별하는 로직이 필요
```javascript
const Binder = class extends ViewModelListener {
  viewmodelUpdated (updated) {
    const items = {}
    this.#items.forEach(({ vmName, el }) => {
      items[vmName] = [type(rootViewModel[vmName], ViewModel), el]
    })
    updated.forEach(({ subKey, category, k, v }) => {
      if (!items[subKey]) return
      // (category)키 경로의 마지막 것을 가져온다. 
      const [vm, el] = items[subKey], processor = this.#processors[category.split('.').pop()]
      if (!el || !processor) return
      processor.process(vm, el, k, v)
    })
  }}
```
Processor 세트를 매 번 만들지 않고 미리 만들어 두자.
```javascript
const SetDomProcessor = (() => {
  const visitor = new DomVisitor
  const scanner = new DomScanner(visitor)
  // Process가 단순한 이유는 Binder가 무거워졌기 때문
  // 이에 대한 의사결정은 조직에 따라 달라짐
  const baseProcessors = [
    new class extends Processor {
      _process (vm, el, k, v) { el.style[k] = v } 
    }('styles'),
    new class extends Processor {
      _process (vm, el, k, v) { el.setAttribute(k, v) }
    }('attributes'),
    new class extends Processor {
      _process (vm, el, k, v) { el[k] = v }
    }('properties'),
    new class extends Processor {
      _process (vm, el, k, v) { el[`on${k}`] = e => v.call(el, e, vm) }
    }('events')
  ]
  const setProcessor = () => {
    const binder = type(scanner.scan(document.body), Binder)
    baseProcessors.forEach(v => binder.addProcessor(v))
  }
})();
const binder = SetDomProcessor();
```

다음은 Binder 와 무관한 Processor Set 을 만들 수 있다.

```javascript {2}
const Binder = class extends ViewModelListener {
  #items = new Set; #processor = null;

  set processor(v) {
    this.#processor = v;
  }

  render(viewmodel, _ = type(viewmodel, ViewModel)) {
    const processors = Object.entries(this.#processors);
    this.#items.forEach(item => {
      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;
      if (this.#processors?.cat = pk)   // pk ??
        process(vm[pk], el, k, v);
    });
  }
}
```
Processor 를 LinkedList 로 바꾸었다.
```javascript
const Processor = class {
  cat; #next = null;
  constructor(cat) {
    this.cat = cat;
    Object.freeze(this);
  }
  next(process) {
    this.#next = process;
    return process;
  }
  
  process(vm, el, k, v, _0 = type(vm, ViewModel), _1 = type(el, HTMLElement), _2 = type(k, "string")) {
    this._process(vm, el, k, v);
    if (this.#next) this.#next.process(vm, el, k, v);
  }

  _process(vm, el, k, v) { throw "override"; }
}
```

```javascript
const p1 = new (class extends Processor {
  _process(vm, el, k, v) {
    el.style[k] = v;
  }
})("styles");

p1.next(new (class extends Processor{
  _process(vm, el, k, v) { el.setAttribute(k, v); }
})("attributes"))
.(next(...))
.(next(...))
;
// ...

// LinkedList 의 head 만 set 하였다.
binder.processor = p1;
```

일반적으로 객체안에 collection 이 있으면 위험한 책임이다.      
일반화를 깨는 주요 원인은 collection 루프일 수 있다.     
collection 를 갖고 있는 것이 루프를 돌면 정책이 다양할 수가 없다.  

Processor 로 위임을 한다면, process 의 다양한 정책을 실현할 수 있다.
```javascript
process(...) {
  if (this.#next && this.isOk && vm... && ... Condition ) ...
}
```
 
`#items` 는 값 객체이고, 행위가 forEach (가능성) 밖에 없기 때문에 안전하다.    
반면에 processor 는 행위를 갖고 있는 객체이고, 안전하지 않다.
 
디자인의 정답이 없는 이유는, 그 사람, 조직에게 맞냐 안맞냐가 중요하다.    
어려운 부분이 생기면 쉬운 부분이 생기기 마련이다.

성급한 일반화는 안된다.   
서비스가 매일 바뀐다면 코어를 가볍게 만든다.   
안정적인 서비스는 코어를 무겁게 만들어 제어의 역전을 한다. 

## 3. List 표현하기    
```html
<body>
<section id="target" data-viewmodel="wrapper">
  <h2 data-viewmodel="title"></h2>
  <section data-viewmodel="contents"></section>
  <ol data-viewmodel="list">
    <li data-template="listItem" data-viewmodel="item"></li>
  </ol>
</section>
</body>
```

DomScanner 에 f 함수 부분이 바뀌었다.

```javascript {9}
const DomScanner = class extends Scanner {
  static #template = new Map;
  static get(k) { return this.#templates.get(k); }
  constructor(visitor, _=type(visitor, DomVisitor)) {
    super(visitor);
  }
  scan(target, _ = type(target, HTMLElement)) {
    const binder = new Binder, f = el => {
      const template = el.getAttribute("data-template");
      if (template) {
        el.removeAttribute("data-template");
        DomScanner.#templates.set(template, el);
        // 템플릿은 진짜 원소가 아니므로 부모에서 제거한다.
        el.parentElement?.removeChild(el);
      } else {
        const vm = el.getAttribute("data-viewmodel");
        if (vm) {
          el.removeAttribute('data-viewmodel');       
          binder.aadd(new BinderItem(el, vm));  
        }
      }
      f(target);
      this.visit(f, target);
      return binder;
    }
  }
}
```

새로운 template processor 를 추가하였다. viewModel 의 template 이라는 key 에 반응할 것이다. 
```javascript
new (class extends Processor {
  _process(vm, el, k, v) {
    const { name = err("no name"), data = err("no data")} = vm.template;
    const template = DomScanner.get(name) || err("no template:" + name);
    if (!(data instanceof Array)) err("invalid data: " + data);

    /* (*) move To
    data.forEach((vm, i) => {
      // 클렌징 코드와 로직이 섞여있는 나쁜 코드 
      if (!(vm instanceof ViewModel)) err(`invalid Viewmodel: ${i} - ${vm}`);
    });
    */

    // BLACKLIST -- Shield Pattern
    // ------------------- 
    // WHITELIST
    // 검증된 데이터를 사용하자 *****
    // const WL = { template, data };
    Object.freeze(data);
    visitor.visit(el => {
      if (el.binder) {
        const [binder, vm] = el.binder;
        binder.unwatch(vm);
        delete el.binder;
      }
    }, el);
    el.innerHTML = '';
    data.forEach((vm, i) => {
      // 클렌징 코드와 로직이 섞여있는 나쁜 코드, 주석 (*) move To 으로 이동해야 한다. 
      // 이 줄과 WHILTELIST 코드 사이에 data 를 쓰는 코드가 나오면 버그가 생길 수 있다. 
      // 로직 코드가 시작되기 전에 검증이 끝나야 한다.
      if (!(vm instanceof ViewModel)) err(`invalid Viewmodel: ${i} - ${vm}`);
      const child = template.cloneNode(true);
      const binder = setProcessor(scanner.scan(child));
      el.binders = [binder, vm];
      binder.watch(vm);
      el.appendChild(child);
    });
  }
})("template")
```

```javascript
const viewmodel = ViewModel.get({
    isStop:false,
    changeContents(){
        this.wrapper.styles.background = `rgb(${parseInt(Math.random()*150) + 100},${parseInt(Math.random()*150) + 100},${parseInt(Math.random()*150) + 100})`;
        this.contents.properties.innerHTML = Math.random().toString(16).replace(".", "");
        this.list.template.data.forEach(({item:{styles, properties}})=>{
            properties.innerHTML = Math.random().toString(16).replace(".", "");
            styles.background = `rgb(${parseInt(Math.random()*150) + 100},${parseInt(Math.random()*150) + 100},${parseInt(Math.random()*150) + 100})`;
        });
    },
    // ...
    list:ViewModel.get({
        template:{
            name:"listItem",
            data:"1,2,3,4,5,6".split(",").map(v=>ViewModel.get({
                item:ViewModel.get({
                    styles:{background:"#fff"},
                    properties:{innerHTML:"item " + v}
                })
            }))
        }
    })
});
```


