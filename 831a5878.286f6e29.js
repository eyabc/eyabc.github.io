(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(456));const i={},c={unversionedId:"nest-js/overview/exception-filters",id:"nest-js/overview/exception-filters",isDocsHomePage:!1,title:"exception-filters",description:"https://docs.nestjs.com/exception-filters",source:"@site/docs/nest-js/overview/exception-filters.mdx",slug:"/nest-js/overview/exception-filters",permalink:"/docs/nest-js/overview/exception-filters",version:"current",sidebar:"nestJs",previous:{title:"middleware",permalink:"/docs/nest-js/overview/middleware"},next:{title:"pipes",permalink:"/docs/nest-js/overview/pipes"}},l=[{value:"Exception Layer",id:"exception-layer",children:[]},{value:"global exception filter \uc804\uc5ed \uc608\uc678 \ud544\ud130",id:"global-exception-filter-\uc804\uc5ed-\uc608\uc678-\ud544\ud130",children:[]},{value:"HttpException",id:"httpexception",children:[]},{value:"\ud45c\uc900 \uc608\uc678 \ub358\uc9c0\uae30",id:"\ud45c\uc900-\uc608\uc678-\ub358\uc9c0\uae30",children:[{value:"HttpException \uc0dd\uc131\uc790\uc758 \ub9e4\uac1c\ubcc0\uc218",id:"httpexception-\uc0dd\uc131\uc790\uc758-\ub9e4\uac1c\ubcc0\uc218",children:[]},{value:"JSON response body",id:"json-response-body",children:[]},{value:"JSON response body \uc7ac\uc815\uc758 \ud558\uae30",id:"json-response-body-\uc7ac\uc815\uc758-\ud558\uae30",children:[]}]},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc608\uc678",id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc608\uc678",children:[]},{value:"Built-in HTTP exceptions",id:"built-in-http-exceptions",children:[]},{value:"Exception filters",id:"exception-filters",children:[{value:"Exception filters \uc758 \uc124\uacc4 \ubaa9\uc801",id:"exception-filters-\uc758-\uc124\uacc4-\ubaa9\uc801",children:[]},{value:"<code>implements ExceptionFilter</code>",id:"implements-exceptionfilter",children:[]},{value:"<code>@Catch(HttpException)</code>",id:"catchhttpexception",children:[]}]},{value:"Arguments host",id:"arguments-host",children:[]},{value:"\ubc14\uc778\ub529 filters",id:"\ubc14\uc778\ub529-filters",children:[{value:"\uc608\uc678 \ud544\ud130\uc758 \uc2a4\ucf54\ud504 \ub808\ubca8",id:"\uc608\uc678-\ud544\ud130\uc758-\uc2a4\ucf54\ud504-\ub808\ubca8",children:[]}]},{value:"Catch everything <code>@Catch()</code>",id:"catch-everything-catch",children:[]},{value:"Inheritance",id:"inheritance",children:[{value:"\uc804\uc5ed\ud544\ud130\ub85c \ub4f1\ub85d\ud558\uae30",id:"\uc804\uc5ed\ud544\ud130\ub85c-\ub4f1\ub85d\ud558\uae30",children:[]}]}],o={toc:l};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.nestjs.com/exception-filters"},"https://docs.nestjs.com/exception-filters")),Object(r.b)("p",null,"Nest \ub294 ",Object(r.b)("ins",null,"Exception Layer")," \ub97c \uac00\uc9d1\ub2c8\ub2e4."),Object(r.b)("h2",{id:"exception-layer"},"Exception Layer"),Object(r.b)("p",null,"\uc571\uc73c\ub85c \ubd80\ud130 \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc740 \ubaa8\ub4e0 \uc608\uc678\ub97c \ucc98\ub9ac\ud558\uc5ec"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uc751\ub2f5\uc73c\ub85c \ub0b4\ubcf4\ub0b8\ub2e4.")),Object(r.b)("h2",{id:"global-exception-filter-\uc804\uc5ed-\uc608\uc678-\ud544\ud130"},"global exception filter \uc804\uc5ed \uc608\uc678 \ud544\ud130"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"HttpException")," \uc640 \ud558\uc704 \ud074\ub798\uc2a4\uc758 \uc608\uc678\ub97c \ucc98\ub9ac\ud55c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc774 \uc678 \uc608\uc678\ub294 exception filter \uac00 \uae30\ubcf8 JSON \uc751\ub2f5\uc744 \uc0dd\uc131\ud55c\ub2e4."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "statusCode": 500,\n  "message": "Internal server error"\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"global exception filter \ub294 \ubd80\ubd84\uc801\uc73c\ub85c http-error \ub97c \uc9c0\uc6d0\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc774\ub2e4."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"statusCode \uc640 message \ud504\ub85c\ud37c\ud2f0\ub97c \uac00\uc9c0\ub294 \uc608\uc678\ub77c\uba74 \uc801\uc808\ud55c \uc751\ub2f5\uc744 \ubc18\ud658\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"(instead of the default InternalServerErrorException for unrecognized exceptions).")))),Object(r.b)("h2",{id:"httpexception"},"HttpException"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Defines the base Nest HTTP exception, which is handled by the default\n * Exceptions Handler.\n *\n * @see [Base Exceptions](https://docs.nestjs.com/exception-filters#base-exceptions)\n *\n * @publicApi\n */\nexport declare class HttpException extends Error {\n    private readonly response;\n    private readonly status;\n    /**\n     * Instantiate a plain HTTP Exception.\n     *\n     * @example\n     * `throw new HttpException()`\n     *\n     * @usageNotes\n     * The constructor arguments define the response and the HTTP response status code.\n     * - The `response` argument (required) defines the JSON response body.\n     * - The `status` argument (required) defines the HTTP Status Code.\n     *\n     * By default, the JSON response body contains two properties:\n     * - `statusCode`: the Http Status Code.\n     * - `message`: a short description of the HTTP error by default; override this\n     * by supplying a string in the `response` parameter.\n     *\n     * To override the entire JSON response body, pass an object to the `createBody`\n     * method. Nest will serialize the object and return it as the JSON response body.\n     *\n     * The `status` argument is required, and should be a valid HTTP status code.\n     * Best practice is to use the `HttpStatus` enum imported from `nestjs/common`.\n     *\n     * @param response string or object describing the error condition.\n     * @param status HTTP response status code.\n     */\n    constructor(response: string | Record<string, any>, status: number);\n    initMessage(): void;\n    initName(): void;\n    getResponse(): string | object;\n    getStatus(): number;\n    static createBody(objectOrError: object | string, description?: string, statusCode?: number): object;\n}\n\n")),Object(r.b)("h2",{id:"\ud45c\uc900-\uc608\uc678-\ub358\uc9c0\uae30"},"\ud45c\uc900 \uc608\uc678 \ub358\uc9c0\uae30"),Object(r.b)("p",null,"Nest \uc758 \ub0b4\uc7a5 ",Object(r.b)("inlineCode",{parentName:"p"},"HttpException")," \ud074\ub798\uc2a4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP REST/GraphQL API \uae30\ubc18 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c, \ud2b9\uc815 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c HTTP \ud45c\uc900 \uc751\ub2f5\uc744 \uc8fc\ub294 \uac83\uc774 Best Practice \uc774\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controller.ts: HttpException \uc0dd\uc131\uc790"',title:'"cats.controller.ts:',HttpException:!0,'\uc0dd\uc131\uc790"':!0},"@Get()\nasync findAll() {\n  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="for client response: JSON response body"',title:'"for',client:!0,"response:":!0,JSON:!0,response:!0,'body"':!0},'{\n  "statusCode": 403,\n  "message": "Forbidden"\n}\n')),Object(r.b)("h3",{id:"httpexception-\uc0dd\uc131\uc790\uc758-\ub9e4\uac1c\ubcc0\uc218"},"HttpException \uc0dd\uc131\uc790\uc758 \ub9e4\uac1c\ubcc0\uc218"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"response")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"JSON Response Body message \ub97c \uc815\uc758"),Object(r.b)("li",{parentName:"ul"},"type: string | object")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"status")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP \uc0c1\ud0dc \ucf54\ub4dc\ub97c \uc815\uc758")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class HttpException extends Error {\n    private readonly response;\n    private readonly status;\n    constructor(response: string | Record<string, any>, status: number);\n    initMessage(): void;\n    initName(): void;\n    getResponse(): string | object;\n    getStatus(): number;\n    static createBody(objectOrError: object | string, description?: string, statusCode?: number): object;\n}\n")),Object(r.b)("h3",{id:"json-response-body"},"JSON response body"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"statusCode")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status")," \uc778\uc218 \uac12\uc758 HTTP status code")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"message")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"statusCode")," \uc5d0 \ub300\ud55c \uc9e7\uc740 \uc124\uba85")),Object(r.b)("h3",{id:"json-response-body-\uc7ac\uc815\uc758-\ud558\uae30"},"JSON response body \uc7ac\uc815\uc758 \ud558\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controller.ts"',title:'"cats.controller.ts"'},"@Get()\nasync findAll() {\n  throw new HttpException({\n    status: HttpStatus.FORBIDDEN,\n    error: 'This is a custom message',\n  }, HttpStatus.FORBIDDEN);\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="response"',title:'"response"'},'{\n  "status": 403,\n  "error": "This is a custom message"\n}\n')),Object(r.b)("h2",{id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc608\uc678"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc608\uc678"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="forbidden.exception.ts"',title:'"forbidden.exception.ts"'},"export class ForbiddenException extends HttpException {\n  constructor() {\n    super('Forbidden', HttpStatus.FORBIDDEN);\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"extends HttpException")," \ub85c\uc11c Nest \ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 \uc608\uc678\uc784\uc744 \uc54c \uc218 \uc788\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controller.ts"',title:'"cats.controller.ts"'},"@Get()\nasync findAll() {\n  throw new ForbiddenException();\n}\n")),Object(r.b)("p",null,"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0, \uc0ac\uc6a9\uc790 \uc815\uc758 \uc608\uc678\ubcf4\ub2e4 ",Object(r.b)("em",{parentName:"p"},"built-in Nest HTTP exception")," \uc744 \uc0ac\uc6a9 \ud560 \uac83\uc784."),Object(r.b)("h2",{id:"built-in-http-exceptions"},"Built-in HTTP exceptions"),Object(r.b)("p",null,"Nest \ub294 HttpException \uc744 \uc0c1\uc18d\ud55c \ud45c\uc900 \uc608\uc678\ub97c \uc81c\uacf5\ud55c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BadRequestException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UnauthorizedException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"NotFoundException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ForbiddenException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"NotAcceptableException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestTimeoutException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ConflictException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GoneException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpVersionNotSupportedException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PayloadTooLargeException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UnsupportedMediaTypeException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UnprocessableEntityException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"InternalServerErrorException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"NotImplementedException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ImATeapotException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MethodNotAllowedException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BadGatewayException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ServiceUnavailableException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GatewayTimeoutException")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PreconditionFailedException"))),Object(r.b)("h2",{id:"exception-filters"},"Exception filters"),Object(r.b)("p",null,"\uae30\ubcf8(\ub0b4\uc7a5) \uc608\uc678 \ud544\ud130\uac00 \ub9ce\uc740 \uacbd\uc6b0\ub97c \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\uc9c0\ub9cc ",Object(r.b)("br",null),"\n\uc608\uc678 \uacc4\uce35\uc5d0 \ub300\ud55c Full Control \uc774  \ud544\uc694\ud55c \uacbd\uc6b0\ub3c4 \uc788\ub2e4."),Object(r.b)("h3",{id:"exception-filters-\uc758-\uc124\uacc4-\ubaa9\uc801"},"Exception filters \uc758 \uc124\uacc4 \ubaa9\uc801"),Object(r.b)("p",null,"\uc815\ud655\ud55c \uc81c\uc5b4 \ud750\ub984\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \ub2e4\uc2dc \uc804\uc1a1\ub418\ub294 \uc751\ub2f5 \ub0b4\uc6a9\uc744 \uc81c\uc5b4\ud55c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"logging \ucd94\uac00\ud558\uae30"),Object(r.b)("li",{parentName:"ul"},"dynamic factors \uc5d0 \uae30\ubc18\ud55c different JSON schema \uc0ac\uc6a9")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="http-exception.filter.ts" {5,13}',title:'"http-exception.filter.ts"',"{5,13}":!0},"import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';\nimport { Request, Response } from 'express';\n\n//  HttpException \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c catch \ud558\ub294 \ud074\ub798\uc2a4\n@Catch(HttpException)\nexport class HttpExceptionFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse<Response>();\n    const request = ctx.getRequest<Request>();\n    const status = exception.getStatus();\n\n    // \ucee4\uc2a4\ud140 Reponse logic\n    response\n      .status(status)\n      .json({\n        statusCode: status,\n        timestamp: new Date().toISOString(),\n        path: request.url,\n      });\n  }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ExceptionFilter"',title:'"ExceptionFilter"'},"import { ArgumentsHost } from '../features/arguments-host.interface';\nexport interface ExceptionFilter<T = any> {\n    /**\n     * Method to implement a custom exception filter.\n     *\n     * @param exception the class of the exception being handled\n     * @param host used to access an array of arguments for\n     * the in-flight request\n     */\n    catch(exception: T, host: ArgumentsHost): any;\n}\n")),Object(r.b)("h3",{id:"implements-exceptionfilter"},Object(r.b)("inlineCode",{parentName:"h3"},"implements ExceptionFilter")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 Exception filters \ub294 ",Object(r.b)("inlineCode",{parentName:"li"},"generic ExceptionFilter<T>")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud574\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"catch(exception: T, host: ArgumentsHost)")," \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"T")," : \uc608\uc678 \ud0c0\uc785")),Object(r.b)("h3",{id:"catchhttpexception"},Object(r.b)("inlineCode",{parentName:"h3"},"@Catch(HttpException)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud544\uc694\ud55c metadata \ub97c Exception Filter \uc5d0\uac8c \ubc14\uc778\ub4dc \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"HttpException \uc608\uc678\ub97c \ucc3e\uc73c\ub77c\uace0 Nest \uc5d0\uac8c \uc774\uc57c\uae30 \ud574\uc900\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ud558\ub098 \ud639\uc740 comma \ub85c \uad6c\ubd84\ub41c \ub9ac\uc2a4\ud2b8\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Type } from '../../interfaces';\nexport declare function Catch(...exceptions: Type<any>[]): ClassDecorator;\n")),Object(r.b)("h2",{id:"arguments-host"},"Arguments host"),Object(r.b)("p",null,"ExceptionFilter \ud074\ub798\uc2a4\uc758 ",Object(r.b)("inlineCode",{parentName:"p"},"catch(exception: HttpException, host: ArgumentsHost)")," \uba54\uc11c\ub4dc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"exception")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ud604\uc7ac \ucc98\ub9ac\ub418\uace0 \uc788\ub294 \uc608\uc678 \uac1d\uccb4"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"host")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ArgumentsHost \uac1d\uccb4"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ArgumentsHost")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8","[execution context]"," \ub97c \uc54c \uc218 \uc788\ub294 \uac15\ub825\ud55c \uc720\ud2f8\ub9ac\ud2f0 \uac1d\uccb4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http-exception.filter.ts")," \uc608\uc2dc\uc5d0\uc11c \uc54c \uc218 \uc788\ub294 \uac83\ub4e4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc624\ub9ac\uc9c0\ub110 Request \ud578\ub4e4\ub7ec\ub85c \uc804\ub2ec\ub418\ub294 Request \ubc0f Response \uac1d\uccb4"),Object(r.b)("li",{parentName:"ul"},"Request and Response \uac1d\uccb4\ub97c \uc5bb\uae30 \uc704\ud55c \ud5ec\ud37c \uba54\uc11c\ub4dc\uc758 \uc0ac\uc6a9")))))),Object(r.b)("h2",{id:"\ubc14\uc778\ub529-filters"},"\ubc14\uc778\ub529 filters"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controller.ts" {2}',title:'"cats.controller.ts"',"{2}":!0},"@Post()\n@UseFilters(new HttpExceptionFilter())\nasync create(@Body() createCatDto: CreateCatDto) {\n  throw new ForbiddenException();\n}\n")),Object(r.b)("p",null,"\uc778\uc2a4\ud134\uc2a4 \ub300\uc2e0 \ud074\ub798\uc2a4\ub97c \uc804\ub2ec\ud558\uc5ec \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \uc778\uc2a4\ud134\uc2a4\ud654\uc5d0 \ub300\ud55c \ucc45\uc784\uc744 \ub9e1\uae30\uace0 \uc885\uc18d\uc131 \uc8fc\uc785\uc744 \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controller.ts" {2}',title:'"cats.controller.ts"',"{2}":!0},"@Post()\n@UseFilters(HttpExceptionFilter)\nasync create(@Body() createCatDto: CreateCatDto) {\n  throw new ForbiddenException();\n}\n")),Object(r.b)("p",null,"\ud544\ud130 \uc801\uc6a9\uc2dc, \uc778\uc2a4\ud134\uc2a4\ubcf4\ub2e4 \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc120\ud638\ub429\ub2c8\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc740, \uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc744 \uac10\uc18c\uc2dc\ud0b5\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Nest \ub294 \ubaa8\ub4c8 \uac04\uc758 \ub3d9\uc77c\ud55c \uc778\uc2a4\ud134\uc2a4\ub97c \uc27d\uac8c \uc7ac\ud65c\uc6a9 \ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc784.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="UseFilters"',title:'"UseFilters"'},"import { ExceptionFilter } from '../../index';\nexport declare const UseFilters: (...filters: (ExceptionFilter | Function)[]) => MethodDecorator & ClassDecorator;\n")),Object(r.b)("h3",{id:"\uc608\uc678-\ud544\ud130\uc758-\uc2a4\ucf54\ud504-\ub808\ubca8"},"\uc608\uc678 \ud544\ud130\uc758 \uc2a4\ucf54\ud504 \ub808\ubca8"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"method-scoped \uba54\uc11c\ub4dc"),Object(r.b)("li",{parentName:"ul"},"controller-scoped \ucee8\ud2b8\ub864\ub7ec"),Object(r.b)("li",{parentName:"ul"},"global-scoped \uc804\uc5ed")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="cats.controller.ts :: \ucee8\ud2b8\ub864\ub7ec \uc2a4\ucf54\ud504\uc758 \uc608\uc678 \ud544\ud130 \u2192 CatsController \uc758 \ubaa8\ub4e0 \ub77c\uc6b0\ud130 \ud578\ub4e4\ub7ec\uc5d0 \uc801\uc6a9" {1}',title:'"cats.controller.ts',"::":!0,"\ucee8\ud2b8\ub864\ub7ec":!0,"\uc2a4\ucf54\ud504\uc758":!0,"\uc608\uc678":!0,"\ud544\ud130":!0,"\u2192":!0,CatsController:!0,"\uc758":!0,"\ubaa8\ub4e0":!0,"\ub77c\uc6b0\ud130":!0,"\ud578\ub4e4\ub7ec\uc5d0":!0,'\uc801\uc6a9"':!0,"{1}":!0},"@UseFilters(new HttpExceptionFilter())\nexport class CatsController {}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts :: \uc804\uc5ed \uc2a4\ucf54\ud504\uc758 \uc608\uc678 \ud544\ud130" {3}',title:'"main.ts',"::":!0,"\uc804\uc5ed":!0,"\uc2a4\ucf54\ud504\uc758":!0,"\uc608\uc678":!0,'\ud544\ud130"':!0,"{3}":!0},"async function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.useGlobalFilters(new HttpExceptionFilter());\n  await app.listen(3000);\n}\nbootstrap();\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"useGlobalFilters()")," \uba54\uc11c\ub4dc\ub294 gateways \ud639\uc740 hybrid applications \uc5d0 \ub300\ud574 \ud544\ud130\ub97c \uc124\uc815\ud558\uc9c0 \ubabb\ud55c\ub2e4."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc804\uc5ed \uc2a4\ucf54\ud504 \ud544\ud130\ub294, \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 \uacf3(\ucee8\ud2b8\ub864\ub7ec, \ub77c\uc6b0\ud2b8 \ud578\ub4e4\ub7ec) \uc5d0\uc11c \uc0ac\uc6a9\ub420 \uc218 \uc788\ub2e4.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc758\uc874\uc131 \uc8fc\uc785\uc758 \uad00\uc810\uc5d0\uc11c, \uc804\uc5ed \uc2a4\ucf54\ud504 \ud544\ud130\ub294 \ubaa8\ub4c8 \uc678\ubd80\uc5d0\uc11c \ub4f1\ub85d \ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 \uc885\uc18d\uc131 \uc8fc\uc785\uc744 \ud560 \uc218 \uc5c6\ub2e4."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4c8 \ucee8\ud14d\uc2a4\ud2b8 \uc678\ubd80\uc5d0\uc11c \uc218\ud589\ub418\uae30 \ub54c\ubb38\uc774\ub2e4."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\ud574\uacb0 \ubc29\ubc95\uc73c\ub85c, \uc804\uc5ed \uc2a4\ucf54\ud504 \ud544\ud130\ub97c \ubaa8\ub4c8\uc5d0 \ubc14\ub85c \ub4f1\ub85d\ud558\uc5ec \uc885\uc18d\uc131 \uc8fc\uc785\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.module.ts" {6,7,8,9}',title:'"app.module.ts"',"{6,7,8,9}":!0},"import { Module } from '@nestjs/common';\nimport { APP_FILTER } from '@nestjs/core';\n\n@Module({\n  providers: [\n    {\n      provide: APP_FILTER,\n      useClass: HttpExceptionFilter,\n    },\n  ],\n})\nexport class AppModule {}\n")))),Object(r.b)("h2",{id:"catch-everything-catch"},"Catch everything ",Object(r.b)("inlineCode",{parentName:"h2"},"@Catch()")),Object(r.b)("p",null,"\ucc98\ub9ac\ub418\uc9c0 \uc54a\uc740 \ubaa8\ub4e0 \uc608\uc678\ub97c \uce90\uce58\ud558\ub824\uba74 ",Object(r.b)("inlineCode",{parentName:"p"},"@Catch()")," (empty parameter) \ub97c \uc0ac\uc6a9\ud55c\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ExceptionFilter,\n  Catch,\n  ArgumentsHost,\n  HttpException,\n  HttpStatus,\n} from '@nestjs/common';\nimport { HttpAdapterHost } from '@nestjs/core';\n\n@Catch()\nexport class AllExceptionsFilter implements ExceptionFilter {\n  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}\n\n  catch(exception: unknown, host: ArgumentsHost): void {\n    // In certain situations `httpAdapter` might not be available in the\n    // constructor method, thus we should resolve it here.\n    const { httpAdapter } = this.httpAdapterHost;\n\n    const ctx = host.switchToHttp();\n\n    const httpStatus =\n      exception instanceof HttpException\n        ? exception.getStatus()\n        : HttpStatus.INTERNAL_SERVER_ERROR;\n\n    const responseBody = {\n      statusCode: httpStatus,\n      timestamp: new Date().toISOString(),\n      path: httpAdapter.getRequestUrl(ctx.getRequest()),\n    };\n\n    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);\n  }\n}\n")),Object(r.b)("p",null,"platform-agnostic"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"response \ub97c \uc804\ub2ec\ud558\uae30 \uc704\ud574 HTTP adapter \ub97c \uc0ac\uc6a9\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"platform-specific objects (Request and Response) \ub97c \uc9c1\uc811\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc74c.")),Object(r.b)("h2",{id:"inheritance"},"Inheritance"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="all-exceptions.filter.ts"',title:'"all-exceptions.filter.ts"'},"import { Catch, ArgumentsHost } from '@nestjs/common';\nimport { BaseExceptionFilter } from '@nestjs/core';\n\n@Catch()\nexport class AllExceptionsFilter extends BaseExceptionFilter {\n  catch(exception: unknown, host: ArgumentsHost) {\n    super.catch(exception, host);\n    // more business logic ...\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c, \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 \uc774\ud589\ud558\uae30 \uc704\ud574  fully customized exception filters \ub97c \uc0dd\uc131\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098, \uac04\ub2e8\ud788 \ube4c\ud2b8\uc778 default global exception filter \ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \ucf00\uc774\uc2a4\ub3c4 \uc788\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BaseExceptionFilter")," \ub97c \ud655\uc7a5\ud558\uace0 \ud655\uc7a5\ub41c ",Object(r.b)("inlineCode",{parentName:"li"},"catch()")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"BaseExceptionFilter \ub97c \ud655\uc7a5\ud55c Method-scoped \uc640 Controller-scoped \ud544\ud130\ub294 new \ub85c \ucd08\uae30\ud654 \ub418\uba74 \uc548\ub41c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc790\ub3d9\uc73c\ub85c \ucd08\uae30\ud654 \ud55c\ub2e4.")))),Object(r.b)("h3",{id:"\uc804\uc5ed\ud544\ud130\ub85c-\ub4f1\ub85d\ud558\uae30"},"\uc804\uc5ed\ud544\ud130\ub85c \ub4f1\ub85d\ud558\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="1. useGlobalFilters \uc0ac\uc6a9" {4,5}',title:'"1.',useGlobalFilters:!0,'\uc0ac\uc6a9"':!0,"{4,5}":!0},"async function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  const { httpAdapter } = app.get(HttpAdapterHost);\n  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));\n\n  await app.listen(3000);\n}\nbootstrap();\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\ubaa8\ub4c8\uc5d0 ",Object(r.b)("inlineCode",{parentName:"li"},"APP_FILTER")," \uc0ac\uc6a9\ud558\uae30")))}p.isMDXComponent=!0},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);