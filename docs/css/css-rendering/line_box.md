---
title: 2-2 Line box

---

```html 
<-- class 의 의미는 float 이다 !-->
<div style="width:500px">
  <div class="left" style="width:200px;height:150px">1</div>
  <div class="right" style="width:50px;height:150px">2</div>
  <div class="right" style="width:50px;height:100px">3</div>
  <div class="left" style="width:150px;height:50px">4</div>
  <div class="right style=width:150px;height:70px">5</div>
  <div class="left" style="width:150px;height:50px">6</div>
  <div class="left" style="width:150px;height:50px">7</div>
  <div style="height:30px;background:red;color:yellow;">
      <span>ABC1</span>
      <span>ABC2</span>
      <span>ABC3</span>
      <span>ABC4</span>
      <span>ABC5</span>
      <span>ABC6</span>
      <span>ABC7</span>
      <span>ABC8</span>
  </div>
</div>
```
**line-box 에서 신경쓰는 것은 float 요소밖에 없다.**

#### 1. `<div class="left" style="width:200px;height:150px">1</div>`

1 영역은 처음 시작했기 때문에 새로운 bfc 영역을 만든다.  
float left 는 line box 의 가장 왼쪽에 붙는 것

![image](https://user-images.githubusercontent.com/31977543/118350470-e01fd500-b591-11eb-8b3a-a79e0e60f450.png)

#### 2. `<div class="right" style="width:50px;height:150px">2</div>`
두번째 영역에서는 라인박스의 영역이 줄어든다. 
![image](https://user-images.githubusercontent.com/31977543/118350554-60463a80-b592-11eb-9a30-45d717438b51.png)

#### 3. `<div class="right" style="width:50px;height:100px">3</div>`
linebox 는 가로만 보는 것이 아니라 세로도 본다. 
![image](https://user-images.githubusercontent.com/31977543/118350594-9388c980-b592-11eb-8a82-02525c00f28a.png)

#### 4. `<div class="left" style="width:150px;height:50px">4</div>`
![image](https://user-images.githubusercontent.com/31977543/118350628-ca5edf80-b592-11eb-974f-c09d85575f54.png)


#### 5. `<div class="right style=width:150px;height:70px">5</div>`
5번영역을 넣을 때에는, 기존의 linebox 의 영역이 충분하지 않아 파기된다.   
현재 라인박스의 가장 바닥면을 기준(바운드라인)으로 빈 공간이 라인박스 영역이 된다. 
![image](https://user-images.githubusercontent.com/31977543/118350676-0f831180-b593-11eb-8614-f545db3688b6.png)

#### 6. `<div class="left" style="width:150px;height:50px">6</div>`
![image](https://user-images.githubusercontent.com/31977543/118350720-4fe28f80-b593-11eb-8ac2-1c4a0807ed5f.png)

#### 7. `<div class="left" style="width:150px;height:50px">7</div>` 
![image](https://user-images.githubusercontent.com/31977543/118350819-af409f80-b593-11eb-8343-5b52623fd6fe.png)

**right 보다 오른쪽에 그려진 그림 없고 left 보다 더 왼쪽에 그려진 그림 없다.**

**빈공간은 left right 사이만 유효하다.**

#### 8-1. `<div style="width:150px;height:30px;background:red">ABC</div>`
ABC 박스는 float 가 아니다.    
**최초 float 가 만들어진 곳을 기준으로 정렬될 것이다.**  

![image](https://user-images.githubusercontent.com/31977543/118351069-bae09600-b594-11eb-976c-6b3a5d3a7c20.png)

#### 8-2 ABC1-8
```html
<div style="height:30px;background:red;color:yellow;">
  <span>ABC1</span>
  <span>ABC2</span>
  <span>ABC3</span>
  <span>ABC4</span>
  <span>ABC5</span>
  <span>ABC6</span>
  <span>ABC7</span>
  <span>ABC8</span>
</div>
```
ABC(N) 은 inline 요소
- float 에 가드 되지 않음
- ***overflow:auto* 임에도 불구하고, auto 만큼 visible 하게 빨강 박스가 늘어나지 않음**
- 빨강 박스에서 inline 만 벗어나있다.

- 원래 컨텐츠가 커서 BFC 를 박스를밀어낼 때 visible 속성이면 늘어난다.
- **line-box 때문에 inline 요소가 밀릴 때는 늘어나지 않는다.** 
- ABC(N) 은 그림은 그렸지만 **실체(geometry)가 없다**

ABC8 은 왜 저기에 위치해있는지 모르겠음
 
![image](https://user-images.githubusercontent.com/31977543/118353294-938fc600-b5a0-11eb-84c1-98018b5ae010.png)


#### bound line 
![image](https://user-images.githubusercontent.com/31977543/118351234-c4b6c900-b595-11eb-891d-8657365d04e7.png)
