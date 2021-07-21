---
title: 7 Semantic Web & CSS Query
---

:::tip
semantic web 에서 css 를 어떻게 쿼리처럼 쓰는지에 대해서 다룬다.
:::

## 의미론적 웹을 사용하는 이유
**검색엔진**이 HTML 웹을 읽어들였을 때,
- **다양한 검색결과**를 만들어 내게끔 
- **머신에 친화적인 문서**를 만들기 위함.

## Semantic Web
### DOM : 의미를 갖도록 태깅

:::note Anti 더이상 화면의 구성요소로 dom 을 평가할 수 없다
- 줄을 나누기 위해서 div 나 p 태그를 사용
- 장식을 넣기 위해 이미지 태그
- 레이아웃을 위한 태그
:::

:::note Semantic web
장식용 태그가 아닌 의미론적 태그를 사용하면 태그수가 줄어들게 된다. 
- 시간을 표현하고 있으면 time 이라는 태그로 감싸줘야 한다. 
- 제목을 표현하고 있으면 header
- 글은 article

그러나 html5 는 태그만으로 모든 의미를 해결할 수 없다.

- 태그상으로는 제일먼저 나왔지만 화면상으로는 제일 밑에 나올 수 있다.
- 어떤 것들은 안보일 수도 있다.
::: 
### CSS Selector
CSS Selector 는 DOM 의 구조에 밀접하게 선택하려고 한다.

- div > p > img
- 이 강의를 듣기 전에는 모든 의미를 *클래스 명*으로 구현하려 했을 것이다. 

### CSS
의미와 무관한 스타일 

:::note 유지보수 불가능한 HTML 과 CSS(CSS 때문에 HTML 을 고칠수 없는 상황)
CSS Selector 는 DOM 과 CSS 를 연결한다.
- CSS Selector 작성법에 따라서 유지보수가 결정된다. 

DOM 의 구조에 따라 Selector 를 지정하면 깨지기 쉽다.
아이콘을 하나를 중간넣거나 위치를 바꾼다면 깨져버릴 것이다. 

CSS Selector 를 잘못 선택했기 때문에 의미론적 DOM 을 개조할 수 없게 되었다. 

1. DOM 을 스타일에 맞춰 제작
2. 태그의 변화가 스타일을 깨먹음 

이것의 해결방법은 Selector 도 Semantic Selector 를 쓰면 된다.
:::
DOM 의 구조에서 가장 쉽게 벗어나는 방법은 Selector 를 클래스만 쓰는 방법이 있다.

## [CSS Attribute Selector](https://drafts.csswg.org/selectors-3/#attrubute-selectors)
Semantic Selector 를 쓰기 위한 방법들이다.

해당 Element 의 attribute 로 선택할 수 있게 해주는 스펙 

1. `[attr]` - 속성이 존재함
1. `[attr=val]` - 값과 일치
1. `[attr~=val]` - 공백으로 구분된 단어로 포함되면 일치
1. `[attr|=val]` - 일치하거나 뒤에 - 가 붙을 때
1. `[attr*=val]` - 값이 포함될 때
1. `[attr^=val]` - 값으로 시작할 때
1. `[attr$=val]` - 값으로 끝날 때
1. `[(ex) i]` - 대소문 구분안함
 
## Query Style Selector
select `*` from `table` from `field conditions..`

SQL 문과 유사하다

`base selector`[`field conditions`][`..`][`..`]

```html
<form id="join">
  <input type="text" name="userid" />
  <input type="password" name="pw" />
  <input type="text" name="nick" />
</form> 
```
```scss
<!-- SCSS 에서 중첩 selector 를 사용할 수 있다. -->
#join {
  [name="userid"]{ border: 1px solid #f00 }
  [name="pw"]{ border: 1px solid #0f0 }
  [name="nick"]{ border: 1px solid #00f }
}
```
- data 구조에 근거를 둔 selecting
- name 속성은 서버와 합의 된 속성이다.
- json 의 api 나 request 가 합의된 이상, DOM 의 구조나 디자인에 따라서 바뀌지 않는다.  
- 의미를 갖는 태그에게 스타일을 주는 것이 핵심이다. 

