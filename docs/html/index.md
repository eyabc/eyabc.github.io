# html 태그
## applet (deprecated)
- 문서에 포함되는 애플릿(웹페이지에 포함되어 작은 기능을 하는 프로그램)을 정의할 때 사용된다.
-  in HTML5
    - HTML5 `<embed>` `<object>` 사용

## object (deprecated)
- html 문서안에 또 다른 html 문서를 삽입
- `<iframe>` 을 사용할 수 없는 상황에서만 사용을 권장함.
- audio, video, pdf 파일이나 플러그인(Java applets, Flash 등)을 넣을 수 있다.

> iframe
> - 플레이어를 담고 있는 하나의 창이다. 
> - 사용자 컴퓨터의 환경설정에 맞추어 역동적으로 반응한다. 
> - 만약 사용자 컴퓨터에 flash 가 설치되어 있지 않다면     
>  iframe은 이것을 탐지해서 다른 대안을 찾는다.         
>   설정이 업데이트 되면 iframe 에 삽입된 객체도 실시간으로 업데이트 된다.     
>  object 로 코드를 삽입하면 업데이트를 할 수 없다.
  
## h1 - h6
* 하나의 html 페이지에 `<h1>` 는 한번만 사용하자.
* h 태그는 제목을 나타내는 코드이기 떄문에 문단의 처음에 배치하며 꾸미기에는 사용하지 않는다.

#### [접근성 고려사항](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements)
스크린리더 사용자가 흔히 사용하는 탐색 기법은   
제목에서 제목으로 뛰어넘으며 페이지 콘텐츠를 빠르게 파악하는 것이다.  

따라서 제목단계를 뛰어넘으면 중간에 빠진 제목이 어디 있는 건지 모르므로    
사용자의 혼란을 야기할 수 있다.
- bad
    ```html
    <h1>Heading level 1</h1>
    <h3>Heading level 3</h3>
    <h4>Heading level 4</h4>
    ```
- good
    ```html
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h3>
    ```
  
  
