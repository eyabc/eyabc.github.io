---
title: 3-1 Morden Box
---

![Morden Box](https://user-images.githubusercontent.com/31977543/118783900-79b8f080-b8ca-11eb-9962-de432f2835ae.png)

- contents-box
    - 콘텐츠가 표시되는 영역
    - width 등의 속성을 사용하여 크기 조정 가능

- padding-box
    - 콘텐츠와 border 사이의 공간
    - 요소 내에 추가 공간을 만든다.
    - 콘텐츠 주위에 공백으로 배치

- border-box
    - 내용과 패딩을 감싼다
    - 요소의 경계를 설정
    
- margin-box
    - 여백은 가장 바깥 쪽 레이어
    - 패딩 및 테두리를이 상자와 다른 요소 사이의 공백으로 감싸준다
    

## box-shadow
- box-shadow 는 마치 border 처럼 사용할 수 있다.
- border-box 바깥쪽에 그려진다.
- geometry 로 계산되지 않는다.
- 그림을 그릴 때 border-box 속성이 있으면 추가로 그림만 그려준다. fragment 단계에서 작동한다. 
- box-shadow 는 다른 geometry 에 영향을 끼치지 않음

## box-shadow: inset
![inset](https://user-images.githubusercontent.com/31977543/118785304-b507ef00-b8cb-11eb-8458-ab8b589e77af.png)

- padding 영역 일부에 그리게 된다. 

box-shadow 는 몇개라도 쓸 수 있다.
무지개로 그릴수도 있다. 

## outline
![outline](https://user-images.githubusercontent.com/31977543/118785966-55f6aa00-b8cc-11eb-843f-1a664a5229a0.png)

정확하게 box-shadow 와 똑같은 위치에 그려진다. (border-box 바깥쪽)
- geometry 의 영향을 끼치지 않는다.

box-shadow 는 border-radius 의 영향을 받는다.
- border-box 가 곡선이면 box-shadow 도 곡선이 된다.
- outline 은 (2018) 년 기준 브라우저에서 border-radius 의 영향을 받지 않는다.

Reference
--
- https://ktpark1651.tistory.com/204
- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model
