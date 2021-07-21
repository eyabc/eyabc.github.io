---
title: Observer 1
---

<img src="https://user-images.githubusercontent.com/31977543/111023685-c7723200-841d-11eb-9baf-e2bb8409fbd0.png" width="70%" style={{minWidth: 400 +'px'}}/>

이전의 MVVM 은 observation 을 하고 있지 않음     
- Model 의 변화를 자동으로 인식해서 자동으로 Binder 가 움직이지 않았다
- 수동으로 Binder 를 call 했다. 
- *binder.render(viewmodel);*

## Observer 패턴
- Model 변화 → Binder 자동으로 동작 

많은 프레임 워크에서는 자동으로 해준다. 

Binder 가 ViewModel 을 Observe 한고 렌더링 한다.
![image](https://user-images.githubusercontent.com/31977543/111900607-e6ed0880-8a76-11eb-84b3-1e5e6f7c251f.png)

Observer(Binder) 가 아닌, ViewModel 이 일을 더 많이해야 한다.
- ViewModel 이 Binder 에게 **notify** 한다. 
- ViewModel 의 변화를 **분류**해서 보내줘야 한다. 
- **ViewModel 의 변화를 스스로 알수 있어야 한다.**

1. [defineProperty](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
    - 현시점에서 es5 가 돌아가지 않는 브라우저는 없을 것이다.
2. [Proxy](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (es6~, babel 로 converting 불가능)
    - 안드로이드 갤럭시 ~s4, 노트2, 윈도우 7(ie9) 는 ES6 미지원 
    - 신중하게 써야한다

![image](https://user-images.githubusercontent.com/31977543/111900635-097f2180-8a77-11eb-8bdd-dd72fdafc11a.png)

## Observer 를 형(객체)으로 정의
```javascript
const ViewModelListener = class {
  viewmodelUpdated(updated) {
    throw 'override';
  }
};
```
객체의 특정한 메서드 *ViewModelListener* 를 호출해야 *Observing* 을 할 수 있다.
- ViewModelListener 가 Type 으로 들어왔을 경우 
- *viewmodelUpdated* 메서드를 호출해서 Observing 을 통보한다.

Observer 패턴은 
- 이벤트를 만들어서 보내주는 Subject 가 있고
- 이벤트를 수신하는 Observer 가 있다.

> rss 에서는 event emitor 이라고 한다. 끊임없이 이벤트를 만들어 내는것.

## [뷰모델](https://eyabc.github.io/docs/javascript/OOP_mvvm_role_design#viewmodel) 확장 

### 필드와 메서드
필드
1. *styles, attributes, properties, events* 필드를 가진다.
2. *isUpdated* 뷰 모델의 업데이트 된 항목을 가진다.
3. *listeners* 뷰 모델의 변화를 통보할 리스너들 목록이다. 

메서드
1. 리스너 추가
2. 리스너 삭제
3. 리스너에게 isUpdated 를 통보함
4. 생성자
    - *styles, attributes, properties, events* 저장
```javascript
const ViewModel = class {
  static get(data) {
    return new ViewModel(data);
  }

  styles = {};
  attributes = {};
  properties = {};
  events = {};
  
  // 3) 리스너를 관리하기 위한 set. 업데이트 된 것들
  #isUpdated = new Set;

  /*
     2) ViewModel 이 Subject 이다.
      Subject 는 리스너들에게 notification 해줘야 한다.
  */
  #listeners = new Set;

  addListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.add(v);
  }

  removeListener(v, _ = type(v, ViewModelListener)) {
    this.#listeners.delete(v);
  }

  // 3) 리스너에게 isUpdated 을 전송한다. 
  notify() {
    this.#listeners.forEach(v => v.viewmodelUpdated(this.#isUpdated));
  }

  // 1) 스위치 문에 중복된 키가 반복되고 똑같은 할당이 반복되는 중복이 있다. 
  constructor(checker, data) {
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
    Object.seal(this);
  }
};

// client
const viewmodel = ViewModel.get({
  wrapper: ViewModel.get({styles: {width: '50%', background: '#ffa', cursor: 'pointer'}}),
  title: ViewModel.get({properties: {innerHTML: 'Title'}}),
  contents: ViewModel.get({properties: {innerHTML: 'Contents'}}),
});
```

### 생성자의 변경
```javascript
const ViewModel = class {
    constructor(checker, data, _ = type(data, 'object')) {
      super();
      /*
        data : {
                  styles: {width: '50%', background: '#ffa', cursor: 'pointer'},
                  properties: {...},
                  attributes: {...},
                  events: {...},
                  [category]: ViewModel.get({...}),
                },
      */
      Object.entries(data).forEach(([k, v]) => {
        /*
          JS 의 문자열 indexOf 는 특별하게 빠르다.
          C로 쓰였는데, C 에서 인라인루프?? 를 돌기 때문
        */
        if ('styles,attributes,properties'.includes(k)) {
          // setter 를 감시하는 defineProperties
          this[k] = Object.defineProperties({},
            // v 는 { width: '50%', background: '#ffa', cursor: 'pointer' } 가 될 수 있다. 
            Object.entries(v).reduce((r, [k, value]) => {
              r[k] = {
                enumerable: true, 
                get: _ => value, 
                set: newV => {
                  value = newV;
                  // 변화된 속성을 저장한다.
                  this.#isUpdated.add(new ViewModelValue(cat, k, value));
                },
              };
              return r;
            }, {}));
        } else {
          // default 인 경우이다. 기존에는 this[k] = v;
          Object.defineProperty(this, k, {
            enumerable: true, 
            get: _ => v,
            set: newV => {
              v = newV;
              this.#isUpdated.add(new ViewModelValue('', k, v));
            },
          });
        }
      });
      // ...
    }
}
``` 

### ViewModelValue
```javascript
const ViewModelValue = class {
  cat;
  k;
  v;

  constructor(cat, k, v) {
    this.cat = cat;
    this.k = k;
    this.v = v;
    Object.freeze(this);
  }
};
```