## p 
* [`<P>`태그와 `<DIV>`태그 차이점과 용도](https://m.blog.naver.com/PostView.nhn?blogId=magicmedia&logNo=220796228474&proxyReferer=https:%2F%2Fwww.google.com%2F)
    - p ; 문장의 단락 표시.
        - 다음 단락과 구분하기 위해 한줄을 강제로 비운다.
    - div ; 영역을 나누는 용도로 사용하자.

## blockquote
안쪽의 텍스트가 긴 인용문임을 나타낸다.
```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>
``` 
* cite : 인용문의 출처 문서나 메시지를 가리키는 URL. 인용문의 맥락 혹은 출처 정보를 가리킬 용도

## pre
미리 서식을 지정한 텍스트, html 에 작성한 내용 그대로 표현한다.
요소 내 공백문자를 그대로 유지한다.  
```html
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

#### 접근성 고려사항
pre 요소로 만든 이미지나 도표에 대한 대체 설명을 지정한다.
* figure / figcaption
```html
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  _______________________
< 나는 이 분야의 전문가다. >
  -----------------------
         \   ^__^ 
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    소 한 마리가 "나는 이 분야의 전문가다"라고 말하고 있습니다. 소는 미리 서식을 적용한 텍스트로 그려져있습니다.
  </figcaption>
</figure>
```

## [a](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)
href 속성을 통해  
- 다른 페이지
- 같은 페이지의 어느 위치
- 파일
- 이메일 주소
- 전화번호
- 그 외 다른 url 로 연결할 수 있는 하이퍼링크를 만든다. 

같은 페이지의 요소로 연결    
```html
<p><a href="#Section_further_down">아래 제목으로 건너뛰기</a></p>
<h2 id="Section_further_down">아래의 제목</h2>
```

스위치 조작, 음성 명령 처럼 콘텐츠를 건너뛰기 힘든 보조 기술 사용자에게 도움이 된다.

현재 페이지의 최상단으로 이동하는 링크
```html
<a href="#top"></a>
<a href="#"></a>
```

#### 보안과 개인정보
a 요소는 사용자의 보안과 개인정보에 중요한 영향을 줄 수 있다.
- [referer issue](../network/HTTP_headers_Referer_보안이슈)

*target="_blank"* 를      
*rel="noreferrer"* 와 *rel="noopener"* 없이 사용하면       
웹사이트가 [window.opener](../javascript/browser/window-opener) API 악용 공격에 취약해 진다. 

#### onclick 이벤트
*href='#'*, *javascript:void(0)* 으로 페이지 새로고침을 막고     
click 이벤트 처리기를 등록해서 가짜 버튼을 만드는 방식의 남용은 좋지 않다.

예측하지 못한 동작
- 링크를 복사하거나 드래그 
- 링크를 새 탭이나 새창에서 열 때
- 즐겨찾기에 추가할 때
- javascript 를 불러오는 중일때 
- 오류가 발생했을때
- javascript 를 비활성화 했을 때

스크린 리더 등 보조 기술에도 잘못된 의미를 전달

**button 을 사용하자.**

하이퍼링크는 진짜 url 로의 내비게이션만 사용하면 된다.
  
## [abbr](https://developer.mozilla.org/ko/docs/Web/HTML/Element/abbr), dfn
준말/머리글자
```html
<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> 
to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
```
- *title* : 툴팁으로 표현된다.

`dfn` 준말 정의하기 
```html
<p>
<dfn id="html">
  <abbr title="HyperText Markup Language">HTML</abbr>
</dfn> 
is a markup language used to create the semantics and structure of a web page.
</p>

<p>A <dfn id="spec">Specification</dfn>
(<abbr title="Specification">spec</abbr>) is a document that outlines
in detail how a technology or API is intended to function and how it is
accessed.
</p>
```

#### 접근성 고려사항
준말과 머리글자의 첫 등장에, 그 뜻을 풀어 설명하면 독자가 보다 수월하게 이해할 수 있습니다. 
```html
<p>
JavaScript Object Notation (<abbr>JSON</abbr>) 
is a lightweight data-interchange format.
</p>
```

## acronym (deprecated)
약어와 역어를 구성하는 문자표

abbr 요소를 사용해야 한다.

## address
사람, 단체, 조직 등에 대한 연락처 정보

```html
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```


## big (deprecated in html5)
주변 텍스트 보다 한레벨 더 큰 폰트사이즈로 렌더링함.

```css
.bigger {
  font-size: larger;
}
```

## cite 
Citation element 

인용에서 참조를 설명
```html
<blockquote>
    <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    <footer>
        First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).
    </footer>
</blockquote>
```

## code
요소는 짧은 코드 조각을 나타내는 스타일

여러줄의 코드를 나타내려면 `<code>` 요소를 `<pre>` 로 감싼다. 
 
## [del](https://developer.mozilla.org/ko/docs/Web/HTML/Element/del)
문서에서 제거된 텍스트의 범위를 나타낸다. 

- 문서나 소스코드의 변경점 추적 등에 사용.
- `<ins>` 요소를 추가된 텍스트의 범위를 나타낼 수 있다. 

## [dfn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dfn)
현재 맥락이나 문장에서 정의하고 있는 용어를 나타냅니다. 

`<dfn>` 에서 가장 가까운 `<p>`, `<dt>`/`<dd>` 쌍, `<section>` 조상 요소를 용어 정의로 간주합니다.

```html
<p>
A <dfn id="def-validator">validator</dfn> 
is a program that checks for syntax errors in code or documents.
</p>
```

## [em](https://developer.mozilla.org/ko/docs/Web/HTML/Element/em)
기울어짐 글꼴. 

- 텍스트의 강세. 
- `<em>` 요소를 중첩하면 더 큰 강세
- 주위 텍스트에 비해 강조된 부분. 
- 보통 한 문장에서 단어 하나 혹은 몇 개로 제한되며, 문장의 의미에 영향을 미칠 수 있습니다.

명시적이거나 암시적인 대조를 표현할 때 주로 사용합니다.

```html
<p>
  과거에 <em>block-level</em>이라 불렸던
  콘텐츠는 HTML 5부터 <em>flow</em> 콘텐츠라고
  말합니다.
