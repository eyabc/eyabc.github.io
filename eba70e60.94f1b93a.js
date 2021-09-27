(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{394:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var r=t(3),a=(t(0),t(415));const l={title:null},c={unversionedId:"javascript/etc/caller_callee",id:"javascript/etc/caller_callee",isDocsHomePage:!1,title:"caller_callee",description:"(2013)",source:"@site/docs/javascript/etc/caller_callee.md",slug:"/javascript/etc/caller_callee",permalink:"/docs/javascript/etc/caller_callee",version:"current",sidebar:"javascript",previous:{title:"eval",permalink:"/docs/javascript/etc/eval"},next:{title:"typeof",permalink:"/docs/javascript/etc/typeof"}},o=[{value:"function.arguments.callee",id:"functionargumentscallee",children:[]},{value:"functionName.caller",id:"functionnamecaller",children:[]}],i={toc:o};function u({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://blog.naver.com/PostView.nhn?blogId=mrshin2000&logNo=130177264976"},"\ud83d\udd17")," (2013)\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments/caller"},"\ud83d\udd17"),"\n\uc131\ub2a5\uc5d0 \uc88b\uc9c0 \uc54a\ub2e4."),Object(a.b)("h2",{id:"functionargumentscallee"},"[function.]","arguments.callee"),Object(a.b)("p",null,"\uc9c0\uc815\ub41c function \uac1c\uccb4\uc758 \ubcf8\ubb38\uc5d0 \ud574\ub2f9\ud558\ub294 \uc2e4\ud589\uc911\uc778 Function \uac1c\uccb4\ub97c \ubc18\ud658"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"function")," \ud604\uc7ac \uc2e4\ud589\uc911\uc778 Function \uac1c\uccb4\uc758 \uc774\ub984"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"callee")," \uad00\ub828\ub41c \ud568\uc218\uac00 \uc2e4\ud589\ub420 \ub54c\ub9cc \uc0ac\uc6a9\uac00\ub2a5\ud55c arguments \uac1c\uccb4\uc758 \uba64\ubc84",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ucd08\uae30 \uac12: \uc2e4\ud589\uc911\uc778 Function \uac1c\uccb4"),Object(a.b)("li",{parentName:"ul"},"\uc775\uba85 \ud568\uc218\uc758 \uc7ac\uadc0\ub97c \ud5c8\uc6a9")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"function factorial(n) {\n    if (n <= 0) return 1;\n    else\n        return n * arguments.callee(n - 1)\n}\n")),Object(a.b)("h2",{id:"functionnamecaller"},"functionName.caller"),Object(a.b)("p",null,"\ud604\uc7ac \ud568\uc218\ub97c \ud638\ucd9c\ud55c \ud568\uc218\ub97c \uac00\uc838\uc634"),Object(a.b)("p",null,"\ud568\uc218\uac00 \uc2e4\ud589\uc911\uc778 \uacbd\uc6b0\uc5d0\ub9cc \ud574\ub2f9 \ud568\uc218\uc5d0 \ub300\ud574 \uc815\uc758\ub428"),Object(a.b)("p",null,"\ub9e8 \uc704 \uc218\uc900\uc5d0\uc11c \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 caller \ub294 null \uc744 \ud3ec\ud568\ud55c\ub2e4."),Object(a.b)("p",null,"caller \uc18d\uc131\uc744 \ubb38\uc790\uc5f4 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc0ac\uc6a9\ud558\uba74 functionName.toString\uacfc \uac19\uc740 \uacb0\uacfc\uac00 \ub098\uc628\ub2e4."),Object(a.b)("p",null,"\ud568\uc218\uc758 \uc5ed\ucef4\ud30c\uc77c\ub41c \ud14d\uc2a4\ud2b8\uac00 \ud45c\uc2dc\ub428."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"function whoCalled() {\n   if (whoCalled.caller == null)\n      console.log('I was called from the global scope.');\n   else\n      console.log(whoCalled.caller + ' called me!');\n}\nconsole.log(whoCalled());\n")))}u.isMDXComponent=!0},415:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(t),f=r,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||l;return t?a.a.createElement(m,o(o({ref:n},u),{},{components:t})):a.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<l;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);