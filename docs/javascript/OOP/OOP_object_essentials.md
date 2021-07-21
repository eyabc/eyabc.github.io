---
title: Object essentials 객체의 본질
---

객체가 진짜로 해야만 하는 책임 

```javascript
const EssentialObject = class {
  #name = '';        
  #screen = null;

  constructor(name) {
    this.#name = name;
  }

  camouflage() {
    this.#screen = (Math.random() * 10).toString(16).replace('.', '');
  }

  get name() {
    return this.#screen || this.#name;
  }
};
```
두가지를 모두 충족해야지 객체이다.

## 1. Hide State 

속성은 모두 private

- 속성이 숨겨져 있지 않으면 객체지향 프로그래밍이 아니다.  
- 은닉을 하지 않으면 공개적으로 사용하고 있는 값이 된다. 

## 2. Encapsulation
- 은닉은 데이터에 대한 것
- 캡슐화는 메서드에 대한 것

### getter, setter
본질적으로 그 메서드를 왜 호출해야 하는지에 대한 이유를 구체화 하지 않았기 때문에,     
캡슐화에 실패하게 된다.
 
은닉을 하더라도, 내부 상태 관리를 외부에 위임하면 객체가 아니다.
- setAge 는 나의 상태임에도 불구하고 외부에서 변경한다. 