</p>
```

그러나,
- 단순히 기울임꼴이 필요해서 `<em>`을 사용하면 안됩니다. 
- CSS font-style 속성을 사용하세요. 

그 외에 흔히 기울임꼴을 많이 쓰는 경우는
- `<cite>` 
    - 저작물(책, 연극, 음악 등등)의 제목 
-  `<i>` 
    - 학명 
    - 과학적인 이름
    - 다른 언어의 단어
    - 주변과 다른 톤을 가진 텍스트 
- `<strong>`
    - 주변보다 훨씬 중요한 텍스트

## [img](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img)
문서에 이미지를 넣음

- *src* 
    - 필수
    - 포함하고자 하는 이미지로의 경로를 지정

- *alt*
    - 이미지의 텍스트 설명
    - 필수는 아니지만, 스크린 리더가 *alt* 의 값을 읽어 사용자에게 이미지를 설명하므로, 접근성 차원에서 매우 유용합니다. 
    - 네트워크 오류, 콘텐츠 차단, 죽은 링크 등 이미지를 표시할 수 없는 경우에도 이 속성의 값을 대신 보여줍니다

- 지원하는 이미지 형식 
    - 브라우저에 따라 다름
    
- 이미지를 가져올 수 없을 때 onerror 속성에 오류 처리기를 등록.
    - src 속성이 비었거나 null 임.
    - src 의 URL이 현재 사용자가 보는 페이지의 URL 과 같음.
    - 지정한 이미지가 손상돼 불러올 수 없음.
    - 이미지의 메타데이터가 손상돼 원본 크기를 알아낼 수 없고, `<img>` 요소의 속성에도 크기를 지정하지 않음.
    - 사용자 에이전트가 지원하지 않는 이미지 형식임.
 
## [ins](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ins)
문서에 추가된 텍스트의 범위를 나타냅니다. 

`<del>` 요소를 사용하면 삭제된 텍스트의 범위를 나타낼 수 있습니다.

## [kbd](https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd)
키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다
```html live
<p>
Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> 
to re-render an MDN page.
</p>
```
<p>
Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> 
to re-render an MDN page.
</p>

## [q](https://developer.mozilla.org/ko/docs/Web/HTML/Element/q)
짧은 인라인 인용문이라는것을 나타냅니다.  

대부분의 브라우저에서는 앞과 뒤에 따옴표를 붙여 표현합니다. 

`<q>`는 줄 바꿈이 없는 짧은 경우에 적합합니다. 

긴 인용문은 `<blockquote>` 요소를 사용하세요.

```html
<p>
When Dave asks HAL to open the pod bay door, HAL answers: 
<q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q>
</p>
```
<p>When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>


## [s](https://developer.mozilla.org/ko/docs/Web/HTML/Element/s)
글자에 취소선, 즉 글자를 가로지르는 선.

*더 이상 정확하지 않은 부분*을 나타내세요. 

그러나, `<s>`는 문서의 편집 기록을 나타내는 용도로는 적합하지 않습니다.      
상황에 따라 `<del>`과 `<ins>` 요소를 대신 사용하세요.

#### 접근성 고려사항
대부분의 스크린 리더는 기본값에서 `<s>` 요소의 존재를 표현하지 않습니다. 

그러나 CSS content 속성과 ::before, ::after 의사 요소를 사용하면 소리내어 읽도록 할 수 있습니다.

## [samp](https://developer.mozilla.org/ko/docs/Web/HTML/Element/samp)
컴퓨터 프로그램 출력의 예시(혹은 인용문)를 나타냅니다

<p>I was trying to boot my computer, but I got this hilarious message:</p>

<p><samp>Keyboard not found Press F1 to continue</samp></p>


## [small](https://developer.mozilla.org/ko/docs/Web/HTML/Element/small)
덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트

<p>MDN Web Docs is a learning platform for Web technologies and the software that powers the Web.</p>
<p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>

## [strike](https://developer.mozilla.org/ko/docs/Web/HTML/Element/strike) (deprecated)
취소 선

## [strong](https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong)
중대하거나 긴급한 콘텐츠. 

- 전체 페이지에 매우 중요한 문장 일 수도 있고, 
- 일부 단어가 근처의 내용에 비해 더 중요하다는 것을 지적하려고 할 수도 있습니다.
- 텍스트 내에서 참고 또는 경고를 나타내는 단락 레이블을 표시하는 것입니다.
- 스타일을 적용하는 데 사용해서는 안됩니다.

### `<b>` vs. `<strong>`
- `<strong>` 더 중요한 콘텐츠를위한 것 
- `<b>` 텍스트가 더 중요하다는 것을 나타내지 않으면서 *주의를 끌기 위해 사용됩니다.*

### `<em>` vs. `<strong>`
- `<em>` 구어 강조가 하는 것처럼 문장의 의미를 변경하는 데 사용되지만 
    - "I <em>love</em> carrots" vs. "I love <em>carrots</em>"
 
- `<strong>` 문장의 중요성을 더하는 데 사용됩니다 
    - <strong>Warning!</strong> This is <strong>very dangerous.</strong>
    
`<strong>`와 `<em>`은 각각 중요도 나 스트레스 강조를 높이기 위해 중첩 될 수 있습니다.


## [sub](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sub)
활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다. 

단순히 작은 글자를 아래로 올려야 할 때는 사용해서는 안됩니다.
 
## [sup](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sup)
활자 배치를 위 첨자

## [tt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt) (deprecated)
HTML Teletype Text

[User agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent)
의 기본 고정 폭 글꼴을 사용하여 표시되는 인라인 텍스트를 만듭니다.

이 요소는 텔레타이프, 텍스트 전용 화면 또는 라인 프린터와 같은 고정 너비 디스플레이에 표시되는 텍스트를 렌더링하기 위해 만들어졌습니다.


## [var](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)
The Variable element

수학적 표현식 또는 프로그래밍 컨텍스트에서 변수의 이름

일반적으로 현재 서체의 기울임 꼴 버전을 사용하여 표시되지만 해당 동작은 브라우저에 따라 다릅니다.

<p>The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where <var>l</var> represents the length, <var>w</var> the width and <var>h</var> the height of the box.</p>


## [b](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
The Bring Attention To element

다른 특별한 중요성을 부여하지 않는 요소의 내용으로    
**독자의 관심을 끌기 위해 사용됩니다.** 

대부분의 브라우저는 여전히 텍스트를 굵게 표시

텍스트 스타일 지정 에는 사용해서는 안됩니다
- 대신 CSS font-weight 속성을 사용하여 굵은 텍스트를 만들거나 
- `<strong>` 요소를 사용하여 텍스트가 특히 중요 함을 나타내야합니다.

## [u](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
연결되지 않은 주석 (밑줄) 요소

<p>You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.</p>

기본적으로 간단한 단색 밑줄로 렌더링되지만 CSS를 사용하여 변경할 수 있습니다.
```css
p {
    font: 1rem 'Fira Sans', sans-serif;
}

