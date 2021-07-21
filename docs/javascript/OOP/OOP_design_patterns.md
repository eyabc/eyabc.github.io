---
title: Design Patterns
---


## MVC 1
![image](https://user-images.githubusercontent.com/31977543/111023309-a14b9280-841b-11eb-9dcc-843574d06234.png)
화살표는 알고 있다 관계
- controller 는, view 와 model 을 알고있다.

### 변화율이 다르면 의존성을 분리해야 한다.

변화율
- **변경 이유**, 변경 빈도 .. 등

*객체가 바뀌는 이유를 하나로 만들자 SRP*

View 는 Model 을 알고 있다.(의존성이 있다)
- 하지만 View 와 Model 의 변화율이 다르므로 분리해야 한다.

#### Model
- 비즈니스에 관계된 것을 변경

#### View
- 사용자의 인터렉션하는 방법을 변경

mvc 는 주로 서버에서 쓴다.
- 서버에서는 view -> model 관계가 없기 때문


## 제왕적 controller MVC 모델
![image](https://user-images.githubusercontent.com/31977543/111023322-b1637200-841b-11eb-9df3-41c5f09e1a9d.png)

View 가 Model 대신, Controller 를 알게 되었다. 

→ 컨트롤러가 모두 알게된 구조 

문제
- Controller 가 View 와 Model 의 변화를 반영해 주어야 한다. 
- Controller 의 유지보수가 힘들어진다.

이런 의존성들을 해결할 수 있는 방법이 mvc 자체에서는 없다.

## MVP model view presenter
![image](https://user-images.githubusercontent.com/31977543/111023342-dc4dc600-841b-11eb-9ce9-d9ed6e8f4048.png)
많이 채용되었다.
비주얼 베이직, MFC, 안드로이드뷰 가 이 모델을 쓴다.

**View 에 대한 모델의 의존성이 완전히 제거되었다.**

- View 가 그림을 그리는 재량권이 없음 
- Presenter 가 getter setter 를 통해서 View 의 통제를 바꿔줌
- View 에 많은 getter setter 를 만들어야 한다는 단점

## MVVM model view viewModel
![image](https://user-images.githubusercontent.com/31977543/111023682-bcb79d00-841d-11eb-8c9e-bd7a70d48903.png)

viewModel 이 view 를 모르게 하는 것에 있다. 

*binder 라는 것이 필요하다.*

### ViewModel 뷰를 대신할 객체
순수한 view 이다. 

- 그림 그리는 view 가 아님
- 인메모리 개체로서의 순수한 데이터로서의 view 이다.

노드에서는 dom 이 없다. 대신 노드에서 viewModel 을 갱신할 수 있다.

viewModel 에 맞게 그림이 그려져야 한다. 

### Binder 
<img src="https://user-images.githubusercontent.com/31977543/111023682-bcb79d00-841d-11eb-8c9e-bd7a70d48903.png" width="50%" style={{minWidth: 400 +'px'}}/>
<img src="https://user-images.githubusercontent.com/31977543/111023685-c7723200-841d-11eb-9baf-e2bb8409fbd0.png" width="50%" style={{minWidth: 400 +'px'}}/>

1. binder 가 viewModel 의 변화를 감지해 view 를 변경하는 방법
2. view 의 변화가 생기면 binder 를 따라서 viewModel 을 갱신하는 방법

자동으로 해주는 binder 가 있어야 MVVM 이 성립 

view 와 viewModel 사이의 의존성을,
- binder 가 다 아는 것으로 둘 사이의 의존성을 없애 버렸다. 

#### 단방향 observation 
<img src="https://user-images.githubusercontent.com/31977543/111023682-bcb79d00-841d-11eb-8c9e-bd7a70d48903.png" width="50%" style={{minWidth: 400 +'px'}}/>

binder 가 observe 하는 대상은 옵션이다. 

#### call
<img src="https://user-images.githubusercontent.com/31977543/111023685-c7723200-841d-11eb-9baf-e2bb8409fbd0.png" width="50%" style={{minWidth: 400 +'px'}}/>

viewModel 이 binder 를 알게 해서 직접 상태가 바뀜을 call 해 준다.

observer 보다, 수동으로 call 을 하는 것이 유리한 경우도 있다.
- observer 는 viewModel 이 10개 바뀌면 10번 갱신이 되지만
- call 은 수동으로 한번에 갱신할 수도 있다.
