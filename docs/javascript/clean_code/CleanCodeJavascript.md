* Style Guide
* javascript 코드를 작성할 때 읽기 쉽고 재사용 가능하며 리팩토링 가능하게끔 도와준다.
* 지침일 뿐이다

> Reference
- [clean-code-javascript](https://github.com/qkraudghgh/clean-code-javascript-ko/blob/master/README.md)
- [javascript 변수값 설정 시 default 사용 (short-circuit 트릭)](https://seongilman.tistory.com/90) 

## 변수 (Variables)
#### 1. 의미 있고 발음하기 쉬운 변수 이름 사용

```javascript title="bad case"
const yyyymmdstr = moment().format('YYYY/MM/DD');
```

```javascript title="good case"
const currentDate = moment.format('YYYY/MM/DD');
```

#### 2. 동일한 유형의 변수에 동일한 어휘 사용
```javascript title="bad case"
getUserInfo();
getClientData();
getCustomerRecord();
```
```javascript title="good case"
getUser();
```

#### 3. 검색가능한 이름 사용
    
작성할 코드보다 읽을 코드가 더 많기 때문에, 코드를 읽기 쉽고 검색 가능하게 작성해야 한다.        
buddy.js, ESLint 같은 도구들이 이름이 정해져있지 않은 상수들을 발견하고 고칠수 있게 해준다.


```javascript title="bad case: 86400000 이 의미하는 바를 알 수 없다."
setTimeout(blastoff, 86400000);
```
```javascript title="good case: 대문자로 const 전역 변수를 선언한다."
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```

#### 4. 의도를 나타내는 변수들을 사용
```javascript title="bad case"
const address = 'One Infinite Loop, Cupertino 95014';
const citiZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCitiZipCode(address.match(citiZipCodeRegex)[1], address.match(citiZipCodeRegex)[2]);
```

```javascript title="good case"
const address = 'One Infinite Loop, Cupertino 95014';
const citiZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(citiZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

#### 5. 자신만 알아볼 수 있는 작명 피하기
명시적인 것이 암시적인 것보다 좋다

```javascript title="bad case"
const locations = ['서울', '인천', '수원'];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  dispatch(l);
});
```
```javascript title="good case"
const locations = ['서울', '인천', '수원'];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  dispatch(location);
});
```

#### 6. 문맥상 필요없는 것들 쓰지 않기
    
```javascript title="bad case"
const Car = {
  carMake: 'BMW',
  carModel: 'M3',
  carColor: '파란색'
};

function paintCar(car) {
  car.carColor = '빨간색';
}
```

```javascript title="good case"
const Car = {
  make: 'BMW',
  model: 'M3',
  color: '파란색'
};

