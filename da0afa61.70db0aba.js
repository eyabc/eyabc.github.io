(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{426:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),b=(n(0),n(481));const a={},l={unversionedId:"javascript/browser/Browser",id:"javascript/browser/Browser",isDocsHomePage:!1,title:"Browser",description:"Browser",source:"@site/docs/javascript/browser/Browser.md",slug:"/javascript/browser/Browser",permalink:"/docs/javascript/browser/Browser",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"window.opener",permalink:"/docs/javascript/browser/window-opener"},next:{title:"BOM",permalink:"/docs/javascript/browser/Browser_BOM"}},c=[{value:"W3C World Wide Web Consortium",id:"w3c-world-wide-web-consortium",children:[]},{value:"\ube0c\ub77c\uc6b0\uc800 \uc8fc\uc694 \uae30\ub2a5",id:"\ube0c\ub77c\uc6b0\uc800-\uc8fc\uc694-\uae30\ub2a5",children:[]},{value:"\ud638\uc2a4\ud2b8\uc640 \ud638\uc2a4\ud2b8 \ud658\uacbd",id:"\ud638\uc2a4\ud2b8\uc640-\ud638\uc2a4\ud2b8-\ud658\uacbd",children:[]},{value:"\ube0c\ub77c\uc6b0\uc800 \ud638\uc2a4\ud2b8",id:"\ube0c\ub77c\uc6b0\uc800-\ud638\uc2a4\ud2b8",children:[]},{value:"\ube0c\ub77c\uc6b0\uc800 \uad6c\uc870",id:"\ube0c\ub77c\uc6b0\uc800-\uad6c\uc870",children:[{value:"1. \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 User Interface",id:"1-\uc0ac\uc6a9\uc790-\uc778\ud130\ud398\uc774\uc2a4-user-interface",children:[]},{value:"2. \ube0c\ub77c\uc6b0\uc800 \uc5d4\uc9c4 Browser Engine",id:"2-\ube0c\ub77c\uc6b0\uc800-\uc5d4\uc9c4-browser-engine",children:[]},{value:"3. \ub80c\ub354\ub9c1 \uc5d4\uc9c4 Rendering Engine",id:"3-\ub80c\ub354\ub9c1-\uc5d4\uc9c4-rendering-engine",children:[]},{value:"4. \ud1b5\uc2e0",id:"4-\ud1b5\uc2e0",children:[]},{value:"5. UI \ubc31\uc5d4\ub4dc",id:"5-ui-\ubc31\uc5d4\ub4dc",children:[]},{value:"6. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud574\uc11d\uae30",id:"6-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\ud574\uc11d\uae30",children:[]},{value:"7. \uc790\ub8cc \uc800\uc7a5\uc18c",id:"7-\uc790\ub8cc-\uc800\uc7a5\uc18c",children:[]}]},{value:"DOM (Document Object Model)",id:"dom-document-object-model",children:[]},{value:"BOM Browser Object Model",id:"bom-browser-object-model",children:[]},{value:"Reference",id:"reference",children:[]}],i={toc:c};function p({components:e,...t}){return Object(b.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"browser"},"Browser"),Object(b.b)("p",null,"2012 \ub144 ",Object(b.b)("a",{parentName:"p",href:"https://d2.naver.com/helloworld/59361"},"D2")," \uc758 \ub0b4\uc6a9\uc744 \ud1a0\ub300\ub85c \uc791\uc131\ud55c \ub0b4\uc6a9\uc774\ubbc0\ub85c\n\ucd5c\uc2e0\uc758 \ub0b4\uc6a9\uc744 \ubc18\uc601\ud558\uace0 \uc788\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("h2",{id:"w3c-world-wide-web-consortium"},Object(b.b)("a",{parentName:"h2",href:"https://ko.wikipedia.org/wiki/W3C"},"W3C")," World Wide Web Consortium"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc6f9 \ud45c\uc900\ud654 \uae30\uad6c"),Object(b.b)("li",{parentName:"ul"},"W3C \uba85\uc138 \ud45c\uc900")),Object(b.b)("p",null,"CSS,\nCGI,\nDOM,\nHTML,\nRDF,\nSVG,\nSOAP,\nSMIL,\nWSDL,\nXHTML,\nXML,\nXML \uc815\ubcf4 \uc9d1\ud569,\nXPath,\nXQuery,\nXSLT"),Object(b.b)("h2",{id:"\ube0c\ub77c\uc6b0\uc800-\uc8fc\uc694-\uae30\ub2a5"},"\ube0c\ub77c\uc6b0\uc800 \uc8fc\uc694 \uae30\ub2a5"),Object(b.b)("p",null,"\uc0ac\uc6a9\uc790\uac00 \uc120\ud0dd\ud55c \uc790\uc6d0\uc744 \uc11c\ubc84\uc5d0 \uc694\uccad\ud558\uace0 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ud45c\uc2dc\ud568"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"HTML / CSS \uba85\uc138"),"\uc5d0 \ub530\ub77c \ud574\uc11d\ud558\uace0 \ud45c\uc2dc\ud568.")),Object(b.b)("p",null,"\ube0c\ub77c\uc6b0\uc800\uac00 \ud45c\ud604\ud558\ub294 \ubb38\uc11c\uc5d0\ub294 HTML XML SVG \ub4f1 \uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\ub294\ub370, \uc5ec\uae30\uc11c\ub294 ",Object(b.b)("strong",{parentName:"p"},"HTML \ubb38\uc11c"),"\uc5d0 \ub300\ud574\uc11c\ub9cc \ub2e4\ub8e8\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("h2",{id:"\ud638\uc2a4\ud2b8\uc640-\ud638\uc2a4\ud2b8-\ud658\uacbd"},"\ud638\uc2a4\ud2b8\uc640 \ud638\uc2a4\ud2b8 \ud658\uacbd"),Object(b.b)("p",null,"\ud638\uc2a4\ud2b8"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub3cc\uc544\uac00\ub294 \ud50c\ub7ab\ud3fc"),Object(b.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800, \uc6f9\uc11c\ubc84, \ucee4\ud53c\uba38\uc2e0..")),Object(b.b)("p",null,"\ud638\uc2a4\ud2b8 \ud658\uacbd"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uac01 \ud638\uc2a4\ud2b8\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \ud2b9\uc815\ud55c \uae30\ub2a5\ub4e4"),Object(b.b)("li",{parentName:"ul"},"Language Core(ECMAScript) + \ud50c\ub7ab\ud3fc\uc5d0 \ud2b9\uc815\ub418\ub294 \uac1d\uccb4\uc640 \ud568\uc218 \uc81c\uacf5")),Object(b.b)("h2",{id:"\ube0c\ub77c\uc6b0\uc800-\ud638\uc2a4\ud2b8"},"\ube0c\ub77c\uc6b0\uc800 \ud638\uc2a4\ud2b8"),Object(b.b)("p",null,"\ud638\uc2a4\ud2b8 \ud658\uacbd\uc774 \ube0c\ub77c\uc6b0\uc800 \u2192 window \uc804\uc5ed \uac1d\uccb4"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \ucc3d(browser window) \ub97c \ub300\ubcc0\ud558\uace0 \uc774\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \uba54\uc11c\ub4dc \uc81c\uacf5\n",Object(b.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/31977543/96440387-dd027780-1242-11eb-96f2-3789b35e2386.png",alt:"image"}))),Object(b.b)("h2",{id:"\ube0c\ub77c\uc6b0\uc800-\uad6c\uc870"},"\ube0c\ub77c\uc6b0\uc800 \uad6c\uc870"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/97276717-eb701500-187a-11eb-9a39-a7467832a33b.png",alt:"image"})),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"URI(Uniform Resource Identifier) \uc790\uc6d0\uc758 \uc8fc\uc18c")),Object(b.b)("h3",{id:"1-\uc0ac\uc6a9\uc790-\uc778\ud130\ud398\uc774\uc2a4-user-interface"},"1. \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 User Interface"),Object(b.b)("p",null,"\uc6f9 \ud398\uc774\uc9c0(document)\ub97c \ubcf4\ub294 \ucc3d\uc744 \uc81c\uc678 \ud55c \ube0c\ub77c\uc6b0\uc800 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \ubaa8\ub4e0 \ubd80\ubd84"),Object(b.b)("p",null,"\ud45c\uc900 \uba85\uc138\uac00 \uc5c6\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0, \uc218 \ub144\uac04 \uc11c\ub85c\uc758 \uc7a5\uc810\uc744 \ubaa8\ubc29\ud558\uba74\uc11c \ud604\uc7ac\uc5d0 \uc774\ub974\ub800\ub2e4."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"URI \ub97c \uc785\ub825\ud560 \uc218 \uc788\ub294 \uc8fc\uc18c \ud45c\uc2dc \uc904"),Object(b.b)("li",{parentName:"ul"},"\uc774\uc804 \ubc84\ud2bc\uacfc \ub2e4\uc74c \ubc84\ud2bc"),Object(b.b)("li",{parentName:"ul"},"\ubd81\ub9c8\ud06c"),Object(b.b)("li",{parentName:"ul"},"\uc0c8\ub85c \uace0\uce68 \ubc84\ud2bc"),Object(b.b)("li",{parentName:"ul"},"\ud604\uc7ac \ubb38\uc11c\uc758 \ub85c\ub4dc\ub97c \uc911\ub2e8\ud560 \uc218 \uc788\ub294 \uc815\uc9c0 \ubc84\ud2bc"),Object(b.b)("li",{parentName:"ul"},"\ud648 \ubc84\ud2bc")),Object(b.b)("h3",{id:"2-\ube0c\ub77c\uc6b0\uc800-\uc5d4\uc9c4-browser-engine"},"2. \ube0c\ub77c\uc6b0\uc800 \uc5d4\uc9c4 Browser Engine"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc640 \ub80c\ub354\ub9c1 \uc5d4\uc9c4 \uc0ac\uc774\uc758 \uc0c1\ud638\uc791\uc6a9\uc744 \ub2e4\ub8ec\ub2e4."),Object(b.b)("li",{parentName:"ul"},"\ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc5d0 \uc9c8\uc758\ub97c \ubcf4\ub0b4\uba70, \uc870\uc791\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\n")),Object(b.b)("h3",{id:"3-\ub80c\ub354\ub9c1-\uc5d4\uc9c4-rendering-engine"},"3. \ub80c\ub354\ub9c1 \uc5d4\uc9c4 Rendering Engine"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"HTML \uacfc CSS \ub97c \ud30c\uc2f1"),"\ud558\uace0 \ube0c\ub77c\uc6b0\uc800 ",Object(b.b)("strong",{parentName:"li"},"\ud654\uba74\uc5d0 \ud30c\uc2f1\ub41c \ub0b4\uc6a9\uc744 \ud45c\uc2dc")),Object(b.b)("li",{parentName:"ul"},"Gecko, Webkit, blink")),Object(b.b)("p",null,"\uc6f9\ud0b7 \ub3d9\uc791 \uacfc\uc815\n",Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/98688038-c5379280-23ad-11eb-8bb2-b3ba6c48f732.png",alt:"\uc6f9\ud0b7 \ub3d9\uc791 \uacfc\uc815"})),Object(b.b)("p",null,"\ubaa8\uc9c8\ub77c\uc758 \uac8c\ucf54 \ub80c\ub354\ub9c1 \uc5d4\uc9c4 \ub3d9\uc791 \uacfc\uc815(3.6)\n",Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/98688128-e26c6100-23ad-11eb-852b-92b0ea9a5c87.png",alt:"\ubaa8\uc9c8\ub77c\uc758 \uac8c\ucf54 \ub80c\ub354\ub9c1 \uc5d4\uc9c4 \ub3d9\uc791 \uacfc\uc815(3.6)"})),Object(b.b)("h4",{id:"\ub80c\ub354\ub9c1-\uc5d4\uc9c4\uc758-\uae30\ubcf8-\ub3d9\uc791"},"\ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc758 \uae30\ubcf8 \ub3d9\uc791"),Object(b.b)("h5",{id:"\ud1b5\uc2e0\uc73c\ub85c\ubd80\ud130-\uc694\uccad\ud55c-\ubb38\uc11c\ub97c-\ub85c\ub4dc\ud568"},Object(b.b)("strong",{parentName:"h5"},"\ud1b5\uc2e0"),"\uc73c\ub85c\ubd80\ud130 \uc694\uccad\ud55c ",Object(b.b)("strong",{parentName:"h5"},"\ubb38\uc11c\ub97c \ub85c\ub4dc"),"\ud568."),Object(b.b)("h5",{id:"html-\ud30c\uc2f1-\u2192-dom-\ud2b8\ub9ac-\uad6c\ucd95"},Object(b.b)("strong",{parentName:"h5"},"HTML \ud30c\uc2f1")," \u2192 DOM \ud2b8\ub9ac \uad6c\ucd95"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/99140713-8cd2d580-2687-11eb-948e-f6e619d204fb.png",alt:"image"})),Object(b.b)("h5",{id:"cssom-\ud2b8\ub9ac-\uad6c\uc131"},"CSSOM \ud2b8\ub9ac \uad6c\uc131"),Object(b.b)("p",null,"\uc678\ubd80 \uc2a4\ud0c0\uc77c\uc2dc\ud2b8 \ud30c\uc77c\uc774\ub098 \ub0b4\ubd80 \uc2a4\ud0c0\uc77c\uc2dc\ud2b8\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc744 \uacbd\uc6b0, CSS \ub97c \ud574\uc11d\ud574 CSSOM \ud2b8\ub9ac\ub97c \uad6c\uc131\n",Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/99140738-cdcaea00-2687-11eb-9c2c-67471c0e44e9.png",alt:"image"})),Object(b.b)("h5",{id:"\uc2a4\ud0c0\uc77c--\ub80c\ub354-\ud2b8\ub9ac-\uad6c\ucd95-attachment-"},"\uc2a4\ud0c0\uc77c : \ub80c\ub354 \ud2b8\ub9ac \uad6c\ucd95 (attachment )"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/99140746-dcb19c80-2687-11eb-9b7a-820782d2420e.png",alt:"image"})),Object(b.b)("h5",{id:"layout--\ub80c\ub354-\ud2b8\ub9ac-\ubc30\uce58-reflow"},"layout : \ub80c\ub354 \ud2b8\ub9ac \ubc30\uce58 (reflow)"),Object(b.b)("p",null,"\ub178\ub4dc\uac00 \ud654\uba74 \ub0b4\uc5d0 \uc704\uce58\ub418\uc5b4\uc57c \ud560 \uc88c\ud45c\uac12 \uacc4\uc0b0 (\ud654\uba74 \ub0b4 position\uacfc size)\n",Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/99140758-fce15b80-2687-11eb-9204-4d178809e5d6.png",alt:"image"}),"\n",Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/99140760-feab1f00-2687-11eb-8d17-58e65064c1ae.png",alt:"image"})),Object(b.b)("h5",{id:"\ud398\uc778\ud2b8--\ub80c\ub354-\ud2b8\ub9ac-\uadf8\ub9ac\uae30-repaint"},"\ud398\uc778\ud2b8 : \ub80c\ub354 \ud2b8\ub9ac \uadf8\ub9ac\uae30 (repaint)"),Object(b.b)("p",null,"\ub808\uc774\uc544\uc6c3 \ub2e8\uacc4\uc5d0\uc11c \uacc4\uc0b0\ub41c \uac12\uc744 \uc774\uc6a9\ud574 \ub80c\ub354\ud2b8\ub9ac\uc758 \uac01 \ub178\ub4dc\ub97c \ud654\uba74\uc0c1\uc758 \uc2e4\uc81c \ud53d\uc140\ub85c \ubcc0\ud658"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc704\uce58\uc640 \uad00\uacc4\uc5c6\ub294 CSS \uc18d\uc131(\uc0c9\uc0c1, \ud22c\uba85\ub3c4 \ub4f1)\uc744 \uc801\uc6a9"),Object(b.b)("li",{parentName:"ul"},"\ud53d\uc140\ub85c \ubcc0\ud658\ub41c \uacb0\uacfc\ub294 \ud3ec\ud1a0\uc0f5\uc758 \ub808\uc774\uc5b4\ucc98\ub7fc \uc0dd\uc131\ub418\uc5b4 \uac1c\ubcc4 \ub808\uc774\uc5b4\ub85c \uad00\ub9ac"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/CSS/transform"},"transform")," \uc18d\uc131 \ub4f1\uc744 \uc0ac\uc6a9\ud558\uba74 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ub808\uc774\uc5b4\ud654 \ub41c\ub2e4.")),Object(b.b)("h5",{id:"\ud569\uc131--\ub80c\ub354"},"\ud569\uc131 & \ub80c\ub354"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"repaint \uc5d0\uc11c \uc0dd\uc131\ub41c \ub808\uc774\uc5b4\ub97c \ud569\uc131\ud558\uc5ec \uc2a4\ud06c\ub9b0\uc744 \uc5c5\ub370\uc774\ud2b8"),Object(b.b)("li",{parentName:"ul"},"\ud569\uc131\uacfc \ub80c\ub354 \ub2e8\uacc4\uac00 \ub05d\ub098\uba74 \ud654\uba74\uc5d0\uc11c \uc6f9 \ud398\uc774\uc9c0\ub97c \ubcfc \uc218 \uc788\ub2e4.")),Object(b.b)("p",null,"\uc704 \uacfc\uc815\uc774 \uc810\uc9c4\uc801\uc73c\ub85c \uc9c4\ud589\ub41c\ub2e4. \uc989, \ub80c\ub354\ub9c1 \uc5d4\uc9c4\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc704\ud574 "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 HTML \ud30c\uc2f1\uc744 \uae30\ub2e4\ub9ac\uc9c0 \uc54a\uace0 reflow / repaint \ub97c \uc2dc\uc791\ud55c\ub2e4."),Object(b.b)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c\ub85c\ubd80\ud130 \ub098\uba38\uc9c0 \ub0b4\uc6a9\uc774 \uc804\uc1a1\ub418\uae30\ub97c \uae30\ub2e4\ub9ac\ub294 \ub3d9\uc2dc\uc5d0 \ubc1b\uc740 \ub0b4\uc6a9\uc758 \uc77c\ubd80\ub97c \ud654\uba74\uc5d0 \ud45c\uc2dc\ud55c\ub2e4.")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\uc6f9\ud0b7"),Object(b.b)("th",{parentName:"tr",align:null},"\uac8c\ucf54"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\ub80c\ub354\ud2b8\ub9ac"),Object(b.b)("td",{parentName:"tr",align:null},"\ud615\uc0c1\ud2b8\ub9ac(frame tree)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\ubc30\uce58(layout)"),Object(b.b)("td",{parentName:"tr",align:null},"reflow")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"attachment"),Object(b.b)("td",{parentName:"tr",align:null})))),Object(b.b)("h4",{id:"\ub80c\ub354\ub9c1"},"\ub80c\ub354\ub9c1"),Object(b.b)("p",null,"\ube0c\ub77c\uc6b0\uc800 \ub85c\ub529 \uacfc\uc815 \uc911 \uc2a4\ud0c0\uc77c \uc774\ud6c4\uc758 \uacfc\uc815"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc2a4\ud0c0\uc77c \u2192 \ub808\uc774\uc544\uc6c3 \u2192 \ud398\uc778\ud2b8 \u2192 \ud569\uc131")),Object(b.b)("h3",{id:"4-\ud1b5\uc2e0"},"4. \ud1b5\uc2e0"),Object(b.b)("p",null,"HTTP \uc694\uccad\uacfc \uac19\uc740 \ub124\ud2b8\uc6cc\ud06c \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ub428. "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud50c\ub7ab\ud3fc \ub3c5\ub9bd\uc801\uc778 \uc778\ud130\ud398\uc774\uc2a4"),Object(b.b)("li",{parentName:"ul"},"\uac01 \ud50c\ub7ab\ud3fc \ud558\ubd80\uc5d0\uc11c \uc2e4\ud589\ub428.")),Object(b.b)("h3",{id:"5-ui-\ubc31\uc5d4\ub4dc"},"5. UI \ubc31\uc5d4\ub4dc"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\ucc98 \ucc3d\uc758 \ud615\ud0dc\ub098 \uc140\ub809\ud2b8\ubc84\ud2bc, \uccb4\ud06c\ubc15\uc2a4 \ub4f1\uc744 \ud45c\ud604\ud568. "),Object(b.b)("li",{parentName:"ul"},"OS\uc758 UI \uba54\uc18c\ub4dc\uc5d0 \uc758\uc874\ud568. ",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"OS \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \uccb4\uacc4"),"\ub97c \uc0ac\uc6a9."),Object(b.b)("li",{parentName:"ul"},"XP \uc5d0\uc11c\uc758 \uc140\ub809\ud2b8\ubc15\uc2a4\uc640 \uc708\ub3c4\uc6b07\uc5d0\uc11c\uc758 \uc140\ub809\ud2b8\ubc15\uc2a4\uac00 \ub2e4\ub984")))),Object(b.b)("h3",{id:"6-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\ud574\uc11d\uae30"},"6. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud574\uc11d\uae30"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc758 \ud30c\uc2f1\uacfc \uc2e4\ud589\uc5d0 \uc0ac\uc6a9 "),Object(b.b)("li",{parentName:"ul"},"Chrome \uc758 V8 \uc5d4\uc9c4")),Object(b.b)("h3",{id:"7-\uc790\ub8cc-\uc800\uc7a5\uc18c"},"7. \uc790\ub8cc \uc800\uc7a5\uc18c"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc790\ub8cc\ub97c \uc800\uc7a5\ud558\ub294 \uacc4\uce35"),Object(b.b)("li",{parentName:"ul"},"HTML5 \uba85\uc138, \uc6f9DB"),Object(b.b)("li",{parentName:"ul"},"\uc9c0\uc18d\uc801\uc778 \uacc4\uce35(\ucfe0\ud0a4 \ub4f1\uc744 \uc704\ud55c \uc800\uc7a5\uacf5\uac04)")),Object(b.b)("h2",{id:"dom-document-object-model"},"DOM (Document Object Model)"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"HTML / XML \ubb38\uc11c\uc758 \ud504\ub85c\uadf8\ub798\ubc0d interface")),Object(b.b)("p",null,"\ubb38\uc11c\uc758 \uad6c\uc870\ud654 \ub41c \ud45c\ud604(structured representation) \uc744 \uc81c\uacf5"),Object(b.b)("p",null,"\u2192 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uac00 DOM \uad6c\uc870\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud568."),Object(b.b)("p",null,"\u2192 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub294 \ubb38\uc11c \uad6c\uc870, \uc2a4\ud0c0\uc77c, \ub0b4\uc6a9 \ub4e4\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."),Object(b.b)("p",null,"\uc6f9 \ud398\uc774\uc9c0 \ub0b4\uc758 \ubaa8\ub4e0 \ucf58\ud150\uce20 -> \uac1d\uccb4"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"document")," \uac1d\uccb4 "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\uc758 \uae30\ubcf8 \uc9c4\uc785\uc810"),Object(b.b)("li",{parentName:"ul"},"\ud398\uc774\uc9c0 \ub0b4 \ubb34\uc5c7\uc774\ub4e0 \ubcc0\uacbd/\ucd94\uac00 \uac00\ub2a5"),Object(b.b)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc81c\uc5b4 \uac00\ub2a5")),Object(b.b)("h2",{id:"bom-browser-object-model"},"BOM Browser Object Model"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\ube0c\ub77c\uc6b0\uc800(\ud638\uc2a4\ud2b8 \ud658\uacbd)\uac00 \uc81c\uacf5\ud558\ub294 \ucd94\uac00 \uac1d\uccb4")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\ubb38\uc11c \uc774\uc678\uc758 \ubaa8\ub4e0 \uac83\uc744 \uc81c\uc5b4")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0\uac8c 'talk' \ud560 \uc218 \uc788\uac8c \ud574\uc90c.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"navigator")," \uac1d\uccb4"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"navigator.userAgent")," \ube0c\ub77c\uc6b0\uc800 \uc815\ubcf4"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"navigator.platform")," \uc6b4\uc601\uccb4\uc81c\uc5d0 \ub300\ud55c \uc815\ubcf4"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"location")," \uac1d\uccb4"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\ud604\uc7ac URL"),Object(b.b)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 URL \ub85c redirect \uac00\ub2a5 \ud55c \ub3d9\uc791",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'  alert(location.href); // \ud604\uc7ac URL\uc744 \ubcf4\uc5ec\uc90c\n  if (confirm("\uc704\ud0a4\ud53c\ub514\uc544 \ud398\uc774\uc9c0\ub85c \uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")) {\n    location.href = "https://wikipedia.org"; // \uc0c8\ub85c\uc6b4 \ud398\uc774\uc9c0\ub85c \ub118\uc5b4\uac10\n  }\n')))),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",{parentName:"pre"},""))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\uc0ac\uc6a9\uc790\uc640 \ube0c\ub77c\uc6b0\uc800 \uc0ac\uc774\uc758 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc744 \ub3c4\uc640\uc8fc\ub294 \uba54\uc11c\ub4dc"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"alert/confirm/prompt")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"BOM \ub294 HTML \uba85\uc138\uc11c\uc758 \uc77c\ubd80\uc774\ubbc0\ub85c \uad00\ub828 \uba85\uc138\uac00 \ub530\ub85c \uc788\uc9c0\ub294 \uc54a\uc74c."))),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://gitlab.com/siots-study/topics/-/wikis/JavascriptEngine"},"https://gitlab.com/siots-study/topics/-/wikis/JavascriptEngine")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://d2.naver.com/helloworld/59361"},"https://d2.naver.com/helloworld/59361")," (2012.05.18)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C"},"MDN web docs DOM \uc18c\uac1c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://lists.w3.org/Archives/Public/public-html-ig-ko/2011Sep/att-0031/Reflow_____________________________Tip.pdf"},"https://lists.w3.org/Archives/Public/public-html-ig-ko/2011Sep/att-0031/Reflow_____________________________Tip.pdf"))))}p.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var r=n(0),b=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var p=b.a.createContext({}),u=function(e){var t=b.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=u(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(n),m=r,j=o["".concat(l,".").concat(m)]||o[m]||O[m]||a;return n?b.a.createElement(j,c(c({ref:t},p),{},{components:n})):b.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);