---
title: 5-4 Keyframes/Keyframe Rule
---

*from/to* 는 keyframe animation selector 이라는 것이다.
이것을 어떻게 객체화 시킬까?
```css
@keyframes size {
    from {width: 0}
    to   {width: 500px}
}
```

```javascript
const sheet = new Sheet(document.styleSheets[1]);
sheet.add('@keyframes size').set(/* ... */);
```
```javascript
const Sheet = class {
  constructor(sheet) { /* ... */}
  add(selector) {
    const index = this._sheet.cssRules.length;
    this._sheet.insertRule(`${selector}{}`, index);
    const cssRule = this._sheet.cssRules[index];

    // 여기서부터 문제.. style rule 로 가정한 부분... 의존성 주입! 여기서는 분기문으로 작성
    const rule = new Rule(cssRule); 
    this._rules.set(selector, rule);
    return rule;
  }
}
```

```javascript
const Sheet = class {
  constructor(sheet) { /* ... */}
  add(selector) {
    const index = this._sheet.cssRules.length;
    this._sheet.insertRule(`${selector}{}`, index);
    const cssRule = this._sheet.cssRules[index];

    let rule;
    if (selector.startWith('@keyframes')) { 
      // 키프레임 애니매이션 처리
      rule = new KeyFramesRule(cssRule); // delegation
    } else {
      rule = new Rule(cssRule); 
    }

    this._rules.set(selector, rule);
    return rule;
  }
}
```

keyframeRule 객체는 sheet 객체와 거의 똑같다.      
size 가 하나의 rule 이긴 하지만 from, to 안쪽이 style_sheet 처럼 생겼다.     
insertRule 대신 appendRule 을 쓴다.
```javascript {2,3,4,8}
const KeyFramesRule = class {
  constructor(rule) {
    this._keyframe = rule;
    this._rules = new Map;
  }
  add(selector) {
    const index = this._keyframe.cssRules.length;
    this._keyframe.appendRule(`${selector}{}`, index);
    const cssRule = this._keyframe.cssRules[index];
    const rule = new Rule(cssRule); 
    this._rules.set(selector, rule);
    return rule;
  }
  remove(selector) {
    if (!this._rules.contains(selector)) return;
    const rule = this._rules.get(selector)._rule;
    Array.from(this._keyframe.cssRules).some((cssRule, index) => {
      if (cssRule === rule._rule) {
        this._keyframe.deleteRule(index);
        return true;
      }
    })
  }
  get(selector) {
    return this._rules.get(selector);
  }
}
```

```javascript
const KeyFramesRule = class {
  constructor(rule) { /* ... */}
  add(selector) { /* ... */}
  remove(selector) { /* ... */}
}

const sheet = new Sheet(document.styleSheets[0]);
const size = sheet.add('@keyframes size');
size.add("from").set("width", "0");
size.add("to").set("width", "500px");
```


```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <style> 
    .test {
      background: #f00;
      animation: size 1s infinite alternate;
    }
  </style>
</head>
<body>
  <div class="test">test</div>
</body>
</html>
```
:::tip
특수한 애니메이션을 동적으로 정의해서 사용할 수 있게 되었다.      
키프레임 실렉터를 정의해서 동적정의 / 재활용 가능하다.
:::
