---
title: 1-3 CSS Specifications
---

## CSS
---
렌더링 시스템과 그래픽 시스템을 이야기하는 이유는?      

CSS 는   
- 고정숫자를 사용하지 않고, 계산된 체계로 그래픽을 표현하는 방법
- Geometry 영역을 표현하는 방법
- Coloring 표현 방법    

에 대한 일종의 언어 인 것이다. 


### CSS 를 배운다는 것

**CSS 속성 값이 구체적으로 발현될때는 어떤방식으로 계산되서 표현되는지 이해하는 것이다.** 
 
CSS 는 다른 시스템에서 방법을 차용을 많이 하였다. 
따라서 복잡한 체계를 가지게 되었다. 

**표준을 이해해야 하는것이 중요하다.**  

## CSS level1
---

HTML 에 그림관련된 것을 집어넣었더니 복잡해짐.    
오페라 브라우저가 W3C 에 제안함.    
- 기존 그래픽스 시스템을 차용해서 CSS 시스템을 만들자

## CSS level2  + module
---
MS IE4 에서 많이 제안되었다.

CSS 는 **그림**에 대한 것인데     
이것을 **하나의 스펙으로 관리하는 것은 무리**라고 판단.  

CSS 는 다양한 기능을 갖고 있다. 
- 윈도우 렌더링 시스템
- X윈도우,, 맥.. 렌더링 시스템.. 등 분야가 많으니깐
 
단일 사양의 어려움 → 모듈로 관리 

그래서 **CSS2 스펙 안에, 관심 분야별로 모듈 시스템을 넣어서**  
**사양을 모듈 별로 관리 함**


## CSS level2.1
---
CSS 의 모든 모듈들이 2로 고정이 되었다. 

**모듈별로 어떤 분과는 열심히 해서 모듈 3 를 발표하는 팀이 생겨버렸다.   
반대로 변화가 거의 없는 팀도 존재했다. **

*따라서 CSS2.1 이후에 CSS3 로 가는 것이 불가능 하다는 것을 깨달았다.* 

벌써 level3 가 된 모듈들은 
- *Syntax, cascade, color, selectors, background, 
values, text, text decor, fonts, ui*

흔히 CSS3 라고 부르는 것은 
- CSS2.1 에 level3 이 된 모듈들을 모아서 CSS3 이라고 부를 뿐이다. 
- 공식문서에 CSS3 는 존재하지 않는다. 

## Module Level
--- 
*더이상 CSS level 이 존재하지 않는다.* 

이때, 새로 태어난 모듈들은 1레벨 을 갖고 있다. 
- *transforms 1,
compositing 1,
effects 1,
masking 1,
flexbox1,
grid 1*

*브라우저마다 사용할 수 있는 모듈의 레벨도 다르다.* 


## Other Specifications
---

###  새로운 신흥 강자들이 반발을 제기 
W3C 가 영향력을 갖고 있던 시대는 아이폰을 만들기 전이다.  
MS 의 영향력이 약화되고 구글하고 애플의 영향이 강화됐다.

HTML5 같은 경우 W3C 와 관계없이 브라우저에 탑재 되었다. 

### W3C Community and Business Groups 운영 
표준은 아니지만 W3C 산하의 커뮤니티로 인정하고 이 활동을 공식적인 활동으로 인정해준다.

이제 별개의 그룹보다     
W3C 커뮤니티 산하의 그룹을 만들게 되었다.       
이 그룹에서 사양을 만들에서 W3C 에다가 draft 로 밀어 낸다. 

이 그룹들에서 만든 스펙을  
삼성 브라우저, 사파리, 크롬.. 에다가 넣고 있다. 

이중에서 CSS 에 관련이 깊고 영향력이 있는 그룹은       
- **WICG** Web platform incubator community group 
- **RICG** Respossive issues community group

WICG 가 파워가 쎄서 RICG 는 거의 WICG 에 먹혀 버렸다. 
(파워가 쌘 이유;구글이 주 멤버) 

WICG 에 나온 draft 는 크롬에 먼저 반영되고 W3C 에 반영될 정도

현재 스펙을 이해하려면 W3C 스펙만 보기에도 어렵다. 
