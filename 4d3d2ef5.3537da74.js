(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),c=n(7),a=(n(0),n(441)),o={},p={unversionedId:"javascript/react/etc/Dotenv",id:"javascript/react/etc/Dotenv",isDocsHomePage:!1,title:"Dotenv",description:"Dotenv",source:"@site/docs/javascript/react/etc/Dotenv.md",slug:"/javascript/react/etc/Dotenv",permalink:"/docs/javascript/react/etc/Dotenv",version:"current"},i=[{value:"Dotenv",id:"dotenv",children:[]},{value:"Reference",id:"reference",children:[]}],l={toc:i};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"dotenv"},"Dotenv"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../../Term/ZeroDependencyModule.md"},"zero-dependency module")),Object(a.b)("li",{parentName:"ul"},"\ud658\uacbd \ubcc0\uc218(environment variables)\ub97c .env \ud30c\uc77c \ub0b4\ubd80\uc758 process.env\ub85c \ub85c\ub4dc\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ucf54\ub4dc\uc640 \ubcc4\ub3c4\ub85c \ud658\uacbd\uc5d0 \uad6c\uc131\uc744 \uc800\uc7a5\ud558\ub294 \uac83\uc740 The Twelve-Factor App \ubc29\ubc95\ub860\uc744 \uae30\ubc18\uc73c\ub85c\ud569\ub2c8\ub2e4.")),Object(a.b)("h1",{id:"directory--files"},"Directory & Files"),Object(a.b)("p",null,".(work)\n\u2514\u2500 env\n\u2514\u2500 .env.work.dev\n\u2514\u2500 .env.work"),Object(a.b)("h1",{id:"dotenv-cli-install"},"dotenv-cli install"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn add dotenv-cli\n")),Object(a.b)("h1",{id:"envworkdev"},".env.work.dev"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"# work dev\nNODE_ENV=development\n")),Object(a.b)("h1",{id:"envwork"},".env.work"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"# work production\nNODE_ENV=production\n")),Object(a.b)("h1",{id:"packagejson"},"package.json"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:"{","{":!0},'    script: {\n        "work-dev": "dotenv -e env/.env.work.dev react-app-rewired start",\n        "work": "dotenv -e env/.env.work react-app-rewired start"\n    }\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"/docs/javascript/react/etc/ReactAppRewired"},"react-app-rewired"))),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},"https://www.npmjs.com/package/dotenv")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv-cli"},"https://www.npmjs.com/package/dotenv-cli"))))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),b=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,v=u["".concat(o,".").concat(s)]||u[s]||d[s]||a;return n?c.a.createElement(v,p(p({ref:t},l),{},{components:n})):c.a.createElement(v,p({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);