(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(447)),c={title:"Value Context vs Identifier Context"},l={unversionedId:"javascript/OOP/OOP_value_and_identifier_context",id:"javascript/OOP/OOP_value_and_identifier_context",isDocsHomePage:!1,title:"Value Context vs Identifier Context",description:"Value Context",source:"@site/docs/javascript/OOP/OOP_value_and_identifier_context.md",slug:"/javascript/OOP/OOP_value_and_identifier_context",permalink:"/docs/javascript/OOP/OOP_value_and_identifier_context",version:"current",sidebar:"javascript",previous:{title:"V8",permalink:"/docs/javascript/js_engine/V8"},next:{title:"Polymorphism",permalink:"/docs/javascript/OOP/OOP_polymorphism"}},b=[{value:"Value Context",id:"value-context",children:[{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",children:[]}]},{value:"Identifier Context",id:"identifier-context",children:[{value:"\ud2b9\uc9d5 \ud83d\udd17",id:"\ud2b9\uc9d5-",children:[]}]},{value:"\uac1d\uccb4\uc9c0\ud5a5\uc740 \ucca0\uc800\ud558\uac8c Value Context \ub97c \ubc30\uc81c\ud55c\ub2e4.",id:"\uac1d\uccb4\uc9c0\ud5a5\uc740-\ucca0\uc800\ud558\uac8c-value-context-\ub97c-\ubc30\uc81c\ud55c\ub2e4",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"value-context"},"Value Context"),Object(i.b)("p",null,"\ubcc0\uc218\uac00 \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\uc774 \ub41c\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uba54\ubaa8\ub9ac\uc5d0 1\ubc88 \uc8fc\uc18c\uc640 2\ubc88 \uc8fc\uc18c\uc5d0 3\uc744 \uac01\uac01 \ub123\ub294\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uba54\ubaa8\ub9ac \uc8fc\uc18c\uc640 \uad00\uacc4 \uc5c6\uc774 \uac12\uc774 \uac19\uc73c\uba74 \uac19\ub2e4\ub77c\uace0 \ud310\ub2e8\ud55c\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uac12\uc740 \uba54\ubaa8\ub9ac \uc8fc\uc18c\uac00 \uc911\uc694\uce58 \uc54a\ub2e4. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\uac12\uc758 \uc815\uc758"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0 \ub530\ub77c, \uae30\ubcf8 \uc124\uc815\uc73c\ub85c \uc81c\uacf5\ub428"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85%EA%B3%BC%20%EC%B0%B8%EC%A1%B0%ED%83%80%EC%9E%85.html#%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uae30\ubcf8\uac12 primitive"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"null, undefined, boolean, string, number, symbol"))))),Object(i.b)("h3",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\ub05d \uc5c6\ub294 \ubcf5\uc0ac\ubcf8",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uac12\uc744 \ud560\ub2f9/\ud568\uc218\uc758 \uc778\uc790 \u2192 \uc5b8\uc81c\ub098 \ubcf5\uc0ac\ubcf8\uc744 \ub9cc\ub4e0\ub2e4 "))),Object(i.b)("li",{parentName:"ol"},"(\uac15\uc81c\uc801\uc73c\ub85c) \uc0c1\ud0dc \ubcc0\ud654\uc5d0 \uc548\uc804\ud558\ub2e4 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/pul8219/TIL/issues/26"},"\ud83d\udd17"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uac15\uc81c\uc801\uc73c\ub85c \uacc4\uc18d \ubd88\ubcc0\ud558\ub294 \uac12\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\uae30 \ub54c\ubb38\uc5d0 \uc548\uc804\ud574 \ubcf4\uc778\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\uc0c1\ud0dc\uad00\ub9ac\uba74\uc5d0\uc11c \uc548\uc804\ud55c \uac83\uc740 \uc544\ub2d8. "),Object(i.b)("li",{parentName:"ul"},"3\uacfc 1\uc744 \ub354\ud558\uba74 4\uac00 \uc0c8\ub85c \ud0dc\uc5b4\ub098\uace0 3\uacfc 1\uc740 \uadf8\ub300\ub85c \uc788\ub2e4"),Object(i.b)("li",{parentName:"ul"},"\uac12\uc744 \uad00\ub9ac\ud558\uae30 \uc704\ud574\uc11c \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc774 \ub4f1\uc7a5. "))),Object(i.b)("li",{parentName:"ol"},"\uc5f0\uc0b0\uc744 \uae30\ubc18\uc73c\ub85c \ub85c\uc9c1\uc744 \uc804\uac1c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc218\ud559\uc801 \ud504\ub85c\uadf8\ub798\ubc0d\uc740 \uad49\uc7a5\ud788 \ubcf5\uc7a1\ud55c \ub3c4\uba54\uc778\uc758 \uc5f0\uc0b0\uc744 \ud45c\ud604\ud558\uae30 \uc5b4\ub835\ub2e4. ")))),Object(i.b)("h2",{id:"identifier-context"},"Identifier Context"),Object(i.b)("p",null,"heap \uba54\ubaa8\ub9ac\uc5d0 \ub4e4\uc5b4\uac00 \uc788\ub294 \uac1d\uccb4 O \uac00 \uc788\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","A \ub77c\ub294 \ubcc0\uc218\ub3c4 O \ub97c \uac00\ub9ac\ud0a4\uace0,",Object(i.b)("br",{parentName:"p"}),"\n","B \ub77c\ub294 \ubcc0\uc218\ub3c4 O \ub97c \uac00\ub9ac\ud0a4\uba74,",Object(i.b)("br",{parentName:"p"}),"\n","A \uc640 B \ub294 \uac19\ub2e4 \ub77c\uace0 \ud55c\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\ub611\uac19\uc740 \uba54\ubaa8\ub9ac\uc5d0 \uc788\ub294 ",Object(i.b)("em",{parentName:"p"},"\uc8fc\uc18c"),"\ub97c \uac00\ub9ac\ud0b4"),Object(i.b)("h3",{id:"\ud2b9\uc9d5-"},"\ud2b9\uc9d5 ",Object(i.b)("a",{parentName:"h3",href:"https://github.com/pul8219/TIL/issues/26"},"\ud83d\udd17")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\ud558\ub098\uc758 \uc6d0\ubcf8\uc744 \uc0ac\uc6a9\ud558\uace0 \uac1d\uccb4\uc758 \ub0b4\ubd80 \uc0c1\ud0dc\uac00 \ubcc0\ud55c\ub2e4."),Object(i.b)("li",{parentName:"ol"},"\uc0c1\ud0dc \ubcc0\ud654\ub97c \ub0b4\ubd80\uc5d0\uc11c \ucc45\uc784\uc9d0",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc678\ubd80\uc5d0\uc11c \uac1d\uccb4\uc758 \uc0c1\ud0dc\ub97c \uc81c\uc5b4\ud558\uac8c \ub418\uba74 \uc0c1\ud0dc\uc758 \uc77c\uad00\uc131\uc774 \uae68\uc9c4\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\ub09c\uc774\ub3c4\uac00 \uc788\ub2e4."))),Object(i.b)("li",{parentName:"ol"},"\uba54\uc138\uc9c0\ub97c \uae30\ubc18\uc73c\ub85c \ub85c\uc9c1\uc744 \uc804\uac1c ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const a = { a: 3, b: 5 };\nconst b = { a: 3, b: 5};\nconsole.log(a === b); // false, Identifier Context\nconsole.log(JSON.stringify(a) === JSON.stringify(b)); // true, Value Context\n")),Object(i.b)("h2",{id:"\uac1d\uccb4\uc9c0\ud5a5\uc740-\ucca0\uc800\ud558\uac8c-value-context-\ub97c-\ubc30\uc81c\ud55c\ub2e4"},"\uac1d\uccb4\uc9c0\ud5a5\uc740 \ucca0\uc800\ud558\uac8c Value Context \ub97c \ubc30\uc81c\ud55c\ub2e4."),Object(i.b)("p",null,"\ubc18\ub300\ub85c \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c Identifier \ub97c \uc4f0\uba74 \ubc84\uadf8\uac00 \ub098\ud0c0\ub0a0 \uc218 \uc788\ub2e4"),Object(i.b)("p",null,"\uac1d\uccb4\uc9c0\ud5a5\uc5d0\uc11c \uc778\uc790\ub85c primitive \u2192 \ubc84\uadf8 \ubc1c\uc0dd",Object(i.b)("br",{parentName:"p"}),"\n","\uc880 \ub354 \ub098\uc544\uac00"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Number \uac00, \uc5b4\ub5a4 \uac83\uc740 Age \ub85c\uc11c, \uc5b4\ub5a4\uac83\uc740 Money \ub85c\uc368..\ub4f1 \uc774\uc720\ub97c \uc0dd\uac01\ud558\uace0 \uac1d\uccb4\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"\uc0dd\uc131\uc790 \uc778\uc790")," \ub9cc \uc624\ub85c\uc9c0 \uac12\uc744 \ubc1b\uc744 \uc218 \uc788\ub294 \uba54\uc11c\ub4dc\uc774\ub2e4. ")))}p.isMDXComponent=!0},447:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,j=u["".concat(c,".").concat(m)]||u[m]||O[m]||i;return n?a.a.createElement(j,l(l({ref:t},o),{},{components:n})):a.a.createElement(j,l({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);