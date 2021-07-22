(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{174:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return p})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return c}));var a=t(3),r=(t(0),t(368));const o={},p={unversionedId:"javascript/etc/elsess",id:"javascript/etc/elsess",isDocsHomePage:!1,title:"elsess",description:"``",source:"@site/docs/javascript/etc/elsess.md",slug:"/javascript/etc/elsess",permalink:"/docs/javascript/etc/elsess",version:"current"},s=[],l={toc:s};function c({components:n,...e}){return Object(r.b)("wrapper",Object(a.a)({},l,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"## instanceof\n\ube44\uad50 \uc5f0\uc0b0\uc790, \ud074\ub798\uc2a4 \ud639\uc740 \ubd80\ubaa8\ud074\ub798\uc2a4\uc758 \uac1d\uccb4\uc778\uc9c0 \ud310\ubcc4\n\n```javascript\nlet Person = function() { this.name = \"jun\" } ; // name \uc740 \uc804\uc5ed \ubcc0\uc218\nlet jun = new Person();\n\njun instanceof Person; // true\njun.__proto__.constructor === Person; // true\njun instanceof Object; // true\njun.__proto__.__proto__.constructor === Object; // true\n```\n\n## isFinite\n\ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc804\ub2ec\ub41c \uac12\uc774 \uc815\uc0c1\uc801\uc778 \uc720\ud55c\uc218\uc778\uc9c0 \uac80\uc0ac\n- \ubc18\ud658\uac12: Boolean\n- \ub9e4\uac1c\ubcc0\uc218\n    - \uc22b\uc790\uac00 \uc544\ub2cc\uacbd\uc6b0, \uc22b\uc790\ub85c \uac15\uc81c\ubcc0\ud658\n```javascript\nconsole.log(isFinite(Infinity));  // false\nconsole.log(isFinite(NaN));       // false\nconsole.log(isFinite('Hello'));   // false\nconsole.log(isFinite('2005/12/12'));   // false\n\nconsole.log(isFinite(0));         // true\nconsole.log(isFinite(2e64));      // true\nconsole.log(isFinite('10'));      // true: '10' \u2192 10\nconsole.log(isFinite(null));      // true: null \u2192 0\n```\nnull \uc774 \uc22b\uc790\ub85c \uc554\ubb35\uc801 \uac15\uc81c \ud615\ubcc0\ud658\uc774 \uc77c\uc5b4\ub09c \uacbd\uc6b0\n```javascript\nNumber(null)  // 0\n```\nnull \uc774 \ubd88\ub9ac\uc5b8\ub85c \uc554\ubb35\uc801 \uac15\uc81c \ud615\ubcc0\ud658\uc774 \uc77c\uc5b4\ub09c \uacbd\uc6b0\n```javascript\nBoolean(null) // false\n```\n\n## isNaN()\n\ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc804\ub2ec\ub41c \uac12\uc774 NaN \uc778\uc9c0 \uac80\uc0ac\n- \ubc18\ud658\uac12: Boolean\n- \ub9e4\uac1c\ubcc0\uc218\n    - \uc22b\uc790\uac00 \uc544\ub2cc\uacbd\uc6b0 \uc22b\uc790\ub85c \uac4d\uc81c \ud615\ubcc0\ud658\n\n```javascript\nisNaN(NaN)       // true\nisNaN(undefined) // true: undefined \u2192 NaN\nisNaN({})        // true: {} \u2192 NaN\nisNaN('blabla')  // true: 'blabla' \u2192 NaN\n\nisNaN(true)      // false: true \u2192 1\nisNaN(null)      // false: null \u2192 0\nisNaN(37)        // false\n\n// strings\nisNaN('37')      // false: '37' \u2192 37\nisNaN('37.37')   // false: '37.37' \u2192 37.37\nisNaN('')        // false: '' \u2192 0\nisNaN(' ')       // false: ' ' \u2192 0\n\n// dates\nisNaN(new Date())             // false: new Date() \u2192 Number\nisNaN(new Date().toString())  // true:  String \u2192 NaN\n```\n\n## parseFloat(string)\n- \ubc18\ud658\uac12: \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc804\ub2ec\ub41c \ubb38\uc790\uc5f4\uc744 \ubd80\ub3d9\uc18c\uc218\uc810 \uc22b\uc790\ub85c \ubcc0\ud658\n    - NaN : \uccab\ubb38\uc790\ub97c \uc22b\uc790\ub85c \ubcc0\ud658\ud560 \uc218 \uc5c6\uc744 \ub54c\n\n\ubb38\uc790\uc5f4\uc758 \uccab \uc22b\uc790\ub9cc \ubc18\ud658\ub418\uba70 \uc804 \ud6c4 \uacf5\ubc31\uc740 \ubb34\uc2dc\ub41c\ub2e4.\n\n```javascript\nparseFloat('3.14');     // 3.14\nparseFloat('10.00');    // 10\nparseFloat('34 45 66'); // 34\nparseFloat(' 60 ');     // 60\nparseFloat('40 years'); // 40\nparseFloat('He was 40') // NaN\n```\n\n## parseInt(string, [radix])\n- \ubc18\ud658\uac12: \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc804\ub2ec\ub41c \ubb38\uc790\uc5f4\uc744 \uc815\uc218\ud615 \uc22b\uc790(Integer 10\uc9c4\uc218?)\ub85c \ud574\uc11d\n    - string \uc774 radix \uc9c4\uc218\ub77c\uba74 10\uc9c4\uc218\ub85c\ub294 \uba87\uc77c\uae4c?\n- \ub9e4\uac1c\ubcc0\uc218 radix : \uc9c4\ubc95\uc744 \ub098\ud0c0\ub0b4\ub294 \uae30\uc218 (2 ~ 36, \uae30\ubcf8\uac12 10)\n- string\uc774 \ubb38\uc790\uc5f4\uc774 \uc544\ub2c8\uba74 \ubb38\uc790\uc5f4\ub85c \uac15\uc81c \ud615\ubcc0\ud658\n    ```javascript\n    parseInt(10);     // 10\n    parseInt(10.123); // 10\n    ```\n\n- string \uc774 0x, 0X\ub85c \uc2dc\uc791\ud558\uba74 16\uc9c4\uc218\ub85c \ud574\uc11d\ud558\uc5ec \ubc18\ud658\n- string \uc758 \ubb38\uc790\uc5f4\uc758 \uccab\ubc88\uc9f8 \ubb38\uc790\uac00, \ud574\ub2f9 \uc9c0\uc218\uc758 \uc22b\uc790\ub85c \ubcc0\ud658\ub420 \uc218 \uc5c6\ub2e4\uba74 NaN \ubc18\ud658\n    ```javascript\n    parseInt('A0'); // A\ub294 10\uc9c4\uc218\uac00 \uc544\ub2c8\ub2e4.\n    parseInt('20', 2) // '20'\uc758 '2'\ub294 2\uc9c4\uc218\uac00 \uc544\ub2c8\ub2e4.\n    ```\n- string \ubb38\uc790\uc5f4\uc758 \ub450\ubc88\uc9f8 \ubb38\uc790\ubd80\ud130, \ub9cc\uc57d \ud574\ub2f9 \uc9c4\uc218\ub97c \ub098\ud0c0\ub0b4\ub294 \uc22b\uc790\uac00 \uc544\ub2c8\uba74\n\ud574\ub2f9 \ubb38\uc790\ubd80\ud130 \ub05d\uae4c\uc9c0 \ubb34\uc2dc\ud558\uba70, \ud574\uc11d\ub41c \uc815\uc218\ub9cc \ubc18\ud658\n    ```javascript\n    parseInt('1A0');    // 1\n    parseInt('102', 2); // 2\n    parseInt('58', 8);   // 5\n    parseInt('FG', 16);  // 15\n    ```\n- \ubb38\uc790\uc5f4\uc758 \uccab \uc22b\uc790\ub9cc \ubc18\ud658\ub418\uba70 \uc804 \ud6c4 \uacf5\ubc31\uc740 \ubb34\uc2dc\ub41c\ub2e4.\n    ```javascript\n    parseInt('34 45 66'); // 34\n    parseInt(' 60 ');     // 60\n    parseInt('40 years'); // 40\n    parseInt('He was 40') // NaN\n    ```\n\n- 10\uc9c4\uc218 \uc22b\uc790\ub97c \ud574\ub2f9 \uae30\uc218\uc758 \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\ud558\uc5ec \ubc18\ud658\ud558\uace0 \uc2f6\uc744 \ub54c\ub294 Number.prototype.toString \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\n\n## encodeURI() decodeURI()\n\ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ub41c URI(Uniform Resource Identifier)\ub97c \uc778\ucf54\ub529\ud55c\ub2e4.\n\n### \uc778\ucf54\ub529\nURI\uc758 \ubb38\uc790\ub4e4\uc744 \uc774\uc2a4\ucf00\uc774\ud504 \ucc98\ub9ac\ud558\ub294\uac83.\n![uri](/img/GC/uri.png)\n\n### \uc774\uc2a4\ucf00\uc774\ud504 \ucc98\ub9ac\n\ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \uc815\ubcf4\ub97c \uacf5\uc720\ud560 \ub54c \uc5b4\ub5a4 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub3c4 \uc77d\uc744 \uc218 \uc788\ub294 ASCII Character-set \uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uac83\n- UTF-8 \ud2b9\uc218\ubb38\uc790, 1\ubb38\uc790\ub2f9 1-3byte,\n- UTF-8 \ud55c\uae00\ud45c\ud604, 1\ubb38\uc790\ub2f9 3byte\n\n\ud2b9\uc218\ubb38\uc790 \uacf5\ubc31(space)\uc740 $20, \ud55c\uae00 '\uac00' %EC%9E%90 \uc73c\ub85c \uc778\ucf54\ub529\ub41c\ub2e4.\n\n- \uc81c\uc678 \ubb38\uc790: \uc54c\ud30c\ubcb3, 0~9\uc758 \uc22b\uc790, - _ . ! ~ * \u2018 ( )\n\n```javascript\nvar uri = 'http://example.com?name=\uc774\uc6c5\ubaa8&job=programmer&teacher';\nvar enc = encodeURI(uri);\nvar dec = decodeURI(enc);\nconsole.log(enc);\n// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher\nconsole.log(dec);\n// http://example.com?name=\uc774\uc6c5\ubaa8&job=programmer&teacher\n```\n\n### encodeURIComponent() decodeURIComponent()\n`encodeURIComponent` \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ub41c URI component(\uad6c\uc131\uc694\uc18c)\ub97c \uc778\ucf54\ub529\n\n\uc778\uc218\ub97c \ucffc\ub9ac\uc2a4\ud2b8\ub9c1\uc758 \uc77c\ubd80\ub77c\uace0 \uac04\uc8fc\ud558\uc5ec\n`=``?``&`\ub97c \uc778\ucf54\ub529 \ud55c\ub2e4.\n\nencodeURI\ub294 `=``?``&` \ub97c \uc778\ucf54\ub529\ud558\uc9c0 \uc54a\ub294\ub2e4.\n\n## Object.is() [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is)\n\ud2b9\uc774\ud55c \ub3d9\ub4f1 \ube44\uad50\ub97c \ud560 \ub54c \uc0ac\uc6a9\n\nsyntax `Object.is(value1, value2)`\n\nreturn `\ub450 \uc778\uc218\uac00 \uac19\uc740 \uac12\uc778\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 Boolean`\n\n### true \uc778\uacbd\uc6b0\n- \ub458 \ub2e4 undefined\n- \ub458 \ub2e4 null\n- \ub458 \ub2e4 true \ub610\ub294 \ub458 \ub2e4 false\n- \ub458 \ub2e4 \uac19\uc740 \ubb38\uc790\uc5d0 \uac19\uc740 \uae38\uc774\uc778 \ubb38\uc790\uc5f4\n- \ub458 \ub2e4 \uac19\uc740 \uac1d\uccb4\n- \ub458 \ub2e4 \uc22b\uc790\uc774\uba70\n  - \ub458 \ub2e4 +0\n  - \ub458 \ub2e4 -0\n  - \ub458 \ub2e4 NaN\n  - \ub458 \ub2e4 0\uc774\ub098 NaN\uc774 \uc544\ub2c8\uace0 \uac19\uc740 \uac12\uc744 \uc9c0\ub2d8\n\n### ==, ===, Object.is \ube44\uad50\n== \uc5f0\uc0b0\uac15\uc81c\n- \ud615\ubcc0\ud658\uc744 \uc801\uc6a9 (\"\" == false) === true\n\nObject.is\n- \uac15\uc81c \ud615\ubcc0\ud658 \uc5c6\uc74c\n\n=== \uc5f0\uc0b0\n- \uac15\uc81c \ud615\ubcc0\ud658 \uc5c6\uc74c\n- -0 === +0\n- Number.NaN !== NaN TODO\n\n## Map [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)\n- \ud0a4 \uac12 \uc30d\uc744 \uc800\uc7a5\n- \uc0bd\uc785 \uc21c\uc11c \uae30\uc5b5\n- \uac1d\uccb4\uc640 \uc6d0\uc2dc\uac12\uc744 \ud0a4\uc640 \uac12\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\n\n### \uc124\uba85\n\uc0bd\uc785 \uc21c\uc11c\ub300\ub85c \uc694\uc18c\ub97c \uc21c\ud68c\n- for (key, value) of myMap\n\n### \ud0a4 \ub3d9\uc77c\uc131\nNaN\uc640 NaN, -0\uc640 +0 \uc744 \uc77c\uce58\ud55c\ub2e4\uace0 \uac04\uc8fc\ud568.\n\n### Object \uc640 Map \uc720\uc0ac\n\uac12\uc5d0 \ud0a4\ub97c \ud560\ub2f9, \uadf8 \ud0a4\ub85c \uac12\uc744 \uc5bb\uc74c, \ud0a4\ub97c \uc0ad\uc81c, \ud0a4\uac12 \uc874\uc7ac \ud655\uc778\n\n### Map \uc744 \uc120\ud638\ud574\uc57c \ud560 \uc911\uc694\ud55c \ucc28\uc774\uc810\n\n|  | Map | Object |\n|---|---|---|\n| \uc758\ub3c4\uce58 \uc54a\uc740 \ud0a4 | \uba85\uc2dc\uc801\uc73c\ub85c \uc81c\uacf5\ub41c \ud0a4\ub9cc \uc0ac\uc6a9 | Object\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \uac00\uc9c0\ubbc0\ub85c \uae30\ubcf8 \ud0a4\uac00 \uc874\uc7ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc758\ud558\uc9c0 \uc54a\uc73c\uba74 \uc9c1\uc811 \uc81c\uacf5\ud55c \ud0a4\uc640 \ucda9\ub3cc\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. |\n| \ud0a4 \uc790\ub8cc\ud615 | \ud568\uc218 \uac1d\uccb4\ub4f1\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 \uac12 | String, Symbol |\n| \ud0a4 \uc21c\uc11c | \uc815\ub82c\ub428, \uc0bd\uc785\uc21c\uc73c\ub85c \uc21c\ud68c | \uc815\ub82c\uc548\ub428. \ucc38\uace0: ECMAScript 201 \uc774\ud6c4\ub85c, \uac1d\uccb4\ub3c4 \ubb38\uc790\uc5f4\uacfc Symbol \ud0a4\uc758 \uc0dd\uc131 \uc21c\uc11c\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4. ECMEScript 2015 \uba85\uc138\ub97c \uc900\uc218\ud558\ub294 JavaScript \uc5d4\uc9c4\uc5d0\uc11c \ubb38\uc790\uc5f4 \ud0a4\ub9cc \uac00\uc9c4 \uac1d\uccb4\ub97c \uc21c\ud68c\ud558\uba74 \uc0bd\uc785 \uc21c\uc744 \ub530\ub77c\uac11\ub2c8\ub2e4.|\n| \ud06c\uae30 | size \uc18d\uc131 | \uc9c1\uc811 \uc54c\uc544\ub0b4\uc57c\ub428 |\n| \uc21c\ud68c | \uc21c\ud68c \uac00\ub2a5  | \ud0a4\ub97c \uc54c\uc544\ub0b8\ud6c4 \ud0a4\uc758 \ubc30\uc5f4\uc744 \uc21c\ud68c |\n| \uc131\ub2a5 |  \uc7a6\uc740 \ud0a4-\uac12 \uc30d\uc758 \ucd94\uac00 \uc81c\uac70\uc5d0\uc11c \ub354 \uc88b\uc740 \uc131\ub2a5 | \uc7a6\uc740 \ud0a4-\uac12 \uc30d\uc758 \ucd94\uac00 \uc81c\uac70 \ucd5c\uc801\ud68c\uac00 \uc5c6\ub2e4. |\n\n### \uc0dd\uc131\uc790\nMap()\n\n### \uc18d\uc131\n.length\n- \uac12\uc774 0\uc778 \uc18d\uc131\n- \uc694\uc18c\uc758 \uc218\ub294 Map.prototype.size\n\nMap.prototype.size\n- ??\n\nMap.prototype\n- Map \uc0dd\uc131\uc790\uc758 \ud504\ub85c\ud1a0\ud0c0\uc785\n\n### Map \uc778\uc2a4\ud134\uc2a4\n\ubaa8\ub4e0 Map \uc778\uc2a4\ud134\uc2a4\ub294 Map.prototype \uc744 \uc0c1\uc18d\ud55c\ub2e4.\n\n#### \uc18d\uc131\n`Map.prototype.constructor`\n- \uc778\uc2a4\ud134\uc2a4\uc758 \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \ub9cc\ub4e0\ub290 \ud568\uc218. Map \ud568\uc218\uc758 \uae30\ubcf8 \uac12\n\n`Map.prototype.size`\n- Map \uac1d\uccb4\uc5d0 \ub4e4\uc5b4\uc788\ub294 key/value \uc30d\uc758 \uc218\ub97c \ubc18\ud658.\n\n#### \uba54\uc11c\ub4dc\n`Map.prototype.clear()`\n- \ubaa8\ub4e0 key/value pair \uc81c\uac70\n\n`Map.prototype.delete(key)`\n- Map.prototype.has(key) \uac12 \ubc18\ud658\n- key-value \uc30d \uc81c\uac70\n\n`Map.prototype.entries()`\n- \ubaa8\ub4e0 \uc694\uc18c\ub4e4\uc758 [key, value] \ud615\ud0dc\uc758 array Iterator \uac1d\uccb4 \ubc18\ud658\n\n`Map.prototype.forEach(callbackFn[, thisArg])`\n- key-value pair \uc21c\uc11c\ub300\ub85c callbackFn \uc744 \ud638\ucd9c\n- thisArg \ub294 callback\uc758 this \uac12\uc744 \uc81c\uacf5\ub41c\ub2e4.\n\n`Map.prototype.get(key)`\n- key \uc5d0 \ud574\ub2f9\ud558\ub294 \uac12 \ubc18\ud658. \uc5c6\uc73c\uba74 undefined \ubc18\ud658\n\n`Map.prototype.has(key)`\n- Boolean \uac12 \ubc18\ud658\n\n`Map.prototype.keys()`\n- \ubaa8\ub4e0 key \uc758 \uc21c\uc11c \uc788\ub294 Iterator \uac1d\uccb4 \ubc18\ud658\n\n`Map.prototype.set(key, value)`\n- key \uc5d0 value \ub97c \uc9d1\uc5b4\ub123\uace0 Map \uac1d\uccb4 \ubc18\ud658\n\n`Map.prototype.values()`\n- \ubaa8\ub4e0 value\uc758 \uc21c\uc11c\uc788\ub294 Iterator \uac1d\uccb4 \ubc18\ud658\n\nMap.prototype[$iterator]() [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)\n- \ubaa8\ub4e0 [key, value] \ud615\ud0dc\uc758 array \ub85c \uc21c\uc11c\uc788\ub294 Iterator \uac1d\uccb4 \ubc18\ud658\n\n### \uc608\uc2dc\n```javascript\nlet myMap = new Map()\n\nlet keyString = '\ubb38\uc790\uc5f4'\nlet keyObj    = {}\nlet keyFunc   = function() {}\n\n// \uac12 \uc124\uc815\nmyMap.set(keyString, \"'\ubb38\uc790\uc5f4'\uacfc \uad00\ub828\ub41c \uac12\")\nmyMap.set(keyObj, 'keyObj\uc640 \uad00\ub828\ub41c \uac12')\nmyMap.set(keyFunc, 'keyFunc\uc640 \uad00\ub828\ub41c \uac12')\n\nmyMap.size              // 3\n\n// getting the values\nmyMap.get(keyString)    // \"'\ubb38\uc790\uc5f4'\uacfc \uad00\ub828\ub41c \uac12\"\nmyMap.get(keyObj)       // \"keyObj\uc640 \uad00\ub828\ub41c \uac12\"\nmyMap.get(keyFunc)      // \"keyFunc\uc640 \uad00\ub828\ub41c \uac12\"\n\nmyMap.get('\ubb38\uc790\uc5f4')    // \"'\ubb38\uc790\uc5f4'\uacfc \uad00\ub828\ub41c \uac12\"\n                         // keyString === '\ubb38\uc790\uc5f4'\uc774\uae30 \ub54c\ubb38\nmyMap.get({})            // undefined, keyObj !== {}\nmyMap.get(function() {}) // undefined, keyFunc !== function () {}\n```\n### NaN\n```javascript\nlet myMap = new Map()\nmyMap.set(NaN, 'not a number')\n\nmyMap.get(NaN)\n// \"not a number\"\n\nlet otherNaN = Number('foo')\nmyMap.get(otherNaN)\n// \"not a number\"\n```\n### \uc21c\ud68c\n```javascript\nlet myMap = new Map()\nmyMap.set(0, 'zero')\nmyMap.set(1, 'one')\n\nfor (let [key, value] of myMap) {\n  console.log(key + ' = ' + value)\n}\n\nfor (let key of myMap.keys()) {\n  console.log(key)\n}\n\nfor (let value of myMap.values()) {\n  console.log(value)\n}\n\nfor (let [key, value] of myMap.entries()) {\n  console.log(key + ' = ' + value)\n}\n\nmyMap.forEach(function(value, key) {\n  console.log(key + ' = ' + value)\n})\n```\n\n### Array \uac1d\uccb4\uc640\uc758 \uad00\uacc4\n```javascript\nlet kvArray = [['key1', 'value1'], ['key2', 'value2']]\n\n// Use the regular Map constructor to transform a 2D key-value Array into a map\nlet myMap = new Map(kvArray)\n\nmyMap.get('key1') // returns \"value1\"\n\n// Use Array.from() to transform a map into a 2D key-value Array\nconsole.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray\n\n// A succinct way to do the same, using the spread syntax\nconsole.log([...myMap])\n\n// Or use the keys() or values() iterators, and convert them to an array\nconsole.log(Array.from(myMap.keys())) // [\"key1\", \"key2\"]\n```\n\n### TODO\n- Map ; \uba85\uc2dc\uc801\uc73c\ub85c \uc81c\uacf5\ub41c \ud0a4 ? Object\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \uac00\uc9c0\ubbc0\ub85c \uae30\ubcf8 \ud0a4\uac00 \uc874\uc7ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4 ? \uc9c1\uc811 \uc81c\uacf5\ud55c \ud0a4\uc640 \ucda9\ub3cc ?\n\n### \ub290\ub080\uc810\n\ub9e8\ub0a0 object \ub9cc \uc4f0\ub2e4\uac00 map \uc758 \uc7a5\uc810\uc744 \uc54c\uace0 map \uc73c\ub85c\ub3c4 \uc54c\uace0\ub9ac\uc998\uc744 \ud480\uc5b4\ubd10\uc57c\uaca0\ub2e4.\n\nmap \uc740 \uc624\uc9c1 \uba54\uc11c\ub4dc\ub97c \uc774\uc6a9\ud574\uc11c \ud504\ub85c\ud37c\ud2f0\ub4e4\uc744 \uc218\uc815\ud55c\ub2e4.\n\nmap \uc758 \uba54\uc11c\ub4dc\ub4e4 \uc740 \ud56d\uc0c1 \ubb34\uc5b8\uac00\ub97c \ubc18\ud658\ud55c\ub2e4. \uc65c \uadf8\ub7f4\uae4c? \ubc18\ud658\ud558\ub294 \uac12\uc744 \uc720\uc6a9\ud558\uac8c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294\uac78\uae4c?\n\nmap \uc740 array \uc640\uc758 \ud638\ud658\uc131\uc774 \uc88b\ub2e4. \uc11c\ub85c \ubcc0\ud658\ud558\uae30 \uc88b\ub2e4. obj \uc758 \uacbd\uc6b0 \uadf8\ub807\uc9c0 \uc54a\uc74c?.\nmap\uc740 iterator \uac00\ub2a5\ud55c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc\ub4e4\uc774 \uc788\uae30 \ub54c\ubb38\uc778\uac00?\n\uc774\ub7f0\uac70\ub97c javascript \ucf5c\ub809\uc158 \uc774\ub77c\uace0 \ud55c\ub2e8\ub2e4\n\n## WeakMap\nSyntax `new WeakMap([iterable])`\n\ub9e4\uac1c\ubcc0\uc218\n- \ubc30\uc5f4 \ub610\ub294 \uc694\uc18c\uac00 \ud0a4-\uac12 \uc30d(2-\uc694\uc18c \ubc30\uc5f4)\uc778 \ub2e4\ub978 iterable \uac1d\uccb4\n- null \uc740 undefined \ucde8\uae09\n\n`key` \uc624\uc9c1 Object \ud615\n\n\n## Set\n## WeakSet\n\n## Object.create() [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)\n\uc9c0\uc815\ub41c \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1d\uccb4 \ubc0f \uc18d\uc131\uc744 \uac16\ub294 \uc0c8 \uac1d\uccb4\ub97c \ub9cc\ub4e0\ub2e4.\n\n\n## .hasOwnProperty()\n\ud574\ub2f9 \ud504\ub85c\ud37c\ud2f0\uac00 \ud574\ub2f9 \uac1d\uccb4\uc758 \uc9c1\uc18d \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \uba54\uc11c\ub4dc\n\n</pre>\n\n")))}c.isMDXComponent=!0},368:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return f}));var a=t(0),r=t.n(a);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=r.a.createContext({}),i=function(n){var e=r.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=i(n.components);return r.a.createElement(c.Provider,{value:e},n.children)},y={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=i(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||y[m]||o;return t?r.a.createElement(f,s(s({ref:e},c),{},{components:t})):r.a.createElement(f,s({ref:e},c))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,p=new Array(o);p[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,p[1]=s;for(var c=2;c<o;c++)p[c]=t[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);