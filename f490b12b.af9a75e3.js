(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{430:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return s})),o.d(e,"metadata",(function(){return r})),o.d(e,"toc",(function(){return a})),o.d(e,"default",(function(){return c}));var n=o(3),l=(o(0),o(443));const s={Date:new Date("2020-10-24T00:00:00.000Z")},r={unversionedId:"javascript/browser/Browser_DOM_Tree",id:"javascript/browser/Browser_DOM_Tree",isDocsHomePage:!1,title:"Browser_DOM_Tree",description:"DOM Tree",source:"@site/docs/javascript/browser/Browser_DOM_Tree.md",slug:"/javascript/browser/Browser_DOM_Tree",permalink:"/docs/javascript/browser/Browser_DOM_Tree",version:"current",sidebar:"javascript",previous:{title:"Browser_DOM",permalink:"/docs/javascript/browser/Browser_DOM"},next:{title:"Browser_DOM_Search",permalink:"/docs/javascript/browser/Browser_DOM_Search"}},a=[],i={toc:a};function c({components:t,...e}){return Object(l.b)("wrapper",Object(n.a)({},i,e,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"dom-tree"},"DOM Tree"),Object(l.b)("p",null,"DOM \uc740 \uac1d\uccb4 \ud2b8\ub9ac\ub85c \uad6c\uc870\ud654 \ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 DOM tree \ub77c\uace0 \ubd80\ub978\ub2e4."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"![image](https://user-images.githubusercontent.com/31977543/97260641-8d363880-1860-11eb-909d-b8d462d79e0b.png)\n\n```html\n<!DOCTYPE HTML>\n<html>\n<head>\n  <title>\uc0ac\uc2b4\uc5d0 \uad00\ud558\uc5ec</title>\n</head>\n<body>\n  \uc0ac\uc2b4\uc5d0 \uad00\ud55c \uc9c4\uc2e4.\n</body>\n</html>\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<svg width="690" height="320"><g transform="translate(20,30)"><path class="link" d="M7,0L7,30L40.333333333333336,30" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M7,0L7,180L40.333333333333336,180" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M7,0L7,210L40.333333333333336,210" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,30L40.333333333333336,60L73.66666666666667,60" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,30L40.333333333333336,90L73.66666666666667,90" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,30L40.333333333333336,150L73.66666666666667,150" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M73.66666666666667,90L73.66666666666667,120L107,120" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,210L40.333333333333336,240L73.66666666666667,240" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HTML</text></g><g class="node" transform="translate(33.33333206176758,30)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HEAD</text></g><g class="node" transform="translate(66.66666412353516,60)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423\u2423\u2423</text></g><g class="node" transform="translate(66.66666412353516,90)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TITLE</text></g><g class="node" transform="translate(100,120)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc0ac\uc2b4\uc5d0 \uad00\ud558\uc5ec</text></g><g class="node" transform="translate(66.66666412353516,150)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423</text></g><g class="node" transform="translate(33.33333206176758,180)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423</text></g><g class="node" transform="translate(33.33333206176758,210)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">BODY</text></g><g class="node" transform="translate(66.66666412353516,240)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \n  \uc0ac\uc2b4\uc5d0 \uad00\ud55c \uc9c4\uc2e4.</text></g></g></svg>\n\n## Node Type\n\n- \ucd1d [12 \uac00\uc9c0](https://dom.spec.whatwg.org/#dom-node-attribute_node)\n\n1. `Node.ELEMENT_NODE`\n    - HTML \ud0dc\uadf8\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c0\uba70, DOM \ud2b8\ub9ac\ub97c \uad6c\uc131\ud558\ub294 \ube14\ub85d\n    - \ud14d\uc2a4\ud2b8 \ub178\ub4dc\ub97c \uc81c\uc678\ud55c \ud0dc\uadf8\ub178\ub4dc\n3. `Node.TEXT_NODE`\n    - \ubb38\uc790\uc5f4\n    - \uc790\uc2dd\ub178\ub4dc\ub97c \uac00\uc9c8 \uc218 \uc5c6\ub294 Leaf Node\n    - NewLine `\u21b5`, Space `\u2423`\n8. `Node.COMMENT_NODE`\n    - \uc8fc\uc11d\ub178\ub4dc\ub294 HTML \uc5d0 \ubb54\uac00 \uc788\ub2e4\uba74 \ubc18\ub4dc\uc2dc DOM \ud2b8\ub9ac\uc5d0 \ucd94\uac00\ub418\uc5b4\uc57c \ud55c\ub2e4\ub294 \uaddc\uce59\uc5d0 \uc758\ud574 DOM \uc5d0 \ucd94\uac00\ub41c \uac83\uc784.\n9. `Node.DOCUMENT_NODE`\n    - DOM \uc758 \uc9c4\uc785\uc810\n    - Document\n10. `Node.DOCUMENT_TYPE_NODE`\n    - DOCTYPE\n11. `Node.DOCUMENT_FRAGMENT_NODE`\n\n2, 4, 5, 6 \uc740 \ub354\uc774\uc0c1 \uc4f0\uc774\uc9c0 \uc54a\uc740 \uc22b\uc790. 7 \uc740 \uac70\uc758 \uc548\uc4f4\ub2e4\uace0 \ud55c\ub2e4.\n\n### Text Node\n#### \ud14d\uc2a4\ud2b8 \ub178\ub4dc \uc0dd\uc131\uc758 \uc608\uc678\n1. \uc5ed\uc0ac\uc801\uc778 \uc774\uc720\ub85c, `<head>` \uc774\uc804\uc758 space / newLine \uc740 \ubb34\uc2dc\ub428.\n2. HTML \uba85\uc138\uc11c -> \ubaa8\ub4e0 \ucee8\ud150\uce20\ub294 `body` \uc548\ucabd\uc5d0 \uc788\uc5b4\uc57c \ud568\n    - `</body>` \ub4a4\uc5d0 \ubb34\uc5b8\uac00\ub97c \ub123\ub354\ub77c\ub3c4 \uadf8 \ucf58\ud150\uce20\ub294 \uc790\ub3d9\uc73c\ub85c `body` \uc548\ucabd\uc73c\ub85c \uc774\ub3d9\n    - `</body>` \ub4a4\uc5d4 \uacf5\ubc31\uc774 \uc788\uc744 \uc218 \uc5c6\ub2e4.\n    \n#### \uacf5\ubc31\uc774 \uc5c6\ub294 \ud14d\uc2a4\ud2b8 \ub178\ub4dc\n```html\n<!DOCTYPE HTML>\n<html><head><title>\uc0ac\uc2b4\uc5d0 \uad00\ud558\uc5ec</title></head><body>\uc0ac\uc2b4\uc5d0 \uad00\ud55c \uc9c4\uc2e4.</body></html>\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<svg width="690" height="210"><g transform="translate(20,30)"><path class="link" d="M7,0L7,30L40.333333333333336,30" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M7,0L7,120L40.333333333333336,120" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,30L40.333333333333336,60L73.66666666666667,60" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M73.66666666666667,60L73.66666666666667,90L107,90" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,120L40.333333333333336,150L73.66666666666667,150" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HTML</text></g><g class="node" transform="translate(33.33333206176758,30)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HEAD</text></g><g class="node" transform="translate(66.66666412353516,60)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TITLE</text></g><g class="node" transform="translate(100,90)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc0ac\uc2b4\uc5d0 \uad00\ud558\uc5ec</text></g><g class="node" transform="translate(33.33333206176758,120)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">BODY</text></g><g class="node" transform="translate(66.66666412353516,150)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc0ac\uc2b4\uc5d0 \uad00\ud55c \uc9c4\uc2e4.</text></g></g></svg>\n    \n\n#### \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc5d0\uc11c\uc758 \ud14d\uc2a4\ud2b8 \ub178\ub4dc Space/newLine\n- \ubb38\uc790\uc5f4 \uc591 \ub05d \uacf5\ubc31 / \uacf5\ubc31\ub9cc \uc788\ub294 \ud14d\uc2a4\ud2b8 \ub178\ub4dc\n    - \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc5d0\uc11c \ubcf4\uc774\uc9c0 \uc54a\ub294\ub2e4.\n    - \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc5d0\uc11c \ud654\uba74\uc744 \ub35c \ucc28\uc9c0\ud558\uac8c \ub41c\ub2e4.\n- space / newLine \uc774 \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \uacf5\uac04\uc740 HTML \ubb38\uc11c\uac00 \ube0c\ub77c\uc6b0\uc800\uc0c1\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ud45c\ud604\ub418\ub294\uc9c0 \ub300\uac1c\ub294 \uc601\ud5a5\uc744 \ub07c\uce58\uc9c0 \uc54a\uc74c. \n\n\n### \uc790\ub3d9 \uad50\uc815\nDOM \uc0dd\uc131\uacfc\uc815\uc5d0\uc11c \uae30\ud615\uc801\uc778 HTML \uc744 \uc790\ub3d9 \uad50\uc815\n\n> TODO HTML \uba85\uc138\uc11c\uc640, \ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uc885\ub958\uc5d0 \ub530\ub77c\uc11c \ub2e4\ub978 \ub3d9\uc791\uc774 \ub098\uc624\uc9c0 \uc54a\uc744\uae4c?\n\n#### \ucd5c\uc0c1\uc704 \ud0dc\uadf8\ub294 \ud56d\uc0c1 `<html>` \uc774\uc5b4\uc57c \ud568 \n`html` \uc774 \uc5c6\ub294 \uacbd\uc6b0, \ubb38\uc11c \ucd5c\uc0c1\uc704\uc5d0 \uc774\ub97c \uc790\ub3d9\uc73c\ub85c \ub123\uc5b4\uc90c\n\n```html\n\x3c!--test.html--\x3e\n"\uc548\ub155\ud558\uc138\uc694."\n')),Object(l.b)("p",null,"\ud639\uc740 "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'\x3c!--test.html--\x3e\n<html>\n"\uc548\ub155\ud558\uc138\uc694."\n</html>\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc774\uc640 \uac19\uc774 \ub80c\ub354\ub9c1 \ub41c\ub2e4.\n```html\n<html>\n<head></head>\n<body>\uc548\ub155\ud558\uc138\uc694.</body>\n</html>\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<svg width="690" height="150"><g transform="translate(20,30)"><path class="link" d="M7,0L7,30L57,30" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M7,0L7,60L57,60" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,60L57,90L107,90" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HTML</text></g><g class="node" transform="translate(50,30)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HEAD</text></g><g class="node" transform="translate(50,60)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">BODY</text></g><g class="node" transform="translate(100,90)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc548\ub155\ud558\uc138\uc694.</text></g></g></svg>\n\n#### \ub2eb\ub294 \ud0dc\uadf8\uac00 \uc5c6\ub294 \uc5d0\ub7ec \ucc98\ub9ac\n```html\n<p>\uc548\ub155\ud558\uc138\uc694\n<li>\uc5c4\ub9c8\n<li>\uadf8\ub9ac\uace0\n<li>\uc544\ube60\n```\n    \n<svg width="690" height="360"><g transform="translate(20,30)"><path class="link" d="M7,0L7,30L40.333333333333336,30" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M7,0L7,60L40.333333333333336,60" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,60L40.333333333333336,90L73.66666666666667,90" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,60L40.333333333333336,150L73.66666666666667,150" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,60L40.333333333333336,210L73.66666666666667,210" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M40.333333333333336,60L40.333333333333336,270L73.66666666666667,270" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M73.66666666666667,90L73.66666666666667,120L107,120" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M73.66666666666667,150L73.66666666666667,180L107,180" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M73.66666666666667,210L73.66666666666667,240L107,240" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M73.66666666666667,270L73.66666666666667,300L107,300" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HTML</text></g><g class="node" transform="translate(33.33333206176758,30)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HEAD</text></g><g class="node" transform="translate(33.33333206176758,60)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">BODY</text></g><g class="node" transform="translate(66.66666412353516,90)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">P</text></g><g class="node" transform="translate(100,120)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc548\ub155\ud558\uc138\uc694.</text></g><g class="node" transform="translate(66.66666412353516,150)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">LI</text></g><g class="node" transform="translate(100,180)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc5c4\ub9c8</text></g><g class="node" transform="translate(66.66666412353516,210)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">LI</text></g><g class="node" transform="translate(100,240)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uadf8\ub9ac\uace0</text></g><g class="node" transform="translate(66.66666412353516,270)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">LI</text></g><g class="node" transform="translate(100,300)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc544\ube60</text></g></g></svg>\n\n#### `<table>` \uc5d0\ub294 \ud56d\uc0c1 `<tbody>` \uac00 \uc788\ub2e4.\nDOM \uba85\uc138\uc11c -> \ud14c\uc774\ube14\uc5d0 \ubc18\ub4dc\uc2dc `<tbody>` \uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n- HTML \uc5d0\uc11c `<tbody>` \ub97c \uc0dd\ub7b5\ud560 \uacbd\uc6b0 \ube0c\ub77c\uc6b0\uc800\uac00 \uc790\ub3d9\uc73c\ub85c \uad50\uc815\ud574\uc900\ub2e4.\n\n```html\n<table id="table"><tr><td>1</td></tr></table>\n```\n\n<svg width="600" height="200"><g transform="translate(20,30)"><path class="link" d="M7,0L7,30L32,30" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M32,30L32,60L57,60" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,60L57,90L82,90" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M82,90L82,120L107,120" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TABLE</text></g><g class="node" transform="translate(25,30)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TBODY</text></g><g class="node" transform="translate(50,60)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TR</text></g><g class="node" transform="translate(75,90)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TD</text></g><g class="node" transform="translate(100,120)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text 1</text></g></g></svg>\n\n\n### Comment node\n```html\n<!DOCTYPE HTML>\n<html>\n<body>\n  \uc0ac\uc2b4\uc5d0 \uad00\ud55c \uc9c4\uc2e4.\n  <ol>\n    <li>\uc0ac\uc2b4\uc740 \ub611\ub611\ud569\ub2c8\ub2e4.</li>\n    \x3c!-- comment --\x3e\n    <li>\uadf8\ub9ac\uace0 \uc794\uaf80\ub97c \uc798 \ubd80\ub9ac\uc8e0!</li>\n  </ol>\n</body>\n</html>\n```\n\n<svg width="690" height="500"><g transform="translate(20,30)"><path class="link" d="M7,0L7,30L32,30" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M7,0L7,60L32,60" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M32,60L32,90L57,90" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M32,60L32,120L57,120" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M32,60L32,420L57,420" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,120L57,150L82,150" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,120L57,180L82,180" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,120L57,240L82,240" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,120L57,270L82,270" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,120L57,300L82,300" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,120L57,330L82,330" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M57,120L57,390L82,390" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M82,180L82,210L107,210" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><path class="link" d="M82,330L82,360L107,360" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HTML</text></g><g class="node" transform="translate(25,30)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HEAD</text></g><g class="node" transform="translate(25,60)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">BODY</text></g><g class="node" transform="translate(50,90)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \n  \uc0ac\uc2b4\uc5d0 \uad00\ud55c \uc9c4\uc2e4.\n    </text></g><g class="node" transform="translate(50,120)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">OL</text></g><g class="node" transform="translate(75,150)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423\u2423\u2423\u2423\u2423</text></g><g class="node" transform="translate(75,180)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">LI</text></g><g class="node" transform="translate(100,210)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uc0ac\uc2b4\uc740 \ub611\ub611\ud569\ub2c8\ub2e4.</text></g><g class="node" transform="translate(75,240)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423\u2423\u2423\u2423\u2423</text></g><g class="node" transform="translate(75,270)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(207, 206, 149); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#comment comment</text></g><g class="node" transform="translate(75,300)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423\u2423\u2423\u2423\u2423</text></g><g class="node" transform="translate(75,330)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">\u25be </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">LI</text></g><g class="node" transform="translate(100,360)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \uadf8\ub9ac\uace0 \uc794\uaf80\ub97c \uc798 \ubd80\ub9ac\uc8e0!</text></g><g class="node" transform="translate(75,390)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423\u2423\u2423</text></g><g class="node" transform="translate(50,420)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text \u21b5\u2423\u2423\u21b5</text></g></g></svg>\n    \n\n\nReference\n--\n- https://gitlab.com/siots-study/topics/-/wikis/dom\n- [DOM tree](https://ko.javascript.info/dom-nodes)\n- [DOM Search](https://ko.javascript.info/dom-navigation)\n- https://www.zerocho.com/category/JavaScript/post/573b4165a54b5e8427432948\n\n\n\n')))}c.isMDXComponent=!0},443:function(t,e,o){"use strict";o.d(e,"a",(function(){return p})),o.d(e,"b",(function(){return g}));var n=o(0),l=o.n(n);function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,l=function(t,e){if(null==t)return{};var o,n,l={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||(l[o]=t[o]);return l}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}var c=l.a.createContext({}),y=function(t){var e=l.a.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},p=function(t){var e=y(t.components);return l.a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},x=l.a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,s=t.originalType,r=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=y(o),x=n,g=p["".concat(r,".").concat(x)]||p[x]||d[x]||s;return o?l.a.createElement(g,a(a({ref:e},c),{},{components:o})):l.a.createElement(g,a({ref:e},c))}));function g(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=o.length,r=new Array(s);r[0]=x;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:n,r[1]=a;for(var c=2;c<s;c++)r[c]=o[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,o)}x.displayName="MDXCreateElement"}}]);