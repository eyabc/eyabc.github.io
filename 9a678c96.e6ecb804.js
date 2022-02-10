(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var o=n(3),l=n(7),r=(n(0),n(443)),i={},c={unversionedId:"javascript/browser_events/Browser_event_scrolling",id:"javascript/browser_events/Browser_event_scrolling",isDocsHomePage:!1,title:"Browser_event_scrolling",description:"Scrolling",source:"@site/docs/javascript/browser_events/Browser_event_scrolling.md",slug:"/javascript/browser_events/Browser_event_scrolling",permalink:"/docs/javascript/browser_events/Browser_event_scrolling",version:"current",sidebar:"javascript",previous:{title:"Browser_keydown_keyup_events",permalink:"/docs/javascript/browser_events/Browser_keydown_keyup_events"}},a=[{value:"scrolling \ubc29\uc9c0 \ubc29\ubc95",id:"scrolling-\ubc29\uc9c0-\ubc29\ubc95",children:[]},{value:"Endless page",id:"endless-page",children:[{value:"\uc2a4\ud06c\ub864\uc758 \ub450\uac00\uc9c0 \uc911\uc694\ud55c \ud2b9\uc9d5",id:"\uc2a4\ud06c\ub864\uc758-\ub450\uac00\uc9c0-\uc911\uc694\ud55c-\ud2b9\uc9d5",children:[]},{value:"Element.getBoundingClientRect()",id:"elementgetboundingclientrect",children:[]}]},{value:"Up/down button",id:"updown-button",children:[]},{value:"Load visible images",id:"load-visible-images",children:[]}],b={toc:a};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"scrolling"},"Scrolling"),Object(r.b)("p",null,"window \ub098 scrollable elements \uc758 \uc2a4\ud06c\ub864\ub9c1\uc5d0 \ubc18\uc751\ud558\ub294 \uc774\ubca4\ud2b8"),Object(r.b)("p",null,"\ud604\uc7ac \uc2a4\ud06c\ub864\uc744 \ubcf4\uc5ec\uc8fc\ub294 \ud568\uc218"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"window.addEventListener('scroll', function() {\n  document.getElementById('showScroll')\n          .innerHTML = window.pageYOffset + 'px';\n});\n")),Object(r.b)("p",null,"\uc2a4\ud06c\ub864\uc758 \ud65c\uc6a9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubb38\uc11c\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc788\ub294 \uc704\uce58\uc5d0 \ub530\ub77c \ucd94\uac00 \ucee8\ud2b8\ub864 \ub610\ub294 \uc815\ubcf4\ub97c \ud45c\uc2dc\ud558\uac70\ub098 \uc228\uae30\ub294 \uae30\ub2a5"),Object(r.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \ud398\uc774\uc9c0 \uc544\ub798\ub05d\uc73c\ub85c \uc2a4\ud06c\ub864\ud558\uba74 \ub354 \ub9ce\uc740 \ub370\uc774\ud130\ub97c \ub85c\ub4dc\ud558\ub294 \uae30\ub2a5")),Object(r.b)("h2",{id:"scrolling-\ubc29\uc9c0-\ubc29\ubc95"},"scrolling \ubc29\uc9c0 \ubc29\ubc95"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub864 \uc774\ubca4\ud2b8\uac00 \uc77c\uc5b4 \ub09c\ud6c4 ",Object(r.b)("inlineCode",{parentName:"li"},"onscroll")," \ub9ac\uc2a4\ub108\uc5d0 ",Object(r.b)("inlineCode",{parentName:"li"},"event.preventDefault()")," \ub97c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"CSS ",Object(r.b)("inlineCode",{parentName:"li"},"overflow")," \uc18d\uc131\uc744 \uc774\uc6a9")),Object(r.b)("h2",{id:"endless-page"},"Endless page"),Object(r.b)("h3",{id:"\uc2a4\ud06c\ub864\uc758-\ub450\uac00\uc9c0-\uc911\uc694\ud55c-\ud2b9\uc9d5"},"\uc2a4\ud06c\ub864\uc758 \ub450\uac00\uc9c0 \uc911\uc694\ud55c \ud2b9\uc9d5"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"elastic \ud0c4\ub825\uc801"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc77c\ubd80 \ube0c\ub77c\uc6b0\uc800/\ub514\ubc14\uc774\uc2a4 \uc5d0\uc11c\ub294, document \uc758 \uc2dc\uc791 \ub610\ub294 \ub05d\uc744 \uc57d\uac04 \ub118\uc5b4\uc11c \uc2a4\ud06c\ub864 \ud560 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ube48 \uacf5\uac04\uc774 \ud45c\uc2dc\uac00 \ub418\uace0 document \uac00 \uc790\ub3d9\uc73c\ub85c bounces back \ub41c\ub2e4.\n",Object(r.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/31977543/109003947-6b07d680-76eb-11eb-8f94-00f90e0392b4.gif",alt:"bounce-back"})))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"imprecise \ubd80\uc815\ud655\uc131"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\uc758 \ub05d\uc73c\ub85c \uc2a4\ud06c\ub864 \ud558\uc600\uc744 \ub54c, \uc2e4\uc81c document \uc758 \ud558\ub2e8\uc5d0\uc11c 0-50px \uc815\ub3c4\uc758 \uc624\ucc28\uac00 \uc874\uc7ac\ud55c\ub2e4.")))),Object(r.b)("h3",{id:"elementgetboundingclientrect"},Object(r.b)("a",{parentName:"h3",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"},"Element.getBoundingClientRect()")),Object(r.b)("p",null,"DOMRect \uc694\uc18c\uc758 \ud06c\uae30 \ubc0f \ubdf0\ud3ec\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \ud55c \uc704\uce58\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5 \ud558\ub294 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4 ."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Viewport"},"\ubdf0\ud3ec\ud2b8")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \uc6a9\uc5b4\uc5d0\uc11c, \ud604\uc7ac \ucc3d (\ub610\ub294 \ubb38\uc11c\ub97c \uc804\uccb4 \ud654\uba74 \ubaa8\ub4dc\ub85c \ubcf4\ub294 \uacbd\uc6b0 \ud654\uba74)\uc5d0 \ud45c\uc2dc\ub418\ub294 \ud604\uc7ac\ubcf4\uace0\uc788\ub294 \ubb38\uc11c\uc758 \ubd80\ubd84\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"\ubdf0\ud3ec\ud2b8 \uc678\ubd80\uc758 \ucf58\ud150\uce20\ub294 \uc2a4\ud06c\ub864 \ud560 \ub54c\uae4c\uc9c0 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))),Object(r.b)("p",null,"\ud398\uc774\uc9c0\uac00 \uc544\ub798\ub85c \uc2a4\ud06c\ub864 \ub418\ub294 \uac83\uc744 \uac10\uc9c0\ud558\ub294 \ubc29\ubc95"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"window \uc758 \uc0c1\ub300 \uc88c\ud45c\ub97c \uc0ac\uc6a9\ud568")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"document.documentElement.getBoundingClientRect()")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc804\uccb4 \ubb38\uc11c\uc758 window \uae30\uc900 \uc88c\ud45c\ub97c \uac00\uc838\uc634")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/109005717-9a1f4780-76ed-11eb-906e-b90d3a940794.png",alt:"image"})),Object(r.b)("p",null,"\uc804\uccb4 HTML document \uc758 \ub192\uc774\uac00 2000px \uc77c \ub54c,"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// \ud398\uc774\uc9c0\uc758 top \uc5d0 \uc788\uc744 \ub54c\n\n// window-relative top = 0\ndocument.documentElement.getBoundingClientRect().top = 0\n\n// window-relative bottom = 2000\n// the document is long, so that is probably far beyond the window bottom\ndocument.documentElement.getBoundingClientRect().bottom = 2000\n")),Object(r.b)("p",null,"500px \uc544\ub798\ub85c \uc2a4\ud06c\ub864\ud558\uba74"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// document top is above the window 500px\ndocument.documentElement.getBoundingClientRect().top = -500\n\n// document bottom is 500px closer\ndocument.documentElement.getBoundingClientRect().bottom = 1500\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"\ucc3d \ub192\uc774"),"\ub97c 600px \ub85c \uac00\uc815\ud558\uace0 \ub05d\uae4c\uc9c0 \uc2a4\ud06c\ub864 \ud560 \ub54c"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// document top is above the window 1400px\ndocument.documentElement.getBoundingClientRect().top = -1400\n\n// document bottom is below the window 600px\ndocument.documentElement.getBoundingClientRect().bottom = 600\n")),Object(r.b)("p",null,"bottom \ud504\ub85c\ud37c\ud2f0\ub294 \uc808\ub300 0 \uc774 \ub418\uc9c0 \uc54a\ub294\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"bottom \uc774 window \uc758 top \uc758 \uc704\uce58\uc5d0 \uc62c \uc218 \uc5c6\uae30 \ub54c\ubb38")),Object(r.b)("p",null,"bottom \uc758 \ucd5c\uc18c\uac12\uc774 \ub418\uc5c8\uc744 \ub54c"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac12 \u2192",Object(r.b)("inlineCode",{parentName:"li"},"\ucc3d\ub192\uc774"),"  "),Object(r.b)("li",{parentName:"ul"},"\ub354\uc774\uc0c1 \uc704\ub85c \uc2a4\ud06c\ub864 \ud560 \uc218 \uc5c6\ub294 \uc0c1\ud0dc")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ucc3d\ub192\uc774"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"document.documentElement.clientHeight"),Object(r.b)("li",{parentName:"ul"},"\uac00\ub85c\uc2a4\ud06c\ub864\uacfc \ud14c\ub450\ub9ac\ub97c \uc81c\uc678\ud55c \ucc3d\uc758 \ub192\uc774"))),Object(r.b)("p",null,"document bottom \uc774 100px \uc73c\ub85c\ubd80\ud130 \uba40\uc5b4\uc9c0\uc9c0 \uc54a\ub294 \ub54c\ub97c \uc54c\uc57c\uc57c \ud55c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"scroll \uc758 elastic \uacfc imprecise \ud2b9\uc131 \ub54c\ubb38 "),Object(r.b)("li",{parentName:"ul"},"\ub192\uc774\uac00 600px \uc778 \uacbd\uc6b0, 600-700px \uc0ac\uc774 \uc774\ub2e4.")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://ko.javascript.info/onscroll#ref-256"},"\uc608\uc2dc")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n</head>\n<body>\n<h1>Scroll me</h1>\n<script>\n  function populate() {\n    while(true) {\n      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;\n      if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;\n      document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);\n    }\n  }\n  window.addEventListener(\'scroll\', populate);\n  populate(); // init document\n<\/script>\n</body>\n</html>\n')),Object(r.b)("h2",{id:"updown-button"},"Up/down button"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://ko.javascript.info/onscroll#ref-257"},"to the top button \uc608\uc2dc")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\uc2a4\ud06c\ub864\uc774 \ub418\uace0 \uc788\uc9c0 \uc54a\uc744 \ub54c\ub294 \ubc84\ud2bc\uc774 \ub098\ud0c0\ub098\uc9c0 \uc54a\ub294\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\uc2a4\ud06c\ub864\uc774 window height \ub9cc\ud07c \uc544\ub798\ub85c \uc2a4\ud06c\ub864 \ub418\uc5c8\uc744 \ub54c \ubc84\ud2bc\uc774 \ub098\ud0c0\ub09c\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\ubc84\ud2bc\uc774 \uc788\uc9c0\ub9cc, \ud398\uc774\uc9c0\ub97c 2 \ubc88 \uc0c1\ud0dc \uc774\uc804\uc73c\ub85c \uc2a4\ud06c\ub864 \ud558\uba74 \ubc84\ud2bc\uc774 \uc0ac\ub77c\uc9c4\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\ubc84\ud2bc\uc744 \ub204\ub974\uba74 \ud398\uc774\uc9c0\uac00 top \uc73c\ub85c \uc2a4\ud06c\ub864 \ub418\uace0 \ubc9d\ud2bc\uc774 \uc0ac\ub77c\uc9c4\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE HTML>\n<html>\n<head>\n  <style>\n    body, html {\n      height: 100%; width: 100%; padding: 0; margin: 0;\n    }\n    #matrix {\n      width: 400px; margin: auto; overflow: auto; text-align: justify;\n    }\n    #arrowTop {\n      height: 9px; width: 14px; color: green;\n      position: fixed; top: 10px; left: 10px;\n      cursor: pointer;\n    }\n\n    #arrowTop::before {\n      content: \'\u25b2\';\n    }\n\n  </style>\n  <meta charset="utf-8">\n</head>\n\n<body>\n  <div id="matrix">\n    <script>\n      for (let i = 0; i < 2000; i++) document.writeln(i)\n    <\/script>\n  </div>\n\n  <div id="arrowTop" hidden></div>\n\n  <script>\n    arrowTop.onclick = function() {\n      window.scrollTo(pageXOffset, 0);\n      // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically\n    };\n\n    window.addEventListener(\'scroll\', function() {\n      arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);\n    });\n  <\/script>\n</body>\n</html>\n')),Object(r.b)("h2",{id:"load-visible-images"},"Load visible images"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\uc774\ubbf8\uc9c0\ub97c \uc989\uc2dc \ub85c\ub4dc\ud558\uc9c0 \uc54a\uace0, \uc790\ub9ac \ud45c\uc2dc\uc790\ub85c \ub300\uccb4\ud55c\ub2e4."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-html"},'<img src="placeholder.svg" width="128" height="128" data-src="real.jpg">\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\ud398\uc774\uc9c0\uac00 \uc0ac\uc6a9\uc790\uac00 \ubcfc \uc218 \uc788\ub294 \uc704\uce58\ub85c \uc2a4\ud06c\ub864 \ud558\uba74, \ubcc0\uacbd\ub418\uc5b4 src \uc5d0 dara-src \uc774\ubbf8\uc9c0\uac00 \ub85c\ub4dc\ub428"))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://plnkr.co/edit/a3ixa5sPNqQeNulM?p=preview&preview"},"\uc608\uc2dc")," \uc758 \uc870\uac74"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\ud398\uc774\uc9c0\uac00 \ub85c\ub4dc \ub420 \ub54c \ud654\uba74\uc5d0\uc788\ub294 \uc774\ubbf8\uc9c0\ub294 \uc2a4\ud06c\ub864\ud558\uae30 \uc804\uc5d0 \uc989\uc2dc\ub85c\ub4dc\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\uc77c\ubd80 \uc774\ubbf8\uc9c0\ub294 data-src. "),Object(r.b)("li",{parentName:"ol"},"\uc77c\ub2e8 \uc774\ubbf8\uc9c0\uac00 \ub85c\ub4dc \ub418\uba74 \uc2a4\ud06c\ub864 \uc778 / \uc544\uc6c3 \ud560 \ub54c \ub354 \uc774\uc0c1 \ub2e4\uc2dc \ub85c\ub4dc \ub418\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ol"},'\uac00\ub2a5\ud558\ub2e4\uba74 \ud604\uc7ac \uc704\uce58\ubcf4\ub2e4 \ud55c \ud398\uc774\uc9c0 \uc544\ub798 / \ub4a4\uc5d0\uc788\ub294 \uc774\ubbf8\uc9c0\ub97c "\ubbf8\ub9ac\ub85c\ub4dc"\ud558\ub294 \uace0\uae09 \uc194\ub8e8\uc158\uc744 \ub9cc\ub4dc\uc2ed\uc2dc\uc624.'),Object(r.b)("li",{parentName:"ol"},"\uc138\ub85c \uc2a4\ud06c\ub864 \ub9cc \ucc98\ub9ac\ud558\uace0 \uac00\ub85c \uc2a4\ud06c\ub864\uc740 \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),Object(r.b)("p",null,"\uc694\uc18c(\uc774\ubbf8\uc9c0)\uac00 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc774\ub294 \uc704\uce58\uc778\uc9c0 \uac80\uc0ac\ud55c\ub2e4. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function isVisible(elem) {\n  let coords = elem.getBoundingClientRect();\n  let windowHeight = document.documentElement.clientHeight;\n\n  // top elem edge is visible OR bottom elem edge is visible\n  let topVisible = coords.top > 0 && coords.top < windowHeight;\n  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;\n  return topVisible || bottomVisible;\n}\n\n/**\nA variant \nfunction isVisible(elem) {\n  let coords = elem.getBoundingClientRect();\n  let windowHeight = document.documentElement.clientHeight;\n\n  let extendedTop = -windowHeight;\n  let extendedBottom = 2 * windowHeight;\n\n  // top visible || bottom visible\n  let topVisible = coords.top > extendedTop && coords.top < extendedBottom;\n  let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;\n\n  return topVisible || bottomVisible;\n}\n*/\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function showVisible() {\n  for (let img of document.querySelectorAll('img')) {\n    let realSrc = img.dataset.src;\n    if (!realSrc) continue;\n\n    if (isVisible(img)) {\n      // disable caching\n      // this line should be removed in production code\n      realSrc += '?nocache=' + Math.random();\n\n      img.src = realSrc;\n\n      img.dataset.src = '';\n    }\n  }\n\n}\n\nwindow.addEventListener('scroll', showVisible);\nshowVisible();\n")))}p.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),l=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),u=p(n),s=o,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||r;return n?l.a.createElement(m,c(c({ref:t},b),{},{components:n})):l.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);