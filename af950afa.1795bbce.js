(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{347:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return r}));var n=a(3),i=(a(0),a(460)),c=a(471);const l={title:"4 Position Model And Offset"},b={unversionedId:"css/css-rendering/position_model_offset",id:"css/css-rendering/position_model_offset",isDocsHomePage:!1,title:"4 Position Model And Offset",description:"position model",source:"@site/docs/css/css-rendering/position_model_offset.mdx",slug:"/css/css-rendering/position_model_offset",permalink:"/docs/css/css-rendering/position_model_offset",version:"current",sidebar:"css",previous:{title:"3-4 outline",permalink:"/docs/css/css-rendering/outline"},next:{title:"5-1 CSSOM & Rules",permalink:"/docs/css/css-rendering/cssom_rules"}},o=[{value:"position model",id:"position-model",children:[]},{value:"caret position &amp; offset",id:"caret-position--offset",children:[]},{value:"offset parent",id:"offset-parent",children:[{value:"offset parent \uc758 \uacc4\uc0b0",id:"offset-parent-\uc758-\uacc4\uc0b0",children:[]}]},{value:"offset value",id:"offset-value",children:[]},{value:"absolute",id:"absolute",children:[]},{value:"float / position \uc911 \uc5b4\ub5a4 \uac83\uc774 \uba3c\uc800 \uc801\uc6a9\ub420\uae4c?",id:"float--position-\uc911-\uc5b4\ub5a4-\uac83\uc774-\uba3c\uc800-\uc801\uc6a9\ub420\uae4c",children:[]},{value:"relative bridge",id:"relative-bridge",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:o};function r({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"position-model"},"position model"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"position model")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"static | relative | absolute | fixed"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://drafts.csswg.org/cssom-view/#extensions-to-the-htmlelement-interface"},"https://drafts.csswg.org/cssom-view/#extensions-to-the-htmlelement-interface"))))),Object(i.b)("h2",{id:"caret-position--offset"},"caret position & offset"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"offset")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"CSS \uc758 \ucd94\uc0c1\uc801\uc778 \uc9c0\uc2dc\uc5b4\uc758 Geometry \ub97c \uacc4\uc0b0\ud558\uace0 Fixed Number \ub85c \uc804\ud658\ub41c \uc22b\uc790"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\ubcc0\uacbd\uc774 \ubd88\uac00\ub2a5\ud55c \uc77d\uae30 \uc804\uc6a9")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\uc5ec\uae30\uc11c offset \uc740 ",Object(i.b)("em",{parentName:"p"},"\uace0\uc720\uba85\uc0ac")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc6d0\ub798 CS \uc5d0\uc11c offset \uc740 \ubb34\uc5c7\uc5d0\uc11c\ubd80\ud130 \uc5bc\ub9c8\ud07c \ub5a8\uc5b4\uc9c4 \uc774\ub77c\ub294 \ub73b\uc774\ub2e4."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\ucd94\uc0c1\uc801\uc778 \uba85\ub839(\uc6b0\ub9ac\uc758 \ud76c\ub9dd\uc0ac\ud56d)\uc758 \uc218\uc6a9 \u2192 \ube0c\ub77c\uc6b0\uc800 Case"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \uad6c\ud615 ie6 float \u2192 padding: 3 \uc774 \uc0dd\uae30\ub294 \uacc4\uc0b0 \uc874\uc7ac"),Object(i.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uc2dc\uc2a4\ud15c\uc5d0 \ub530\ub77c \ub2e4\ub974\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\uc2e4\uc81c \uacc4\uc0b0\ub41c \uc218\uce58 \u2192 offset \ub97c \uc870\uc0ac\ud574\uc57c \ud55c\ub2e4.")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\ube0c\ub77c\uc6b0\uc800\uc758 \ud6a8\uc728\uc801\uc778 offset \uacc4\uc0b0")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("h3",{parentName:"div",id:"frame"},"Frame"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"geometry \uacc4\uc0b0\uc744 \ud55c\ubc88\uc5d0 \ubab0\uc544\uc11c \ud558\ub824\uace0 \ud55c\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\ud55c\ubc88\uc5d0 \ubb36\uc5b4\uc11c \uacc4\uc0b0\ud558\ub294 \ub2e8\uc704 \ud639\uc740 \ud0c0\uc774\ubc0d\uc744 ",Object(i.b)("strong",{parentName:"li"},"\ud504\ub808\uc784"),"\uc774\ub77c\uace0 \ud55c\ub2e4.")),Object(i.b)("h4",{parentName:"div",id:"flush"},"Flush"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\uc313\uc544\uc788\ub358 \ud050\ub97c \uc18c\uc9c4\ud558\ub294 \uac83")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\uc5b4\ub5a4 element \uc758 offset \ub97c \uc870\uc0ac\ud560 \ub54c \uc77c\uc5b4\ub098\ub294 \uc77c"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ud050\ub97c \ubc14\ub85c \uc9c0\uc6b0\uace0 \ubb34\uc870\uac74 \uc7ac\uacc4\uc0b0\uc744 \ud574\uc57c \ud55c\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\ud55c \ud504\ub808\uc784\uc774 \uc544\ub2cc\ub370\ub3c4 offset \uc744 \uc694\uccad\ud558\uba74 \uc7ac\uacc4\uc0b0\uc744 \ub9c8\uad6c\ub9c8\uad6c \ub54c\ub9b0\ub2e4"),Object(i.b)("li",{parentName:"ul"},"layout \uc758 offset \ub97c \uae30\uc900\uc73c\ub85c \ub2e4\uc2dc layout \uc744 \uadf8\ub9b4\ub824\uace0 \ud558\uba74\n\ud55c \ud504\ub808\uc784\uc5d0 \uc7ac\uacc4\uc0b0\uc744 \uc5ec\ub7ec\ubc88 \ud558\uac8c \ub41c\ub2e4."),Object(i.b)("li",{parentName:"ul"},"offset \uc744 \uc694\uccad\ud558\uba74 \ucd5c\uc801\ud654 \ub85c\uc9c1\uc774 \uae68\uc838\ubc84\ub9ac\ub9ac\uae30 \ub54c\ubb38\uc5d0 \uc548\uc4f0\ub294 \uac83\uc774 \uc88b\ub2e4."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"offset \uc744 \uc870\uc0ac\ud574\ub3c4 \ub418\ub294 \uacbd\uc6b0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"geometry \uacc4\uc0b0\uc774 \ub2e4 \ub05d\ub0ac\uc744 \uc2dc\uc810"),Object(i.b)("li",{parentName:"ul"},"layout \uacc4\uc0b0\uc774 \uc5c6\uc744 \ub54c")))),Object(i.b)("h2",{id:"offset-parent"},"offset parent"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"offset parent")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\uc2e4\uc81c ",Object(i.b)("strong",{parentName:"p"},"\ud53d\uc140\uac12 \uacc4\uc0b0")," \u2192 offset \uacc4\uc0b0"),Object(i.b)("p",{parentName:"div"},"\ucef4\ud4e8\ud130\uc758 \ud53d\uc140\uac12 \uacc4\uc0b0"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\uc0c1\ub300\uc801\uc778 \uc704\uce58"),"\ub85c \ubaa8\ub4e0 \uc218\uce58\uac00 \uae30\uc220\ub428")),Object(i.b)("p",{parentName:"div"},"offset \ub97c \uacc4\uc0b0\ud558\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \ub85c\uc9c1\uc740"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\uae30\uc900\uc810"),"\uc744 \ucc3e\ub294 \uac83\uc774 \uac00\uc7a5 \uc6b0\uc120\ub41c\ub2e4.")),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"\uae30\uc900\uc810 \u2192 offset parent")))),Object(i.b)("p",null,"left: 100, top:50 ~ \uc740 \uae30\uc900\uc810\uc73c\ub85c \ubd80\ud130\ub77c\ub294 \uc758\ubbf8"),Object(i.b)("p",null,"offset parent \ub294 dom parent \uac00 \uc544\ub2c8\ub2e4."),Object(i.b)("p",null,"offset parent \ub294 \uc5b4\ub5bb\uac8c \uad6c\ud558\ub294 \uac83\uc77c\uae4c?"),Object(i.b)("h3",{id:"offset-parent-\uc758-\uacc4\uc0b0"},"offset parent \uc758 \uacc4\uc0b0"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"1. null \uc778 \uacbd\uc6b0")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"root, html, body"),Object(i.b)("li",{parentName:"ul"},"position: fixed (\ube0c\ub77c\uc6b0\uc800\uc758 bound box \ub97c \uae30\uc900\uc73c\ub85c \uadf8\ub9b0\ub2e4)"),Object(i.b)("li",{parentName:"ul"},"out of dom tree",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"remove child element"),Object(i.b)("li",{parentName:"ul"},"create element \ub294 offset parent \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc9c0\ub9cc"),Object(i.b)("li",{parentName:"ul"},"append \ud6c4\uc5d0\ub294 \uc0dd\uaca8\ub09c\ub2e4.")))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://www.zerocho.com/category/CSS/post/5864f3b59f1dc000182d3ea1"},"relative absolute")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"relative \uac00 static \uc778 \uc0c1\ud0dc\ub97c \uae30\uc900\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \ud53d\uc140\ub9cc\ud07c \uc6c0\uc9c1\uc600\ub2e4\uba74,"),Object(i.b)("li",{parentName:"ul"},"absolute \ub294 position: static \uc18d\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc740 \ubd80\ubaa8\ub97c \uae30\uc900\uc73c\ub85c \uc6c0\uc9c1\uc785\ub2c8\ub2e4. \ub9cc\uc57d \ubd80\ubaa8 \uc911\uc5d0 \ud3ec\uc9c0\uc158\uc774 relative, absolute, fixed\uc778 \ud0dc\uadf8\uac00 \uc5c6\ub2e4\uba74 \uac00\uc7a5 \uc704\uc758 \ud0dc\uadf8(body)\uac00 \uae30\uc900\uc774 \ub429\ub2c8\ub2e4."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"2. recursive search")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\uc5b4\ub5a4 element \ub97c \uc7ac\uadc0\uc801\uc73c\ub85c \ucc3e\uc544 \ub4e4\uc5b4\uac04\ub2e4."),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"parent.position: fixed = null",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"element \uc758 \ubd80\ubaa8\uc758 position \uc774 fixed \uc77c \ub54c null \uc774\ub2e4"))),Object(i.b)("li",{parentName:"ul"},"parent.position:!static = ok",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"static \uc774 \uc544\ub2cc \ubd80\ubaa8\ub97c \ucc3e\uc744 \ub54c \uae4c\uc9c0 \uc704\ub85c \uc62c\ub77c\uac04\ub2e4."),Object(i.b)("li",{parentName:"ul"},"absolute | relative \uc774\uba74 \uc911\ub2e8\ud558\uace0,"),Object(i.b)("li",{parentName:"ul"},"absolute \uc758 offset parent \uac00 \ub420 \uc218 \uc788\ub294 \ub300\uc0c1\uc740 absolute \uc774\uac70\ub098 relative \uc774\ub2e4"),Object(i.b)("li",{parentName:"ul"},"absolute \ub294 \ub0b4\uac00 \uc704\uce58\ub97c \uc9c1\uc811 \ub2e4 \uc9c0\uc815\ud574\uc57c \ud55c\ub2e4.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uacf5\uac04(\ucee8\ud14c\uc774\ub108)\uc744 \uae30\uc900\uc73c\ub85c position \uc744 \ub9cc\ub4e4\uace0 \uc2f6\uc73c\uba74"),Object(i.b)("li",{parentName:"ul"},"\uae30\uc900\uc744 relative \uc73c\ub85c \ud558\uace0,"),Object(i.b)("li",{parentName:"ul"},"\uc790\uc2dd \uc694\uc18c\uc5d0 absolute \uc744 \ud574\uc8fc\uba74 \ub41c\ub2e4."),Object(i.b)("li",{parentName:"ul"},"relative \uc758 \uc5ed\ud560\uc774 static \uc758 \uc704\uce58\ub97c \uc870\uc815\ud558\ub294\ub370 \uc4f4\ub2e4\uae30 \ubcf4\ub2e4\ub294\n\uc77c\ubc18\uc801\uc73c\ub85c static \uc548 \uc5d0 abolute \ub97c \ub123\uae30 \uc704\ud55c \ucee8\ud14c\uc774\ub108\ub85c \uc0ac\uc6a9\ud55c\ub2e4."))),Object(i.b)("li",{parentName:"ul"},"relative \uc758 \uacbd\uc6b0\ub294, static \uc758 \uc704\uce58\ub85c \uc815\ud574\uc9c4\ub2e4.")))),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"body = ok"),Object(i.b)("li",{parentName:"ul"},"td, ht, table = ok",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc2a4\ud399\uacfc \ub2e4\ub974\uac8c \ub9ce\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud14c\uc774\ube14\uc758 \ud0dc\uadf8\ub4e4\uc774 offset parent \ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\uc548\uc5d0 div \uc758 position: relative \uc18d\uc131\uc744 \ub123\uc5b4\uc918\uc57c \ud55c\ub2e4."))),Object(i.b)("li",{parentName:"ul"},"parent.parent continue...")))),Object(i.b)("h2",{id:"offset-value"},"offset value"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"offset parent \ub97c \uc54c\uc558\uc73c\uba74\n\ube0c\ub77c\uc6b0\uc800\uac00 \uc2e4\uc81c\ub85c \uacc4\uc0b0\ud558\ub294 offset \uac12\uc744 \uc77d\uae30\uc804\uc6a9\uc73c\ub85c \ucc38\uc870\ud560 \uc218 \uc788\ub2e4.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/120061865-21d47380-c09a-11eb-8200-41c38f94286a.png",alt:"image"})),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\ubcf4\uc774\ub294 \uacf3\uc758 \uc601\uc5ed")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"offsetLeft / offsetTop",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"offset parent \uc758 \uc67c\ucabd(\uc0c1\ub2e8)\uc73c\ub85c \ubd80\ud130 \uc5bc\ub9c8\ub098 \ub5a8\uc5b4\uc838 \uc788\ub290\ub0d0"))),Object(i.b)("li",{parentName:"ul"},"offsetWidth / offsetHeight",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc2e4\uc81c\ub85c \ud655\ubcf4\ub41c geometry \ud06c\uae30")))))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\uc9c4\uc9dc contents \uc758 \uc601\uc5ed")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"offsetScrollTop / offsetScrollLeft",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub864 \uc601\uc5ed\uc774 \uc0dd\uacbc\uc744 \ub54c, \uc2a4\ud06c\ub864\uc758 \uc704\uce58"))),Object(i.b)("li",{parentName:"ul"},"offsetScrollWidth / offsetScrollHeight",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub864 \uc601\uc5ed\uc774 \uc0dd\uacbc\uc744 \ub54c, \uc2a4\ud06c\ub864\uc758 \uc804\uccb4\ud06c\uae30")))))),Object(i.b)("h2",{id:"absolute"},"absolute"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html",metastring:"{7}","{7}":!0},'<div style="width:200px; height: 200px; background: yellow; margin: 100px">\n    <div style="width: 100px; height: 100px;\n                position: absolute; background: red">\n    </div>\n    <div style="width: 100px; height: 100px;\n                position: absolute; background: blue;\n                left: 0">\n    </div>\n</div>\n')),Object(i.b)(c.a,{content:'<div style="width:200px; height: 200px; background: yellow; margin: 100px"> <div style="width: 100px; height: 100px; position: absolute; background: red"> </div> <div style="width: 100px; height: 100px; position: absolute; background: blue; left: 0"> </div>\n</div>',mdxType:"HtmlParser"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"blue box",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"position: absolute")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"offset parent")," is ",Object(i.b)("inlineCode",{parentName:"li"},"<body>"))))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),Object(i.b)("em",{parentName:"h5"},"position: absolute")," \uc758 left, top  \uc5c6\uc744 \ub54c\uc758 offset")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"offset parent \uc758 (0, 0) \uc774 \uc544\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\ubd80\ubaa8 element \uac00 static \uc774\ub77c\uace0 \ud560\uc9c0\ub77c\ub3c4 DOM \uc0c1\uc5d0 \uc788\ub294 \ubd80\ubaa8\uc758 \uac12\uc744 \uac16\uac8c \ub41c\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\uc989, ",Object(i.b)("em",{parentName:"li"},"position: absolute")," \uc758 \uae30\ubcf8\uac12\uc740 static \uacfc \ub611\uac19\uc740 \uc704\uce58\uc5d0 \uadf8\ub824\uc9c0\uac8c \ub41c\ub2e4.")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"red box \ub294 static \uc744 \uc900 \uac83 \ucc98\ub7fc \uadf8\ub824\uc9c0\uac8c \ub41c\ub2e4.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"static \uc77c \ub54c left, top")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"static \uc740 normal flow \ub85c \uadf8\ub9b0\ub2e4."),Object(i.b)("li",{parentName:"ul"},"left, top \uc744 \ubb34\uc2dc\ud55c\ub2e4.")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"relative \uc77c \ub54c left, top")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"normal flow \ub85c \uadf8\ub824\uc84c\uc744 \ub54c\uc758 \ucc28\uc774 \uac12")))),Object(i.b)("h2",{id:"float--position-\uc911-\uc5b4\ub5a4-\uac83\uc774-\uba3c\uc800-\uc801\uc6a9\ub420\uae4c"},"float / position \uc911 \uc5b4\ub5a4 \uac83\uc774 \uba3c\uc800 \uc801\uc6a9\ub420\uae4c?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"float \ub294 \uc0c8\ub85c\uc6b4 bfc \uc601\uc5ed\uc744 \ub9cc\ub4e4\uc5b4 \ub0b4\ub294 normal flow \uc5d0\uc11c\ub9cc \uc791\ub3d9\ud55c\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\ub530\ub77c\uc11c position: absolute \ub97c \uc8fc\ub294 \uc21c\uac04 float \ub294 \ubb34\uc758\ubbf8 \ud574\uc9c4\ub2e4.")),Object(i.b)("h2",{id:"relative-bridge"},"relative bridge"),Object(i.b)(c.a,{content:'<div class="relative_bridge"> <div class="in"></div> <div class="in"></div> <div class="in"></div> <div class="in" style="position: relative"> <div class="abs"></div> </div> <div class="in"></div> <div class="in"></div> <div class="in"></div> <div class="in"></div> <div class="in" style="position: relative"> <div class="abs"></div> </div> <div class="in"></div> <style> .in { display: inline-block; width: 100px; height: 100px; border: 1px solid #000 } .abs { width: 50px; height: 50px; position: absolute; left: 10px; top: 10px; background: #00f; } </style>\n</div>\n',mdxType:"HtmlParser"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<style>\n.in {\n    display: inline-block;\n    width: 100px; height: 100px;\n    border: 1px solid #000\n}\n.abs {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    background: #00f;\n}\n</style>\n\n<html>\n<body>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in" style="position: relative">\n      <div class="abs"></div>\n    </div>\n\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in" style="position: relative">\n      <div class="abs"></div>\n    </div>\n    <div class="in"></div>\n</body>\n</html>\n')),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ktpark1651.tistory.com/204"},"https://ktpark1651.tistory.com/204"))))}r.isMDXComponent=!0},471:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(480);t.a=({content:e})=>i.a.createElement("div",null,Object(c.a)(e))}}]);