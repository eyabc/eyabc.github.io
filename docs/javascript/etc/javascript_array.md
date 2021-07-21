---

title: 알아야 할 13가지 유용한 Javascript 배열 방법과 트릭

---

Reference
--
* [13 useful JavaScript array tips and tricks you should know](https://www.blog.duomly.com/13-useful-javascript-array-tips-and-tricks-you-should-know/?fbclid=IwAR3YuEviqaZ1ergMhmh3wxM6arYpReKpPFMpDhn4cpjOmeUlIVk0ymXq3-0)

``` javascript
const fruits = [
    'banana', 
    'apple', 
    'orange', 
    'watermelon', 
    'apple', 
    'orange', 
    'grape', 
    'apple'
];
```                                                                                             

## 1. Array 중복 삭제
1. Array.from(new Set(fruits));
2. [...new Set(fruits)];

## 2. Array 특정 값 바꾸기
1. Array.splice(start, value to remove, valueToAdd)
``` javascript
fruits.splice(0, 2, 'potato', 'tomato');
// ['potato', 'tomato', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
```

## 3. Array.map() 없이 Map 사용하기
```javascript
var friends = [
    { name: 'John', age: 22 },
    { name: 'Peter', age: 23 },
    { name: 'Mark', age: 24 },
    { name: 'Maria', age: 22 },
    { name: 'Monica', age: 21 },
    { name: 'Martha', age: 19 },
];
var friendsNames = Array.from(friends, ({ name }) => name)
// ['John', 'Peter', 'Mark', 'Maria', 'Monica', 'Martha']
```

## 4. Array 비우기
```javascript
fruits.length = 0; 
// [] 
```

## 5. Array 를 Object로 변환하기
```javascript
var fruitsObj = {...fruits};
// {0: 'banana', 1: 'apple', ...}
```

## 6. 데이터로 Array 채우기
```javascript
var newArray = new Array(10).fill('1');
// ['1', '1', ...]
```

## 7. Array 병합
1. concat()
2. spread operator (...)
```javascript
var fruits = ['apple', 'banana'];
var meat = ['beef'];
var vegetables = ['tomato'];
var food = [...fruits, ...meat, ...vegetables]
```

## 8. 두 Array의 교집합
```javascript
var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item))
```
## 9. Array에서 falsy 값 제거
* falsy value in Javascript
    * 9, "", null, NaN, undefined  
```javascript
var trueArr = mixedArr.filter(Boolean);
```

## 10. Array의 랜덤 값 가져오기
````javascript
var colors = ["blue", "white" ];
var randomColor = colors[(Math.floor(Math.random()*(colors.length + 1)))]
````

## 11. Array 역 순서
```javascript
var reversedColors = colors.reverse()
```

## .lastIndexOf() 
Array 에 중복된 value 값들이 나타날 수 있음. 
중복된 값 들중 가장 마지막에 값의 인덱스를 반환함
```javascript
var lastIndex = nums.lastIndexOf(5)
```

## Array 값의 합
```javascript
var sum = nums.reduce((x, y) => x + y);
```







