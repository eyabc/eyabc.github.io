---
title: 섬세한 권한 조정
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/r4vOF7WpxgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

자바스크립트는 기본 접근 권한은 모두 *public* 이다.

```javascript
const ViewModel = class extends ViewModelSubject {
  static get(data) {
    return new ViewModel(data);
  }

  styles = {};
  attributes = {};
  properties = {};
  events = {};
  
  // subKey 와 관련된 isUpdated 나 listeners 가 모두 없어졌다.
  #subKey = '';
  // outer readOnly
  get subKey() {
    return this.#subKey;
  }

  #parent = null;
  get parent() {
    return this.#parent;
  }
  
  // js 는 private function 을 만들 수 없다. 외부용이 아니라는 뜻으로 관습적인 _ 를 붙이자.
  // 트랜잭션을 함수로 표현하였다. parent 가 바뀌는 순간 일어나야 하는 일. 트랜잭션이 발견되면 무조건함수로 빼자.
  setParent(parent, subKey) {
    this.#parent = type(parent, ViewModel);
    this.#subKey = subKey;
    this.addListener(parent);
  }

  constructor(data, _ = type(data, 'object')) {
    super();
    Object.entries(data).forEach(([cat, obj]) => {
      if ('styles,attributes,properties'.includes(cat)) {
        if (!obj || typeof obj != 'object') throw`invalidobjectcat:${cat}, obj:${obj}`;
        this[cat] = Object.defineProperties({}, Object.entries(obj).reduce((r, [k, v]) => {
          r[k] = {
            enumerable: true, get: _ => v, set: newV => {
              v = newV;
              this.add(new ViewModelValue(this.#subKey, cat, k, v));
            },
          };
          return;
        }, {}));
      } else {
        Object.defineProperties(this, {
          [cat]: {
            enumerable: true, get: _ => obj, set: newV => {
              obj = newV;
              // 부모(ViewModelSubject) 의 속성에게 message 를 보냄
              this.add(new ViewModelValue(this.#subKey, 'root', cat, obj));
            },
          },
        });
        // 달라진 부분
        if (obj instanceof ViewModel) obj.setParent(this, cat);
      }
    });
    // ViewModel.notify(this); 가 삭제되었다. 생성시점이 아닌 add 를 하는 시점에 lazy 할 것이기 때문
    Object.seal(this);
  }

  // viewModelListener 의 메서드를 오버라이드 하고있다. 
  viewmodelUpdated(updated) {
    updated.forEach(v => this.add(v));
  }
}
```
