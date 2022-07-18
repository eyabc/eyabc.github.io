(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(481));const i={},c={unversionedId:"javascript/js_engine/V8",id:"javascript/js_engine/V8",isDocsHomePage:!1,title:"V8",description:"V8 \uc5d4\uc9c4",source:"@site/docs/javascript/js_engine/V8.md",slug:"/javascript/js_engine/V8",permalink:"/docs/javascript/js_engine/V8",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"DanfoJS",permalink:"/docs/javascript/javascript/DanfoJS"},next:{title:"Value Context vs Identifier Context",permalink:"/docs/javascript/OOP/OOP_value_and_identifier_context"}},l=[{value:"V8 \uc758 \ud2b9\uc9d5",id:"v8-\uc758-\ud2b9\uc9d5",children:[]},{value:"JIT Compiler",id:"jit-compiler",children:[{value:"\ucef4\ud30c\uc77c",id:"\ucef4\ud30c\uc77c",children:[]}]},{value:"Reference",id:"reference",children:[]}],o={toc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"v8-\uc5d4\uc9c4"},"V8 \uc5d4\uc9c4"),Object(a.b)("h2",{id:"v8-\uc758-\ud2b9\uc9d5"},"V8 \uc758 \ud2b9\uc9d5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"C++ \ub85c \uc791\uc131\ub428"),Object(a.b)("li",{parentName:"ul"},"ECMA-262 \uc758 ",Object(a.b)("inlineCode",{parentName:"li"},"ECMAScript")," \uc640 ",Object(a.b)("inlineCode",{parentName:"li"},"WebAssembly")," \ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\uc2e4\ud589 \uac00\ub2a5\ud55c \ud658\uacbd",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc11c: IA-32, ARM, MIPS"),Object(a.b)("li",{parentName:"ul"},"OS : Window7, MacOS10.12, Linux x64"))),Object(a.b)("li",{parentName:"ul"},"\ud2b9\uc9d5",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"JavaScript \uc18c\uc2a4\ucf54\ub4dc ",Object(a.b)("inlineCode",{parentName:"li"},"\ucef4\ud30c\uc77c"),", ",Object(a.b)("inlineCode",{parentName:"li"},"\uc2e4\ud589")),Object(a.b)("li",{parentName:"ul"},"\uc0dd\uc131\ud558\ub294 ",Object(a.b)("inlineCode",{parentName:"li"},"Object")," \ub97c ",Object(a.b)("inlineCode",{parentName:"li"},"\uba54\ubaa8\ub9ac\uc5d0 \ud560\ub2f9")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Garbage Collection")," : Object \uc758 ",Object(a.b)("inlineCode",{parentName:"li"},"\uba54\ubaa8\ub9ac\ub97c \ud574\uc81c")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Hidden Class")," : ",Object(a.b)("inlineCode",{parentName:"li"},"\ube60\ub974\uac8c \ud504\ub85c\ud37c\ud2f0\uc5d0 \uc811\uadfc")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"TurboFan")," : \ucf54\ub4dc, \uc18d\ub3c4, \uba54\ubaa8\ub9ac \ucd5c\uc801\ud654")))),Object(a.b)("h2",{id:"jit-compiler"},"JIT Compiler"),Object(a.b)("h3",{id:"\ucef4\ud30c\uc77c"},"\ucef4\ud30c\uc77c"),Object(a.b)("p",null,"JavaScript \uc18c\uc2a4\ub97c (?)\ub0b4\ubd80\uc5d0\uc11c \uc774\ud574\ud560 \uc218 \uc788\ub294 \uc5b8\uc5b4\ub85c \ubcc0\ud658\ud558\uace0 \uc2e4\ud589\ud55c\ub2e4."),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://medium.com/@pks2974/v8-%EC%97%90%EC%84%9C-javascript-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%B4%EA%B8%B0-25837f61f551"},"V8 \uc5d0\uc11c Javascript \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95 \uc815\ub9ac\ud574\ubcf4\uae30\n"))))}p.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),j=r,O=u["".concat(c,".").concat(j)]||u[j]||s[j]||i;return n?a.a.createElement(O,l(l({ref:t},p),{},{components:n})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);