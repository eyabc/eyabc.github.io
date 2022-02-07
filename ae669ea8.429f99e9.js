(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{330:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return s}));var t=a(3),r=(a(0),a(441));const c={},o={unversionedId:"javascript/airbnb_js_style_guides/Functions",id:"javascript/airbnb_js_style_guides/Functions",isDocsHomePage:!1,title:"Functions",description:"Functions",source:"@site/docs/javascript/airbnb_js_style_guides/Functions.md",slug:"/javascript/airbnb_js_style_guides/Functions",permalink:"/docs/javascript/airbnb_js_style_guides/Functions",version:"current",sidebar:"javascript",previous:{title:"Strings",permalink:"/docs/javascript/airbnb_js_style_guides/Strings"},next:{title:"Arrow Functions",permalink:"/docs/javascript/airbnb_js_style_guides/Arrow Functions"}},l=[{value:"func-style : \uc774\ub984\uc788\ub294 \ud568\uc218 \ud45c\ud604\uc2dd &gt; \ud568\uc218 \uc120\uc5b8\uc2dd",id:"func-style--\uc774\ub984\uc788\ub294-\ud568\uc218-\ud45c\ud604\uc2dd--\ud568\uc218-\uc120\uc5b8\uc2dd",children:[]},{value:"wrap-iife : IIFE: parentheses \uc73c\ub85c \uac10\uc2f8\uae30",id:"wrap-iife--iife-parentheses-\uc73c\ub85c-\uac10\uc2f8\uae30",children:[]},{value:"no-loop-func : \ube44\ud568\uc218\ube14\ub7ed\uc5d0\uc11c \ud568\uc218 \uc120\uc5b8 X -&gt; \ubcc0\uc218\uc5d0 \ud568\uc218 \ud560\ub2f9.",id:"no-loop-func--\ube44\ud568\uc218\ube14\ub7ed\uc5d0\uc11c-\ud568\uc218-\uc120\uc5b8-x---\ubcc0\uc218\uc5d0-\ud568\uc218-\ud560\ub2f9",children:[]},{value:"ECMA-262, block as statements(\uba85\ub839\ubb38), \ud568\uc218\uc120\uc5b8 as not statements",id:"ecma-262-block-as-statements\uba85\ub839\ubb38-\ud568\uc218\uc120\uc5b8-as-not-statements",children:[]},{value:"\ub9e4\uac1c\ubcc0\uc218\uc5d0 arguments \uc0ac\uc6a9 X",id:"\ub9e4\uac1c\ubcc0\uc218\uc5d0-arguments-\uc0ac\uc6a9-x",children:[]},{value:"prefer-rest-params : rest syntax ... &gt; arguments X",id:"prefer-rest-params--rest-syntax---arguments-x",children:[]},{value:"default parameter syntax &gt; \ud568\uc218 \uc778\uc790 \ubcc0\uacbd",id:"default-parameter-syntax--\ud568\uc218-\uc778\uc790-\ubcc0\uacbd",children:[]},{value:"\uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub97c \uc720\ubc1c\ud558\ub294 default parameter \uc0ac\uc6a9 \ub9d0\uac83.",id:"\uc0ac\uc774\ub4dc-\uc774\ud399\ud2b8\ub97c-\uc720\ubc1c\ud558\ub294-default-parameter-\uc0ac\uc6a9-\ub9d0\uac83",children:[]},{value:"default-param-last : default parameters \ub294 \ub9c8\uc9c0\ub9c9\uc5d0 \uc801\ub294\ub2e4.",id:"default-param-last--default-parameters-\ub294-\ub9c8\uc9c0\ub9c9\uc5d0-\uc801\ub294\ub2e4",children:[]},{value:"no-new-func : \ud568\uc218 \uac1d\uccb4 \uc0dd\uc131, \ud568\uc218 \uc0dd\uc131\uc790 X",id:"no-new-func--\ud568\uc218-\uac1d\uccb4-\uc0dd\uc131-\ud568\uc218-\uc0dd\uc131\uc790-x",children:[]},{value:"space-before-function-paren, space-before-blocks : \ud568\uc218 \uc2dc\uadf8\ub2c8\ucc98\uc758 space \uc720\uc9c0",id:"space-before-function-paren-space-before-blocks--\ud568\uc218-\uc2dc\uadf8\ub2c8\ucc98\uc758-space-\uc720\uc9c0",children:[]},{value:"no-param-reassign : \ub9e4\uac1c \ubcc0\uc218\ub85c \uc804\ub2ec \ub41c \uac1d\uccb4 \uc870\uc791 \uae08\uc9c0",id:"no-param-reassign--\ub9e4\uac1c-\ubcc0\uc218\ub85c-\uc804\ub2ec-\ub41c-\uac1d\uccb4-\uc870\uc791-\uae08\uc9c0",children:[]},{value:"no-param-reassign : \ub9e4\uac1c\ubcc0\uc218 \uc7ac\ud560\ub2f9 \uae08\uc9c0",id:"no-param-reassign--\ub9e4\uac1c\ubcc0\uc218-\uc7ac\ud560\ub2f9-\uae08\uc9c0",children:[]},{value:"prefer-spread : \uac00\ubcc0 \ud568\uc218, spread operator ... &gt; apply",id:"prefer-spread--\uac00\ubcc0-\ud568\uc218-spread-operator---apply",children:[]},{value:"function-paren-newline : \ud568\uc218\uc758 \uc5ec\ub7ec\uc904\uc758 \uc2dc\uadf8\ub2c8\uccd0/\ud638\ucd9c, \ub4e4\uc5ec\uc4f0\uae30, \ud55c\uc904\uc5d0 \ud558\ub098\uc529",id:"function-paren-newline--\ud568\uc218\uc758-\uc5ec\ub7ec\uc904\uc758-\uc2dc\uadf8\ub2c8\uccd0\ud638\ucd9c-\ub4e4\uc5ec\uc4f0\uae30-\ud55c\uc904\uc5d0-\ud558\ub098\uc529",children:[]}],i={toc:l};function s({components:e,...n}){return Object(r.b)("wrapper",Object(t.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"functions"},"Functions"),Object(r.b)("h2",{id:"func-style--\uc774\ub984\uc788\ub294-\ud568\uc218-\ud45c\ud604\uc2dd--\ud568\uc218-\uc120\uc5b8\uc2dd"},"func-style : \uc774\ub984\uc788\ub294 \ud568\uc218 \ud45c\ud604\uc2dd > \ud568\uc218 \uc120\uc5b8\uc2dd"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud568\uc218 \uc120\uc5b8\uc2dd ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ud568\uc218 \uc120\uc5b8\uc774 \ud638\uc774\uc2a4\ud2b8\ub41c\ub2e4. (TODO airbnb \uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc\uc5d0\uc11c\uc758 \ud638\uc774\uc2a4\ud305\uc758 \uc758\ubbf8\uac00 \ub2e4\ub978\uac00?)"),Object(r.b)("li",{parentName:"ul"},"\ud30c\uc77c\uc5d0\uc11c \ud568\uc218\uac00 \uc815\uc758\ub418\uae30 \uc804\uc5d0 \ud568\uc218\ub97c \ucc38\uc870\ud560 \uc218 \uc788\ub2e4"),Object(r.b)("li",{parentName:"ul"},"\uac00\ub3c5\uc131\uacfc \uc720\uc9c0 \ubcf4\uc218\uc131\uc744 \ud574\uce5c\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"\ud568\uc218\uc758 \uc815\uc758\uac00 \ud30c\uc77c\uc758 \ub098\uba38\uc9c0 \ubd80\ubd84\uc744 \uc774\ud574\ud558\ub294 \ub370 \ubc29\ud574\uac00 \ub420\ub9cc\ud07c \ucda9\ubd84\ud788 \ud06c\uac70\ub098 \ubcf5\uc7a1\ud558\ub2e4\uba74 -> \ubaa8\ub4c8\ub85c \ucd94\ucd9c"))),Object(r.b)("li",{parentName:"ul"},"\uc774\ub984\uc788\ub294 \ud568\uc218 \ud45c\ud604\uc2dd ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This eliminates any assumptions made about the Error\u2019s call stack."),Object(r.b)("li",{parentName:"ul"},"\uc5d0\ub7ec \ucf5c\uc2a4\ud0dd\uc5d0\uc11c\uc758 \uac00\uc815(\uc720\ucd94\ud574\uc57c \ud558\ub294\uc77c)\uc744 \uc5c6\uc564\ub2e4? \uc5d0\ub7ec\ub97c \ub354 \uc798\ucc3e\uc544\ub0bc \uc218 \uc788\ub2e4\ub77c\ub294 \uc758\ubbf8\ub85c \ud574\uc11d.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction foo() {\n  // ...\n}\n\n// bad\nconst foo = function () {\n  // ...\n};\n\n// good\n// lexical name distinguished from the variable-referenced invocation(s)\nconst short = function longUniqueMoreDescriptiveLexicalFoo() {\n  // ...\n};\n")),Object(r.b)("h2",{id:"wrap-iife--iife-parentheses-\uc73c\ub85c-\uac10\uc2f8\uae30"},"wrap-iife : IIFE: parentheses \uc73c\ub85c \uac10\uc2f8\uae30"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\uc758 IIFE \ub294 \uac70\uc758 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// immediately-invoked function expression (IIFE)\n(function () {\n  console.log('Welcome to the Internet. Please follow me.');\n}());\n")),Object(r.b)("h2",{id:"no-loop-func--\ube44\ud568\uc218\ube14\ub7ed\uc5d0\uc11c-\ud568\uc218-\uc120\uc5b8-x---\ubcc0\uc218\uc5d0-\ud568\uc218-\ud560\ub2f9"},"no-loop-func : \ube44\ud568\uc218\ube14\ub7ed\uc5d0\uc11c \ud568\uc218 \uc120\uc5b8 X -> \ubcc0\uc218\uc5d0 \ud568\uc218 \ud560\ub2f9."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"non-function block : ",Object(r.b)("inlineCode",{parentName:"li"},"if, while"),", etc"),Object(r.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\ub9c8\ub2e4 \ube44\ud568\uc218\ube14\ub7ed\uc5d0\uc11c\uc758 \ud568\uc218\ube14\ub7ed \ud574\uc11d\uc744 \ub2e4\ub974\uac8c \ud55c\ub2e4.")),Object(r.b)("h2",{id:"ecma-262-block-as-statements\uba85\ub839\ubb38-\ud568\uc218\uc120\uc5b8-as-not-statements"},"ECMA-262, block as statements(\uba85\ub839\ubb38), \ud568\uc218\uc120\uc5b8 as not statements"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nif (currentUser) {\n  function test() {\n    console.log('Nope.');\n  }\n}\n\n// good\nlet test;\nif (currentUser) {\n  test = () => {\n    console.log('Yup.');\n  };\n}\n")),Object(r.b)("h2",{id:"\ub9e4\uac1c\ubcc0\uc218\uc5d0-arguments-\uc0ac\uc6a9-x"},"\ub9e4\uac1c\ubcc0\uc218\uc5d0 arguments \uc0ac\uc6a9 X"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud568\uc218\uc758 arguments \ud504\ub85c\ud37c\ud2f0\ubcf4\ub2e4 \ub9e4\uac1c\ubcc0\uc218\uc758 arguments \uac00 \uc6b0\uc120\uc2dc \ub41c\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction foo(name, options, arguments) {\n  // ...\n}\n\n// good\nfunction foo(name, options, args) {\n  // ...\n}\n")),Object(r.b)("h2",{id:"prefer-rest-params--rest-syntax---arguments-x"},"prefer-rest-params : rest syntax ... > arguments X"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud568\uc218\uc5d0\uc11c arguments \uc740 \uc808\ub300 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uac83."),Object(r.b)("li",{parentName:"ul"},"\ub098\uba38\uc9c0 \uc778\uc218\ub294 \uc720\uc0ac\ubc30\uc5f4\uc774 \uc544\ub2cc \uc2e4\uc81c \ubc30\uc5f4\uc774\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction concatenateAll() {\n  const args = Array.prototype.slice.call(arguments);\n  return args.join('');\n}\n\n// good\nfunction concatenateAll(...args) {\n  return args.join('');\n}\n")),Object(r.b)("h2",{id:"default-parameter-syntax--\ud568\uc218-\uc778\uc790-\ubcc0\uacbd"},"default parameter syntax > \ud568\uc218 \uc778\uc790 \ubcc0\uacbd"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// really bad\nfunction handleThings(opts) {\n  // \uc808\ub300 \ud568\uc218\uc758 \uc778\uc790\ub97c \ubcc0\uacbd\ud574\uc120 \uc548\ub41c\ub2e4.\n  // opts \uac00 \uac70\uc9d3\uc774\uba74 \uc6d0\ud558\ub294 \uac1d\uccb4\ub85c \uc124\uc815\ub418\uc9c0\ub9cc \ubbf8\ubb18\ud55c \ubc84\uadf8\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n  opts = opts || {};\n  // ...\n}\n\n// still bad\nfunction handleThings(opts) {\n  if (opts === void 0) {\n    opts = {};\n  }\n  // ...\n}\n\n// good\nfunction handleThings(opts = {}) {\n  // ...\n}\n")),Object(r.b)("h2",{id:"\uc0ac\uc774\ub4dc-\uc774\ud399\ud2b8\ub97c-\uc720\ubc1c\ud558\ub294-default-parameter-\uc0ac\uc6a9-\ub9d0\uac83"},"\uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub97c \uc720\ubc1c\ud558\ub294 default parameter \uc0ac\uc6a9 \ub9d0\uac83."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var b = 1;\n// bad\nfunction count(a = b++) {\n  console.log(a);\n}\ncount();  // 1\ncount();  // 2\ncount(3); // 3\ncount();  // 3\n")),Object(r.b)("h2",{id:"default-param-last--default-parameters-\ub294-\ub9c8\uc9c0\ub9c9\uc5d0-\uc801\ub294\ub2e4"},"default-param-last : default parameters \ub294 \ub9c8\uc9c0\ub9c9\uc5d0 \uc801\ub294\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction handleThings(opts = {}, name) {\n  // ...\n}\n\n// good\nfunction handleThings(name, opts = {}) {\n  // ...\n}\n")),Object(r.b)("h2",{id:"no-new-func--\ud568\uc218-\uac1d\uccb4-\uc0dd\uc131-\ud568\uc218-\uc0dd\uc131\uc790-x"},"no-new-func : \ud568\uc218 \uac1d\uccb4 \uc0dd\uc131, \ud568\uc218 \uc0dd\uc131\uc790 X"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0dd\uc131\uc790\ub85c \ud568\uc218 \uc0dd\uc131",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ubb38\uc790\uc5f4\uc744 'eval()' \uc640 \uc720\uc0ac\ud558\uac8c \ud3c9\uac00\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ucde8\uc57d\uc810")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nvar add = new Function('a', 'b', 'return a + b');\n\n// still bad\nvar subtract = Function('a', 'b', 'return a - b');\n\n// good\nvar x = function (a, b) {\n    return a + b;\n};\n")),Object(r.b)("h2",{id:"space-before-function-paren-space-before-blocks--\ud568\uc218-\uc2dc\uadf8\ub2c8\ucc98\uc758-space-\uc720\uc9c0"},"space-before-function-paren, space-before-blocks : \ud568\uc218 \uc2dc\uadf8\ub2c8\ucc98\uc758 space \uc720\uc9c0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Glossary/Signature/Function"},"\ud568\uc218\uc2dc\uadf8\ub2c8\ucc98")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"functions \uadf8\ub9ac\uace0 methods \uc758 \uc785\ub825\uacfc \ucd9c\ub825\uc744 \uc815\uc758"),Object(r.b)("li",{parentName:"ul"},"parameters\uc640 \uadf8\ub4e4\uc758 types"),Object(r.b)("li",{parentName:"ul"},"\ubc18\ud658\uac12\uacfc \ud0c0\uc785"),Object(r.b)("li",{parentName:"ul"},"\ub358\uc838\uc9c0\uac70\ub098 \ucf5c\ubc31\uc73c\ub85c \ubc18\ud658\ub418\ub294 exceptions"),Object(r.b)("li",{parentName:"ul"},"object-oriented \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uba54\uc18c\ub4dc\uc758 \uc811\uadfc \uad8c\ud55c\uc5d0 \ub300\ud55c \uc815\ubcf4 (public, static, \ud639\uc740 prototype\uc640 \uac19\uc740 \ud0a4\uc6cc\ub4dc\ub4e4)."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc77c\uad00\uc131")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc774\ub984 \ucd94\uac00/\uc81c\uac70 -> \uacf5\ubc31 \ucd94\uac00/\uc81c\uac70 \uc758 \ub3d9\uc791\uc744 \uc548\ud574\ub3c4\ub428 "))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst f = function(){};\nconst g = function (){};\nconst h = function() {};\nconst a = function a() {};\n\n// good\nconst x = function () {};\nconst y = function a() {};\n")),Object(r.b)("h2",{id:"no-param-reassign--\ub9e4\uac1c-\ubcc0\uc218\ub85c-\uc804\ub2ec-\ub41c-\uac1d\uccb4-\uc870\uc791-\uae08\uc9c0"},"no-param-reassign : \ub9e4\uac1c \ubcc0\uc218\ub85c \uc804\ub2ec \ub41c \uac1d\uccb4 \uc870\uc791 \uae08\uc9c0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud568\uc218\uc758 (original)caller \uc5d0\uac8c \ubcc0\uc218 \ubd80\uc791\uc6a9\uc758 \uac00\ub2a5\uc131.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction f1(obj) {\n  obj.key = 1;\n}\n\n// good\nfunction f2(obj) {\n  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;\n}\n")),Object(r.b)("h2",{id:"no-param-reassign--\ub9e4\uac1c\ubcc0\uc218-\uc7ac\ud560\ub2f9-\uae08\uc9c0"},"no-param-reassign : \ub9e4\uac1c\ubcc0\uc218 \uc7ac\ud560\ub2f9 \uae08\uc9c0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218 \uc7ac\ud560\ub2f9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"arguments \uac1d\uccb4 \uc811\uadfc -> \uc608\uae30\uce58 \uc54a\uc740 \ud589\ub3d9 \ubc1c\uc0dd "),Object(r.b)("li",{parentName:"ul"},"\ucd5c\uc801\ud654 \uc774\uc288, especially in V8.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction f1(a) {\n  a = 1;\n  // ...\n}\n\nfunction f2(a) {\n  if (!a) { a = 1; }\n  // ...\n}\n\n// good\nfunction f3(a) {\n  const b = a || 1;\n  // ...\n}\n\nfunction f4(a = 1) {\n  // ...\n}\n")),Object(r.b)("h2",{id:"prefer-spread--\uac00\ubcc0-\ud568\uc218-spread-operator---apply"},"prefer-spread : \uac00\ubcc0 \ud568\uc218, spread operator ... > apply"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"variadic functions (\uac00\ubcc0 \ud568\uc218)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uac00\ubcc0 \uac1c\uc218\uc758 \uc778\uc218 \ud5c8\uc6a9"))),Object(r.b)("li",{parentName:"ul"},"apply \uba54\uc11c\ub4dc\ub85c context(this) \ub97c \uc81c\uacf5\ud574 \uc904 \ud544\uc694 \uc5c6\uc5b4 \uae68\ub057\ud558\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"apply \uba54\uc11c\ub4dc\ub97c \ud55c\ubc88 \ub354 \uc801\uc6a9\ud558\uae30 \ud798\ub4e4\ub2e4.\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nconst x = [1, 2, 3, 4, 5];\nconsole.log.apply(console, x);\n\n// good\nconsole.log(...x);\n\n// bad\nnew (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));\n\n// good\nnew Date(...[2016, 8, 5]);\n\nvar args = [1, 2, 3, 4];\n\n// bad\nMath.max.apply(Math, args);\n\n// good\nMath.max(...args);\n")),Object(r.b)("h2",{id:"function-paren-newline--\ud568\uc218\uc758-\uc5ec\ub7ec\uc904\uc758-\uc2dc\uadf8\ub2c8\uccd0\ud638\ucd9c-\ub4e4\uc5ec\uc4f0\uae30-\ud55c\uc904\uc5d0-\ud558\ub098\uc529"},"function-paren-newline : \ud568\uc218\uc758 \uc5ec\ub7ec\uc904\uc758 \uc2dc\uadf8\ub2c8\uccd0/\ud638\ucd9c, \ub4e4\uc5ec\uc4f0\uae30, \ud55c\uc904\uc5d0 \ud558\ub098\uc529"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction foo(bar,\n             baz,\n             quux) {\n  // ...\n}\n\n// good\nfunction foo(\n  bar,\n  baz,\n  quux,\n) {\n  // ...\n}\n\n// bad\nconsole.log(foo,\n  bar,\n  baz);\n\n// good\nconsole.log(\n  foo,\n  bar,\n  baz,\n);\n")))}s.isMDXComponent=!0},441:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(a),d=t,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return a?r.a.createElement(m,l(l({ref:n},s),{},{components:a})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,o=new Array(c);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);