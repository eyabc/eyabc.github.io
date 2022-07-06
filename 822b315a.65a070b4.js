(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{283:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(479)),i={},l={unversionedId:"javascript/javascript/\ub798\ud37c \uac1d\uccb4",id:"javascript/javascript/\ub798\ud37c \uac1d\uccb4",isDocsHomePage:!1,title:"\ub798\ud37c \uac1d\uccb4",description:"\ub798\ud37c \uac1d\uccb4",source:"@site/docs/javascript/javascript/\ub798\ud37c \uac1d\uccb4.md",slug:"/javascript/javascript/\ub798\ud37c \uac1d\uccb4",permalink:"/docs/javascript/javascript/\ub798\ud37c \uac1d\uccb4",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"\uc6d0\uc2dc\ud0c0\uc785\uacfc \ucc38\uc870\ud0c0\uc785",permalink:"/docs/javascript/javascript/\uc6d0\uc2dc\ud0c0\uc785\uacfc \ucc38\uc870\ud0c0\uc785"},next:{title:"\uac00\ube44\uc9c0 \uceec\ub809\uc158",permalink:"/docs/javascript/javascript/\uac00\ube44\uc9c0 \uceec\ub809\uc158"}},o=[{value:"Primitive wrapper objects \uc758 \uc885\ub958",id:"primitive-wrapper-objects-\uc758-\uc885\ub958",children:[]},{value:"\uc6d0\uc2dc \uac12\uacfc, \uac1d\uccb4\ub97c \ubd84\ub9ac\ud55c \uc774\uc720",id:"\uc6d0\uc2dc-\uac12\uacfc-\uac1d\uccb4\ub97c-\ubd84\ub9ac\ud55c-\uc774\uc720",children:[]},{value:"String/Number/Boolean \uc744 \uc0dd\uc131\uc790\ub85c \uc4f0\uc9c0 \ub9d0\uc790.",id:"stringnumberboolean-\uc744-\uc0dd\uc131\uc790\ub85c-\uc4f0\uc9c0-\ub9d0\uc790",children:[]},{value:"String/Number/Boolean \uc0dd\uc131\uc790 \uc5c6\uc774 \uc0ac\uc6a9",id:"stringnumberboolean-\uc0dd\uc131\uc790-\uc5c6\uc774-\uc0ac\uc6a9",children:[]},{value:"null / undefined \uc758 \uba54\uc11c\ub4dc\ub294 \uc5c6\ub2e4.",id:"null--undefined-\uc758-\uba54\uc11c\ub4dc\ub294-\uc5c6\ub2e4",children:[]},{value:"\ubb38\uc790\uc5f4\uc5d0 \ud504\ub85c\ud37c\ud2f0 \ucd94\uac00",id:"\ubb38\uc790\uc5f4\uc5d0-\ud504\ub85c\ud37c\ud2f0-\ucd94\uac00",children:[{value:"\uc5c4\uaca9\ubaa8\ub4dc",id:"\uc5c4\uaca9\ubaa8\ub4dc",children:[]},{value:"\ube44\uc5c4\uaca9\ubaa8\ub4dc",id:"\ube44\uc5c4\uaca9\ubaa8\ub4dc",children:[]}]},{value:"\uc2ec\ud654 TODO",id:"\uc2ec\ud654-todo",children:[]}],b={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\ub798\ud37c-\uac1d\uccb4"},"\ub798\ud37c \uac1d\uccb4"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://vomvoru.github.io/blog/javascript-primitive-type/"},"\ud83d\udd17"),"\n",Object(c.b)("a",{parentName:"p",href:"https://ko.javascript.info/primitives-methods"},"\ud83d\udd17")),Object(c.b)("p",null,"\ub798\ud37c \uac1d\uccb4(Primitive wrapper objects)\ub97c \uc774\uc6a9\ud574 \uc6d0\uc2dc\uac12\ub3c4 \uac1d\uccb4 \uc548 \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),Object(c.b)("p",null,"\uc6d0\uc2dc \uac12\uc5d0 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub824 \ud558\uba74 \uc784\uc2dc \uac1d\uccb4\uac00 \ub9cc\ub4e4\uc5b4 \uc9c0\uc9c0\ub9cc JS \uc5d4\uc9c4\uc758 \ud6cc\ub96d\ud55c \ub0b4\ubd80 \ucd5c\uc801\ud654\ub85c\n\ub9e4\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574\ub3c4 \ub9ce\uc740 \ub9ac\uc18c\uc2a4\ub97c \uc4f0\uc9c0 \uc54a\uc74c."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"instanceof ",Object(c.b)("a",{parentName:"li",href:"./%EB%AC%B8%EB%B2%95%20%EC%82%AC%EC%A0%84.md#instanceof"},"\ud83d\udd17"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"let str1 = new String('str1');\nlet str2 = 'str2';\n\ntypeof str1; // object\ntypeof str2; // string\n\nst1 instanceof String; // true\nst2 instanceof String; // false\n\nstr1 instanceof Object; // true\nstr2 instanceof Object; // false\n")),Object(c.b)("h2",{id:"primitive-wrapper-objects-\uc758-\uc885\ub958"},"Primitive wrapper objects \uc758 \uc885\ub958"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"String : string primitive wrapper object."),Object(c.b)("li",{parentName:"ul"},"Number : number primitive wrapper object."),Object(c.b)("li",{parentName:"ul"},"Boolean : Boolean primitive wrapper object."),Object(c.b)("li",{parentName:"ul"},"Symbol : Symbol primitive wrapper object.")),Object(c.b)("p",null,"'valueOf()' \ub798\ud37c\uac1d\uccb4\uc5d0\uc11c \uac10\uc2fc \uc6d0\uc2dc\uac12\uc73c\ub85c \uc811\uadfc\ud558\ub294 \ubc29\ubc95"),Object(c.b)("p",null,"by \uc900\uc77c\ub2d8. \uc6d0\uc2dc\uac12\uc744 \uac1d\uccb4 \ud615\ud0dc\ub85c \ubcc0\ud658\ud574 \uc8fc\ub294 \uac83 \uac19\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"console.log(Object(1), Object(''), Object(true), Object(null), Object(undefined));\n// Nuber {1}, String {\"\"}, {Boolean {true}, {} {}\n")),Object(c.b)("h2",{id:"\uc6d0\uc2dc-\uac12\uacfc-\uac1d\uccb4\ub97c-\ubd84\ub9ac\ud55c-\uc774\uc720"},"\uc6d0\uc2dc \uac12\uacfc, \uac1d\uccb4\ub97c \ubd84\ub9ac\ud55c \uc774\uc720"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc6d0\uc2dc\uac12\uc740 \uac00\ub2a5\ud55c \ube60\ub974\uace0 \uac00\ubcbc\uc6cc\uc57c\ud568"),Object(c.b)("li",{parentName:"ul"},"\uc6d0\uc2dc\uac12\uc744 \ub2e4\ub8e8\ub294 \uc77c\uc740 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \uc218\uc6d4\ud558\ub2e4.")),Object(c.b)("h2",{id:"stringnumberboolean-\uc744-\uc0dd\uc131\uc790\ub85c-\uc4f0\uc9c0-\ub9d0\uc790"},"String/Number/Boolean \uc744 \uc0dd\uc131\uc790\ub85c \uc4f0\uc9c0 \ub9d0\uc790."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"typeof 0; // 'number'\ntypeof new Number(0); // object\n")),Object(c.b)("p",null,"\ub17c\ub9ac \ud3c9\uac00 \uc2dc \ud56d\uc0c1 \ucc38\uc744 \ubc18\ud658"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"let zero = new Number(0);\nif (zero) // \ubcc0\uc218 zero\ub294 \uac1d\uccb4\uc774\ubbc0\ub85c, \uc870\uac74\ubb38\uc774 \ucc38\uc774\ub41c\ub2e4. \n    alert('\uadf8\ub7f0\ub370 \uc5ec\ub7ec\ubd84\uc740 zero\uac00 \ucc38\uc774\ub77c\ub294 \uac83\uc5d0 \ub3d9\uc758\ud558\ub098\uc694? ')\n")),Object(c.b)("h2",{id:"stringnumberboolean-\uc0dd\uc131\uc790-\uc5c6\uc774-\uc0ac\uc6a9"},"String/Number/Boolean \uc0dd\uc131\uc790 \uc5c6\uc774 \uc0ac\uc6a9"),Object(c.b)("p",null,"\uc778\uc218\ub97c \uc6d0\ud558\ub294 \ud615\uc758 \uc6d0\uc2dc\uac12(\ubb38\uc790\uc5f4, \uc22b\uc790, \ubd88\ub9b0 \uac12)\uc73c\ub85c \ubcc0\ud658"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'let num = Number("123");\n')),Object(c.b)("h2",{id:"null--undefined-\uc758-\uba54\uc11c\ub4dc\ub294-\uc5c6\ub2e4"},"null / undefined \uc758 \uba54\uc11c\ub4dc\ub294 \uc5c6\ub2e4."),Object(c.b)("h2",{id:"\ubb38\uc790\uc5f4\uc5d0-\ud504\ub85c\ud37c\ud2f0-\ucd94\uac00"},"\ubb38\uc790\uc5f4\uc5d0 \ud504\ub85c\ud37c\ud2f0 \ucd94\uac00"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"let str = 'hello';\nstr.test = 5;\nalert(str.test);\n")),Object(c.b)("p",null,"str \uc758 \ud504\ub85c\ud37c\ud2f0\uc5d0 \uc811\uadfc\ud558\ub824 \ud558\uba74 '\ub798\ud37c \uac1d\uccb4'\uac00 \ub9cc\ub4e4\uc5b4 \uc9c4\ub2e4."),Object(c.b)("h3",{id:"\uc5c4\uaca9\ubaa8\ub4dc"},"\uc5c4\uaca9\ubaa8\ub4dc"),Object(c.b)("p",null,"\ub798\ud37c\uac1d\uccb4\ub97c \uc218\uc815\ud558\ub824 \ud560 \ub54c \uc5d0\ub7ec \ubc1c\uc0dd"),Object(c.b)("h3",{id:"\ube44\uc5c4\uaca9\ubaa8\ub4dc"},"\ube44\uc5c4\uaca9\ubaa8\ub4dc"),Object(c.b)("p",null,"\ub798\ud37c \uac1d\uccb4\uc5d0 test \ud504\ub85c\ud37c\ud2f0\uac00 \ucd94\uac00 \ub418\uc9c0\ub9cc, \ub798\ud37c\uac1d\uccb4\ub294 \ubc14\ub85c \uc0ad\uc81c\ub418\uae30 \ub54c\ubb38\uc5d0\n\ub9c8\uc9c0\ub9c9\uc904\uc774 \uc2e4\ud589\ub420 \ub550 test \ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4."),Object(c.b)("h2",{id:"\uc2ec\ud654-todo"},"\uc2ec\ud654 TODO"),Object(c.b)("p",null,"JS\uc758 \ub0b4\ubd80 \ub798\ud37c\uac1d\uccb4 \ub3d9\uc791\uc6d0\ub9ac."))}p.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(r),j=n,m=u["".concat(i,".").concat(j)]||u[j]||s[j]||c;return r?a.a.createElement(m,l(l({ref:t},b),{},{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"}}]);