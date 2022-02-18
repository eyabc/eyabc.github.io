(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),b=n(7),l=(n(0),n(447)),c={title:"Strategy"},a={unversionedId:"javascript/OOP/OOP_strategy",id:"javascript/OOP/OOP_strategy",isDocsHomePage:!1,title:"Strategy",description:"Goal",source:"@site/docs/javascript/OOP/OOP_strategy.md",slug:"/javascript/OOP/OOP_strategy",permalink:"/docs/javascript/OOP/OOP_strategy",version:"current",sidebar:"javascript",previous:{title:"MVVM Role Design",permalink:"/docs/javascript/OOP/OOP_mvvm_role_design"},next:{title:"Observer 1",permalink:"/docs/javascript/OOP/OOP_observer"}},i=[{value:"Goal",id:"goal",children:[]},{value:"Strategy \uc758 \uc758\ubbf8",id:"strategy-\uc758-\uc758\ubbf8",children:[]},{value:"Structure &amp; control",id:"structure--control",children:[]},{value:"\uac1d\uccb4\uc758 \uc0c1\ud0dc\uce21\uba74\uacfc \ud589\ub3d9\uce21\uba74",id:"\uac1d\uccb4\uc758-\uc0c1\ud0dc\uce21\uba74\uacfc-\ud589\ub3d9\uce21\uba74",children:[{value:"\uad6c\uc870\uc801 \uce21\uba74",id:"\uad6c\uc870\uc801-\uce21\uba74",children:[]},{value:"\uc804\ub7b5\uc801 \uce21\uba74",id:"\uc804\ub7b5\uc801-\uce21\uba74",children:[]}]},{value:"Composition",id:"composition",children:[{value:"(\uc804\ub7b5) \uac1d\uccb4\uc758 \ub3c4\ucd9c",id:"\uc804\ub7b5-\uac1d\uccb4\uc758-\ub3c4\ucd9c",children:[]},{value:"<strong>\uc758\uc874\uc131</strong> \ubc1c\uc0dd",id:"\uc758\uc874\uc131-\ubc1c\uc0dd",children:[]},{value:"Dependency Injection",id:"dependency-injection",children:[]}]},{value:"Template Method",id:"template-method",children:[{value:"\ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc process",id:"\ud15c\ud50c\ub9bf-\uba54\uc11c\ub4dc-process",children:[]},{value:"\ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc\uc758 Hook",id:"\ud15c\ud50c\ub9bf-\uba54\uc11c\ub4dc\uc758-hook",children:[]}]},{value:"\uac1d\uccb4 \uc0ac\uc774\uc758 \uc758\uc874\uc131 \ub610\ub294 \uacc4\uc57d",id:"\uac1d\uccb4-\uc0ac\uc774\uc758-\uc758\uc874\uc131-\ub610\ub294-\uacc4\uc57d",children:[{value:"\uc54c\uace0\ub9ac\uc998\uc758 \uc77c\ubc18\ud654(\ucd94\uc0c1\ud654), \uc81c\ub124\ub9ad \uc54c\uace0\ub9ac\uc998",id:"\uc54c\uace0\ub9ac\uc998\uc758-\uc77c\ubc18\ud654\ucd94\uc0c1\ud654-\uc81c\ub124\ub9ad-\uc54c\uace0\ub9ac\uc998",children:[]}]},{value:"\uc804\ub7b5 \ud328\ud134",id:"\uc804\ub7b5-\ud328\ud134",children:[]},{value:"\ub2e8\ubc29\ud5a5 \uc758\uc874\uc131",id:"\ub2e8\ubc29\ud5a5-\uc758\uc874\uc131",children:[]},{value:"\uac1d\uccb4\ub9dd\uc758 \uad6c\uc131 3\uac00\uc9c0",id:"\uac1d\uccb4\ub9dd\uc758-\uad6c\uc131-3\uac00\uc9c0",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"goal"},"Goal"),Object(l.b)("p",null,"\uae30\uc874\uc758 Binder \ub3d9\uc791 \ubc29\uc2dd \uc911, \ucf54\ub4dc\ub85c \ud655\uc815\ub418\uc788\ub294 \ubd80\ubd84\uc744 \uc804\ub7b5\uc801\uc73c\ub85c \ube7c\ub0b4\ub294 \ubc29\ubc95\ub4e4"),Object(l.b)("h2",{id:"strategy-\uc758-\uc758\ubbf8"},"Strategy \uc758 \uc758\ubbf8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ub3c4\uba54\uc778, knowledge \uc9c0\uc2dd \ub85c \ub300\uccb4 \uac00\ub2a5\ud55c \uac83"),Object(l.b)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c \uc9c0\uc2dd\uc801\uc778 \ubd80\ubd84"),Object(l.b)("li",{parentName:"ul"},"\uadf8 \ub3c4\uba54\uc778 \ub9cc\uc758 \uc9c0\uc2dd"),Object(l.b)("li",{parentName:"ul"},"(\ubc94\uc6a9\uc801\uc73c\ub85c) \uc54c\uace0\ub9ac\uc998\uc774 \ub420 \uc218 \uc788\ub2e4 ")),Object(l.b)("p",null,"\ud504\ub85c\uadf8\ub7a8\uc744 \uc9f0\uc744 \ub54c, \uc5b4\ub5a4 \ubd80\ubd84\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud55c \ud575\uc2ec\uc801\uc778 \uc9c0\uc2dd \ubd80\ubd84\uc774\ub2e4."),Object(l.b)("p",null,"\uadf8 \ubb38\uc81c\uac00 \ubcf4\ub2e4 \ucd94\uc0c1\uc801\uc778 \uac1c\ub150\uc5d0\uc11c \ubc94\uc6a9\uc73c\ub85c \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4\uace0\ud558\uba74 \uc9c0\uc2dd\ubd80\ubd84\ub9cc \ubc14\uafd4\uc8fc\uba74 \uc5bc\ub9c8\ub4e0\uc9c0 \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4. "),Object(l.b)("p",null,"\uc9c0\ub09c \uc2dc\uac04\uc758 Binder \ucf54\ub4dc\uc774\ub2e4.\n\uc774 \ucf54\ub4dc\ub294 \ud558\ub098\ub85c \ubcf4\uc774\uaca0\uc9c0\ub9cc \uc0ac\uc2e4\uc740 \uadf8\ub807\uc9c0 \uc54a\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111868967-53f19700-89c0-11eb-9f52-23f2b79bcf81.png",alt:"image"})),Object(l.b)("h2",{id:"structure--control"},"Structure & control"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Binder \uc758 Field"),Object(l.b)("li",{parentName:"ol"},"Field \uc758 \uad6c\uc870"),Object(l.b)("li",{parentName:"ol"},"\uad6c\uc870\ub97c \ub8e8\ud504\ub3cc\uace0 \uc788\ub294 \ubd80\ubd84")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"\uc790\ub8cc\uad6c\uc870\ub97c \uac16\uace0 \uc788\ub294 \uac1d\uccb4")," \u2192 \uc21c\ud68c "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111868984-6b308480-89c0-11eb-878c-d5c06baaf459.png",alt:"image"})),Object(l.b)("h2",{id:"\uac1d\uccb4\uc758-\uc0c1\ud0dc\uce21\uba74\uacfc-\ud589\ub3d9\uce21\uba74"},"\uac1d\uccb4\uc758 \uc0c1\ud0dc\uce21\uba74\uacfc \ud589\ub3d9\uce21\uba74"),Object(l.b)("p",null,"\uac1d\uccb4\uc9c0\ud5a5\uc5d0\uc11c \uac1d\uccb4\ub294,"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc790\uc2e0\uc758 \uc0c1\ud0dc\ub97c \uac16\uace0 \uc790\uc2e0\ub9cc\uc758 \ud589\uc704 \ud55c\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uc0c1\ud0dc\uc640 \ud589\uc704\ub97c \ubd84\ub9ac\ud560 \uc218 \uc5c6\ub2e4. ")),Object(l.b)("h3",{id:"\uad6c\uc870\uc801-\uce21\uba74"},"\uad6c\uc870\uc801 \uce21\uba74"),Object(l.b)("p",null,"\ud544\ub4dc\uc758 \uc790\ub8cc \uad6c\uc870 \ub54c\ubb38\uc5d0 \uc0dd\uaca8\ub098\ub294 \uad6c\uc870 "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"items \uad6c\uc870 Set, \u2192 forEach \ub8e8\ud504 \uc21c\ud68c "),Object(l.b)("li",{parentName:"ul"},"viewModel \uad6c\uc870 \u2192 styles, events, properties, attributes ")),Object(l.b)("h3",{id:"\uc804\ub7b5\uc801-\uce21\uba74"},"\uc804\ub7b5\uc801 \uce21\uba74"),Object(l.b)("p",null,"\ud2b9\uc815 \ub3c4\uba54\uc778\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud55c \uc54c\uace0\ub9ac\uc998 \uc9c0\uc2dd \ud639\uc740 \ub3c4\uba54\uc778"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\uc804\ub7b5 \ubd80\ubd84\uc744 \uc678\uc7ac\ud654 \ud560 \uac83\uc774\ub2e4."),"   "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uc804\ub7b5\ubd80\ubd84\uc758 \uc77c\ubd80\ub294 \uad6c\uc870\uc758 \ubb38\uc81c\uc5d0 \ud56d\uc0c1 \uad00\uc5ec\ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc808\ub300 \ubd84\ub9ac\ub418\uc5b4 \uc804\ub7b5\uc774 \uc791\ub3d9\ub420 \uc218 \uc5c6\ub2e4. ")),Object(l.b)("p",null,"\uc5b8\uc81c\ub098 \uc0c1\ud0dc\uc758 \uc790\ub8cc\uad6c\uc870\ub97c \uac16\uace0 \uc788\uc744 \ub54c\ub9cc \uc804\ub7b5\uc774 \uc131\ub9bd\ud55c\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud2b9\uc815\ud55c \uc790\ub8cc\uad6c\uc870 \u2192 \ud2b9\uc815\ud55c \uc54c\uace0\ub9ac\uc998\uacfc \ub9e4\ud551 "),Object(l.b)("li",{parentName:"ul"},"\uc804\ub7b5\uc740 \ud2b9\uc815\ud55c \ub370\uc774\ud130\ub97c \uc9c0\uce6d\ud560 \uc218 \uc788\ub294 \ud3ec\uc778\ud130\ub97c \uac16\uace0\uc788\uc5b4\uc57c \ub9e4\ud551\ud560 \uc218 \uc788\ub294 \uc54c\uace0\ub9ac\uc998\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4.\n",Object(l.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/31977543/111869101-04f83180-89c1-11eb-8a22-b4045a0d4474.png",alt:"image"}))),Object(l.b)("h2",{id:"composition"},"Composition"),Object(l.b)("p",null,"\uc774\uac83\uc740 \ud754\ud788 \uc9dc\uace0 \uc788\ub294 \ucf54\ub4dc\ub85c\ubd80\ud130 ",Object(l.b)("strong",{parentName:"p"},"\uc804\ub7b5\uc744 \ube7c\ub0b4\ub294 \ubc1c\uc0c1\ubc95"),"\uc758 \uc544\uc774\ub514\uc5b4\uac00 \ub41c\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uac1d\uccb4\uc9c0\ud5a5\uc5d0\uc11c \uc774 \ubd80\ubd84\uc744 \ucef4\ud3ec\uc9c0\uc158\uc774\ub77c\ub294 \uac83\uc73c\ub85c \ud574\uacb0 \ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\ucf54\ub4dc\ub97c \uac1d\uccb4\ub85c \ubc14\uafb8\ub294 \uac83"))),Object(l.b)("p",null,"\ucf54\ub4dc\ub97c \uc218\uc815\ud558\ub294 \ud589\uc704 \u2192 \ud68c\uadc0 \ud14c\uc2a4\ud2b8\ub97c \ud574\uc57c\ud55c\ub2e4.     "),Object(l.b)("h3",{id:"\uc804\ub7b5-\uac1d\uccb4\uc758-\ub3c4\ucd9c"},"(\uc804\ub7b5) \uac1d\uccb4\uc758 \ub3c4\ucd9c"),Object(l.b)("p",null,"\uc804\ub7b5\uc774 \uad6c\uc870\uc640\uc758 \uad00\uacc4\ub97c \uc0dd\uac01\ud558\uace0 \ucf54\ub4dc\ub97c \uac1d\uccb4\ub85c \ubc14\uafbc\ub2e4."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\uc778\ud130\ud398\uc774\uc2a4\uc640 \ud074\ub798\uc2a4\ub85c \ub3c4\ucd9c\ud574\uc57c \ud55c\ub2e4.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111873524-fe26ea00-89d3-11eb-8d36-1955427d0ff9.png",alt:"image"})),Object(l.b)("h3",{id:"\uc758\uc874\uc131-\ubc1c\uc0dd"},Object(l.b)("strong",{parentName:"h3"},"\uc758\uc874\uc131")," \ubc1c\uc0dd"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Code")," \ub294 \uac1d\uccb4 ",Object(l.b)("em",{parentName:"p"},"Object")," \uc758 \ud0c0\uc785\uc744 ",Object(l.b)("strong",{parentName:"p"},"\uc54c\uc57c\uc57c \ud55c\ub2e4.")),Object(l.b)("h4",{id:"\uac1d\uccb4\uc9c0\ud5a5\uc5d0\uc11c-\uc758\uc874\uc131-\ubc1c\uc0dd\uc774\uc720"},"\uac1d\uccb4\uc9c0\ud5a5\uc5d0\uc11c \uc758\uc874\uc131 \ubc1c\uc0dd\uc774\uc720"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc704\uc784 X"),Object(l.b)("li",{parentName:"ul"},"\uc804\ub7b5\uc744 \uc678\ubd80 \uac1d\uccb4\uc758 \ub3c4\uc6c0\uc73c\ub85c \ud574\uacb0\ud558\uae30 \uc704\ud568")),Object(l.b)("h3",{id:"dependency-injection"},"Dependency Injection"),Object(l.b)("p",null,"\uc758\uc874\uc131\uc744 \ub0b4\ubd80\uac00 \uc544\ub2cc \uc678\ubd80\uc5d0\uc11c \uacf5\uae09\ubc1b\ub294 \uac83\uc774 \uc88b\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ub0b4\ubd80\uc5d0\uc11c \uacf5\uae09\ubc1b\ub294 \uacbd\uc6b0, \ub0b4\ubd80 \ubcc0\ud654\uac00 \uc0dd\uae38 \ub54c \ub9c8\ub2e4 \ucf54\ub4dc\ub97c \uc218\uc815\ud574\uc57c \ud55c\ub2e4.")),Object(l.b)("h2",{id:"template-method"},"Template Method"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111873681-d4ba8e00-89d4-11eb-899c-3b2e203ee9f7.png",alt:"image"})),Object(l.b)("p",null,"\uc804\ub7b5(Processor) \uc744 \uc0c1\uc18d \ubc1b\uc740 \uac1d\uccb4\uc5d0\uc11c \uc704\uc784 \ubc1b\ub294\ub2e4 ",Object(l.b)("em",{parentName:"p"},"override")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Processor")," \uc0dd\uc131\uc790\ub294 \ub0b4\ubd80\uc5d0\uc11c ",Object(l.b)("inlineCode",{parentName:"li"},'_process(...){ throw "override"; }')," \ub97c \ud638\ucd9c\ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"_process")," \ub97c \uc7ac\uc815\uc758\ud574\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.\n")),Object(l.b)("h3",{id:"\ud15c\ud50c\ub9bf-\uba54\uc11c\ub4dc-process"},"\ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc process"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"process")," \ub294 \ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc \uc774\ub2e4."),Object(l.b)("h3",{id:"\ud15c\ud50c\ub9bf-\uba54\uc11c\ub4dc\uc758-hook"},"\ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc\uc758 Hook"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"_process")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SubClass \uc5d0 \uc758\uc874\ud558\uace0 \uc788\ub294 \uba54\uc11c\ub4dc"),Object(l.b)("li",{parentName:"ul"},"\ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc\uc5d0\uc11c \ud6c5\uc774\ub77c\uace0 \ud55c\ub2e4. ")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://eyabc.github.io/Doc/dev/java/effective-java/ch4/ITEM20.html#%EC%9E%90%EB%B0%94%EC%9D%98-%EB%8B%A4%EC%A4%91-%EA%B5%AC%ED%98%84-%EB%A7%A4%EC%BB%A4%EB%8B%88%EC%A6%98"},"\ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc \ud328\ud134"))),Object(l.b)("p",null,"Binder \ub294 SubClass \ub85c injection \ub41c \uba54\uc11c\ub4dc\uc5d0 \uc758\uc874\ud55c\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Binder \uc5d0\uc11c\ub294 SuperClass \ud0c0\uc785\uc73c\ub85c \uc0ac\uc6a9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\uc8fc\uc785 \ud560 \ub54c\uc5d0\ub294 SubClass \ud0c0\uc785\uc73c\ub85c \uc8fc\uc785"),Object(l.b)("li",{parentName:"ul"},"\uc5c5\uce90\uc2a4\ud305 \ubc1c\uc0dd "))),Object(l.b)("li",{parentName:"ul"},"\ub0b4\ubd80\uc5d0 \ubcc0\ud654\uac00 \uc0dd\uae38 \ub54c \ub9c8\ub2e4 Binder \ucf54\ub4dc(\uac1d\uccb4\uc758 \ud0c0\uc785)\ub97c \ubc14\uafd4\uc8fc\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111873947-2dd6f180-89d6-11eb-9097-fb97285e7aed.png",alt:"image"})),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"const Processor = class {\n  cat;\n\n  constructor(cat) {\n    this.cat = cat;\n    Object.freeze(this);\n  }\n\n  process(vm, el, k, v, _0 = type(vm, ViewModel), _1 = type(el, HTMLElement), _2 = type(k, 'string')) {\n    this._process(vm, el, k, v);\n  }\n\n  _process(vm, el, k, v) {\n    throw'override';\n  }\n};\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"new (class extends Processor {\n  _process(vm, el, k, v) {\n    el.style[k] = v;\n  }\n})('styles');\n\nnew (class extends Processor {\n  _process(vm, el, k, v) {\n    el.setAttribute(k, v);\n  }\n})('attributes');\n\nnew (class extends Processor {\n  _process(vm, el, k, v) {\n    el[k] = v;\n  }\n})('properties');\n\nnew (class extends Processor {\n  _process(vm, el, k, v) {\n    el['on' + k] = e => v.call(el, e, vm);\n  }\n})('events');\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("em",{parentName:"p"},"\uc775\uba85 \ud074\ub798\uc2a4"),Object(l.b)("br",{parentName:"p"}),"\n","\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ud074\ub798\uc2a4\ub294 \ubb38\uc774 \uc544\ub2c8\ub77c ",Object(l.b)("strong",{parentName:"p"},"\uac12(\uc2dd)*"),"\uc774\ub2e4.",Object(l.b)("br",{parentName:"p"}),"\n","\uc989\uc2dc\uc2e4\ud589\ud568\uc218 \uc2dc\uadf8\ub2c8\uccd0\uc640 \ube44\uc2b7\ud558\ub2e4.  "),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\ud55c\ubc88\ub9cc \uc4f0\ub294 \ud074\ub798\uc2a4,"),Object(l.b)("li",{parentName:"ul"},"\uc778\uc2a4\ud134\uc2a4\ub294 \ud558\ub098\ub9cc \ud544\uc694"),Object(l.b)("li",{parentName:"ul"},"\ud074\ub798\uc2a4 \uc778\uc2a4\ud134\uc2a4\ub97c \ucc0d\uc5b4\ub0b4\uc9c0 \uc54a\uae30\uc704\ud574. "))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{3,10,14,17-21}","{3,10,14,17-21}":!0},"const Binder = class extends ViewModelListener {\n  #items = new Set;\n  #processors = {};\n  \n  add(v, _ = type(v, BinderItem)) {\n    this.#items.add(v);\n  }\n  \n  addProcessor(v, _0 = type(v, Processor)) {\n    this.#processors[v.cat] = v;\n  }\n  \n  render(viewmodel, _ = type(viewmodel, ViewModel)) {\n    const processores = Object.entries(this.#processors);\n    this.#items.forEach(item => {\n      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;\n      processores.forEach(([pk, processor]) => {\n        Object.entries(vm[pk]).forEach(([k, v]) => {\n          processor.process(vm, el, k, v);\n        });\n      });\n    });\n  }\n}\n")),Object(l.b)("h4",{id:"\uc804\ub7b5\uc744-\ud655\uc7a5\ud560-\uc218-\uc788\ub2e4"},"\uc804\ub7b5\uc744 \ud655\uc7a5\ud560 \uc218 \uc788\ub2e4."),Object(l.b)("p",null,"\uc804\ub7b5\uc744 4\uac1c \uc678\uc5d0\ub3c4 \uc5bc\ub9c8\ub4e0\uc9c0 \ub9cc\ub4e4 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4. "),Object(l.b)("h4",{id:"processors-object-\uc774\ub2e4"},Object(l.b)("em",{parentName:"h4"},"#processors")," Object \uc774\ub2e4."),Object(l.b)("p",null,"\uac1d\uccb4\ub294 \uc8fc\uc18c\ub85c \uc2dd\ubcc4 \ub418\uc5b4\uc57c \ud558\ub294\ub370(Set), \uc774\ubc88\uc5d0\ub294 \uac12(Object)\uc744 \uc0ac\uc6a9\ud588\ub2e4."),Object(l.b)("p",null,"Object \ud0a4\ub294 \uc911\ubcf5\ub420 \uc218 \uc5c6\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ubb38\uc790\uc5f4 v.cat \ub2f9 \ud558\ub098\uc758 Processor \ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"cat")," \uac00 \uac19\uace0, \uac12\uc73c\ub85c \ub2e4\ub978 Processor \uac1d\uccb4\uac00 \ub4e4\uc5b4\uc62c \ub54c, \uac12\uc740 \ub36e\uc5b4\uc4f0\uae30 \ub41c\ub2e4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"cat")," \uac00 \uc911\ubcf5\ub418\uc5b4 \uc788\uc744 \ub54c \uc0ac\uc6a9 \ud560 Processor \uac00 \ud5f7\uac08\ub9ac\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc624\ube0c\uc81d\ud2b8 \uc0ac\uc6a9. "),Object(l.b)("li",{parentName:"ul"},"\uc790\ub8cc\uad6c\uc870\ub97c \uc2e0\uc911\ud558\uac8c \uc120\ud0dd\ud574\uc57c \ud55c\ub2e4. ")),Object(l.b)("p",null,"\uac12\uc744 \uc4f0\uc9c0 \uc54a\ub294 \ubc29\ubc95"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"v.cat \uc774 ",Object(l.b)("em",{parentName:"li"},"String"),"\uc774 \uc544\ub2cc \ubbf8\ub9ac \uc815\uc758\ud55c ",Object(l.b)("em",{parentName:"li"},"Symbol")," \uc744 \ubc1b\ub294\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uac12\uc744 \ubc29\uc5b4\ud558\uae30 \uc704\ud55c \uccb4\uacc4\ub97c \ub9cc\ub4e4\uc5b4 \uc918\uc57c \ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uac12\uc744 \uc678\ubd80\uc5d0 \ub178\ucd9c\ud560 \ub54c\ub294 \uc2e0\uc911\ud558\uac8c \uc0dd\uac01\ud574\uc57c \ud55c\ub2e4.")),Object(l.b)("p",null,"\ub2e4\uc74c\uc2dc\uac04\uc5d0\uc11c\ub294 \uc2ec\ubcfc\ub85c \uc804\ud658\ud560 \uac83\uc784."),Object(l.b)("h4",{id:"const-processores--objectentriesthisprocessors"},Object(l.b)("inlineCode",{parentName:"h4"},"const processores = Object.entries(this.#processors);")),Object(l.b)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc2f1\uae00 \uc2a4\ub808\ub4dc \uba38\uc2e0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"render")," \uba54\uc11c\ub4dc \ub3d9\uc548\uc5d0 ",Object(l.b)("em",{parentName:"li"},"addProcessor")," \uac00 \uc77c\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4.")),Object(l.b)("h2",{id:"\uac1d\uccb4-\uc0ac\uc774\uc758-\uc758\uc874\uc131-\ub610\ub294-\uacc4\uc57d"},"\uac1d\uccb4 \uc0ac\uc774\uc758 \uc758\uc874\uc131 \ub610\ub294 \uacc4\uc57d"),Object(l.b)("p",null,"Processor \uc5d0\uc11c \uc815\uc758\ud558\uace0 \uc788\ub294 \ud504\ub85c\ud1a0\ucf5c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"cat \uacfc process")),Object(l.b)("p",null,"Binder \ub294 Processor \uc758 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc54c\uace0\ub9ac\uc998\uc744 \ubc14\uafe8\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Binder \ub294 Processor \ub791 \uacc4\uc57d\uc744 \ud588\uae30 \ub54c\ubb38\uc5d0 Processor \uba85\uc138\uc11c\ub97c \uc0ac\uc6a9 \uac00\ub2a5")),Object(l.b)("h3",{id:"\uc54c\uace0\ub9ac\uc998\uc758-\uc77c\ubc18\ud654\ucd94\uc0c1\ud654-\uc81c\ub124\ub9ad-\uc54c\uace0\ub9ac\uc998"},"\uc54c\uace0\ub9ac\uc998\uc758 \uc77c\ubc18\ud654(\ucd94\uc0c1\ud654), \uc81c\ub124\ub9ad \uc54c\uace0\ub9ac\uc998"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Binder \uc54c\uace0\ub9ac\uc998\uc744 Processor \uc5d0\uc11c \uacf5\uac1c\ud558\uace0\uc788\ub294 \uacc4\uc57d \ub0b4\uc6a9\ub9cc \uac16\ub294 \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \ubc14\uafd4\uc918\uc57c \ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"(\uc804\ub7b5)\ubcf5\uc7a1\ud55c \ucf54\ub4dc\ub4e4\uc758 \uacf5\ud1b5\uc810\uc744 \ubaa8\uc544\uc11c \uac1d\uccb4 \ud615\uc73c\ub85c \ube80 \ub4a4\uc5d0 "),Object(l.b)("li",{parentName:"ul"},"\ud615\uacfc \uacc4\uc57d\ud558\uace0 \ud615\uc73c\ub85c \uacc4\uc57d\ud55c \ub0b4\uc6a9\uc73c\ub85c \uc54c\uace0\ub9ac\uc998\uc744 \ubc14\uafb8\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. ")),Object(l.b)("p",null,"\ucf54\ub4dc\ub294 Processor \uc758 \uba54\uc11c\ub4dc\ub098 \uc18d\uc131\uc774 \ubc14\ub00c\uc9c0 \uc54a\ub294 \uc774\uc0c1, Binder \ub294 \ub354\uc774\uc0c1 \ucf54\ub4dc\ub97c \uace0\uce60 \ud544\uc694\uac00 \uc5c6\ub2e4."),Object(l.b)("h2",{id:"\uc804\ub7b5-\ud328\ud134"},"\uc804\ub7b5 \ud328\ud134"),Object(l.b)("p",null,"\uc81c\ub124\ub9ad \uc54c\uace0\ub9ac\uc998\uc5d0\uc11c, \uc218 \ub9ce\uc740 \uc804\ub7b5\ub4e4\uc744 \ucd94\uac00\ud558\uac70\ub098 \ubc14\uafc0 \uc218 \uc788\ub2e4. "),Object(l.b)("p",null,"\ud504\ub85c\ud1a0\ucf5c\uc758 \ub0b4\uc6a9\uc774 \uc801\ub2f9\ud558\uace0 \uc801\uc5b4\uc57c \ud55c\ub2e4."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\uad6c\uc870\uc801\uc778 \ubd80\ubd84\uacfc \uc804\ub7b5\uc801\uc778 \ubd80\ubd84\uc744 \ub098\ub208\ub2e4."),Object(l.b)("li",{parentName:"ol"},"\uc804\ub7b5\ubd80\ubd84\uc758 \uacf5\ud1b5\ubd80\ubd84\uc744 \ucc3e\ub294\ub2e4."),Object(l.b)("li",{parentName:"ol"},"\uc804\ub7b5\uc774 \uc5b4\ub5bb\uac8c \uc0c1\ud0dc\uc640 \uad00\uacc4\ub97c \ub9fa\ub294\uc9c0 \ucc3e\ub294\ub2e4"),Object(l.b)("li",{parentName:"ol"},"\uc774\uac83\ub4e4\ub85c \ub3c4\ucd9c\ub41c \ud615\uc73c\ub85c \uac00\uc9c0\uace0 \uc54c\uace0\ub9ac\uc998\uc744 \uace0\uce5c\ub2e4.")),Object(l.b)("h2",{id:"\ub2e8\ubc29\ud5a5-\uc758\uc874\uc131"},"\ub2e8\ubc29\ud5a5 \uc758\uc874\uc131"),Object(l.b)("p",null,"Binder \uac00 Processor \ub97c \uc758\uc874\ud558\uac8c \ub418\uc5c8\ub2e4.",Object(l.b)("br",{parentName:"p"}),"\n","\uac1d\uccb4\uc5d0\uc11c, \ub2e8\ubc29\ud5a5 \uc758\uc874\uc131\uc744 \uc124\uc815\ud574\uc57c \ud55c\ub2e4. "),Object(l.b)("p",null,"\uac1d\uccb4\uc9c0\ud5a5\uc5d0\uc11c \uc758\uc874\uc131\uc774 \uc5c6\ub2e4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \ubc1c\ub790\ub2e4? \ub77c\ub294 \uac83\uc774\uace0, \ucf54\ub4dc\ub97c \ub9e8\ub0a0 \uace0\uccd0\uc57c \ub41c\ub2e4\ub294 \uc774\uc57c\uae30\ub2e4.")),Object(l.b)("p",null,"\uac1d\uccb4\uc9c0\ud5a5\uc744 \uc4f0\ub294 \uc774\uc720"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\ucf54\ub4dc \ubd80\ubd84\uc744 \uac1d\uccb4\ub85c \ubc14\uafd4\uc11c \uac1d\uccb4\ub9cc \ub530\ub85c \uacf5\uae09\ud558\uba74 \uadf8 \ucf54\ub4dc\ub97c \uac74\ub4e4 \ud544\uc694\uac00 \uc5c6\uac8c \ud558\uae30 \uc704\ud574\uc11c \uc774\ub2e4.*"))),Object(l.b)("p",null,"\uc758\uc874\uc131\uc774 \ub9ce\uc740 \ucf54\ub4dc\uac00 \ub098\uc05c \uac8c \uc544\ub2c8\ub2e4. \uc758\uc874\uc131\uc740 \ub2f9\uc5f0\ud788 \uc0dd\uae30\ub294 \uac83\uc774\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc758\uc874\uc131\uc774 \uc591\ubc29\ud615\uc73c\ub85c \ud750\ub974\ub294 \uac83\uc774 \ub098\uc05c \uac83")),Object(l.b)("p",null,"\uc81c\ub300\ub85c \uc9f0\uc73c\uba74, DI \uac00 \uc790\ub3d9\uc73c\ub85c \ub530\ub77c\uc628\ub2e4.\n",Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111900492-2d8e3300-8a76-11eb-9b83-44a059f2fb97.png",alt:"image"})),Object(l.b)("p",null,"\ucf54\ub4dc\ub97c \uac1d\uccb4\ub85c \ubc14\uafb8\uba74 \uc758\uc874\uc131\uc774 \ub530\ub77c\uc624\uace0, \uc758\uc874\uc131\uc774 \uc0dd\uacbc\ub294\ub370 DI \uba54\uc11c\ub4dc\uac00 \uc5c6\ub2e4\uba74 \uc798\ubabb\ub41c \uac83\uc774\ub2e4."),Object(l.b)("h2",{id:"\uac1d\uccb4\ub9dd\uc758-\uad6c\uc131-3\uac00\uc9c0"},"\uac1d\uccb4\ub9dd\uc758 \uad6c\uc131 3\uac00\uc9c0"),Object(l.b)("p",null,"\uac1d\uccb4\uc9c0\ud5a5\uc740 \ubb38\uc81c\ub97c \uac1d\uccb4\ub9dd\uc774 \ud574\uacb0\ud55c\ub2e4."),Object(l.b)("p",null,"\uc5b4\ub5a4 \uac1d\uccb4\uac00 \ub2e4\ub978 \uac1d\uccb4\ub97c "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\ud544\ub4dc\uc218\uc900\uc73c\ub85c \uc548\ub2e4. "),Object(l.b)("li",{parentName:"ol"},"\uba54\uc11c\ub4dc \uc218\uc900\uc5d0\uc11c \uc548\ub2e4 "),Object(l.b)("li",{parentName:"ol"},"SubClass \ub85c \uc548\ub2e4.")),Object(l.b)("p",null,"\uc608\uc81c\uc5d0\uc11c\ub294 Processor \ub97c \uc54c\uace0\uc788\ub294 SubClass 4\uac1c\ub97c \ub9cc\ub4e4\uc5c8\ub2e4. "))}p.isMDXComponent=!0},447:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),b=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(n),O=r,j=s["".concat(c,".").concat(O)]||s[O]||u[O]||l;return n?b.a.createElement(j,a(a({ref:t},o),{},{components:n})):b.a.createElement(j,a({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=O;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var o=2;o<l;o++)c[o]=n[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);