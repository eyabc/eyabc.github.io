(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(3),a=(n(0),n(441));const l={},c={unversionedId:"nest-js/overview/controller",id:"nest-js/overview/controller",isDocsHomePage:!1,title:"controller",description:"https://docs.nestjs.com/controllers",source:"@site/docs/nest-js/overview/controller.mdx",slug:"/nest-js/overview/controller",permalink:"/docs/nest-js/overview/controller",version:"current",sidebar:"nestJs",previous:{title:"First Steps",permalink:"/docs/nest-js/overview/index"},next:{title:"providers",permalink:"/docs/nest-js/overview/providers"}},b=[{value:"Response",id:"response",children:[]},{value:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc694\uccad \uac1d\uccb4 <code>(@Res() response)</code>",id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\uc694\uccad-\uac1d\uccb4-res-response",children:[]},{value:"\ud45c\uc900 HTTP  \ub370\ucf54\ub808\uc774\ud130",id:"\ud45c\uc900-http--\ub370\ucf54\ub808\uc774\ud130",children:[]},{value:"\ub77c\uc6b0\ud2b8 \uc640\uc77c\ub4dc \uce74\ub4dc",id:"\ub77c\uc6b0\ud2b8-\uc640\uc77c\ub4dc-\uce74\ub4dc",children:[]},{value:"\uc0c1\ud0dc\ucf54\ub4dc",id:"\uc0c1\ud0dc\ucf54\ub4dc",children:[]},{value:"\ud5e4\ub354",id:"\ud5e4\ub354",children:[]},{value:"\ub9ac\ub514\ub809\uc158",id:"\ub9ac\ub514\ub809\uc158",children:[]},{value:"Route parameters",id:"route-parameters",children:[]},{value:"\ud558\uc704 \ub3c4\uba54\uc778 \ub77c\uc6b0\ud305",id:"\ud558\uc704-\ub3c4\uba54\uc778-\ub77c\uc6b0\ud305",children:[]},{value:"Scope",id:"scope",children:[]},{value:"\ube44\ub3d9\uae30\uc131",id:"\ube44\ub3d9\uae30\uc131",children:[]},{value:"\ud398\uc774\ub85c\ub4dc \uc694\uccad",id:"\ud398\uc774\ub85c\ub4dc-\uc694\uccad",children:[]},{value:"Controller \ub97c NestJS \uac00 \uc54c\uac8c \ud558\uae30 <code>app.module.ts</code>",id:"controller-\ub97c-nestjs-\uac00-\uc54c\uac8c-\ud558\uae30-appmodulets",children:[]},{value:"\uc751\ub2f5 \uac1d\uccb4, \ub77c\uc774\ube0c\ub7ec\ub9ac \uc885\uc18d\uc131",id:"\uc751\ub2f5-\uac1d\uccb4-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uc885\uc18d\uc131",children:[]}],i={toc:b};function o({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.nestjs.com/controllers"},"https://docs.nestjs.com/controllers")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://docs.nestjs.com/assets/Controllers_1.png",alt:null})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"cats.controller.ts created with CLI '$ nest g controller cats'\"",title:'"cats.controller.ts',created:!0,with:!0,CLI:!0,"'$":!0,nest:!0,g:!0,controller:!0,"cats'\"":!0},"import { Controller, Get } from '@nestjs/common';\n\n@Controller('cats')\nexport class CatsController {\n  @Get()\n  findAll(): string {\n    return 'This action returns all cats';\n  }\n}\n")),Object(a.b)("h2",{id:"response"},"Response"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud45c\uc900",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"JS \uac1d\uccb4 - (\uc9c1\ub82c\ud654) \u2192 JSON"),Object(a.b)("li",{parentName:"ul"},"\uc6d0\uc2dc\uac12 \u2192 \uac12"),Object(a.b)("li",{parentName:"ul"},"\uc0c1\ud0dc \ucf54\ub4dc",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"post (201)"),Object(a.b)("li",{parentName:"ul"},"else (200)"),Object(a.b)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140"))))),Object(a.b)("li",{parentName:"ul"},"\ub77c\uc774\ube0c\ub7ec\ub9ac",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"findAll(@Res() response)response.status(200).send()"))))),Object(a.b)("h2",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\uc694\uccad-\uac1d\uccb4-res-response"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc694\uccad \uac1d\uccb4 ",Object(a.b)("inlineCode",{parentName:"h2"},"(@Res() response)")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null}),Object(a.b)("th",{parentName:"tr",align:null}))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Request()"),", ",Object(a.b)("inlineCode",{parentName:"td"},"@Req()")),Object(a.b)("td",{parentName:"tr",align:null},"req")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Response()"),", ",Object(a.b)("inlineCode",{parentName:"td"},"@Res()*")),Object(a.b)("td",{parentName:"tr",align:null},"res")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Next()")),Object(a.b)("td",{parentName:"tr",align:null},"next")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Session()")),Object(a.b)("td",{parentName:"tr",align:null},"req.session")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Param(key?: string)")),Object(a.b)("td",{parentName:"tr",align:null},"req.params / req.params","[key]")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Body(key?: string)")),Object(a.b)("td",{parentName:"tr",align:null},"req.body / req.body","[key]")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Query(key?: string)")),Object(a.b)("td",{parentName:"tr",align:null},"req.query / req.query","[key]")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Headers(name?: string)")),Object(a.b)("td",{parentName:"tr",align:null},"req.headers / req.headers","[name]")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@Ip()")),Object(a.b)("td",{parentName:"tr",align:null},"req.ip")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"@HostParam()")),Object(a.b)("td",{parentName:"tr",align:null},"req.hosts")))),Object(a.b)("h2",{id:"\ud45c\uc900-http--\ub370\ucf54\ub808\uc774\ud130"},"\ud45c\uc900 HTTP  \ub370\ucf54\ub808\uc774\ud130"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@Get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@Post"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@Put"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@Delete"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@Patch"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@Options"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@Head")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@All")," endpoint that handles all of them.")),Object(a.b)("h2",{id:"\ub77c\uc6b0\ud2b8-\uc640\uc77c\ub4dc-\uce74\ub4dc"},"\ub77c\uc6b0\ud2b8 \uc640\uc77c\ub4dc \uce74\ub4dc"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'@Get("ab*d")')," \u2192 \uc815\uaddc\uc2dd"),Object(a.b)("h2",{id:"\uc0c1\ud0dc\ucf54\ub4dc"},"\uc0c1\ud0dc\ucf54\ub4dc"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{2}","{2}":!0},"@Post()\n@HttpCode(204)\ncreate() {\n  return 'This action adds a new cat';\n}\n")),Object(a.b)("h2",{id:"\ud5e4\ub354"},"\ud5e4\ub354"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@Header('Cache-Control"),", 'none')`"),Object(a.b)("h2",{id:"\ub9ac\ub514\ub809\uc158"},"\ub9ac\ub514\ub809\uc158"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'{\n  "url": string,\n  "statusCode": number  # default 302 Found\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@Redirect('https://nestjs.com', 301)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@Redirect('https://nestjs.com')")),Object(a.b)("li",{parentName:"ul"},"override",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"@Get('docs')\n@Redirect('https://docs.nestjs.com', 302)\ngetDocs(@Query('version') version) {\n  if (version && version === '5') {\n    return { url: 'https://docs.nestjs.com/v5/' };\n  }\n}\n")))),Object(a.b)("h2",{id:"route-parameters"},"Route parameters"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{1,2,3}","{1,2,3}":!0},"@Get(':id')\nfindOne(@Param() params): string {\n  return `This action returns a #${params.id} cat`;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{1,2,3}","{1,2,3}":!0},"@Get(':id')\nfindOne(@Param('id') id: string): string {\n  return `This action returns a #${id} cat`;\n}\n")),Object(a.b)("h2",{id:"\ud558\uc704-\ub3c4\uba54\uc778-\ub77c\uc6b0\ud305"},"\ud558\uc704 \ub3c4\uba54\uc778 \ub77c\uc6b0\ud305"),Object(a.b)("p",null,"\ud638\uc2a4\ud2b8 \ub9e4\uac1c\ubcc0\uc218 \ud1a0\ud070"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{1,4}","{1,4}":!0},"@Controller({ host: ':account.example.com' })\nexport class AccountController {\n  @Get()\n  getInfo(@HostParam('account') account: string) {\n    return account;\n  }\n}\n")),Object(a.b)("h2",{id:"scope"},"Scope"),Object(a.b)("p",null,"\uc694\uccad \uac04\uc758 ",Object(a.b)("ins",null,"\uac70\uc758 \ubaa8\ub4e0 \uac83"),"\uc774 \uacf5\uc720\ub41c\ub2e4. (\ub2e4\uc911 \uc2a4\ub808\ub4dc\uac00 \uc544\ub2d8)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"DB Connection Pool, \uc804\uc5ed \uc0c1\ud0dc \uc2f1\uae00\ud1a4 \uc11c\ube44\uc2a4"),Object(a.b)("li",{parentName:"ul"},"GraphQL \uc758 \uc694\uccad\ubcc4 \uce90\uc2f1 \ub4f1 \uc81c\uc5b4 \uac00\ub2a5\ud55c \ud56d\ubaa9\uc774 \uc788\ub2e4.")),Object(a.b)("h2",{id:"\ube44\ub3d9\uae30\uc131"},"\ube44\ub3d9\uae30\uc131"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Get()\nasync findAll(): Promise<any[]> {\n  return [];\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Promise \uc758 \uacb0\uacfc \uac12\uc744 \ubc1b\ub294 \ubc29\ubc95")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Get()\nfindAll(): Observable<any[]> {\n  return of([]);\n}\n")),Object(a.b)("h2",{id:"\ud398\uc774\ub85c\ub4dc-\uc694\uccad"},"\ud398\uc774\ub85c\ub4dc \uc694\uccad"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{8}","{8}":!0},"export class CreateCatDto {\n  name: string;\n  age: number;\n  breed: string;\n}\n\n@Post()\nasync create(@Body() createCatDto: CreateCatDto) {\n  return 'This action adds a new cat';\n}\n")),Object(a.b)("p",null,"CreateCatDto \ub294 \ud074\ub798\uc2a4\ub85c \uc791\uc131\ud55c\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub294 ES6\uc758 \ud45c\uc900 \u2192 \ucef4\ud30c\uc77c\ub41c JS \uc5d0\uc11c \uc2e4\uc81c Entity \ub85c \ubcf4\uc874\ub41c\ub2e4."),Object(a.b)("li",{parentName:"ul"},"cf. ts \uc778\ud130\ud398\uc774\uc2a4\ub294 \ucef4\ud30c\uc77c\ub41c JS \uc5d0\uc11c \uc81c\uac70\ub418\uc5b4, NestJS \uac00 \ub7f0\ud0c0\uc784\uc5d0 \ucc38\uc870\ud560 \uc218 \uc5c6\uc74c."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/.."},"\ucef4\ud30c\uc77c\ub41c JS \uc5d0\uc11c \uc2e4\uc81c Entity \ub85c \ubcf4\uc874\ub41c\ub2e4\ub294 \uac83\uc758 \uc758\ubbf8")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/.."},"NestJS \uac00 \ub7f0\ud0c0\uc784\uc5d0 \ucc38\uc870\ud55c\ub2e4\ub294 \uac83\uc758 \uc758\ubbf8"))),Object(a.b)("h2",{id:"controller-\ub97c-nestjs-\uac00-\uc54c\uac8c-\ud558\uae30-appmodulets"},"Controller \ub97c NestJS \uac00 \uc54c\uac8c \ud558\uae30 ",Object(a.b)("inlineCode",{parentName:"h2"},"app.module.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  controllers: [CatsController],\n})\nexport class AppModule {}\n")),Object(a.b)("h2",{id:"\uc751\ub2f5-\uac1d\uccb4-\ub77c\uc774\ube0c\ub7ec\ub9ac-\uc885\uc18d\uc131"},"\uc751\ub2f5 \uac1d\uccb4, \ub77c\uc774\ube0c\ub7ec\ub9ac \uc885\uc18d\uc131"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@Res")," \u2192 express \uc5d0 \uc885\uc18d"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \uc791\uc131\uc2dc express \uc758\uc874 \ud544\uc694"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("ins",null,"Nest \ud45c\uc900 \uc751\ub2f5")," \ucc98\ub9ac \uc704\ubc18 - Interceptor, Decorators \ud638\ud658 \ubb38\uc81c"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@Res({ passthrough: true })")," \uc124\uc815\uc73c\ub85c \ud574\uacb0\uac00\ub2a5")))}o.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||l;return n?a.a.createElement(m,b(b({ref:t},o),{},{components:n})):a.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<l;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);