u {
    text-decoration: #f00 wavy underline;
}
```

## [i](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
관용적 텍스트 요소

사람의 사이에서 관용적 텍스트, 기술 용어, 분류 학적 명칭

<p>I looked at it and thought <i>This can't be real!</i></p>

<p><i class="latin">Musa</i> is one of two or three genera in the family <i class="latin">Musaceae</i>; it includes bananas and plantains.</p>

<p>The term <i>bandwidth</i> describes the measure of how much information can pass through a data connection in a given amount of time.</p>


## [center](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center) (deprecated)
The Centered Text element

블록 수준 요소 또는 포함 요소 내에서 **가로 중앙**에 인라인 콘텐츠를 표시하는 블록 수준 요소입니다.

HTML 4 (and XHTML 1) in favor of the *CSS text-align* property
- `<div>` `<p>` (블록 수준) 에 적용가능
- 블록을 중간에 위치시키는 방법
    - margin-left / margin-right → auto 
    - or *margin: 0 auto*.

## [dl](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
The Description List element

설명 목록을 나타냅니다
<p>Cryptids of Cornwall:</p>

<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>
    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>

```html
<p>Cryptids of Cornwall:</p>
<dl>
   <dt>Beast of Bodmin</dt>
   <dd>A large feline inhabiting Bodmin Moor.</dd>

   <dt>Morgawr</dt>
   <dd>A sea serpent.</dd>

   <dt>Owlman</dt>
   <dd>A giant owl-like creature.</dd>
