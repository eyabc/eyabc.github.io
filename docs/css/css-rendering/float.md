---
title: 2-1 float
---
float 는
- Normal Flow(bfc, ifc, relative position) 의 가드 역할을 할 때에 쓸 수 있다.
- float 는 *line box* 라는 공식으로 그려짐

## BFC 와 float 의 결합
**float 가 등장하는 순간 새로운 bfc 영역이 생성된다.**
 
- 새로운 BFC 영역안에 블루스카이 박스는 일반적인 Normal flow 로 그림 그려진다. 
- 그리고 블루스카이 위에 초록색 박스가 떠있게 된다. 
- 이 현상을 *normal float + float 모델*로 이해할 수 있다.
- 이 때 bfc 박스의 크기는? 
    - float 영역 전체와 인라인영역이 다 차지하는 공간 끝(?)까지

float 영역을 다단으로 만들면 geometry 계산이 까다로워진다.

```html
<div style="width:500px">
  <div style="height:50px;background:red"></div>
  <div style="width:200px;height:150px; float:left;background:rgba(0,255,0,0.5)"></div>
  <div style="height:50px;background:skyblue"></div>
</div>
```
![image](https://user-images.githubusercontent.com/31977543/118349480-e317c700-b58b-11eb-9f29-496eeb40a855.png)

---

```html
<div style="width:500px">
  <div style="height:50px;background:red"></div>
  <div style="width:200px;height:150px;float:left;background:rgba(0,255,0,0.5)"></div>
  Hello
  <div style="height:50px;background:skyblue">WOLRD</div>
</div>
```

![image](https://user-images.githubusercontent.com/31977543/118349592-7d780a80-b58c-11eb-93dc-77ab3f36ba78.png)

HELLO 가 초록색 박스 뒤에 그려질 것으로 기대했지만 
- float 는 inline 요소의 가드로 작용하여 가드 바깥쪽에 그려지게 된다.   
- inline 요소에 가드로 작동하지만 
- block 요소에 가드로 작동하지 않는다. 
- float 안에는 inline 이 들어가지 못한다.
