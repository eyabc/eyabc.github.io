---
title: typeof 
---

[:link:](https://vomvoru.github.io/blog/javascript-primitive-type/)

반환값 
- type 문자열
- undefined, boolean, string, object, symbol, number, function

- 원시 값은 모두 typeof 로 확인 가능
- null 은 원시 값이지만, object 로 나온다.

```javascript
typeof 11 // 'number'
typeof NaN // 'number'
typeof 'str' // 'string'
typeof {} // 'object'
typeof [] // 'object'
typeof function () {} // 'function'
typeof null // 'object'
typeof undefined // 'undefined'
typeof new (function abc(){}) // 'object'
```
