(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{332:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=(r(0),r(441));const a={title:"Polymorphism"},i={unversionedId:"javascript/OOP/OOP_polymorphism",id:"javascript/OOP/OOP_polymorphism",isDocsHomePage:!1,title:"Polymorphism",description:"ES6 \ud074\ub798\uc2a4",source:"@site/docs/javascript/OOP/OOP_polymorphism.md",slug:"/javascript/OOP/OOP_polymorphism",permalink:"/docs/javascript/OOP/OOP_polymorphism",version:"current",sidebar:"javascript",previous:{title:"Value Context vs Identifier Context",permalink:"/docs/javascript/OOP/OOP_value_and_identifier_context"},next:{title:"Object essentials \uac1d\uccb4\uc758 \ubcf8\uc9c8",permalink:"/docs/javascript/OOP/OOP_object_essentials"}},c=[{value:"Polymorphism: &quot;\ub300\uccb4 \uac00\ub2a5\uc131&quot; substitution",id:"polymorphism-\ub300\uccb4-\uac00\ub2a5\uc131-substitution",children:[]},{value:"Polymorphism: &quot;\ub0b4\uc801 \uc77c\uad00\uc131&quot; internal identity",id:"polymorphism-\ub0b4\uc801-\uc77c\uad00\uc131-internal-identity",children:[]},{value:"\uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4\uc758 Polymorphism",id:"\uac1d\uccb4\uc9c0\ud5a5-\uc5b8\uc5b4\uc758-polymorphism",children:[]},{value:"Polymorphism of Prototype",id:"polymorphism-of-prototype",children:[]}],l={toc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"./%ED%81%B4%EB%9E%98%EC%8A%A4.html#class-syntax"},"ES6 \ud074\ub798\uc2a4"),"  ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const Worker = class {\n  run() { console.log('working'); }\n  print() { this.run(); }\n};\n\nconst HardWorker = class extends Worker {\n  run() { console.log('hardWorking'); }\n};\n\nconst hardWorker = new HardWorker();\n")),Object(o.b)("h2",{id:"polymorphism-\ub300\uccb4-\uac00\ub2a5\uc131-substitution"},'Polymorphism: "\ub300\uccb4 \uac00\ub2a5\uc131" substitution'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"console.log(hardWorker instanceof Worker);  // true \n")),Object(o.b)("p",null,"true \uc778 \uc774\uc720     "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"sub \ub294 super \ub97c \ub300\uccb4\ud560 \uc218 \uc788\ub2e4. "),Object(o.b)("li",{parentName:"ul"},"super \ub294 sub \ub97c \ub300\uccb4\ud560 \uc218 \uc5c6\ub2e4."),Object(o.b)("li",{parentName:"ul"},"(extend) HardWorker \uc758 \ubd80\ubd84\uc9d1\ud569\uc774 Worker \uc774\ub2e4. "),Object(o.b)("li",{parentName:"ul"},"\ud655\uc7a5\ud55c \ud074\ub798\uc2a4\ub294 \ud655\uc7a5\ub420 \ud074\ub798\uc2a4\ub97c \ub300\uccb4\ud560 \uc218 \uc788\ub2e4. ")),Object(o.b)("h2",{id:"polymorphism-\ub0b4\uc801-\uc77c\uad00\uc131-internal-identity"},'Polymorphism: "\ub0b4\uc801 \uc77c\uad00\uc131" internal identity'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"hardWorker.print();  // hardworking\n")),Object(o.b)("p",null,"this \ub294 worker \ud074\ub798\uc2a4\uc758 print() \uc548\uc5d0 \uc788\uc9c0\ub9cc, \uc5ec\uc804\ud788 hardWorker \uc758 this \ub97c \uac00\ub9ac\ud0a8\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"this \uc758 \ud2b9\uc9d5 \u2192 \ud638\ucd9c \ubb38\ub9e5\uc5d0 \uacb0\uc815\ub418\uba70, \ubc14\ub00c\uc9c0 \uc54a\ub294\ub2e4. ")),Object(o.b)("h2",{id:"\uac1d\uccb4\uc9c0\ud5a5-\uc5b8\uc5b4\uc758-polymorphism"},"\uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4\uc758 Polymorphism"),Object(o.b)("p",null,"Substitution & internal identity"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ud655\uc7a5\ub41c \uac1d\uccb4\ub294 \uc6d0\ubcf8\uc73c\ub85c \ub300\uccb4 \uac00\ub2a5"),Object(o.b)("li",{parentName:"ul"},"\uc0dd\uc131\uc2dc\uc810\uc758 \ud0c0\uc785\uc774 \ub0b4\ubd80\uc5d0 \uc77c\uad00\uc131 \uc788\uac8c \ucc38\uc870\ub428")),Object(o.b)("p",null,"\ub450\uac00\uc9c0 \ud2b9\uc131\uc744 \uac00\uc9c0\uc9c0\ub9cc \uc5b8\uc5b4\ub9c8\ub2e4 \uad6c\ud604 \ubc29\ubc95\uc774 \ub2e4\ub974\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ub0b4\ubd80\uc5d0 Prototype \uc2dc\uc2a4\ud15c\uc744 \uac00\uc9c4\ub2e4. ")),Object(o.b)("h2",{id:"polymorphism-of-prototype"},"Polymorphism of Prototype"),Object(o.b)("p",null,"\ud504\ub85c\ud1a0\ud0c0\uc785 \uccb4\uc778\uc744 \ud1b5\ud574\uc11c \ub0b4\uc801 \uc77c\uad00\uc131\uc744 \ub2ec\uc131\ud558\uac8c \ub41c\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","worker \uc778\uc2a4\ud134\uc2a4\uac00 \ud0dc\uc5b4\ub0a0 \ub54c, \uac00\uc7a5 \uac00\uae4c\uc6b4 HardWorker Prototype \uc73c\ub85c \uacb0\uc815\n",Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/110197906-e870db00-7e91-11eb-86ef-cb35fd9b08eb.png",alt:"image"})),Object(o.b)("p",null,"\ud504\ub85c\ud1a0\ud0c0\uc785 \uccb4\uc778\uc744 \ud1b5\ud574\uc11c \ub300\uccb4 \uac00\ub2a5\uc131\uc744 \ub2ec\uc131\ud55c\ub2e4.\n",Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/110197979-646b2300-7e92-11eb-9824-ade468fcd3b6.png",alt:"image"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/110197985-6d5bf480-7e92-11eb-9627-e8e9ea6dd62b.png",alt:"image"})),Object(o.b)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 Polymorphism \uc774 \uc131\ub9bd \u2192 ",Object(o.b)("em",{parentName:"p"},"\uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4")," "))}p.isMDXComponent=!0},441:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,O=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(O,c(c({ref:t},p),{},{components:r})):o.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);