---
title: 5-5 Typed CSSOM
---

https://drafts.css-houdini.org/css-typed-om/

- 왜 표준이라고 부를까?
- 주소는 w3c 가 아닌데 마크가 붙어있는 홈페이지
- Mozilla, Apple, Opera, MS, HP, Intel, Google 의 TF, 
- W3c 의 주요 foundation
- 이들이 원하는 스펙을 빠르게 표준화 하기 위함
- google 이 주도


## No more string! 
```javascript
$('#someDiv').style.height = getRandomInt() + 'px'; 
```
반드시 문자열로 주어야 한다.. (숫자인데)        
js 애니메이션 프레임워크에서 텍스트로 조립하는 과정이 더 느리게 된다.

html5 를 베이스로 하는 크롬 os 는    
- 문자열을 숫자로 변환하기 위한 c parser 를 또 써야 했다.
- 굉장히 특수한 styleMap 을 하나 만들었다 (가명, attribute Style map )
- 직접 속성을 쓸수 없고 get 이나 set 을 쓰게 된다.

```javascript
const h = $('#someDiv').styleMap.get('height');
$('#otherDiv').styleMap.set('height', h);
```


## static type

`CSS.number(0.5);`
- 이런 기능이 크롬에 있다. CSS 의 순수한 숫자를 의미한다.
- 이런 경우가 CSS 에 있을까? opacity, z-index

`el.styleMap.set('opacity', CSS.number(0.5));`
`CSS.px(500)` 500px

`el.styleMap.set('height', CSS.px(500));`

정확하게 형에 맞는 값을 보내주고 있다.

### CSS 에는 얼마나 많은 형이 존재할까?
```shell script
CSS {
    number, percent
    em,ex,ch,ic, rem, lg,rlh, vw, vh, vi,vb,
    vmin, vmax, cm,mm, Qin,pt, pc,px
    deg, grad, rad, turn,
    s, ms ,Hz, kHz, dpi, dpcm, dppx, fr
}

new CSSTransformValue(...)

CSSTransformValue
    CSSTransformComponent
            CSSTranslate, CSsRotate, CSSScale, CSSSKew,
            
margin: 10px 0 0 10px - CSSPositionValue

background:url('a.png') - CSSImageValue
(cursor, list-style)
inset, left..  - CSSSStyleValue
```

```javascript
document.querySelector('.test').attributeStyleMap.set('height', CSS.px(300));
```
attributeStyleMap 은 브라우저마다 다르다.