function paintCar(car) {
  car.color = '빨간색';
}
```

#### 7. 기본 매개변수가 short circuiting 트릭이나 조건문 보다 깔끔하다.
기본 매개변수는 종종 short circuiting 트릭보다 깔끔하다.     
기본 매개변수는 매개변수가 **undefined** 일 때만 적용됩니다.        
`'', "", false, null, 0, NaN` 같은 *falsy* 한 값들은 기본 매개변수가 적용되지 않는다.

```javascript title="bad case"
function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.';
  // ...
}
```

```javascript title="good case"
function createMicrobrewery(name = 'Hipster Brew Co.') {
  // ...
}
```

## 함수 (Functions)
#### 1. 함수 인자는 2개 이하가 이상적이다
매개변수의 개수를 제한하는 것은 함수 테스팅을 쉽게 만들어 주기 때문에 중요하다.       
매개변수가 3개 이상일 경우 테스트 경우의 수가 많아진다.        
그리고 함수에게 너무 많은 역할을 하게 만든 것이다.       
대부분의 상위 객체는 1개의 인자만으로 충분하다.

JavaScript 를 사용할 때 많은 보일러 플레이트 없이 바로 객체를 만들 수 있다. 
* 그러기 때문에 **많은 인자들을 사용해야 한다면 객체를 이용**할 수 있다.

ES6 비구조화(destructuring) 구문의 장점
1. 어떤 사람이 그 함수의 Signature (인자의 타입, 반환되는 값의 타입 등)를 볼 때 어떻게 사용되는지 즉시 알 수 있다.
2. 함수에 전달된 인수 객체의 지정된 기본타입 값을 복제하며 SideEffect 발생을 방지한다. 
    - 인수 객체로부터 비구조화된 객체와 배열을 복제되지 않는다. ?
3. ~~Linter 를 사용하면 사용하지 않는 인자에 대해 경고해주거나 비구조화없이 코드를 짤 수 없게 한다.~~ 
    
```javascript title="bad case"
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
``` 

```javascript title="good case"
function createMenu({ title, body, buttonText, cancellable }) {
   // ...
}
createMenu({
  title: 'Foo',
  body 'Bar',
  buttonText: 'Baz',
  cancellable: true
})
```
    
### 2. 함수는 하나의 행동만 해야한다. *
소프트웨어 공학에서 가장 중요한 규칙이다.     

함수가 1개 이상의 행동을 할 때 작성, 테스트, 가독이 어려워진다.      
반대로 수정, 가독성이 좋아진다.

```javascript title="bad case"
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}
```

```javascript title="good case"
function emailCients(clients) {
  clients
    .filter(isClientActive)
    .forEach(email);
}
function isClientActive() {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```
#### 3. 함수명은 함수가 무엇을 하는지 알 수 있어야 한다.
```javascript title="bad case"
function AddToDate(date, month) {
  // ...
}
const date = new Date();

// 뭘 추가하는 건지 이름만 보고 알아내기 힘들다.
AddToDate(date, 1);
```

```javascript title="good case"
function AddMonthToDate(date, month) {
  // ...
}
const date = new Date();
AddMonthToDate(date, 1);
```

#### 4. 함수는 단일 행동을 추상화 해야한다.
추상화 된 이름이 여러 의미를 내포하고 있다면 그 함수는 너무 많은 일을 하게끔 설계된 것이다.   
함수들을 나누어서 재사용가능하고 테스트 하기 쉽게 만들자

```javascript title="bad case"
function parseBetterJSAlternative(code) {
  const REGEXES = [
  // ...
  ];
  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach(REGEX => {
      // lex...
  });
  const ast = [];
  tokens.forEach(token => {
    // lex...
  });
  ast.forEach(node => {
    // parse...
  })
}
```

```javascript title="good case"
function tokenize(code) {
  const REGEXES = [
    // ...
  ]; 
  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      tokens.push(/* ... */);
    })
  })
  return tokens; 
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach(token => {
  	ast.push(/* */);
  });
  return ast;
}
function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach(node => {
    // parse...
  });
}
```

#### 5. 중복된 코드 작성 피하기
중복된 코드가 있다는것은 어떤 로직을 수정해야 할 일이 생겼을 때,    
수정해야 할 곳이 한 곳 이상이라는 뜻이다.

사소한 차이점 때문에 중복된 코드를 작성하는 코드가 있다.    
중복된 코드를 제거한다는 것은 하나의 함수/모듈/클래스를 사용하여 사소한 차이점을 처리할 수 있도록 추상화를 만드는 것을 의미한다.

잘 추상화 하지 못한 코드는 중복된 코드보다 나쁠 수 있으므로 여러 원칙들을 따르는 것이 좋다. 
 
```javascript title="bad case"
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };
    render(data);
  });
}
function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
   };  
   render(data);
  });
}
```

```javascript title="good case"
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calcaulateExpectedSalary();
    const experience = employee.getExperience();
    
    let portfolio = employee.getGithubLink();
    if(employee.type == 'manager') {
      portfolio = employee.getMBAProjects();
    }
  
    const data = {
      expectedSalary,
      experience,
      portfolio
    };      
    render(data);
  });
}
```

#### 6. Object.assign 을 사용해 기본 객체 만들기
```javascript title="bad case"
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz',
  config.cancellable = config.cancellable === undefined ? config.cancellable : true;
}
createMenu(menuConfig);
```

```javascript title="good case"
const menuConfig = {
  title: 'Order',
  // 유저가 'body' key 의 value 를 정하지 않았다.
  buttonText: 'send',
  cancellable: true
}; 

function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true  
  }, config);
  // config 는 { title: 'Order', body: 'Bar', buttonText: 'Send', cancellable: true } 
}
createMenu(menuConfig);
```
* [Object.assign()](./ObjectAssing.md) 

### 7. 매개변수로 플래그 사용하지 않기 *
플래그를 사용하는 것 자체가 그 함수가 한가지 이상의 역할을 하고 있다는 것을 뜻한다.        
boolean 기반으로 함수가 실행되는 코드가 나뉜다면 함수를 분리하자.

```javascript title="bad case"
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
```

```javascript title="good case"
function createFile(name) {
  fs.create(name);
}
function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

#### 8. 사이드 이펙트를 피하기 1
함수는 값을 받아서 어떤일을 하거나 사이드 이펙트를 만들어 낸다.
* 파일에 쓰여질 때
* 전역 변수 수정
* 파일 작성할 때
    * 파일을 작성하는 함수나 클래스가 여러개 존재하면 안되며 반드시 하나만 있어야 한다. 

