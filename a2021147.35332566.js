(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),l=(n(0),n(447)),c={},i={unversionedId:"javascript/browser_events/Browser_event_custom_dispatch",id:"javascript/browser_events/Browser_event_custom_dispatch",isDocsHomePage:!1,title:"Browser_event_custom_dispatch",description:"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8(synthetic events) \ub514\uc2a4\ud328\uce58",source:"@site/docs/javascript/browser_events/Browser_event_custom_dispatch.md",slug:"/javascript/browser_events/Browser_event_custom_dispatch",permalink:"/docs/javascript/browser_events/Browser_event_custom_dispatch",version:"current",sidebar:"javascript",previous:{title:"Browser_Default_Action",permalink:"/docs/javascript/browser_events/Browser_Default_Action"},next:{title:"browser_mouse_event",permalink:"/docs/javascript/browser_events/browser_mouse_event"}},b=[{value:"Event \uc758 \uc0dd\uc131\uc790",id:"event-\uc758-\uc0dd\uc131\uc790",children:[]},{value:"elem.dispatchEvent(event)",id:"elemdispatcheventevent",children:[{value:"event.isTrusted",id:"eventistrusted",children:[]}]},{value:"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8 \ubc84\ube14\ub9c1 \uc608\uc2dc",id:"\ucee4\uc2a4\ud140-\uc774\ubca4\ud2b8-\ubc84\ube14\ub9c1-\uc608\uc2dc",children:[]},{value:"MouseEvent, KeyboardEvent \ub4f1\uc758 UI \uc774\ubca4\ud2b8",id:"mouseevent-keyboardevent-\ub4f1\uc758-ui-\uc774\ubca4\ud2b8",children:[]},{value:"CustomEvent",id:"customevent",children:[]},{value:"Event.preventDefault",id:"eventpreventdefault",children:[]},{value:"\uc774\ubca4\ud2b8 \uc548 \uc774\ubca4\ud2b8 : \uc774\ubca4\ud2b8 \uc548\uc5d0 <code>dispatchEvent</code> \uac00 \uc788\ub294 \uacbd\uc6b0",id:"\uc774\ubca4\ud2b8-\uc548-\uc774\ubca4\ud2b8--\uc774\ubca4\ud2b8-\uc548\uc5d0-dispatchevent-\uac00-\uc788\ub294-\uacbd\uc6b0",children:[]},{value:"Reference",id:"reference",children:[]}],p={toc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\ucee4\uc2a4\ud140-\uc774\ubca4\ud2b8synthetic-events-\ub514\uc2a4\ud328\uce58"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8(synthetic events) \ub514\uc2a4\ud328\uce58"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8 \ub514\uc2a4\ud328\uce58\ub294 ",Object(l.b)("strong",{parentName:"p"},"\ud14c\uc2a4\ud2b8")," \uc5d0\uc11c \ub9e4\uc6b0 \uc720\uc6a9\ud560 \uac83 \uac19\ub2e4  ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\uc758 \uc774\ub984\uc740 \ub0b4\uc7a5 \uc774\ubca4\ud2b8\uc640 \uac19\uac8c \uc9c0\uc744 \uc218 \uc788\uc9c0\ub9cc, \ub300\ubd80\ubd84\uc758 \uc124\uacc4\uad00\uc810\uc5d0\uc11c \ub098\uc05c \uc601\ud5a5\uc774 \uc788\ub2e4\uace0 \ud55c\ub2e4.\n\ud558\uc9c0\ub9cc ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\uc11c\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uac8c \ud558\ub824\uba74 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0. \ub124\uc774\ud2f0\ube0c \uc774\ubca4\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uac83 \uc774\uc678\uc5d0\ub294 \uc11c\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc0c1\ud638\uc791\uc6a9\ud560 \uc218 \uc788\ub294 \uc218\ub2e8\uc774 \uc5c6\ub294 \uacbd\uc6b0\uc5d4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ud14c\uc2a4\ud305\uc744 \uc790\ub3d9\ud654 \ud558\ub824\ub294 \uacbd\uc6b0. '\ubc84\ud2bc \ud074\ub9ad\u2019\ub4f1\uc758 \uc774\ubca4\ud2b8\ub97c \uc0ac\uc6a9\uc790 \ub3d9\uc791 \uc5c6\uc774 \ucf54\ub4dc\ub9cc\uc73c\ub85c \uc720\ubc1c\uc2dc\ud0a4\uace0 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\ub294\uc9c0 \uadf8 \uacb0\uacfc\ub97c \ud655\uc778\ud558\uace0\uc790 \ud560 \ub54c\ub294 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ub124\uc774\ud2f0\ube0c \uc774\ubca4\ud2b8 \uc774\ub984\uacfc \uacb9\uce58\uc9c0 \uc54a\uac8c \ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uac83\uc740 \uc124\uacc4 \uce21\uba74\uc5d0\uc11c \uc790\uc8fc \uc4f0\uc774\ub294 \uc804\ub7b5\uc785\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\ub97c \uc751\uc6a9\ud558\uba74 \uba54\ub274\ub098 \uc0ac\uc774\ub4dc\ubc14, \uce90\ub7ec\uc140 \ub4f1\uc758 \uc548\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc77c\uc744 \uc54c\ub824\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event"},"\ub0b4\uc7a5 \uc774\ubca4\ud2b8")))),Object(l.b)("h2",{id:"event-\uc758-\uc0dd\uc131\uc790"},"Event \uc758 \uc0dd\uc131\uc790"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ub0b4\uc7a5 \uc774\ubca4\ud2b8 \ud074\ub798\uc2a4\ub294 DOM \uc694\uc18c \ud074\ub798\uc2a4 \uac19\uc774 \uacc4\uce35 \uad6c\uc870\uc784"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Event \ud074\ub798\uc2a4")," \ub0b4\uc7a5 \uc774\ubca4\ud2b8\ub4e4\uc758 \ucd5c\uc0c1\uc704 \ud074\ub798\uc2a4")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"let event = new Event(type[, options]);\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"type")," "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ud0c0\uc785\uc744 \ub098\ud0c0\ub0b4\ub294 \ubb38\uc790\uc5f4 "),Object(l.b)("li",{parentName:"ul"},"\ub0b4\uc7a5 \uc774\ubca4\ud2b8 \uc608\uc2dc ",Object(l.b)("inlineCode",{parentName:"li"},"click")),Object(l.b)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8 \uc608\uc2dc ",Object(l.b)("inlineCode",{parentName:"li"},"my-event"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"options")," \ub450 \uac1c\uc758 \uc120\ud0dd \ud504\ub85c\ud37c\ud2f0 \uac1d\uccb4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"bubbles: true/false")," true \uc778 \uacbd\uc6b0 \uc774\ubca4\ud2b8 \ubc84\ube14\ub9c1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cancelable: true/false")," true \uc778 \uacbd\uc6b0 \ube0c\ub77c\uc6b0\uc800 \uae30\ubcf8 \ub3d9\uc791\uc774 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc74c."),Object(l.b)("li",{parentName:"ul"},"options \uac00 \uc5c6\uc744 \uacbd\uc6b0 ",Object(l.b)("inlineCode",{parentName:"li"},"{ bubbles: false, cancelable: false }"))),Object(l.b)("h2",{id:"elemdispatcheventevent"},"elem.dispatchEvent(event)"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dispatch")," \uc77c\uc744 \ucc98\ub9ac\ud558\ub2e4 \ub77c\ub294 \ub73b\uc744 \uac00\uc9c4 \uc601\uc5b4 \ub2e8\uc5b4"),Object(l.b)("p",null,"\uc694\uc18c\uc758 \uc774\ubca4\ud2b8\ub97c js \ub85c \uc2e4\ud589 \uc2dc\ud0ac \uc218 \uc788\ub2e4.\n",Object(l.b)("a",{parentName:"p",href:"https://ko.javascript.info/dispatch-events#ref-258"},"\uc2e4\ud589 \uc608\uc81c")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<button id="elem" onclick="alert(\'\ud074\ub9ad!\');">\uc790\ub3d9\uc73c\ub85c \ud074\ub9ad \ub418\ub294 \ubc84\ud2bc</button>\n\n<script>\n  let event = new Event("click");\n  elem.dispatchEvent(event);\n<\/script>\n')),Object(l.b)("p",null,"\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc9c0 \uc54a\uc558\uc9c0\ub9cc \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \ub3d9\uc791\ud55c\ub2e4."),Object(l.b)("h3",{id:"eventistrusted"},"event.isTrusted"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"true")," \uc0ac\uc6a9\uc790 \uc561\uc158\uc744 \ud1b5\ud574 \ub9cc\ub4e0 \uc774\ubca4\ud2b8"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"false")," \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud1b5\ud574 \uc0dd\uc131\ub41c \uc774\ubca4\ud2b8"),Object(l.b)("h2",{id:"\ucee4\uc2a4\ud140-\uc774\ubca4\ud2b8-\ubc84\ube14\ub9c1-\uc608\uc2dc"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8 \ubc84\ube14\ub9c1 \uc608\uc2dc"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://ko.javascript.info/dispatch-events#ref-259"},"\uc2e4\ud589 \uc608\uc81c")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<h1 id="elem">Hello from the script!</h1>\n<script>\n  // \ubc84\ube14\ub9c1\uc774 \uc77c\uc5b4\ub098\uba74\uc11c document\uc5d0\uc11c \uc774\ubca4\ud2b8\uac00 \ucc98\ub9ac\ub428\n  document.addEventListener("hello", function(event) { // (1)\n    alert("Hello from " + event.target.tagName); // Hello from H1\n  });\n\n  // \uc774\ubca4\ud2b8(hello)\ub97c \ub9cc\ub4e4\uace0 elem\uc5d0\uc11c \uc774\ubca4\ud2b8 \ub514\uc2a4\ud328\uce58\n  let event = new Event("hello", { bubbles: true }); // (2)\n  elem.dispatchEvent(event);\n\n  // document \uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec\uac00 \ub3d9\uc791\ud558\uace0 \uba54\uc2dc\uc9c0\uac00 \uc5bc\ub7ff\ucc3d\uc5d0 \ucd9c\ub825\ub429\ub2c8\ub2e4.\n<\/script>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\ub294 \ud578\ub4e4\ub7ec\ub294 ",Object(l.b)("inlineCode",{parentName:"li"},"addEventListener")," \ub85c \ub9cc \ub4f1\ub85d\ud560 \uc218 \uc788\ub2e4.")),Object(l.b)("h2",{id:"mouseevent-keyboardevent-\ub4f1\uc758-ui-\uc774\ubca4\ud2b8"},"MouseEvent, KeyboardEvent \ub4f1\uc758 UI \uc774\ubca4\ud2b8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"UIEvent, FocusEvent, MouseEvent, WheelEvent, KeyboardEvent ..."),Object(l.b)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \uc804\uc6a9 \ud504\ub85c\ud37c\ud2f0\uc758 \uba85\uc2dc",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"new Event"),"  X "),Object(l.b)("li",{parentName:"ul"},"\uad00\ub828 \ub0b4\uc7a5 \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'let event = new MouseEvent("click", {\n  bubbles: true,\n  cancelable: true,\n  clientX: 100,\n  clientY: 100\n});\n\nalert(event.clientX); // 100\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'let event = new Event("click", {\n  bubbles: true, // Event \uc0dd\uc131\uc790\uc5d0\uc120\n  cancelable: true, // bubbles\uc640 cancelable \ud504\ub85c\ud37c\ud2f0\ub9cc \ub3d9\uc791\ud569\ub2c8\ub2e4.\n  clientX: 100,\n  clientY: 100\n});\n\nalert(event.clientX); // undefined, \uc54c \uc218 \uc5c6\ub294 \ud504\ub85c\ud37c\ud2f0\uc774\uae30 \ub54c\ubb38\uc5d0 \ubb34\uc2dc\ub429\ub2c8\ub2e4.\n')),Object(l.b)("h2",{id:"customevent"},"CustomEvent"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<h1 id="elem">\uc774\ubcf4\ub77c\ub2d8, \ud658\uc601\ud569\ub2c8\ub2e4!</h1>\n\n<script>\n  // \ucd94\uac00 \uc815\ubcf4\ub294 \uc774\ubca4\ud2b8\uc640 \ud568\uaed8 \ud578\ub4e4\ub7ec\uc5d0 \uc804\ub2ec\ub429\ub2c8\ub2e4.\n  elem.addEventListener("hello", function(event) {\n    alert(event.detail.name);\n  });\n\n  elem.dispatchEvent(new CustomEvent("hello", {\n    detail: { name: "\ubcf4\ub77c" }\n  }));\n<\/script>\n')),Object(l.b)("p",null,"Event \uc640 \ucc28\uc774\uc810"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ub450\ubc88\uc9f8 \uc778\uc218\uc758 \uac1d\uccb4\uc5d0 ",Object(l.b)("inlineCode",{parentName:"li"},"detail")," \ud504\ub85c\ud37c\ud2f0\ub97c \ucd94\uac00\ud574 \ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8 \uad00\ub828 \uc815\ubcf4\ub97c \uba85\uc2dc\ud558\uace0, \uc815\ubcf4\ub97c \uc774\ubca4\ud2b8\uc5d0 \uc804\ub2ec\ud560 \uc218 \uc788\ub2e4."),Object(l.b)("li",{parentName:"ul"},"Event \uac1d\uccb4\uc5d0\ub3c4 \uc774\ubca4\ud2b8 \uad00\ub828 \uc815\ubcf4\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc9c0\ub9cc, ",Object(l.b)("inlineCode",{parentName:"li"},"data-set")," \uc758 \ud2b9\uc131\ucc98\ub7fc\n\ub2e4\ub978 \ud504\ub85c\ud37c\ud2f0\uc640\uc758 \ucda9\ub3cc\uc744 \ud53c\ud560 \uc218 \uc788\ub294 \uc7a5\uc810\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4.")),Object(l.b)("h2",{id:"eventpreventdefault"},"Event.preventDefault"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\uc758 \uae30\ubcf8\ub3d9\uc791\uc774 \ucde8\uc18c\ub418\uba74 ",Object(l.b)("inlineCode",{parentName:"li"},"elem.dispatchEvent(event)")," \uac00 ",Object(l.b)("inlineCode",{parentName:"li"},"false")," \ub97c \ubc18\ud658.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<pre id="rabbit">\n  |\\   /|\n   \\|_|/\n   /. .\\\n  =\\_Y_/=\n   {>o<}\n</pre>\n<button onclick="hide()">hide()\ub97c \ud638\ucd9c\ud574 \ud1a0\ub07c \uc228\uae30\uae30</button>\n\n<script>\n  // hide() will be called automatically in 2 seconds\n  function hide() {\n    let event = new CustomEvent("hide", {\n      cancelable: true // cancelable\ub97c true\ub85c \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 preventDefault\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n    });\n    if (!rabbit.dispatchEvent(event)) {\n      alert(\'\uae30\ubcf8 \ub3d9\uc791\uc774 \ud578\ub4e4\ub7ec\uc5d0 \uc758\ud574 \ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\');\n    } else {\n      rabbit.hidden = true;\n    }\n  }\n\n  rabbit.addEventListener(\'hide\', function(event) {\n    if (confirm("preventDefault\ub97c \ud638\ucd9c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")) {\n      event.preventDefault();\n    }\n  });\n<\/script>\n')),Object(l.b)("h2",{id:"\uc774\ubca4\ud2b8-\uc548-\uc774\ubca4\ud2b8--\uc774\ubca4\ud2b8-\uc548\uc5d0-dispatchevent-\uac00-\uc788\ub294-\uacbd\uc6b0"},"\uc774\ubca4\ud2b8 \uc548 \uc774\ubca4\ud2b8 : \uc774\ubca4\ud2b8 \uc548\uc5d0 ",Object(l.b)("inlineCode",{parentName:"h2"},"dispatchEvent")," \uac00 \uc788\ub294 \uacbd\uc6b0"),Object(l.b)("p",null,"\uc774\ubca4\ud2b8\ub294 \ub300\uac8c \ud050\uc5d0\uc11c \ucc98\ub9ac\ub41c\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\uac00 onclick \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\uace0 \uc788\ub294\ub370, \ub9c8\uc6b0\uc2a4\ub97c \uc6c0\uc9c1\uc5ec\uc11c \uc0c8\ub85c\uc6b4 \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"mousemove \ud578\ub4e4\ub7ec\ub294 onclick \uc774\ubca4\ud2b8 \ucc98\ub9ac\uac00 \ub05d\ub09c \ud6c4 \ud638\ucd9c\ub41c\ub2e4.")),Object(l.b)("p",null,"\uc774\ubca4\ud2b8 \uc548\uc5d0 \uc788\ub294 \uc774\ubca4\ud2b8\ub294 \uc989\uc2dc \ucc98\ub9ac\ub428.\n",Object(l.b)("a",{parentName:"p",href:"https://ko.javascript.info/dispatch-events#ref-263"},"\uc2e4\ud589 \uc608\uc2dc")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},"<button id=\"menu\">\uba54\ub274(\ud074\ub9ad\ud574\uc8fc\uc138\uc694)</button>\n\n<script>\n  menu.onclick = function() {\n    alert(1);\n\n    menu.dispatchEvent(new CustomEvent(\"menu-open\", {\n      bubbles: true\n    }));\n\n    alert(2);\n  };\n\n  // 1\uacfc 2 \uc0ac\uc774\uc5d0 \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4\n  document.addEventListener('menu-open', () => alert('\uc911\ucca9 \uc774\ubca4\ud2b8'));\n<\/script>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alert(1)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alert('\uc911\ucca9 \uc774\ubca4\ud2b8')")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alert(2)"))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\ubc84\ube14\ub9c1\uc73c\ub85c \uc778\ud558\uc5ec document \uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec\uac00 \ucc98\ub9ac\ub41c\ub2e4."),Object(l.b)("li",{parentName:"ol"},"\uc911\ucca9\uc774\ubca4\ud2b8\ub294 \ub3d9\uae30\uc801\uc73c\ub85c \ucc98\ub9ac\ub41c\ub2e4. ")),Object(l.b)("p",null,"\uc911\ucca9\uc774\ubca4\ud2b8\ub97c \ub3d9\uae30\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc744 \ub54c ",Object(l.b)("inlineCode",{parentName:"p"},"setTimeout")," \uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"menu.onclick = function() {\nalert(1);\n\nsetTimeout(() => menu.dispatchEvent(new CustomEvent(\"menu-open\", {\n  bubbles: true\n})));\n\nalert(2);\n};\n\ndocument.addEventListener('menu-open', () => alert('\uc911\ucca9 \uc774\ubca4\ud2b8'));\n")),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://ko.javascript.info/dispatch-events"},"https://ko.javascript.info/dispatch-events")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/Guide/Events/Creating_and_triggering_events#%EC%BB%A4%EC%8A%A4%ED%85%80_%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0"},"https://developer.mozilla.org/ko/docs/Web/Guide/Events/Creating_and_triggering_events#%EC%BB%A4%EC%8A%A4%ED%85%80_%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0"))))}o.isMDXComponent=!0},447:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);