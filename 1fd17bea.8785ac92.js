(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=(n(0),n(481));const l={},i={unversionedId:"nest-js/overview/guards",id:"nest-js/overview/guards",isDocsHomePage:!1,title:"guards",description:"https://docs.nestjs.com/guards",source:"@site/docs/nest-js/overview/guards.mdx",slug:"/nest-js/overview/guards",permalink:"/docs/nest-js/overview/guards",version:"current",lastUpdatedAt:1645453415,sidebar:"nestJs",previous:{title:"pipes",permalink:"/docs/nest-js/overview/pipes"},next:{title:"interceptor",permalink:"/docs/nest-js/overview/interceptor"}},c=[{value:"Guards",id:"guards",children:[]},{value:"Authorization guard",id:"authorization-guard",children:[]},{value:"Execution context \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",id:"execution-context-\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8",children:[]},{value:"Role-based Authentication",id:"role-based-authentication",children:[]},{value:"Binding guards",id:"binding-guards",children:[]},{value:"\ud578\ub4e4\ub7ec\ub9c8\ub2e4 Role \uc124\uc815\ud558\uae30",id:"\ud578\ub4e4\ub7ec\ub9c8\ub2e4-role-\uc124\uc815\ud558\uae30",children:[]},{value:"Putting it all together",id:"putting-it-all-together",children:[]}],o={toc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.nestjs.com/guards"},"https://docs.nestjs.com/guards")),Object(r.b)("h2",{id:"guards"},"Guards"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://docs.nestjs.com/assets/Guards_1.png",alt:"guards"})),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"guards")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@Injectable()")," \ub85c \uc5b4\ub178\ud14c\uc774\uc158\ub41c \ud074\ub798\uc2a4\uc774\ub2e4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CanActivate")," interface \ub97c \uad6c\ud604\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ud558\ub098\uc758 \ucc45\uc784\uc744 \uac16\ub294\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\ub7f0\ud0c0\uc784\uc5d0, \ud2b9\uc815\uc870\uac74(authorization::","[permissions, roles, ACLs ...]",") \uc5d0 \ub530\ub77c request \uac00 route handler \uc5d0 \uc758\ud574 \ucc98\ub9ac\ub420\uc9c0 \uacb0\uc815\ud55c\ub2e4."))))))),Object(r.b)("p",null,"Authorization \uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc804\ud1b5\uc801\uc778 Express \uc5d0\uc11c \ubbf8\ub4e4\uc6e8\uc5b4\ub85c \ucc98\ub9ac\ub41c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud1a0\ud070 validation, request \uac1d\uccb4\uc5d0 \ud504\ub85c\ud37c\ud2f0 \uc5f0\uacb0\ud558\uae30\uc640 \uac19\uc740 \uc791\uc5c5\uc740"),Object(r.b)("li",{parentName:"ul"},"\u2192 \ud2b9\uc815 route \ucee8\ud14d\uc2a4\ud2b8(\ubc0f \ud574\ub2f9 \uba54\ud0c0\ub370\uc774\ud130) \uc640 \uac15\ub825\ud558\uac8c \uc5f0\uad00\uc774 \uc5c6\ub2e4.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Guards (CF. Middleware)")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 \uc5b4\ub5a4 \ud578\ub4e4\ub7ec\uac00 next() \ub2e4\uc74c\uc5d0 \ud638\ucd9c\ub420\uc9c0 \uc54c\uc9c0 \ubabb\ud55c\ub2e4."),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Guards",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ExecutionContext instance \uc2e4\ud589\ucee8\ud14d\uc2a4\ud2b8 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ub2e4\uc74c\uc5d0 \uc2e4\ud589\ub418\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"(exception filters, pipes, and interceptors) \uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc694\uccad/\uc751\ub2f5 \uc8fc\uae30\uc758 \uc815\ud655\ud55c \uc9c0\uc810\uc5d0 \ucc98\ub9ac \ub17c\ub9ac\ub97c \uc0bd\uc785\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uac01\uac01\uc758 middleware \ub2e4\uc74c\uc5d0 \uc2e4\ud589\ub418\uc9c0\ub9cc, interceptor \uc640 pipe \uc774\uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4.")))))),Object(r.b)("h2",{id:"authorization-guard"},"Authorization guard"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="auth.guard.ts" {4,5,10}',title:'"auth.guard.ts"',"{4,5,10}":!0},"import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';\nimport { Observable } from 'rxjs';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(\n    context: ExecutionContext,\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    const request = context.switchToHttp().getRequest();\n    return validateRequest(request);\n  }\n}\n")),Object(r.b)("p",null,"Authorization \uc740 Guards \uc758 \ud6cc\ub96d\ud55c \uc0ac\ub840\uc774\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud2b9\uc815 Routes \ub294 Permission \uc774 \uc788\ub294 \ud638\ucd9c\uc790\uc5d0\uac8c\uc11c\ub9cc \uc774\uc6a9\uac00\ub2a5\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc784.")),Object(r.b)("p",null,"\uc55e\uc73c\ub85c\uc758 \uc608\uc81c\ub294, Authenticated \uc720\uc800\ub85c \uac00\uc815\ud569\ub2c8\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"token \uc774 Request Header \uc5d0 \uc788\uc74c"),Object(r.b)("li",{parentName:"ul"},"AuthGuard \ub294 token \uc744 \ucd94\ucd9c\ud558\uace0, validate \ud558\uc5ec, request \ub97c \uc9c4\ud589 \ubc0f \uc911\ub2e8\uc744 \uacb0\uc815\ud55c\ub2e4.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"validateRequest()")," \ub294 \ud544\uc694\ud55c \uad6c\ud604\uc5d0 \ub530\ub77c \uc815\uad50\ud560 \uc218\ub3c4 \uc788\uace0 \uac04\ub2e8\ud560 \uc218 \ub3c4 \uc788\ub2e4. ",Object(r.b)("br",null),"\n\uc774 \ucc55\ud130\uc5d0\uc11c\ub294 validate \uad6c\ud604\ubcf4\ub2e8, validateRequest() \ub0b4\uc5d0\uc11c, Guards \uac00 \uc5b4\ub5bb\uac8c request/response \uc0ac\uc774\ud074\uc5d0 \ub9de\ub294\uc9c0 \ubcf4\uc5ec\uc900\ub2e4."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Guard")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 guard \ub294 ",Object(r.b)("inlineCode",{parentName:"li"},"canActivate()")," \ub97c \uad6c\ud604\ud574\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"canActivate()")," \ubc18\ud658\uac12\uc758 \ud2b9\uc9d5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ud0c0\uc785: boolean"),Object(r.b)("li",{parentName:"ul"},"\ud604\uc7ac \uc694\uccad\uc774 \ud5c8\uac00\uc5ec\ubd80\ub97c \uac00\ub9ac\ud0a8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Promise \ub098 Observable \uc73c\ub85c, \ub3d9\uae30 / \ube44\ub3d9\uae30\uc801\uc778 response \ub97c \ubc18\ud658\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Nest \ub294 \ubc18\ud658\uac12\uc73c\ub85c \ub2e4\uc74c action \uc744 \uc81c\uc5b4\ud55c\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"true"),", request \uc9c4\ud589"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"false"),", request \uac70\ubd80")))))))),Object(r.b)("h2",{id:"execution-context-\uc2e4\ud589-\ucee8\ud14d\uc2a4\ud2b8"},"Execution context \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"canActivate()")," \ud568\uc218\uc758 \ub2e8 \ud558\ub098\uc758 \uc778\uc218\ub85c\uc11c ",Object(r.b)("inlineCode",{parentName:"li"},"ExecutionContext")," \uc778\uc2a4\ud134\uc2a4\ub97c \uac00\uc9c4\ub2e4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ExecutionContext")," \ub294 ",Object(r.b)("inlineCode",{parentName:"li"},"ArgumentsHost")," \uc0c1\uc18d\ud55c\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc704 \uc608\uc81c\uc5d0\uc11c\ub294 ArgumentsHost \uc5d0 \uc815\uc758\ub41c, Request \uac1d\uccb4\ub97c \ucc38\uc870\ud558\ub294 \ud5ec\ud37c \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc600\ub2e4."))),Object(r.b)("li",{parentName:"ul"},"ExecutionContext \ub294 ArgumentsHost \uc744 \uc0c1\uc18d\ud558\uba74\uc11c, \ucd94\uac00\uc801\uc778 \ud5ec\ud37c \uba54\uc11c\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ud604\uc7ac \uc2e4\ud589 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \ucd94\uac00\uc801\uc778 \uc815\ubcf4\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Generic Guards \ub97c \ub9cc\ub4dc\ub294\ub370\uc5d0 \uc720\uc6a9\ud558\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ucee8\ud2b8\ub864\ub7ec, \uba54\uc11c\ub4dc, \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c \uad11\ubc94\uc704\ud558\uac8c \uc801\uc6a9\uac00\ub2a5\ud558\ub2e4.")))),Object(r.b)("h2",{id:"role-based-authentication"},"Role-based Authentication"),Object(r.b)("p",null,"\ud2b9\uc815 Role \uc744 \uac00\uc9c4 \uc720\uc800\uc5d0\uac8c\ub9cc \uc811\uadfc\uc744 \ud5c8\uac00\ud574 \uc8fc\ub294 Guard \uc774\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="roles.guard.ts:: \uae30\ubcf8 guard \ud15c\ud50c\ub9bf - \ubaa8\ub4e0 \uc694\uccad\uc744 \ud5c8\uac00\ud55c\ub2e4."',title:'"roles.guard.ts::',"\uae30\ubcf8":!0,guard:!0,"\ud15c\ud50c\ub9bf":!0,"-":!0,"\ubaa8\ub4e0":!0,"\uc694\uccad\uc744":!0,'\ud5c8\uac00\ud55c\ub2e4."':!0},"import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';\nimport { Observable } from 'rxjs';\n\n@Injectable()\nexport class RolesGuard implements CanActivate {\n  canActivate(\n    context: ExecutionContext,\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    return true;\n  }\n}\n")),Object(r.b)("h2",{id:"binding-guards"},"Binding guards"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="controller-scoped guard using the @UseGuards()" {2}',title:'"controller-scoped',guard:!0,using:!0,the:!0,'@UseGuards()"':!0,"{2}":!0},"@Controller('cats')\n// single argument or a comma-separated list of arguments\n@UseGuards(RolesGuard) // \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uac8c \uc778\uc2a4\ud134\uc2a4\uc758 \ucd08\uae30\ud654\ub97c \uc704\uc784\ud558\uace0, \uc758\uc874\uc131 \uc8fc\uc785\uc744 \uac00\ub2a5\ud558\uac8c \ud55c\ub2e4.\n// same as @UseGuards(new RolesGuard())\nexport class CatsController {}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Guard \uc758 \uc2a4\ucf54\ud504")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Pipe \uc640 ExceptionFilter \uc640 \uac19\uc774 \uc815\uc758\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"controller-scoped"),Object(r.b)("li",{parentName:"ul"},"method-scoped"),Object(r.b)("li",{parentName:"ul"},"global-scoped")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="global guard"',title:'"global','guard"':!0},"const app = await NestFactory.create(AppModule);\napp.useGlobalGuards(new RolesGuard());\n")),Object(r.b)("blockquote",null,Object(r.b)("small",null,'\ud558\uc774\ube0c\ub9ac\ub4dc \uc571\uc758 \uacbd\uc6b0 useGlobalGuards() \uba54\uc11c\ub4dc\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uac8c\uc774\ud2b8\uc6e8\uc774 \ubc0f \ub9c8\uc774\ud06c\ub85c \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uac00\ub4dc\ub97c \uc124\uc815\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4(\uc774 \ub3d9\uc791\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc815\ubcf4\ub294 \ud558\uc774\ube0c\ub9ac\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucc38\uc870). "\ud45c\uc900"(\ube44\ud558\uc774\ube0c\ub9ac\ub4dc) \ub9c8\uc774\ud06c\ub85c \uc11c\ube44\uc2a4 \uc571\uc758 \uacbd\uc6b0 useGlobalGuards()\ub294 \uac00\ub4dc\ub97c \uc804\uc5ed\uc801\uc73c\ub85c \ub9c8\uc6b4\ud2b8\ud569\ub2c8\ub2e4.')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.module.ts:: \uc758\uc874\uc131 \uc8fc\uc785\uc744 \ud558\ub824\uba74, Guard \ub97c any \ubaa8\ub4c8\uc5d0 \uc9c1\uc811 \uc124\uc815\ud558\uba74 \ub41c\ub2e4."',title:'"app.module.ts::',"\uc758\uc874\uc131":!0,"\uc8fc\uc785\uc744":!0,"\ud558\ub824\uba74,":!0,Guard:!0,"\ub97c":!0,any:!0,"\ubaa8\ub4c8\uc5d0":!0,"\uc9c1\uc811":!0,"\uc124\uc815\ud558\uba74":!0,'\ub41c\ub2e4."':!0},"import { Module } from '@nestjs/common';\nimport { APP_GUARD } from '@nestjs/core';\n\n@Module({\n  providers: [\n    {\n      provide: APP_GUARD,\n      useClass: RolesGuard,\n    }\n  ]\n})\nexport class AppModue {}\n")),Object(r.b)("h2",{id:"\ud578\ub4e4\ub7ec\ub9c8\ub2e4-role-\uc124\uc815\ud558\uae30"},"\ud578\ub4e4\ub7ec\ub9c8\ub2e4 Role \uc124\uc815\ud558\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controllers.ts" {2}',title:'"cats.controllers.ts"',"{2}":!0},"@Post()\n@SetMetadata('roles', ['admin'])\naysnc create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createDto);\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Guard \uc758 \uac00\uc7a5 \uc911\uc694\ud55c \ud2b9\uc9d5\uc740 ",Object(r.b)("inlineCode",{parentName:"p"},"execution context")," \uc774\ub2e4. Role \uc5d0 \ub300\ud574 \uc54c \uc218 \uc788\ub2e4.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Role \uc740 \uac01\uac01\uc758 \ud578\ub4e4\ub7ec \ub9c8\ub2e4 \ud560\ub2f9\ub420 \uc218 \uc788\ub2e4.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"@SetMetadata()")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 metadata \ub97c \ub77c\uc6b0\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\uac8c \uc81c\uacf5\ud574\uc900\ub2e4."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"'roles'")," \ub294 key \uc774\ub2e4. ",Object(r.b)("inlineCode",{parentName:"p"},"['admin']")," \ud2b9\uc815\ud55c \uac12\uc774\ub2e4.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"@SetMetadata()")," \ub97c \ub77c\uc6b0\ud2b8\uc5d0 \uc9c1\uc811\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294\uac83\uc740 \uc88b\uc9c0 \uc54a\uc740 \uc608\uc2dc\uc774\ub2e4.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc544\ub798\ucc98\ub7fc \ub370\ucf54\ub808\uc774\ud130\ub97c \uc0dd\uc131\ud574\uc11c \uc0ac\uc6a9\ud558\uc790."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="role.decorator.ts"',title:'"role.decorator.ts"'},"improt { SetMetata } from '@nestjs/common';\nexport const Roles = (...roles: string[]) => SetMetadata('roles', roles);\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controller.ts"',title:'"cats.controller.ts"'},"@Post()\n@Roles('admin')\nasync create(@Body() craeteCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}\n")),Object(r.b)("h2",{id:"putting-it-all-together"},"Putting it all together"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="roles.guard.ts" {6,9,15}',title:'"roles.guard.ts"',"{6,9,15}":!0},"import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';\nimport { Reflector } from '@nestjs/core';\n\n@Injectable()\nexport class RolesGuard implements CanActivate {\n  constructor(private reflector: Reflector) {}\n\n  canActivate(context: ExecutionContext): boolean {\n    const roles = this.reflector.get<string[]>('roles', context.getHandler());\n    if (!roles) {\n      return true;\n    }\n    const request = context.switchToHttp().getRequest();\n    const user = request.user;\n    return matchRoles(roles, user.roles);\n  }\n}\n")),Object(r.b)("p",null,"{6} ",Object(r.b)("inlineCode",{parentName:"p"},"Reflector")," \ud5ec\ud37c \ud074\ub798\uc2a4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub77c\uc6b0\ud2b8\uc758 role(custom metadata) \uc5d0 \uc811\uadfc\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\uc758 ",Object(r.b)("inlineCode",{parentName:"li"},"@nestjs/core")," \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc81c\uacf5\ud55c\ub2e4.")),Object(r.b)("p",null,"{15} ",Object(r.b)("inlineCode",{parentName:"p"},"matchRoles()")," \uc758 \ub85c\uc9c1\uc740 \ud544\uc694\uc5d0 \ub530\ub77c \uac04\ub2e8\ud558\uac70\ub098 \uc815\uad50\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc774 \ucc55\ud130\uc758 \uc8fc\uc694 \ud3ec\uc778\ud2b8\ub294, Guard \uac00 request/response \uc0ac\uc774\ud074\uc5d0 \ub9de\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uac83\uc774\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="\ubd80\uc801\uc808\ud55c \uad8c\ud55c\uc73c\ub85c\ubd80\ud130\uc758 endpoint \ub97c \uc694\uccad\ud558\uc600\uc744 \ub54c, Nest \uac00 \ub2e4\uc74c\uc744 \uc790\ub3d9\uc73c\ub85c reponse \ub85c \ub9ac\ud134\ud55c\ub2e4."',title:'"\ubd80\uc801\uc808\ud55c',"\uad8c\ud55c\uc73c\ub85c\ubd80\ud130\uc758":!0,endpoint:!0,"\ub97c":!0,"\uc694\uccad\ud558\uc600\uc744":!0,"\ub54c,":!0,Nest:!0,"\uac00":!0,"\ub2e4\uc74c\uc744":!0,"\uc790\ub3d9\uc73c\ub85c":!0,reponse:!0,"\ub85c":!0,'\ub9ac\ud134\ud55c\ub2e4."':!0},'{\n  "statusCode": 403,\n  "message": "Forbidden resource",\n  "error": "Forbidden"\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"guard \uac00 ",Object(r.b)("inlineCode",{parentName:"li"},"false")," \ub97c \ubc18\ud658\ud558\uba74, \ud504\ub808\uc784\uc6cc\ud06c\ub294 ",Object(r.b)("inlineCode",{parentName:"li"},"ForbiddenException")," \uc5d0\ub7ec\ub97c \ub358\uc9c4\ub2e4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"throw new UnauthorizedException();"),"  \uac19\uc774 guard \uc5d0\uc11c \ub2e4\ub978 \uc5d0\ub7ec\ub97c \ub358\uc9c4\ub2e4\uba74, \uc804\uc5ed \uc608\uc678 \ucc98\ub9ac \ud544\ud130\uc5d0 \uc758\ud574 \ucc98\ub9ac \ub420 \uac83\uc774\ub2e4.")))}s.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);