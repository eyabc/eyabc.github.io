(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(3),r=(t(0),t(376));const o={},c={unversionedId:"javascript/airbnb_js_style_guides/Objects",id:"javascript/airbnb_js_style_guides/Objects",isDocsHomePage:!1,title:"Objects",description:"Objects",source:"@site/docs/javascript/airbnb_js_style_guides/Objects.md",slug:"/javascript/airbnb_js_style_guides/Objects",permalink:"/docs/javascript/airbnb_js_style_guides/Objects",version:"current",sidebar:"javascript",previous:{title:"References",permalink:"/docs/javascript/airbnb_js_style_guides/References"},next:{title:"Arrays",permalink:"/docs/javascript/airbnb_js_style_guides/Arrays"}},b=[{value:"no-new-object : Object \uc0dd\uc131 -&gt; \ub9ac\ud130\ub7f4 \ubb38\ubc95 \uc0ac\uc6a9 { }",id:"no-new-object--object-\uc0dd\uc131---\ub9ac\ud130\ub7f4-\ubb38\ubc95-\uc0ac\uc6a9--",children:[]},{value:"\uacc4\uc0b0\ub41c \uc18d\uc131\uba85\uc744 obj \uc548\uc5d0\uc11c \uc815\uc758\ud574\uc57c \ud55c\ub2e4.",id:"\uacc4\uc0b0\ub41c-\uc18d\uc131\uba85\uc744-obj-\uc548\uc5d0\uc11c-\uc815\uc758\ud574\uc57c-\ud55c\ub2e4",children:[]},{value:"object-shorthand : \uac1d\uccb4 \uba54\uc11c\ub4dc\ub294 shorthand \uc0ac\uc6a9",id:"object-shorthand--\uac1d\uccb4-\uba54\uc11c\ub4dc\ub294-shorthand-\uc0ac\uc6a9",children:[]},{value:"object-shorthand : \ud504\ub85c\ud37c\ud2f0\uc758 shorthand \uc0ac\uc6a9",id:"object-shorthand--\ud504\ub85c\ud37c\ud2f0\uc758-shorthand-\uc0ac\uc6a9",children:[]},{value:"\uac1d\uccb4\uc758 \uc2dc\uc791 \ubd80\ubd84\uc5d0 shorthand properties \ub97c \uadf8\ub8f9\ud654 \ud55c\ub2e4.",id:"\uac1d\uccb4\uc758-\uc2dc\uc791-\ubd80\ubd84\uc5d0-shorthand-properties-\ub97c-\uadf8\ub8f9\ud654-\ud55c\ub2e4",children:[]},{value:"quote-props : \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc2dd\ubcc4\uc790 \uc774\ub984\ub9cc quote \ud504\ub85c\ud37c\ud2f0 \uc0ac\uc6a9",id:"quote-props--\uc720\ud6a8\ud558\uc9c0-\uc54a\uc740-\uc2dd\ubcc4\uc790-\uc774\ub984\ub9cc-quote-\ud504\ub85c\ud37c\ud2f0-\uc0ac\uc6a9",children:[{value:"\ub530\uc634\ud45c\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uacbd\uc6b0",id:"\ub530\uc634\ud45c\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud558\ub294-\uacbd\uc6b0",children:[]}]},{value:"no-prototype-builtins : hasOwnProperty, propertyIsEnumerable, isPrototypeOf \ub97c Object.prototype \uba54\uc11c\ub4dc\ub85c \uc9c1\uc811 \ud638\ucd9c\ud558\uc9c0 \uc54a\uae30",id:"no-prototype-builtins--hasownproperty-propertyisenumerable-isprototypeof-\ub97c-objectprototype-\uba54\uc11c\ub4dc\ub85c-\uc9c1\uc811-\ud638\ucd9c\ud558\uc9c0-\uc54a\uae30",children:[]},{value:"\uc595\uc740 \ubcf5\uc0ac / \ud2b9\uc815 \ud504\ub85c\ud37c\ud2f0\ub97c \uc81c\uc678\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c \uc5bb\uc744 \ub54c",id:"\uc595\uc740-\ubcf5\uc0ac--\ud2b9\uc815-\ud504\ub85c\ud37c\ud2f0\ub97c-\uc81c\uc678\ud55c-\uc624\ube0c\uc81d\ud2b8\ub97c-\uc5bb\uc744-\ub54c",children:[]}],l={toc:b};function s({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"objects"},"Objects"),Object(r.b)("h2",{id:"no-new-object--object-\uc0dd\uc131---\ub9ac\ud130\ub7f4-\ubb38\ubc95-\uc0ac\uc6a9--"},"no-new-object : Object \uc0dd\uc131 -> \ub9ac\ud130\ub7f4 \ubb38\ubc95 \uc0ac\uc6a9 { }"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac1d\uccb4 \ub9ac\ud130\ub7f4 \uad6c\ubb38\uc740 \ub354 \uac04\uacb0\ud558\uba70 new Object() \uc758 \uc131\ub2a5 \ucc28\uc774\ub294 \uc5c6\ub2e4. ")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst item = new Object();\n\n// good\nconst item = {};\n")),Object(r.b)("h2",{id:"\uacc4\uc0b0\ub41c-\uc18d\uc131\uba85\uc744-obj-\uc548\uc5d0\uc11c-\uc815\uc758\ud574\uc57c-\ud55c\ub2e4"},"\uacc4\uc0b0\ub41c \uc18d\uc131\uba85\uc744 obj \uc548\uc5d0\uc11c \uc815\uc758\ud574\uc57c \ud55c\ub2e4."),Object(r.b)("p",null,"bad case \uc758 \uacbd\uc6b0, \uacc4\uc0b0\ub41c \uc18d\uc131\uba85\uc744 obj \uc815\uc758\uc2dc \uc9c0\uc6d0\uc774 \uc548\ub410\ub358 \uc2dc\uc808 \uc0ac\uc6a9\ud588\ub358 \ubc29\ubc95\uc774\ub2e4."),Object(r.b)("p",null,"\uc9c0\uae08\uc740 obj \uc548\uc5d0 \uacc4\uc0b0\ub41c \uc18d\uc131\uba85\uc774 \uc0ac\uc6a9\uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac00\ub3c5\uc131\uc744 \uc704\ud574"),Object(r.b)("li",{parentName:"ul"},"obj \uc5d0\uc11c \uacc4\uc0b0\ub41c \uc18d\uc131\uba85\uc744 \ud55c\ubc88\ub354 \uac80\uc0ac\ud574\uc11c \uac12\uc744 \ud560\ub2f9\ud558\ub294 \ubc29\uc2dd\uc740 \ubd88\ud544\uc694")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'function getKey(k) {\n  return `a key named ${k}`;\n}\n\n// bad\nconst obj = {\n  id: 5,\n  name: "San Francisco"\n};\nobj[getKey("enabled")] = true;\n\n// good\nconst obj = {\n  id: 5,\n  name: "San Francisco",\n  [getKey("enabled")]: true\n};\n')),Object(r.b)("h2",{id:"object-shorthand--\uac1d\uccb4-\uba54\uc11c\ub4dc\ub294-shorthand-\uc0ac\uc6a9"},"object-shorthand : \uac1d\uccb4 \uba54\uc11c\ub4dc\ub294 shorthand \uc0ac\uc6a9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac1d\uccb4 \ub9ac\ud130\ub7f4\uc744 \ud6e8\uc52c \ub354 \uae54\ub054\ud558\uac8c \uc815\uc758\ud560 \uc218 \uc788\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst atom = {\n  value: 1,\n\n  addValue: function (value) {\n    return atom.value + value;\n  },\n};\n\n// good\nconst atom = {\n  value: 1,\n\n  addValue(value) {\n    return atom.value + value;\n  },\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nvar foo = {\n    w: function() {},\n    x: function *() {},\n    [y]: function() {},\n    z: z\n};\n\n// good\nvar foo = {\n    w() {},\n    *x() {},\n    [y]() {},\n    z\n};\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud654\uc0b4\ud45c \ud568\uc218\uc5d0\ub294 eslint \ud50c\ub798\uadf8\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\ub294\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var foo = {\n    x: (y) => y\n};\n")),Object(r.b)("p",null,"shorthand"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"function \uc5d0\uc11c \ub9ce\uc740 \uae30\ub2a5\uc774 \uc81c\ud55c\ub418\uc5b4 \uc624\uc9c1 method \ub85c\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud2b9\uc218 \ud568\uc218."),Object(r.b)("li",{parentName:"ul"},"shorthand \ub85c \uc815\uc758\ub41c \uba54\uc11c\ub4dc\ub294 \ud604\uc7ac \uac1d\uccb4\uc758 \uc218\ud37c \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \ucc3e\uc744 \uc218 \uc788\ub294 ",Object(r.b)("inlineCode",{parentName:"li"},"[[HomeObject]]")," \uba54\uc11c\ub4dc\ub97c \uac00\uc9c0\uae30 \ub54c\ubb38\uc5d0 \uba54\uc11c\ub4dc \ub0b4\uc5d0\uc11c super \ub97c \ud638\ucd9c \ud560 \uc218 \uc788\ub2e4.")),Object(r.b)("h2",{id:"object-shorthand--\ud504\ub85c\ud37c\ud2f0\uc758-shorthand-\uc0ac\uc6a9"},"object-shorthand : \ud504\ub85c\ud37c\ud2f0\uc758 shorthand \uc0ac\uc6a9"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const lukeSkywalker = 'Luke Skywalker';\n\n// bad\nconst obj = {\n  lukeSkywalker: lukeSkywalker,\n};\n\n// good\nconst obj = {\n  lukeSkywalker,\n};\n")),Object(r.b)("h2",{id:"\uac1d\uccb4\uc758-\uc2dc\uc791-\ubd80\ubd84\uc5d0-shorthand-properties-\ub97c-\uadf8\ub8f9\ud654-\ud55c\ub2e4"},"\uac1d\uccb4\uc758 \uc2dc\uc791 \ubd80\ubd84\uc5d0 shorthand properties \ub97c \uadf8\ub8f9\ud654 \ud55c\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const anakinSkywalker = 'Anakin Skywalker';\nconst lukeSkywalker = 'Luke Skywalker';\n\n// bad\nconst obj = {\n  episodeOne: 1,\n  twoJediWalkIntoACantina: 2,\n  lukeSkywalker,\n  episodeThree: 3,\n  mayTheFourth: 4,\n  anakinSkywalker,\n};\n\n// good\nconst obj = {\n  lukeSkywalker,\n  anakinSkywalker,\n  episodeOne: 1,\n  twoJediWalkIntoACantina: 2,\n  episodeThree: 3,\n  mayTheFourth: 4,\n};\n")),Object(r.b)("h2",{id:"quote-props--\uc720\ud6a8\ud558\uc9c0-\uc54a\uc740-\uc2dd\ubcc4\uc790-\uc774\ub984\ub9cc-quote-\ud504\ub85c\ud37c\ud2f0-\uc0ac\uc6a9"},"quote-props : \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc2dd\ubcc4\uc790 \uc774\ub984\ub9cc quote \ud504\ub85c\ud37c\ud2f0 \uc0ac\uc6a9"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst bad = {\n  'foo': 3,\n  'bar': 4,\n  'data-blah': 5,\n};\n\n// good\nconst good = {\n  foo: 3,\n  bar: 4,\n  'data-blah': 5,\n};\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac00\ub3c5\uc131"),Object(r.b)("li",{parentName:"ul"},"syntax highlighting \uc774 \uc798 \ub41c\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"JS \uc5d4\uc9c4\uc5d0\uc11c \ub354 \uc27d\uac8c \ucd5c\uc801\ud654 \ub41c\ub2e4.")),Object(r.b)("h3",{id:"\ub530\uc634\ud45c\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud558\ub294-\uacbd\uc6b0"},"\ub530\uc634\ud45c\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uacbd\uc6b0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'\uc18d\uc131 \uc774\ub984\uc5d0 \ube44 \uc2dd\ubcc4\uc790 \ubb38\uc790\ub97c \uc0ac\uc6a9 (\uc608 : "one two")'),Object(r.b)("li",{parentName:"ul"},"\uc22b\uc790 \ub9ac\ud130\ub7f4\uc744 \uc18d\uc131 \ud0a4\ub85c \uc0ac\uc6a9",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var object = {\n    1e2: 1,\n    100: 2\n};\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ES5 \uc5c4\uaca9 \ubaa8\ub4dc\uc5d0\uc11c \uad6c\ubb38 \uc624\ub958 \ubc1c\uc0dd"),Object(r.b)("li",{parentName:"ul"},"\uc22b\uc790\ub97c \ubb38\uc790\uc5f4\ub85c \uac15\uc81c \ubcc0\ud658\ud558\ub294 \uacfc\uc815",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"String(1e2)")," \uc640 ",Object(r.b)("inlineCode",{parentName:"li"},"String(100)")," \uc774 ",Object(r.b)("inlineCode",{parentName:"li"},"100")," \uc73c\ub85c \uac19\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc5c4\uaca9 \ubaa8\ub4dc\uc5d0\uc11c\ub294 \uc911\ubcf5\ub41c \ud0a4\ub97c \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4.")))))),Object(r.b)("h2",{id:"no-prototype-builtins--hasownproperty-propertyisenumerable-isprototypeof-\ub97c-objectprototype-\uba54\uc11c\ub4dc\ub85c-\uc9c1\uc811-\ud638\ucd9c\ud558\uc9c0-\uc54a\uae30"},"no-prototype-builtins : hasOwnProperty, propertyIsEnumerable, isPrototypeOf \ub97c Object.prototype \uba54\uc11c\ub4dc\ub85c \uc9c1\uc811 \ud638\ucd9c\ud558\uc9c0 \uc54a\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconsole.log(object.hasOwnProperty(key));\n\n// good\nconsole.log(Object.prototype.hasOwnProperty.call(object, key));\n\n// best\nconst has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.\nconsole.log(has.call(object, key));\n/* or */\nimport has from 'has'; // https://www.npmjs.com/package/has\nconsole.log(has(object, key));\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty.call")," \uc774\ub7f0\uc2dd\uc73c\ub85c \uc4f0\uc9c0 \uc54a\uace0 ",Object(r.b)("inlineCode",{parentName:"p"},"object.hasOwnProperty(key)")," \uc73c\ub85c \uc4f0\uba74, "),Object(r.b)("p",null,"object \uac00 ",Object(r.b)("inlineCode",{parentName:"p"},"null")," \uc774\uac70\ub098 object \uc758 ",Object(r.b)("inlineCode",{parentName:"p"},"hasOwnProperty: false")," \uc77c \uacbd\uc6b0 \uba54\uc11c\ub4dc\uac00 \uac00\ub824\uc9c4\ub2e4. "),Object(r.b)("p",null,"-> ",Object(r.b)("strong",{parentName:"p"},"\uac00\ub824\uc838 \uc5d0\ub7ec\uac00 \ub09c\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"let obj = Object.create(null);\nobj.hasOwnProperty('key');\n/*\nVM129:1 Uncaught TypeError: obj.hasOwnProperty is not a function\n    at <anonymous>:1:5\n(anonymous) @ VM129:1\n*/\nObject.prototype.hasOwnProperty.call(obj, 'keys'); // false\n\nobj = {};\nobj.hasOwnProperty('key');  // false\nobj.hasOwnProperty = false;\nobj.hasOwnProperty('key'); \n/*\nVM129:1 Uncaught TypeError: obj.hasOwnProperty is not a function\n    at <anonymous>:1:5\n(anonymous) @ VM129:1\n*/\nObject.prototype.hasOwnProperty.call(obj, 'keys'); // false\n")),Object(r.b)("h2",{id:"\uc595\uc740-\ubcf5\uc0ac--\ud2b9\uc815-\ud504\ub85c\ud37c\ud2f0\ub97c-\uc81c\uc678\ud55c-\uc624\ube0c\uc81d\ud2b8\ub97c-\uc5bb\uc744-\ub54c"},"\uc595\uc740 \ubcf5\uc0ac / \ud2b9\uc815 \ud504\ub85c\ud37c\ud2f0\ub97c \uc81c\uc678\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c \uc5bb\uc744 \ub54c"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc595\uc740 \ubcf5\uc0ac : spread operator > Object.assign, "),Object(r.b)("li",{parentName:"ul"},"\ud2b9\uc815 \ud504\ub85c\ud37c\ud2f0\ub97c \uc81c\uc678\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c \uc5bb\uc744 \ub54c : rest operator > delete \ud504\ub85c\ud37c\ud2f0")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// very bad\nconst original = { a: 1, b: 2 };\nconst copy = Object.assign(original, { c: 3 }); // this mutates `original` \u0ca0_\u0ca0\ndelete copy.a; // so does this\n\n// bad\nconst original = { a: 1, b: 2 };\nconst copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }\n\n// good\nconst original = { a: 1, b: 2 };\nconst copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }\n\nconst { a, ...noA } = copy; // noA => { b: 2, c: 3 }\n")))}s.isMDXComponent=!0},376:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},i=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},j=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=p(t),j=a,d=i["".concat(c,".").concat(j)]||i[j]||u[j]||o;return t?r.a.createElement(d,b(b({ref:n},s),{},{components:t})):r.a.createElement(d,b({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=j;var b={};for(var l in n)hasOwnProperty.call(n,l)&&(b[l]=n[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);