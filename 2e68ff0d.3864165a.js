(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),s=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?c.a.createElement(d,l(l({ref:t},o),{},{components:n})):c.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<a;o++)i[o]=n[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),c=n(7),a=(n(0),n(158)),i={},l={unversionedId:"javascript/2",id:"javascript/2",isDocsHomePage:!1,title:"2",description:"MVVM \uc2dc\uc2a4\ud15c",source:"@site/docs/javascript/2.md",slug:"/javascript/2",permalink:"/docs/javascript/2",version:"current",sidebar:"javascript",previous:{title:"Inversion of Control",permalink:"/docs/javascript/OOP_inversion_of_control"}},b=[{value:"TypeCheck",id:"typecheck",children:[]},{value:"view book &amp; bind",id:"view-book--bind",children:[]},{value:"Role Design",id:"role-design",children:[]},{value:"ViewModel",id:"viewmodel",children:[]},{value:"Binder",id:"binder",children:[]},{value:"Scanner",id:"scanner",children:[]}],o={toc:b};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'MVVM \uc2dc\uc2a4\ud15c\n"\ubaa8\ub378-\ubdf0-\ubdf0\ubaa8\ub378" \uc758 \uc57d\uc790'),Object(a.b)("p",null,"mvc\ub4e4 "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023309-a14b9280-841b-11eb-9dcc-843574d06234.png",alt:"image"})),Object(a.b)("p",null,"(controller \ub294 view \uc640 model \uc744 \uc54c\uace0\uc788\ub2e4.)\n\ud654\uc0b4\ud45c\ub294 \uc54c\uace0 \uc788\ub2e4 \uad00\uacc4"),Object(a.b)("p",null,"view \uac00 \ubaa8\ub378\uc744 \uc54c\uace0\uc788\ub2e4\ub294 \uac83\uc740 \ud070 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0a8\ub2e4.\n\ubaa8\ub378\uc740 \ube44\uc988\ub2c8\uc2a4\uc5d0 \uad00\uacc4\ub41c \uac83\uc774\ub77c, \uac11\uc790\uae30 \uc0dd\uaca8\ub0a0 \uc218\ub3c4 \uc788\uace0 \ubcc0\uacbd\ub420 \uc218\ub3c4 \uc788\ub2e4.\n\uadf8\ub9ac\uace0 view \ub294 \uc0ac\uc6a9\uc790\uc758 \uc778\ud130\ub809\uc158\ud558\ub294 \ubc29\ubc95\uc744 \ubcc0\uacbd\ud560 \uc218 \ub3c4 \uc788\ub2e4."),Object(a.b)("p",null,"\ubdf0\uc640 \ubaa8\ub378\uc740 \ubcc0\ud654\ud558\ub294 \ud2b9\uc9d5(\ubcc0\uacbd\uc774\uc720)\uc5d0 \ub300\ud574\uc11c \uc0c1\uad00\uc774 \uc5c6\ub294\ub370, \uc758\uc874\uc131\uc774 \uc788\ub2e4\ub294 \uac83\uc774 \ubb38\uc81c\ub2e4."),Object(a.b)("p",null,"\ub530\ub77c\uc11c, mvc \ub294 \uc8fc\ub85c \uc11c\ubc84\uc5d0\uc11c \uc4f4\ub2e4.\n\uc11c\ubc84\uc5d0\uc11c\ub294 view -> model \uad00\uacc4\uac00 \uc5c6\ub2e4."),Object(a.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 mvc \ub294 \uc798 \uc548\uc4f0\uac8c \ub418\uc5c8\ub2e4."),Object(a.b)("p",null,"\uc81c\uc655\uc801 controller mvc \ubaa8\ub378"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023322-b1637200-841b-11eb-9df3-41c5f09e1a9d.png",alt:"image"}),"\nview \uac00 \ub300\uc2e0\uc5d0 controller \ub97c \uc54c\uac8c \ub418\uc5c8\ub2e4.\n\ucee8\ud2b8\ub864\ub7ec\uac00 \ubaa8\ub450 \uc54c\uac8c\ub41c \uad6c\uc870\uc778\ub370\n\ubb38\uc81c\ub294\n\uc2e4\uc9c8\uc801\uc73c\ub85c \ubdf0\uac00 \ubaa8\ub378\uc758\uc874\uc774 \uc5c6\uc5b4\uc84c\uc9c0\ub9cc\n\ucee8\ud2b8\ub864\ub7ec\uac00 \ubdf0\uc640 \ubaa8\ub378\uc758 \ubcc0\ud654\ub97c \ubc18\uc601\ud574 \uc8fc\uc5b4\uc57c \ud55c\ub2e4.\n\ucee8\ud2b8\ub864\uc758 \uc720\uc9c0\ubcf4\uc218\uac00 \ud798\ub4e4\uc5b4\uc9c4\ub2e4."),Object(a.b)("p",null,"\uc774\ub7f0 \uc758\uc874\uc131\ub4e4\uc744 \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 mvc \uc790\uccb4\uc5d0\uc11c\ub294 \uc5c6\ub2e4."),Object(a.b)("p",null,"mvp model view presenter\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023342-dc4dc600-841b-11eb-9ce9-d9ed6e8f4048.png",alt:"image"}),"\n\ub9ce\uc774 \ucc44\uc6a9\ub418\uc5c8\ub2e4.\n\ube44\uc8fc\uc5bc \ubca0\uc774\uc9c1, MFC, \uc548\ub4dc\ub85c\uc774\ub4dc\ubdf0 \uac00 \uc774 \ubaa8\ub378\uc744 \uc4f4\ub2e4."),Object(a.b)("p",null,"\ubdf0\uc5d0 \ub300\ud55c \ubaa8\ub378\uc758 \uc758\uc874\uc131\uc774 \uc644\uc804\ud788 \uc81c\uac70\ub40c "),Object(a.b)("p",null,"\ubdf0\uac00 \uadf8\ub9bc\uc744 \uadf8\ub9ac\ub294 \uc7ac\ub7c9\uad8c\uc740 \ubaa8\ub450 \uc783\uc5b4\ubc84\ub9ac\uace0 Presenter \uac00 getter setter \ub97c \ud1b5\ud574\uc11c \ud1b5\uc81c\ub97c \ubc14\uafd4\uc90c\n\ubdf0\uc5d0 \ub9ce\uc740 getter setter \ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4\ub294 \ub2e8\uc810"),Object(a.b)("p",null,"mvvm \uc740\n\uc544\uc608 \ubdf0\ubaa8\ub378\uc774 \ubdf0\ub97c \ubaa8\ub974\uac8c \ud558\ub294 \uac83\uc5d0 \uc788\ub2e4. "),Object(a.b)("p",null,"binder \ub77c\ub294 \uac83\uc774 \ud544\uc694\ud558\ub2e4.\n\uadf8\ub9ac\uace0 mvvm \uc744 \uc774\ud574\ud558\ub294 \uccab\uac78\uc74c\uc740 viewModel \uc5d0 \uc788\ub2e4. \uc774\uac83\uc740 \uc21c\uc218\ud55c view \uc774\ub2e4. \uc774\uac83\uc740 \uadf8\ub9bc \uadf8\ub9ac\ub294 view \uac00 \uc544\ub2cc\n\uc778\uba54\ubaa8\ub9ac \uac1c\uccb4\ub85c\uc11c\uc758 \uc21c\uc218\ud55c \ub370\uc774\ud130\ub85c\uc11c\uc758 \ubdf0 \uc774\ub2e4.\n\ubdf0\ub97c \ub300\uc2e0\ud560 \uac1d\uccb4\uc774\ub2e4.\n\ub178\ub4dc\uc5d0\uc11c\ub294 dom \uc774 \uc5c6\ub2e4. \ub300\uc2e0 \ub178\ub4dc\uc5d0\uc11c view \ubaa8\ub378\uc744 \uac31\uc2e0\ud560 \uc218 \uc788\ub2e4.\n\ubdf0\ubaa8\ub378\uc5d0 \ub9de\uac8c \uadf8\ub9bc\uc774 \uadf8\ub824\uc838\uc57c \ud560 \uac83\uc774\ub2e4. "),Object(a.b)("p",null,"\ubc14\uc778\ub354\uac00 \ubdf0\ubaa8\ub378\uc758 \ubcc0\ud654\ub97c \uac10\uc9c0\ud574 \ubdf0\ub97c \ubcc0\uacbd\ud574 \uc8fc\uae38 \ubc14\ub77c\uac70\ub098,\n\ubdf0\uc758 \ubcc0\ud654\uac00 \uc0dd\uae30\uba74 \ubc14\uc778\ub354\ub97c \ub530\ub77c\uc11c \ubdf0\uc758 \ubaa8\ub378\uc744 \uac31\uc2e0\ud574\uc8fc\ub294 \uac83\uc744 \uc6d0\ud55c\ub2e4. "),Object(a.b)("p",null,"\uc790\ub3d9\uc73c\ub85c \ud574\uc8fc\ub294 \ubc14\uc778\ub354\uac00 \uc788\uc5b4\uc57c MVVM \uc774 \uc131\ub9bd\ud55c\ub2e4. "),Object(a.b)("p",null,"\ubdf0\uc640 \ubdf0\ubaa8\ub378\uc0ac\uc774\uc758 \uc758\uc874\uc131\uc744 \ubc14\uc778\ub354\uac00 \ub2e4 \uc544\ub294 \uac83\uc73c\ub85c \ub458 \uc0ac\uc774\uc758 \uc758\uc874\uc131\uc744 \uc5c6\uc560 \ubc84\ub838\ub2e4. "),Object(a.b)("p",null,"\uc5ec\uae30\uc11c \ud575\uc2ec\uc740 \ubdf0 \ubaa8\ub378\uc740 \ubdf0\ub97c \ubaa8\ub978 \ub2e4\ub294 \uac83"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023682-bcb79d00-841d-11eb-8c9e-bd7a70d48903.png",alt:"image"}),"\n\ub2e8\ubc29\ud5a5 observation "),Object(a.b)("p",null,"binder \uac00 observe \ud558\ub294 \ub300\uc0c1\uc740 \uc635\uc158\uc774\ub2e4. "),Object(a.b)("p",null,"observer \uac00 \uc5b4\ub824\uc6b0\ub2c8 \uc57d\uac04 \ub2e4\ub978 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud560 \uac83\uc778\ub370,\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023685-c7723200-841d-11eb-9baf-e2bb8409fbd0.png",alt:"image"}),"\n\ubdf0 \ubaa8\ub378\uc774 \ubc14\uc778\ub354\ub97c \uc54c\uac8c \ud574\uc11c \uc9c1\uc811 \uc0c1\ud0dc\uac00 \ubc14\ub01c\uc744 call \ud574 \uc900\ub2e4."),Object(a.b)("p",null,"\uc635\uc800\ubc84\ubcf4\ub2e4 \uc218\ub3d9\uc73c\ub85c call \uc744 \ud558\ub294 \uac83\uc774 \uc720\ub9ac\ud55c \uacbd\uc6b0\ub3c4 \uc788\ub2e4.\n\uc635\uc800\ubc84\ub294 \ubdf0\ubaa8\ub378\uc774 10\uac1c \ubc14\ub00c\uba74 10\ubc88 \uac31\uc2e0\uc774 \ub418\uc9c0\ub9cc\ncall \uc740 \uc218\ub3d9\uc73c\ub85c \ud55c\ubc88\uc5d0 \uac31\uc2e0\ud560 \uc218\ub3c4 \uc788\ub2e4."),Object(a.b)("h2",{id:"typecheck"},"TypeCheck"),Object(a.b)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud0c0\uc785\uc5b8\uc5b4\uac00 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \ub7f0\ud0c0\uc784\uc5d0 throw \ub97c \ub358\uc9c0\uc9c0 \uc54a\uc73c\uba74 \uc624\ub958\uac00 \uc804\ud30c\ub41c\ub2e4.\n\ub7f0\ud0c0\uc784\ubc16\uc5d0 \uc5c6\ub294 \uc5b8\uc5b4\uc758 \uac00\uc7a5 \uc88b\uc740 \uc804\ub7b5\uc740 \uc5d0\ub7ec\ub97c \uac10\uc9c0\ud558\ub294 \uc989\uc2dc throw \ub97c \ub358\uc838\uc57c \ub514\ubc84\uae45\ud560 \uc218 \uc788\ub2e4. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const type = (target, type) => {\n  // string, number, boolean \uc740 \uac1d\uccb4\uac00 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \ud0c0\uc785\ube44\uad50\ub97c \ud560 \ub54c typeof \ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\uace0,\n  // typeof \uc758 \uacb0\uacfc \ud0c0\uc785\uc774 \ubb38\uc790\uc5f4\ub85c \ubc18\ud658\ub41c\ub2e4.\n  if (typeof type == 'string') {\n    if (typeof target != type) \n      throw `invaild type ${target}: ${type}`;\n\n  // \uac1d\uccb4 \ube44\uad50\ud560 \ub54c\n  } else if (!(target instanceof type))   \n      throw `invaild type ${target}: ${type}`;\n\n  return target;\n};\n\ntype(12, 'number');\ntype('abc', 'string');\ntype([1, 2, 3], Array);\ntype(new Set, Set);\ntype(document.body, HTMLElement);\n")),Object(a.b)("p",null,"=== \uc774 \uc544\ub2cc == \uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\ub294, === \ub294 \ud615\uc77c\uce58 \uac80\uc0ac\ub97c \ud558\uae30 \ub54c\ubb38\uc5d0, == \uac80\uc0ac\ub97c \ud574\uc11c \ub450\ubc88 \uc791\ub3d9\uc744 \ud558\uae30 \ub54c\ubb38\uc5d0 \ub290\ub9b0\ub2e4.\ntype \uc740 javascript \uc758 \ud2b9\uc9d5\uc744 \uc798 \uc0b4\ub9b0 \ud568\uc218\uc774\ub2e4. "),Object(a.b)("p",null,"\ud568\uc218\uc758 \uc778\uc790\ub97c \uc758\uc2dd\ud560 \ub584 \uc67c\ucabd\uc5d0\uc11c \uc624\ub978\ucabd\uc73c\ub85c \uc2a4\ucf54\ud504\uac00 \ud558\ub098\uc529 \ub9cc\ub4e4\uc5b4\uc9c0\uba74\uc11c \ucc98\ub9ac\ub41c\ub2e4.\n\ub530\ub77c\uc11c 2\ubc88\uc9f8 \uc778\uc790\ub294 1\ubc88\uc9f8 \uc778\uc790\uc758 \uac12\uc744 \uc54c\uace0 \uc788\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// \uccab\ubc88\uc9f8 \uc778\uc790\uac00 Array \uac00 \uc544\ub2c8\uba74, \uc989\uc2dc throw \uac00 \uc77c\uc5b4\ub09c\ub2e4. \nconst test = (arr, _ = type(arr, Array)) => {\n  console.log(arr);\n};\n\ntest([1, 2, 3]);\ntest(123);\n\nconst test2 = (a, b, c, _0 = type(a, 'string'), _1 = type(b, 'number'), _2 = type(c, 'boolean')) => {\n  console.log(a, b, c);\n};\ntest2('abc', 123, true);\n")),Object(a.b)("h2",{id:"view-book--bind"},"view book & bind"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111024565-cdb6dd00-8422-11eb-99b6-cf1a420040e3.png",alt:"image"})),Object(a.b)("h2",{id:"role-design"},"Role Design"),Object(a.b)("p",null,"vue \uc640 angular \ub294 \ubc14\uc778\ub354\uac00 \uc874\uc7ac\ud558\ub294 view \ub97c \uc2a4\uce94\ud55c\ub2e4. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ubaa8\ub378\uacfc \ubdf0\ub97c \uc644\uc804\ud788 \ubd84\ub9ac\ud574\uc11c \uad00\ub9ac\ud558\uae30 \uc27d\ub2e4. ")),Object(a.b)("p",null,"\uc544\ub2c8\uba74\n\ucc98\uc74c\ubd80\ud130 \ub370\uc774\ud130\uc640 \uc5f0\uacb0\ub418\uc5b4\uc788\ub294 \ubdf0\ub97c \ub9cc\ub4e4\uc5b4\uc11c \ubdf0\ub97c \uaf42\uac8c \ud558\ub294? \ucef4\ud3ec\ub10c\ud2b8 \ubc29\uc2dd\uc774 \uc788\ub2e4.\n\ub9ac\uc561\ud2b8\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc2a4\ud14c\uc774\ud2b8\ub97c \uc18c\uc720\ud558\uace0 \uc788\ub2e4. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ubaa8\ub378\uacfc \ubdf0\ub97c \uac19\uc774 \uad00\ub9ac\ud574\uc57c \ub41c\ub2e4. ")),Object(a.b)("p",null,"\uac01\uac01 \uc7a5\ub2e8\uc810\uc774 \uc787\ub2e4. "),Object(a.b)("p",null,"HTMLElement \ub294 \uc790\uc8fc",Object(a.b)("strong",{parentName:"p"},"\ubcc0\ud558\uae30")," \ub54c\ubb38\uc5d0 Binder \uc5d0\uc11c Scanner \ub97c \ubd84\ub9ac\ud558\uc600\ub2e4. (\uc5ed\ud560\uc758 \ubd84\ub9ac)"),Object(a.b)("p",null,"\ubcc0\ud654\uc728\uc5d0 \ub530\ub77c\uc11c \uc5ed\ud560\uc744 \ubd84\ub9ac\ud55c\ub2e4. \ucf54\ub4dc\ub97c \ubc14\uafb8\ub294 \uc774\uc720\uac00 \ub611\uac19\ub0d0 \ub2e4\ub974\ub0d0\uc5d0 \ub530\ub77c \ubd84\ub9ac\ud55c\ub2e4.\n\ubc14\uc778\ub354\ub294 \ubdf0\ubaa8\ub378\uc744 \uc774\uc6a9\ud574\uc11c \ubdf0\ub97c \uadf8\ub9b4\ub584\ub9cc \ub85c\uc9c1\uc774 \ubc14\ub00c\uba74 \ub41c\ub2e4.\n\uc2a4\uce90\ub108\ub294 HTML \uc744 \ud574\uc11d\ud558\ub294 \uac83\uc774 \ub2e4\ub974\uba74 \ubc14\ub010\ub2e4.\n\ubcc0\ud654\uc728\uc740 \uc2dc\uac04\uc5d0 \ub530\ub978 \ubcc0\ud654\uc728\uc774 \uc544\ub2c8\ub77c \uc6d0\uc778\uc5d0 \ub530\ub978 \ubc88\ud654\uc728\uc774\ub2e4. "),Object(a.b)("p",null,"\uac1d\uccb4\uac00 \ubc14\ub00c\ub294 \uc774\uc720\ub97c \ud558\ub098\ub85c \ub9cc\ub4e4\uc790 SRP"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111025033-2be4bf80-8425-11eb-908c-5b38b4628bf4.png",alt:"image"})),Object(a.b)("p",null,"scanner \ub85c \uc778\ud574\uc11c binder \uc640 html \uc758 \uad00\uacc4\ub97c \ub04a\uc5c8\ub2e4. "),Object(a.b)("p",null,"hook \ud558\ub098 \ud558\ub098\ub97c binderItem \uc73c\ub85c \ub9cc\ub4e0\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111024700-89780c80-8423-11eb-8b41-5349d5c169a2.png",alt:"image"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111025101-81b96780-8425-11eb-962e-19de651552d9.png",alt:"image"})),Object(a.b)("h2",{id:"viewmodel"},"ViewModel"),Object(a.b)("p",null,"\uc21c\uc218\ud55c \uc778\uba54\ubaa8\ub9ac \uac1d\uccb4\uc774\uae30 \ub54c\ubb38\uc5d0 \ub9cc\ub4e4\uae30 \uc81c\uc77c \uc27d\ub2e4.\n\uadf8\ub9ac\uace0 \ub2e8\uc704\ud14c\uc2a4\ud2b8\ub3c4 \uc26c\uc6cc\uc9c4\ub2e4. dom \uc744 \ud14c\uc2a4\ud2b8\ud558\uae30\ub294 \uc5b4\ub835\uc9c0\ub9cc viewmodel \uc744 \ud14c\uc2a4\ud2b8 \ud558\uae30\ub294 \uc27d\ub2e4. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"constViewModel = class {\n  static #private = Symbol();\n\n  staticget(data) {\n    returnnewViewModel(this.#private, data);\n  }\n\n  // constViewModel \ub294 \ud558\ub098\uc758 dom \uac1d\uccb4\ub97c \ub300\uc2e0\ud558\ub294 \uba54\ubaa8\ub9ac \uac1d\uccb4\uae30 \ub54c\ubb38\uc5d0 \n  // dom \uc744 \ub300\uc2e0\ud560 \uc18d\uc131\ub4e4\uc744 \uac00\uc9c4\ub2e4. \n  styles = {};\n\n  // property \uc640 attribute \uc758 \ucc28\uc774\ub97c dom \uc5d0\uc11c\ub294 \uc911\uc694\ud558\uac8c \ubcf8\ub2e4.\n  // input \uac19\uc740 \uacbd\uc6b0\uc5d0\ub3c4 property value \uc778\uac00 attribute value \uc778\uac00\uc5d0 \ub530\ub77c\uc11c\ub3c4 \ub2e4\ub974\uac8c \uc791\ub3d9\ud55c\ub2e4 ??\n  // \ud0dc\uadf8\uc5d0\ub2e4\uac00 \uc120\uc5b8\ud55c\uac83 dom \uc5d0\ub2e4\uac00\ub294 setAttirbute, getAttribute,...\n  attributes = {};\n  // element.a = 3, \n  properties = {};\n  events = {};\n\n  constructor(checker, data) {\n    // 1) \uc678\ubd80\uc5d0\uc11c\ub294 \uc808\ub300 \uccab\ubc88\uc9f8 \uc778\uc790\uc5d0 static private \uc744 \ub118\uae38 \uc218 \uc5c6\ub2e4.\n    // get(data) \uc5d0\uc11c \uc624\uc9c1 \ub0b4\ubd80\uc5d0\uc11c\ub9cc \uccab\ubc88\uc9f8 \uc18d\uc131\uc744 #private \uc744 \ub118\uae38 \uc218 \uc788\ub2e4.  \n    // \ub530\ub77c\uc11c \uc678\ubd80\uc5d0\uc11c \uc0dd\uc131\uc790\ub97c \ud638\ucd9c\ud560 \uc218 \uc5c6\ub2e4. \n    if (checker != ViewModel.#private) throw'useViewModel.get()!';\n    Object.entries(data).forEach(([k, v]) => {\n      switch (k) {\n        case'styles':\n          this.styles = v;\n          break;\n        case'attributes':\n          this.attributes = v;\n          break;\n        case'properties':\n          this.properties = v;\n          break;\n        case'events':\n          this.events = v;\n          break;\n        default:\n          this[k] = v;\n      }\n    });\n    // \uac12\uc740 \ubcc0\ud654\ud560 \uc218 \uc788\uc9c0\ub9cc \ub354\uc774\uc0c1 \ud0a4\ub294 \ucd94\uac00\ud560 \uc218 \uc5c6\uac8c \ud568. \n    Object.seal(this);\n  }\n};\n")),Object(a.b)("p",null,"\uc5b4\ub5a0\ud55c \uc885\ub958\uc758 \ubdf0\ub77c\uace0 \ud560\uc9c0\ub77c\ub3c4, \uadf8\ub9ac\ub294 \ub85c\uc9c1\uc744 binder \uc5d0\uac8c \ubaa8\uc558\ub2e4. (\uc81c\uc5b4\uc758 \uc5ed\uc804)"),Object(a.b)("h2",{id:"binder"},"Binder"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"constBinderItem = class {\n  el;\n  viewmodel;\n\n  constructor(el, viewmodel, _0 = type(el, HTMLElement), _1 = type(viewmodel, 'string')) {\n    this.el = el;\n    this.viewmodel = viewmodel;\n    Object.freeze(this);  // \ubd88\ubcc0\uac1d\uccb4\ud654\n  }\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"new BinderItem(section, 'wrapper');\nnew BinderItem(h2, 'title');\nnew BinderItem(section2, 'contents');\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<section id="target" data-viewmodel="wrapper">\n  <h2 data-viewmodel="title"/>\n  <section data-viewmodel="contents"/>\n</section>\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const Binder = class {\n  // \uc5b8\uc81c Set \uc744 \uc4f0\uace0 \uc5b8\uc81c \ubc30\uc5f4\uc744 \uc4f8\uae4c? \n  // \ubb3c\ub860 Set \uc740 \uc911\ubcf5 \ubc29\uc9c0\uae30\ub2a5\uc774 \uc788\ub2e4. Set \uc740 \uac1d\uccb4\uc758 \ucee8\ud14c\uc774\ub108\ub2e4. \ubc30\uc5f4\uc740 \ub611\uac19\uc740 \uac1d\uccb4\ub97c \ub450\ubc88 \ub123\uc744 \uc218 \uc788\ub2e4. \n  #items = new Set;\n\n  add(v, _ = type(v, BinderItem)) {\n    this.#items.add(v);\n  }\n\n  render(viewmodel, _ = type(viewmodel, ViewModel)) {\n    this.#items.forEach(item => {\n      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;\n      Object.entries(vm.styles).forEach(([k, v]) => el.style[k] = v);\n      Object.entries(vm.attributes).forEach(([k, v]) => el.setAttribute(k, v));\n      Object.entries(vm.properties).forEach(([k, v]) => el[k] = v);\n      Object.entries(vm.events).forEach(([k, v]) => el['on' + k] = e => v.call(el, e, viewmodel)); // this \ub97c el \ub85c \ubc14\uc778\ub529\n    });\n  }\n};\n")),Object(a.b)("h2",{id:"scanner"},"Scanner"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const Scanner = class {\n  scan(el, _ = type(el, HTMLElement)) {\n    const binder = newBinder;\n    this.checkItem(binder, el);\n\n    // dom Roop\n    const stack = [el.firstElementChild];\n    let target;   // \uc784\uc2dc\ubcc0\uc218\n    while (target = stack.pop()) {\n      this.checkItem(binder, target);\n      if (target.firstElementChild) stack.push(target.firstElementChild);\n      if (target.nextElementSibling) stack.push(target.nextElementSibling);\n    }\n    return binder;\n  }\n\n  checkItem(binder, el) {\n    const vm = el.getAttribute('data-viewmodel');\n    if (vm) binder.add(newBinderItem(el, vm));\n  }\n};\n")))}s.isMDXComponent=!0}}]);