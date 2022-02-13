(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{321:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(443));const c={},a={unversionedId:"nest-js/overview/providers",id:"nest-js/overview/providers",isDocsHomePage:!1,title:"providers",description:"\uacf5\uae09\uc790\ub85c\uc11c \uc8fc\uc785\ub418\ub294 \ub300\uc0c1\ub4e4",source:"@site/docs/nest-js/overview/providers.mdx",slug:"/nest-js/overview/providers",permalink:"/docs/nest-js/overview/providers",version:"current",sidebar:"nestJs",previous:{title:"controller",permalink:"/docs/nest-js/overview/controller"},next:{title:"modules",permalink:"/docs/nest-js/overview/modules"}},i=[{value:"\uacf5\uae09\uc790\ub85c\uc11c \uc8fc\uc785\ub418\ub294 \ub300\uc0c1\ub4e4",id:"\uacf5\uae09\uc790\ub85c\uc11c-\uc8fc\uc785\ub418\ub294-\ub300\uc0c1\ub4e4",children:[]},{value:"Service",id:"service",children:[]},{value:"Scopes",id:"scopes",children:[]},{value:"Custom Providers",id:"custom-providers",children:[]},{value:"Optional Providers",id:"optional-providers",children:[]},{value:"Property-based, \uc18d\uc131 \uae30\ubc18 \uc8fc\uc785",id:"property-based-\uc18d\uc131-\uae30\ubc18-\uc8fc\uc785",children:[]},{value:"\uacf5\uae09\uc790 \ub4f1\ub85d app.module.ts",id:"\uacf5\uae09\uc790-\ub4f1\ub85d-appmodulets",children:[]},{value:"\ub514\ub809\ud130\ub9ac \uad6c\uc870",id:"\ub514\ub809\ud130\ub9ac-\uad6c\uc870",children:[]}],l={toc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\uacf5\uae09\uc790\ub85c\uc11c-\uc8fc\uc785\ub418\ub294-\ub300\uc0c1\ub4e4"},"\uacf5\uae09\uc790\ub85c\uc11c \uc8fc\uc785\ub418\ub294 \ub300\uc0c1\ub4e4"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Nest \ub7f0\ud0c0\uc784 \uc2dc\uc2a4\ud15c\uc5d0 \uc704\uc784\ub41c\ub2e4."),Object(o.b)("li",{parentName:"ul"},"services, repositories, factories, helpers ...")),Object(o.b)("h2",{id:"service"},"Service"),Object(o.b)("p",null,"Controller \uc758 \uacf5\uae09\uc790"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@Injectable()")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Nest IoC \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \ud074\ub798\uc2a4\uc784\uc744 \uc120\uc5b8.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{3} title=\"CLI with '$ nest g service cats'\"","{3}":!0,title:'"CLI',with:!0,"'$":!0,nest:!0,g:!0,service:!0,"cats'\"":!0},"import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class CatsService { }\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'{3} title="\uc0dd\uc131\uc790 \uae30\ubc18 \uc758\uc874\uc131 \uc8fc\uc785"',"{3}":!0,title:'"\uc0dd\uc131\uc790',"\uae30\ubc18":!0,"\uc758\uc874\uc131":!0,'\uc8fc\uc785"':!0},"@Controller('cats')\nexport class CatsController {\n  constructor(private catsService: CatsService) {}\n}\n")),Object(o.b)("h2",{id:"scopes"},"Scopes"),Object(o.b)("p",null,"Provider \ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc218\uba85\uc8fc\uae30\uc640 \ub3d9\uae30\ud654\ub41c \uc218\uba85\uc744 \uac16\ub294\ub2e4.\n(\ucee4\uc2a4\ud140\uac00\ub2a5)"),Object(o.b)("h2",{id:"custom-providers"},"Custom Providers"),Object(o.b)("p",null,"\uacf5\uae09\uc790\ub97c \uc815\uc758\ud558\ub294 \ubc29\ubc95"),Object(o.b)("p",null,"you can use plain values, classes, and either asynchronous or synchronous factories."),Object(o.b)("h2",{id:"optional-providers"},"Optional Providers"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{3,5}","{3,5}":!0},"import { Injectable, Optional, Inject } from '@nestjs/common';\n\n@Injectable()\nexport class HttpService<T> {\n  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}\n} // @Inject('HTTP_OPTIONS') default Value\n")),Object(o.b)("h2",{id:"property-based-\uc18d\uc131-\uae30\ubc18-\uc8fc\uc785"},"Property-based, \uc18d\uc131 \uae30\ubc18 \uc8fc\uc785"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{5,6}","{5,6}":!0},"import { Injectable, Inject } from '@nestjs/common';\n\n@Injectable()\nexport class HttpService<T> {\n  @Inject('HTTP_OPTIONS')\n  private readonly httpClient: T;\n}\n")),Object(o.b)("p",null,"\ucd5c\uc0c1\uc704 \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud55c \ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c ",Object(o.b)("inlineCode",{parentName:"p"},"super")," \ub97c \ud1b5\ud55c \uc8fc\uc785\uc758 \ubc88\uac70\ub85c\uc6c0 \ud574\uacb0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uc774\uc678, ",Object(o.b)("a",{parentName:"li",href:"/.."},"\uc0dd\uc131\uc790 \uc8fc\uc785\uc744 \uc120\ud638\ud55c\ub2e4"))),Object(o.b)("h2",{id:"\uacf5\uae09\uc790-\ub4f1\ub85d-appmodulets"},"\uacf5\uae09\uc790 \ub4f1\ub85d app.module.ts"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{3}","{3}":!0},"@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n})\nexport class AppModule {}\n")),Object(o.b)("h2",{id:"\ub514\ub809\ud130\ub9ac-\uad6c\uc870"},"\ub514\ub809\ud130\ub9ac \uad6c\uc870"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/152130934-b9fb5d8e-26f4-4405-b0b9-dea90328074a.png",alt:"image"})))}s.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||c;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);