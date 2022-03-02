(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{210:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return i})),t.d(e,"default",(function(){return p}));var r=t(3),o=(t(0),t(454));const a={},c={unversionedId:"javascript/asynchronous_programming/\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815",id:"javascript/asynchronous_programming/\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815",isDocsHomePage:!1,title:"\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815",description:"\ube0c\ub77c\uc6b0\uc800\uc758 JS \ucf54\ub4dc \uc2e4\ud589\uacfc\uc815",source:"@site/docs/javascript/asynchronous_programming/\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815.md",slug:"/javascript/asynchronous_programming/\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815",permalink:"/docs/javascript/asynchronous_programming/\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815",version:"current",sidebar:"javascript",previous:{title:"Sync Async",permalink:"/docs/javascript/asynchronous_programming/Sync Async"},next:{title:"\ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d",permalink:"/docs/javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d"}},i=[],s={toc:i};function p({components:n,...e}){return Object(o.b)("wrapper",Object(r.a)({},s,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\ube0c\ub77c\uc6b0\uc800\uc758-js-\ucf54\ub4dc-\uc2e4\ud589\uacfc\uc815"},"\ube0c\ub77c\uc6b0\uc800\uc758 JS \ucf54\ub4dc \uc2e4\ud589\uacfc\uc815"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"## Motivation - \ud0c0\uc774\uba38 API\n\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1c\ub150\uc774 \uc544\ub2cc \ube0c\ub77c\uc6b0\uc800\uc640 node.js \uc5d0\uc11c \ubd80\ud130 \uc654\ub2e4. \n      \nsetTimeout \n- \uc778\uc790 (callback, msTime) : msTime \ud6c4\uc5d0 callback \uc2e4\ud589\n- msTime : callback \uc774 \uc2e4\ud589\uc758 \ucd5c\uc18c \ub300\uae30\uc2dc\uac04, \uc9c0\uc5f0\ub420 \uc218 \uc788\ub2e4.\n\nsetInterval \n- msTime \uc744 1000ms \uc774\ud558\ub85c \uc9c0\uc815\ud558\uc600\uc744 \ub54c\n    - \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub530\ub77c msTime \uc744 \uac15\uc81c\ub85c set \uc2dc\ud0a8\ub2e4. \n    - \ud06c\ub86c\uc758 \uacbd\uc6b0, 1000ms \uc73c\ub85c set \ud55c\ub2e4.\n\n\uc5ec\uae30\uc11c \uc65c setTimeout \uc758 \uc77c\uc815\uc2dc\uac04\uc744 \uc9c0\ud0a4\uc9c0 \uc54a\uace0 \uc9c0\uc5f0\ub418\uc5b4 \uc2e4\ud589\ub418\ub294 \uc774\uc720\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc54c\uc544\ubcf4\uc790.\n\n\n## \ube0c\ub77c\uc6b0\uc800\uc758 JavaScript \ucf54\ub4dc \uc2e4\ud589 \uacfc\uc815\n### \ud638\ucd9c \uc2a4\ud0dd (Call Stack)\nJS \uc5d4\uc9c4\uc740 \ud568\uc218 \ud638\ucd9c \uad00\ub828\uc815\ubcf4\ub97c \ucf5c\uc2a4\ud0dd\uc5d0\uc11c \uad00\ub9ac\ud55c\ub2e4.\n\n```javascript\nfunction add(x, y) {\n  return x + y;\n}\n\nfunction add2(x) {\n  return add(x, 2); // `add`\ub97c \ud638\ucd9c\n}\n\nfunction add2AndPrint(x) {\n  const result = add2(x); // `add2`\ub97c \ud638\ucd9c\n  console.log(result); // `console.log`\ub97c \ud638\ucd9c\n}\n\nadd2AndPrint(3); // `add2AndPrint`\ub97c \ud638\ucd9c\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'\uc704 \ucf54\ub4dc\uc758 \ud638\ucd9c\uc2a4\ud0dd \uc0c1\ud0dc \ubcc0\ud654\ub294 \uc544\ub798\uc640 \uac19\ub2e4.  \n \n<img src="https://user-images.githubusercontent.com/31977543/91665967-54b20100-eb34-11ea-87fb-0db6b7b7b4fa.png" style="width: 200px"/>\n<img src="https://user-images.githubusercontent.com/31977543/91665973-61cef000-eb34-11ea-8418-f8d9b1ca4429.png" style="width: 200px"/>\n<img src="https://user-images.githubusercontent.com/31977543/91665980-70b5a280-eb34-11ea-8e4e-2c9d0f5dad78.png" style="width: 200px"/>\n<img src="https://user-images.githubusercontent.com/31977543/91665973-61cef000-eb34-11ea-8418-f8d9b1ca4429.png" style="width: 200px"/>\n<img src="https://user-images.githubusercontent.com/31977543/91665967-54b20100-eb34-11ea-87fb-0db6b7b7b4fa.png" style="width: 200px"/>\n\n### \uc2e4\ud589 \ub9e5\ub77d (Execution context)\ncall stack \uc5d0 \uc800\uc7a5\ub418\ub294 \uac01 \ud56d\ubaa9\n\n#### Execution Context \uc758 \uc694\uc18c\ub4e4\n[\ub809\uc2dc\uceec \ud658\uacbd](./\ub809\uc2dc\uceec%20\ud658\uacbd) (\uc5b4\ud718\ud658\uacbd)\n\n- Environment Record\n    - \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubcc0\uc218 \n    - this \uac00 \uac00\ub9ac\uce58\ub294 \uac1d\uccb4 \n- outer Lexical Environment \n\n### \ube0c\ub77c\uc6b0\uc800\uac00 JavaScript \ucf54\ub4dc\ub97c \uc2e4\ud589\ud560 \ub54c, \ud638\ucd9c \uc2a4\ud0dd\uc758 \ubcc0\ud654\n1. \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub85c\ub4dc \ud560 \ub54c\n    - **\uc804\uc5ed\uc2e4\ud589\ub9e5\ub77d(Global Execution Context)** \uc744 \ud638\ucd9c \uc2a4\ud0dd\uc5d0 push\n1. \ud568\uc218\uac00 \ud638\ucd9c \ub420 \ub54c\n    - \ud568\uc218 \ud638\ucd9c\uc758 \uc2e4\ud589 \ub9e5\ub77d \uc0dd\uc131\n    - **\ud568\uc218 \ud638\ucd9c\uc758 \uc2e4\ud589 \ub9e5\ub77d**\uc744 \ud638\ucd9c \uc2a4\ud0dd\uc5d0 push\n1. \ud568\uc218\uc758 \uc2e4\ud589\uc774 \ub05d\ub0a0 \ub54c\n    - \uacb0\uacfc\uac12 \ubc18\ud658\n    - \ud638\ucd9c \uc2a4\ud0dd\uc758 \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \uc2e4\ud589 \ub9e5\ub77d pop\n1. \uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc2e4\ud589\uc774 \ubaa8\ub450 \ub05d\ub0a0 \ub54c\n    - \uc804\uc5ed \uc2e4\ud589 \ub9e5\ub77d\uc744 \ud638\ucd9c \uc2a4\ud0dd\uc5d0\uc11c pop\n    \n\uc6f9 \ube0c\ub77c\uc6b0\uc800\ub294 \ud638\ucd9c \uc2a4\ud0dd\uc5d0 \uc2e4\ud589 \ub9e5\ub77d\uc774 \uc874\uc7ac\ud558\ub294 \ub3d9\uc548(\uc2e4\ud589 \uc911\uc778 \ud568\uc218\uac00 \uc874\uc7ac\ud558\ub294 \ub3d9\uc548) \uba39\ud1b5\uc774 \ub41c\ub2e4.\n- \uba39\ud1b5\uc774 \ub418\ub294 \uc2dc\uac04\uc5d0 \ub530\ub77c\uc11c, blocking, nonblocking \uc744 \uad6c\ubd84\ud55c\ub2e4.\n- \ube0c\ub77c\uc6b0\uc800\uc758 \uc8fc\uc0ac\uc728, \ubcf4\ud1b5 60fps, \ub300\ub7b5 16 ms \uc548\uc5d0 \ucf54\ub4dc \uc2e4\ud589\uc744 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc73c\uba74\n    - \ube0c\ub77c\uc6b0\uc800 \ub0b4 \uc560\ub2c8\ub9e4\uc774\uc158\uc774 \ub69d\ub69d \ub04a\uae30\ub294 \ud604\uc0c1\n    - \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc5d0 \uc545\uc601\ud5a5\n\n### \uc791\uc5c5 \ud050 (Task Queue)\n\uc791\uc5c5 \ud050\uc5d0\ub294 blocking \uc774 \ub418\uc5b4 \ucc98\ub9ac\ud558\ub294 \uac83\uc774 \uc5b4\ub824\uc6b4 \uc77c\ub4e4\uc774 \ub4e4\uc5b4\uac04\ub2e4.\n- event \ub97c \uae30\ub2e4\ub9ac\ub294 \uc77c\n- \uacc4\uc0b0\uc774 \uc624\ub798\uac78\ub9ac\ub294 \uc791\uc5c5\n- \uc2a4\ud06c\ub9bd\ud2b8\ub098 \ubaa8\ub4c8\uc744 \ub85c\ub529\ud558\ub294 \ub3d9\uc791\n\n### \ube0c\ub77c\uc6b0\uc800\uc758 \ud589\ub3d9 : \uc774\ubca4\ud2b8 \ub8e8\ud504 (Event Loop)\n\ube0c\ub77c\uc6b0\uc800\uac00 \uc544\ub798 \ud589\ub3d9\uc744 \ub04a\uc784 \uc5c6\uc774 \ubc18\ubcf5\ud558\ub294 \uac83\uc744 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub77c\uace0 \ubd80\ub978\ub2e4.\n\n1. \ud0dc\uc2a4\ud06c \ucc98\ub9ac \uc704\uc784\n    - From : JS \uc5d4\uc9c4\n    - To : API \ub97c \ud1b5\ud574(TODO)\n        - \ube0c\ub77c\uc6b0\uc800 \ud639\uc740 Web Worker(message \uc774\ubca4\ud2b8\uc5d0 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ub4f1\ub85d) \uc5d0 \uc704\uc784 `async`\n        - \ud0dc\uc2a4\ud06c\uac00 \ub05d\ub098\uba74 \uc2e4\ud589\uc2dc\ud0ac `\ucf5c\ubc31` \ub4f1\ub85d\n1. \uc704\uc784\ub41c \ud0dc\uc2a4\ud06c\uac00 \ub05d\ub0a8\n    - \ud0dc\uc2a4\ud06c\uc758 **\ubc18\ud658\uac12**\uacfc **\ucf5c\ubc31**\uc744 \uc791\uc5c5 \ud050(task queue) \uc5d0 \ucd94\uac00\n1. \ube0c\ub77c\uc6b0\uc800\ub294 \ud638\ucd9c \uc2a4\ud0dd\uc774 \ube44\uc6cc\uc9c8 \ub54c \ub9c8\ub2e4\n    - \uc791\uc5c5 \ud050\uc5d0\uc11c \uac00\uc7a5 \uc624\ub798\ub41c \uc791\uc5c5\uc744 \uaebc\ub0b8\ub2e4.\n    - \uc791\uc5c5\uc5d0 \ub300\ud55c \ucf5c\ubc31\uc744 \uc2e4\ud589 \uc2dc\ud0a8\ub2e4. \n\n<embed src="https://helloworldjavascript.net/images/eventloop.svg" onload="onKSLoad(this)" data-loop="">\n\n### \ud638\ucd9c \uc2a4\ud0dd\uacfc \uc791\uc5c5 \ud050\uc758 \uc131\uc9c8\n1. \ud638\ucd9c \uc2a4\ud0dd\uc774 \ube44\uc6cc\uc838\uc57c Task Queue \uc758 \ub2e4\uc74c \ud0dc\uc2a4\ud06c\uac00 \uc2e4\ud589\ub41c\ub2e4.\n1. \uac01 \ud0dc\uc2a4\ud06c \uc0ac\uc774\uc5d0 \ube0c\ub77c\uc6b0\uc800\ub294 \ud654\uba74\uc744 \uc0c8\ub85c \uadf8\ub9b4 \uc218 \uc788\ub2e4.\n    - \ud638\ucd9c\uc2a4\ud0dd\uc774 \ube44\uc6cc\uc9c8 \ub54c\n\nReference\n-- \n- https://helloworldjavascript.net/pages/285-async.html\n\n')))}p.isMDXComponent=!0},454:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=o.a.createContext({}),u=function(n){var e=o.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=u(n.components);return o.a.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),l=u(t),d=r,b=l["".concat(c,".").concat(d)]||l[d]||m[d]||a;return t?o.a.createElement(b,i(i({ref:e},p),{},{components:t})):o.a.createElement(b,i({ref:e},p))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);