</dl>
```

요소는 용어 그룹 ( `<dt>`요소를 사용하여 지정됨 ) 및 설명 ( `<dd>`요소에서 제공 ) 목록을 포함합니다. 

이 요소의 일반적인 용도는 용어집을 구현하거나 메타 데이터 (키-값 쌍 목록)를 표시하는 것입니다.

## [dt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
The Description Term element

- 요소 에 대한 설명이나 정의 목록 용어를 지정
- `<dl>` 내부에 사용
- 일반적으로 `<dd>` 요소 가 뒤에옵니다 
- 그러나 한 행의 여러 `<dt>` 요소는 모두 
    - 바로 다음 `<dd>`요소에 의해 정의되는 여러 용어를 나타냅니다 .

- 후속 `<dd>`( Description Details ) 요소는를 사용하여 지정된 용어와 관련된 정의 또는 기타 관련 텍스트를 제공합니다

## [dd](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
The Description Details element

선행 용어`<dt>` 에 대한 설명, 정의, 또는 값 제공 


## [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
The Ordered List element

typically rendered as a numbered list.

```html
<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>
```

#### 허용 컨텐츠
- least one `<li>` `<script>` `<template>`

#### 암시적 ARIA 역할 → list

#### 허용 된 ARIA 역할
- directory, group, listbox, menu, menubar, none, presentation, radiogroup, tablist, toolbar,tree

#### 속성
<dl>
    <dt>reversed</dt>
    <dd>
    이 부울 속성은 목록의 항목이 역순임을 지정합니다. 항목은 높은 것에서 낮은 것까지 번호가 매겨집니다.
    </dd>
    <dt>start</dt>
    <dd>
    목록 항목의 계산을 시작할 정수입니다. 번호 매기기 type 가 문자 또는 로마 숫자 인 경우에도 항상 아라비아 숫자 (1, 2, 3 등) 입니다. 예를 들어 문자 "d"또는 로마 숫자 "iv"에서 요소 번호 매기기를 시작하려면을 사용하십시오 start="4".
    </dd>
    <dt>type</dt>
    <dd>
    번호 매기기 유형을 설정합니다
    <ul>
    <li><var>a</var> 소문자 용</li>
    <li><var>A</var> 대문자 용</li>
    <li><var>i</var> 로마 숫자 소문자</li>
    <li><var>I</var> 로마 숫자 대문자</li>
    <li><var>1</var> 숫자 용 (기본값)</li>
    </ul>    
    </dd>
</dl>

목록 번호의 유형이 중요하지 않은 경우 
-  [list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) CSS 속성을 사용하십시오.

## [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
The Unordered List element

<ul>
    <li>Milk</li>
    <li>Cheese
        <ul>
            <li>Blue cheese</li>
            <li>Feta</li>
        </ul>
    </li>
</ul>

```html
<ul>
    <li>Milk</li>
    <li>Cheese
        <ul>
            <li>Blue cheese</li>
            <li>Feta</li>
        </ul>
    </li>
