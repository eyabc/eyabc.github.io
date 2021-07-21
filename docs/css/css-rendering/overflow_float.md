---
title: 2-4 overflow:hidden 와 float 의 관계 
---
## 규약 **overflow: hidden / scroll → flow 와 관련**
overflow hidden or scroll 속성을 가질 때에만     
이 값을 가지는 요소로 부터 **새로운 BFC 를 만든다.**  
이때 *first-line-box-bound* 를 인식해서 만든다.


```html 
<div style="width:500px">
  ...
  <div class="hidden" style="height:30px;background:red;">A</div>

  <div class="hidden" style="height:15px;background:orange;">B</div>
  <div style=height:30px;background:black></div>
  
  <div class="hidden" style="height:30px;background:red;">C</div>

  <div class="hidden" style="height:20px;background:orange;">D</div>
  <div style="height:30px;background:black;"></div>

  <div class="hidden" style="background:red">E</div>   
  <div style="height:30px;background:black"></div>   
  <div class="hidden" style="height:30px;background:orange">F</div>
  <div style="height:30px;background:black">F</div>
</div>
```

#### 1. `<div class="hidden" style="height:30px;background:red;">A</div>`
div 마지막 자식요소에 overflow:hidden 을 넣는순간 새로운 BFC 가 태어난다.        
BFC 는 부모 영역만큼 width 를 갖는다.      
부모 영역을 계산할 때 **line-box-bound 를 갖는다는 스펙이 들어있다.** 

#### 이전(8-1)에 ABC 빨간 박스의 영역   
![image](https://user-images.githubusercontent.com/31977543/118351588-d8632f00-b597-11eb-8724-2da474e974dd.png)

#### overflow-hidden 의 영역
![image](https://user-images.githubusercontent.com/31977543/118351626-fa5cb180-b597-11eb-94fb-70477faadf60.png)

![image](https://user-images.githubusercontent.com/31977543/118351691-40197a00-b598-11eb-80c6-90688bb8c155.png)


#### 2. `<div class="hidden" style="height:15px;background:orange;">B</div>`
![image](https://user-images.githubusercontent.com/31977543/118351781-d0f05580-b598-11eb-8290-2fccaa57b001.png)


#### 3. `<div style=height:30px;background:black></div>`
세번째 black 블록은 hidden 요소가 없어서 두번째 BFC 요소에 해당하고 geometry 를 넓힌다.
![image](https://user-images.githubusercontent.com/31977543/118351837-275d9400-b599-11eb-896c-2fe534a1ce91.png)

#### 4. `<div class="hidden" style="height:30px;background:red;">C</div>`
![image](https://user-images.githubusercontent.com/31977543/118352209-1a41a480-b59b-11eb-98b3-97d49aee0703.png)

#### 5. `<div class="hidden" style="height:20px;background:orange;">D</div>`
D 의 경우 강의에서 C 밑의 공간(15px) 을 넘어가므로 hidden 이 되어 보이지 않는다고 되어있으나    
실행 결과 다음 line bound 를 기준으로 영역을 차지하여 생성이 되었다. 
![image](https://user-images.githubusercontent.com/31977543/118352310-bff51380-b59b-11eb-8236-d10d90449a14.png)

#### 6. `<div style="height:30px;background:black;"></div>`
![image](https://user-images.githubusercontent.com/31977543/118352357-021e5500-b59c-11eb-9979-cddbfe9ec20d.png)

#### 7. `<div class="hidden" style="background:red">E</div>`
다음 E 의 새로운 BFC 는 line bound 의 float:left 가 7번 박스이다.     
left 가 부모의 가장 오른쪽 500px width 에 위치한다.   
500px 가 가장 첫 시작이므로 결국엔 부모의 geometry 를 벗어나 hidden 이 된다.      
하지만 height 는 차지한다.

![image](https://user-images.githubusercontent.com/31977543/118352464-8ffa4000-b59c-11eb-97ba-533600c9cb67.png)

#### 8. `<div style="height:30px;background:black"></div>`
![image](https://user-images.githubusercontent.com/31977543/118352547-0139f300-b59d-11eb-8ff5-c15e7e14f15e.png)

#### 9. line box 가 더이상 관여하지 않는 부분
```html
<div class="hidden" style="height:30px;background:orange">F</div>
<div style="height:30px;background:black">F</div>
```

![image](https://user-images.githubusercontent.com/31977543/118352622-5e35a900-b59d-11eb-9407-fec8808df201.png)

```html
<div style="width:500px;">
  <div class="left" style="width:200px;height:150px;background: green">1</div>
  <div class="right" style="width:50px;height:150px;background: red;">2</div>
  <div class="right" style="width:50px;height:100px;background: darkred">3</div>
  <div class="left" style="width:150px;height:50px;background: greenyellow">4</div>
  <div class="right" style="width:150px;height:70px;background:indianred">5</div>
  <div class="left" style="width:150px;height:50px;background: darkgreen">6</div>
  <div class="left" style="width:150px;height:50px;background: darkseagreen">7</div>

  <div class="hidden" style="height:30px;background:red;">A</div>
  <div class="hidden" style="height:15px;background:orange;">B</div>
  <div style=height:30px;background:black></div>
  <div class="hidden" style="height:30px;background:red;">C</div>
  <div class="hidden" style="height:20px;background:orange;">D</div>
  <div style="height:30px;background:black;"></div>
  <div class="hidden" style="background:red">E</div>
  <div style="height:30px;background:black"></div>
  <div class="hidden" style="height:30px;background:orange">F</div>
  <div style="height:30px;background:black"></div>
</div>
<style>
  div {
      color: white;
      text-align: center;
  }
  .left {
      float:left;
  }
  .right {
      float:right;
  }
  .hidden {
      overflow: hidden;
  }
</style>

```

여기까지 고전 레이아웃 시스템이다.
IE 호환에 중요하다.        
이외에. grid, flex... 

