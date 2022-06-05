(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(471));const c={title:"Object essentials \uac1d\uccb4\uc758 \ubcf8\uc9c8"},i={unversionedId:"javascript/OOP/OOP_object_essentials",id:"javascript/OOP/OOP_object_essentials",isDocsHomePage:!1,title:"Object essentials \uac1d\uccb4\uc758 \ubcf8\uc9c8",description:"\uac1d\uccb4\uac00 \uc9c4\uc9dc\ub85c \ud574\uc57c\ub9cc \ud558\ub294 \ucc45\uc784",source:"@site/docs/javascript/OOP/OOP_object_essentials.md",slug:"/javascript/OOP/OOP_object_essentials",permalink:"/docs/javascript/OOP/OOP_object_essentials",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Polymorphism",permalink:"/docs/javascript/OOP/OOP_polymorphism"},next:{title:"SOLID Principle",permalink:"/docs/javascript/OOP/OOP_solid_principle"}},o=[{value:"1. Hide State",id:"1-hide-state",children:[]},{value:"2. Encapsulation",id:"2-encapsulation",children:[{value:"getter, setter",id:"getter-setter",children:[]}]}],l={toc:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\uac1d\uccb4\uac00 \uc9c4\uc9dc\ub85c \ud574\uc57c\ub9cc \ud558\ub294 \ucc45\uc784 "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const EssentialObject = class {\n  #name = '';        \n  #screen = null;\n\n  constructor(name) {\n    this.#name = name;\n  }\n\n  camouflage() {\n    this.#screen = (Math.random() * 10).toString(16).replace('.', '');\n  }\n\n  get name() {\n    return this.#screen || this.#name;\n  }\n};\n")),Object(a.b)("p",null,"\ub450\uac00\uc9c0\ub97c \ubaa8\ub450 \ucda9\uc871\ud574\uc57c\uc9c0 \uac1d\uccb4\uc774\ub2e4."),Object(a.b)("h2",{id:"1-hide-state"},"1. Hide State"),Object(a.b)("p",null,"\uc18d\uc131\uc740 \ubaa8\ub450 private"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc18d\uc131\uc774 \uc228\uaca8\uc838 \uc788\uc9c0 \uc54a\uc73c\uba74 \uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc774 \uc544\ub2c8\ub2e4.  "),Object(a.b)("li",{parentName:"ul"},"\uc740\ub2c9\uc744 \ud558\uc9c0 \uc54a\uc73c\uba74 \uacf5\uac1c\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uac12\uc774 \ub41c\ub2e4. ")),Object(a.b)("h2",{id:"2-encapsulation"},"2. Encapsulation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc740\ub2c9\uc740 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uac83"),Object(a.b)("li",{parentName:"ul"},"\ucea1\uc290\ud654\ub294 \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uac83")),Object(a.b)("h3",{id:"getter-setter"},"getter, setter"),Object(a.b)("p",null,"\ubcf8\uc9c8\uc801\uc73c\ub85c \uadf8 \uba54\uc11c\ub4dc\ub97c \uc65c \ud638\ucd9c\ud574\uc57c \ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc774\uc720\ub97c \uad6c\uccb4\ud654 \ud558\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0,",Object(a.b)("br",{parentName:"p"}),"\n","\ucea1\uc290\ud654\uc5d0 \uc2e4\ud328\ud558\uac8c \ub41c\ub2e4."),Object(a.b)("p",null,"\uc740\ub2c9\uc744 \ud558\ub354\ub77c\ub3c4, \ub0b4\ubd80 \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc678\ubd80\uc5d0 \uc704\uc784\ud558\uba74 \uac1d\uccb4\uac00 \uc544\ub2c8\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"setAge \ub294 \ub098\uc758 \uc0c1\ud0dc\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \uc678\ubd80\uc5d0\uc11c \ubcc0\uacbd\ud55c\ub2e4. ")))}s.isMDXComponent=!0},471:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||O[b]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);