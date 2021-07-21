# Scrolling 

window 나 scrollable elements 의 스크롤링에 반응하는 이벤트

현재 스크롤을 보여주는 함수
```javascript
window.addEventListener('scroll', function() {
  document.getElementById('showScroll')
          .innerHTML = window.pageYOffset + 'px';
});
```

스크롤의 활용
- 문서에서 사용자가 있는 위치에 따라 추가 컨트롤 또는 정보를 표시하거나 숨기는 기능
- 사용자가 페이지 아래끝으로 스크롤하면 더 많은 데이터를 로드하는 기능

## scrolling 방지 방법
- 스크롤 이벤트가 일어 난후 `onscroll` 리스너에 `event.preventDefault()` 를 한다.
- CSS `overflow` 속성을 이용


## Endless page

### 스크롤의 두가지 중요한 특징
1. elastic 탄력적
    - 일부 브라우저/디바이스 에서는, document 의 시작 또는 끝을 약간 넘어서 스크롤 할 수 있다.
    - 빈 공간이 표시가 되고 document 가 자동으로 bounces back 된다.
    ![bounce-back](https://user-images.githubusercontent.com/31977543/109003947-6b07d680-76eb-11eb-8f94-00f90e0392b4.gif)

2. imprecise 부정확성
    - 페이지의 끝으로 스크롤 하였을 때, 실제 document 의 하단에서 0-50px 정도의 오차가 존재한다.
     
### [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
DOMRect 요소의 크기 및 뷰포트를 기준으로 한 위치에 대한 정보를 제공 하는 객체를 반환합니다 .

> [뷰포트](https://developer.mozilla.org/en-US/docs/Glossary/Viewport)
> - 브라우저 용어에서, 현재 창 (또는 문서를 전체 화면 모드로 보는 경우 화면)에 표시되는 현재보고있는 문서의 부분을 나타냅니다. 
> - 뷰포트 외부의 콘텐츠는 스크롤 할 때까지 화면에 표시되지 않습니다.
 
페이지가 아래로 스크롤 되는 것을 감지하는 방법
- window 의 상대 좌표를 사용함

`document.documentElement.getBoundingClientRect()`
- 전체 문서의 window 기준 좌표를 가져옴

![image](https://user-images.githubusercontent.com/31977543/109005717-9a1f4780-76ed-11eb-906e-b90d3a940794.png)

      
전체 HTML document 의 높이가 2000px 일 때,
```javascript
// 페이지의 top 에 있을 때

// window-relative top = 0
document.documentElement.getBoundingClientRect().top = 0

// window-relative bottom = 2000
// the document is long, so that is probably far beyond the window bottom
document.documentElement.getBoundingClientRect().bottom = 2000
```

500px 아래로 스크롤하면
```javascript
// document top is above the window 500px
document.documentElement.getBoundingClientRect().top = -500

// document bottom is 500px closer
document.documentElement.getBoundingClientRect().bottom = 1500
```

`창 높이`를 600px 로 가정하고 끝까지 스크롤 할 때
```javascript
// document top is above the window 1400px
document.documentElement.getBoundingClientRect().top = -1400

// document bottom is below the window 600px
document.documentElement.getBoundingClientRect().bottom = 600
```

bottom 프로퍼티는 절대 0 이 되지 않는다.
- bottom 이 window 의 top 의 위치에 올 수 없기 때문

bottom 의 최소값이 되었을 때
- 값 →`창높이`  
- 더이상 위로 스크롤 할 수 없는 상태

> 창높이
> - document.documentElement.clientHeight
> - 가로스크롤과 테두리를 제외한 창의 높이

document bottom 이 100px 으로부터 멀어지지 않는 때를 알야야 한다.
- scroll 의 elastic 과 imprecise 특성 때문 
- 높이가 600px 인 경우, 600-700px 사이 이다.

[예시](https://ko.javascript.info/onscroll#ref-256)
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
<h1>Scroll me</h1>
<script>
  function populate() {
    while(true) {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
      document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
    }
  }
  window.addEventListener('scroll', populate);
  populate(); // init document
</script>
</body>
</html>
```

## Up/down button
[to the top button 예시](https://ko.javascript.info/onscroll#ref-257)

1. 스크롤이 되고 있지 않을 때는 버튼이 나타나지 않는다.
2. 스크롤이 window height 만큼 아래로 스크롤 되었을 때 버튼이 나타난다.
3. 버튼이 있지만, 페이지를 2 번 상태 이전으로 스크롤 하면 버튼이 사라진다.
4. 버튼을 누르면 페이지가 top 으로 스크롤 되고 벝튼이 사라진다.

```html
<!DOCTYPE HTML>
<html>
<head>
  <style>
    body, html {
      height: 100%; width: 100%; padding: 0; margin: 0;
    }
    #matrix {
      width: 400px; margin: auto; overflow: auto; text-align: justify;
    }
    #arrowTop {
      height: 9px; width: 14px; color: green;
      position: fixed; top: 10px; left: 10px;
      cursor: pointer;
    }

    #arrowTop::before {
      content: '▲';
    }

  </style>
  <meta charset="utf-8">
</head>

<body>
  <div id="matrix">
    <script>
      for (let i = 0; i < 2000; i++) document.writeln(i)
    </script>
  </div>

  <div id="arrowTop" hidden></div>

  <script>
    arrowTop.onclick = function() {
      window.scrollTo(pageXOffset, 0);
      // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
    };

    window.addEventListener('scroll', function() {
      arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
  </script>
</body>
</html>
```

## Load visible images

1. 이미지를 즉시 로드하지 않고, 자리 표시자로 대체한다.
    ```html
    <img src="placeholder.svg" width="128" height="128" data-src="real.jpg">
    ```

2. 페이지가 사용자가 볼 수 있는 위치로 스크롤 하면, 변경되어 src 에 dara-src 이미지가 로드됨


[예시](https://plnkr.co/edit/a3ixa5sPNqQeNulM?p=preview&preview) 의 조건
1. 페이지가 로드 될 때 화면에있는 이미지는 스크롤하기 전에 즉시로드되어야합니다.
2. 일부 이미지는 data-src. 
3. 일단 이미지가 로드 되면 스크롤 인 / 아웃 할 때 더 이상 다시 로드 되지 않아야 합니다.
4. 가능하다면 현재 위치보다 한 페이지 아래 / 뒤에있는 이미지를 "미리로드"하는 고급 솔루션을 만드십시오.
5. 세로 스크롤 만 처리하고 가로 스크롤은 처리하지 않습니다.

요소(이미지)가 사용자에게 보이는 위치인지 검사한다. 
```javascript
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  // top elem edge is visible OR bottom elem edge is visible
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

/**
A variant 
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  let extendedTop = -windowHeight;
  let extendedBottom = 2 * windowHeight;

  // top visible || bottom visible
  let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
  let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

  return topVisible || bottomVisible;
}
*/
```

```javascript
function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      // disable caching
      // this line should be removed in production code
      realSrc += '?nocache=' + Math.random();

      img.src = realSrc;

      img.dataset.src = '';
    }
  }

}

window.addEventListener('scroll', showVisible);
showVisible();
```