</ul>
```

#### 허용된 컨텐츠
0 개 이상의 `<li>`, `<script>`및 `<template>` 요소

#### 허용 된 부모
[Flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#flow_content)

#### 암시 적 ARIA 역할
[list](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/List_role)

#### 허용 된 ARIA 역할
directory, group, listbox, menu, menubar, none, presentation, radiogroup, tablist, toolbar,tree

#### 속성
kramdown
: A Markdown-superset converter

<dl>
<dt>type</dt>
<dd>글 머리 기호 스타일, 
 HTML3.2 및 HTML 4.0 / 4.01 
    <ul>
        <li>circle</li>
        <li>disc</li>
        <li>square</li>
    </ul>
    deprecated 속성. → CSS list-style-type 사용 
    </dd>
</dl>


## [li](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
목록의 항목을 표시하는 데 사용

정렬 된 목록 (`<ol>`), 정렬되지 않은 목록 (`<ul>`) 또는 메뉴 (`<menu>`) 와 같은 상위 요소에 포함되어야합니다

- 메뉴 및 정렬되지 않은 목록에서 목록 항목은 일반적으로 글 머리 기호를 사용하여 표시됩니다. 
- 정렬 된 목록에서는 일반적으로 숫자 또는 문자와 같은 오름차순 카운터가 왼쪽에 표시됩니다.

#### 허용 된 ARIA 역할
menuitem, menuitemcheckbox, menuitemradio, option, none, presentation, radio, separator, tab, treeitem

#### 속성
*value*
- `<ol>` 요소에 정의 된 목록 항목의 현재 서수 값
- 목록이 로마 숫자 또는 문자로 표시되는 경우에도 숫자로 허용된다.
- 이 항목 뒤에 오는 목록 항목은 값 집합에서 계속 번호가 매겨집니다

*type*
- 이 문자 속성은 번호 매기기 유형을 나타냅니다.
- deprecated →  list-style-type CSS 속성을 사용

## [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
The Field Set element

용도 - `<form>` 안의 여러 컨트롤과 `<label>` 를 그룹화.

<form>
<fieldset>
<legend>Choose your favorite monster</legend>

<input type="radio" id="kraken" name="monster"/>
<label for="kraken">Kraken</label><br/>

<input type="radio" id="sasquatch" name="monster"/>
<label for="sasquatch">Sasquatch</label><br/>

<input type="radio" id="mothman" name="monster"/>
<label for="mothman">Mothman</label>
</fieldset>
</form>

```javascript
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster">
    <label for="kraken">Kraken</label><br/>

    <input type="radio" id="sasquatch" name="monster">
    <label for="sasquatch">Sasquatch</label><br/>

    <input type="radio" id="mothman" name="monster">
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

#### 속성
*disabled*
- 이 부울 속성이 설정되면 하위 항목 인 모든 양식 컨트롤 `<fieldset>`이 비활성화됩니다. 
- 편집 할 수 없고 `<form>` 마우스 클릭이나 포커스 관련 이벤트와 같은 브라우징 이벤트는받지 않습니다. 
- 기본적으로 브라우저는 이러한 컨트롤을 회색으로 표시합니다. 
- 요소 내부의 양식 요소 `<legend>`는 비활성화되지 않습니다.

*form*
- 외부에 있는 `<form>` 의 *id* 의 값도 가져올 수 있다.
- 이 사용법은 혼란 스럽습니다. 
- `<fieldset>` 내의 `<input>` 요소를 `<form>` 과 연결해준다.

> *id* 속성
> - 전체 문서에서 고유해야하는 고유 식별자 (ID)를 정의합니다. 그 목적은 링크 (조각 식별자 사용), 스크립팅 또는 스타일 (CSS 사용)시 요소를 식별하는 것입니다

*name*
- 그룹과 연관된 이름
- fieldset 의 캡션은 첫번째 `<legend>` 요소이다.

#### Styling with CSS
기본값 
- *display: block*
- 2px groove border surrounding the contents
- small amount of default padding. 
- The element has *[min-inline-size: min-content](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size)* 

`<legend>` 가 존재할 때
- `<legend>` placed over the block-start border
-  The `<legend>` shrink-wraps and also establishes a formatting context. 
- The display value is blockified. (For example, display: inline behaves as block.)

box : the contents of the `<fieldset>`
- If the `<fieldset>` is styled with 
    - *display: grid or display: inline-grid*, 
        - then the anonymous box will be a grid formatting context.  
    - *display: flex or display: inline-flex*
        - then the anonymous box will be a flex formatting context. 