* 사이드 이펙트 예
    * 어떠한 구조체도 없이 객체 사이의 상태를 공유하는 행위
    * 무엇이든 쓸 수 있는 변경가능한 데이터 유형을 사용하는 행위
  
```javascript title="bad case"
// 아래 함수에 의해 참조되는 전역 변수이다.
// 이 전역변수를 사용하는 또 하나의 함수가 있다고 생각해보자. 이제 이 변수는 배열이 될 것이고 프로그램을 망가뜨린다.
let name = 'Ryan McDermott';

function splitInfoFirstAndLastName() {
  name = name.split(' ');
}
splitInfoFirstAndLastName();
```

```javascript title="good case"
function splitInfoFirstAndLastName(name) {
  return name.split(' ');
}
const name = 'Ryan McDermott';
const newName = splitInfoFirstAndLastName(name);
```

#### 9. 사이드 이펙트 피하기 2
자바스트립트에서 기본타입 자료형은 값을 전달하고 객체와 배열을 참조를 전달한다.

우리가 만든함수는 장바구니 배열에 변화를 주며 이 변화는 구매목록에 어떤 상품을 추가하는 기능을 한다. 
장바구니 배열을 사용하는 어느 다른 함수가 있다면 이러한 추가에 영향을 받습니다. 

* bad case
    * 유저가 구매 함수를 호출한다.
    * 네트워크를 요청하고 서버에 장바구니 배열을 보낸다.
    * 네트워크 연결이 좋지 않아 구매함수는 다시한번 네트워크 요청을 보내야 하는 상황이 생겼다. 
    * 사용자가 네트워크 요청이 시작되기 전에 실수로 원하지 않는 상품의 장바구니에 추가 버튼을 실수로 클릭하였다. 
    * 실수가 있고난 뒤 네트워크 요청이 시작되면 장바구니에 추가 함수 때문에 실수로 변경된 장바구니 배열을 서버에 보내게 된다. 
    ```javascript
    const addItemToCart = (cart, item) => {
      cart.push({ item, date: Date.new() });
    };
    ```
    
