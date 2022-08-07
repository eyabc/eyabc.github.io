(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{107:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return p}));var a=n(3),t=n(7),o=(n(0),n(482)),c={},l={unversionedId:"javascript/airbnb_js_style_guides/Arrays",id:"javascript/airbnb_js_style_guides/Arrays",isDocsHomePage:!1,title:"Arrays",description:"Arrays",source:"@site/docs/javascript/airbnb_js_style_guides/Arrays.md",slug:"/javascript/airbnb_js_style_guides/Arrays",permalink:"/docs/javascript/airbnb_js_style_guides/Arrays",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Objects",permalink:"/docs/javascript/airbnb_js_style_guides/Objects"},next:{title:"Destructuring",permalink:"/docs/javascript/airbnb_js_style_guides/Destructuring"}},i=[{value:"no-array-constructor &quot; \ubc30\uc5f4 \uc0dd\uc131: \ub9ac\ud130\ub7f4 \ubb38\ubc95 []",id:"no-array-constructor--\ubc30\uc5f4-\uc0dd\uc131-\ub9ac\ud130\ub7f4-\ubb38\ubc95-",children:[]},{value:"\ubc30\uc5f4\uc758 items \uc0dd\uc131 : push",id:"\ubc30\uc5f4\uc758-items-\uc0dd\uc131--push",children:[]},{value:"\ubc30\uc5f4 \ubcf5\uc0ac : ... spread operator",id:"\ubc30\uc5f4-\ubcf5\uc0ac---spread-operator",children:[]},{value:"iterable \uac1d\uccb4 -&gt; \ubc30\uc5f4 : spreads ... &gt; Array.from.",id:"iterable-\uac1d\uccb4---\ubc30\uc5f4--spreads---arrayfrom",children:[]},{value:"array-like \uac1d\uccb4 -&gt; \ubc30\uc5f4 : Array.from",id:"array-like-\uac1d\uccb4---\ubc30\uc5f4--arrayfrom",children:[]},{value:"iterable map :  Array.from &gt; spread ...",id:"iterable-map---arrayfrom--spread-",children:[]},{value:"array-callback-return : \ubc30\uc5f4 \uba54\uc11c\ub4dc\uc758 callback \uc5d0\uc11c return \ubb38\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4",id:"array-callback-return--\ubc30\uc5f4-\uba54\uc11c\ub4dc\uc758-callback-\uc5d0\uc11c-return-\ubb38\uc744-\uc0ac\uc6a9\ud574\uc57c-\ud55c\ub2e4",children:[]},{value:"\uc5ec\ub7ec \uc904\uc774\uc788\ub294 \ubc30\uc5f4\uc758 \uc904\ubc14\uafc8: \uad04\ud638\ub97c \uc5f4\ub54c, \ub2eb\uae30\uc804 \uc0ac\uc6a9",id:"\uc5ec\ub7ec-\uc904\uc774\uc788\ub294-\ubc30\uc5f4\uc758-\uc904\ubc14\uafc8-\uad04\ud638\ub97c-\uc5f4\ub54c-\ub2eb\uae30\uc804-\uc0ac\uc6a9",children:[]}],b={toc:i};function p(e){var r=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"arrays"},"Arrays"),Object(o.b)("h2",{id:"no-array-constructor--\ubc30\uc5f4-\uc0dd\uc131-\ub9ac\ud130\ub7f4-\ubb38\ubc95-"},'no-array-constructor " \ubc30\uc5f4 \uc0dd\uc131: \ub9ac\ud130\ub7f4 \ubb38\ubc95 []'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ubc30\uc5f4 \uc0dd\uc131\uc790\uc758 \ubb38\uc81c\uc810",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"single-argument pitfall : \ub2e8\uc77c \uc778\uc218 -> \ud568\uc815 (?)   "),Object(o.b)("li",{parentName:"ul"},"Array global \uc774 \uc7ac\uc815\uc758 \ub420 \uc218 \uc788\ub2e4. (?)"))),Object(o.b)("li",{parentName:"ul"},"\ubc30\uc5f4 \uc0dd\uc131\uc790\ub97c \uc4f0\ub294 \uc608\uc678",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Array \uc0dd\uc131\uc790\uac00 \ub2e8\uc77c \uc22b\uc790 \uc778\uc218\ub97c \uc81c\uacf5\ud558\uc5ec \uc9c0\uc815\ub41c \ud06c\uae30\uc758 \ubc30\uc5f4 \ub9cc\ub4e4\ub54c.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst items = new Array(0, 1, 2);\nArray(0, 1, 2);\n\n// good\nconst items = [0, 1, 2];\n\nArray(500);\nnew Array(someOtherArray.length);\n")),Object(o.b)("h2",{id:"\ubc30\uc5f4\uc758-items-\uc0dd\uc131--push"},"\ubc30\uc5f4\uc758 items \uc0dd\uc131 : push"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const someStack = [];\n\n// bad\nsomeStack[someStack.length] = 'abracadabra';\n\n// good\nsomeStack.push('abracadabra');\n")),Object(o.b)("h2",{id:"\ubc30\uc5f4-\ubcf5\uc0ac---spread-operator"},"\ubc30\uc5f4 \ubcf5\uc0ac : ... spread operator"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst len = items.length;\nconst itemsCopy = [];\nlet i;\n\nfor (i = 0; i < len; i += 1) {\n  itemsCopy[i] = items[i];\n}\n\n// good\nconst itemsCopy = [...items];\n")),Object(o.b)("h2",{id:"iterable-\uac1d\uccb4---\ubc30\uc5f4--spreads---arrayfrom"},"iterable \uac1d\uccb4 -> \ubc30\uc5f4 : spreads ... > Array.from."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const foo = document.querySelectorAll('.foo');\n\n// good\nconst nodes = Array.from(foo);\n\n// best\nconst nodes = [...foo];\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"./Iteration%20%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C.html#iterable-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"},"iterable \uac1d\uccb4"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"document.querySelectorAll('.foo')")," \uc758 ",Object(o.b)("inlineCode",{parentName:"p"},"__proto__")," \ub294  ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/NodeList"},"NodeList")),Object(o.b)("h2",{id:"array-like-\uac1d\uccb4---\ubc30\uc5f4--arrayfrom"},"array-like \uac1d\uccb4 -> \ubc30\uc5f4 : Array.from"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'let arrLike = { 0: \'foo\', 1: \'bar\', 2: \'baz\', length: 3 };\n/*\nObject\n0: "foo"\n1: "bar"\n2: "baz"\nlength: 3\n__proto__: Object\n*/\n// bad\nconst arr = Array.prototype.slice.call(arrLike);\n\n// good\nconst arr = Array.from(arrLike); // ["foo", "bar", "baz"]\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"let arrLike = { '0': 'foo', 1: 'bar', 2: 'baz', length: 3 };\nArray.from(arrLike); // [\"foo\", \"bar\", \"baz\"]\n\narrLike = { '212': 'foo', 1: 'bar', 2: 'baz', length: 3 };\nArray.from(arrLike); // [undefined, \"bar\", \"baz\"]\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://kamang-it.tistory.com/entry/JavaScript15%EC%9C%A0%EC%82%AC%EB%B0%B0%EC%97%B4-%EA%B0%9D%EC%B2%B4Arraylike-Objects"},"\uc720\uc0ac \ubc30\uc5f4\uc758 \uc870\uac74")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"length")," \ud504\ub85c\ud37c\ud2f0\uac00 \uc874\uc7ac."),Object(o.b)("li",{parentName:"ol"},"index \ubc88\ud638\uac00 0\ubc88\ubd80\ud130 \uc2dc\uc791\ud574\uc11c 1\uc529\uc99d\uac00.")),Object(o.b)("h2",{id:"iterable-map---arrayfrom--spread-"},"iterable map :  Array.from > spread ..."),Object(o.b)("p",null,"Array.from \uc740 \uc911\uac04\uc5d0 \ubc30\uc5f4\uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bar = (v) => v + 1;\nconst foo = [1, 2, 3];\n\n// bad\nconst baz = [...foo].map(bar);  // [2, 3, 4]\n\n// good\nconst baz = Array.from(foo, bar)  // [2, 3, 4]\n")),Object(o.b)("h2",{id:"array-callback-return--\ubc30\uc5f4-\uba54\uc11c\ub4dc\uc758-callback-\uc5d0\uc11c-return-\ubb38\uc744-\uc0ac\uc6a9\ud574\uc57c-\ud55c\ub2e4"},"array-callback-return : \ubc30\uc5f4 \uba54\uc11c\ub4dc\uc758 callback \uc5d0\uc11c return \ubb38\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"return \uc744 \ube7c\ub728\ub9b0 \uac83\uc740 \uc544\ub9c8\ub3c4 \uc2e4\uc218 \uc77c \uac83\uc784."),Object(o.b)("li",{parentName:"ul"},"\ubc18\ud658\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uac70\ub098 \ubc18\ud658\ub41c \uacb0\uacfc\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\uba74 forEach \ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// good\n[1, 2, 3].map((x) => {\n  const y = x + 1;\n  return x * y;\n});\n\n// good\n[1, 2, 3].map((x) => x + 1);\n\n// bad - callback \uc5d0\uc11c return \ubb38\uc744 \uc4f0\uc9c0 \uc54a\uc73c\uba74, \uccab \uc774\ud130\ub808\uc774\uc158 \uc774\ud6c4 `acc` \uc758 \uac12\uc740 undefined \uac00 \ub41c\ub2e4.\n[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {\n  const flatten = acc.concat(item);\n});\n\n// good\n[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {\n  const flatten = acc.concat(item);\n  return flatten;\n});\n\n// bad\ninbox.filter((msg) => {\n  const { subject, author } = msg;\n  if (subject === 'Mockingbird') {\n    return author === 'Harper Lee';\n  } else {\n    return false;\n  }\n});\n\n// good\ninbox.filter((msg) => {\n  const { subject, author } = msg;\n  if (subject === 'Mockingbird') {\n    return author === 'Harper Lee';\n  }\n\n  return false;\n});\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.from")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.every")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.filter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.find")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.findIndex")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.flatMap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.forEach"),"(\uc120\ud0dd \uc0ac\ud56d)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.map")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.reduce")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.reduceRight")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.some")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Array.prototype.sort"))),Object(o.b)("h2",{id:"\uc5ec\ub7ec-\uc904\uc774\uc788\ub294-\ubc30\uc5f4\uc758-\uc904\ubc14\uafc8-\uad04\ud638\ub97c-\uc5f4\ub54c-\ub2eb\uae30\uc804-\uc0ac\uc6a9"},"\uc5ec\ub7ec \uc904\uc774\uc788\ub294 \ubc30\uc5f4\uc758 \uc904\ubc14\uafc8: \uad04\ud638\ub97c \uc5f4\ub54c, \ub2eb\uae30\uc804 \uc0ac\uc6a9"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst arr = [\n  [0, 1], [2, 3], [4, 5],\n];\n\nconst objectInArray = [{\n  id: 1,\n}, {\n  id: 2,\n}];\n\nconst numberInArray = [\n  1, 2,\n];\n\n// good\nconst arr = [[0, 1], [2, 3], [4, 5]];\n\nconst objectInArray = [\n  {\n    id: 1,\n  },\n  {\n    id: 2,\n  },\n];\n\nconst numberInArray = [\n  1,\n  2,\n];\n")))}p.isMDXComponent=!0},482:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return d}));var a=n(0),t=n.n(a);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var b=t.a.createContext({}),p=function(e){var r=t.a.useContext(b),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.a.createElement(b.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},m=t.a.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?t.a.createElement(d,l(l({ref:r},b),{},{components:n})):t.a.createElement(d,l({ref:r},b))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);