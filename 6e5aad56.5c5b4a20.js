(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{245:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),c=(r(0),r(462)),a={},l={unversionedId:"javascript/browser/Browser_DOM",id:"javascript/browser/Browser_DOM",isDocsHomePage:!1,title:"Browser_DOM",description:"DOM",source:"@site/docs/javascript/browser/Browser_DOM.md",slug:"/javascript/browser/Browser_DOM",permalink:"/docs/javascript/browser/Browser_DOM",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"BOM",permalink:"/docs/javascript/browser/Browser_BOM"},next:{title:"Browser_DOM_Tree",permalink:"/docs/javascript/browser/Browser_DOM_Tree"}},i=[{value:"DOM Document Object Model",id:"dom-document-object-model",children:[]},{value:"\uc6f9\ubb38\uc11c\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub80c\ub354\ub9c1 \ub418\uae30 \uae4c\uc9c0",id:"\uc6f9\ubb38\uc11c\uac00-\ube0c\ub77c\uc6b0\uc800\uc5d0-\ub80c\ub354\ub9c1-\ub418\uae30-\uae4c\uc9c0",children:[]},{value:"DOM Tree",id:"dom-tree",children:[]},{value:"DOM API",id:"dom-api",children:[]},{value:"Reference",id:"reference",children:[]}],b={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"dom"},"DOM"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/97259157-7215f980-185d-11eb-975c-084a84eeda07.png",alt:"image"})),Object(c.b)("h2",{id:"dom-document-object-model"},"DOM Document Object Model"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"HTML / XML \ubb38\uc11c\uc758 \ud504\ub85c\uadf8\ub798\ubc0d interface"),Object(c.b)("li",{parentName:"ul"},"\ub9ce\uc740 \ube0c\ub77c\uc6b0\uc800\ub4e4\uc774 \ud45c\uc900 \uaddc\uc57d \uc678\uc5d0 \uac01\uae30 \ub2e4\ub978 \ucd94\uac00\uae30\ub2a5\ub4e4\uc744 \uc81c\uacf5\ud558\uace0 \uc788\ub2e4.")),Object(c.b)("p",null,"\ubb38\uc11c\uc758 \uad6c\uc870\ud654 \ub41c \ud45c\ud604(structured representation) \uc744 \uc81c\uacf5"),Object(c.b)("p",null,"\u2192 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uac00 DOM \uad6c\uc870\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud568."),Object(c.b)("p",null,"\u2192 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub294 \ubb38\uc11c \uad6c\uc870, \uc2a4\ud0c0\uc77c, \ub0b4\uc6a9 \ub4e4\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."),Object(c.b)("p",null,"\uc6f9 \ud398\uc774\uc9c0 \ub0b4\uc758 \ubaa8\ub4e0 \ucf58\ud150\uce20 -> \uac1d\uccb4"),Object(c.b)("h2",{id:"\uc6f9\ubb38\uc11c\uac00-\ube0c\ub77c\uc6b0\uc800\uc5d0-\ub80c\ub354\ub9c1-\ub418\uae30-\uae4c\uc9c0"},"\uc6f9\ubb38\uc11c\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub80c\ub354\ub9c1 \ub418\uae30 \uae4c\uc9c0"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uc5d4\uc9c4",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc6f9 \ubb38\uc11c\ub97c \ube0c\ub77c\uc6b0\uc800\uac00 \uc774\ud574\ud560 \uc218 \uc788\ub294 \uad6c\uc870\ub85c \ub9cc\ub4e0\ub2e4"),Object(c.b)("li",{parentName:"ul"},"\uc6f9 \ubb38\uc11c\ub97c \ub85c\ub4dc / \ud30c\uc2f1 \ud6c4 DOM \uc73c\ub85c \ub9cc\ub4e0\ub2e4."))),Object(c.b)("li",{parentName:"ol"},"DOM \uc744 \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ud55c\ub2e4. ")),Object(c.b)("h2",{id:"dom-tree"},"DOM Tree"),Object(c.b)("p",null,"DOM \uc740 \uac1d\uccb4 \ud2b8\ub9ac\ub85c \uad6c\uc131\ub41c\ub2e4."),Object(c.b)("h2",{id:"dom-api"},"DOM API"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc815\uc801\uc778 \uc6f9\ud398\uc774\uc9c0\ub97c \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ubc29\ubc95"),Object(c.b)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \uc0c1\uc5d0 \uc874\uc7ac\ud558\ub294 DOM \uc744 \ubcc0\uacbd\ud558\ub294 \uac83"),Object(c.b)("li",{parentName:"ul"},"DOM \uc758 \uac1d\uccb4\uc5d0 \uc811\uadfc\ud558\uace0 \uc218\uc815\ud560 \uc218 \uc788\ub294 \uba54\uc11c\ub4dc\uc640 \ud504\ub85c\ud37c\ud2f0")),Object(c.b)("hr",null),Object(c.b)("p",null,"API(web or XML page) = DOM + JS(scripting language)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"DOM \uc740 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc640 \ub3c5\ub9bd\uc801\uc73c\ub85c \ub514\uc790\uc778 \ub418\uc5c8\uc74c")),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://gitlab.com/siots-study/topics/-/wikis/dom"},"https://gitlab.com/siots-study/topics/-/wikis/dom")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C"},"https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C"))))}u.isMDXComponent=!0},462:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,d=p["".concat(a,".").concat(O)]||p[O]||s[O]||c;return r?o.a.createElement(d,l(l({ref:t},b),{},{components:r})):o.a.createElement(d,l({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var b=2;b<c;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);