---
title: 3-2 box-sizing
---
요소의 너비와 높이를 계산하는 방법을 지정
![Morden Box](https://user-images.githubusercontent.com/31977543/118783900-79b8f080-b8ca-11eb-9962-de432f2835ae.png)


```html
<style>
  div {
    width: 100px; height: 100px;
    padding: 10px;
    border: 10px solid #000;
    display: inline-block;
  }
</style>
<body>
  <div style="background:red"></div>
  <div style="background:blue;box-sizing:border-box"></div>
</body>
```

CSS 의 **content-box** 가 box-sizing 의 default 이다.

### 1. `box-sizing:border-box`
```html
<style>
    div {
        width: 100px; height: 100px;
        display: inline-block;
    }
</style>
<body>
<!--컨텐츠의 크기를 보존하고 싶을 때-->
<div style="background:red"></div> 
 
<div style="background:blue;box-sizing:border-box"></div>
</body>
```
![image](https://user-images.githubusercontent.com/31977543/118789938-3eb9bb80-b8d0-11eb-9a87-98a1c4420467.png)

> [inline-block 사이의 space](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
> - 일반적으로 inline-block 요소 사이에 공백이 존재한다.
> - 단어 사이의 공백과 같다.   
>
> 공백을 없애는 방법
> ```html
> <div style="background:red">
> </div><div style="background:blue;box-sizing:border-box"></div>
> ```
> ![image](https://user-images.githubusercontent.com/31977543/118791752-fa2f1f80-b8d1-11eb-8cd3-ec0a43668b9a.png)


### 2. `padding: 10px;`
![image](https://user-images.githubusercontent.com/31977543/118790633-edf69280-b8d0-11eb-9599-4949e23c4ca2.png)
![image](https://user-images.githubusercontent.com/31977543/118790703-fbac1800-b8d0-11eb-881f-d98128b28839.png)

### 3. `border: 10px solid #000;` 
![image](https://user-images.githubusercontent.com/31977543/118790842-1b434080-b8d1-11eb-8a8b-f070b438fbbb.png)
![image](https://user-images.githubusercontent.com/31977543/118790866-1ed6c780-b8d1-11eb-9adc-7d3d4653ab89.png)

### 4. `border: 10px dashed rgba(0,0,0,0.5);`
![image](https://user-images.githubusercontent.com/31977543/118792373-91947280-b8d2-11eb-8f4d-6fa8fde2da5f.png)
![image](https://user-images.githubusercontent.com/31977543/118792759-ec2dce80-b8d2-11eb-8257-e9232ce93368.png)

**그림을 그려주는 fragment 의 영역이 border-box 영역까지 색칠이 된다.**


Reference
-- 
- https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing
