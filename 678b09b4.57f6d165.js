(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),a=(n(0),n(368)),o={title:"Dependency"},i={unversionedId:"javascript/OOP/OOP_dependency",id:"javascript/OOP/OOP_dependency",isDocsHomePage:!1,title:"Dependency",description:"\uc758\uc874\uc131\uc740 \ubcc0\ud654\uc5d0 \ub300\ud55c \uaca9\ub9ac\uc758 \ubb38\uc81c\uc774\ub2e4",source:"@site/docs/javascript/OOP/OOP_dependency.md",slug:"/javascript/OOP/OOP_dependency",permalink:"/docs/javascript/OOP/OOP_dependency",version:"current",sidebar:"javascript",previous:{title:"Message",permalink:"/docs/javascript/OOP/OOP_message"},next:{title:"Dependency Inversion \uc81c\uc5b4\uc758 \uc5ed\uc804",permalink:"/docs/javascript/OOP/OOP_dependency_inversion"}},p=[{value:"\uac1d\uccb4\uc758 \uc0dd\uba85 \uc8fc\uae30 \uc804\uccb4\uc5d0 \uac78\uce5c \uc758\uc874\uc131 Critical!",id:"\uac1d\uccb4\uc758-\uc0dd\uba85-\uc8fc\uae30-\uc804\uccb4\uc5d0-\uac78\uce5c-\uc758\uc874\uc131-critical",children:[]},{value:"<strong>\uac01 \uc624\ud37c\ub808\uc774\uc158 \uc2e4\ud589 \uc2dc</strong> \uc784\uc2dc\uc801\uc778 \uc758\uc874\uc131",id:"\uac01-\uc624\ud37c\ub808\uc774\uc158-\uc2e4\ud589-\uc2dc-\uc784\uc2dc\uc801\uc778-\uc758\uc874\uc131",children:[]},{value:"\uc758\uc874\uc131\uc774 \ub192\uc73c\uba74",id:"\uc758\uc874\uc131\uc774-\ub192\uc73c\uba74",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\uc758\uc874\uc131\uc740 ",Object(a.b)("strong",{parentName:"p"},"\ubcc0\ud654\uc5d0 \ub300\ud55c \uaca9\ub9ac"),"\uc758 \ubb38\uc81c\uc774\ub2e4"),Object(a.b)("h2",{id:"\uac1d\uccb4\uc758-\uc0dd\uba85-\uc8fc\uae30-\uc804\uccb4\uc5d0-\uac78\uce5c-\uc758\uc874\uc131-critical"},"\uac1d\uccb4\uc758 \uc0dd\uba85 \uc8fc\uae30 \uc804\uccb4\uc5d0 \uac78\uce5c \uc758\uc874\uc131 Critical!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc0c1\uc18d(extends)"),Object(a.b)("li",{parentName:"ul"},"\uc5f0\uad00(association)")),Object(a.b)("h2",{id:"\uac01-\uc624\ud37c\ub808\uc774\uc158-\uc2e4\ud589-\uc2dc-\uc784\uc2dc\uc801\uc778-\uc758\uc874\uc131"},Object(a.b)("strong",{parentName:"h2"},"\uac01 \uc624\ud37c\ub808\uc774\uc158 \uc2e4\ud589 \uc2dc")," \uc784\uc2dc\uc801\uc778 \uc758\uc874\uc131"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc758\uc874(dependency)")),Object(a.b)("h2",{id:"\uc758\uc874\uc131\uc774-\ub192\uc73c\uba74"},"\uc758\uc874\uc131\uc774 \ub192\uc73c\uba74"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\uc218\uc815 \uc5ec\ud30c \uaddc\ubaa8 \uc99d\uac00"),Object(a.b)("li",{parentName:"ol"},"\uc218\uc815\ud558\uae30 \uc5b4\ub824\uc6b4 \uad6c\uc870 \uc0dd\uc131"),Object(a.b)("li",{parentName:"ol"},"\uc21c\ud658 \uc758\uc874\uc131")))}u.isMDXComponent=!0},368:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),O=u(n),d=r,b=O["".concat(o,".").concat(d)]||O[d]||s[d]||a;return n?c.a.createElement(b,i(i({ref:t},l),{},{components:n})):c.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);