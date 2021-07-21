---
title: 1-1 Graphics System
---
## 그래픽스 시스템의 근본적인 내용    
---
**그래픽스 시스템은 한마디로 점찍는 방법이라고 생각하면 된다.** 
   
X, Y, width, height, color

Graphics 는 기본적으로 *점*을 하나 찍는 것부터 시작할 수 있다.

점을 왕창 찍으면 

<img width="50%" style={{minWidth: 400 +'px'}}
src="https://user-images.githubusercontent.com/31977543/117105450-00dd7300-adb9-11eb-92b6-58071c2d2ca0.png"
/>

하얀색 만 찍으면 그림 같지 않아서 빨간 점을 찍었다.

<img width="50%" style={{minWidth: 400 +'px'}}
src="https://user-images.githubusercontent.com/31977543/117105527-2e2a2100-adb9-11eb-91ec-d5d8285cfe70.png"
/><br/>

 
각 점의 **색깔 정보** 가 보인다.       
각 점의 **위치, 크기 정보**도 보인다.
 
## Fixed Number
---
방금 전에는, 숫자가 **확정** 되어 있다.   
**고정된 숫자** 로 화면을 구성했다.
그래픽 시스템에서 **Fixed Number** 라고 한다.

고정된 숫자는 PC 태블릿 모바일에 적응되어 그릴 수가 없다.

<img width="50%" style={{minWidth: 400 +'px'}}
src="https://user-images.githubusercontent.com/31977543/117105760-a690e200-adb9-11eb-8d46-57647640a555.png"
/>

고정된 숫자로 만들어진 그래픽스 시스템은 **환경에 적응**할 수 없다.

*환경* 
- Screen Size
- Chrome Size
- Hierarchy
- 모니터 해상도
- 브라우저의 창 사이즈
- 스마트폰의 가로/세로 모드 등..

*범용성 있는 그래픽스 시스템에 부적합*

## Abstract Calculator 
숫자를 대신할 **메타포**를 사용한다. 
- %, left, block, inline, float

### 메타포는 한마디로 함수
퍼센트 사용 → 비율로 계산
- (부모, 화면..) 특정한 것을 기준으로 나타내는 것. 
- 실제로 화면에 그려질 때 환경을 인식해서 숫자로 바뀌게 된다. 
- % 는 공식이자 수식이다. 
- 그림을 그리는 순간마다 함수로서 실제 숫자를 얻는다.

## Components  
--- 
하지만 단지 그것만으로 복잡한 그래픽을 그릴 수 없다.  
그래서 abstract calculator 를 이어받는 것들을 만들어 낸다. 

<img width="50%" style={{minWidth: 400 +'px'}}
src="https://user-images.githubusercontent.com/31977543/117106975-c9bc9100-adbb-11eb-9840-2ea88d2d4b31.png"
/>

## Framework
Components 들이 일정한 규칙과 사용방법을 지키며 구현되어 있을때
 
### Components 의 대표적인 예 HTML 태그
그림을 그리기 위해 그림 이미지 경로의 픽셀을 얻어와서 만들지 않는다.     
 이미지 태그에 이미지를 넣는다.
 
 **html 태그 하나하나를 컴포넌트**라고 부른다면      
 html 태그들은 **스타일에 공통적인 속성**을 먹는다.       
 **html 체계 전체를 프레임 워크**라고 부를 수 있다.

부트스트랩의 하나하나를 컴포넌트라고 부른다면    
부트스트랩 자체는 프레임워크라고 볼 수 있을 것이다. 

