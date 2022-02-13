(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var l=n(3),r=(n(0),n(443));const a={},i={unversionedId:"network/CORS",id:"network/CORS",isDocsHomePage:!1,title:"CORS",description:"CORS",source:"@site/docs/network/CORS.md",slug:"/network/CORS",permalink:"/docs/network/CORS",version:"current",sidebar:"network",previous:{title:"HTTP headers Referrer \ubcf4\uc548\uc774\uc288",permalink:"/docs/network/HTTP_headers_Referer_\ubcf4\uc548\uc774\uc288"}},c=[{value:"URL",id:"url",children:[]},{value:"\ucd9c\ucc98",id:"\ucd9c\ucc98",children:[]},{value:"SOP : Same Origin Policy",id:"sop--same-origin-policy",children:[{value:"\uc608\uc678 \uc870\ud56d",id:"\uc608\uc678-\uc870\ud56d",children:[]}]},{value:"CORS \ubc30\uacbd",id:"cors-\ubc30\uacbd",children:[]},{value:"CORS \uc640 \ube0c\ub77c\uc6b0\uc800",id:"cors-\uc640-\ube0c\ub77c\uc6b0\uc800",children:[]},{value:"CORS \uc758 \uae30\ubcf8 \ub3d9\uc791",id:"cors-\uc758-\uae30\ubcf8-\ub3d9\uc791",children:[]},{value:"Preflight Request",id:"preflight-request",children:[{value:"Preflight",id:"preflight",children:[]}]},{value:"Simple Request",id:"simple-request",children:[]},{value:"Credentialed Request",id:"credentialed-request",children:[{value:"credential",id:"credential",children:[]},{value:"credential \uc635\uc158\uc758 \uc885\ub958",id:"credential-\uc635\uc158\uc758-\uc885\ub958",children:[]}]},{value:"CORS \ud574\uacb0 \ubc29\ubc95",id:"cors-\ud574\uacb0-\ubc29\ubc95",children:[{value:"1. Access-Control-Allow-Origin \uc138\ud305",id:"1-access-control-allow-origin-\uc138\ud305",children:[]},{value:"2. Webpack DevServer \ub85c \ub9ac\ubc84\uc2a4 \ud504\ub85d\uc2f1",id:"2-webpack-devserver-\ub85c-\ub9ac\ubc84\uc2a4-\ud504\ub85d\uc2f1",children:[]}]},{value:"Reference",id:"reference",children:[]}],b={toc:c};function o({components:e,...t}){return Object(r.b)("wrapper",Object(l.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"cors"},"CORS"),Object(r.b)("p",null,"Cross Origin Resource Sharing \uc815\ucc45"),Object(r.b)("h2",{id:"url"},"URL"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Protocol")," https://")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Host"),"    ",Object(r.b)("a",{parentName:"p",href:"http://www.evan-moon.com"},"www.evan-moon.com"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Path")," /users")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Query String")," ?sort=asc&page=1")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Fragment")," #foo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Port")," \uc758 \uc0dd\ub7b5 \u2192 \uae30\ubcf8 \ud3ec\ud2b8 \ubc88\ud638"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"HTTP 80"),Object(r.b)("li",{parentName:"ul"},"HTTPS 443")))),Object(r.b)("h2",{id:"\ucd9c\ucc98"},"\ucd9c\ucc98"),Object(r.b)("p",null,"Protocol, Host, Port "),Object(r.b)("p",null,"\uc11c\ubc84\uc704\uce58\ub97c \ucc3e\uae30 \uc704\ud55c \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc694\uc18c"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'console.log(location.origin);       // "https://evan-moon.github.io"\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"\ucd9c\ucc98\ub97c \ube44\uad50"),"\ud558\ub294 \ub85c\uc9c1\uc740 \uc11c\ubc84\uac00 \uc544\ub2c8\ub77c ",Object(r.b)("inlineCode",{parentName:"p"},"\ube0c\ub77c\uc6b0\uc800"),"\uc5d0 \uad6c\ud604\ub418\uc5b4 \uc788\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\ub97c \ud1b5\ud558\uc9c0 \uc54a\uc740 \uc11c\ubc84 \uac04 \ud1b5\uc2e0\uc740 SOP \uac00 \uc801\uc6a9\ub418\uc9c0 \uc54a\ub294\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"\ucd9c\ucc98 \ube44\uad50 \uc2dc \ud3ec\ud2b8 \ubc88\ud638\ub97c \uc644\uc804 \ubb34\uc2dc\ud558\ub294 \ube0c\ub77c\uc6b0\uc800\ub294 Internet Explorer \ubc16\uc5d0 \uc5c6\ub2e4.")),Object(r.b)("h2",{id:"sop--same-origin-policy"},"SOP : Same Origin Policy"),Object(r.b)("p",null,"\uac19\uc740 \ucd9c\ucc98\uc5d0\uc11c\ub9cc \ub9ac\uc18c\uc2a4\ub97c \uacf5\uc720\ud560 \uc218 \uc788\ub2e4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CORS \uc815\ucc45\uc744 \uc9c0\ud0a8 \ub9ac\uc18c\uc2a4 \uc694\uccad\uc740 \ucd9c\ucc98\uac00 \ub2e4\ub974\ub354\ub77c\ub3c4 \ud5c8\uc6a9\ud55c\ub2e4.")),Object(r.b)("h3",{id:"\uc608\uc678-\uc870\ud56d"},"\uc608\uc678 \uc870\ud56d"),Object(r.b)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8, \ub80c\ub354\ub420 \uc774\ubbf8\uc9c0, \uc2a4\ud0c0\uc77c \uc2dc\ud2b8, script, img, style \ud0dc\uadf8"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<img src="https://evanmoon.tistory.com/rss">\n<script src="https://evanmoon.tistory.com/rss"><\/script>\n')),Object(r.b)("p",null,"\uc694\uccad \uc790\uccb4\ub294 \uc131\uacf5\ud55c\ub2e4 "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Sec-Fetch-Mode: no-cors")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud5e4\ub354\uc758 \uc694\uccad \ud544\ub4dc\ub97c \uc124\uc815"),Object(r.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\uac00 no-cors \uc778 \uacbd\uc6b0 \ub2e4\ub978 \ucd9c\ucc98\uc5ec\ub3c4 CORS \uc815\ucc45\uc744 \uac80\uc0ac\ud558\uc9c0 \uc54a\ub294\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"\uc751\ub2f5\uc744 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uac8c \uc54c\ub824\uc8fc\uc9c0 \uc54a\uc544 \uc751\ub2f5 \ub0b4\uc6a9\uc744 \uc54c \uc218 \uc5c6\ub2e4.")),Object(r.b)("h2",{id:"cors-\ubc30\uacbd"},"CORS \ubc30\uacbd"),Object(r.b)("p",null,"\ucd9c\ucc98\uac00 \ub2e4\ub978 \ub450\uac1c\uc758 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub9c8\uc74c\ub300\ub85c \uc18c\ud1b5\ud560 \uc218 \uc788\ub294 \uac83\uc740 \uc704\ud5d8\ud558\ub2e4."),Object(r.b)("p",null,"\uc6f9\uc5d0\uc11c \ub3cc\uc544\uac00\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc0ac\uc6a9\uc790\uc758 \uacf5\uaca9\uc5d0 \ucde8\uc57d\ud558\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CSRF (Cross-Site Request Forgery)"),Object(r.b)("li",{parentName:"ul"},"XSS (Cross0Site Scripting)")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790\ub3c4\uad6c\uc5d0\uc11c \uac01\uc885 \uc815\ubcf4\ub4e4\uc744 \uc544\ubb34\ub7f0 \uc81c\uc81c\uc5c6\uc774 \uc5f4 \uc218 \uc788\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"DOM \ud655\uc778"),Object(r.b)("li",{parentName:"ul"},"\uc11c\ubc84 \ud1b5\uc2e0 \ub0b4\uc5ed"),Object(r.b)("li",{parentName:"ul"},"\ub9ac\uc18c\uc2a4 \ucd9c\ucc98 "))),Object(r.b)("li",{parentName:"ol"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc \ub09c\ub3c5\ud654\ub294 \uc554\ud638\ud654\uac00 \uc544\ub2c8\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ub09c\ub3c5\ud654\uac00 \uc548\ub418\uc5b4 \uc788\uc5b4 \uc18c\uc2a4\ucf54\ub4dc\uac00 \uadf8\ub300\ub85c \ub178\ucd9c\ub418\ub294 \uc0ac\uc774\ud2b8\ub4e4\ub3c4 \ub9ce\ub2e4.")))),Object(r.b)("h2",{id:"cors-\uc640-\ube0c\ub77c\uc6b0\uc800"},"CORS \uc640 \ube0c\ub77c\uc6b0\uc800"),Object(r.b)("p",null,"\ucd9c\ucc98\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \ud310\ubcc4\ud55c\ub2e4. \ub530\ub77c\uc11c"),Object(r.b)("p",null,"CORS\ub97c \uc704\ubc18\ud588\uc744 \ub54c"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc11c\ubc84\ub294 \uc815\uc0c1\uc801\uc73c\ub85c \uc751\ub2f5"),Object(r.b)("li",{parentName:"ul"},"\uc751\ub2f5\uc758 \ud30c\uae30 \uc5ec\ubd80\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \uacb0\uc815")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/89126088-f89c9280-d51d-11ea-8b47-9d540b57c194.png",alt:"cors"})),Object(r.b)("h2",{id:"cors-\uc758-\uae30\ubcf8-\ub3d9\uc791"},"CORS \uc758 \uae30\ubcf8 \ub3d9\uc791"),Object(r.b)("p",null,"\uc6f9 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ub2e4\ub978 \ucd9c\ucc98\uc758 \ub9ac\uc18c\uc2a4\ub97c \uc694\uccad\ud560 \ub54c \uae30\ubcf8\uc801\uc778 \ub3d9\uc791"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uc758 \uccab \uc694\uccad",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"HTTP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc694\uccad\uc744 \ubcf4\ub0b8\ub2e4"),Object(r.b)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800\ub294 \uc694\uccad \ud5e4\ub354\uc5d0 ",Object(r.b)("inlineCode",{parentName:"li"},"Origin")," \ud544\ub4dc\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \ucd9c\ucc98\ub97c \ud568\uaed8 \ub2f4\uc544 \ubcf4\ub0b8\ub2e4.",Object(r.b)("br",{parentName:"li"}),Object(r.b)("inlineCode",{parentName:"li"},"Origin: https://evan-moon.github.io")))),Object(r.b)("li",{parentName:"ol"},"\uc11c\ubc84\uc758 \uc751\ub2f5",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\uc751\ub2f5 \ud5e4\ub354 ",Object(r.b)("inlineCode",{parentName:"li"},"Access-Controll-Allow-Origin")," \ub97c \ubcf4\ub0b8\ub2e4.  ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ud5c8\uc6a9\ub41c \ucd9c\ucc98"))))),Object(r.b)("li",{parentName:"ol"},"\uc751\ub2f5\uc744 \ubc1b\uc740 \ube0c\ub77c\uc6b0\uc800",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\uc790\uc2e0\uc774 \ubcf4\ub0c8\ub358 ",Object(r.b)("inlineCode",{parentName:"li"},"Origin")," \uacfc \uc751\ub2f5 \ubc1b\uc740 ",Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin")," \uc744 \ube44\uad50\ud558\uc5ec \uc720\ud6a8\ud55c\uc9c0 \uacb0\uc815\ud55c\ub2e4.")))),Object(r.b)("h2",{id:"preflight-request"},"Preflight Request"),Object(r.b)("p",null,"\uc6f9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c \uc77c\ubc18\uc801\uc73c\ub85c \ub9c8\uc8fc\uce58\ub294 \uc2dc\ub098\ub9ac\uc624"),Object(r.b)("p",null,"\ube0c\ub77c\uc6b0\uc800\ub294 ",Object(r.b)("inlineCode",{parentName:"p"},"\uc608\ube44\uc694\uccad"),"(Preflight)\uacfc ",Object(r.b)("inlineCode",{parentName:"p"},"\ubcf8 \uc694\uccad"),"\uc73c\ub85c \ub098\ub204\uc5b4\uc11c \uc11c\ubc84\ub85c \uc804\uc1a1\ud55c\ub2e4."),Object(r.b)("h3",{id:"preflight"},"Preflight"),Object(r.b)("p",null,"\ubcf8 \uc694\uccad\uc744 \ubcf4\ub0b4\uae30 \uc804, \ube0c\ub77c\uc6b0\uc800\uac00 \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \uac83\uc774 \uc548\uc804\ud55c\uc9c0 \ud655\uc778\ud55c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP \uc758 ",Object(r.b)("inlineCode",{parentName:"li"},"OPTIONS")," \uba54\uc11c\ub4dc\uac00 \uc0ac\uc6a9\ub41c\ub2e4.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/89126538-42d34300-d521-11ea-90a4-beae5ab70188.png",alt:"image"})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const headers = new Headers({\n  'Content-Type': 'text/xml',\n});\nfetch('https://evanmoon.tistory.com/rss', { headers });\n")),Object(r.b)("p",null,"\uc694\uccad"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"OPTIONS https://evanmoon.tistory.com/rss\n\nAccept: */*\nAccept-Encoding: gzip, deflate, br\nAccept-Language: en-US,en;q=0.9,ko;q=0.8,ja;q=0.7,la;q=0.6\nAccess-Control-Request-Headers: content-type\nAccess-Control-Request-Method: GET\nConnection: keep-alive\nHost: evanmoon.tistory.com\nOrigin: https://evan-moon.github.io\nReferer: https://evan-moon.github.io/2020/05/21/about-cors/\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: cross-site\n")),Object(r.b)("p",null,"\ubcf8 \uc694\uccad\uc5d0 \ub300\ud55c \ub2e4\ub978 \uc815\ubcf4\ub4e4\ub3c4 \ubbf8\ub9ac \uc54c\ub824\uc900\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Request-Headers")," : Content-Type "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Request-Method")," : GET")),Object(r.b)("p",null,"\uc608\ube44 \uc694\uccad\uc5d0 \ub300\ud55c \uc751\ub2f5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"OPTIONS https://evanmoon.tistory.com/rss 200 OK\n\nAccess-Control-Allow-Origin: https://evanmoon.tistory.com\nContent-Encoding: gzip\nContent-Length: 699\nContent-Type: text/xml; charset=utf-8\nDate: Sun, 24 May 2020 11:52:33 GMT\nP3P: CP='ALL DSP COR MON LAW OUR LEG DEL'\nServer: Apache\nVary: Accept-Encoding\nX-UA-Compatible: IE=Edge\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc751\ub2f5 \ud5e4\ub354\uc758 ",Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin: https://evanmoon.tistory.com")," \ub294 \uc694\uccad \ud5e4\ub354\uc758\n",Object(r.b)("inlineCode",{parentName:"li"},"Origin: https://evan-moon.github.io")," \uc640 \ucd9c\ucc98\uac00 \ub2e4\ub974\ubbc0\ub85c CORS \uc815\ucc45 \uc704\ubc18 \uc5d0\ub7ec\ub97c \ub744\uc6b4\ub2e4.")),Object(r.b)("h2",{id:"simple-request"},"Simple Request"),Object(r.b)("p",null,"\uc608\ube44 \uc694\uccad\uc774 \uc5c6\ub2e4.\n",Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/89157338-54f7c480-d5a7-11ea-9daf-131893d4db68.png",alt:"image"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud2b9\uc815\uc870\uac74\uc774 \ub9cc\uc871\ud574\uc57c Simple Request \ub97c \ud560 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc774 \ub4dc\ubb3c\ub2e4",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\uc5b8\uc81c\ud560 \uae4c? TODO")))),Object(r.b)("h2",{id:"credentialed-request"},"Credentialed Request"),Object(r.b)("p",null,"\uc778\uc99d\ub41c \uc694\uccad\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CORS \uc5d0\uc11c \uc880\ub354 \ubcf4\uc548\uc744 \uac15\ud654\ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud55c\ub2e4.")),Object(r.b)("h3",{id:"credential"},"credential"),Object(r.b)("p",null,"\ube44\ub3d9\uae30 \uc694\uccad API ",Object(r.b)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\uac1d\uccb4, ",Object(r.b)("inlineCode",{parentName:"p"},"fetchAPI")," \ub294 \ube0c\ub77c\uc6b0\uc800\uc758 \ucfe0\ud0a4\uc815\ubcf4\ub098 \uc778\uc99d\uacfc \uad00\ub828\ub41c \ud5e4\ub354\ub97c \ub2f4\uc9c0 \uc54a\ub294\ub2e4.\n\uc774\ub54c ",Object(r.b)("inlineCode",{parentName:"p"},"credential")," \uc740 \uc694\uccad\uc5d0 \uc778\uc99d\uacfc \uad00\ub828\ub41c \uc815\ubcf4\ub97c \ub2f4\uc744 \uc218 \uc788\uac8c \ud574\uc900\ub2e4."),Object(r.b)("h3",{id:"credential-\uc635\uc158\uc758-\uc885\ub958"},"credential \uc635\uc158\uc758 \uc885\ub958"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"Same Origin"),"(\ud06c\ub86c Default) \uac19\uc740 \ucd9c\ucc98\uac04 \uc694\uccad\uc5d0\ub9cc \uc778\uc99d \uc815\ubcf4\ub97c \ub2f4\uc744 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"include")," \ubaa8\ub4e0 \uc694\uccad\uc5d0 \uc778\uc99d\uc815\ubcf4\ub97c \ub2f4\uc744 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"omit")," \ubaa8\ub4e0 \uc694\uccad\uc5d0 \uc778\uc99d\uc815\ubcf4\ub97c \ub2f4\uc9c0 \uc54a\ub294\ub2e4.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Same Origin")," ",Object(r.b)("inlineCode",{parentName:"p"},"include")," \uc635\uc158\uc774\ub77c\uba74 ",Object(r.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \uc774\uc678\uc5d0 \uc870\uac74\uc774 \ub354 \uae4c\ub2e4\ub85c\uc6cc\uc9c4\ub2e4."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"Same Origin")," : ",Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin: *")," \ud5c8\uc6a9"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"include")," \uc751\ub2f5\ud5e4\ub354\uc5d0",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin: *")," \ubbf8\ud5c8\uc6a9"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials: true")," \ud544\uc218")))),Object(r.b)("h2",{id:"cors-\ud574\uacb0-\ubc29\ubc95"},"CORS \ud574\uacb0 \ubc29\ubc95"),Object(r.b)("h3",{id:"1-access-control-allow-origin-\uc138\ud305"},"1. Access-Control-Allow-Origin \uc138\ud305"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\uc11c\ubc84\uc5d4\uc9c4\uc758 \uc124\uc815 nginx, apache"),Object(r.b)("li",{parentName:"ol"},"\uc18c\uc2a4\ucf54\ub4dc \ub0b4\uc5d0 \uc751\ub2f5 \ubbf8\ub4e4\uc6e8\uc5b4 \uc138\ud305",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"CORS \ubbf8\ub4e4\uc6e8\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucc3e\uc544\ubcf4\uc790")))),Object(r.b)("h3",{id:"2-webpack-devserver-\ub85c-\ub9ac\ubc84\uc2a4-\ud504\ub85d\uc2f1"},"2. Webpack DevServer \ub85c \ub9ac\ubc84\uc2a4 \ud504\ub85d\uc2f1"),Object(r.b)("p",null,"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\ud658\uacbd\uc5d0\uc11c CORS \ub97c \ub9ce\uc774 \ub9c8\uc8fc\uce60 \uac83\uc774\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","\ubca1\uc5d4\ub4dc\uc758 ",Object(r.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: http://localhost:3000")," \uac19\uc774 \ubc94\uc6a9\uc801\uc778 \ucd9c\ucc98\ub97c \ub123\uc5b4\uc8fc\ub294 \uacbd\uc6b0\ub294 \ub4dc\ubb3c\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-dev-server")," \uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ud504\ub85d\uc2dc \uae30\ub2a5\uc740 CORS \uc815\ucc45\uc744 \uc6b0\ud68c\ud558\uac8c \ud574\uc900\ub2e4.     "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  devServer: {\n    proxy: {\n      '/api': {\n        target: 'https://api.evan.com',\n        changeOrigin: true,\n        pathRewrite: { '^/api': '' },\n      },\n    }\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"localhost:8000/api")," \ucc98\ub7fc, path \uac00 ",Object(r.b)("inlineCode",{parentName:"li"},"/api")," \ub85c \uc2dc\uc791\ub418\ub294 \uc694\uccad\uc744 \uc6f9\ud329\uc774 ",Object(r.b)("inlineCode",{parentName:"li"},"https://api.evan.com")," \uc73c\ub85c \uc694\uccad\uc744 \ud504\ub85d\uc2f1 \ud574\uc900\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\ub294 \uc5ec\uc804\ud788 ",Object(r.b)("inlineCode",{parentName:"li"},"localhost:8000/api")," \ub85c \uc54c\uace0\uc788\ub2e4.")),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://evan-moon.github.io/2020/05/21/about-cors/"},"CORS\ub294 \uc65c \uc774\ub807\uac8c \uc6b0\ub9ac\ub97c \ud798\ub4e4\uac8c \ud558\ub294\uac78\uae4c?"))))}o.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return m}));var l=n(0),r=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),O=p(n),s=l,m=O["".concat(i,".").concat(s)]||O[s]||u[s]||a;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var o=2;o<a;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);