## [HTML5 MICRODATA](https://www.w3.org/TR/microdata/)

HTML5 에서는 중구난방으로 돌아다니던 Sematic Web Spec 을 간단하게 정리하였다.

- `itemscope` 적용범위 설정
    - 현재 어떤 의미가 적용되는 태그의 범위는 HTML 태그의 구조와 일치한다.
- `itemtype` 스키마설정
    - 스코프 안에서, 스코프가 어떤 타입인지 결정한다. 
- `itemid` 
- `itemprop`  속성명
- `content` 비가시적일 때 값을 설정
- `value` 가시적인 값이 원하는 값이 아닐 때
- `itemref` scope 계층 구조 안에 없을 때

## schema.org
schema.org 에서는 microdata 스키마 포맷으로 있는 데이터들을 공유하고 있다. 

- http://schema.org/BreadcrumbList
- http://schema.org/WebPage
    - 하나의 웹페이지를 만들 때 사용할 만한 스키마가 공유되어 있다. 
- http://schema.org/CollegeOrUniversity


```html title="화면에 그리는 디자인과 가깝다."
<body>
  <h1>CodeSpitz76 - 5</h1>
  <nav>Home</nav>
  <p>
    코드스피츠76 5회차 수업은 CSS 를 쿼리화하여 사용하는 방법을 다룹니다.
  </p>
  <ul>
    <li>
      <h2>HTML5 MicroData</h2>
      <p>마이크로데이터에 대한 개념과 예제</p>
    </li>
    <li>
      <h2>HTML5 DataSet</h2>
      <p>데이터셋에 대한 개념과 예제</p>
    </li>
  </ul>
  <footer>
    <div>MIT</div>
    <div>Bsidesoft co.</div>
  </footer>
</body>
```

```html title="봇이나 검색쿼리엔진이 분석할 수 있는 완전한 문서 / DB 화 가능"
<body itemscope itemtype="http://schema.org/WebPage">
  <h1 itemprop="name">CodeSpitz76 - 5</h1>
  <nav itemprop="breadcrumb">Home</nav>  <!-- https://brunch.co.kr/@ebprux/45 -->
  <p itemprop="description"> 
    코드스피츠76 5회차 수업은 CSS 를 쿼리화하여 사용하는 방법을 다룹니다.
  </p>
  <ul>
    <li itemprop="mainEntity" itemscope itemtype="http://schema.org/CollegeOrUniversity">
      <h2 itemprop="name">HTML5 MicroData</h2>
      <p itemprop="description">마이크로데이터에 대한 개념과 예제</p>
    </li>
    <li itemprop="mainEntity" itemscope itemtype="http://schema.org/CollegeOrUniversity">
      <h2 itemprop="name">HTML5 DataSet</h2>
      <p itemprop="description">데이터셋에 대한 개념과 예제</p>
    </li>
  </ul>
  <footer>
    <div itemprop="license">MIT</div>
    <div itemprop="publisher">Bsidesoft co.</div>
  </footer>
</body>
```

```scss title="sementic query"
[itemType$="WebPage"] {         // itemType 이 WebPage 로 끝나는 ㅓ
    [itemprop="name"] { font-size: 20px; padding: 0; margin: 10px 0 }
    [itemprop="breadcrumb"] { font-size: 11px; margin: 0 10px; color: #234A7F }
    [itemprop="description"] { font-size: 14px; line=height: 20px; color: #444 }
    ul { list-style: none; padding: 0 }
    [itemprop="mainEntity"] { padding: 0 20px; margin: 10px; border: 1px solid #999; border-radius: 20px }
    [itemprop="license"] { font-size: 11px; color: #999 }
    [itemprop="publisher"] { font-size: 12px; font-weight: bold; font-family: sans-serif }
}

[itemtype$="CollegeOrUniversity"] {
    [itemprop="name"] { font-size: 15px }
    [itemprop="description"] { font-size: 12px; line-height: 15px }
}
```
