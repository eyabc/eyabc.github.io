---
title: 1-4 Normal flow
---
 
CSS 에 공식적인 고유 명사이다. 

CSS2.1 Visual Formatting Model
Positioning Schemes & Normal Flow

## Position
---
*static(default) / relative / absolute / fixed / inherit*

Position 은 **Geometry 영역에 left top 를 계산할 때 
추상적인 위치를 결정하게 하는 시스템이다.** 



## Normal flow
---
브라우저에서 그림그릴 때 가장많이 쓰는 공식 

- position 이 **static relative** 일 때만 가능하다. 

1. Block Formatting Contexts (BFC)
2. Inline Formatting Contexts (IFC)
3. Relative Positioning 
    - normal flow 의 일부이지만 포지셔닝을 정의하고 있다. 

실제 Normal flow 를 계산하는 방법은 BFC, IFC 

## BFC
---
**block 은 부모의 가로길이를 가득 채운 한 줄**

- x 는 언제나 0 
- width 는 언제나 부모의 width 이다. 

이전 블록의 y (이전 블록들의 height 합산) 계산  
- 첫번째 블록 context 의 height 이다.

![image](https://user-images.githubusercontent.com/31977543/117127322-e87c5100-add6-11eb-893d-7a630b638f84.png)

BFC 안에 있는 블록요소의 height 의 합이 나의 height 이다.

## IFC
---
**한 라인을 먹지 않고 나의 컨텐츠 크기만큼 width 를 차지한다.** 

![image](https://user-images.githubusercontent.com/31977543/117127543-2d07ec80-add7-11eb-9ffe-cdf79cec5a04.png)

첫번째 inline 의 다음 두번째 inline 은 첫번째의 width 만큼 떨어진 곳이 x 가 된다. 

**인라인 요소의 width 의 합이 부모의 width 를 넘어가면 다음줄 로 넘어간다.**  
다음줄로 넘어간 인라인 요소의 y 값은 ?
- 지금 인라인을 구성하는 것중 가장 큰 height 가 **line height** 가 되어서
- line height 만큼 y 값이 내려오는 공식

IFC 영역이 생겨나도 block 이 오면 IFC 영역이 종료되고     
다음번 bfc 블록이 생긴다. 

![image](https://user-images.githubusercontent.com/31977543/117128547-87ee1380-add8-11eb-8d3d-ae710e62cb69.png)

```html
<div style="width:500px;backgroud:red">&nbsp;</div>
<div style="background:blue">&nbsp;</div>
```

--- 
![image](https://user-images.githubusercontent.com/31977543/117128723-bf5cc000-add8-11eb-8331-eea00fd95509.png)

```html
<div style="width:200px; background: red">
   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</div>
```
*aaaaaa...* 는 IFC 인데 아래로 넘어가지 않았다.      
부모의 width 를 넘어가면 안되는데, 왜 아래로 안내려가고 부모의 width 를 넘어갈까? 

**암묵적으로 공백문자가 없는 문자를 하나의 IFC section 으로 본다. **

```html
<div style="width:200px">
aaaaaaaaaa
aaaaaaaaaa
aaaaa
</div>  
```
이라면 공백으로 구분된 각각의 요소를 inline 하나의 요소로 본다. 

*word break* 속성
- 공백문자를 사용하고 싶지 않으면 div 에 특별한 속성을 지정해야 한다.
- 이 공간 안에서는 공백문자 없이 붙어있는 문자열도 하나하나 문자를 인라인으로 처리해라 라는 것.
- 당연히 브라우저가 엄청 느려진다.
    - geometry 영역이 많아짐으로써 계산 영역이 많아진다. 

## BFC + IFC
---
```html
<div style="width:500px">
  HELLO
  <span>
     WORLD
     <div style="background:red">&nbsp;</div>   <!--인라인 안의 블록 요소-->
  </span>
  !!
</div>
```
- 인라인 안의 블록 요소 가 있다.       
- 렌더링 시스템과 돔의 구조는 무관하다.       
    - 돔의 포함관계와 렌더링을 평가할때 포함관계는 다르다.       
    - 렌더링은 DOM 의 요소 구조를 보지 않고 BFC IFC 구조만 본다. 

![image](https://user-images.githubusercontent.com/31977543/117129955-570ede00-adda-11eb-8b65-a19727f46f9a.png)

태그의 구조가 렌더링의 구조와 일치하지 않다. 

## Relative position model
---
```html
<div style="width:500px">
  **
  <span>
     HELLO
     <span style="position:relative; top:50px"> WORLD
        <div style="background:red">&nbsp;</div>
     </span>
     !!
     <div style="background:blue">&nbsp;</div>   <!--인라인 안의 블록 요소-->
  </span>
</div>
```
- **span 태그에 relative position 을 입히면** 
relative position model 로 바뀐다. 

- **static 에서 상대적으로 위치를 이동시킨다.** 

![image](https://user-images.githubusercontent.com/31977543/117130716-66daf200-addb-11eb-8e71-321dc038ccda.png)
![image](https://user-images.githubusercontent.com/31977543/117130763-75c1a480-addb-11eb-9b78-b22a33063a3f.png)

- **position static 과 relative 가 섞여 있으면,
무조건 position relative 가 static 위로 올라온다.** 

- relative 의 **geometry 계산은 static 가 동일하다.** 
- relative 은 **static 을 그린다음에 상대적으로 옮겨준 것이다.** 

## position : absolute / fixed
---
- Normal flow 로 작동하지 않는다.      
- width height 를 주지 않으면 영역이 확보되지 않을 수 있다. 


