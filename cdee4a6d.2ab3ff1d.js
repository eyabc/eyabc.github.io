(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),i=(r(0),r(196));const a={title:"Visitors"},c={unversionedId:"javascript/OOP/OOP_visitor",id:"javascript/OOP/OOP_visitor",isDocsHomePage:!1,title:"Visitors",description:"`javascript",source:"@site/docs/javascript/OOP/OOP_visitor.md",slug:"/javascript/OOP/OOP_visitor",permalink:"/docs/javascript/OOP/OOP_visitor",version:"current",sidebar:"javascript",previous:{title:"\uc12c\uc138\ud55c \uad8c\ud55c \uc870\uc815",permalink:"/docs/javascript/OOP/OOP_access"},next:{title:"\ucd94\uc0c1\uacc4\uce35 \ubd88\uc77c\uce58",permalink:"/docs/javascript/OOP/OOP_abstract_layer"}},o=[{value:"Visitor \uc758 \ub4f1\uc7a5\uc778\ubb3c",id:"visitor-\uc758-\ub4f1\uc7a5\uc778\ubb3c",children:[{value:"1. care taker \ubcf4\uc0b4\ud54c\uc744 \ubc1b\ub294 \uac83",id:"1-care-taker-\ubcf4\uc0b4\ud54c\uc744-\ubc1b\ub294-\uac83",children:[]},{value:"2. Visitor",id:"2-visitor",children:[]}]},{value:"DomVisitor",id:"domvisitor",children:[]}],l={toc:o};function s({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/r4vOF7WpxgM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const Scanner = class {\n  scan(el, _ = type(el, HTMLElement)) {\n    const binder = new Binder;\n    this.checkItem(binder, el);\n    /* 2) start */\n    const stack = [el.firstElementChild];\n    let target;\n    while (target = stack.pop()) {\n      this.checkItem(binder, target);\n      if (target.firstElementChild) stack.push(target.firstElementChild);\n      if (target.nextElementSibling) stack.push(target.nextElementSibling);\n    }\n    /* end \uc774 \ubd80\ubd84\uc744 \uc704\uc784\ud574\uc57c \ud55c\ub2e4.  */\n    return binder;\n  }\n\n  checkItem(binder, el) {\n    // 1) \ubc14\uc778\ub354\uc5d0\uc11c \uc2a4\uce90\ub108\ub97c \ube7c\ub294 \uac83\uc758 \uc774\uc720\ub294 \uc774\uacf3\uc5d0 \uc788\ub2e4.  \n    // \uc2a4\uce90\ub108\uc758 \uc874\uc7ac\uc774\uc720 (\ubcc0\ud654\uc728) \uadf8\ub807\ub2e4\uba74 scan \uba54\uc11c\ub4dc\uc5d0\ub294 \uacfc\ud55c \uc5ed\ud560(loop)\uc774 \uc788\ub2e4\uace0 \uc0dd\uac01\ub418\uc9c0 \uc54a\ub294\uac00.?\n    const vm = el.getAttribute('data-viewmodel');\n    if (vm) binder.add(new BinderItem(el, vm));\n  }\n};\n")),Object(i.b)("p",null,"\uc704\uc784\ud558\ub294 \uacfc\uc815\uc5d0\uc11c Visitor \ub97c \uc124\uacc4\ud558\uac8c \ub41c\ub2e4."),Object(i.b)("h2",{id:"visitor-\uc758-\ub4f1\uc7a5\uc778\ubb3c"},"Visitor \uc758 \ub4f1\uc7a5\uc778\ubb3c"),Object(i.b)("h3",{id:"1-care-taker-\ubcf4\uc0b4\ud54c\uc744-\ubc1b\ub294-\uac83"},"1. care taker \ubcf4\uc0b4\ud54c\uc744 \ubc1b\ub294 \uac83"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uc6d0\ubcf8 \ub370\uc774\ud130 \uc18c\uc2a4 \uad6c\uc870")),Object(i.b)("h3",{id:"2-visitor"},"2. Visitor"),Object(i.b)("p",null,"Visitor \uc5d0\uac8c \uc790\uae30 \uc790\uc2e0\uc744 \uc8fc\uba74 Visitor \uac00 \uc790\uae30 \uc790\uc2e0\uc758 \uad6c\uc870\ub97c \ub3cc\uc544\uc8fc\ub294 \uac83."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"care taker \uac00 Visitor \ub97c \uc18c\uc720\ud558\uac8c \ub41c\ub2e4.")),Object(i.b)("p",null,"\uadf8\ub807\ub2e4\uba74 \ube44\uc9c0\ud130\uc5d0\uac8c \ud544\uc694\ud55c \uac83\uc740 \ubb34\uc5c7\uc77c\uae4c?"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const Visitor = class {\n  // \ucd94\uc0c1 \uc778\ud130\ud398\uc774\uc2a4 \uc785\uc7a5\uc5d0\uc11c\ub294 target \uc758 \ud0c0\uc785\uc5d0 \uad00\uc2ec\uc774 \uc5c6\ub2e4.\n  visit(action, target, _0 = type(action, 'function')) {\n    throw 'override';\n  }\n};\n")),Object(i.b)("h2",{id:"domvisitor"},"DomVisitor"),Object(i.b)("p",null,"\uc8fc\uc5b4\uc9c4 el \ub97c \uc21c\ud68c\ud558\ub294 \uc81c\uc5b4 \ucf54\ub4dc\ub97c \uac16\uace0 \uc788\ub2e4. "),Object(i.b)("p",null,"\uc124\uacc4\uc758 \uad81\uadf9\uc801\uc778 \ubaa9\ud45c \u2192 ",Object(i.b)("strong",{parentName:"p"},"\uc81c\uc5b4\uc758 \uc5ed\uc804")," "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"\uc2a4\uce90\ub108\uc758 \uc885\ub958\uac00 \ubb34\uc5c7\uc774 \ub410\ub4e0, DomVisitor \ub97c \uac16\uac8c \ub418\uba74 DOM \uc5d0 \ub300\ud55c \uc21c\ud68c\uc81c\uc5b4\ucf54\ub4dc\ub97c \uc218\ud589\ud560 \uc218 \uc788\ub2e4")),Object(i.b)("p",null,"Visitor \ud328\ud134"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uc5b4\ub824\uc6b4 \uc790\ub8cc\uad6c\uc870\ub098 \ud2b9\uc815\ud55c \ucf54\ub4dc\uc758 \uc81c\uc5b4\ub97c \uc678\ubd80\uc5d0\uc11c \uc644\uc804\ud788 \uc720\uc785\uc774 \ub41c\ub2e4."),Object(i.b)("li",{parentName:"ul"},"Visitor \ub97c \ud1b5\ud55c \uc81c\uc5b4\uc758 \uc5ed\uc804"),Object(i.b)("li",{parentName:"ul"},"\ucf54\ub4dc \u2192 \uac1d\uccb4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc5ed\ud560\ub54c\ubb38\uc774 \uc544\ub2cc, ",Object(i.b)("strong",{parentName:"li"},"\uc81c\uc5b4\ub97c \uc678\ubd80\uc5d0 \uc704\uc784\ud558\uae30 \uc704\ud574\uc11c")," \uac1d\uccb4\ub85c \ubc14\uafb8\uc5c8\ub2e4. ")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"DOM Loop \ub294 Scanner \ub9cc\uc758 \uc5ed\ud560\uc774 \uc544\ub2c8\ub2e4.")," "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DOM \uc758 \uc11c\ube0c\ub8e8\ud504\ub97c \ub3c4\ub294 \ubaa8\ub4e0 \uacf3\uc5d0\uc11c \uc4f8 \uc218 \uc788\ub2e4. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const DomVisitor = class extends Visitor {\n // \uc790\uc2dd\uc5d0\uc11c \uad6c\uccb4\uc801\uc778 \ud615\uc744 \uc5bb\uac8c \ub41c\ub2e4 (generic).. \uc5b8\uc5b4\uac00 \uc9c0\uc6d0\ud558\ub294 \uae30\ub2a5 \ubcf4\ub2e4\ub294 \uac1c\ub150\uc744 \uc5b4\ub5bb\uac8c \uc801\uc6a9\ud558\ub290\ub0d0\uac00 \uc911\uc694\ud558\ub2e4.....\n  visit(action, target, _0 = type(action, 'function'), _1 = type(target, HTMLElement)) {\n    const stack = [];\n    let curr = target.firstElementChild;\n    do {\n      // \ube44\uc9c0\ud130\ub97c \ud638\ucd9c\ud55c \uacf3\uacfc\uc758 \uc0c1\ud638\uc791\uc6a9\uc774 \uc77c\uc5b4\ub09c\ub2e4.\n      // \ub9c8\uce58 \ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc\uc758 \ud6c5\uacfc \uac19\uc740 \uc5ed\ud560\uc744 \ud55c\ub2e4. careTaker \uc640\uc758 \uae34\ubc00\ud55c \ud611\uc870\n      action(curr);\n      if (curr.firstElementChild) stack.push(curr.firstElementChild);\n      if (curr.nextElementSibling) stack.push(curr.nextElementSibling);\n    } while (curr = stack.pop());\n  }\n};\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const Scanner = class {\n  #visitor;\n\n  constructor(visitor, _ = type(visitor, DomVisitor)) {\n    this.#visitor = visitor;\n  }\n\n  scan(target, _ = type(target, HTMLElement)) {\n    const binder = new Binder, f = el => {\n      const vm = el.getAttribute('data-viewmodel');\n      if (vm) binder.add(new BinderItem(el, vm));\n    };\n    f(target);\n    this.#visitor.visit(f, target);\n    return binder;\n  }\n};\n")))}s.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),O=n,m=u["".concat(c,".").concat(O)]||u[O]||b[O]||a;return r?i.a.createElement(m,o(o({ref:t},s),{},{components:r})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);