(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{276:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return o}));var r=t(3),a=(t(0),t(414));const l={},i={unversionedId:"javascript/javascript/\ub809\uc2dc\uceec \ud658\uacbd",id:"javascript/javascript/\ub809\uc2dc\uceec \ud658\uacbd",isDocsHomePage:!1,title:"\ub809\uc2dc\uceec \ud658\uacbd",description:"\ub809\uc2dc\uceec \ud658\uacbd(Lexical Environment)",source:"@site/docs/javascript/javascript/\ub809\uc2dc\uceec \ud658\uacbd.md",slug:"/javascript/javascript/\ub809\uc2dc\uceec \ud658\uacbd",permalink:"/docs/javascript/javascript/\ub809\uc2dc\uceec \ud658\uacbd",version:"current",sidebar:"javascript",previous:{title:"const, let, var",permalink:"/docs/javascript/javascript/const, let, var"},next:{title:"\ubc18\ud658\ud568\uc218",permalink:"/docs/javascript/javascript/\ubc18\ud658\ud568\uc218"}},c=[{value:"\ub809\uc2dc\uceec \ud658\uacbd \uac1d\uccb4\uc758 \uad6c\uc131",id:"\ub809\uc2dc\uceec-\ud658\uacbd-\uac1d\uccb4\uc758-\uad6c\uc131",children:[{value:"1. \ud658\uacbd \ub808\ucf54\ub4dc(Environment Record)",id:"1-\ud658\uacbd-\ub808\ucf54\ub4dcenvironment-record",children:[]},{value:"2. \uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd(Outer Lexical Environment)\uc5d0 \ub300\ud55c \ucc38\uc870",id:"2-\uc678\ubd80-\ub809\uc2dc\uceec-\ud658\uacbdouter-lexical-environment\uc5d0-\ub300\ud55c-\ucc38\uc870",children:[]}]},{value:"\uc804\uc5ed \ub809\uc2dc\uceec \ud658\uacbd(Global Lexical Environment)",id:"\uc804\uc5ed-\ub809\uc2dc\uceec-\ud658\uacbdglobal-lexical-environment",children:[{value:"let \ubcc0\uc218\uc758 \ub809\uc2dc\uceec \ud658\uacbd",id:"let-\ubcc0\uc218\uc758-\ub809\uc2dc\uceec-\ud658\uacbd",children:[]}]},{value:"\ud568\uc218 \uc120\uc5b8\ubb38\uc758 \ub809\uc2dc\uceec \ud658\uacbd",id:"\ud568\uc218-\uc120\uc5b8\ubb38\uc758-\ub809\uc2dc\uceec-\ud658\uacbd",children:[]},{value:"\ub0b4\ubd80\uc640 \uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd",id:"\ub0b4\ubd80\uc640-\uc678\ubd80-\ub809\uc2dc\uceec-\ud658\uacbd",children:[]},{value:"\ub354 \ubcf4\uba74 \uc88b\uc740\uae00",id:"\ub354-\ubcf4\uba74-\uc88b\uc740\uae00",children:[]}],b={toc:c};function o({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\ub809\uc2dc\uceec-\ud658\uacbdlexical-environment"},"\ub809\uc2dc\uceec \ud658\uacbd(Lexical Environment)"),Object(a.b)("p",null,"= \ub0b4\ubd80 \uc228\uae40 \uc5f0\uad00 \uac1d\uccb4(Internal Hidden Associated Object)"),Object(a.b)("p",null,'Q: \ub809\uc2dc\uceec \uc774\ub984\uc778 \uc774\uc720? "\uc0ac\uc804\uc758" "\uc5b4\ud718\uc758"'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc2e4\ud589\uc911\uc778 \ud568\uc218"),Object(a.b)("li",{parentName:"ul"},"\ucf54\ub4dc \ube14\ub85d {...}"),Object(a.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub9bd\ud2b8 \uc804\uccb4")),Object(a.b)("p",null,"\ub294 \ub0b4\ubd80 \uc228\uae40 \uc5f0\uad00 \uac1d\uccb4\ub97c \uac16\ub294\ub2e4."),Object(a.b)("h2",{id:"\ub809\uc2dc\uceec-\ud658\uacbd-\uac1d\uccb4\uc758-\uad6c\uc131"},"\ub809\uc2dc\uceec \ud658\uacbd \uac1d\uccb4\uc758 \uad6c\uc131"),Object(a.b)("h3",{id:"1-\ud658\uacbd-\ub808\ucf54\ub4dcenvironment-record"},"1. \ud658\uacbd \ub808\ucf54\ub4dc(Environment Record)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc9c0\uc5ed\ubcc0\uc218\ub97c \ud504\ub85c\ud37c\ud2f0\ub85c \uc800\uc7a5\ud558\uace0 \uc788\ub294 \uac1d\uccb4"),Object(a.b)("li",{parentName:"ul"},"this \uac12\uacfc \uac19\uc740 \uae30\ud0c0 \uc815\ubcf4\ub3c4 \uc800\uc7a5\ub41c\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ubcc0\uc218\ub294 \ud2b9\uc218 \ub0b4\ubd80 \uac1d\uccb4\uc778 \ud658\uacbd \ub808\ucf54\ub4dc\uc758 \ud504\ub85c\ud37c\ud2f0\uc77c \ubfd0\uc774\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ubcc0\uc218\ub97c \uac00\uc838\uc624\uac70\ub098 \ubcc0\uacbd\ud558\ub294 \uac83 = \ud658\uacbd \ub808\ucf54\ub4dc\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \uac00\uc838\uc624\uac70\ub098 \ubcc0\uacbd\ud558\ub294 \uac83.\n")),Object(a.b)("h3",{id:"2-\uc678\ubd80-\ub809\uc2dc\uceec-\ud658\uacbdouter-lexical-environment\uc5d0-\ub300\ud55c-\ucc38\uc870"},"2. \uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd(Outer Lexical Environment)\uc5d0 \ub300\ud55c \ucc38\uc870"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc678\ubd80 \ucf54\ub4dc(\uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd)\uc640 \uc5f0\uacb0\ub428.\n")),Object(a.b)("h2",{id:"\uc804\uc5ed-\ub809\uc2dc\uceec-\ud658\uacbdglobal-lexical-environment"},"\uc804\uc5ed \ub809\uc2dc\uceec \ud658\uacbd(Global Lexical Environment)"),Object(a.b)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8 \uc804\uccb4\uc640 \uad00\ub828\ub41c \ub809\uc2dc\uceec \ud658\uacbd"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"let phrase = 'hello';")," "),Object(a.b)("li",{parentName:"ul"},"lexical environment : ",Object(a.b)("inlineCode",{parentName:"li"},"phrase: 'hello'")),Object(a.b)("li",{parentName:"ul"},"outer Lexical Environment \ucc38\uc870: ",Object(a.b)("inlineCode",{parentName:"li"},"null"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\uc804\uc5ed \ub809\uc2dc\uceec \ud658\uacbd\uc740 \uc678\ubd80 \ucc38\uc870\ub97c \uac16\uc9c0 \uc54a\ub294\ub2e4.")))),Object(a.b)("h3",{id:"let-\ubcc0\uc218\uc758-\ub809\uc2dc\uceec-\ud658\uacbd"},"let \ubcc0\uc218\uc758 \ub809\uc2dc\uceec \ud658\uacbd"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"                          Lexical Environment              outer Lexical Env\n1. execution ------------\x3e  phrase: <uninitialized>\n2. let phrase -----------\x3e  phrase: undefined\n3. phrase = 'hello' -----\x3e  phrase: 'hello'            ---\x3e null\n4. phrase = 'bye' -------\x3e  phrase: 'bye'\n")),Object(a.b)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc2dc\uc791"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub9bd\ud2b8 \ub0b4 \uc120\uc5b8\ub41c \ubcc0\uc218 \uc804\uccb4\uac00 \ub809\uc2dc\uceec \ud658\uacbd\uc5d0 \uc62c\ub77c\uac04\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ubcc0\uc218\uc758 \uc0c1\ud0dc\ub294 \ud2b9\uc218 \ub0b4\ubd80\uc0c1\ud0dc(Special Internal State)\uc778 'uninitialized' ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"JS \uc5d4\uc9c4\uc740 uninitialized \uc0c1\ud0dc\uc758 \ubcc0\uc218\ub97c \uc778\uc9c0\ud558\uc9c0\ub9cc, let \uc744 \ub9cc\ub098\uae30 \uc804\uae4c\uc9c0\ub294 \uc774 \ubcc0\uc218\ub97c \ucc38\uc870\ud560 \uc218 \uc5c6\ub2e4.\n")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ub809\uc2dc\uceec \ud658\uacbd\uc740 \uba85\uc138\uc11c\uc5d0\ub9cc \uc874\uc7ac\ud55c\ub2e4.  "),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",{parentName:"pre"},"- \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc124\uba85\ud558\ub294\ub370 \uc4f0\uc774\ub294 \uc774\ub860\uc0c1\uc758 \uac1d\uccb4  \n- \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc9c1\uc811 \ub809\uc2dc\uceec \ud658\uacbd\uc744 \uc5bb\uac70\ub098 \uc870\uc791\ud558\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\n"))),Object(a.b)("h2",{id:"\ud568\uc218-\uc120\uc5b8\ubb38\uc758-\ub809\uc2dc\uceec-\ud658\uacbd"},"\ud568\uc218 \uc120\uc5b8\ubb38\uc758 \ub809\uc2dc\uceec \ud658\uacbd"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc77c\ubc18 \ubcc0\uc218\uc640\ub294 \ub2ec\ub9ac \ubc14\ub85c \ucd08\uae30\ud654 \ub41c\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ub809\uc2dc\uceec \ud658\uacbd\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\ub294 \uc989\uc2dc \uc0ac\uc6a9 \uac00\ub2a5"),Object(a.b)("li",{parentName:"ul"},"\uc120\uc5b8 \ub418\uae30\uc804\uc5d0\ub3c4 \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\uc720.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"                           Lexical Environment\nexecution start --------\x3e  phrase: <uninitialized>\n                           say: function\nlet phrase = 'hello'                ...\nfunction say(name) {                ...\n    alert(...)                      ...\n}\n")),Object(a.b)("h2",{id:"\ub0b4\ubd80\uc640-\uc678\ubd80-\ub809\uc2dc\uceec-\ud658\uacbd"},"\ub0b4\ubd80\uc640 \uc678\ubd80 \ub809\uc2dc\uceec \ud658\uacbd"),Object(a.b)("p",null,"\ud568\uc218\ub97c ",Object(a.b)("inlineCode",{parentName:"p"},"\ud638\ucd9c"),"\ud574 \uc2e4\ud589\ud558\uba74 ",Object(a.b)("inlineCode",{parentName:"p"},"\uc0c8\ub85c\uc6b4 \ub809\uc2dc\uceec \ud658\uacbd"),"\uc774 \uc790\ub3d9\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \uc9c4\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"\ub9e4\uac1c\ubcc0\uc218")),Object(a.b)("li",{parentName:"ul"},"\ud568\uc218\uc758 ",Object(a.b)("inlineCode",{parentName:"li"},"\uc9c0\uc5ed\ubcc0\uc218"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"let phrase = 'hello';\n                                           Lexical Environment          outer Lexical Environment\nfunction say(name) {                  ---  \n    alert(`${phrase}`, ${name}`);       |-  name: \"John\"    --------\x3e   say: function                    --------\x3e null\n}                                     ---                               phrase: 'hello'\n\nsay('John');\n")),Object(a.b)("p",null,"\ud568\uc218\uac00 \ud638\ucd9c\uc911\uc778 \ub3d9\uc548, \ud638\ucd9c\uc911\uc778 \ud568\uc218\ub97c \uc704\ud55c \ub809\uc2dc\uceec \ud658\uacbd 2\uac00\uc9c0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ub0b4\ubd80 \ub809\uc2dc\uceec \ud658\uacbd"),Object(a.b)("li",{parentName:"ul"},"\ub0b4\ubd80 \ub809\uc2dc\uceec \ud658\uacbd\uc774 \uac00\ub9ac\ud0a4\ub294 \uc678\ubd80(\uc804\uc5ed) \ub809\uc2dc\uceec \ud658\uacbd")),Object(a.b)("h2",{id:"\ub354-\ubcf4\uba74-\uc88b\uc740\uae00"},"\ub354 \ubcf4\uba74 \uc88b\uc740\uae00"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://catsbi.oopy.io/fffa6930-ca30-4f7e-88b6-28011fde5867"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub3d9\uc791 \uc6d0\ub9ac")," ")),Object(a.b)("p",null,"Reference\n-- "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"KoJavaScriptInfo")))}o.isMDXComponent=!0},414:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},j={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,O=p["".concat(i,".").concat(m)]||p[m]||j[m]||l;return t?a.a.createElement(O,c(c({ref:n},o),{},{components:t})):a.a.createElement(O,c({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=t[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);