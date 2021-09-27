(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(414)),i={},c={unversionedId:"javascript/browser_events/Browser_Event_Delegation",id:"javascript/browser_events/Browser_Event_Delegation",isDocsHomePage:!1,title:"Browser_Event_Delegation",description:"\uc774\ubca4\ud2b8 \uc704\uc784",source:"@site/docs/javascript/browser_events/Browser_Event_Delegation.md",slug:"/javascript/browser_events/Browser_Event_Delegation",permalink:"/docs/javascript/browser_events/Browser_Event_Delegation",version:"current",sidebar:"javascript",previous:{title:"Browser_Bubbling_Capturing",permalink:"/docs/javascript/browser_events/Browser_Bubbling_Capturing"},next:{title:"Browser_Default_Action",permalink:"/docs/javascript/browser_events/Browser_Default_Action"}},b=[{value:"\uc774\ubca4\ud2b8 \uc704\uc784 \ud65c\uc6a9\ud558\uae30",id:"\uc774\ubca4\ud2b8-\uc704\uc784-\ud65c\uc6a9\ud558\uae30",children:[]},{value:"\uc774\ubca4\ud2b8 \uc704\uc784\uc758 \ub3d9\uc791",id:"\uc774\ubca4\ud2b8-\uc704\uc784\uc758-\ub3d9\uc791",children:[]},{value:"\uc774\ubca4\ud2b8 \uc704\uc784\uc758 \uc7a5\uc810",id:"\uc774\ubca4\ud2b8-\uc704\uc784\uc758-\uc7a5\uc810",children:[]},{value:"\uc774\ubca4\ud2b8 \uc704\uc784\uc758 \ub2e8\uc810",id:"\uc774\ubca4\ud2b8-\uc704\uc784\uc758-\ub2e8\uc810",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]},{value:"Reference &amp; Comments",id:"reference--comments",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\uc774\ubca4\ud2b8-\uc704\uc784"},"\uc774\ubca4\ud2b8 \uc704\uc784"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/102895049-620a4700-44a7-11eb-9230-cac69712c26c.png",alt:"image"})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://plnkr.co/edit/KC7ZGxbhhmPeznYw?p=preview&preview"},"\uc0d8\ud50c"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<table>\n  <tr>\n    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>\n  </tr>\n  <tr>\n    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>\n    <td class="n">...</td>\n    <td class="ne">...</td>\n  </tr>\n  <tr>...2 more lines of this kind...</tr>\n  <tr>...2 more lines of this kind...</tr>\n</table>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ubaa9\ud45c : ",Object(l.b)("inlineCode",{parentName:"li"},"<td>")," \ub97c \ud074\ub9ad\ud588\uc744 \ub54c, \uadf8 \uce78\uc744 \uac15\uc870\ud568"),Object(l.b)("li",{parentName:"ul"},"\ubc29\ubc95 : ",Object(l.b)("inlineCode",{parentName:"li"},"onclick")," \ud578\ub4e4\ub7ec\ub97c \ud560\ub2f9\ud560 \uc694\uc18c \uacb0\uc815",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\ubaa8\ub4e0 ",Object(l.b)("inlineCode",{parentName:"li"},"<td>"),"\ub9c8\ub2e4 \ud560\ub2f9 \ud83d\udc49 \ube44\ud6a8\uc728\uc801"),Object(l.b)("li",{parentName:"ol"},"\ubaa8\ub4e0 \uc774\ubca4\ud2b8\ub97c \uc7a1\uc544\ub0b4\ub294 \ud578\ub4e4\ub7ec\ub97c ",Object(l.b)("inlineCode",{parentName:"li"},"<table>")," \uc694\uc18c\uc5d0 \ud560\ub2f9")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"let selectedTd;\n\ntable.onclick = function(event) {\n  let target = event.target; // \ud074\ub9ad\uc774 \uc5b4\ub514\uc11c \ubc1c\uc0dd\ud588\uc744\uae4c\uc694?\n\n  if (target.tagName !== 'TD') return; // TD\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uac8c \uc544\ub2c8\ub77c\uba74 \uc544\ubb34 \uc791\uc5c5\ub3c4 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4,\n\n  highlight(target); // \uac15\uc870 \ud568\n};\n\nfunction highlight(td) {\n  if (selectedTd) { // \uc774\ubbf8 \uac15\uc870\ub418\uc5b4\uc788\ub294 \uce78\uc774 \uc788\ub2e4\uba74 \uc6d0\uc0c1\ud0dc\ub85c \ubc14\uafd4\uc90c\n    selectedTd.classList.remove('highlight');\n  }\n  selectedTd = td;\n  selectedTd.classList.add('highlight'); // \uc0c8\ub85c\uc6b4 td\ub97c \uac15\uc870 \ud568\n}\n")),Object(l.b)("p",null,"\uc704 \ucf54\ub4dc\uc758 \ubb38\uc81c\uc810"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<td>"),"\uac00 \uc544\ub2cc ",Object(l.b)("inlineCode",{parentName:"li"},"<td>")," \uc548 ",Object(l.b)("inlineCode",{parentName:"li"},"<strong>")," \uc5d0\uc11c\ub294 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},"<td>\n  <strong>Northwest</strong>\n</td>\n")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/102898369-c24fb780-44ac-11eb-8b09-8816c2e22e3a.png",alt:"image"})),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"table.onclick = function(event) {\n  const td = event.target.closest('td'); // (1)\n\n  if (!td) return; // (2)\n\n  if (!table.contains(td)) return; // (3)\n\n  highlight(td); // (4)\n};\n")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"elem.closest(selector)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"elem \uc758 \uc0c1\uc704 \uc694\uc18c \uc911 selector \uc640 \uc77c\uce58\ud558\ub294 ",Object(l.b)("strong",{parentName:"li"},"\uac00\uc7a5 \uadfc\uc811\ud55c \uc870\uc0c1 \uc694\uc18c\ub97c \ubc18\ud658")," "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"event.target")," \uc774 ",Object(l.b)("inlineCode",{parentName:"li"},"<td>"),"\uc548\uc5d0 \uc788\uc9c0 \uc54a\uc744 \ub54c, ",Object(l.b)("inlineCode",{parentName:"li"},"null")," \ubc18\ud658"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"\uc911\ucca9 \ud14c\uc774\ube14"),"\uc774 \uc788\ub294 \uacbd\uc6b0 event.target \uc740 \ud604\uc7ac \ud14c\uc774\ube14 \ubc14\uae65\uc5d0 \uc788\ub294 ",Object(l.b)("inlineCode",{parentName:"li"},"<td>"),"\uac00 \ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ol"},"\uc9c4\uc9dc td\ub97c \uac15\uc870")),Object(l.b)("h2",{id:"\uc774\ubca4\ud2b8-\uc704\uc784-\ud65c\uc6a9\ud558\uae30"},"\uc774\ubca4\ud2b8 \uc704\uc784 \ud65c\uc6a9\ud558\uae30"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<div id="menu">\n  <button data-action="save">\uc800\uc7a5\ud558\uae30</button>\n  <button data-action="load">\ubd88\ub7ec\uc624\uae30</button>\n  <button data-action="search">\uac80\uc0c9\ud558\uae30</button>\n</div>\n\n<script>\n  class Menu {\n    constructor(elem) {\n      this._elem = elem;\n      // (*) this.onClick \uc740 this \uc5d0 \ubc14\uc778\ub529\ud588\ub2e4\n      elem.onclick = this.onClick.bind(this); \n    }\n\n    save() {\n      alert(\'\uc800\uc7a5\ud558\uae30\');\n    }\n\n    load() {\n      alert(\'\ubd88\ub7ec\uc624\uae30\');\n    }\n\n    search() {\n      alert(\'\uac80\uc0c9\ud558\uae30\');\n    }\n\n    onClick(event) {\n      let action = event.target.dataset.action;\n      if (action) {\n        this[action]();\n      }\n    };\n  }\n\n  new Menu(menu);\n<\/script>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"(*)",Object(l.b)("inlineCode",{parentName:"li"},"elem.onclick = this.onClick.bind(this);")," ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"this.onClick")," \uc740 ",Object(l.b)("inlineCode",{parentName:"li"},"this")," \uc5d0 \ubc14\uc778\ub529\ud568."),Object(l.b)("li",{parentName:"ul"},"class \uc758 \uac1d\uccb4\uc5d0\uc11c\uc758 this \ub294 menu \uc758 \uc778\uc2a4\ud134\uc2a4 object \ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ubc14\uc778\ub529 \ud558\uc9c0 \uc54a\uc73c\uba74, onClick \uba54\uc11c\ub4dc \uc548\uc5d0\uc11c\uc758 this \ub294 elem \uc774\ub2e4.")))),Object(l.b)("h2",{id:"\uc774\ubca4\ud2b8-\uc704\uc784\uc758-\ub3d9\uc791"},"\uc774\ubca4\ud2b8 \uc704\uc784\uc758 \ub3d9\uc791"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\ucee8\ud14c\uc774\ub108\uc5d0 \ud558\ub098\uc758 \ud578\ub4e4\ub7ec\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ol"},"\ud578\ub4e4\ub7ec\uc758 event.target \uc744 \uc0ac\uc6a9\ud574 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud55c \uc694\uc18c\uac00 \uc5b4\ub514\uc778\uc9c0 \uc54c\uc544\ub0c5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ol"},"\uc6d0\ud558\ub294 \uc694\uc18c\uc5d0\uc11c \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\ub2e4\uace0 \ud655\uc778\ub418\uba74 \uc774\ubca4\ud2b8\ub97c \ud578\ub4e4\ub9c1\ud569\ub2c8\ub2e4.")),Object(l.b)("h2",{id:"\uc774\ubca4\ud2b8-\uc704\uc784\uc758-\uc7a5\uc810"},"\uc774\ubca4\ud2b8 \uc704\uc784\uc758 \uc7a5\uc810"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc694\uc18c\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc81c\uac70\ud560 \ub54c \ud574\ub2f9 \uc694\uc18c\uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc81c\uac70\ud560 \ud544\uc694\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 ",Object(l.b)("strong",{parentName:"li"},"\ucf54\ub4dc\uac00 \uc9e7\uc544\uc9d1\ub2c8\ub2e4.")),Object(l.b)("li",{parentName:"ul"},"\ub3d9\uc801\uc778 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ub300\ud55c \uc774\ubca4\ud2b8 \ucc98\ub9ac\uac00 \uc218\uc6d4\ud558\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"DOM \uc218\uc815\uc774 \uc26c\uc6cc\uc9d0")," : \uc0c1\uc704 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0\uc11c\ub9cc \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uad00\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 \ud558\uc704 \uc5d8\ub9ac\uba3c\ud2b8\ub294 \uc790\uc720\ub86d\uac8c \ucd94\uac00 \uc0ad\uc81c\ud560 \uc218 \uc788\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uad00\ub9ac\uac00 \uc27d\ub2e4.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ub9ce\uc740 \ud578\ub4e4\ub7ec\ub97c \ud560\ub2f9\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\uae30 \ub54c\ubb38\uc5d0 ",Object(l.b)("strong",{parentName:"li"},"\ucd08\uae30\ud654\uac00 \ub2e8\uc21c\ud574\uc9c0\uace0 \uba54\ubaa8\ub9ac\uac00 \uc808\uc57d"),"\ub429\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \ub204\uc218 \uac00\ub2a5\uc131\ub3c4 \uc904\uc5b4\ub4e0\ub2e4.")))),Object(l.b)("h2",{id:"\uc774\ubca4\ud2b8-\uc704\uc784\uc758-\ub2e8\uc810"},"\uc774\ubca4\ud2b8 \uc704\uc784\uc758 \ub2e8\uc810"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \uc704\uc784\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 ",Object(l.b)("strong",{parentName:"li"},"\uc774\ubca4\ud2b8\uac00 \ubc18\ub4dc\uc2dc \ubc84\ube14\ub9c1")," \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ubc84\ube14\ub9c1 \ub418\uc9c0 \uc54a\ub294 \uc77c\ubd80 \uc774\ubca4\ud2b8\uac00 \uc874\uc7ac\ud568."),Object(l.b)("li",{parentName:"ul"},"\ub0ae\uc740 \ub808\ubca8\uc5d0 \ud560\ub2f9\ud55c \ud578\ub4e4\ub7ec\uc5d4 event.stopPropagation()\ub97c \uc4f8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. (?TODO) "))),Object(l.b)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108 \uc218\uc900\uc5d0 \ud560\ub2f9\ub41c \ud578\ub4e4\ub7ec\uac00 \ubaa8\ub4e0 \ud558\uc704 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc5d0 \uc751\ub2f5\ud574\uc57c\ud568 ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CPU \uc791\uc5c5 \ubd80\ud558\uac00 \ub298\uc5b4\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uc774\ub7f0 \ubd80\ud558\ub294 \ubb34\uc2dc\ud560\ub9cc\ud55c \uc218\uc900\uc774\ubbc0\ub85c \uc2e4\uc81c\ub85c\ub294 \uc798 \uace0\ub824\ud558\uc9c0 \uc54a\uc74c")))),Object(l.b)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uce74\uc6b4\ud130 \uad6c\ud604\ud558\uae30")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'\uccab \ubc88\uc9f8 \uce74\uc6b4\ud130: <input type="button" value="1" data-counter>\n\ub450 \ubc88\uc9f8 \uce74\uc6b4\ud130: <input type="button" value="2" data-counter>\n\n<script>\n  document.addEventListener(\'click\', function(event) {\n\n    if (event.target.dataset.counter != undefined) { // \uc18d\uc131\uc774 \uc874\uc7ac\ud560 \uacbd\uc6b0\n      event.target.value++;\n    }\n\n  });\n<\/script>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud1a0\uae00\ub7ec \uad6c\ud604\ud558\uae30")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<button data-toggle-id="subscribe-mail">\n  \uad6c\ub3c5 \ud3fc \ubcf4\uc5ec\uc8fc\uae30\n</button>\n\n<form id="subscribe-mail" hidden>\n  \uba54\uc77c \uc8fc\uc18c: <input type="email">\n</form>\n\n<script>\n  document.addEventListener(\'click\', function(event) {\n    let id = event.target.dataset.toggleId;\n    if (!id) return;\n\n    let elem = document.getElementById(id);\n\n    elem.hidden = !elem.hidden;\n  });\n<\/script>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://plnkr.co/edit/Gln3COwjRb6E7LA9?p=preview&preview"},"Hide messages with delegation"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://plnkr.co/edit/S9Y0B68rHv8DNbJx?p=preview&preview"},"Tree menu"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://plnkr.co/edit/44OZNPWoTdaMi1mR?p=preview&preview"},"Sortable table"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://plnkr.co/edit/QEo1yOgcLdOZrUYn?p=preview&preview"},"Tooltip behavior"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://reactjs.org/docs/handling-events.html"},"React \uc774\ubca4\ud2b8 \uc704\uc784")))),Object(l.b)("h2",{id:"reference--comments"},"Reference & Comments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://ko.javascript.info/event-delegation"},"https://ko.javascript.info/event-delegation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://ui.toast.com/weekly-pick/ko_20160826"},"https://ui.toast.com/weekly-pick/ko_20160826"))))}p.isMDXComponent=!0},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);