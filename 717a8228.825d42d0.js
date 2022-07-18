(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(481));const c={title:"Custom Providers"},a={unversionedId:"nest-js/fundamentals/custom_providers",id:"nest-js/fundamentals/custom_providers",isDocsHomePage:!1,title:"Custom Providers",description:"https://docs.nestjs.com/",source:"@site/docs/nest-js/fundamentals/custom_providers.mdx",slug:"/nest-js/fundamentals/custom_providers",permalink:"/docs/nest-js/fundamentals/custom_providers",version:"current",sidebar:"nestJs",previous:{title:"custom-decorators",permalink:"/docs/nest-js/overview/custom-decorators"},next:{title:"caching",permalink:"/docs/nest-js/techniques/caching"}},s=[{value:"Custom Providers",id:"custom-providers",children:[]},{value:"DI fundamentals \uae30\ucd08",id:"di-fundamentals-\uae30\ucd08",children:[]}],i={toc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.nestjs.com/"},"https://docs.nestjs.com/")),Object(o.b)("h2",{id:"custom-providers"},"Custom Providers"),Object(o.b)("p",null,"\uc9c0\uae08\uae4c\uc9c0  constructor based dependency injection DI \ud328\ud134\ub9cc\uc744 \ud0d0\uad6c\ud588\uc2b5\ub2c8\ub2e4. ",Object(o.b)("br",null),"\n\uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc774 \ub354 \ubcf5\uc7a1\ud574\uc9d0\uc5d0 \ub530\ub77c DI \uc2dc\uc2a4\ud15c\uc758 \uc804\uccb4 \uae30\ub2a5\uc744 \ud65c\uc6a9\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc73c\ubbc0\ub85c \ub354 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),Object(o.b)("h2",{id:"di-fundamentals-\uae30\ucd08"},"DI fundamentals \uae30\ucd08"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.service.ts"',title:'"cats.service.ts"'},"import { Injectable } from '@nestjs/common';\nimport { Cat } from './interfaces/cat.interface';\n\n@Injectable()\nexport class CatsService {\n  private readonly cats: Cat[] = [];\n\n}\n")))}u.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(a,".").concat(m)]||l[m]||d[m]||c;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);