* good cade
    *  장바구니에 추가 함수는 항상 장바구니 배열을 복제하여 수정하고 복제본을 반환하는 것이다. 
    장바구니 참조를 보유하고 있는 다른 함수가 다른 변경 사항의 영향을 받지 않게 된다.
    * 실제로 입력된 객체를 수정하고 싶은 경우가 있을 수 있지만 이 예제를 생각하면 그런 경우는 거의 없다. 그리고 대부분의 것들이 사이드 이펙트 없이 리팩토링 될 수 있다.
    * 큰 객체를 복제하는 것은 성능 측면에서 값이 매우 이러한 프로그래밍 접근법을 가능하게 해 줄 좋은 [라이브러리](https://immutable-js.github.io/immutable-js/)가 존재한다.
    이는 객체와 배열을 수동으로 복제하는 것처럼 메모리 집약적이지 않게 해주고 빠르게 복제해준다.
    ```javascript
    const addItemToCart = (cart, item) => {
      return [...cart, { item, date: Date.now() }];
    }
    ```

#### 전역 함수 피하기
전역 환경을 사용하는 것은 JavaScript 에서 나쁜 관행이다.
* 다른 라이브러리들과의 충돌이 있을 수 있다.
* diff 메서드를 Array.prototype 에서 쓰면 다른 라이브러리와 충돌 할 수 있다. 
ES6 의 classes를 사용해서 전역 Array 를 상속하자.

bad case
```javascript
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
}
```

good case:
```javascript
class SuperArray extends Array {
  diff(comparisionArray) {
    const hash = new Set(comparisionArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```

#### [명령형 프로그래밍보다 함수형 프로그래밍을 지향하자](../Term/JavascriptFunctionalProgramming.md)
함수형 언어는 더 깔끔하고 테스트하기 쉽다.

bad case
```javascript
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, 
  {
    name: 'Suzie Q',
    linesOfCode: 1500
  },
  {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, 
  {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  },
];

let totalOutput = 0;
for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
```
good case
```javascript
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, 
  {
    name: 'Suzie Q',
    linesOfCode: 1500
  },
  {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, 
  {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  },
];
const totalOutput = programmerOutput
.map(programmer => programmer.linesOfCode)
.reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);
```

#### 조건문 캡슐화 하
bad case
```javascript
if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}
```
good case
```javascript
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}
if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

#### 부정조건문 사용하지 않기
bad case
```javascript
function isDOMNodeNotPresent(node) {
  // ...
}
if (!isDOMNodeNotPresent(node)) {
  // ...
}
``` 
good case
```javascript
function isDOMNodePresnet(node) {
   // ...
}
if (isDOMNodePresnet(node)) {
  // ...
}
```

#### 조건문 작성 피하기
if 문 대신 다형성을 이용하면 가능하다. 
clean code 컨셉은 함수는 단 하나의 일만 수행한다 이다. 함수나 클래스에 if 문을 쓴다면
함수나 클래스가 한가지 이상의 일을 수행하고 있다는 것과 같다.

bad case
```javascript
class Airplane {
   // ...
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Airt Force One':
        return this.getMaxAltitude();
      case 'Cessna': 
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}
```
good case
```javascript
class Airplane {
  // ...
}
class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}
class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude ();
  }
}
class Cessna etends Airplane {
  // ...
  getCruisingAltitude () {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```

#### 타입-체킹 피하기 1 일관성 있는 API 사용하기
JavaScript는 타입이 정해져 있지 않은 자유로움 때문에 발생하는 버그에 타입-체킹 이외에 피할 수 있는 많은 방법들이 존재한다.
bad case:
```javascript
function travelToTexas(vehicle) {
  if (vehicle instanceof  Bicycle) {
    vehicle.pedal(this.currentLocation, new Location('texas'));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location('texas'));
  }
}
```
good case:
```javascript
function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location('texas'));
}
```

#### 타입-체킹 피하기 2 TypeScript 도입
bad case:
```javascript
function combine(val1, val2) {
  if (typeof val1 === 'number' && typeof val2 === 'number'||
      typeof val1 === 'string' && typeof val2 === 'string') {
	return val1 + val2;
  }
  throw new Error('Must be of type String or Number');
}
```
good case:
```javascript
function combine(val1, val2) {
  return val1 + val2;
}
```

#### 죽은 코드 지우기
죽은 코드는 중복된 코드 만큼이나 좋지 않다.
호출되지 않는 코드는 지우자. 그 코드가 여전히 필요해도 그 코드는 버전 히스토리에 안전하게 남아있을 것이다.

bad case
```javascript
function oldRequestModule(url) {
  // ...
}
function newRequestModule(url) {
  // ...
}
const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');
```
good case
```javascript
function newRequestModule(url) {
  // ...
}
const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');
```

# 객체와 자료구조 (Objects and Data Structures)

#### getter와 setter를 사용하세요.
JavaScript는 public private 같은 키워드가 없다.
그래서 getter setter를 사용하여 객체의 데이터에 접근하는 것이 객체의 속성을 찾는 것보다 훨씬 낫다. 

* 객체의 속성을 얻는 것 이상의 많은 것을 하고싶을 때, 코드에서 모든 접근자를 찾아 바꾸고 할 필요가 있다.
* set 할 때 검증로직을 추가하는 것이 코드를 더 간단하게 만든다. 
* 내부용 API 를 캡슐화 할 수 있다.
* getting 과 setting 할 때 로그를 찾거나 에러처리를 하기 쉽다.
* 클래스를 상속해서 디폴트 동작을 재정의할 수 있다.
* 서버에서 객체 속성을 받아올 때 lazy load 할 수 있다.

bad case:
```javascript
class BackAccount {
  constructor () {
    this.balance = 1000;
  }
}
const backAccount = new BacnkAccount();
backAccount.balance -= 100;
```  

good case
```javascript
class BackAccount {
  constructor(balance = 1000) {
    this._balance = balance;
  }
  // getter/setter를 정의할 때 'get', 'set' 같은 접두사가 필요하지 않다. 
  set balance(amount) {
    if (this.verifyIfAmountCanBeSetted(amount)) {
      this._balance = amount;
    } 
  }
  get balance () {
    return this._balance;
  } 
  verifyIfAmountCanBeSetted(val) {
  // ... 
  }
}
```

## 객체에 비공개 멤버를 만드세요
클로져를 이용하면 가능하다

bad case
```javascript
const Employee = function(name) {
  this.name = name;
};
Employee.prototype.getName = function getName() {
  return this.name
};
const employee = new Employee('John Doe');
console.log(`Employee name: ${employee.getName()}`); // John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // undefined
```

# 클래스 Classes

## ES5 의 함수보다 ES6의 클래스 사용하기
ES5의 클래스에서 상속, 메소드 정의 가 어려웠다. 상속이 필요한 경우라면 클래스를 사용하는 것이 좋다. 
크고 더 복잡한 객체가 필요한 경우가 아니라면 클래스보다 작은 함수를 사용하자.

bad case
```javascript
const Animal = function(age) {
  if (!(this instanceof Animal)) {
    throw new Error('Instantiate Animal with `new`');
  }
  this.age = age;
};
Animal.prototype.move = function() {}

