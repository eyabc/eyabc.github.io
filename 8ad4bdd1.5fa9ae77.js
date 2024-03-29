(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(482)),i={Date:new Date("2020-10-24T00:00:00.000Z"),sidebarDepth:2},b={unversionedId:"javascript/browser/Browser_DOM_Search",id:"javascript/browser/Browser_DOM_Search",isDocsHomePage:!1,title:"Browser_DOM_Search",description:"DOM Search",source:"@site/docs/javascript/browser/Browser_DOM_Search.md",slug:"/javascript/browser/Browser_DOM_Search",permalink:"/docs/javascript/browser/Browser_DOM_Search",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Browser_DOM_Tree",permalink:"/docs/javascript/browser/Browser_DOM_Tree"},next:{title:"Browser_Compiler",permalink:"/docs/javascript/browser/Browser_Compiler"}},c=[{value:"\uc790\uc2dd \ub178\ub4dc \ud0d0\uc0c9",id:"\uc790\uc2dd-\ub178\ub4dc-\ud0d0\uc0c9",children:[]},{value:"DOM \uceec\ub809\uc158 : NodeList",id:"dom-\uceec\ub809\uc158--nodelist",children:[]},{value:"\ud14c\uc774\ube14 \ud0d0\uc0c9",id:"\ud14c\uc774\ube14-\ud0d0\uc0c9",children:[]},{value:"Reference",id:"reference",children:[]}],o={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"dom-search"},"DOM Search"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Node"),Object(l.b)("th",{parentName:"tr",align:null},"Element"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\ud0dc\uadf8\ub178\ub4dc + \ud14d\uc2a4\ud2b8\ub178\ud2b8"),Object(l.b)("td",{parentName:"tr",align:null},"\ud0dc\uadf8 \ub178\ub4dc")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"childNodes"),Object(l.b)("td",{parentName:"tr",align:null},"children")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"parentNode"),Object(l.b)("td",{parentName:"tr",align:null},"parentElement")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"previousSibling"),Object(l.b)("td",{parentName:"tr",align:null},"previousElementSibling")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nextSibling"),Object(l.b)("td",{parentName:"tr",align:null},"nextElementSibling")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"firstChild"),Object(l.b)("td",{parentName:"tr",align:null},"firstElementChild")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastChild"),Object(l.b)("td",{parentName:"tr",align:null},"lastElementChild")))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/97265395-ed7da800-1869-11eb-8e66-e44e37ee39cb.png",alt:"image"}),"\n",Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/97270463-8f08f780-1872-11eb-912d-c5c783e40bdf.png",alt:"image"})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<html>")," = ",Object(l.b)("inlineCode",{parentName:"li"},"document.documentElement")," "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<head>")," = ",Object(l.b)("inlineCode",{parentName:"li"},"document.head")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<body>")," = ",Object(l.b)("inlineCode",{parentName:"li"},"document.body"))),Object(l.b)("h2",{id:"\uc790\uc2dd-\ub178\ub4dc-\ud0d0\uc0c9"},"\uc790\uc2dd \ub178\ub4dc \ud0d0\uc0c9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc790\uc2dd\ub178\ub4dc (child node, children) ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ubc14\ub85c \uc544\ub798\uc758 \uc790\uc2dd \uc694\uc18c"))),Object(l.b)("li",{parentName:"ul"},"\ud6c4\uc190 \ub178\ub4dc (descendants)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\uc911\ucca9 \uad00\uacc4\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc694\uc18c")))),Object(l.b)("h2",{id:"dom-\uceec\ub809\uc158--nodelist"},"DOM \uceec\ub809\uc158 : NodeList"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ubc30\uc5f4\uc774 \uc544\ub2cc iterable \uc720\uc0ac \ubc30\uc5f4 \uac1d\uccb4 \uceec\ub809\uc158\uc774\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc77d\uae30 \uc804\uc6a9"),Object(l.b)("li",{parentName:"ul"},"DOM \uc744 \ubcc0\uacbd\ud558\ub824\uba74 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"for..of")," \uc73c\ub85c \uc21c\ud68c\ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"for..in")," \uc740 \ubaa8\ub4e0 \uc5f4\uac70\uac00\ub2a5\ud55c \ud504\ub85c\ud37c\ud2f0\ub97c \uc21c\ud68c\ud558\uc5ec \ubd88\ud544\uc694\ud55c \ud504\ub85c\ud37c\ud2f0\uae4c\uc9c0 \uc21c\ud68c\ud558\uac8c \ub41c\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"node.hasChildNodes()")," \uc790\uc2dd \ub178\ub4dc\uc758 \uc874\uc7ac \uc5ec\ubd80 \ud655\uc778")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},"for (let i = 0; i < document.body.childNodes.length; i++) {\n  alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ... , SCRIPT\n}\n\nelem.childNodes[0] === elem.firstChild;\nelem.childNodes[elem.childNodes.length - 1] === elem.lastChild;\n\n// <body>\uc758 \ubd80\ubaa8 \ub178\ub4dc\ub294 <html>\uc785\ub2c8\ub2e4\nalert( document.body.parentNode === document.documentElement ); // true\n\n// <head>\uc758 \ub2e4\uc74c \ud615\uc81c \ub178\ub4dc\ub294 <body>\uc785\ub2c8\ub2e4.\nalert( document.head.nextSibling ); // HTMLBodyElement\n\n// <body>\uc758 \uc774\uc804 \ud615\uc81c \ub178\ub4dc\ub294 <head>\uc785\ub2c8\ub2e4.\nalert( document.body.previousSibling ); // HTMLHeadElement\n")),Object(l.b)("h2",{id:"\ud14c\uc774\ube14-\ud0d0\uc0c9"},"\ud14c\uc774\ube14 \ud0d0\uc0c9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"table.rows")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"<tr>")," \uceec\ub809\uc158"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"table.caption")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"<caption>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"table.tHead")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"<thead>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"table.tFoot")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"<tfoot>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"table.tBodies")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"<tbody>")," \uceec\ub809\uc158",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc5d0 \ucd5c\uc18c 1\uac1c\uc758 ",Object(l.b)("inlineCode",{parentName:"li"},"<tbody>")," \ub97c \ub2f4\uace0 \uc788\ub2e4."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<thead> <tfoot> <tbody>")," \ub294 ",Object(l.b)("inlineCode",{parentName:"li"},"rows")," \ud504\ub85c\ud37c\ud2f0\ub97c \uc9c0\uc6d0\ud568"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<tr>")," \uc758 \ud504\ub85c\ud37c\ud2f0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tr.cells")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"<td>")," ",Object(l.b)("inlineCode",{parentName:"li"},"<th>")," \uceec\ub809\uc158"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tr.sectionRowIndex")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"<tr>"),"\uc758 thead / tbody / tfoot \uc548\uc5d0\uc11c\uc758 \uc778\ub371\uc2a4"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<td>")," ",Object(l.b)("inlineCode",{parentName:"li"},"<th>")," \ud504\ub85c\ud37c\ud2f0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"td.cellIndex")," -> td / th \uac00 \uc18d\ud55c ",Object(l.b)("inlineCode",{parentName:"li"},"<tr>")," \uc5d0\uc11c\uc758 \uc778\ub371\uc2a4")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<table id="table">\n  <tr>\n    <td>\uc77c</td><td>\uc774</td>\n  </tr>\n  <tr>\n    <td>\uc0bc</td><td>\uc0ac</td>\n  </tr>\n</table>\n\n<script>\n  // \'\uc774\'\uac00 \uc801\ud78c td\ub97c \uac00\uc838\uc634(\uccab \ubc88\uc9f8 \uc904, \ub450 \ubc88\uc9f8 \uce78)\n  let td = table.rows[0].cells[1];\n  td.style.backgroundColor = "red"; // \uac15\uc870\n<\/script>\n')),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://gitlab.com/siots-study/topics/-/wikis/dom"},"https://gitlab.com/siots-study/topics/-/wikis/dom")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://ko.javascript.info/dom-navigation"},"DOM Search")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.zerocho.com/category/JavaScript/post/573b4165a54b5e8427432948"},"https://www.zerocho.com/category/JavaScript/post/573b4165a54b5e8427432948"))))}d.isMDXComponent=!0},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,O=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return n?r.a.createElement(O,b(b({ref:t},o),{},{components:n})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);