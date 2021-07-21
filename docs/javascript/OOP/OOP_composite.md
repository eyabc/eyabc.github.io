---
title: Composite
---

## 다중 계층의 문제
```javascript
const viewmodel = ViewModel.get({
  wrapper: ViewModel.get({styles: {width: '50%', background: '#ffa', cursor: 'pointer'}}),
  title: ViewModel.get({properties: {innerHTML: 'Title'}}),
  contents: ViewModel.get({properties: {innerHTML: 'Contents'}}),
});
```
- 파일시스템 : 폴더안에 파일이 폴더안에 폴더
- 알고리즘 문제에서는 동적계획법, 트리탐색

속도는 동적계획법이 더 빠르지만 정형화된 알고리즘에 가면 트리탐색이 더 쉽다.

## Composite
내 문제를 스스로 다 해결하지 않고, 위임을 반복해서 그것들을 취합하는 행위

- 상위 ViewModel 의 변화
    - 자기를 구독 *Observer* Listen 하고 있는 대상에게 notify 된다.

- 상위 ViewModel 안의, 하위 ViewModel 에 변화
    - 하위 ViewModel 변화를, 상위 ViewModel 이 Listen 구독하게 만들 고자 한다.

Binder 는 최상위 ViewModel 을 알면 모든 ViewModel 을 다 매핑할 수 있다.
- Binder 는  최상위 ViewModel 와 계약을 하고, 하위 ViewModel 과는 계약하지 않는다.
- 하위 ViewModel 의 변화는
    - 자신의 리스너에게도 알려야 하고,
    - 상위의 리스너에게도 알려야 한다.

## 객체지향 컴포지션 → 동적 위임
### ViewModelValue
Notification 으로 Observer 가 수신 받는 객체 (info 객체)       

#### 인포객체의 설계
- 기능이 부족하면 서브젝트(ViewModel) 를 참조하게 된다.??
- 너무 많으면 유지보수할 때 마다 다른 코드가 다 깨진다.

#### subKey
- 변화 한 것이 이 나 자신인지, 하위 ViewModel 인지를 구분
- subKey 는 자식이자 자기자신을 가리킬 수 있다.
- 모든 자식들이 고유한 서브키를 갖고 있다고 가정했다.

```javascript
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
```

### ViewModel
ViewModel 은 Notifier 인 동시에 Observer 가 될 수 있기 때문에 ViewModelListener 를 확장한다.
```javascript
const ViewModel = class extends ViewModelListener {
  // ...
  subKey = '';
  parent = null;

  // ViewModel 가 Observer, 리스너로서의 역할,
  // 하위 ViewModel 변화 → this.isUpdated 에 저장 
  viewModelUpdated(updated) {
    updated.forEach(v => this.#isUpdated.add(v));
  }

  constructor(checker, data, _ = type(data, 'object')) {
    super();
    // ViewModel 일 때 k 는 [wrapper, title, contents], v 는 ViewModel 이다.
    Object.entries(data).forEach(([k, v]) => {
      if ('styles,attributes,properties'.includes(k)) {
        // ..
      } else {  // << 'styles,attributes,properties' 에 해당하지 않거나 viewModel 일 때 >> 
        Object.defineProperty(this, k, {
          enumerable: true, get: _ => v, set: newV => {
            v = newV;
            /*
              1) 나의 변화를 Notification → 나의 subKey 사용 
              만약에 subKey 가 "wrapper, title, contents" 라면 어떤 viewModel 의
              하위 viewModel 이라는 의미이다.
            */
            this.#isUpdated.add(new ViewModelValue(this.subKey, '', k, v));
          },
        });
        
        /*
          << 하위 ViewModel 이 존재할 때 추가적으로>>
          하위 ViewModel 라면, 자신의 변화를 상위 ViewModel 에게 전달(전파)해야 한다.
          상위 ViewModel 라면, 하위 ViewModel 의 변화를 수신해야 한다.
          - 상위 ViewModel(서브젝트) 가 Observer 가 되어야 한다.
          - 서브젝트가 리스너가 아닐 때 까지 변화가 전파되어야 한다.
          - 외부에 전파할 때, subKey(자신인지 하위 ViewModel 의 변화인지를 구분) 를 알린다.
        */
        if (v instanceof ViewModel) {
          /*
            v 는 하위 ViewModel 이다.
          */

          // 하위 ViewModel 는 상위 ViewModel 을 알게된다.
          v.parent = this;

          /*
            하위 ViewModel 의 subKey 에 "wrapper, title, contents" 들이 할당 될 수 있다.
            상위 ViewModel 에서 하위 ViewModel 의 parent와 subKey 를 결정
          */
          v.subKey = k;
          // 부모는 자식의 리스너가 된다.
          v.addListener(this);
        }
      }
    });

    /*
      데이터가 처음으로 완성되었을 때, 변화가 없지만 (setter 가 한번도 수행되지 않음)
      새로 만들어진것을 Notify 해야 한다.
    */
    ViewModel.notify(this);
    Object.seal(this);
  }

}

```

## requestAnimationFrame
notify 가 속성이 바뀔 때 마다 발생 → Binder 의 render 가 매우많이 발생

그러나,
- 브라우저에서 render 는 requestAnimationFrame 를 초과해서 일어나지 않는다. 
- requestAnimationFrame 당 변화를 취합해서 notify 한다. 

```javascript
const ViewModel = class extends ViewModelListener {
  // Observer 에게 통보 할 Subject(대상) 들의 모임 
  static #subjects = new Set;

  // requestAnimationFrame 을 최초로 한번 하게 한다.
  static #inited = false;

  // 내부에서는 타입체크를 할 필요 없다.
  static notify(vm) {
    this.#subjects.add(vm);
    if (this.#inited) return;
    this.#inited = true;

    // notify 가 한프레임당 한번만 호출 될 것 
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

  subKey = '';
  parent = null;

  constructor(checker, data, _ = type(data, 'object')) {
    // ...
    // ViewModel 이 최초로 생성될 때 subject 에 등록 한다. 
    ViewModel.notify(this);
    Object.seal(this);
  }
}
```