const Mammal = function(age, furColor) {
  if(!(this instanceof Mammal)) {
    throw new Error('Instantiate Mammal with `new`');
  }
  Animal.call(this. age);
  this.furColor = furColor;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};

const Human = function(age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error('Instantiate Human with `new`');
  }
  Mammal.call(this, age, furColor);
  this.languageSpoke =languageSpoken;
};
Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};
```

good case
```javascript
class Animal {
  constructor(age) {
    this.age = age;
  }
  move() { /* .. */ }
}
class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }
  liveBirth() { /* .. */ }
}
class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super();
    this.languageSpoken = languageSpoken;
  }
  speak() { /* ... */ }
}
```

## 메소드 체이닝 사용하기
JavaScript 에서 Method Chaining 은 jQuery Lodash 등 많은 라이브러리에서도 사용하는 유용한 패턴이다.
코드를 간결하고 이해하기 쉽게 해준다. 클래스 함수에서 단순히 모든 함수의 끝에 this 를 리턴해주는 것으로 클래스 메소드를 추가로 연결할 수 있다.

bad case
```javascript
class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }
  setMake(make) {
    this.make = make;
  }
  setModel(model) {
    this.model = model;
  }
  setColor(color) {
    this.color = color;
  }
  save() {
    console.log(this.make, this.model, this.color);
  }
}

const car = new Car();
car.setColor('pink');
car.setMake('Ford');
car.setModel('F-150');
car.save();
```

good case: 
```javascript
class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }
  setMake(make) {
    this.make = make;
    return this;
  }
  setModel(model) {
    this.model = model;
    return this;
  } 
  setColor(color) {
    this.color = color;
    return this;
  }
  save () {
    console.log(this.make, this.model, this.color);
    return this;
  }
}
const car = new Car()
    .setColor('pink')
    .setMake('Ford')
    .setModel('F-150')
    .save();
```

## 상속보단 조합(composition)을 사용하세요
상속 보다 조합을 사용했을 때 이득이 더 많다. 

상속을 쓰는 좋은 예시
1. 상속관계가 has-a 관계가 아니라 is a 일 때 (사람 -> 동물 vs 유저 -> 유저정보)
1. 기반 클래스의 코드를 다시 사용할 수 있을 때 (인간은 모든 동물처럼 움직일 수 있다.)
1. 기반 클래스를 수정하여 파생된 클래스 모두를 수정하고 싶을 때 (이동시 모든 동물이 소비하는 칼로리를 변경하고 싶을 때)

bad case
```javascript
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  };
  // ...
}
// Employees 가  tex data 를 "가지고" 있기 때문에 좋지 않다.
// EmployeeTaxData 는 Employee 타입이 아니다.
class EmployeeTexData extends Employee {
  constructor(ssn, salary ) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  };
  // ...
}
```

good case
```javascript
class EmployeeTaxData {
  contructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }
  // ...
}

class Employee {
  contructor(name, email) {
    this.name = name;
    this.email = email;
  }
  setTaxData(ssn, salary) {
    this.textData = new EmployeeTaxData(ssn, salary);
  }
  // ...
}
```

# SOLID

## 단일 책임 원칙 (Single Responsibility Principle, SRP)
하나의 클래스에 너무 많은 기능들이 있고 
이 작은 기능들을 수정할 때 이 코드가 다른 모듈들에 어떠한 영향을 끼치는지 이해하기 어려울 수 있다.

bad case:
```javascript
class UserSettings {
  constructor(user) {
    this.user = user;
  }
  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }
  verifyCredentials() {
    //...
  }
}
```

good case:
```javascript
class UserAuth {
  constructor(user) {
    this.user = user;
  }
  verifyCredentilas() {
    // ...
  }
}
class UserSettings {
  constructor(user) {
    if (this.auth.verifyCredentials()) {
    
    }
  }
}
```

## 개방/폐쇄 원칙 (Open/Closed Priciple, OCP)
소프트웨어 개체(클래스, 모듈, 함수 등)는 확장을 위해 개방적이어야 하며 수정시엔 폐쇄적이어야 한다.
사용자가 .js 소스 코드 파일을 열어 수동으로 조작하지 않고도 모듈의 기능을 확장하도록 허용해야 한다.

bad case:
```javascript
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter'
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }
  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then((response) => {
        // transform response and retur
      })
    } else if (this.adapter.name === 'httpNodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // transform response and return 
      })
    }
  }
}

