---
title: 5-3 Style Rule
---

## CLASSES
![image](https://user-images.githubusercontent.com/31977543/122639200-8df34600-d133-11eb-9aeb-4e555144c1c6.png)
![image](https://user-images.githubusercontent.com/31977543/121343561-cdfd4080-c95d-11eb-9558-25e130cfffc3.png)

## Style 의 추상화
:::tip STYLE 을 추상화 해서 하나의 객체로 만들 것이다.      
style 에다가 날로 속성을 prefix 를 넣으면 vendor prefix 를 해결할 수 없기 때문이다.
:::

```html {10}
<style id="s">
.test { background: #ff0 }
</style>
<script>
const el = document.querySelector("#s");
const sheet = el.sheet;
const rules = sheet.cssRules;
const rule = rules[0];
console.log(rule.selectorText);
console.log(rule.style.background); // 관심사
</script> 
```

### style 클래스를 만들기 전에 필요한 utility
```javascript
const Style = (() => {
  const prop = new Map, prefix = 'webkit,moz,ms,chrome,o,khtml'.split(',');
  const NONE = Symbol();
  const BASE = document.body.style;
})();
```
    
1. vendor prefix 문자열이 필요
    - 브라우저마다 다양한 Vendor prefix 문자열이 있다.
    - major 하지 않는 것들까지 포함하면 20종이 넘는다.

2. map 은 진짜속성과 가짜속성을 묶는 역할
    - map 의 key : 일반적으로 쓰고 있는 속성(background... )
    - 값: vendor prefix 포함해서 지원하는 변환된 진짜 이름

3. NONE 
    - 심볼로 정의하였는데, "브라우저가 지원하지 않음"을 표기하기 위한 장치
     
:::note document.body.style: 실행 중에, Vendor prefix 를 판별해주는 객체  
그런데 Vendor prefix 를 실행 도중에만 알수 있다.
누구한테 이것을 물어볼 수 있을까?

물어볼 대상은 **모든 브라우저가 가지고 있는** document 의 body 의 style 이다.

만약 document.body.style 이 그 속성을 갖고 있다라면  
이 속성은 존재할 것이다. 
:::

해결할 것은 두가지 이다. 

1. vendor prefix (runtime fetch)
    - vendor prefix 를 런타임에 fetch 하기 위해서 BASE (body 에 있는 style 객체)를 이용할 것

2. unsupported property (graceful fail)
    - 지원하지 않는 속성은 부드럽게 실패하기 위해서 NONE 을 사용 할 것

### 표준이름을 주면, 지원하는 진짜이름을 반환하는 함수
border-radius 를 보냈는데        
- 실제로 브라우저가 지원하면 그 이름을 그대로 받아야 하고
- webkit-border-radius 가 있으면 webkit-border-radius 를 받아야 한다.
- IE 같이 속성이 없으면 NONE 으로 반환할 것이다. 
```javascript {5,17,22}
const Style = (() => {
  const prop = new Map, prefix = 'webkit,moz,ms,chrome,o,khtml'.split(',');
  const NONE = Symbol();
  const BASE = document.body.style;
  const getKey = key => {
    // prop 안에 map 으로 캐시를 잡아두었다.
    if (prop.has(key)) return prop.get(key);   
    // 내가 보낸 키가 BASE 에 존재하는가? body-style 에 border radius 가 있을 경우 이시점에 캐시를 잡는다.
    if (key in BASE) prop.set(key, key);

    // body-style 에 border-radius가 존재하지 않으면?
    else if (!prefix.some(v => {
      // prefix 를 붙인 속성은 존재하는가?
      const newKey = v + key[0].toUpperCase() + k.substr(1);  // webkitBackground 
      if(newKey in BASE) {
        prop.set(key, newKey);
        key = newKey;
        return true;
      } else return false;
    })) {
      prop.set(key, NONE);
      key = NONE; // prefix 로도 안되면 없는 키 !;
    }
  }
})();
```
 
위 내용을 바탕으로 class 를 만들 것인데,

```javascript title:unsupported property(graceful fail)
const Style = (() => {
  const prop = new Map, prefix = 'webkit,moz,ms,chrome,o,khtml'.split(',');
  const NONE = Symbol();
  const BASE = document.body.style;
  const getKey = key => { /*...*/ }
  return class {
    constructor(style) { this._style = style; } 
    get(key) {
      key = getKey(key);
      if (key === NONE) return null;
      return this._style[key];
    }
    set(key, val) {
        key = getKey(key);
        if(key !== NONE) this._style[key] = val;
        return this;  
    }
  };
})();
```

우리의 관심사는 `rule.style` 이다. 
생성자에서 rule.style 을 갖고 태어난다.     
rule.style 를 래핑하고 좀더 쉽게 조작할 수 있는 클래스가 된다.

```javascript
const style = new Style(rule.style);
style.set('borderRadius', '20px')  // borderRadius 가 prefix 가 있든 없든 잘 작동 할 것임.
     .set('boxShadow', '0 0 0 10px red');
```

## Rule 의 추상화
rule 은 type, selectortext, style 을 감싸고 있다.

![image](https://user-images.githubusercontent.com/31977543/121343561-cdfd4080-c95d-11eb-9558-25e130cfffc3.png)

```javascript
const Rule = class {
  constructor(rule) {
    this._rule = rule;
    this._style = new Style(rule.style);
  }
  get(key) {
    return this._style.get(key); 
  }
  set(key, val) {
    this._style.set(key, val);
    return this;
  }
}

const rule = new Rule(el.sheet.cssRules[0]);
rule.set('borderRadius', '20px')  
    .set('boxShadow', '0 0 0 10px red');
```

## Sheet 의 추상화
이 객체의 주요한 기능
- rule 의 add / remove 

```javascript title="기존의 sheet 의 rule insert / delete"
const sheet = el.sheet;
const rules = sheet.cssRules;

sheet.insertRule('.red{, background:red}', rule.length);
sheet.deleteRule(rules.length - 1);
```

```javascript title="Sheet 의 추상화"
const Sheet = class {
  constructor(sheet) {
    this._sheet = sheet;
    this._rule = new Map;
  }
  add(selector) {
    const index = this._sheet.cssRules.length;
    this._sheet.insertRule(`${selector}{}`, index);
    const cssRule = this._sheet.cssRules[index];
    const rule = new Rule(cssRule); 
    this._rules.set(selector, rule);
    return rule;
  }
  remove(selector) {
    if (!this._rules.contains(selector)) return;
    const rule = this._rules.get(selector)._rule;
    Array.from(this._sheet.cssRules).some((cssRule, index) => {
      if (cssRule === rule._rule) {
        this._sheet.deleteRule(index);
        return true;
      }
    })
  }
  get(selector) {
    return this._rules.get(selector);
  }
}
```

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <style></style>
</head>
<body>
  <div class="test">test</div>
</body>
</html>
```

0 번 인덱스는 document 기본값이다. html 이 있으면 0 번은 항상 존재한다고 한다.
```javascript
const sheet = new Sheet(document.styleSheets[1]);
sheet.add('body')
      .set('background', '#f00');
sheet.add('.test')
      .set('cssText', `
  width: 200px;
  border: 1px solid #fff;
  color: #000;
  background: #fff
`);
``` 

:::note cssText
특수한 key 인 cssText 의 값을 set 하면 
브라우저가 알아서 parsing 해서 넣어준다.      
javascript 속성이름이 아닌 css 속성이름을 그대로 쓸수 있다는 장점     
물론 이 방식은 style sheet 가 하나하나 키를 매핑해주는 기능이 무력화 된다.
(귀찮아서 했다)
:::
