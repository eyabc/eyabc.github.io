(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{178:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(472)),l={},c={unversionedId:"javascript/asynchronous_programming/Async Generator",id:"javascript/asynchronous_programming/Async Generator",isDocsHomePage:!1,title:"Async Generator",description:"Async Generator",source:"@site/docs/javascript/asynchronous_programming/Async Generator.md",slug:"/javascript/asynchronous_programming/Async Generator",permalink:"/docs/javascript/asynchronous_programming/Async Generator",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Async Iterator",permalink:"/docs/javascript/asynchronous_programming/Async Iterator"},next:{title:"Async Iterable",permalink:"/docs/javascript/asynchronous_programming/Async Iterable"}},i=[{value:"\uc77c\ubc18 Generator",id:"\uc77c\ubc18-generator",children:[{value:"nbFor \ud568\uc218(\uc77c\ubc18\ud568\uc218) \ub97c generator \ud568\uc218\ub85c \ub9cc\ub4e4\uae30",id:"nbfor-\ud568\uc218\uc77c\ubc18\ud568\uc218-\ub97c-generator-\ud568\uc218\ub85c-\ub9cc\ub4e4\uae30",children:[]}]},{value:"Promise yield",id:"promise-yield",children:[]},{value:"\uc81c\ub108\ub808\uc774\ud130\uc5d0 \ube44\ub3d9\uae30 \ub3d9\uc791 \ucd94\uac00",id:"\uc81c\ub108\ub808\uc774\ud130\uc5d0-\ube44\ub3d9\uae30-\ub3d9\uc791-\ucd94\uac00",children:[]}],b={toc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"async-generator"},"Async ",Object(o.b)("a",{parentName:"h1",href:"./Iteration%20%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C.html"},"Generator")),Object(o.b)("p",null,"ES2017 \uc758 \ube44\ub3d9\uae30\ud568\uc218\uac00 \ub3c4\uc785\ub418\uae30 \uc804, generator \uac00 \ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc704\ud574 \ub110\ub9ac \uc0ac\uc6a9\ub418\uc5c8\ub2e4\uace0\ud55c\ub2e4."),Object(o.b)("p",null,"\uc77c\ubc18\ud568\uc218"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"(0, 1)\uac1c\uc758 \uac12\ub9cc \ubc18\ud658")),Object(o.b)("h2",{id:"\uc77c\ubc18-generator"},"\uc77c\ubc18 Generator"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"await \uc0ac\uc6a9 \ubd88\uac00"),Object(o.b)("li",{parentName:"ul"},"redux-saga \uc5d0\uc11c\ub3c4 Generator \ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4."),Object(o.b)("li",{parentName:"ul"},"\ub3d9\uae30\uc801 \ubb38\ubc95"),Object(o.b)("li",{parentName:"ul"},"\uc5ec\ub7ec \uac1c\uc758 \uac12\uc744 \ud544\uc694\uc5d0 \ub530\ub77c \ud558\ub098\uc529 yield \ubc18\ud658 \ud55c\ub2e4."),Object(o.b)("li",{parentName:"ul"},"\ud568\uc218\ub97c \uc7a0\uc218 \uba48\ucdb0\ub458 \uc218 \uc788\ub294 generator \uc758 \ud2b9\uc9d5\uc744 \uc774\uc6a9\ud574 \ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc704\ud574 \uc0ac\uc6a9\ub418\uae30\ub3c4 \ud55c\ub2e4.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const infinity = (function*() {\n  let i = 0;\n  while(true) yield i++;\n})();\nconsole.log(infinity.next());\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"generator \uac00 \uc544\ub2c8\uba70 while \uc774 \ubb34\ud55c\uc73c\ub85c \ubc18\ubcf5\ub418\uace0 \uc788\uc744 \ub54c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"SyncFlow \uc5d0\uc11c\ub294 CPU \uc758 blocking \uc774 \uacc4\uc18d \uc77c\uc5b4\ub0a8"))),Object(o.b)("li",{parentName:"ul"},"generator \uc778 \uacbd\uc6b0 while \ubb38\uc744 yield \ub97c \ud1b5\ud574\uc11c \ud0c8\ucd9c \uac00\ub2a5"))),Object(o.b)("li",{parentName:"ul"},"\ud568\uc218\uc758 \uc7ac\uac1c\ub97c \ud504\ub85c\uadf8\ub798\uba38\uac00 \uc9c1\uc811 \uc81c\uc5b4\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("li",{parentName:"ul"},"Suspend: Sync Flow \ub97c \uc911\ub2e8\ud560 \uc218 \uc788\ub2e4.")),Object(o.b)("h3",{id:"nbfor-\ud568\uc218\uc77c\ubc18\ud568\uc218-\ub97c-generator-\ud568\uc218\ub85c-\ub9cc\ub4e4\uae30"},"nbFor \ud568\uc218(\uc77c\ubc18\ud568\uc218) \ub97c generator \ud568\uc218\ub85c \ub9cc\ub4e4\uae30"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"./Sync%20Async.html#nonblocking"},"nbFor"),": load \uac12 \uc870\uc808\uc744 \ud1b5\ud55c nonBlocking \ud568\uc218. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const nbFor = (max, load, block) => {\n  let i = 0;\n  const f = time => {\n    let curr = load;\n    while(curr-- && i < max) {\n      block();\n      i++;\n    }\n    if (i < max - 1) requestAnimationFrame(f);\n  };\n  requestAnimationFrame(f);\n};\n")),Object(o.b)("p",null,"generator \ub97c \ud1b5\ud574 ",Object(o.b)("inlineCode",{parentName:"p"},"requestAnimationFrame")," \uc640 \uac19\uc740 async \ud568\uc218\ub97c \uc5c6\uc560\ubcf4\uc790     "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uc7ac\uadc0\ud638\ucd9c \uc704\uce58\ub97c \ucd94\uc801\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4."),Object(o.b)("li",{parentName:"ul"},"syncFlow \ub85c\uc9c1\uc774\uae30 \ub54c\ubb38\uc5d0 \ub354 \uc774\ud574\ud558\uae30 \uc27d\ub2e4.  "),Object(o.b)("li",{parentName:"ul"},"async \ud568\uc218 \ub2e8\uc810\uc774 \uc5c6\uc5b4\uc9c4\ub2e4.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\uc5b4\ud718\uacf5\uac04\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\uc5b4 \ubcf5\uc7a1\ud55c \uc2a4\ucf54\ud504\ub97c \uace0\ub824\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const gene = function*(max, load, block) {\n    let i = 0, curr = load;\n    while(i < max) {\n        if(curr--) {\n            block();\n            i++;\n        } else {\n            curr = load;\n            yield;\n        }\n    }\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uc678\ubd80\uc5d0\uc11c \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc0dd\uacbc\ub2e4.      ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const nbFor = (max, load, block) => {\n    const iterator = gene(max, load, block);\n    const f = _ => iterator.next().done || requestAnimationFrame(f);\n    requestAnimationFrame(f);\n}\n")),Object(o.b)("p",null,"\uc815\ub9ac\ud574 \ubcf4\uc790\uba74"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\ube44\ub3d9\uae30 \uc2a4\ud0c0\uc77c\uc758 \ucf5c\ubc31 loop \ub97c \uc4f0\ub294 \uac83\ubcf4\ub2e4 \ub3d9\uae30\uc801\uc778 \ucf54\ub4dc\ub85c \uc791\uc131\ud558\uae30 \ud3b8\ud558\ub2e4"),Object(o.b)("li",{parentName:"ol"},"\uc2e4\ud589\ubd80\ubd84\uacfc Loop \uc758 \uad00\uc2ec\uc0ac \ubd84\ub9ac")),Object(o.b)("h2",{id:"promise-yield"},"Promise yield"),Object(o.b)("p",null,"Promise \uc790\uccb4\ub294 \uc989\uc2dc yield \ub41c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const gene2 = function*(max, load, block) {\n    let i = 0;\n    while (i < max) {\n        yield new Promise(res => {\n            let curr = load;\n            while (curr-- && i < max) {\n                block();\n                i++;\n            }\n            // frame \ub2e8\uc704\ub85c resolve \uc2e4\ud589\n            requestAnimationFrame(res);\n        })\n    }\n}\n")),Object(o.b)("p",null,"Promise \uac00 resolve \ub418\ub294 \uc21c\uac04\uc5d0 iterator.next() \uac00 \ub41c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const nbFor = (max, load, block) => {\n    const iterator = gene2(max, load, block);\n    const next = ({ value, done }) => done || value.then(v => next(iterator.next()));\n    next(iterator.next());\n}\n")),Object(o.b)("p",null,"load \ub97c \uc5c6\uc560 \ubc84\ub9b0 \ub2e4\uc74c \ucf54\ub4dc\ub294 block \uc77c\uae4c non block \uc77c\uae4c? "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const gene2 = function*(max, block) {\n    let i = 0;\n    while (i++ < max) {\n        yield new Promise(res => { block(); res(); })\n    }\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Promise Jobs \ub54c\ubb38\uc5d0 cpu \uac00 \uba48\ucd94\uc9c0\ub294 \uc54a\ub294\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./Promise.html#%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C-%ED%83%9C%EC%8A%A4%ED%81%AC"},"\ub9c8\uc774\ud06c\ub85c \ud0dc\uc2a4\ud06c micro task")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\ud558\ub098\uc758 \ud504\ub808\uc784(\uc560\ub2c8\ub9e4\uc774\uc158) \uc548\uc5d0\uc11c \ub2e4\uc2dc \ube44\ub3d9\uae30 \ud0c0\uc774\ubc0d\uc744 \ub098\ub204\uc5b4\uc8fc\ub294 \uc5ed\ud560 "),Object(o.b)("li",{parentName:"ul"},"\ud55c \ud504\ub808\uc784\uc744 \uc7a1\uc544\ub450\uace0 \ub9c8\uc774\ud06c\ub85c \ud0dc\uc2a4\ud06c(promise job)\ub97c \uc2e4\ud589\ud558\ub294\ub370 \ud574\uc18c\ub420 \ub54c\uae4c\uc9c0 \ud504\ub808\uc784\uc774 \ub118\uc5b4\uac00\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud55c\ub2e4."),Object(o.b)("li",{parentName:"ul"},"script timeout \uc774 \uac78\ub9ac\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ube0c\ub77c\uc6b0\uc800\uac00 \uc8fd\uc9c0 \uc54a\ub294\ub2e4.   ")))),Object(o.b)("p",null,"nb \uac00 10000\ubc88\uc774 \ucc0d\ud600\uc57c f \uac00 \ucc0d\ud78c\ub2e4. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"nbFor(10000, _ => console.log(\"nb\"));\nconst f = _ => {\n    console.log('f');\n    requestAnimationFrame(f);\n};\nrequestAnimationFrame(f);\n")),Object(o.b)("p",null,"\ub2e4\uc74c\uc758 \uacbd\uc6b0 nb \uac00 \uc5b4\ub290\uc815\ub3c4 \ucc0d\ud788\ub2e4\uac00 \ud504\ub808\uc784\uc774 \ub118\uc5b4\uac04\ub2e4.  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const f = _ => {\n    console.log('f');\n    requestAnimationFrame(f);\n};\nrequestAnimationFrame(f);\nnbFor(10000, _ => console.log(\"nb\"));\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"requestAnimationFrame \uc640 \uac19\uc774 \uc2dc\uac04\uc5d0 \uad00\ub828\ub41c \ube44\ub3d9\uae30 \ud568\uc218\ub97c time \ud568\uc218\ub77c\uace0 \ubd80\ub974\uaca0\ub2e4.")),Object(o.b)("p",null,"promise \uc548\uc758 time \ud568\uc218"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const gene2 = function* (max, block) {\n    let i = 0;\n    while (i++ <max) yield new Promise(res => {\n        block();\n        time(res);\n    })\n}\n")),Object(o.b)("p",null,"time \ud568\uc218\uc758 \ubd84\ub9ac"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const gene2 = function* (max, block) {\n    let i = 0;\n    while (i++ <max) yield new Promise(res => {\n        block();\n        res();\n    })\n};\n\nconst nbFor = (max, block) => {\n    const iterator = gene2(max, block);\n    const next = ({ value, done }) => done || value.then(v => time(_ => next(iterator.next())));\n    next(iterator.next());\n}\n")),Object(o.b)("h2",{id:"\uc81c\ub108\ub808\uc774\ud130\uc5d0-\ube44\ub3d9\uae30-\ub3d9\uc791-\ucd94\uac00"},"\uc81c\ub108\ub808\uc774\ud130\uc5d0 \ube44\ub3d9\uae30 \ub3d9\uc791 \ucd94\uac00"),Object(o.b)("p",null,"\ud55c\ubc88 \ucf58\uc194\ub85c \ub3cc\ub824\ubcf4\uc790. \uc77c\ubc18 \uc81c\ub108\ub808\uc774\ud130 \ud568\uc218\uc640\uc758 \ub3d9\uc791\uc774 \ube44\uad50\ub420 \uac83\uc774\ub2e4."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ubaa8\ub974\uaca0\ub2e4."),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"async function* generateSequence(start, end) {\n  for (let i = start; i <= end; i++) {\n    // await\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    yield i;\n  }\n}\n"))),Object(o.b)("p",null,"(async () => {\nlet generator = generateSequence(1, 5);\nfor await (let value of generator) {\nalert(value); // 1, 2, 3, 4, 5\n}\n})();"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\n\nReference & Comment\n--\n- https://gitlab.com/siots-study/topics/-/wikis/asyncronous\n- https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF\n- https://helloworldjavascript.net/pages/285-async.html\n- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all\n- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race\n- https://ko.javascript.info/async\n- https://ko.javascript.info/generators-iterators\n- https://www.bsidesoft.com/8325\n- https://www.bsidesoft.com/6037\n")))}s.isMDXComponent=!0},472:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,j=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?a.a.createElement(j,c(c({ref:n},b),{},{components:t})):a.a.createElement(j,c({ref:n},b))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<o;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);