function makeAjaxCall(url) {
  // request and return promise
}
function makeHttpCall(url) {
  // request and return promise
}
```

good case:
```javascript
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
  request(url) {
    // request and return promise
  }
}
class NodeAdapter extends Adapter { 
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
  request(url) {
    // request and return promise
  }
}
class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }
  fetch(url) {
    return this.adapter.request(url).then((response) => {
    	// transform response and return 
    });
  }
}
```

## 리스코프 치환 원칙 (Liskov Subsititution Priciple, LSP)
* 매우 간단하지만 강력한 원칙. 
* 자료형 S가 자료형 T의 하위형이면, 프로그램이 갖추어야 할 속성들(정확성, 수행되는 작업 등)의 변경사항 없이, 자료형 T의 객체를 자료형 S의 
객체로 치환할 수 있어야 한다는 원칙이다.

부모 클래스와 자식클래스를 가지고 있을 때 베이스 클래스와 하위 클래스를 잘못된 결과 없이 서로 교환하여 사용할 수 있다. 

정사각형은 직사각형이지만 상속을 통해 is-a 관계를 사용하여 모델링 한다면 문제가 발생한다.
```javascript
class Rectangle {
  constructor() {
  	this.width = 0;
    this.height = 0;
  }
  setColor(color) {
    // ...
  }
  render(area) {
    // ...
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}
function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // 정사각형일 때 25를 리턴합니다. 하지만 20이어야 하는게 맞다.  ??
    rectangle.render(area);
  })
}
const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);
```

good case
```javascript
class Shape {
  setColor(color) {
    // ...
  }
  render(area) {
    // ...
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width & this.height;
  }
}
class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  getArea() {
    return this.length * this.length;
  }
}
function renderLargeShapres(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}
const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
```

## 인터페이스 분리 원칙 (Interface Segregation Principle, ISP)
클라이언트는 사용하지 않는 인터페이스에 의존하도록 강요 받으면 안된다.

JavaScript 에 타입 시스템이 없다 하더라도 중요하고 관계가 있는 법칙이다. 
가장 좋은 예는 방대한 양의 설정 객체가 필요한 클래스 이다. 
대부분의 경우 설정들이 전부다 필요하지 않기 때문에 클라이언트가 방대한 양의 옵션을 설정하지 않는 것이 좋다. 
설정을 선택적으로 할 수 있다면 무거운 인터페이스를 만드는 것을 방지할 수 있다.

bad case
```javascript
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }
  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }
  traverse() {
    // ...
  }
}
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModules() {} // 대부분 DOM 을 탐색할 때 애니메이션이 필요하지 않다.
})
```
good case
```javascript
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  } 
  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }
  setupOptions() {
    if (this.options.animationModule) {
      // ...  
    }
  }
  traverse() {
    // ...
  }
}
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {}
  }
})
```

## 의존성 역전 원칙 (Dependency Inversion Principle, DIP)
1. 상위 모듈은 하위 모듈에 종속되어서는 안된다. 둘 다 추상화에 의존해야 한다.
2. 추상화는 세부사항에 의존하지 않습니다. 세부사항은 추상화에 의해 달라져야 한다.

상위모듈이 하위 모듈의 세부사항을 알지 못하게 한다. 모듈간의 의존성을 감소시키는 데에 있다. 
 
bad case
```javascript
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }
  requestItem(item) {
    // ...
  }
}
class InventoryTracker {
  constructor(items) {
    this.items = items;
    // 안좋은 이유: 특정 요청방법 구현에 대한 의존성을 만들었다.
    // requestItems 는 한가지 요청방법을 필요로 한다.
    this.requester = new InventoryRequester();
  }
  requestItems() {
    this.items.forEach(item => {
      this.requester.requestItem(item);
    })
  }
}
const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();
```

good case
```javascript
class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }
  requestItems() {
    this.items.forEach(item => {
      this.requester.requestItem(item);  
    })
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }
  requestItem(item) {
    // ...
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS'];
  }
  requestItem(item) {
    // ...
  }
}
const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();
```

# 테스트 Testing
테스트는 배포보다 중요하다. 테스트 없이 배포한다는 것은 당신이 짜 놓은 코드가 언제든 오작동해도 이상하지 않다는 얘기와 같다.
테스트에 얼마나 시간을 투자할 지는 팀에 달려있지만 Coverage 가 100% 라는 것은 개발자에게 높은 자신감과 안도감을 준다.
훌륭한 테스트 도구를 보유해야 하는 것 뿐만 아니라 훌륭한 [Coverage 도구](http://gotwarlost.github.io/istanbul/)를 사용해야 한다는 것을 의미한다.

테스트 코드를 작성하지 않다는 것은 그 무엇도 변명이 될 수 없다.
[훌륭하고 많은 JavaScript 테스트 프레임워크](http://jstherightway.org/#testing-tools)들이 있다.
새로운 기능/모듈 들을 짤 때 테스트 코드를 작성하자. 만약 테스트 주도 개발 방법론(Test Driven Development, TDD) 이 당신에게 맞는 방법이라면 훌륭한 개발 방법이 될 수 있다.

bad case
```javascript
const assert = require('assert');

