(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(277)),o={title:"TypeCheck"},p={unversionedId:"javascript/OOP/OOP_type_check",id:"javascript/OOP/OOP_type_check",isDocsHomePage:!1,title:"TypeCheck",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud0c0\uc785\uc5b8\uc5b4\uac00 \uc544\ub2c8\ub2e4",source:"@site/docs/javascript/OOP/OOP_type_check.md",slug:"/javascript/OOP/OOP_type_check",permalink:"/docs/javascript/OOP/OOP_type_check",version:"current",sidebar:"javascript",previous:{title:"Design Patterns",permalink:"/docs/javascript/OOP/OOP_design_patterns"},next:{title:"MVVM Role Design",permalink:"/docs/javascript/OOP/OOP_mvvm_role_design"}},i=[{value:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud0c0\uc785\uc5b8\uc5b4\uac00 \uc544\ub2c8\ub2e4",id:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294-\ud0c0\uc785\uc5b8\uc5b4\uac00-\uc544\ub2c8\ub2e4",children:[]},{value:"TypeCheck \ud568\uc218",id:"typecheck-\ud568\uc218",children:[{value:"<code>===</code> \uc774 \uc544\ub2cc <code>==</code> \uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720",id:"-\uc774-\uc544\ub2cc--\uc744-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720",children:[]},{value:"type \ud568\uc218\uc758 \uc0ac\uc6a9",id:"type-\ud568\uc218\uc758-\uc0ac\uc6a9",children:[]}]}],l={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294-\ud0c0\uc785\uc5b8\uc5b4\uac00-\uc544\ub2c8\ub2e4"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud0c0\uc785\uc5b8\uc5b4\uac00 \uc544\ub2c8\ub2e4"),Object(c.b)("p",null,"\ub7f0\ud0c0\uc784\uc5d0 throw \ub97c \ub358\uc9c0\uc9c0 \uc54a\uc73c\uba74 \uc624\ub958\uac00 \uc804\ud30c\ub41c\ub2e4."),Object(c.b)("p",null,"\ub7f0\ud0c0\uc784\ubc16\uc5d0 \uc5c6\ub294 \uc5b8\uc5b4\uc758 \uac00\uc7a5 \uc88b\uc740 \uc804\ub7b5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc5d0\ub7ec\ub97c \uac10\uc9c0\ud558\ub294 \uc989\uc2dc throw \ub97c \ub358\uc838\uc57c \ub514\ubc84\uae45\ud560 \uc218 \uc788\ub2e4.")),Object(c.b)("h2",{id:"typecheck-\ud568\uc218"},"TypeCheck \ud568\uc218"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const type = (target, type) => {\n  /*\n    string, number, boolean \ud0c0\uc785\uc744 \ube44\uad50\ud560 \ub54c\n  * string, number, boolean \uc740 \uac1d\uccb4\uac00 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \ud0c0\uc785\ube44\uad50\ub97c \ud560 \ub54c typeof \ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\uace0,\n  * typeof \uc758 \uacb0\uacfc \ud0c0\uc785\uc774 \ubb38\uc790\uc5f4\ub85c \ubc18\ud658\ub41c\ub2e4.\n  */\n  if (typeof type == 'string') {\n    if (typeof target != type) \n      throw `invaild type ${target}: ${type}`;\n\n  // \uac1d\uccb4 \ube44\uad50\ud560 \ub54c\n  } else if (!(target instanceof type))   \n      throw `invaild type ${target}: ${type}`;\n\n  return target;\n};\n\ntype(12, 'number');\ntype('abc', 'string');\ntype([1, 2, 3], Array);\ntype(new Set, Set);\ntype(document.body, HTMLElement);\n")),Object(c.b)("h3",{id:"-\uc774-\uc544\ub2cc--\uc744-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720"},Object(c.b)("inlineCode",{parentName:"h3"},"===")," \uc774 \uc544\ub2cc ",Object(c.b)("inlineCode",{parentName:"h3"},"==")," \uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"===")," : \ud615 \uc77c\uce58 \uac80\uc0ac + ",Object(c.b)("inlineCode",{parentName:"p"},"==")," \uac80\uc0ac \u2192 \ub450\ubc88 \uc791\ub3d9\uc744 \ud558\uae30 \ub54c\ubb38\uc5d0 \ub290\ub9ac\ub2e4"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"type")," \uc740 javascript \uc758 \ud2b9\uc9d5\uc744 \uc798 \uc0b4\ub9b0 \ud568\uc218\uc774\ub2e4. "),Object(c.b)("h3",{id:"type-\ud568\uc218\uc758-\uc0ac\uc6a9"},"type \ud568\uc218\uc758 \uc0ac\uc6a9"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud568\uc218\uc758 \uc778\uc790\ub97c \uc758\uc2dd\ud560 \ub54c,"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\uc67c\ucabd\uc5d0\uc11c \uc624\ub978\ucabd\uc73c\ub85c \uc2a4\ucf54\ud504\uac00 \ud558\ub098\uc529 \ub9cc\ub4e4\uc5b4\uc9c0\uba74\uc11c \ucc98\ub9ac\ub41c\ub2e4. "),Object(c.b)("li",{parentName:"ul"},"\ub530\ub77c\uc11c 2\ubc88\uc9f8 \uc778\uc790\ub294 1\ubc88\uc9f8 \uc778\uc790\uc758 \uac12\uc744 \uc54c\uace0 \uc788\ub2e4."))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"// \uccab\ubc88\uc9f8 \uc778\uc790\uac00 Array \uac00 \uc544\ub2c8\uba74, \uc989\uc2dc throw \uac00 \uc77c\uc5b4\ub09c\ub2e4. \nconst test = (arr, _ = type(arr, Array)) => {\n  console.log(arr);\n};\n\ntest([1, 2, 3]);\ntest(123);\n\nconst test2 = (a, b, c, _0 = type(a, 'string'), _1 = type(b, 'number'), _2 = type(c, 'boolean')) => {\n  console.log(a, b, c);\n};\ntest2('abc', 123, true);\n")))}b.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),O=r,y=u["".concat(o,".").concat(O)]||u[O]||s[O]||c;return n?a.a.createElement(y,p(p({ref:t},l),{},{components:n})):a.a.createElement(y,p({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);