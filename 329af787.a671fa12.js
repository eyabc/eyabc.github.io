(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(462)),i={},b={unversionedId:"javascript/browser_events/Browser_Bubbling_Capturing",id:"javascript/browser_events/Browser_Bubbling_Capturing",isDocsHomePage:!1,title:"Browser_Bubbling_Capturing",description:"\ubc84\ube14\ub9c1\uacfc \ucea1\uccd0\ub9c1",source:"@site/docs/javascript/browser_events/Browser_Bubbling_Capturing.md",slug:"/javascript/browser_events/Browser_Bubbling_Capturing",permalink:"/docs/javascript/browser_events/Browser_Bubbling_Capturing",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Browser_Event",permalink:"/docs/javascript/browser_events/Browser_Event"},next:{title:"Browser_Event_Delegation",permalink:"/docs/javascript/browser_events/Browser_Event_Delegation"}},c=[{value:"\ubc84\ube14\ub9c1 Bubbling",id:"\ubc84\ube14\ub9c1-bubbling",children:[]},{value:"target",id:"target",children:[{value:"event.target",id:"eventtarget",children:[]},{value:"event.currentTarget(this)",id:"eventcurrenttargetthis",children:[]}]},{value:"event.stopPropagation \ubc84\ube14\ub9c1 \uc911\ub2e8\ud558\uae30",id:"eventstoppropagation-\ubc84\ube14\ub9c1-\uc911\ub2e8\ud558\uae30",children:[{value:"event.stopImmediatePropagation()",id:"eventstopimmediatepropagation",children:[]}]},{value:"\uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\ub97c \uc81c\uc678\ud558\uace4 \ubc84\ube14\ub9c1\uc744 \ub9c9\uc9c0 \ub9c8\uc138\uc694!",id:"\uaf2d-\ud544\uc694\ud55c-\uacbd\uc6b0\ub97c-\uc81c\uc678\ud558\uace4-\ubc84\ube14\ub9c1\uc744-\ub9c9\uc9c0-\ub9c8\uc138\uc694",children:[{value:"\ud589\ub3d9 \ud328\ud134 \ubd84\uc11d",id:"\ud589\ub3d9-\ud328\ud134-\ubd84\uc11d",children:[]}]},{value:"\uc774\ubca4\ud2b8\uc758 \ud750\ub984",id:"\uc774\ubca4\ud2b8\uc758-\ud750\ub984",children:[]},{value:"\ucea1\ucc98\ub9c1",id:"\ucea1\ucc98\ub9c1",children:[]},{value:"event.eventPhase",id:"eventeventphase",children:[]},{value:"Reference",id:"reference",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\ubc84\ube14\ub9c1\uacfc-\ucea1\uccd0\ub9c1"},"\ubc84\ube14\ub9c1\uacfc \ucea1\uccd0\ub9c1"),Object(l.b)("h2",{id:"\ubc84\ube14\ub9c1-bubbling"},"\ubc84\ube14\ub9c1 Bubbling"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\ud55c \uc694\uc18c\uc5d0 \uc774\ubca4\ud2b8 \ubc1c\uc0dd \u2192 \uc694\uc18c\uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec \ub3d9\uc791"),Object(l.b)("li",{parentName:"ol"},"\ubd80\ubaa8 \uc694\uc18c\uc758 \ud578\ub4e4\ub7ec \ub3d9\uc791 "),Object(l.b)("li",{parentName:"ol"},"\uac00\uc7a5 \ucd5c\uc0c1\ub2e8\uc758 \uc870\uc0c1\uc694\uc18c\ub97c \ub9cc\ub0a0 \ub54c \uae4c\uc9c0 \ubc18\ubcf5\ub418\uba74\uc11c \uc694\uc18c \uac01\uac01\uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec \ub3d9\uc791.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud0c0\uae43 \uc774\ubca4\ud2b8\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c ",Object(l.b)("inlineCode",{parentName:"li"},"<html>")," \uc694\uc18c\ub97c \uac70\uccd0 ",Object(l.b)("inlineCode",{parentName:"li"},"document")," \uac1d\uccb4\ub97c \ub9cc\ub0a0 \ub54c\uae4c\uc9c0 \uac01 \ub178\ub4dc\uc5d0\uc11c \ubaa8\ub450 \ubc1c\uc0dd\ud568."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"window")," \uac1d\uccb4\uae4c\uc9c0 \uac70\uc2ac\ub7ec \uc62c\ub77c\uac00\ub294 \uc774\ubca4\ud2b8\ub3c4 \uc874\uc7ac\ud568.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},"<style>\n  body * {\n    margin: 10px;\n    border: 1px solid blue;\n  }\n</style>\n\n<form onclick=\"alert('form')\">FORM\n  <div onclick=\"alert('div')\">DIV\n    <p onclick=\"alert('p')\">P</p>\n  </div>\n</form>\n")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\uac00\uc7a5 \uc548\ucabd\uc758 ",Object(l.b)("inlineCode",{parentName:"li"},"<p>"),"\ub97c \ud074\ub9ad"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"<p>")," \uc5d0 \ud560\ub2f9\ub41c ",Object(l.b)("inlineCode",{parentName:"li"},"onclick")," \ud578\ub4e4\ub7ec \ub3d9\uc791"),Object(l.b)("li",{parentName:"ol"},"\ubc14\uae65\uc758 ",Object(l.b)("inlineCode",{parentName:"li"},"<div>"),"\uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec \ub3d9\uc791"),Object(l.b)("li",{parentName:"ol"},"\uadf8 \ubc14\uae65\uc758 ",Object(l.b)("inlineCode",{parentName:"li"},"<form>")," \uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec \ub3d9\uc791"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"document")," \uac1d\uccb4\ub97c \ub9cc\ub0a0 \ub54c\uae4c\uc9c0, \uac01 \uc694\uc18c\uc5d0 \ud560\ub2f9\ub41c ",Object(l.b)("inlineCode",{parentName:"li"},"onclick")," \ud578\ub4e4\ub7ec \ub3d9\uc791")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/100100889-d64fcb80-2ea4-11eb-9bdd-7a69f112fcb3.png",alt:"image"})),Object(l.b)("p",null,"\uac70\uc758 \ubaa8\ub4e0 \uc774\ubca4\ud2b8\ub294 \ubc84\ube14\ub9c1 \ub41c\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"focus")," \uc774\ubca4\ud2b8\ub294 \ubc84\ube14\ub9c1 \ub418\uc9c0 \uc54a\ub294\ub2e4.")),Object(l.b)("h2",{id:"target"},"target"),Object(l.b)("h3",{id:"eventtarget"},"event.target"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc2e4\uc81c \uc774\ubca4\ud2b8\uac00 \uc2dc\uc791\ub41c \u2018\ud0c0\uae43\u2019 \uc694\uc18c"),Object(l.b)("li",{parentName:"ul"},"\ubc84\ube14\ub9c1\uc774 \uc9c4\ud589\ub418\uc5b4\ub3c4 \ubcc0\ud558\uc9c0 \uc54a\uc74c")),Object(l.b)("h3",{id:"eventcurrenttargetthis"},"event.currentTarget(this)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ud604\uc7ac \uc694\uc18c")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ud604\uc7ac ",Object(l.b)("strong",{parentName:"p"},"\uc2e4\ud589\uc911\uc778 \ud578\ub4e4\ub7ec\uac00 \ud560\ub2f9\ub41c \uc694\uc18c"),"\ub97c \ucc38\uc870")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"event.target")," \u2013 form \uc548\ucabd\uc5d0 \uc2e4\uc81c \ud074\ub9ad\ud55c \uc694\uc18c\ub97c \uac00\ub9ac\ud0b4")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"event.currentTarget")," - form"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<html>\n\n<head>\n  <meta charset="utf-8">\n  <link rel="stylesheet" href="example.css">\n</head>\n\n<body>\n  <form id="form">FORM\n    <div>DIV\n      <p>P</p>\n    </div>\n  </form>\n</body>\n<script>\nform.onclick = function(event) {\n  event.target.style.backgroundColor = \'yellow\';\n\n  // chrome needs some time to paint yellow\n  setTimeout(() => {\n    alert("target = " + event.target.tagName + ", this=" + this.tagName);\n    event.target.style.backgroundColor = \'\'\n  }, 0);\n};\n<\/script>\n</html>\n')),Object(l.b)("h2",{id:"eventstoppropagation-\ubc84\ube14\ub9c1-\uc911\ub2e8\ud558\uae30"},"event.stopPropagation \ubc84\ube14\ub9c1 \uc911\ub2e8\ud558\uae30"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<body onclick="alert(`\ubc84\ube14\ub9c1\uc740 \uc5ec\uae30\uae4c\uc9c0 \ub3c4\ub2ec\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4.`)">\n  <button onclick="event.stopPropagation()">\ud074\ub9ad\ud574 \uc8fc\uc138\uc694.</button>\n</body>\n')),Object(l.b)("h3",{id:"eventstopimmediatepropagation"},Object(l.b)("a",{parentName:"h3",href:"https://developer.mozilla.org/ko/docs/Web/API/Event/stopImmediatePropagation"},"event.stopImmediatePropagation()")),Object(l.b)("p",null,"\ud55c \uc694\uc18c\uc758 \ud578\ub4e4\ub7ec\uac00 \uc5ec\ub7ec \uac1c\uc77c \ub54c, "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"event.stopPropagation()")," \uc73c\ub85c \ud578\ub4e4\ub7ec \uc911 \ud558\ub098\uac00 \ubc84\ube14\ub9c1\uc744 \uba48\ucd94\ub354\ub77c\ub3c4, \ub098\uba38\uc9c0 \ud578\ub4e4\ub7ec\ub294 \uc5ec\uc804\ud788 \ub3d9\uc791\ud55c\ub2e4.")),Object(l.b)("p",null,"\ub2e4\ub978 \ud578\ub4e4\ub7ec\uc758 \ub3d9\uc791\ub3c4 \ub9c9\uc73c\ub824\uba74 "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"event.stopImmediatePropagation()")," \uc0ac\uc6a9"),Object(l.b)("li",{parentName:"ul"},"\uc694\uc18c\uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec \ubaa8\ub450\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc74c")),Object(l.b)("h2",{id:"\uaf2d-\ud544\uc694\ud55c-\uacbd\uc6b0\ub97c-\uc81c\uc678\ud558\uace4-\ubc84\ube14\ub9c1\uc744-\ub9c9\uc9c0-\ub9c8\uc138\uc694"},"\uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\ub97c \uc81c\uc678\ud558\uace4 \ubc84\ube14\ub9c1\uc744 \ub9c9\uc9c0 \ub9c8\uc138\uc694!"),Object(l.b)("p",null,"\ubc84\ube14\ub9c1\uc740 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc544\ud0a4\ud14d\ucc98\ub97c \uc798 \uace0\ub824\ud574 \uc9c4\uc9dc \ub9c9\uc544\uc57c \ud558\ub294 \uc0c1\ud669\uc5d0\uc11c\ub9cc \ubc84\ube14\ub9c1\uc744 \ub9c9\uc73c\uc138\uc694."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"event.stopPropagation()"),"  \u2192 \ucd94\ud6c4\uc5d0 \ubb38\uc81c \uc720\ubc1c \uac00\ub2a5"),Object(l.b)("p",null,"\uc774\ubca4\ud2b8 \ubc84\ube14\ub9c1\uc744 \ub9c9\uc544\uc57c \ud558\ub294 \uacbd\uc6b0\ub294 \uac70\uc758 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ubc84\ube14\ub9c1\uc744 \ub9c9\uc544\uc57c \ud574\uacb0\ub418\ub294 \ubb38\uc81c\ub77c\uba74 \ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8 \ub4f1\uc744 \uc0ac\uc6a9\ud574 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("h3",{id:"\ud589\ub3d9-\ud328\ud134-\ubd84\uc11d"},"\ud589\ub3d9 \ud328\ud134 \ubd84\uc11d"),Object(l.b)("p",null,"\uc0ac\ub78c\ub4e4\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c \uc5b4\ub514\ub97c \ud074\ub9ad\ud588\ub294\uc9c0 \ub4f1\uc758 \ud589\ub3d9 \ud328\ud134\uc744 \ubd84\uc11d\ud558\uae30 \uc704\ud574,\nwindow \ub0b4\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ud074\ub9ad \uc774\ubca4\ud2b8 \uc804\ubd80\ub97c \uac10\uc9c0\ud558\uae30\ub85c \uacb0\uc815\ud569\ub2c8\ub2e4. "),Object(l.b)("p",null,"\ud074\ub9ad \uc774\ubca4\ud2b8\ub97c \uac10\uc9c0\ud558\uae30 \uc704\ud574 document.addEventListener('click'\u2026)\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),Object(l.b)("p",null,"stopPropagation \ub85c \ubc84\ube14\ub9c1\uc744 \ub9c9\uc544\ub193\uc740 \uc601\uc5ed\uc5d0\uc120 \ubd84\uc11d \uc2dc\uc2a4\ud15c\uc758 \ucf54\ub4dc\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0,\n\ubd84\uc11d\uc774 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(l.b)("p",null,"\uc548\ud0c0\uae5d\uac8c\ub3c4 stopPropagation\uc744 \uc0ac\uc6a9\ud55c \uc601\uc5ed\uc740 '\uc8fd\uc740 \uc601\uc5ed(dead zone)'\uc774 \ub418\uc5b4\ubc84\ub9bd\ub2c8\ub2e4."),Object(l.b)("h2",{id:"\uc774\ubca4\ud2b8\uc758-\ud750\ub984"},"\uc774\ubca4\ud2b8\uc758 \ud750\ub984"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/100105281-8542d600-2eaa-11eb-9b68-9b59c0e70f63.png",alt:"image"})),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\ucea1\ucc98\ub9c1 \ub2e8\uacc4 \u2013 \uc774\ubca4\ud2b8\uac00 \ud558\uc704 \uc694\uc18c\ub85c \uc804\ud30c\ub418\ub294 \ub2e8\uacc4"),Object(l.b)("li",{parentName:"ol"},"\ud0c0\uae43 \ub2e8\uacc4 \u2013 \uc774\ubca4\ud2b8\uac00 \uc2e4\uc81c \ud0c0\uae43 \uc694\uc18c\uc5d0 \uc804\ub2ec\ub418\ub294 \ub2e8\uacc4"),Object(l.b)("li",{parentName:"ol"},"\ubc84\ube14\ub9c1 \ub2e8\uacc4 \u2013 \uc774\ubca4\ud2b8\uac00 \uc0c1\uc704 \uc694\uc18c\ub85c \uc804\ud30c\ub418\ub294 \ub2e8\uacc4")),Object(l.b)("p",null,"\ucea1\ucc98\ub9c1\uacfc \ubc84\ube14\ub9c1 \ub2e8\uacc4\uc758 \ud578\ub4e4\ub7ec\ub294 \ud0c0\uae43 \ub2e8\uacc4\uc5d0\uc11c \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4."),Object(l.b)("h2",{id:"\ucea1\ucc98\ub9c1"},"\ucea1\ucc98\ub9c1"),Object(l.b)("p",null,"\uc774\ubca4\ud2b8 \ucea1\ucc98\ub9c1 \ub2e8\uacc4\ub97c \uc774\uc6a9\ud558\ub294 \uacbd\uc6b0\ub294 \ud754\uce58 \uc54a\ub2e4."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"elem.addEventListener(..., {capture: true})\nelem.addEventListener(..., true)\n")),Object(l.b)("p",null,"capture \uc635\uc158"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"false(default \uac12) \ud578\ub4e4\ub7ec\ub294 \ubc84\ube14\ub9c1 \ub2e8\uacc4\uc5d0\uc11c \ub3d9\uc791\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"true \ud578\ub4e4\ub7ec\ub294 \ucea1\ucc98\ub9c1 \ub2e8\uacc4\uc5d0\uc11c \ub3d9\uc791\ud569\ub2c8\ub2e4.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<form>FORM\n  <div>DIV\n    <p>P</p>\n  </div>\n</form>\n\n<script>\n  for(let elem of document.querySelectorAll(\'*\')) {\n    elem.addEventListener("click", e => alert(`\ucea1\uccd0\ub9c1: ${elem.tagName}`), true);\n    elem.addEventListener("click", e => alert(`\ubc84\ube14\ub9c1: ${elem.tagName}`));\n  }\n<\/script>\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<p>"),"\ub97c \ud074\ub9ad\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc21c\uc11c\ub85c \uc774\ubca4\ud2b8\uac00 \uc804\ub2ec\ub429\ub2c8\ub2e4."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"HTML \u2192 BODY \u2192 FORM \u2192 DIV (\ucea1\ucc98\ub9c1 \ub2e8\uacc4, \uccab \ubc88\uc9f8 \ub9ac\uc2a4\ub108)"),Object(l.b)("li",{parentName:"ol"},"P (\ud0c0\uae43 \ub2e8\uacc4, \ucea1\uccd0\ub9c1\uacfc \ubc84\ube14\ub9c1 \ub458 \ub2e4\uc5d0 \ub9ac\uc2a4\ub108\ub97c \uc124\uc815\ud588\uae30 \ub54c\ubb38\uc5d0 \ub450 \ubc88 \ud638\ucd9c\ub429\ub2c8\ub2e4.)"),Object(l.b)("li",{parentName:"ol"},"DIV \u2192 FORM \u2192 BODY \u2192 HTML (\ubc84\ube14\ub9c1 \ub2e8\uacc4, \ub450 \ubc88\uc9f8 \ub9ac\uc2a4\ub108)")),Object(l.b)("h2",{id:"eventeventphase"},"event.eventPhase"),Object(l.b)("p",null,"\ud604\uc7ac \ubc1c\uc0dd \uc911\uc778 \uc774\ubca4\ud2b8 \ud750\ub984\uc758 \ub2e8\uacc4\ub97c \uc54c \uc218 \uc788\uc74c (\ucea1\ucc98\ub9c1=1, \ud0c0\uae43=2, \ubc84\ube14\ub9c1=3)"),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://ko.javascript.info/bubbling-and-capturing"},"https://ko.javascript.info/bubbling-and-capturing"))))}p.isMDXComponent=!0},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return n?a.a.createElement(d,b(b({ref:t},o),{},{components:n})):a.a.createElement(d,b({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);