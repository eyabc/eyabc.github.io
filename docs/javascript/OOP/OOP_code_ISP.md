---
title: ISP
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/r4vOF7WpxgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## *객체지향 프로그래밍*
- 처음에 이루고자 하는 목표 에서부터, *덩어리들을 차근차근 분리하고 깎아내 과는 과정*이라고 할 수 있다.
- 덩어리코드를 **클래스로 분리**해서 깎아 낸다.
- **역할(책임)을 기준**으로 깎아낸다.

## 책임과 역할
책임하고 역할은 비슷해 보이지만 동전의 양면이다.

- 책임을 진다는 것     
→ 책임에 맞는 권한도 갖고 있다는 이야기다.

반대로 권한이 없는데 책임만 있으면 기분이 나쁘겠죠 
 
 거꾸로, 책임을 지지 않고 권한을 휘두르면? ...
 
## ISP
*인터페이스 분리 원칙*에 따라 덩어리 진 **코드를 분리**할 수 있다. 

이때 말하는 인터페이스는 실제적으로, 물리적인 인터페이스가 아닌, **역할**을 이야기한다.


<details>
<summary>우리가 만든 ViewModel 는 매우 Heavy 하다</summary>
<p>

```javascript
const ViewModel = class extends ViewModelListener {
  static get(data) {
    return new ViewModel(data);
  }

  styles = {};
  attributes = {};
  properties = {};
  events = {};
  
  #isUpdated = new Set;
  #listeners = new Set;

  subKey = '';
  parent = null;

  static #subjects = new Set;
  static #inited = false;


  addListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.add(v);
  }

  removeListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.delete(v);
  }

  viewModelUpdated(updated) {
    updated.forEach(v => this.#isUpdated.add(v));
  }

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

  constructor(checker, data, _ = type(data, 'object')) {
    super();
    Object.entries(data).forEach(([k, v]) => {
      if ('styles,attributes,properties'.includes(k)) {
        // ..
      } else {  
        Object.defineProperty(this, k, {
          enumerable: true, get: _ => v, set: newV => {
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
}
```

</p>
</details> 


### 뷰모델의 역할
물리적인 뷰를 대신해서 인메모리 안에 순수한 메모리 객체로서의 뷰를 만들어 내는 것

뷰모델은 뷰를 대신하는 모델인데 뷰모델이 아래 메서드를 갖고 있는게 맞을까?
 
#### 1. Observer 패턴에서의 Subject 역할
```javascript
#isUpdated = new Set; 
#listeners = new Set;
addListener(v, _ = type(v, ViewModelListener)) {
  this.#listeners.add(v);
}
removeListener(v, _ = type(v, ViewModelListener)) {
  this.#listeners.delete(v);
}
notify() {
  this.#listeners.forEach(v => v.viewmodelUpdated(this.#isUpdated));
}
```

인터페이스 분리원칙에 따라 분리해보자

![image](https://user-images.githubusercontent.com/31977543/113152226-e0c60b80-9270-11eb-802c-e7719815895e.png)

*#isUpdated* 가 #info Set 으로 바뀐것 이외는 거의 다 비슷하다.
add 와 clear 가 추가 되었다.

```javascript
const ViewModelSubject = class extends ViewModelListener {
  #info = new Set;
  #listeners = new Set;
  add(v, _ = type(v, ViewModelValue)) {
    this.#info.add(v);
  }
  clear() {
    this.#info.clear();
  }
  addListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.add(v);
    ViewModelSubject.watch(this);
  }
  removeListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.delete(v);
    if (!this.#listeners.size) ViewModelSubject.unwatch(this);
  }
  notify() {
    this.#listeners.forEach(v => v.viewmodelUpdated(this.#info));
  }
};
```

#### 2. notify 인데 add 역할이 섞여있다.
그리고 notify 보다는 watch 와 unwatch 가 외부입장에서 중요하다

```javascript
static #subjects = new Set;
static #inited = false;
static notify(vm) {
  this.#subjects.add(vm);
  if (this.#inited) return;
  this.#inited = true;
  cons f = _ => {
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
```

 
after
```javascript
static #subjects = new Set;
static #inited = false;
static notify() {
  const f = _ => {
    this.#subjects.forEach(v => {
      if (v.#info.size) {
        v.notify();
        v.clear();
      }
    });
    if (this.#inited) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}
static watch(vm, _ = type(vm, ViewModelListener)) {
  this.#subjects.add(vm);
  if (!this.#inited) {
    this.#inited = true;
    this.notify();
  }
}
static unwatch(vm, _ = type(vm, ViewModelListener)) {
  this.#subjects.delete(vm);
  if (!this.#subjects.size) this.#inited = false;
}
```
자바스크립트의 싱글쓰레드 기반은 flag 제어가 쉽다.

