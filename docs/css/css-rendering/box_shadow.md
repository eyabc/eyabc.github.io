---
title: 3-3 box-shadow
---
![inset](https://user-images.githubusercontent.com/31977543/118785304-b507ef00-b8cb-11eb-8458-ab8b589e77af.png)

- geometry 에 영향을 주지 않는다.

```html
<div style="background:blue;box-shadow: 0 0 0 10px #rgba(255, 255, 0, 0.5)"><div>
```
10px 짜리 border 와 똑같은 형태일 것이다.

![image](https://user-images.githubusercontent.com/31977543/118796898-fe117080-b8d6-11eb-9591-00616e283f5e.png)
![image](https://user-images.githubusercontent.com/31977543/118797350-7710c800-b8d7-11eb-97c1-5d52de31226d.png)

- red 박스를 색칠한 다음 blue 박스를 색칠하기 때문에       
blue 박스의 
box-shadow 가 상위에 위치한다. 
- 인라인 요소임에도 불구하고 그려지는 순서가 존재함

## box-shadow & position: relative
*position:relative* 는 fragmentation 이 끝나고(normal flow 가 끝나고)     
다시 그리는 것이기 때문에   
blue 의 box-shadow 보다 더 상위 레이어에 위치한다.

```html
<div style="background:red;position:relative"></div>
<div style="background:blue;box-shadow: 0 0 0 10px #rgba(255, 255, 0, 0.5)"><div>
```
![image](https://user-images.githubusercontent.com/31977543/118797699-d373e780-b8d7-11eb-9f2d-678b35a33479.png)


## box-shadow: inset
border-box 안쪽의  
padding 영역에 box-shadow inset 이 그려졌다.

```html
<div style="background:red;">
</div><div style="background:blue;box-shadow: inset 0 0 0 10px rgba(255, 255, 0, 1)"></div>
```
![image](https://user-images.githubusercontent.com/31977543/118798410-92300780-b8d8-11eb-8e1c-002caa6a58e8.png)
![image](https://user-images.githubusercontent.com/31977543/118798430-965c2500-b8d8-11eb-8bfe-084985da1436.png)
![image](https://user-images.githubusercontent.com/31977543/118798474-a5db6e00-b8d8-11eb-8e44-45cb25a50131.png)


## box-shadow sandwich
box-shadow 는 `,` 로 몇 개의 레이어도 그릴 수 있다.

```html
<div style="background:red;"></div>
<div 
  style="background:blue;
  box-shadow: 0 0 0 10px #aa0, inset 0 0 0 10px #aa0">
</div>
```
![image](https://user-images.githubusercontent.com/31977543/118948170-fe6f4180-b992-11eb-850a-e89ac07bce34.png)

```html
<div style="background: blue;
  box-shadow:
    0 0 0 10px #aaa,        /*1*/
    0 0 0 20px #0a0,        /*2*/
    inset 0 0 0 10px #aa0,  /*3*/
    inset 0 0 0 20px #0a0   /*4*/
  ;
"></div>
```
![image](https://user-images.githubusercontent.com/31977543/118948845-a553dd80-b993-11eb-81a0-c68ac79e4a93.png)
![image](https://user-images.githubusercontent.com/31977543/118948967-c1f01580-b993-11eb-9a64-5aeaafb43ae4.png)
![image](https://user-images.githubusercontent.com/31977543/118949026-d03e3180-b993-11eb-8924-8d6575edc53e.png)
![image](https://user-images.githubusercontent.com/31977543/118949125-e3510180-b993-11eb-9765-99a4fc813143.png)

- (2-4) 의 일부가 보이지 않는 이유는 
    - 브라우저에서 div 가 차지하는 영역에서 fragment 가 뷰포트를 벗어났기 때문이다.
- 여러 띠의 레이어가 나타났지만 실제로 shadow 가 겹쳐보이는 것이다.
- 만약에 겹쳐 보이는 것이라면 (2) 가 (1) 을 덮어써 (1) 이 보이지 않아야 되지 않을까? 
    - 그러나 선언의 반대 순서로 그려짐 
    - 스택처럼 쌓이기 때문이다.
    

## box-shadow 는 border-radius 를 따라간다.
```html
<div style="background: blue;
  box-shadow:
    0 0 0 10px #aaa,        
    0 0 0 20px #0a0,        
    inset 0 0 0 10px #aa0,  
    inset 0 0 0 20px #0a0;
  border-radius: 50%;
"></div>
```
![image](https://user-images.githubusercontent.com/31977543/119354324-eb37db00-bcde-11eb-8f1d-c71c6d5b977a.png)

## box-shadow with animation
```html
<style>
    @keyframes ani {
        from {
            box-shadow:
                    0 0 0 0px #aa0,
                    0 0 0 0px #0a0,
                    inset 0 0 0 0px #aa0,
                    inset 0 0 0 0px #0a0
        }
        to {
            box-shadow:
                  0 0 0 10px #aa0,
                  0 0 0 20px #0a0,
                  inset 0 0 0 10px #aa0,
                  inset 0 0 0 20px #0a0
        }
    }
    div {
        width: 100px; height: 100px;
        display: inline-block;
        padding: 10px;
        border: 10px dashed rgba(0,0,0,0.5);
    }
</style>
<body>
<div style="
  background: blue;
  animation: ani 0.4s linear alternate infinite;
"></div>
</body>
```
![animate-border-shadow](https://user-images.githubusercontent.com/31977543/119356606-95b0fd80-bce1-11eb-9a03-bad1a0097e49.gif)

```html
<style>
    @keyframes ani {
        from {
            transform: rotate(0);
            box-shadow:
                    0 0 0 0px #aa0,
                    0 0 0 0px #0a0,
                    inset 0 0 0 0px #aa0,
                    inset 0 0 0 0px #0a0
        }
        to {
            transform: rotate(360deg);
            box-shadow:
                  0 0 0 10px #aa0,
                  0 0 0 20px #0a0,
                  inset 0 0 0 10px #aa0,
                  inset 0 0 0 20px #0a0
        }
    }
    div {
        width: 100px; height: 100px;
        display: inline-block;
        padding: 10px;
        border: 10px dashed rgba(0,0,0,0.5);
        border-radius: 50%;
    }
</style>
<body>
<div style="
  background: blue;
  animation: ani 0.4s alternate infinite;
"></div>
</body>
```
![box-shadow-animation](https://user-images.githubusercontent.com/31977543/119357270-546d1d80-bce2-11eb-927d-6a5e00d54673.gif)
