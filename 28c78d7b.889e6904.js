(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return a})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return p}));var r=t(3),c=t(7),o=(t(0),t(377)),i={},a={unversionedId:"javascript/asynchronous_programming/Sync Async",id:"javascript/asynchronous_programming/Sync Async",isDocsHomePage:!1,title:"Sync Async",description:"Sync Async",source:"@site/docs/javascript/asynchronous_programming/Sync Async.md",slug:"/javascript/asynchronous_programming/Sync Async",permalink:"/docs/javascript/asynchronous_programming/Sync Async",version:"current",sidebar:"javascript",previous:{title:"5. \uc2e4\uc804 \ucf54\ub4dc\uc870\uac01",permalink:"/docs/javascript/functional_programming/5_\uc2e4\uc804\ucf54\ub4dc\uc870\uac01"},next:{title:"\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815",permalink:"/docs/javascript/asynchronous_programming/\ube0c\ub77c\uc6b0\uc800\uc758 JS \uc2e4\ud589\uacfc\uc815"}},s=[{value:"Sync",id:"sync",children:[{value:"Sync Flow",id:"sync-flow",children:[]}]}],l={toc:s};function p(n){var e=n.components,t=Object(c.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"sync-async"},"Sync Async"),Object(o.b)("h2",{id:"sync"},"Sync"),Object(o.b)("h3",{id:"sync-flow"},"Sync Flow"),Object(o.b)("p",null,"\uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ub41c \uba85\ub839\uc774 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub428"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ud3f0\ub178\uc774\ub9cc \uba38\uc2e0 "),Object(o.b)("li",{parentName:"ul"},"\ud55c\ubc88 \ubc1c\ub3d9\uc774 \ub418\uba74 \uad00\uc5ec\ud560 \uc218 \uc5c6\ub2e4. ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'<img src="https://user-images.githubusercontent.com/31977543/92357083-39418a00-f122-11ea-9f3b-b42c5792094a.png" style="height: 150px;"/>\n\n### Sync Flow Control\nGoto \ub97c \ud1b5\ud574 \uba85\ub839\uc758 \uc704\uce58\ub97c \uc774\ub3d9\n\n- \uc81c\uc5b4\ud615 \uc5b8\uc5b4 \ub4e4\uc5d0\uc11c if \ub098 for \ub4f1\uc73c\ub85c goto \ub97c \ucd94\uc0c1\ud654\n\n<img src="https://user-images.githubusercontent.com/31977543/92357175-5e35fd00-f122-11ea-91d8-81b2db852a68.png" style="height: 150px; "/>\n\n### Sub Flow\n\ud568\uc218 \ub4f1\uc744 \ud1b5\ud574 \ubcc4\ub3c4\uc758 \uba85\ub839\uc14b\uc744 \uc5ec\ub7ec\ubc88 \uc2e4\ud589\ud568\n\n<img src="https://user-images.githubusercontent.com/31977543/92357852-7fe3b400-f123-11ea-8b49-90bd6b7599c6.png" style="height: 150px; "/>\n<img src="https://user-images.githubusercontent.com/31977543/92357862-8540fe80-f123-11ea-881d-56e18d0e0b5d.png" style="height: 150px; "/>\n<img src="https://user-images.githubusercontent.com/31977543/92357870-8a05b280-f123-11ea-9a1d-ef778695bd10.png" style="height: 150px; "/>\n\n## Blocking & NonBlocking\n### Blocking\nSync Flow \uac00 \uc2e4\ud589\ub418\ub294 \ub3d9\uc548 \ub2e4\ub978 \uc77c\uc744 \ud560 \uc218 \uc5c6\ub294 \ud604\uc0c1\n\n\ud3f0 \ub178\uc774\ub9cc \uba38\uc2e0\uc740, \uba85\ub839\uc5b4\ub97c \uc801\uc7ac\ud558\uace0 \ud574\uc18c\ud558\ub294 \uc0ac\uc774\uc5d0 CPU \uac00 \uba39\ud1b5\uc774 \ub418\uc5b4 \ub2e4\ub978 \uc77c\uc744 \ud560 \uc218 \uc5c6\ub2e4.\n\n<img src="https://user-images.githubusercontent.com/31977543/92358452-70b13600-f124-11ea-8ecb-d2adcc79d495.png" style="height: 150px; "/>\n\n\uc608\ub97c \ub4e4\uc5b4, \uba40\ud2f0 \ud0dc\uc2a4\ud0b9\uc774 \uc548\ub418\uae30 \ub54c\ubb38\uc5d0 UI \uac00 \uc751\ub2f5\uc744 \uc548\ud558\ub294 \ud604\uc0c1\uc774 \uc0dd\uae38 \uc218 \uc788\ub2e4.\n\n#### blocking \uc904\uc774\uae30\n1. sync flow \ub97c \uc9e7\uac8c \ud558\uae30\n    - sync flow \ub97c \uc9e7\uac8c \uc9dc\ub294 \uac83\uc740 \ubc14\ub78c\uc9c1\ud558\uc9c0\ub9cc \ubd88\uac00\ub2a5 \ud558\ub2e4.\n    - 7\uc904\uc774 \uc788\ub294 \uc774\uc720\uac00 \uc788\ub294 \ucf54\ub4dc\ub97c 4 \uc904\ub85c \ubc14\uafe8\uc744 \ub54c, \uae30\ub2a5\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \ubc14\ub78c\uc9c1 \ud558\uc9c0 \uc54a\ub2e4.\n    \n    <img src="https://user-images.githubusercontent.com/31977543/92358731-ee754180-f124-11ea-8fea-6190bec66e3d.png" style="height: 150px; "/>\n\n2. \ub2e4\ub978 \uc4f0\ub808\ub4dc\uc5d0 syncflow \ub97c \ub5a0\ub118\uae34\ub2e4.\n\n    <img src="https://user-images.githubusercontent.com/31977543/92359029-7eb38680-f125-11ea-9937-8a32f75942a5.png" style="height: 150px; "/>\n    <img src="https://user-images.githubusercontent.com/31977543/92359037-83783a80-f125-11ea-9976-d16b379c38b5.png" style="height: 150px; "/>\n    \n    - \uc4f0\ub808\ub4dc \ud558\ub098 \ub2f9 Blocking \uae30\uac04\uc774 \uc9e7\uc544\uc9c4\ub2e4.\n    - \uc4f0\ub808\ub4dc\ub294 \ubcc4\ub3c4\ub85c \uc791\ub3d9\ud558\uae30 \ub54c\ubb38\uc5d0 \uac01\uac01\uc758 \uc4f0\ub808\ub4dc\uac00 \ub05d\ub098\ub294 \uc2dc\uac04\uc774 \ub3d9\uae30\ud654 \ub418\uc9c0 \uc54a\ub294\ub2e4. \n    - \ub2e4\ub978 \uc4f0\ub808\ub4dc\uc758 \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uba74 \uc6d0\ub798 \uc4f0\ub808\ub4dc\uc5d0 \ubcf4\uace0\ud574\uc57c \ud55c\ub2e4.\n    \n        <img src="https://user-images.githubusercontent.com/31977543/92359478-46f90e80-f126-11ea-886c-f1d0cc2ab2eb.png" style="height: 150px; "/>\n \n### Non Blocking\nSync Flow \uac00 \ub0a9\ub4dd\ud560 \ub9cc\ud55c \uc2dc\uac04 \ub0b4\uc5d0 \uc885\ub8cc\ub418\ub294 \uac83\n\n\uae30\uc900\uc5d0 \uc0c1\ub300\uc801\uc774\ub2e4.\n\n\uc608\ub97c\ub4e4\uc5b4, \n- \uad6c\uad6c\ub2e8\uc758 \ub3cc\uc544\uac00\ub294 \ucf54\ub4dc\ub294 81\ubc88\uc758 \ub8e8\ud504\n    - nonBlocking ? Blocking ?\n    - \ub290\ub9b0 \ucef4\ud4e8\ud130\uc5d0\uc11c \uba39\ud1b5 -> Blocking\n    - \uc694\uc998 \ubcf4\ud3b8\uc801\uc73c\ub85c \uc4f0\uace0 \uc788\ub294 \ucef4\ud4e8\ud130 \uae30\uc900 -> nonBlocking\n    \n- FrontEnd \n    - 60 fps \uae30\uc900 : 1 \ud504\ub808\uc784\ub2f9 16ms \uc774\ud558 -> 60 fps \uac00\ub2a5\n        - 16 ms * 60 => 960ms (\uc57d 1\ucd08)\n    - \ucd5c\uadfc, \ubaa8\ub2c8\ud130 \uc8fc\uc0ac\uc728 144 Hz \ub97c \ub118\uace0 \uc788\ub2e4.\n     \n## Async\n\n### Sync \uc640 Async \uc758 \ucc28\uc774\uc810 \ubc0f \ub2e8\uc810\n\uba40\ud2f0\uc4f0\ub808\ub4dc, \ube44\ub3d9\uae30 \ud504\ub808\uc784 \ud558\uace0\ub3c4 \uad00\uacc4\uac00 \uc5c6\ub2e4.\n\n`Sync` \uc11c\ube0c\ub8e8\ud2f4\uc774 \uc989\uc2dc \uac12\uc744 \ubc18\ud658\n\n`Async` \uc11c\ube0c\ub8e8\ud2f4\uc774 \ub2e4\ub978 \uc218\ub2e8\uc73c\ub85c \uac12\uc744 \ubc18\ud658\n\n|  | Sync | Async \ub2e8\uc810 |\n|---|---|---|\n|\uc11c\ube0c\ub8e8\ud2f4\uc758 \ubc18\ud658 | \uc989\uc2dc \uac12 \ubc18\ud658 | \ub2e4\ub978 \uc218\ub2e8\uc73c\ub85c \uac12 \ubc18\ud658.  - \uc989\uc2dc \ubc18\ud658\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ud604\uc7ac\uc758 sync flow \uac00 \uc885\ub8cc\ub428|\n|\ud604\uc7ac \uc5b4\ud718\uacf5\uac04 \uc0ac\uc6a9 | O | X (\ud074\ub85c\uc800\ub098, \ubcf5\uc7a1\ud55c \uc2a4\ucf54\ud504 \uc0ac\uc6a9\ud574\uc57c\ud568) - \uc694\uccad \uc2dc\uc758 \uc5b4\ud718\uacf5\uac04\uc744 \ubcc4\ub3c4\ub85c \uacb0\uacfc\uc2dc\uc810\uc5d0 \uc804\ub2ec\ud560 \ubd80\uac00\uc7a5\uce58 \ud544\uc694. |\n\n### Async \uc7a5\uc810\n\uacb0\uacfc\uac00 \uc8fc\uc5b4\uc9c0\ub294\ub370 \uc2dc\uac04\uc774 \uac78\ub9ac\ub354\ub77c\ub3c4 \n\uadf8 \uc2dc\uac04 \ub3d9\uc548 \ub2e4\ub978 \uc791\uc5c5\uc744 \ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc790\uc6d0\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\n\n### Async \uac00 \uac12\uc744 \ubc18\ud658\ud558\ub294 \uc218\ub2e8\n1. Promise\n    - fetch \ub294 \uac12\uc744 \ubc14\ub85c \ubc18\ud658\ud558\uc9c0 \uc54a\uace0 Promise \ub85c \ubc18\ud658\uc744 \ud55c\ub2e4.\n2. callback function\n3. iterations\n\n## Sync \uc758 \uc7a5\uc810 + Async \uc758 \uc7a5\uc810\nSync \uc758 \uc7a5\uc810\n- \ud604\uc7ac \uc5b4\ud718\uacf5\uac04 \uc0ac\uc6a9 \n\nAsync \uc758 \uc7a5\uc810\n- \ubcd1\ub82c\ucc98\ub9ac\ub85c \uc790\uc6d0\uc758 \ud6a8\uc728\uc801 \uc0ac\uc6a9\n\n=> sync \ub85c\uc9c1\uc73c\ub85c async \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c\ud568\n\n`Continuation` async flow \uc5d0\uc11c, sync flow \uc758 \uc0c1\ud0dc\ub97c \uae30\uc5b5\ud558\uc5ec \uc774\uc5b4\uc8fc\ub294 \uc7a5\uce58\n\n`CPS (Continuation Passing Style)` \n- Continuation \uc744 \ud65c\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uc2a4\ud0c0\uc77c\n- Generator, async, asynchronous Iterators \n\n### Non Blocking For\nBlocking \uc744 \uc904\uc774\uba74\uc11c Sync \ub97c \uc774\uc6a9\ud558\ub294 \uac83.\n\n### Blocking sync\nsync \ud568\uc218, working() \uc774 \ubb34\uac70\uc6b0\uba74 blocking \uc774 \ub41c\ub2e4.\n```javascript\nconst working = _ => { };\nfor (let i = 0; i < 1000000; i++) working();\n```\n\n### NonBlocking\n\n`nbFor`(\ucd5c\ub300\ubc18\ubcf5\ud69f\uc218, \ud55c \ud504\ub808\uc784 \ub2f9 load \ud69f\uc218, \uc2e4\ud589 \ube14\ub85d)\n\n```javascript\nconst nbFor = (max, load, block) => {\n  let i = 0;\n  const f = time => {\n    let curr = load;\n    while(curr-- && i < max) {\n      block();\n      i++;\n    }\n    if (i < max - 1) requestAnimationFrame(f);\n  };\n  requestAnimationFrame(f);\n};\n```\n> [requestAnimationFrame](https://blog.eunsatio.io/develop/JavaScript-window.requestAnimationFrame-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC)\n> - JavaScript\uc758 WebAPI \ube44\ub3d9\uae30 \ud568\uc218\n> - window.setTimeout \ud568\uc218\uc640 \ub2e4\ub978 \uc810\uc740 \ube0c\ub77c\uc6b0\uc800\uac00 \uc2e4\ud589 \uc2dc\uae30\ub97c \uacb0\uc815\n> - window.setInterval \ud568\uc218\uc640 \ub2e4\ub978 \uc810\uc740 \uc2a4\uc2a4\ub85c \ubc18\ubcf5\ud574\uc11c \ud638\ucd9c\ud558\uc9c0 \uc54a\ub294\ub2e4 \n> - \uc7ac\uadc0\uc801\uc73c\ub85c window.requestAnimationFrame \ud568\uc218\ub97c \ub2e4\uc2dc \ud638\ucd9c\ud574 \uc918\uc57c \ud569\ub2c8\ub2e4.\n\n1. \ud55c \ud504\ub808\uc784 \ub0b4\uc5d0\uc11c 10 \ubc88\uc758 loop \ub97c \ub3cc\uac8c \ub41c\ub2e4. -> non blocking\n    ```javascript\n    nbFor(100, 10, working);    \n    ```\n2. working **\ubc18\ud658\uac12\uc774 \uc5c6\ub2e4\uba74** -> nbFor \uc740 **Async**   \n\nblock \uc11c\ube0c\ub8e8\ud2f4\uc774 \ucc28\uc9c0\ud558\ub294 \ub9ac\uc18c\uc2a4\uc5d0 \ub530\ub77c blocking \uc774 \ub420 \uc218 \uc788\uace0, \nnon blocking \uc774 \ub420 \uc218 \uc788\ub2e4. \n\ub530\ub77c\uc11c, \uc131\ub2a5 \ud14c\uc2a4\ud2b8\ub97c \ud558\uba74\uc11c load \ub97c \uc870\uc808\ud574 \ub098\uac00\uba74 \ub41c\ub2e4.\n \n\nReference\n--\n- [https://private.tistory.com/24](https://private.tistory.com/24)\n- \ucf54\ub4dc\uc2a4\ud53c\uce20\n\n\n\n    \n\n\n\n\n')))}p.isMDXComponent=!0},377:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return m}));var r=t(0),c=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var l=c.a.createContext({}),p=function(n){var e=c.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=p(n.components);return c.a.createElement(l.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return c.a.createElement(c.a.Fragment,{},e)}},y=c.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),u=p(t),y=r,m=u["".concat(i,".").concat(y)]||u[y]||g[y]||o;return t?c.a.createElement(m,a(a({ref:e},l),{},{components:t})):c.a.createElement(m,a({ref:e},l))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=y;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:r,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);