## [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- document section
- containing interactive controls for submitting information.

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
```
#### 허용 된 ARIA 역할
search, none 또는 presentation

#### 속성
*accept* (deprecated in HTML5)
- 서버에서 허용하는 쉼표로 구분 된 콘텐츠 유형 입니다.

*accept-charset*
- 서버에서 허용 하는 공백으로 구분 된 문자 인코딩 입니다. 
- 브라우저는 나열된 순서대로 사용합니다. 
- 기본값 은 페이지와 동일한 인코딩을 의미 합니다 .
- (이전 버전의 HTML에서는 문자 인코딩을 쉼표로 구분할 수도 있습니다.)

*autocapitalize*
- 텍스트 양식 요소가 자동으로 대문자로 표시되는 방식을 제어하는 iOS Safari에서 사용하는 비표준 속성
- *none* 자동 대문자 사용 안함.
- *sentences* (기본값) : 각 문장의 첫 글자를 대문자로 표시합니다.
- *words* 각 단어의 첫 글자를 대문자로 표시합니다.
- *characters* 모든 문자를 대문자로 표시합니다.

*autocomplete*
- 입력 요소가 기본적으로 브라우저에서 값을 자동으로 완성 할 수 있는지 여부를 나타냅니다. 
- *off* 브라우저가 항목을 자동으로 완료하지 못할 수 있습니다. 
    - 브라우저는 의심스러운 로그인 양식에 대해 이것을 무시하는 경향이 있습니다. 
    - [자동 완성 속성 및 로그인 필드](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields)를 참조하십시오
- *on* 브라우저가 자동으로 항목을 완료 할 수 있습니다.

*name*
- form 의 이름입니다. 
- 값은 빈 문자열이 아니어야 한다
- 해당 값 form 이있는 form 컬렉션 의 요소 간에 고유해야 합니다.

*rel*
- 값에 따라 하이퍼 링크 또는 주석을 만듭니다 [rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)

#### form 제출을위한 속성
form 제출 중 동작을 제어합니다.

*action*
- form 제출을 처리하는 URL 
- 값이 override 될 수 있다. formaction A의 속성
    -  `<button>`
    - `<input type="submit">`
    - `<input type="image">`

> [formaction](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction)
> - 버튼으로 제출 한 정보를 처리하는 URL입니다. 
> - action 버튼의 form 소유자 속성을 재정의합니다. 
> - form 소유자가 없으면 아무 작업도 수행하지 않습니다.

*enctype*
- `method` 속성 값이 *post* 이라면
    - *enctype* 은  form 제출 시, [MIME type](https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%94%94%EC%96%B4_%ED%83%80%EC%9E%85) 이다.
- Possible values
    - *application/x-www-form-urlencoded* 기본값
    - *multipart/form-data*
        - form 의 `<input type=file>` 일 때
    - *text/plain*
        - Introduced by HTML5 for 디버깅 목적
- 이 값들은 overridden by 
    - *formenctype* attributes on `<button>`, `<input type="submit">`, or `<input type="image">` elements.
  
*method*
- The HTTP method to submit the form with.
- Possible (case insensitive) values
    - *post* form data sent as the request body.
    - *get* form data appended to the `action` URL with a `?` separator. 
        - Use this method when the form has [no side-effects](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent)
    - *dialog* When the form is inside a `<dialog>`, closes the dialog on submission.
- This value is overridden by *formmethod* attributes on 
    - `<button>` `<input type="submit">` `<input type="image">` elements.  

*novalidate*
- Boolean
- form 의 유효성을 검사하지 않아야 함을 나타냅니다.
- 속성이 설정되지 않았을 때 (the form is validated), 
    - can be overridden by a *formnovalidate* attribute on a 
    - `<button>`, `<input type="submit">`, or `<input type="image">`
   
*target*
- form 을 제출 한 후 응답을 표시 할 위치를 나타냅니다.
- In HTML 4, this is the name/keyword for a frame. 
- In HTML5, *name/keyword* for a browsing context (for example, tab, window, or iframe). 
- The following keywords have special meanings:
    - `_self` (default) Load into the same browsing context as the *current* one.
    - `_blank` Load into a new unnamed browsing context.
    - `_parent` Load into the *parent browsing context*(?) of the current one. 
        - If no parent, behaves the same as `_self`.
    - `_top` Load into the top-level browsing context 
        - i.e., the browsing context that is an ancestor of the current one and has no parent. 
        - If no parent, behaves the same as `_self`.
- This value can be overridden by a *formtarget* attribute on a 
    - `<button>`, `<input type="submit">`, or `<input type="image">` 
- Setting *target="_blank"* on `<form>` 
    - implicitly provides the same *rel* behavior as setting [rel="noopener"](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener)
    - which does not set *window.opener*.
    
> rel="noopener"
> - 신뢰할 수없는 링크를 열 때 특히 유용
> - Window.opener 속성을 통해 원본 문서를 조작 할 수 없도록하는 동시에 
> - RefererHTTP 헤더 를 계속 제공

## [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
사용자 인터페이스의 항목에 대한 캡션

<div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese"/>
</div>

<div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas"/>
</div>

```html
<div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
</div>

