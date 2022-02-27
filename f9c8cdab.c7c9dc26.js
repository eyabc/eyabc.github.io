(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{443:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(451)),c={},i={unversionedId:"nest-js/overview/custom-decorators",id:"nest-js/overview/custom-decorators",isDocsHomePage:!1,title:"custom-decorators",description:"https://docs.nestjs.com/custom-decorators",source:"@site/docs/nest-js/overview/custom-decorators.mdx",slug:"/nest-js/overview/custom-decorators",permalink:"/docs/nest-js/overview/custom-decorators",version:"current",sidebar:"nestJs",previous:{title:"interceptor",permalink:"/docs/nest-js/overview/interceptor"},next:{title:"Custom Providers",permalink:"/docs/nest-js/fundamentals/custom_providers"}},s=[{value:"Custom route decorators",id:"custom-route-decorators",children:[]},{value:"Param decorators",id:"param-decorators",children:[]},{value:"Passing data",id:"passing-data",children:[]},{value:"Working with pipes",id:"working-with-pipes",children:[]},{value:"Decorator Composition",id:"decorator-composition",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.nestjs.com/custom-decorators"},"https://docs.nestjs.com/custom-decorators")),Object(o.b)("h2",{id:"custom-route-decorators"},"Custom route decorators"),Object(o.b)("p",null,"Nest \ub294 \ub370\ucf54\ub808\uc774\ud130 \uc911\uc2ec\uc73c\ub85c \uad6c\ucd95\ub418\uc5c8\ub2e4."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),Object(o.b)("a",{parentName:"h5",href:"https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841"},"ES2016 decorator"))),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\ud568\uc218\ub97c \ubc18\ud658\ud558\uace0, target, name, property \ub97c \uc778\uc218\ub85c \uac00\uc9c8 \uc218 \uc788\ub294 \ud45c\ud604\uc2dd"),Object(o.b)("li",{parentName:"ul"},"@ character \ub97c class, method, property Top \uc5d0 \ub370\ucf54\ub808\uc774\ud305 \ud560 \uc218 \uc788\ub2e4.")))),Object(o.b)("h2",{id:"param-decorators"},"Param decorators"),Object(o.b)("p",null,"Nest \uac00 \uc81c\uacf5\ud558\ub294 Param decorators \ub294,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"HTTP route handler \uc640 \ud568\uaed8 \uc4f0\uc778\ub2e4.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Request()"),", ",Object(o.b)("inlineCode",{parentName:"td"},"@Req()")),Object(o.b)("td",{parentName:"tr",align:null},"req")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Response()"),", ",Object(o.b)("inlineCode",{parentName:"td"},"@Res()*")),Object(o.b)("td",{parentName:"tr",align:null},"res")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Next()")),Object(o.b)("td",{parentName:"tr",align:null},"next")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Session()")),Object(o.b)("td",{parentName:"tr",align:null},"req.session")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Param(key?: string)")),Object(o.b)("td",{parentName:"tr",align:null},"req.params / req.params","[key]")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Body(key?: string)")),Object(o.b)("td",{parentName:"tr",align:null},"req.body / req.body","[key]")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Query(key?: string)")),Object(o.b)("td",{parentName:"tr",align:null},"req.query / req.query","[key]")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Headers(name?: string)")),Object(o.b)("td",{parentName:"tr",align:null},"req.headers / req.headers","[name]")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@Ip()")),Object(o.b)("td",{parentName:"tr",align:null},"req.ip")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"@HostParam()")),Object(o.b)("td",{parentName:"tr",align:null},"req.hosts")))),Object(o.b)("p",null,"custom decorators \uac00 \uc720\uc6a9\ud55c \uc774\uc720"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"note.js \uc5d0\uc11c\ub294, \ud504\ub85c\ud37c\ud2f0\ub4e4\uc744 Request \uac1d\uccb4\uc5d0 \ubd99\uc774\ub294 \uac83\uc774 \uad00\uc2b5\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},"\ud504\ub85c\ud37c\ud2f0\ub4e4\uc744 \uac01\uac01\uc758 route handler \uc5d0\uac8c\uc11c \ucd94\ucd9c\ud560 \uc218 \uc788\ub2e4.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const user = req.user;\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@User")," \ub370\ucf54\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368, \ucf54\ub4dc\ub97c \uac00\ub3c5\uc131\uc788\uac8c \ud560 \uc218 \uc788\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="user.decorator.ts"',title:'"user.decorator.ts"'},"import { createParamDecorator, ExecutionContext } from '@nestjs/common';\n\nexport const User = createParamDecorator(\n  (data: unknown, ctx: ExecutionContext) => {\n    const request = ctx.switchToHttp().getRequest();\n    return request.user;\n  }\n);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Get()\naysnc findOne(@User() user: UserEntity) {\n  console.log(user)\n}\n")),Object(o.b)("h2",{id:"passing-data"},"Passing data"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\uc0ac\uc6a9\uc790 Entity"',title:'"\uc0ac\uc6a9\uc790','Entity"':!0},'{\n  "id": 101,\n  "firstName": "Alan",\n  "lastName": "Turing",\n  "email": "alan@email.com",\n  "roles": ["admin"]\n}\n')),Object(o.b)("p",null,"\ub370\ucf54\ub808\uc774\ud130\uc758 \ub3d9\uc791\uc774 Condition \uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\uba74, Data Parameter \ub97c \uc0ac\uc6a9\ud558\uc5ec, ",Object(o.b)("br",null),"\ndecorator's \ud329\ud130\ub9ac \ud568\uc218\uc5d0 argument \ub97c \uc804\ub2ec \ud560 \uc218 \uc788\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="key \ub85c request \uac1d\uccb4\uc5d0\uc11c \uc18d\uc131\uc744 \ucd94\ucd9c\ud558\ub294 \ucee4\uc2a4\ud140 \ub370\ucf54\ub808\uc774\ud130"',title:'"key',"\ub85c":!0,request:!0,"\uac1d\uccb4\uc5d0\uc11c":!0,"\uc18d\uc131\uc744":!0,"\ucd94\ucd9c\ud558\ub294":!0,"\ucee4\uc2a4\ud140":!0,'\ub370\ucf54\ub808\uc774\ud130"':!0},"@Get()\nasync findOne(@User('firstName') firstName: string) {\n  console.log(`Hello ${firstName}`);\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="user.decorator.ts"',title:'"user.decorator.ts"'},"import { createParamDecorator, ExecutionContext } from '@nestjs/common';\nexport const User = createParamDecorator(\n  (data: string, ctx: ExecutionContext) => {\n    const request = ctx.switchToHttp().getRequest();\n    const user = request.user;\n    return data ? user?.[data] : user;  // Condition \uc5d0 \ub530\ub77c \ubc18\ud658\ud558\ub294 \uacb0\uacfc\uac12\uc774 \ub2e4\ub984\n  }\n);\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),Object(o.b)("inlineCode",{parentName:"h5"},"createParamDecorator<T>()"))),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"TS \uc5d0\uc11c ",Object(o.b)("inlineCode",{parentName:"p"},"createParamDecorator<T>()")," \ub294 Generic \uc774\ub2e4."),Object(o.b)("p",{parentName:"div"},"\ud0c0\uc785\uc548\uc815\uc131\uc744 \uac15\uc81c\ud558\uae30 \uc704\ud574\uc11c"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createParamDecorator<string>((data, ctx) => ...)")," \ubcf4\ub2e4 (any \ud0c0\uc785)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createParamDecorator((data: string, ctx) => ...)")," \uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")))),Object(o.b)("h2",{id:"working-with-pipes"},"Working with pipes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Get()\nasync findOne(\n  @User(new ValidationPipe({ validateCustomDecorators: true }))\n  user: UserEntity,\n) {\n  console.log(user);\n}\n")),Object(o.b)("p",null,"Nest \ub294 \ub0b4\uc7a5 \ub9e4\uac1c\ubcc0\uc218(@Body(), @Param(), @Query) \uc640 \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc751\ub85c \ucee4\uc2a4\ud140 \ub9e4\uac1c\ubcc0\uc218 \ub370\ucf54\ub808\uc774\ud130\ub97c \ucc98\ub9ac\ud55c\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \ub9e4\uac1c\ubcc0\uc218 \ub370\ucf54\ub808\uc774\ud130\uc5d0\uc11c\ub3c4, \ud30c\uc774\ud504\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc74c.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"validateCustomDecorators")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"validateCustomDecorators")," \uc635\uc158\uc740 \ud56d\uc0c1 true \uc774\uc5b4\uc57c \ud55c\ub2e4."),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"ValidationPipe")," \ub294 \uae30\ubcf8\uc801\uc73c\ub85c, \ucee4\uc2a4\ud140 \ub370\ucf54\ub808\uc774\ud130\uac00 \ub2ec\ub9b0 \uc778\uc790\ub97c \uac80\uc0ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc774\ub2e4."))),Object(o.b)("h2",{id:"decorator-composition"},"Decorator Composition"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Get('users')\n@Auth('admin')\nfindAllUsers() {}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="auth.decorator.ts :: \uc778\uc99d\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 \ub370\ucf54\ub808\uc774\ud130\ub97c \ub2e8\uc77c \ub370\ucf54\ub808\uc774\ud130\ub85c \uacb0\ud569"',title:'"auth.decorator.ts',"::":!0,"\uc778\uc99d\uacfc":!0,"\uad00\ub828\ub41c":!0,"\ubaa8\ub4e0":!0,"\ub370\ucf54\ub808\uc774\ud130\ub97c":!0,"\ub2e8\uc77c":!0,"\ub370\ucf54\ub808\uc774\ud130\ub85c":!0,'\uacb0\ud569"':!0},"import { applyDecorators } from '@nestjs/common';\nexport function Auth(...roles Role[]) {\n  return applyDecorators(\n    setMetadata('roles', roles),\n    UseGuards(AuthGuard, RolesGuard),\n    ApiBearerAuth(),\n    ApiUnauthorizedResponse({ description: 'Unauthorized' }),\n  );\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"applyDecorators")," \uc5ec\ub7ec \ub370\ucf54\ub808\uc774\ud130\ub97c \uad6c\uc131\ud558\ub294 \ud5ec\ud37c \uba54\uc11c\ub4dc"))}b.isMDXComponent=!0},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);