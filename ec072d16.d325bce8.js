(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{455:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(3),o=(r(0),r(481));const a={title:"Dependency Inversion \uc81c\uc5b4\uc758 \uc5ed\uc804"},c={unversionedId:"javascript/OOP/OOP_dependency_inversion",id:"javascript/OOP/OOP_dependency_inversion",isDocsHomePage:!1,title:"Dependency Inversion \uc81c\uc5b4\uc758 \uc5ed\uc804",description:"`javascript",source:"@site/docs/javascript/OOP/OOP_dependency_inversion.md",slug:"/javascript/OOP/OOP_dependency_inversion",permalink:"/docs/javascript/OOP/OOP_dependency_inversion",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Dependency",permalink:"/docs/javascript/OOP/OOP_dependency"},next:{title:"Inversion of Control",permalink:"/docs/javascript/OOP/OOP_inversion_of_control"}},i=[],s={toc:i};function p({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const Worker = class {\n  run() {\n    console.log('working');\n  }\n\n  print() {\n    this.run();\n  }\n};\n\nconst HardWorker = class extends Worker {\n  run() {\n    console.log('hardWorking');\n  }\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const Manager = class {\n  #workers;\n\n  constructor(...workers) {\n    /*\n      HardWorker \uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0 \ub354 \ucd94\uc0c1\uc801\uc778 Worker \uc5d0 \uc758\uc874\ud558\uace0 \uc788\ub2e4.\n      \ub530\ub77c\uc11c \uc5ec\ub7ec Worker \ub4e4\uc744 \ub354 \ud655\uc7a5\ud574\ub3c4 Manager \uc758 \uc0dd\uc131\uc790\ub294 \uc798 \ub3d9\uc791\ud558\uac8c \ub41c\ub2e4. \n      Worker \uc758 \ud558\uc704 \ud0c0\uc785\ub4e4\uc740 Worker \ub85c \uc5c5\uce90\uc2a4\ud305 \ub418\uae30 \ub54c\ubb38\uc5d0 \uac00\ub2a5\ud558\ub2e4. \n      * \uc5b4\ub5a0\ud55c \uacbd\uc6b0\uc5d0\ub3c4 \ub2e4\uc6b4\uce90\uc2a4\ud305\uc740 \uae08\uc9c0 \u2192 Polymorphism (\ucd94\uc0c1\uc778\ud130\ud398\uc774\uc2a4) \uc0ac\uc6a9\n    */\n    if (workers.every(w => w instanceof Worker)) \n      this.#workers = workers; else throw 'invalid workers';\n  }\n\n  doWork() {\n    this.#workers.forEach(w => w.run());\n  }\n};\nconst manager = new Manager(new Worker(), new HardWorker());\nmanager.doWork();\n")))}p.isMDXComponent=!0},481:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},O=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),O=t,f=u["".concat(c,".").concat(O)]||u[O]||d[O]||a;return r?o.a.createElement(f,i(i({ref:n},p),{},{components:r})):o.a.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=O;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);