---

title: BOM
Date: 2020-10-19
sidebarDepth: 2

---

# BOM Browser Object Model
자바스크립트가 브라우저에게 'talk' 할 수 있게 해줌.

## window 객체
- 모든 브라우저에서 지원함.
- 모든 자바스크립트 전역 (객체, 함수, 변수) 는 자동으로 window 객체의 멤버가 됨.
- 전역 변수 : window object 의 프로퍼티 
- 전역 함수 : window object 의 메서드
- document object : window object 의 프로퍼티

```javascript
window.document.getElementById("header");
document.getElementById("header");
```

## Window Size

### Inner / Outer
- 픽셀 단위의 크기 반환
![image](https://user-images.githubusercontent.com/31977543/96468581-3da3ab80-1267-11eb-8914-85cd28b8cfd5.png)
- `outerHeight` : 전체 브라우저 창의 높이
- `innerHeight` : 가로 스크롤 막대 포함한 높이
- `<html>TagElement.clientHeight` : 가로스크롤과 테두리를 제외한 창의 높이

- `outerWidth` : 사이드바, 창크기 조정 테두리 포함한 전체 브라우저 창의 너비
- `innerWidth` : 세로 스크롤 막대를 포함한 너비

익스플로러 8/7/6/5 환경을 고려한다면 아래와 같이 사용해야 한다고 함
```javascript
const w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
```

outer 는 그냥 안쓰다고 생각하면 된다. 


### window size 메서드
- `window.open()` 새 창 open
    - ` window.open("http://myurl.domain", "myWindowName", "resizable");`
        - 창의 크기를 조절할 수 있도록 하려면 `resizable` 필요
- `window.close()` 현재 창 close
- `window.moveTo(x, y)` 창을 화면 (x, y) 에 위치시킴 [:link:](https://sharp57dev.tistory.com/31) 
- `window.moveBy(x, y)` 창을 화면 현 위치에서 (x, y) 만큼 이동시킴 [:link:](https://sharp57dev.tistory.com/31) 
- `window.resizeTo(outerWidth, outerHeight) ` 현재 창의 크기를 바꿈 [:link:](https://developer.mozilla.org/ko/docs/Web/API/Window/resizeTo)
- `window.resizeBy(xDelta, yDelta) ` 현재 크기를 기준으로, 지정된 양만큼 현재 창의 크기를 조정함. [:link:](https://developer.mozilla.org/ko/docs/Web/API/Window/resizeBy)

* 여는 창이 현재 창과 동일한 Origin 이 아닌 경우 해당 창/탭의 크기를 조정하거나 정보에 액세스 할 수 없다.
 
 
## window.screen [:link:](https://developer.mozilla.org/en-US/docs/Web/API/Screen/width)
- 사용자 스크린(해상도)에 대한 정보 (브라우저가 아님)
- 픽셀 단위
 
### screen.width / screen.height
화면(해상도)의 너비/높이 반환

익스플로러의 경우, screen 을 보고할 때, 브라우저의 확대/축소 를 고려함
- 확대 축소가 100% 일 때에만 실제 해상도 반환


### screen.availWidth / screen.availHeight
avail.. 속성 : 작업표시줄(Windows Taskbar) 크기를 제외한 해상도

### screen.colorDepth / screen.pixelDepth
hardware for color resolution

- 8 bits = 256 different "VGA colors".
- 16 bits =  65,536 different "High Colors"
- 24 bits =      16,777,216 different "True Colors"
- 32 bits = 4,294,967,296 different "Deep Colors"

`rgb` 는 HTML 에서 'True Color' 이다

- 최신 컴퓨터는 color Depth 와 pixel Depth 는 동일함

### screen.orientation [:link:](https://developer.mozilla.org/ko/docs/Web/API/Screen/orientation)
- 화면의 현재 방향
    - portrait-primary
    - portrait-secondary
    - landscape-primary
    - landscape-secondary
- 설치된 웹 앱, [full-screen mode](https://developer.mozilla.org/ko/docs/Web/Guide/DOM/Using_full_screen_mode) 의 웹페이지에서 동작함


## window.location
- 현재 페이지의 주소(URL) 가져오기
- 브라우저를 새로운 페이지로 redirect 

![image](https://user-images.githubusercontent.com/31977543/96479341-c7f20c80-1273-11eb-89e5-72953d17cea7.png)

### window.location / document.location [:link:](https://nopanic.tistory.com/11)
![image](https://user-images.githubusercontent.com/31977543/96876410-63bd8b80-14b3-11eb-9fb0-ccf05630063c.png)
- 같은 방식으로 사용함
- 공식적으로
    - `window.location` 현재 위치를 object 로 가져올 수 있는 표준방법
    - `document.location` 현재 URL 값이 String 으로 반환
- 혼란:  `document.location` -> `document.URL` 변경
- 모든 최신 브라우저는 `document.location` 을 `window.location` 에 매핑함.
  

### location.href [:link:](https://developer.mozilla.org/en-US/docs/Web/API/Location/href)
- 현재 페이지의 URL (href) 반환
- href 변경

```
string = object.href;
object.href = string;
```

```javascript
// <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location/href"> 
const anchor = document.getElementById("myAnchor");
const result = anchor.href; // Returns: 'https://developer.mozilla.org/en-US/Location/href'
```

### location.replace(url) / location.assign(url)  [:link:](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)
- 현재 리소스를 제공된 url 의 리소스로 바꿈
- `replace` 현재 페이지를 사용한 후에는 history 되지 않음 -> 뒤로가기 버튼으로 이동 X
- `assign` 뒤로 버튼을 눌러 호출한 페이지로 돌아갈 수 있다.
- url 이 Origin 과 다른 경우 보안 오류를 발생
- url 이 유효하지 않은 경우 syntax Error 가 발생

```javascript
// Navigate to the Location.reload article by replacing this page
window.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
```

### location.hostname

### location.pathname
 
### location.protocol

### location.hash

### location.search

`<a id="myAnchor" href="https://developer.mozilla.org/en-US/docs/Location.search?q=123">`
```javascript
const anchor = document.getElementById("myAnchor");
const queryString = anchor.search; // Returns:'?q=123'

// Further parsing:
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // is the number 123
```

#### URLSearchParams.get(name)
`https://example.com/?name=Jonathan&age=18`
```javascript
let params = new URLSearchParams(window.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18

let address = params.get("address"); // null
```

#### URL.searchParams
`const urlSearchParams = url.searchParams`
- @return URLSearchParams 객체

`https://example.com/?name=Jonathan%20Smith&age=18`
```javascript
let params = (new URL(document.location)).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
```

### location.reload() [:link:](https://developer.mozilla.org/ko/docs/Web/API/Location/reload)
새로고침 버튼처럼 현재 리소스를 다시 불러 온다.

- `location.relaod()` 를 호출한 스크립트의 origin 과 Location 객체를 소유한 문서의 origin 이 다를 때 CORS 에 의해 `SECURITY_ERROR DOMException` 가 발생한다.
(?TODO 예시)


## window.history
브라우저 히스토리를 담고 있는 객체

### history.length [:link:](https://developer.mozilla.org/ko/docs/Web/API/History/length)
- 현재 페이지를 포함해, 세션 기록의 길이를 나타내는 정수를 반환한다.
- 뒤로가기 할 수 있는 페이지의 개수

### history.back() [:link:](https://developer.mozilla.org/ko/docs/Web/API/History/back)
- 브라우저가 세션 기록의 바로 뒤 페이지로 이동하도록 지시.
- 브라우저에서 뒤로가기 버튼을 눌렀을 때
- `history.go(-1)`
- 비동기적 메서드
    - `popstate` 이벤트 처리기를 통해 탐색 완료 시점을 알 수 있다.
    
### popstate
- Event handler property : `onpopstate`
- 사용자의 세션 기록 탐색으로 인해 현재 **활성화된 기록 항목이 바뀔 때** 발생한다.
- 브라우저의 **back 이벤트** / `history.back()` 을 통해서만 발생함.
- `history.pushState()` / `history.replaceState()` 으로 활성화 엔트리 생성 
    - `popstate` 이벤트의 state 속성 <= 히스토리 엔트리 state 객체의 복사본

```javascript
window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null
history.go(2);  // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
```
TODO 위에 예시에서 로그가 뜨는 순서의 이해의 보충이 필요하다.

- 브라우저마다 이벤트 시점이 다를 수 있다.

### history.forward()
- 히스토리 목록에서 다음 url 를 로드하는 메서드
- 브라우저에서 앞으로 가기 버튼
- `history.go(1)`
- 비동기적 메서드
    - `popstate` 이벤트 처리기를 통해 탐색 완료 시점을 알 수 있다.

### history.pushState(state, title[, url]) [:link:](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)
브라우저의 세션 기록 스택에 상태 추가

- SPA 를 만들 때 자주 이용 된다.
- 페이지 깜박임 없니 주소를 바뀌고, 바뀐 주소에 따른 액션을 취할때 사용된다.

```javascript
const state = { 'page_id': 1, 'user_id': 5 };
const title = '';
const url = 'hello-world.html';

history.pushState(state, title, url);
```
#### state
- 새로운 세션 기록항목에 연결할 상태 객체
- 직렬화 가능한 객체

#### title
- 현재 대부분의 브라우저가 title 매개변수를 무시함.
- 빈문자열을 정하면 나중의 변경 사항에도 안전할 것임

#### url
- 새로운 세션 기록 항목의 url
- `pushState()` 이후 브라우저는 주어진 url 의 탐색을 하지 않지만, 브라우저를 재시작 하였을 때 탐색을 시도할 수 있다.
- 현재 url 을 기준으로, 상대 url 을 사용할 수 있음
- cross origin 일 경우 예외 발생

#### pushState() VS window.location = "#foo"
- 공통점 : 명령문 이후 같은 문서에 머무른다.

- `window.location` 설정 (해시 기반 방식)
    - 해시만 수정해야 같은 문서에 머무른다.
    - 현재 해시가 `#foo` 가 아닐 때만 새로운 기록 항목을 생성한다.
    - 임의의 데이터를 연결하기 위해서는 필요한 모든 데이터를 인코딩해 짧은 문자열로 만들어야 한다.
- `pushState()` 는 url 을 바꾸지 않아도 된다.
    - 호출 이후 url 의 탐색을 하지 않는다.
    - 호출 할 때 url 을 바꾸지 않아도 된다.
    - 임의의 데이터를 세션 기록 항목에 연결할 수 있다. `state`
    - 이전 URL 와 신규 URL 의 해시가 다르더라도 `hashchange` 이벤트를 유발하지 않는다.
    - HTML 외의 문서에서는 이름공간 URI 가 `null` 인 요소를 생성한다.
    

### history.replaceState(stateObj, title[, url]) [:link:](https://developer.mozilla.org/ko/docs/Web/API/History/replaceState)
- 현재 history 를 수정해 메서드의 매개 변수에 전달된 stateObj, title, URL 로 대체함.

```javascript
const stateObj = { foo: 'bar' };
history.pushState(stateObj, '', 'bar.html');
history.replaceState(stateObj, '', 'bar2.html');
```
1. URL 표시줄에 `https://www.mozilla.org/bar2.html` 이라고 표시
2. 브라우저가 `bar2.html` 로드/파일 확인 을 하지 않는다.

## window.navigator [:link:](https://developer.mozilla.org/ko/docs/Web/API/Window/navigator)
스크립트를 구동 중인 애플리케이션에 대한 메서드와 속성

브라우저 버전에 따라서 오류가 있을 수도 있다.
- 다른 브라우저에서 동일한 이름을 사용할 수 있습니다.
- navigator data 는 브라우저 소유자가 변경할 수 있습니다.
- 일부 브라우저는 사이트 테스트를 우회하기 위해 자신을 잘못 식별합니다.
- 브라우저는 브라우저보다 늦게 출시 된 새 운영 체제를 보고 할 수 없습니다.

### navigator.cookieEnabled [:link:](https://developer.mozilla.org/ko/docs/Web/API/Navigator/cookieEnabled)
- 쿠키 사용 여부
- Boolean 값을 반환
- Readonly


### navigator.appName
- Browser Application Name

```javascript
navigator.appName; // "Netscape"
```

`Netscape` : IE11, Chrome, Firefox, Safari. 일 때 [:link:](https://stackoverflow.com/questions/14573881/why-does-javascript-navigator-appname-return-netscape-for-safari-firefox-and-ch)

- 단지 호환성을 위해 `Netscape` 를 반환한다. (?)
- 브라우저 감지는 나쁜 관행 (?) 이다.
- 대신 `navigator.userAgent` 속성을 사용한다.


### navigator.appCodeName

`Mozilla` : Chrome, Firefox, IE, Safari, Opera

- 단지 호환성을 위해 `Mozilla` 를 반환한다. (?)
```javascript
navigator.appCodeName; // Mozilla
```

### navigator.product
- 브라우저 엔진의 프로덕트 이름

[Gecko](https://ko.wikipedia.org/wiki/%EA%B2%8C%EC%BD%94_(%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EC%97%94%EC%A7%84)) 모든 브라우저

> 게코(영어: Gecko)은 웹 브라우저를 만드는 데 기반을 제공하는 오픈 소스 응용 프로그램 프레임워크이다.

```javascript
navigator.product; // Gecko
```

### navigator.appVersion
브라우저 버전정보

```javascript
// 5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36
navigator.appVersion;
```

### navigator.userAgent
- Mozilla/5.0 (Macintosh;Intel Mac OS X 10_15_6)  
    - appCodeName/appVersion number (Platform; Security; OS-or-CPU;
- AppleWebKit/537.36 (KHTML, like Gecko)          
    - Localization; rv: revision-version-number) product/productSub 
- Chrome/86.0.4240.80 Safari/537.36               
    - Application-Name Application-Name-version
    
```javascript
navigator.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36
```

### navigator.platform
browser platform : operating system

```javascript
navigator.platform; // MacIntel
```

### navigator.language / navigator.languages 
- `navigator.language` 
    - 사용자가 선호하는 언어 (일반적으로 브라우저의 UI 언어)
    - 알 수 없는 경우 `null`
    ```javascript
    navigator.language; // ko-KR
    ```
  
- `navigator.languages`
    - 선호도에 따라 사용자에게 알려진 언어를 나타내는 배열
    ```javascript
    navigator.languages; // ["ko-KR", "ko", "en-US", "en"]
    ```

### navigator.onLine
- 브라우저의 온라인 상태 boolean 반환
- 값이 바뀔 때
    - 브라우저의 네트워크 연결 기능이 변경 될 때 마다 
    - 사용자가 링크를 따르거나, 스크립트가 원격 페이지를 요청할 때
- 브라우저마다 구현된 작동 속성이 다르다. [:link:](https://developer.mozilla.org/ko/docs/Web/API/NavigatorOnLine/onLine)
- `window.ononline` `window.onoffline` 이벤트를 수신하여 네트워크 상태 변화를 확인

```javascript
window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });
```

### navigator.javaEnabled()
현재 브라우저가 Java 를 사용할 수 있는지 여부
```javacsript
navigator.javaEnabled(); //  false
```

### navigator.serviceWorker [:link:](https://developer.mozilla.org/ko/docs/Web/API/Navigator/serviceWorker)
@return [ServiceWorkerContainer](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer) 객체

- [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) 와 상호작용을 제공.
    - 등록, 제거, 업그레이드 

```javascript
if ('serviceWorker' in navigator) {
  // 브라우저가 서비스 워커를 지원하는지 확인
}
```
 

TODO 서비스 워커

## Popup Boxes
- 모달창(부모 창으로 돌아가기 전에 사용자의 상호 작용을 요구하는 자식 창)으로 사용자는 대화 상자가 닫힐 때까지 다른 모든 인터페이스에 접근할 수 없다.
- 대화 상자를 만드는 함수를 남용해서는 안된다.
- 대화 상자로 사용자 확인을 받는 것은 피해야 한다. [:link:](https://alistapart.com/article/neveruseawarning/)


### window.alert([message])  [:link:](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)
- 경고 대화 상자
    - **확인 버튼**
    - `message` 메시지를 지정할 수 있다.
        - 경고 대화 상자에 표시할 텍스트 문자열이나 문자열로 변환해 나타낼 객체
- 쓰임 
    - 사용자의 확인을 제외한 다른 **입력을 요구하지 않는 메시지를 전달**


### window.confirm(message)
- **확인과 취소 두 버튼**
- `message`를 지정할 수 있는 모달 대화 상자를 띄운다.
    - 경고 대화 상자에 표시할 텍스트 문자열

- `@return`
    - 확인 -> `true`
    - 취소 -> `false`
    - 브라우저가 페이지 내 대화 상자 무시 -> `false`

### window.prompt([message, default]) [:link:](https://developer.mozilla.org/ko/docs/Web/API/Window/prompt)
- 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메시지를 갖고 있는 대화 상자
- `message`
    - 사용자에게 보여줄 문자열
    - 프롬프트 창에 표시할 메시지가 없으면 생략가능
- `default`
    - 텍스트 입력 필드에 기본으로 채워넣을 문자열
    - IE 7/8 default -> `undefined`
- `@return`
    - 사용자가 입력한 문자열 `else null` 
    
## Timing Events
`timing events` 자바스크립트가 시간 간격(time intervals) 으로 실행 될 수 있는 것.
 
### window.setTimeout(function, milliseconds) [:link:](https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout)
타이머가 만료된 뒤 함수나 지정된 코드를 실행하는 타이머를 설정함

```javascript
const timeoutID = window.setTimeout(func[, delay, param1, param2, ...]);
const timeoutID = window.setTimeout(code[, delay]);
window.setTimeout(function, milliseconds);
```

- `func`
    - 타이머가 완료된 후 실행됨
- `code`
    - 함수 대신 문자열
    - `eval()` 과 같은 보안 위험성으로 권장되지 않음
    - `window.setTimeout("alert('Hello World!');", 500);`
- `delay` 
    - 타이머가 지정된 함수나 코드를 실행시키기 전에 기다려야할 ms(1/1000초) 단위의 시간
    - default 는 0 
    - 실제 지연 시간은 더 길어질 수 있다.
- `param1, ..., paramN`
    - 타이머가 완료되고 `func` 에 전달되는 추가적인 매개변수들
- `@return`
    - `timeoutID` 숫자
    - `setTimeout()` 을 호출하여 만들어진 타이머를 식별할 수 있는 0 이 아닌 값
    - 타이머를 취소하기 위해 `window.clearTimeout()` 에 전달
    - `setTimeout()`과 `setInterval()` 은 같은 ID 공간을 공유
        - `cleatTimeout()` `clearInterval()` 은 기술적으로 동일
        - 코드 유지보수에 혼란을 피하기 위해 쌍을 일치시켜 주자
 
#### this
`setTimeout()` 에 의해 실행된 코드는 별도의 실행 컨텍스트에서 `setTimeout` 이 호출된 함수로 호출된다.

- 비엄격모드 -> 전역객체
- 엄격 모드 -> `undefined`

`myArray.myMethod()` 가 메서드로 **호출**되었기 때문에 this 는 `myArray` 임.
```javascript
myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```
       
`myArray.myMethod` 가 호출되지 않고 `setTimeout` 에 전달됨
- 호출 될 때 this 가 설정되어 있지 않아 기본 값(전역 객체) 
- 역시 `forEach, reduce` 와 같은 array 메서드 : `this` 를 넘길 수 있는 옵션 X
```javascript
setTimeout(myArray.myMethod, 1000); // 1초 뒤 "[Window 객체]" 출력
setTimeout(myArray.myMethod, 1500, "1"); // 1.5초 뒤 "undefined" 출력
```

해결책
1. this 설정이 필요한 곳을 함수로 감싼다.
    ```javascript
    setTimeout(function(){myArray.myMethod()}, 2000); // 2초 뒤"zero,one,two" 출력
    setTimeout(function(){myArray.myMethod('1')}, 2500); // 2.5초 뒤"one" 출력
    ```
2. 화살표 함수
    ```javascript
    setTimeout(() => {myArray.myMethod()}, 2000); // 2초 뒤 "zero,one,two" 출력
    setTimeout(() => {myArray.myMethod('1')}, 2500); // 2.5초 뒤 "one" after 2.5 출력
    ```
3. bind()
    ```javascript
    myArray = ["zero", "one", "two"];
    myBoundMethod = (function (sProperty) {
        console.log(arguments.length > 0 ? this[sProperty] : this);
    }).bind(myArray);
    
    myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
    myBoundMethod(1); // prints "one"
    setTimeout(myBoundMethod, 1000); // still prints "zero,one,two" after 1 second because of the binding
    setTimeout(myBoundMethod, 1500, "1"); // prints "one" after 1.5 seconds
    ```
4. 전역함수 setTimeout()과 setInterval()를 this 객체를 전달할 수 있는 전역함수로 대체 

### 타이머가 지연되는 이유
#### 1. 중첩된 타임 아웃이 4 ms 이하일 경우
- 최소 지연보다 작은 time 메서드 호출 -> 최소 지연을 사용하도록 강제됨
- 최소 지연시간은 :  브라우저마다 다르다.
- 최신 브라우저에서 0ms 타임 아웃을 구현하려면 [window.postMessage()](https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage)

#### 2. 비활성화 탭에서 타임아웃이 1000ms 에 여러번 일어날 경우
부하/배터리 사용양 감소를 위해, 비활성화 탭들에서 타입아웃이 1초에 여러번 일어나지 않도록 clamping 된다.

[활성화탭](https://www.computerhope.com/jargon/a/active-tab.htm)
- 현재 사용하고 있는 탭
- 나머지 탭들은 비활성화 탭
![image](https://user-images.githubusercontent.com/31977543/96563486-f5cf6380-12fc-11eb-9a32-0353b6248bda.png)


#### 3. 타임 아웃 지연
다른 작업들로 인해 늦게 실행 될 수 있다.

#### 최대 지연 값
- IE, Chrome, Safari, and Firefox : 32-bit 부호있는 정수
- 2147483647 보다 더 큰 지연 >  정수 오버플로우가 발생, 타임아웃이 즉시 실행

> setTimeout 을 읽어보면서 이전에 작성했던 피드백을 다시 읽어보았다. 
> [:link:](https://eyabc.github.io/Doc/dev/dku-javascript-study/step07.html#to-%EB%85%B8%EC%9B%90)
> setInterval 의 콜백 함수로 function(){...}을 넣어주면 해당 function 은 setInterval 객체의 메소드가 된다. 즉, 콜백함수 내 작성된 this 는 실행객체, setInterval 함수를 가리키게 되고 ...
 
## Cookies
- 웹 페이지에 저장되는 작은 크기의 문자열
- `이름-값` 의 쌍이다. `username = John Doe`
- 각 쌍은 `;`로 구분
- HTTP 프로토콜의 일부이다.
- 쓰임 
    - 인증, 클라이언트 식별
- 주로 웹 서버에 의해 만들어짐
    1. [서버] HTTP Response Header 에 `Set-Cookie` 에 내용을 넣어 전달
    2. [브라우저] `Set-Cookie` 내용을 브라우저의 쿠키에 저장.
    3. [브라우저] 사용자가 쿠키를 생성하도록 한 동일 서버(사이트) 에 접속할 때마다 쿠키의 내용을 `Cookie` Request Header 에 넣어 전달
    4. [서버] 쿠키를 보고 사용자에게 필요한 정보를 준다.


### document.cookie CRUD Cookies
쿠키를 CRUD 할 수 있다.

#### Create
- 새 쿠키를 설정하면 document.cookie 에 추가됨
    - 데이터 프로퍼티가 아닌 접근자 프로퍼티 
    - 이전 쿠키를 덮어 쓰지 않음 
- 쿠키의 이름
    - 모든 글자 허용
    - 형식의 유효성과 일관성유지 -> `encodeURICpmponent` 를 사용하여 이름과 값을 이스케이프 처리
    ```javascript
    // 특수 값(공백)은 인코딩 처리해 줘야 합니다.
    let name = "my name";
    let value = "John Smith";
    
    // 인코딩 처리를 해, 쿠키를 my%20name=John%20Smith 로 변경하였습니다.
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    
    alert(document.cookie); // ...; my%20name=John%20Smith
    ```
    
1. 
    ```javascript
    document.cookie = "username=John Doe";
    ```

2. 만료 Date 명시하기(UTC time)
    ```javascript
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    ```

3. path : 쿠키가 속한 페이지 지정
    ```javascript
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    ```
   
#### Read
```javascript
const x = document.cookie;  // string: cookie1=value; cookie2=value; cookie3=value;
```

#### Update
overwritten 이 된다.
```javascript
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

#### Delete

1. 브라우저가 종료될 때

1. 만료 Date 적기, 빈 값
    ```javascript
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    ```
   - 쿠키 경로를 정의해야 올바르게 쿠키를 삭제할 수 있다.
   
### document.cookie String
- 일반 텍스트 문자열과 다르다.
- 전체 쿠키 문자열을 써도 다시 읽으면 이름-값 쌍만 볼 수 있다.
- 지정된 하나의 쿠키 값을 찾기
    - 쿠키 문자열에서 쿠키 값을 검색하는 JavaScript 함수 작성 필요

쿠키에 대한 내용은 추후에 다룰것이다.

## Reference
- https://www.w3schools.com/js/js_window.asp
- MDN
- https://lifea.co.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-window-screen/
- https://poiemaweb.com/js-global-object
- https://ko.javascript.info/cookie
- https://www.zerocho.com/category/JavaScript/post/573b321aa54b5e8427432946