describe('MakeMomentJSGreateAgain', () => {
  it('handles date boundaries', () => {
    let date;
    date = new MakeMomentJSGreateAgain('1/1/2015');
    date.addDays(30);
    assert.equal('1/31/2015', date);
  
    date = new MakeMomentJSGreateAgain('2/1/2016');
    date.addDays(28);
    assert.equal('02/29/2016', date);
 
    date = new MakeMomentJSGreateAgain('2/1/2015'); 
    date.addDays(28);
    assert.equal('03/01/2015', date);
  })
})
```
good case
```javascript
const assert = require('assert');
describe('MakeMomentJSGreateAgain', () => {
  it('handles 30-day months', () => {
    const date = new MakeMomentJSGreateAgain('1/1/2015');
    date.addDays(30);
    assert.equal('1/3/2015', date);
  });
  it('handles leap year', () => {
    const date = new MakeMomentJSGreateAgain('2/1/2016');
    date.addDays(28);
    assert.equal('02/29/2016', date);
  });
  it('handles non-leap year', () => {
    const date = new MakeMomentJSGreateAgain('2/1/2015');
    date.addDays(28);
    assert.equal('03/01/2015', date);
  });
});
```

# 동시성 (Concurrency)

## Callback 대신 Promise 를 사용하기
bad case
```javascript
require('request').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', (requestErr, response) => {
  if (requestErr) {
    console.error(requestErr);   
  } else {
    require('fs').writeFile('article.html', response.body, (writerErr) => {
      if (writerErr) {
      	console.error(writeErr);
      } else {
        console.log('File written');
      }
    })
  }

})
```
good case
```javascript
require('request-promise').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
.then((response) => {
  return require('fs-promise').writeFile('article.html', response);
})
.then(() => {
  console.log('File written');
})
.catch((err) => {
  console.error(err);
});
```

## Async/Await 는 Promise 보다 더욱 깔끔하다
```javascript
async function getCleanCodeArticle() {
  try {
    const response = await require('request-promise').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin');
    await require('fs-promise').writeFile('article.html', response);
    console.log('File written)');
  } catch (err) {
    console.log(error(err));  
  }
}
```

# 에러 처리 Error Handling
에러를 뱉는다는 것은 좋은 것이다.
프로그램에서 무언가가 잘못되었을 때 런타임에서 성공적으로 확인되면 현재 스택에서 함수 실행을 중단하고 (노드에서) 
프로세스를 종료하고 스택 추적으로 콘솔에서 사용자에게 그 이유를 알려준다.

## 단순히 에러확인만 하지 말기
console.log 를 통해 콘솔에 로그를 기록하는 것은 에러 로그를 잃어버리기 쉽기 때문에 좋은 방법이 아니다.
try/catch 로 어떤 코드를 감쌌다면 그 코드에 에러가 날것을 대비한 것이므로 그에대한 계획이 있거나 어떠한 장치를 해야한다.

bad case:
```javascript
try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
} 
```
good case:
```javascript
try {
  functionThatMightThrow();
} catch (error) {
  // console.log 보다 더 알아채기 쉽다.
  console.log(error);
  // 유저에게 알리는 방법
  notifyUserOfError(error);
  // 서비스 자체에 에러를 기록하는 방법
  reportErrorToService(error);
  // else anything
}
```

## Promise 가 실패된 것을 무시하지 말기
단순히 에러확인만 하지 말기 와 같은 이유이다

bad case
```javascript
getData()
.then(data => {
  functionThatMightThrow(data);
})
.catch(error => {
  console.log(error);
});
```
good case
```javascript
getData()
.then(data => {
  finctionThatMightThrow(data);
})
.catch(error => {
  // console.log 보다 더 알아채기 쉽다.
    console.log(error);
    // 유저에게 알리는 방법
    notifyUserOfError(error);
    // 서비스 자체에 에러를 기록하는 방법
    reportErrorToService(error);
    // else anything
})
```

# 포맷팅 Formatting
포멧팅 체크를 자동으로 하주는 [많은 도구들](https://standardjs.com/rules.html)이 있다.
개발자들끼리 포맷팅에 대해 논쟁하는 것 만큼 시간과 돈을 낭비하는 것이 없다.
자동으로 서식을 교정해주는 것(들여쓰기, 탭이냐 스페이스냐, 작은따옴표냐 큰따옴표냐) 에 해당하지 않는 사항에 대해서는 몇가지 지침을 따르는 것이 좋다.

## 일관된 대소문자를 사용하자
bad case:
```javascript
const DAYS_IN_WEEK = 7;
const dayInMonth = 30;

