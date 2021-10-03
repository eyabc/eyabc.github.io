(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(417)),i={},u={unversionedId:"javascript/airbnb_js_style_guides/Destructuring",id:"javascript/airbnb_js_style_guides/Destructuring",isDocsHomePage:!1,title:"Destructuring",description:"Destructuring",source:"@site/docs/javascript/airbnb_js_style_guides/Destructuring.md",slug:"/javascript/airbnb_js_style_guides/Destructuring",permalink:"/docs/javascript/airbnb_js_style_guides/Destructuring",version:"current",sidebar:"javascript",previous:{title:"Arrays",permalink:"/docs/javascript/airbnb_js_style_guides/Arrays"},next:{title:"Strings",permalink:"/docs/javascript/airbnb_js_style_guides/Strings"}},s=[{value:"prefer-destructuring :",id:"prefer-destructuring-",children:[]},{value:"prefer-destructuring : \ubc30\uc5f4 destructuring",id:"prefer-destructuring--\ubc30\uc5f4-destructuring",children:[]},{value:"\ub9ac\ud134\uac12\uc774 \uc5ec\ub7ec\uac1c \uc77c \ub54c : \uac1d\uccb4 \ube44\uad6c\uc870\ud654 &gt; \ubc30\uc5f4 \ube44\uad6c\uc870\ud654",id:"\ub9ac\ud134\uac12\uc774-\uc5ec\ub7ec\uac1c-\uc77c-\ub54c--\uac1d\uccb4-\ube44\uad6c\uc870\ud654--\ubc30\uc5f4-\ube44\uad6c\uc870\ud654",children:[]}],o={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"destructuring"},"Destructuring"),Object(c.b)("h2",{id:"prefer-destructuring-"},"prefer-destructuring :"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc784\uc2dc references \uc0dd\uc131\uc744 \uc904\uc5ec\uc900\ub2e4.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction getFullName(user) {\n  const firstName = user.firstName;\n  const lastName = user.lastName;\n\n  return `${firstName} ${lastName}`;\n}\n\n// good\nfunction getFullName(user) {\n  const { firstName, lastName } = user;\n  return `${firstName} ${lastName}`;\n}\n\n// best\nfunction getFullName({ firstName, lastName }) {\n  return `${firstName} ${lastName}`;\n}\n")),Object(c.b)("h2",{id:"prefer-destructuring--\ubc30\uc5f4-destructuring"},"prefer-destructuring : \ubc30\uc5f4 destructuring"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3, 4];\n\n// bad\nconst first = arr[0];\nconst second = arr[1];\n\n// good\nconst [first, second] = arr;\n")),Object(c.b)("h2",{id:"\ub9ac\ud134\uac12\uc774-\uc5ec\ub7ec\uac1c-\uc77c-\ub54c--\uac1d\uccb4-\ube44\uad6c\uc870\ud654--\ubc30\uc5f4-\ube44\uad6c\uc870\ud654"},"\ub9ac\ud134\uac12\uc774 \uc5ec\ub7ec\uac1c \uc77c \ub54c : \uac1d\uccb4 \ube44\uad6c\uc870\ud654 > \ubc30\uc5f4 \ube44\uad6c\uc870\ud654"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uac1d\uccb4 \ube44\uad6c\uc870\ud654\ub294, \ucd94\ud6c4\uc5d0 \ucf54\ub4dc\uc5d0 \uc0c8 \uc18d\uc131\uc744 \ucd94\uac00 \ud560 \uc218 \uc788\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ub9ac\ud134 \uac12\uc744 \uc21c\uc11c\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uac00\uc838\uc62c \uc218 \uc788\ub2e4. "),Object(c.b)("li",{parentName:"ul"},"\ud638\ucd9c \ud560 \ub54c, \uc6d0\ud558\ub294 data \ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction processInput(input) {\n  // then a miracle occurs\n  return [left, right, top, bottom];\n}\n\n// \ud638\ucd9c\uc744 \ud560 \ub54c \ubc18\ud658\uac12\uc758 \uc21c\uc11c\ub97c \uace0\ub824\ud574\uc57c \ud558\ub294 \ubb38\uc81c\uac00 \uc788\ub2e4.\nconst [left, __, top] = processInput(input);\n\n// good\nfunction processInput(input) {\n  // then a miracle occurs\n  return { left, right, top, bottom };\n}\n\n// \ud638\ucd9c \ud560 \ub54c, \uc6d0\ud558\ub294 data \ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4.\nconst { left, top } = processInput(input);\n")))}l.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return r?a.a.createElement(f,u(u({ref:t},o),{},{components:r})):a.a.createElement(f,u({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);