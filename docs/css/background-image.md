---
title: CSS background-image 의 안티 패턴
---

## 웹페이지에 이미지 삽입 방법
1. `<img>` 태그
2. CSS background-image 속성

## background-image 가 안티패턴인 이유
### 1. SEO 에 좋지 않다.
* google 봇이 크롤링하거나 색인하지 않음
    * 구글검색의 33% 는 이미지 검색임
* `<img>` 의 *alt* 속성으로 이미지에 대한 설명과 컨텍스트를 google에 제공할 수 없다.

### 2. 접근성에 좋지 않다.
Screen readers 는 background-image를 완전히 무시함.
* 스크린 리더가 이미지를 무시해도 되는 상황
    * 디자인적 요소일 때 빈 태그 alt="" 사용

> Screen Readers
> * 화면에 표시되는 텍스트를 합성 된 음성으로 변환하는 소프트웨어 응용프로그램

### 3. 성능에 좋지 않다.
* 일반적인 사이트에서 이미지 : 전송되는 데이터 중 가장 큰 청크 → 최적화 필요
* 브라우저가 CSS를 다운로드하고 파싱하기 전까지 이미지 다운로드를 시작할 수 없으므로 로드가 느려진다. 

### 4. CMS와 CDN 에 좋지 않다.
* CDN를 사용하여 이미지 리소스를 최적화 하고자 할 때
local URL에서 CND URL로 교체해야 한다.
* CSS에서 이미지 URL를 넣는 것은 하드코딩이다.


> CDN (Content Distribution[Delivery] Networks)
> * 콘텐츠를 효율적으로 전달하기 위해  
> 여러 노드를 가진 네트워크에 데이터를 저장하여 제공하는 시스템.
> * 인터넷 서비스 제공자에 직접 연결되어 데이터를 전송하므로         
> 콘텐츠 병목을 피할 수 있는 장점이 있다.
> * 콘텐츠 제공자는 CND회사에게 사용료를 지불하고,     
> CDN 회사는 ISP, 이동통신사업자, 네트워크 사업자에게 데이터 센터에서의 서버 호스팅 비용을 지불한다.

## background-image 를 쓰는 경우
### 이미지를 순수 장식 배경으로 사용하는 경우
### `<PICTURE/>`
* background-image 속성의  background-size: cover 는 `<picture>` 와 같다.
    ```html
  <picture> 
      <img src="...."
          alt="mag"
          style="object-fit: cover;"
      >
  </picture>
  ```
  
* `<PICTURE>` 의 장점
    1. SEO
    1. 접근성 (alt)
    1. CMS-generated, CDN
    1. 이미지 최적화를 위한 srcset과 함께 잘 작동한다.
    1. .webp 같은 next-generation 이미지 포맷을 위해 `<source>` 를 사용 가능 ? 
    1. Chrome이나 다른 브라우저가 native image lazy load 기능 


> 반응형 이미지 srcset
> * 이미지 소스의 너비 : 160, 320w, 
    ```html
    <img src="cat.jpg" alt="cat" 
      srcset="cat-160.jpg 160w, cat-320.jpg 320w, cat-640.jpg 640w, cat-1280.jpg 1280w">
    ```  

> lazy load 
> * 스크린 이미지가 페이지 로드 시간에 미치는 영향을 제한하기 위해 사용자가 이미지를 스크롤 할 때까지 이미지 가져오기를 지연시킨다 
> * `<img>` `<iframe>`
> * `<iframe src="...html" loading="lazy"> </iframe>`

> 반응형이 아니라면 `<picture>` 대신 `<figure>`와 `<figcaption>` 


Reference
--
* https://velog.io/@chris/the-css-background-image-property-as-an-anti-pattern 
* Screen Readers https://www.boia.org/blog/why-screen-readers-are-essential-for-website-accessibility
* CMS https://namu.wiki/w/CMS
* CDN https://ko.wikipedia.org/wiki/%EC%BD%98%ED%85%90%EC%B8%A0_%EC%A0%84%EC%86%A1_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC
* srcset https://cloudfour.com/thinks/responsive-images-101-part-4-srcset-width-descriptors/
* lazy loading https://addyosmani.com/blog/lazy-loading/