const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const Aritists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}
```

good case
```javascript
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const aritists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}
```

## 함수 호출자와 함수 피호출자는 가깝게 위치하기
어떤 함수가 다른 함수를 호출하면 그 함수들은 소스 파일안에서 서로 수직으로 근접해 있어야 한다.
이상적으로는 함수 호출자를 함수 피호출자 바로 위에 위치시켜야 한다. 
코드를 읽을 때 신문을 읽듯 아래로 읽기 때문에 코드를 작성할 때도 읽을 떄를 고려하여 작성해야 한다.

bad case
```javascript
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }
  lookupPeers() {
    return db.lookup(this.employee, 'peers'); 
  }
  lookupManager() {
    return db.lookup(this.employee, 'manager');
  }
  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }
  perfReview() {
    this.getPerrReviews();
    this.getManagerReviews();
    this.getSelfReview();
  }
  getManagerReview() {
    const manager = this.lookupManager();
  }
  getSelfReview() {
    // ...
  }
}
const reivew = new PerformanceReview(user);
reivew.perfReview();
```

good case
```javascript
class PerformanceReveiw {
  constructor(employee) {
   this.employee = employee;
  }
  perfReview() {
    this.getPeerReveiws();
    this.getManagerReview();
    this.getSelfReveiw();
  }
  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }
  lookupPeers() {
    return db.lookup(this.employee, 'peers');
  }
  getManagerReview() {
    const manager = this.lookupManager();
  }
  lookupManger() {
    return db.lookup(this.employee, 'manager');
  }
}
const review = new Performance(employee);
reveiw.perfReview();
```

# 주석 Commnets 
## 주석은 단지 그 로직이 복잡하다는 것을 말할 뿐이다.
주석을 다는 것은 사과해야 할 일이며 필수적인 것이 아니다. 좋은 코드는 코드 자체로 말한다

bad case
```javascript
function hashIt(data) {
  // 이건 해쉬입니다.
  let hash = 0;

  // length 는 data 의 길이 입니다.
  const length = data.length;

  // 데이터의 문자열 개수만큼 반복문을 실행합니다.
  for (let i = 0; i < length; i++) {
    // 문자열 코드를 얻습니다.
    const char = data.charCodeAt(i);
    // 해쉬를 만든다.
    hash = ((hash << 5) - hash) + char;
    // 32 - bit 정수로 바꾼다.
    hash &= hash;
  }
}
```

good case:
```javascript
function hashIt(data) {
  let hash = 0;
  const length = data.length;
  
  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }
}
```

## 주석으로 된 코드를 남기지 말기
버전 관리 도구가 존재하기 때문에 코드를 주석으로 남길 이유가 없다.

## 코드 기록을 주석으로 남기지 말기
버전 관리 도구를 이용해야 하는 것을 꼭 기억하자. 죽은 코드도 불필요한 설명도 특히 코드의 기록에 대한 주석도 필요하지 않다.
코드의 기록에 대해 보고 싶다면 git log를 사용하자.

bad case: 
```javascript
/**
 * 2016-12-20: 모나드 제거했음, 이해는 되지 않음 (RM)
 * 2016-10-01: 모나드 쓰는 로직 개선 (JP)
 * 2016-02-03: 타입체킹 하는부분 제거 (LI)
 * 2015-03-14: 버그 수정 (JR)
 */
function combine(a, b) {
  return a + b;
}
```
good case:
```javascript
function combine(a, b) {
  return a + b;
}
```

## 코드의 위치를 설명하지 말자
이건 정말 쓸데 없습니다. 적절한 들여쓰기와 포맷팅을하고
함수와 변수의 이름에 의미를 부여하자

bad case:
```javascript
////////////////////////////////////////////////////////////////////////////////
// 스코프 모델 정의
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: 'foo',
  nav: 'bar'
};

////////////////////////////////////////////////////////////////////////////////
// actions 설정
////////////////////////////////////////////////////////////////////////////////
const actions = function() {
  // ...
};
```

good case:
```javascript
$scope.model = {
  menu: 'foo',
  nav: 'bar'
};

const actions = function() {
  // ...
};
```