<div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas">
</div>
```
#### `<label>`와 `<input>` 연결방법
1. input 의 `id` 속성과 label 의 `for` 속성 값을 일치 시킨다.
2. label 의 내부에 input 을 중첩시킨다.
    ```html
    <label>Do you like peas?
      <input type="checkbox" name="peas">
    </label>
    ```

#### `<label>`와 연결하면 `<input>` 의 몇 가지 주요 이점
레이블 텍스트는 해당 텍스트 입력과 시각적으로 연관 될뿐만 아니라; 프로그래밍 방식으로도 연결됩니다. 
- 예를 들어 화면 판독기는 사용자가 양식 입력에 집중할 때 레이블을 읽어, 보조 기술 사용자가 어떤 데이터를 입력해야하는지 쉽게 이해할 수 있도록합니다.
- 연관된 레이블을 클릭하여 입력 및 입력 자체에 초점을 맞추거나 활성화 할 수 있습니다. 
    - 증가 된 히트 영역은 터치 스크린 장치를 사용하는 사람을 포함하여 입력을 활성화하려는 모든 사람에게 이점을 제공합니다.

#### labeled control
- label 에 라벨링 된 form control 을 label 요소의 *labeled control* 이라고 한다.
- 하나의 input 은 여러 label 과 연결될 수 있다.
- label 이 click(tapped) 되고 form control 과 연관이 있다면 
    - label 을 click event 의 결과는 
        - 연결된 control 도 역시 raised 된다.
        
#### for 속성
- label 요소와 동일한 document 에 존재하고, 라벨링 가능한 form 요소의 id 
- document 내에서, id 와 매칭되는 요소 중 첫번째 요소가 선택된다.
- 매칭이 되지 않으면 no effect         
- label 요소는 for 속성이 포함된 제어요소를 가리키거나, 내부에 control 요소를 가질 수 있다.

#### Styling with CSS
- inline elements

#### 접근성 문제
*Interactive content*
- label 안에 anchors 나 button 과 같은 상호 작용 요소를 배치하지 마십시오. 
- 사람들이 레이블과 관련된 form 입력을 활성화하기가 어렵습니다.
- don't
    ```html
    <label for="tac">
      <input id="tac" type="checkbox" name="terms-and-conditions">
      I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
    </label>
    ```
- do
    ```html
    <label for="tac">
      <input id="tac" type="checkbox" name="terms-and-conditions">
      I agree to the Terms and Conditions
    </label>
    <p>
      <a href="terms-and-conditions.html">Read our Terms and Conditions</a>
    </p>
    ```
  
*Headings*
- 제목은 일반적으로 탐색 보조 도구로 사용되기 때문에 label 안에 제목 요소를 배치하면 여러 종류의 보조 기술을 방해한다.
- label 의 텍스트가 시각적으로 필요하다면, CSS 클래스를 사용한다.
- 만약에 form 이나 section 에 title 이 필요할 경우 `<fieldset>` 안에 `<legen>` 를 사용한다.
- Don't
    ```html
    <label for="your-name">
      <h3>Your name</h3>
      <input id="your-name" name="your-name" type="text">
    </label>
    ```
- Do
    ```html
    <label class="large-label" for="your-name">
      Your name
      <input id="your-name" name="your-name" type="text">
    </label> 
    ```

*Buttons*
- input 의 *type="button"* 및 유효한 값의 속성이 있을 때
- input 요소에는 연관된 label 이 필요하지 않다.
- 그렇지 않으면, 실제 보조 기술이 버튼 입력을 구문분석 할 때 방해할 수 있다.
- button 요소에도 동일하다.

```
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgruop,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}
ol,ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}
blockquote: before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  all: unset;
  cursor: pointer;
}
*,
input {
  box-sizing: border-box;
}

input {
  border: none;
  box-sizing: border-box;
  &: focus,
  &L action {
    outline: none;
  }
}
```
