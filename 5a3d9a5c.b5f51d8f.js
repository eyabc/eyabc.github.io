(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),c=(n(0),n(443));const a={},o={unversionedId:"javascript/react/etc/Environment",id:"javascript/react/etc/Environment",isDocsHomePage:!1,title:"Environment",description:"\ud658\uacbd \uc138\ud305\ud558\uae30",source:"@site/docs/javascript/react/etc/Environment.md",slug:"/javascript/react/etc/Environment",permalink:"/docs/javascript/react/etc/Environment",version:"current"},i=[{value:"\ud658\uacbd \uc138\ud305\ud558\uae30",id:"\ud658\uacbd-\uc138\ud305\ud558\uae30",children:[]},{value:"Reference",id:"reference",children:[]}],p={toc:i};function l({components:e,...t}){return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\ud658\uacbd-\uc138\ud305\ud558\uae30"},"\ud658\uacbd \uc138\ud305\ud558\uae30"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uc608",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc6f9 \uc11c\ube44\uc2a4 \uac1c\ubc1c\uc2dc, \uac1c\ubc1c(development)\ubaa8\ub4dc\uc640 \ubc30\ud3ec(production)\ubaa8\ub4dc \ub4f1.. \ub530\ub77c \ub2e4\ub978 \uacb0\uacfc\uac00 \ub098\uc640\uc57c \ud558\ub294 \uacbd\uc6b0"),Object(c.b)("li",{parentName:"ul"},"\uc694\uccad\ud560 API \uc11c\ubc84\uc758 \uc8fc\uc18c\uac00 \ub0b4 \ucef4\ud4e8\ud130\uc5d0\uc11c \uac1c\ubc1c\uc911\uc77c\ub54c\uc640 \uc11c\ubc84\uc5d0 \uc62c\ub77c\uac14\uc744 \ub54c \ub2e4\ub978\uacbd\uc6b0"),Object(c.b)("li",{parentName:"ul"},"\uac1c\ubc1c\uc911\uc778 \ucf54\ub4dc\uc5d0\uc11c \ubcf4\uc5ec\uc8fc\uc9c0 \ub9d0\uc544\uc57c \ud560 \uc5d0\ub7ec \uba54\uc2dc\uc9c0"),Object(c.b)("li",{parentName:"ul"},"\uce90\uc2f1 \uc5ec\ubd80"),Object(c.b)("li",{parentName:"ul"},"\ub2e4\ub978 \ud398\uc774\uc9c0")))),Object(c.b)("h1",{id:"directory--files"},"Directory & Files"),Object(c.b)("p",null,".(src)\n\u2514\u2500 config\n\u2514\u2500 env.js\n\u2514\u2500 config.js"),Object(c.b)("h1",{id:"dotenv"},Object(c.b)("a",{parentName:"h1",href:"/docs/javascript/react/etc/Dotenv"},"dotenv")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud658\uacbd \ubcc0\uc218(environment variables)\ub97c .env \ud30c\uc77c \ub0b4\ubd80\uc758 process.env\ub85c \ub85c\ub4dc\ud569\ub2c8\ub2e4.")),Object(c.b)("h1",{id:"envjs"},"env.js"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"export default {\n    env: process.env.NODE_ENV || 'development'\n}\n")),Object(c.b)("h1",{id:"configconfigjs"},"./config/config.js"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"import env from './env'\n\nconst config = {\n    env,\n};\n\nexport default config;\n")),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://guswnsxodlf.github.io/production-with-webpack"},"http://guswnsxodlf.github.io/production-with-webpack")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},"https://www.npmjs.com/package/dotenv"))))}l.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,m=b["".concat(o,".").concat(f)]||b[f]||s[f]||a;return n?c.a.createElement(m,i(i({ref:t},l),{},{components:n})):c.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);