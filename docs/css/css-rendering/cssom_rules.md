---
title: 5-1 CSSOM & Rules
---

CSS 도 마찬가지로 javascript 를 통해 수정할 수 있다.

DOM 에 인라인 스타일을 넣는 것이 아니라.
CSS 그 자체를 수정한다. 

CSSOM
- CSS 를 모델링 해서 OBJECT 화 한 것

## CSS Object Model
:::note Style Dom Element
`<style></style>` 
- 스타일 태그를 의미

```html
<style id="s">
  .test { background: #ff0 }
</style>
```

```javascript
const el = document.querySelector("#s");
```

:::

### note CSS 의 실체! 스타일 태그 안의 sheet 속성 
CSS 의 실체는 DOM 으로 포장해서 html document 에 집어넣은 것이다.

:::note 태그

태그는 실체가 아닌, 어떤 것을 html 에 끼워넣기 위한 래핑 객체인 것이다. 
:::

sheet 안에는 **CSSStyleSheet** 라는 객체가 들어있다.
style 태그의 실제 실체인 것이다.
```javascript
const sheet = el.sheet;
```

sheet 는 **CSSRules** 라는 List(유사 배열) 를 갖고 있다.
- 수 많은 룰들을 소유하고 있다.

![image](https://user-images.githubusercontent.com/31977543/121201167-48bb5280-c8af-11eb-8d9b-22bd4827aa10.png)

```javascript
const rules = sheet.cssRules;
```
 
item 하나하나가 rule 이 된다.
```javascript
const rule = rules[0];
```
![image](https://user-images.githubusercontent.com/31977543/121201996-eadb3a80-c8af-11eb-9d5f-04303c3af0a7.png)

이 때 0 번에 들어있는 것은 
`
.test { backgound:#ff0 }
`

이다.
**하나의 CSS 정의가, 하나의 RULE 이 된다.**

![image](https://user-images.githubusercontent.com/31977543/121343561-cdfd4080-c95d-11eb-9558-25e130cfffc3.png)

RULE 에는 속성이 여러가지가 있다.
- Type
- selectorText
- style 객체  
  - CSSStyleDeclaration 클래스의 객체
  - DOM Element 에도 똑같은 style 객체가 들어있다.
  - 인라인 스타일을 주관한다
  - element 의 style 속성을 이용해서 조작한다.
 
```javascript
const el = document.querySelector("#s");
const sheet = el.sheet;
const rules = sheet.cssRules;
const rule = rules[0];
console.log(rule.selectorText); // .test
console.log(rule.style.background); // rgb(255, 255, 0)
```
<div>
<img src="https://user-images.githubusercontent.com/31977543/121344690-02bdc780-c95f-11eb-894f-1f4da33c252c.png" 
width="50%" style={{minWidth: 400 +'px'}}/>
</div>

<img src="https://user-images.githubusercontent.com/31977543/121344802-1e28d280-c95f-11eb-8fa5-7826cc843ccd.png" 
width="50%" style={{minWidth: 400 +'px'}}/>

<img src="https://user-images.githubusercontent.com/31977543/121344906-36005680-c95f-11eb-99c0-3e343f43b47e.png" 
width="50%" style={{minWidth: 400 +'px'}}/>

<img src="https://user-images.githubusercontent.com/31977543/121349560-a067c580-c964-11eb-8b2c-ae891fdc1543.png" 
width="50%" style={{minWidth: 400 +'px'}}/>

html text 를 통해서 정의했던 css 가 실제로 브라우저에서 
해석과정을 거치고나면 메모리에는 이러한 형태의 객체로 저장이 된다

## CSS Rule Type
![image](https://user-images.githubusercontent.com/31977543/121350002-166c2c80-c965-11eb-818a-1ed2452c64c0.png)
1번 타입의 Rule 이라는 뜻이다.
일반적으로 1번은 CSS 정의에 대한 Rule 이다

이 type 의 종류는 굉장히 많다.

https://developer.mozilla.org/en-US/docs/Web/API/CSSRule/type

css 에서 사용할 수 있는 모든 구문은 전부다      
대응되는 특별한 rule 객체로 바껴서 rules 안에 들어간다

## Insert Rule
다음은 동적으로 CSS 를 추가하는 문제이다.

css는 어디에 추가하는 것이냐면 rules 라는 list 에 append 를 하는 것이 아닌        
sheet 에다가 직접 추가한다.

```javascript
const sheet = el.sheet;
const rules = sheet.cssRules;

sheet.insertRule('.red{background:red}', rules.length);
sheet.insertRule('.blue{background:blue}', rules.length);

console.log(Array.from(rules)
                 .map(v => v.cssText) 
                 .join('/n'));
```
insertRule 의 첫번째 문자열 인자를 알아서 파싱해준다.     
두번째 인자는 인덱스 번호를 지정한다. 

length 를 넣으면 젤 마지막에 추가한다. 

css 는 rulesList 안에 순서가 중요하다.        
아래에 있는 것이 덮어쓴다.

```html
<body>
  <div class="red">red</div>
  <div class="blue">blue</div>
</body>
<style id="s">
    .test { background: #ff0 }
</style>
<script>
  const el = document.querySelector("#s");
  const sheet = el.sheet;
  const rules = sheet.cssRules;
  const rule = rules[0];

  sheet.insertRule('.red{background:red}', rules.length);
  sheet.insertRule('.blue{background:blue}', rules.length);
</script>
```
![image](https://user-images.githubusercontent.com/31977543/121353057-6ac4db80-c968-11eb-917f-cbf8d82711ef.png)

docuemnt 는 document 의 sheet 객체에 변화가 생기면 repaint 를 한다.       
상황에 따라서는 reflow 까지 처리를 한다.      
화면을 다시 리랜더링 하는 효과가 있다. 
```javascript
document.querySelector('.red').onclick = () => {
  sheet.insertRule('.red{background:red}', rules.length);
  sheet.insertRule('.blue{background:blue}', rules.length);
} 
```

document 에 style 이 어떻게 변화했는지 어떻게 알까?        
document 에 처음부터 style 태그를 박아놨기 때문이다.

![image](https://user-images.githubusercontent.com/31977543/121354073-811f6700-c969-11eb-9571-d3215699deed.png)

```html
<style id="s">
    .test { background: #ff0 }
</style>
<style id="s2">
    .test2 { background: #ff0 }
</style>
```

![image](https://user-images.githubusercontent.com/31977543/121354703-1884ba00-c96a-11eb-877a-d69c8858f7f4.png)

![image](https://user-images.githubusercontent.com/31977543/121354993-64cffa00-c96a-11eb-8cb9-c4a4862d7c34.png)

styleSheet 도 마지막에 있는 것이 더 우선된다.
sheet 객체별로 관리할 수도 있다.

disable 라는 속성이 있다.
현재 모두 false 이다.

```javascript
document.styleSheets[0].disabled = true;
```
를 하면 스타일이 disable 이 된다.


![image](https://user-images.githubusercontent.com/31977543/121355529-ec1d6d80-c96a-11eb-9586-36a7064e372f.png)

## Delete Rule
```javascript
sheet.deleteRule(rules.length - 1); // 가장 마지막 요소 제거
```
deleteRule 은 인덱스만 쓸 수 있다.

```javascript
document.querySelector('.blue').onclick = () => {
  sheet.deleteRule(rules.length - 1);
}
```

![image](https://user-images.githubusercontent.com/31977543/121356035-76fe6800-c96b-11eb-9436-225dbb08595c.png)

## 스타일 시트를 건드리면 인라인 태그를 건들이는 것보다 훨씬더 좋은일이 일어난다.
- 스타일 하나만 건들이면 스타일이 적용되어있는 것이 전부다 적용된다.
- 성능상의 저하가 전혀 없다.
- 비용도 싸다.
- 태그에는 미리 클래스를 적용해 놔도 아무 문제가 없다.
