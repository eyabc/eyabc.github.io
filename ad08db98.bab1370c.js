(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{335:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(456));const o={},c={unversionedId:"javascript/asynchronous_programming/Async Iterator",id:"javascript/asynchronous_programming/Async Iterator",isDocsHomePage:!1,title:"Async Iterator",description:"Async Iterator",source:"@site/docs/javascript/asynchronous_programming/Async Iterator.md",slug:"/javascript/asynchronous_programming/Async Iterator",permalink:"/docs/javascript/asynchronous_programming/Async Iterator",version:"current",sidebar:"javascript",previous:{title:"\ube44\ub3d9\uae30 \ud568\uc218 Async Await",permalink:"/docs/javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud568\uc218 Async Await"},next:{title:"Async Generator",permalink:"/docs/javascript/asynchronous_programming/Async Generator"}},i=[{value:"Computer Science \uc758 loop",id:"computer-science-\uc758-loop",children:[{value:"1. Iteration loop",id:"1-iteration-loop",children:[]},{value:"2. Recursion",id:"2-recursion",children:[]},{value:"CoRecursion",id:"corecursion",children:[]}]},{value:"Async Iterator",id:"async-iterator-1",children:[]},{value:"Reference &amp; Comment",id:"reference--comment",children:[]}],l={toc:i};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"async-iterator"},"Async Iterator"),Object(a.b)("h2",{id:"computer-science-\uc758-loop"},"Computer Science \uc758 loop"),Object(a.b)("h3",{id:"1-iteration-loop"},"1. Iteration loop"),Object(a.b)("h3",{id:"2-recursion"},"2. Recursion"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc5b4\ub518\uac00\ub85c \uc774\ub3d9\ud558\uba74 \uadf8 \ub2e4\uc74c\uc73c\ub85c \uc774\ub3d9\ud560 \ud3ec\uc778\ud130\uac00 \uc788\uc744 \ub54c "),Object(a.b)("li",{parentName:"ul"},"\uc774\ubbf8 \uad6c\uc870\uac00 \uc788\ub294 \uac83\uc744 \uc21c\ud68c\ud558\ub294 \uac83\n")),Object(a.b)("h3",{id:"corecursion"},"CoRecursion"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"recursion \uc758 \ubc18\ub300"),Object(a.b)("li",{parentName:"ul"},"\uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc788\ub294 \uad6c\uc870\ub97c \uc21c\ud68c\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \uc791\uc740 \ud78c\ud2b8\ub85c\ubd80\ud130 \uad6c\uc870\ub97c \ub9cc\ub4e4\uc5b4\ub0b8\ub2e4"),Object(a.b)("li",{parentName:"ul"},"range(1, 10) "),Object(a.b)("li",{parentName:"ul"},"\uc81c\ub108\ub808\uc774\ud130\uc758 \ubaa9\uc801")),Object(a.b)("h2",{id:"async-iterator-1"},"Async Iterator"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Symbol.iterator")," \ub300\uc2e0, ",Object(a.b)("inlineCode",{parentName:"li"},"Symbol.asyncIterator")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"next()")," \ub294 Promise \ub97c \ubc18\ud658"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"for await (let item of iterable)")," \ubc18\ubcf5\ubb38")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"let range = {\nfrom: 1,\nto: 5,\n\n// for await..of \ucd5c\ucd08 \uc2e4\ud589 \uc2dc, Symbol.asyncIterator\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4.\n[Symbol.asyncIterator]() { // (1)\n // Symbol.asyncIterator \uba54\uc11c\ub4dc\ub294 \uc774\ud130\ub808\uc774\ud130 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n // \uc774\ud6c4 for await..of\ub294 \ubc18\ud658\ub41c \uc774\ud130\ub808\uc774\ud130 \uac1d\uccb4\ub9cc\uc744 \ub300\uc0c1\uc73c\ub85c \ub3d9\uc791\ud558\ub294\ub370,\n // \ub2e4\uc74c \uac12\uc740 next()\uc5d0\uc11c \uc815\ud574\uc9d1\ub2c8\ub2e4.\n return {\n   current: this.from,\n   last: this.to,\n\n   // for await..of \ubc18\ubcf5\ubb38\uc5d0 \uc758\ud574 \uac01 \uc774\ud130\ub808\uc774\uc158\ub9c8\ub2e4 next()\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4.\n   async next() { // (2)\n     //  next()\ub294 \uac1d\uccb4 \ud615\ud0dc\uc758 \uac12, {done:.., value :...}\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n     // (\uac1d\uccb4\ub294 async\uc5d0 \uc758\ud574 \uc790\ub3d9\uc73c\ub85c \ud504\ub77c\ubbf8\uc2a4\ub85c \uac10\uc2f8\uc9d1\ub2c8\ub2e4.)\n\n     // \ube44\ub3d9\uae30\ub85c \ubb34\uc5b8\uac00\ub97c \ud558\uae30 \uc704\ud574 await\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n     await new Promise(resolve => setTimeout(resolve, 1000)); // (3)\n\n     if (this.current <= this.last) {\n       return { done: false, value: this.current++ };\n     } else {\n       return { done: true };\n     }\n   }\n };\n}\n};\n\n(async () => {\n // next() \ub294 promise \ub97c \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 result \ub97c \uc5bb\uae30 \uc704\ud574 await \ub97c \ubd99\uc5ec\uc8fc\uc5b4\uc57c \ud55c\ub2e4.\nfor await (let value of range) { // (4)\n alert(value); // 1,2,3,4,5\n}\n\n})()\n")),Object(a.b)("p",null,"... spread operator",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"alert( [...range] ); // Symbol.iterator\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc5d0\ub7ec \ubc1c\uc0dd")),Object(a.b)("h2",{id:"reference--comment"},"Reference & Comment"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://gitlab.com/siots-study/topics/-/wikis/asyncronous"},"https://gitlab.com/siots-study/topics/-/wikis/asyncronous")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF"},"https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://helloworldjavascript.net/pages/285-async.html"},"https://helloworldjavascript.net/pages/285-async.html")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://ko.javascript.info/async"},"https://ko.javascript.info/async")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://ko.javascript.info/generators-iterators"},"https://ko.javascript.info/generators-iterators")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.bsidesoft.com/8325"},"https://www.bsidesoft.com/8325")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.bsidesoft.com/6037"},"https://www.bsidesoft.com/6037"),"     ")))}s.isMDXComponent=!0},456:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,f=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);