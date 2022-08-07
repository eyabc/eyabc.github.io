(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{409:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),s=n(7),a=(n(0),n(482)),l={title:"5-3 Style Rule"},c={unversionedId:"css/css-rendering/style_rule",id:"css/css-rendering/style_rule",isDocsHomePage:!1,title:"5-3 Style Rule",description:"CLASSES",source:"@site/docs/css/css-rendering/style_rule.md",slug:"/css/css-rendering/style_rule",permalink:"/docs/css/css-rendering/style_rule",version:"current",lastUpdatedAt:1626882853,sidebar:"css",previous:{title:"5-2 Vendor Prefix",permalink:"/docs/css/css-rendering/vendor_prefix"},next:{title:"5-4 Keyframes/Keyframe Rule",permalink:"/docs/css/css-rendering/keyframe_rule"}},i=[{value:"CLASSES",id:"classes",children:[]},{value:"Style \uc758 \ucd94\uc0c1\ud654",id:"style-\uc758-\ucd94\uc0c1\ud654",children:[{value:"style \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uae30 \uc804\uc5d0 \ud544\uc694\ud55c utility",id:"style-\ud074\ub798\uc2a4\ub97c-\ub9cc\ub4e4\uae30-\uc804\uc5d0-\ud544\uc694\ud55c-utility",children:[]},{value:"\ud45c\uc900\uc774\ub984\uc744 \uc8fc\uba74, \uc9c0\uc6d0\ud558\ub294 \uc9c4\uc9dc\uc774\ub984\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218",id:"\ud45c\uc900\uc774\ub984\uc744-\uc8fc\uba74-\uc9c0\uc6d0\ud558\ub294-\uc9c4\uc9dc\uc774\ub984\uc744-\ubc18\ud658\ud558\ub294-\ud568\uc218",children:[]}]},{value:"Rule \uc758 \ucd94\uc0c1\ud654",id:"rule-\uc758-\ucd94\uc0c1\ud654",children:[]},{value:"Sheet \uc758 \ucd94\uc0c1\ud654",id:"sheet-\uc758-\ucd94\uc0c1\ud654",children:[]}],o={toc:i};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"classes"},"CLASSES"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/122639200-8df34600-d133-11eb-9aeb-4e555144c1c6.png",alt:"image"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/121343561-cdfd4080-c95d-11eb-9558-25e130cfffc3.png",alt:"image"})),Object(a.b)("h2",{id:"style-\uc758-\ucd94\uc0c1\ud654"},"Style \uc758 \ucd94\uc0c1\ud654"),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"STYLE \uc744 \ucd94\uc0c1\ud654 \ud574\uc11c \ud558\ub098\uc758 \uac1d\uccb4\ub85c \ub9cc\ub4e4 \uac83\uc774\ub2e4.      ")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"style \uc5d0\ub2e4\uac00 \ub0a0\ub85c \uc18d\uc131\uc744 prefix \ub97c \ub123\uc73c\uba74 vendor prefix \ub97c \ud574\uacb0\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc774\ub2e4."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html",metastring:"{10}","{10}":!0},'<style id="s">\n.test { background: #ff0 }\n</style>\n<script>\nconst el = document.querySelector("#s");\nconst sheet = el.sheet;\nconst rules = sheet.cssRules;\nconst rule = rules[0];\nconsole.log(rule.selectorText);\nconsole.log(rule.style.background); // \uad00\uc2ec\uc0ac\n<\/script> \n')),Object(a.b)("h3",{id:"style-\ud074\ub798\uc2a4\ub97c-\ub9cc\ub4e4\uae30-\uc804\uc5d0-\ud544\uc694\ud55c-utility"},"style \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uae30 \uc804\uc5d0 \ud544\uc694\ud55c utility"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const Style = (() => {\n  const prop = new Map, prefix = 'webkit,moz,ms,chrome,o,khtml'.split(',');\n  const NONE = Symbol();\n  const BASE = document.body.style;\n})();\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"vendor prefix \ubb38\uc790\uc5f4\uc774 \ud544\uc694"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\ub9c8\ub2e4 \ub2e4\uc591\ud55c Vendor prefix \ubb38\uc790\uc5f4\uc774 \uc788\ub2e4."),Object(a.b)("li",{parentName:"ul"},"major \ud558\uc9c0 \uc54a\ub294 \uac83\ub4e4\uae4c\uc9c0 \ud3ec\ud568\ud558\uba74 20\uc885\uc774 \ub118\ub294\ub2e4."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"map \uc740 \uc9c4\uc9dc\uc18d\uc131\uacfc \uac00\uc9dc\uc18d\uc131\uc744 \ubb36\ub294 \uc5ed\ud560"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"map \uc758 key : \uc77c\ubc18\uc801\uc73c\ub85c \uc4f0\uace0 \uc788\ub294 \uc18d\uc131(background... )"),Object(a.b)("li",{parentName:"ul"},"\uac12: vendor prefix \ud3ec\ud568\ud574\uc11c \uc9c0\uc6d0\ud558\ub294 \ubcc0\ud658\ub41c \uc9c4\uc9dc \uc774\ub984"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"NONE "),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'\uc2ec\ubcfc\ub85c \uc815\uc758\ud558\uc600\ub294\ub370, "\ube0c\ub77c\uc6b0\uc800\uac00 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc74c"\uc744 \ud45c\uae30\ud558\uae30 \uc704\ud55c \uc7a5\uce58')))),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"document.body.style: \uc2e4\ud589 \uc911\uc5d0, Vendor prefix \ub97c \ud310\ubcc4\ud574\uc8fc\ub294 \uac1d\uccb4  ")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\uadf8\ub7f0\ub370 Vendor prefix \ub97c \uc2e4\ud589 \ub3c4\uc911\uc5d0\ub9cc \uc54c\uc218 \uc788\ub2e4.\n\ub204\uad6c\ud55c\ud14c \uc774\uac83\uc744 \ubb3c\uc5b4\ubcfc \uc218 \uc788\uc744\uae4c?"),Object(a.b)("p",{parentName:"div"},"\ubb3c\uc5b4\ubcfc \ub300\uc0c1\uc740 ",Object(a.b)("strong",{parentName:"p"},"\ubaa8\ub4e0 \ube0c\ub77c\uc6b0\uc800\uac00 \uac00\uc9c0\uace0 \uc788\ub294")," document \uc758 body \uc758 style \uc774\ub2e4."),Object(a.b)("p",{parentName:"div"},"\ub9cc\uc57d document.body.style \uc774 \uadf8 \uc18d\uc131\uc744 \uac16\uace0 \uc788\ub2e4\ub77c\uba74",Object(a.b)("br",{parentName:"p"}),"\n","\uc774 \uc18d\uc131\uc740 \uc874\uc7ac\ud560 \uac83\uc774\ub2e4. "))),Object(a.b)("p",null,"\ud574\uacb0\ud560 \uac83\uc740 \ub450\uac00\uc9c0 \uc774\ub2e4. "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"vendor prefix (runtime fetch)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"vendor prefix \ub97c \ub7f0\ud0c0\uc784\uc5d0 fetch \ud558\uae30 \uc704\ud574\uc11c BASE (body \uc5d0 \uc788\ub294 style \uac1d\uccb4)\ub97c \uc774\uc6a9\ud560 \uac83"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"unsupported property (graceful fail)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc18d\uc131\uc740 \ubd80\ub4dc\ub7fd\uac8c \uc2e4\ud328\ud558\uae30 \uc704\ud574\uc11c NONE \uc744 \uc0ac\uc6a9 \ud560 \uac83")))),Object(a.b)("h3",{id:"\ud45c\uc900\uc774\ub984\uc744-\uc8fc\uba74-\uc9c0\uc6d0\ud558\ub294-\uc9c4\uc9dc\uc774\ub984\uc744-\ubc18\ud658\ud558\ub294-\ud568\uc218"},"\ud45c\uc900\uc774\ub984\uc744 \uc8fc\uba74, \uc9c0\uc6d0\ud558\ub294 \uc9c4\uc9dc\uc774\ub984\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218"),Object(a.b)("p",null,"border-radius \ub97c \ubcf4\ub0c8\ub294\ub370        "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc2e4\uc81c\ub85c \ube0c\ub77c\uc6b0\uc800\uac00 \uc9c0\uc6d0\ud558\uba74 \uadf8 \uc774\ub984\uc744 \uadf8\ub300\ub85c \ubc1b\uc544\uc57c \ud558\uace0"),Object(a.b)("li",{parentName:"ul"},"webkit-border-radius \uac00 \uc788\uc73c\uba74 webkit-border-radius \ub97c \ubc1b\uc544\uc57c \ud55c\ub2e4."),Object(a.b)("li",{parentName:"ul"},"IE \uac19\uc774 \uc18d\uc131\uc774 \uc5c6\uc73c\uba74 NONE \uc73c\ub85c \ubc18\ud658\ud560 \uac83\uc774\ub2e4. ")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{5,17,22}","{5,17,22}":!0},"const Style = (() => {\n  const prop = new Map, prefix = 'webkit,moz,ms,chrome,o,khtml'.split(',');\n  const NONE = Symbol();\n  const BASE = document.body.style;\n  const getKey = key => {\n    // prop \uc548\uc5d0 map \uc73c\ub85c \uce90\uc2dc\ub97c \uc7a1\uc544\ub450\uc5c8\ub2e4.\n    if (prop.has(key)) return prop.get(key);   \n    // \ub0b4\uac00 \ubcf4\ub0b8 \ud0a4\uac00 BASE \uc5d0 \uc874\uc7ac\ud558\ub294\uac00? body-style \uc5d0 border radius \uac00 \uc788\uc744 \uacbd\uc6b0 \uc774\uc2dc\uc810\uc5d0 \uce90\uc2dc\ub97c \uc7a1\ub294\ub2e4.\n    if (key in BASE) prop.set(key, key);\n\n    // body-style \uc5d0 border-radius\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc73c\uba74?\n    else if (!prefix.some(v => {\n      // prefix \ub97c \ubd99\uc778 \uc18d\uc131\uc740 \uc874\uc7ac\ud558\ub294\uac00?\n      const newKey = v + key[0].toUpperCase() + k.substr(1);  // webkitBackground \n      if(newKey in BASE) {\n        prop.set(key, newKey);\n        key = newKey;\n        return true;\n      } else return false;\n    })) {\n      prop.set(key, NONE);\n      key = NONE; // prefix \ub85c\ub3c4 \uc548\ub418\uba74 \uc5c6\ub294 \ud0a4 !;\n    }\n  }\n})();\n")),Object(a.b)("p",null,"\uc704 \ub0b4\uc6a9\uc744 \ubc14\ud0d5\uc73c\ub85c class \ub97c \ub9cc\ub4e4 \uac83\uc778\ub370,"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript",metastring:"title:unsupported property(graceful fail)","title:unsupported":!0,"property(graceful":!0,"fail)":!0},"const Style = (() => {\n  const prop = new Map, prefix = 'webkit,moz,ms,chrome,o,khtml'.split(',');\n  const NONE = Symbol();\n  const BASE = document.body.style;\n  const getKey = key => { /*...*/ }\n  return class {\n    constructor(style) { this._style = style; } \n    get(key) {\n      key = getKey(key);\n      if (key === NONE) return null;\n      return this._style[key];\n    }\n    set(key, val) {\n        key = getKey(key);\n        if(key !== NONE) this._style[key] = val;\n        return this;  \n    }\n  };\n})();\n")),Object(a.b)("p",null,"\uc6b0\ub9ac\uc758 \uad00\uc2ec\uc0ac\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"rule.style")," \uc774\ub2e4.\n\uc0dd\uc131\uc790\uc5d0\uc11c rule.style \uc744 \uac16\uace0 \ud0dc\uc5b4\ub09c\ub2e4.",Object(a.b)("br",{parentName:"p"}),"\n","rule.style \ub97c \ub798\ud551\ud558\uace0 \uc880\ub354 \uc27d\uac8c \uc870\uc791\ud560 \uc218 \uc788\ub294 \ud074\ub798\uc2a4\uac00 \ub41c\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const style = new Style(rule.style);\nstyle.set('borderRadius', '20px')  // borderRadius \uac00 prefix \uac00 \uc788\ub4e0 \uc5c6\ub4e0 \uc798 \uc791\ub3d9 \ud560 \uac83\uc784.\n     .set('boxShadow', '0 0 0 10px red');\n")),Object(a.b)("h2",{id:"rule-\uc758-\ucd94\uc0c1\ud654"},"Rule \uc758 \ucd94\uc0c1\ud654"),Object(a.b)("p",null,"rule \uc740 type, selectortext, style \uc744 \uac10\uc2f8\uace0 \uc788\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/121343561-cdfd4080-c95d-11eb-9558-25e130cfffc3.png",alt:"image"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const Rule = class {\n  constructor(rule) {\n    this._rule = rule;\n    this._style = new Style(rule.style);\n  }\n  get(key) {\n    return this._style.get(key); \n  }\n  set(key, val) {\n    this._style.set(key, val);\n    return this;\n  }\n}\n\nconst rule = new Rule(el.sheet.cssRules[0]);\nrule.set('borderRadius', '20px')  \n    .set('boxShadow', '0 0 0 10px red');\n")),Object(a.b)("h2",{id:"sheet-\uc758-\ucd94\uc0c1\ud654"},"Sheet \uc758 \ucd94\uc0c1\ud654"),Object(a.b)("p",null,"\uc774 \uac1d\uccb4\uc758 \uc8fc\uc694\ud55c \uae30\ub2a5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"rule \uc758 add / remove ")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uae30\uc874\uc758 sheet \uc758 rule insert / delete"',title:'"\uae30\uc874\uc758',sheet:!0,"\uc758":!0,rule:!0,insert:!0,"/":!0,'delete"':!0},"const sheet = el.sheet;\nconst rules = sheet.cssRules;\n\nsheet.insertRule('.red{, background:red}', rule.length);\nsheet.deleteRule(rules.length - 1);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Sheet \uc758 \ucd94\uc0c1\ud654"',title:'"Sheet',"\uc758":!0,'\ucd94\uc0c1\ud654"':!0},"const Sheet = class {\n  constructor(sheet) {\n    this._sheet = sheet;\n    this._rule = new Map;\n  }\n  add(selector) {\n    const index = this._sheet.cssRules.length;\n    this._sheet.insertRule(`${selector}{}`, index);\n    const cssRule = this._sheet.cssRules[index];\n    const rule = new Rule(cssRule); \n    this._rules.set(selector, rule);\n    return rule;\n  }\n  remove(selector) {\n    if (!this._rules.contains(selector)) return;\n    const rule = this._rules.get(selector)._rule;\n    Array.from(this._sheet.cssRules).some((cssRule, index) => {\n      if (cssRule === rule._rule) {\n        this._sheet.deleteRule(index);\n        return true;\n      }\n    })\n  }\n  get(selector) {\n    return this._rules.get(selector);\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title></title>\n  <style></style>\n</head>\n<body>\n  <div class="test">test</div>\n</body>\n</html>\n')),Object(a.b)("p",null,"0 \ubc88 \uc778\ub371\uc2a4\ub294 document \uae30\ubcf8\uac12\uc774\ub2e4. html \uc774 \uc788\uc73c\uba74 0 \ubc88\uc740 \ud56d\uc0c1 \uc874\uc7ac\ud55c\ub2e4\uace0 \ud55c\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const sheet = new Sheet(document.styleSheets[1]);\nsheet.add('body')\n      .set('background', '#f00');\nsheet.add('.test')\n      .set('cssText', `\n  width: 200px;\n  border: 1px solid #fff;\n  color: #000;\n  background: #fff\n`);\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"cssText")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\ud2b9\uc218\ud55c key \uc778 cssText \uc758 \uac12\uc744 set \ud558\uba74\n\ube0c\ub77c\uc6b0\uc800\uac00 \uc54c\uc544\uc11c parsing \ud574\uc11c \ub123\uc5b4\uc900\ub2e4.",Object(a.b)("br",{parentName:"p"}),"\n","javascript \uc18d\uc131\uc774\ub984\uc774 \uc544\ub2cc css \uc18d\uc131\uc774\ub984\uc744 \uadf8\ub300\ub85c \uc4f8\uc218 \uc788\ub2e4\ub294 \uc7a5\uc810",Object(a.b)("br",{parentName:"p"}),"\n","\ubb3c\ub860 \uc774 \ubc29\uc2dd\uc740 style sheet \uac00 \ud558\ub098\ud558\ub098 \ud0a4\ub97c \ub9e4\ud551\ud574\uc8fc\ub294 \uae30\ub2a5\uc774 \ubb34\ub825\ud654 \ub41c\ub2e4.\n(\uadc0\ucc2e\uc544\uc11c \ud588\ub2e4)"))))}b.isMDXComponent=!0},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=s.a.createContext({}),b=function(e){var t=s.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return s.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?s.a.createElement(m,c(c({ref:t},o),{},{components:n})):s.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<a;o++)l[o]=n[o];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);