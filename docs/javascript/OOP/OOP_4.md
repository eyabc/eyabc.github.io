---
title: 설계 종합
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/r4vOF7WpxgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![viewModel](https://user-images.githubusercontent.com/31977543/113478846-6393d400-94c6-11eb-910e-d8f9f5116433.png)

![viewModelSubject](https://user-images.githubusercontent.com/31977543/113478889-a3f35200-94c6-11eb-9e67-f2fb7a7d0df6.png)

![viewModelListener](https://user-images.githubusercontent.com/31977543/113478904-b7062200-94c6-11eb-86c7-9667ad3884eb.png)

ViewModelValue 
- 매우 무거운 객체
- 수정하기 어려운 객체가 된다.
- 이벤트에서, 옵저버 패턴에서 인포객체는 항상 무겁다.
- JQuery 가 제일먼저 뜬 이유는, 
Dom 이벤트 객체를 감싸서 모든 브라우저에서 작동하는 이벤트 속성 객체로 바꿔주었기 때문이다.

좋은 설계
- 단방향 의존성만 존재.
- 순환도 없다.

**코드를 짜고나서 그림을 반드시 그리자.**
![ViewModelValue](https://user-images.githubusercontent.com/31977543/113478919-d0a76980-94c6-11eb-97e9-d79b9c9d62e1.png)

![image](https://user-images.githubusercontent.com/31977543/113478941-e9b01a80-94c6-11eb-91f5-a998d82c83ab.png)

![image](https://user-images.githubusercontent.com/31977543/113478954-f92f6380-94c6-11eb-8c11-c7a6f27ccd94.png)

![image](https://user-images.githubusercontent.com/31977543/113478983-2845d500-94c7-11eb-9fb5-71f9576c06f2.png)

![image](https://user-images.githubusercontent.com/31977543/113478997-457aa380-94c7-11eb-80a7-6f73eb2a9372.png)

![image](https://user-images.githubusercontent.com/31977543/113479024-6e029d80-94c7-11eb-85bc-365dc5d9f86d.png)

![image](https://user-images.githubusercontent.com/31977543/113479050-92f71080-94c7-11eb-9257-fb360f5425de.png)

![image](https://user-images.githubusercontent.com/31977543/113479075-c174eb80-94c7-11eb-8196-a160b5b7b3d4.png)

![image](https://user-images.githubusercontent.com/31977543/113479086-d6ea1580-94c7-11eb-9814-5d600fca7852.png)

![image](https://user-images.githubusercontent.com/31977543/113479110-f4b77a80-94c7-11eb-8c63-f1c461369371.png)

![image](https://user-images.githubusercontent.com/31977543/113479124-16b0fd00-94c8-11eb-942a-854bb06f9c5f.png)

모두 단방향이다.

Binder 는 상당히 위험한 객체다.
- 나가는 선이 많은 클래스는 깨지기 쉬운 클래스
- 영향을 많이 받음
- 안정적인 클래스에 의존해야한다. 

모여드는 선이 많으면 무거운 클래스
- 바뀌면 영향을 많이줌.

청록색 박스 → 실제 돔에 대한 **지식**
- 이 부분을 *다른 도메인으로 교체할 수 있다.*
- 클라이언트에서 작성해야 할 코드

나머지는 
- 돔에 대한 의존성이 없는 순수 인메모리 객체이다.


MVVM 이 좋은점
- 대부분이 플랫폼 의존성이 없다.
- 뷰 모델은 가상의 뷰다. 인메모리 객체이기 때문에, 특정한 구형물의 의존성이 없다
- 안드로이드, 아이폰 .. .에도 쓸수있다.
- 리액트 네이티브를 비롯해 가상화 되어있는 렌더링 시스템이 이렇게 구현된다

옵저버 패턴은 비용이 싸지 않다.
- 많은 구현체들은 성능상의 이유나 설계상의 이유로 직접 binder call 하는 경우가 많다. 

자바스크립트에서 재귀를 제대로 쓸 수 있는 브라우저는 사파리 밖에 없으므로 루프를 조심해서 짜야 한다.


