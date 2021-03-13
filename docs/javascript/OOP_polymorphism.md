---
title: Polymorphism
---
> [ES6 클래스](./%ED%81%B4%EB%9E%98%EC%8A%A4.html#class-syntax)  

```javascript
const Worker = class {
  run() { console.log('working'); }
  print() { this.run(); }
};

const HardWorker = class extends Worker {
  run() { console.log('hardWorking'); }
};

const hardWorker = new HardWorker();
```

## Polymorphism: "대체 가능성" substitution
```javascript
console.log(hardWorker instanceof Worker);  // true 
```
true 인 이유     
- sub 는 super 를 대체할 수 있다. 
- super 는 sub 를 대체할 수 없다.
- (extend) HardWorker 의 부분집합이 Worker 이다. 
- 확장한 클래스는 확장될 클래스를 대체할 수 있다. 

## Polymorphism: "내적 일관성" internal identity
```javascript
hardWorker.print();  // hardworking
```
this 는 worker 클래스의 print() 안에 있지만, 여전히 hardWorker 의 this 를 가리킨다.
- this 의 특징 → 호출 문맥에 결정되며, 바뀌지 않는다. 

## 객체지향 언어의 Polymorphism
Substitution & internal identity
- 확장된 객체는 원본으로 대체 가능
- 생성시점의 타입이 내부에 일관성 있게 참조됨

두가지 특성을 가지지만 언어마다 구현 방법이 다르다.
- 자바스크립트는 내부에 Prototype 시스템을 가진다. 

## Polymorphism of Prototype 
프로토타입 체인을 통해서 내적 일관성을 달성하게 된다.   
worker 인스턴스가 태어날 때, 가장 가까운 HardWorker Prototype 으로 결정
![image](https://user-images.githubusercontent.com/31977543/110197906-e870db00-7e91-11eb-86ef-cb35fd9b08eb.png)

프로토타입 체인을 통해서 대체 가능성을 달성한다. 
![image](https://user-images.githubusercontent.com/31977543/110197979-646b2300-7e92-11eb-9824-ade468fcd3b6.png)
![image](https://user-images.githubusercontent.com/31977543/110197985-6d5bf480-7e92-11eb-9627-e8e9ea6dd62b.png)

자바스크립트는 Polymorphism 이 성립 → *객체지향 언어* 
