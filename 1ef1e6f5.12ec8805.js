(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{243:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return p})),l.d(t,"toc",(function(){return u})),l.d(t,"default",(function(){return m}));var n=l(3),i=l(7),a=l(0),b=l.n(a),c=l(247),s=l(364);var o=({content:e})=>b.a.createElement("div",null,Object(s.a)(e)),r={},p={unversionedId:"css/css-rendering/4",id:"css/css-rendering/4",isDocsHomePage:!1,title:"4",description:"position model",source:"@site/docs/css/css-rendering/4.mdx",slug:"/css/css-rendering/4",permalink:"/docs/css/css-rendering/4",version:"current",sidebar:"css",previous:{title:"3-4 outline",permalink:"/docs/css/css-rendering/outline"}},u=[{value:"caret position &amp; offset",id:"caret-position--offset",children:[]},{value:"offset parent",id:"offset-parent",children:[{value:"1. null \uc778 \uacbd\uc6b0",id:"1-null-\uc778-\uacbd\uc6b0",children:[]},{value:"2. recursive search",id:"2-recursive-search",children:[]}]},{value:"offset value",id:"offset-value",children:[{value:"\ubcf4\uc774\ub294 \uacf3\uc758 \uc601\uc5ed",id:"\ubcf4\uc774\ub294-\uacf3\uc758-\uc601\uc5ed",children:[]},{value:"\uc9c4\uc9dc contents \uc758 \uc601\uc5ed",id:"\uc9c4\uc9dc-contents-\uc758-\uc601\uc5ed",children:[]}]},{value:"absolute",id:"absolute",children:[]},{value:"relative bridge",id:"relative-bridge",children:[]},{value:"Reference",id:"reference",children:[]}],d={toc:u};function m(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"position-model"},"position model"),Object(c.b)("p",null,"static | relative | absolute | fixed"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://drafts.csswg.org/cssom-view/#extensions-to-the-htmlelement-interface"},"https://drafts.csswg.org/cssom-view/#extensions-to-the-htmlelement-interface"))),Object(c.b)("h2",{id:"caret-position--offset"},"caret position & offset"),Object(c.b)("p",null,"offset\n\uc6b0\ub9ac\uac00 css \uc18d\uc131\uc744 \uc8fc\uac70\ub098 \ud0dc\uadf8\uc758 \ud3ec\ud568\uad00\uacc4\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc9c0\uc2dc\ub97c \ud55c\ub2e4.\n\uc9c0\uc2dc\ub97c \ub0b4\ub9b4 \ub54c, \uc9c0\uc2dc\ub97c \ucd94\uc0c1\uc801\uc73c\ub85c \ub0b4\ub9b0\ub2e4.(float, left, ...)"),Object(c.b)("p",null,"\ucd94\uc0c1\uc801\uc73c\ub85c \ub0b4\ub824\ub3c4 geometry \uacc4\uc0b0\uc774 \ub05d\ub098\uba74\nfixed Number \ub85c \ubc14\ub010\ub2e4.\n\uc774 \uc22b\uc790\ub4e4\uc744 \uc804\ubd80\ub2e4 offset \uc774\ub77c\uace0 \ubd80\ub978\ub2e4.(\uace0\uc720\uba85\uc0ac)"),Object(c.b)("p",null,"\uc6d0\ub798 CS \uc5d0\uc11c offset \uc740 \ubb34\uc5c7\uc5d0\uc11c\ubd80\ud130 \uc5bc\ub9c8\ud07c \ub5a8\uc5b4\uc9c4 \uc774\ub77c\ub294 \ub73b\uc774\ub2e4.\n\uc5ec\uae30\uc11c\ub294 geometry \uacc4\uc0b0\uc774 \ub05d\ub098\uc11c fixed Number\n\uccb4\uacc4\ub85c \ubc14\uafd4\uc84c\uc744 \ub54c\uc758 \uc22b\uc790\ub97c \uc758\ubbf8\ud558\ub294 \uace0\uc720\uba85\uc0ac\ub2e4\n\ubcc0\uacbd\uc774 \ubd88\uac00\ub2a5\ud55c \uc77d\uae30 \uc804\uc6a9\uc774\ub2e4."),Object(c.b)("p",null,"\ucd94\uc0c1\uc801\uc778 \uba85\ub839(\uc6b0\ub9ac\uc758 \ud76c\ub9dd\uc0ac\ud56d\uc740)\uc758 \uc218\uc6a9\uc740\n\ube0c\ub77c\uc6b0\uc800 \ub9c8\uc74c\uc774\ub2e4."),Object(c.b)("p",null,"\ube0c\ub77c\uc6b0\uc800 \uad6c\ud615 ie6 \uc5d0\ub294 float \ub97c \uc8fc\uc5c8\uc744 \ub54c\npadding 3 \uc774 \uc0dd\uae30\ub294 \uacc4\uc0b0\uc774 \uc788\uc5c8\ub2e4."),Object(c.b)("p",null,"\uc2e4\uc81c \uadf8\ub9bc\uc740 \uc6b0\ub9ac\uac00 \uc900 \uc694\uccad\ub300\ub85c \uacc4\uc0b0\ud574\uc11c \uadf8\ub9b4 \uac83\uc778\ub370(\ube0c\ub77c\uc6b0\uc800\uac00)\n\ube0c\ub77c\uc6b0\uc800 \ub9c8\uc74c\ub300\ub85c \uadf8\ub9b4\uac83\uc774\ub2e4.\n(\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uc2dc\uc2a4\ud15c)\n\uc2e4\uc81c \uacc4\uc0b0\ub41c \uc218\uce58\ub294 offset \ub97c \uc870\uc0ac\ud574\uc57c \ud55c\ub2e4."),Object(c.b)("p",null,"\ube0c\ub77c\uc6b0\uc800\ub294 \ud6a8\uc728\uc801\uc778 \uacc4\uc0b0\uc744 \ud558\uae30 \uc704\ud574\uc11c geometyr \uacc4\uc0b0\uc744 \ud55c\ubc88\uc5d0 \ubab0\uc544\uc11c \ud558\ub824\uace0 \ud55c\ub2e4.\n\ud55c\ubc88\uc5d0 \ubb36\uc5b4\uc11c \uacc4\uc0b0\ud558\ub294 \ub2e8\uc704\ub97c \ud504\ub808\uc784\uc774\ub77c\uace0 \ud55c\ub2e4.\n\uadf8\ub9bc\uc744 \uadf8\ub9b4 \ub584 \ubaa8\ub4e0 \ubcc0\uacbd\uc694\uc18c\ub97c \ubcc0\uacbd\ub9cc \uc2dc\ucf1c\ub193\uace0 \uc7ac\uacc4\uc0b0\uc744 \ud55c\ubc88\ub9cc \uc2dc\ucf1c\uc8fc\ub294 \ud0c0\uc774\ubc0d\uc744 \ud504\ub808\uc784\uc774\ub77c\uace0 \ud55c\ub2e4.\n\uc313\uc544\uc788\ub358 \ud050\ub97c \uc18c\uc9c4\ud558\ub294 \uac83\uc744 flush \ub77c\uace0 \ud55c\ub2e4."),Object(c.b)("p",null,"\uc5b4\ub5a4 element \uc758 offset \ub97c \uc870\uc0ac\ud558\ub824\uace0 \ud560\ub824\uba74 \uc989\uc2dc \uc7ac\uacc4\uc0b0 \ud574\uc57c \ud55c\ub2e4.\n\ud050\ub97c \ubc14\ub85c \uc9c0\uc6b0\uace0 \ubb34\uc870\uac74 \uc7ac\uacc4\uc0b0\uc744 \ud574\uc57c \ud55c\ub2e4.\n\ud55c \ud504\ub808\uc784\uc774 \uc544\ub2cc\ub370\ub3c4 offset \uc744 \uc694\uccad\ud558\uba74 \uc7ac\uacc4\uc0b0\uc744 \ub9c8\uad6c\ub9c8\uad6c \ub54c\ub9b0\ub2e4\noffset \uc744 \uc694\uccad\ud558\uba74 \ucd5c\uc801\ud654 \ub85c\uc9c1\uc774 \uae68\uc838\ubc84\ub9ac\uace0\n\uc548\uc4f0\ub294 \uac83\uc774 \uc88b\ub2e4."),Object(c.b)("p",null,"\ub9c8\uad6c \ubd88\ub7ec\ub3c4 \ub418\ub294 \uacbd\uc6b0\ub294, geometry \uacc4\uc0b0\uc774 \ub2e4 \ub05d\ub0ac\uc744 \ub54c\uc774\ub2e4.\nlayout \uc758 offset \ub97c \uae30\uc900\uc73c\ub85c \ub2e4\uc2dc layout \uc744 \uadf8\ub9b4\ub824\uace0 \ud558\uba74\n\ud55c \ud504\ub808\uc784\uc5d0 \uc7ac\uacc4\uc0b0\uc744 \uc5ec\ub7ec\ubc88 \ud558\uac8c \ub41c\ub2e4."),Object(c.b)("p",null,"layout \uacc4\uc0b0\uc774 \uc5c6\uc744 \ub54c\ub294 \ub9ce\uc774 \ubd88\ub7ec\ub3c4 \uc0c1\uad00 \uc5c6\uc9c0\ub9cc\nlayout \uc744 \ubc14\ud0d5\uc73c\ub85c \ub610 layout \uc744 \uacc4\uc0b0\ud558\ub824\uace0 \ud558\uba74 \uc870\uc2ec\ud574\uc11c \uc9dc\uc57c \ud55c\ub2e4."),Object(c.b)("h2",{id:"offset-parent"},"offset parent"),Object(c.b)("p",null,"offset \uc744 \uacc4\uc0b0\ud558\ub824\uba74 \uc2e4\uc81c \ud53d\uc140\uac12\uc744 \uacc4\uc0b0\ud574\uc57c \ud55c\ub2e4.\n\ucef4\ud4e8\ud130\uc758 \uc785\uc7a5\uc5d0\uc11c\ub294\noffset \ub97c \uacc4\uc0b0\ud558\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \ub85c\uc9c1\uc740\n\uc0c1\ub300\uc801\uc778 \uc704\uce58\ub85c \ubaa8\ub4e0 \uc218\uce58\uac00 \uae30\uc220\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0\n\uae30\uc900\uc810\uc744 \ucc3e\ub294 \uac83\uc774 \uac00\uc7a5 \uc6b0\uc120\ub41c\ub2e4."),Object(c.b)("p",null,"left: 100, top:50 ~ \uc740 \uae30\uc900\uc810\uc73c\ub85c \ubd80\ud130\ub77c\ub294 \uc758\ubbf8\ub2e4.\n\uae30\uc900\uc810\uc744 offset parent \ub77c\uace0 \ud55c\ub2e4."),Object(c.b)("p",null,"offset parent \ub294 dom parent \uac00 \uc544\ub2c8\ub2e4."),Object(c.b)("p",null,"offset parent \ub294 \uc5b4\ub5bb\uac8c \uad6c\ud558\ub294 \uac83\uc77c\uae4c?"),Object(c.b)("h3",{id:"1-null-\uc778-\uacbd\uc6b0"},"1. null \uc778 \uacbd\uc6b0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"root, html, body"),Object(c.b)("li",{parentName:"ul"},"position: fixed (\ube0c\ub77c\uc6b0\uc800\uc758 bound box \ub97c \uae30\uc900\uc73c\ub85c \uadf8\ub9b0\ub2e4)"),Object(c.b)("li",{parentName:"ul"},"out of dom tree",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"remove child element"),Object(c.b)("li",{parentName:"ul"},"create element \ub294 offset parent \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc9c0\ub9cc"),Object(c.b)("li",{parentName:"ul"},"append \ud6c4\uc5d0\ub294 \uc0dd\uaca8\ub09c\ub2e4.")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"relative absolute"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.zerocho.com/category/CSS/post/5864f3b59f1dc000182d3ea1"},"https://www.zerocho.com/category/CSS/post/5864f3b59f1dc000182d3ea1")),Object(c.b)("li",{parentName:"ul"},"relative \uac00 static \uc778 \uc0c1\ud0dc\ub97c \uae30\uc900\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \ud53d\uc140\ub9cc\ud07c \uc6c0\uc9c1\uc600\ub2e4\uba74,"),Object(c.b)("li",{parentName:"ul"},"absolute \ub294 position: static \uc18d\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc740 \ubd80\ubaa8\ub97c \uae30\uc900\uc73c\ub85c \uc6c0\uc9c1\uc785\ub2c8\ub2e4. \ub9cc\uc57d \ubd80\ubaa8 \uc911\uc5d0 \ud3ec\uc9c0\uc158\uc774 relative, absolute, fixed\uc778 \ud0dc\uadf8\uac00 \uc5c6\ub2e4\uba74 \uac00\uc7a5 \uc704\uc758 \ud0dc\uadf8(body)\uac00 \uae30\uc900\uc774 \ub429\ub2c8\ub2e4."))),Object(c.b)("h3",{id:"2-recursive-search"},"2. recursive search"),Object(c.b)("p",null,"\uc5b4\ub5a4 element \ub97c \ucc3e\ub294 \uac83\uc740 \uc7ac\uadc0\uc801\uc73c\ub85c \ucc3e\uc544 \ub4e4\uc5b4\uac04\ub2e4.\n(ok \ub294 \ubd80\ubaa8 \uc704\uce58\ub97c \uc704\ub85c \uacc4\uc18d \ucc3e\uc744 \uc218 \uc788\ub2e4\ub294 \uc758\ubbf8)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"parent.position: fixed = null",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"element \uc758 \ubd80\ubaa8\uc758 position \uc774 fixed \uc77c \ub54c null \uc774\ub2e4"))),Object(c.b)("li",{parentName:"ul"},"parent.position:!static = ok",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"static \uc774 \uc544\ub2cc \ubd80\ubaa8\ub97c \ucc3e\uc744 \ub54c \uae4c\uc9c0 \uc704\ub85c \uc62c\ub77c\uac04\ub2e4."),Object(c.b)("li",{parentName:"ul"},"absolute | relative \uc774\uba74 \uc911\ub2e8\ud558\uace0,"),Object(c.b)("li",{parentName:"ul"},"absolute \uc758 offset parent \uac00 \ub420 \uc218 \uc788\ub294 \ub300\uc0c1\uc740 absolute \uc774\uac70\ub098 relative \uc774\ub2e4"),Object(c.b)("li",{parentName:"ul"},"absolute \ub294 \ub0b4\uac00 \uc704\uce58\ub97c \uc9c1\uc811 \ub2e4 \uc9c0\uc815\ud574\uc57c \ud55c\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uacf5\uac04(\ucee8\ud14c\uc774\ub108)\uc744 \uae30\uc900\uc73c\ub85c position \uc744 \ub9cc\ub4e4\uace0 \uc2f6\uc73c\uba74"),Object(c.b)("li",{parentName:"ul"},"\uae30\uc900\uc744 relative \uc73c\ub85c \ud558\uace0,",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc790\uc2dd \uc694\uc18c\uc5d0 absolute \uc744 \ud574\uc8fc\uba74 \ub41c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"relative \uc758 \uc5ed\ud560\uc774 static \uc758 \uc704\uce58\ub97c \uc870\uc815\ud558\ub294\ub370 \uc4f4\ub2e4\uae30 \ubcf4\ub2e4\ub294\n\uc77c\ubc18\uc801\uc73c\ub85c static \uc548 \uc5d0 abolute \ub97c \ub123\uae30 \uc704\ud55c \ucee8\ud14c\uc774\ub108\ub85c \uc0ac\uc6a9\ud55c\ub2e4."))))),Object(c.b)("li",{parentName:"ul"},"relative \uc758 \uacbd\uc6b0\ub294, static \uc758 \uc704\uce58\ub85c \uc815\ud574\uc9c4\ub2e4.")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"body = ok"),Object(c.b)("li",{parentName:"ul"},"td, ht, table = ok",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc2a4\ud399\uacfc \ub2e4\ub974\uac8c \ub9ce\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud14c\uc774\ube14\uc758 \ud0dc\uadf8\ub4e4\uc774 offset parent \ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc548\uc5d0 div \uc758 position: relative \uc18d\uc131\uc744 \ub123\uc5b4\uc918\uc57c \ud55c\ub2e4."))),Object(c.b)("li",{parentName:"ul"},"parent.parent continue,,,")),Object(c.b)("p",null,"\uc774 \uacf5\uc2dd\uc740 \ubcf5\uc7a1\ud574 \ubcf4\uc774\uc9c0\ub9cc \uac04\ub2e8\ud558\ub2e4."),Object(c.b)("h2",{id:"offset-value"},"offset value"),Object(c.b)("p",null,"offset parent \ub97c \uc54c\uc558\uc73c\uba74  \ub098\uba38\uc9c0\n\ube0c\ub77c\uc6b0\uc800\uac00 \uc2e4\uc81c\ub85c \uacc4\uc0b0\ud558\ub294 offset \uac12\uc744 \uc77d\uae30\uc804\uc6a9\uc73c\ub85c \ucc38\uc870\ud560 \uc218 \uc788\ub2e4."),Object(c.b)("h3",{id:"\ubcf4\uc774\ub294-\uacf3\uc758-\uc601\uc5ed"},"\ubcf4\uc774\ub294 \uacf3\uc758 \uc601\uc5ed"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"offsetLeft",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"offset parent \uc758 \uc67c\ucabd\uc73c\ub85c \ubd80\ud130 \uc5bc\ub9c8\ub098 \ub5a8\uc5b4\uc838 \uc788\ub290\ub0d0"))),Object(c.b)("li",{parentName:"ul"},"offsetTop"),Object(c.b)("li",{parentName:"ul"},"offsetWidth",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc2e4\uc81c\ub85c \ud655\ubcf4\ub41c geometry \ud06c\uae30"))),Object(c.b)("li",{parentName:"ul"},"offsetHeight")),Object(c.b)("h3",{id:"\uc9c4\uc9dc-contents-\uc758-\uc601\uc5ed"},"\uc9c4\uc9dc contents \uc758 \uc601\uc5ed"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"offsetScrollTop"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"}))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"offsetScrollLeft"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub864 \uc601\uc5ed\uc774 \uc0dd\uacbc\uc744 \ub54c, \uc2a4\ud06c\ub864\uc758 \uc704\uce58"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"offsetScrollWidth"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub864 \uc601\uc5ed\uc774 \uc0dd\uacbc\uc744 \ub54c, \uc2a4\ud06c\ub864\uc758 \uc804\uccb4\ud06c\uae30"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"offsetScrollHeight"))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/120061865-21d47380-c09a-11eb-8200-41c38f94286a.png",alt:"image"})),Object(c.b)("h2",{id:"absolute"},"absolute"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<div style="width:200px; height: 200px; background: yellow; margin: 100px">\n    <div style="width: 100px; height: 100px;\n                position: absolute; background: red">\n    </div>\n    <div style="width: 100px; height: 100px;\n                position: absolute; background: blue; left: 0">\n    </div>\n</div>\n')),Object(c.b)(o,{content:'<div style="width:200px; height: 200px; background: yellow; margin: 100px"> <div style="width: 100px; height: 100px; position: absolute; background: red"> </div> <div style="width: 100px; height: 100px; position: absolute; background: blue; left: 0"> </div>\n</div>',mdxType:"HtmlParser"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"blue box",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"position: absolute")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"offset parent")," is ",Object(c.b)("inlineCode",{parentName:"li"},"<body>"))))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"position: absolute")," \uc758 left, top \ub4f1\uc774 \uc5c6\uc744 \ub54c\uc758 offset \uc774 offset parent \uc758 (0, 0) \uc774 \uc544\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ubd80\ubaa8 element \uac00 static \uc774\ub77c\uace0 \ud560\uc9c0\ub77c\ub3c4 DOM \uc0c1\uc5d0 \uc788\ub294 \ubd80\ubaa8\uc758 \uac12\uc744 \uac16\uac8c \ub41c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"red box \ub294 static \uc744 \uc900 \uac83 \ucc98\ub7fc \uadf8\ub824\uc9c0\uac8c \ub41c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc989, ",Object(c.b)("em",{parentName:"li"},"position: absolute")," \uc758 \uae30\ubcf8\uac12\uc740 static \uacfc \ub611\uac19\uc740 \uc704\uce58\uc5d0 \uadf8\ub824\uc9c0\uac8c \ub41c\ub2e4.")),Object(c.b)("p",null,"static \uc5d0\uac8c left, top \uc744 \uc900\ub2e4\uba74?"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"static \uc740 normal flow \ub85c \uadf8\ub9b0\ub2e4."),Object(c.b)("li",{parentName:"ul"},"left, top \uc744 \ubb34\uc2dc\ud55c\ub2e4.")),Object(c.b)("p",null,"relative \uc77c \ub54c left, top"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"normal flow \ub85c \uadf8\ub824\uc84c\uc744 \ub54c\uc758 \ucc28\uc774 \uac12")),Object(c.b)("p",null,"float \uc640 position \uc911 \uc5b4\ub5a4 \uac83\uc774 \uba3c\uc800 \uc801\uc6a9\ub420\uae4c?"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"float \ub294 \uc0c8\ub85c\uc6b4 bfc \uc601\uc5ed\uc744 \ub9cc\ub4e4\uc5b4 \ub0b4\ub294 normal flow \uc5d0\uc11c\ub9cc \uc791\ub3d9\ud55c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ub530\ub77c\uc11c position: absolute \ub97c \uc8fc\ub294 \uc21c\uac04 float \ub294 \ubb34\uc758\ubbf8 \ud574\uc9c4\ub2e4.")),Object(c.b)("h2",{id:"relative-bridge"},"relative bridge"),Object(c.b)(o,{content:'<div class="relative_bridge"> <div class="in"></div> <div class="in"></div> <div class="in"></div> <div class="in" style="position: relative"> <div class="abs"></div> </div> <div class="in"></div> <div class="in"></div> <div class="in"></div> <div class="in"></div> <div class="in" style="position: relative"> <div class="abs"></div> </div> <div class="in"></div> <style> .in { display: inline-block; width: 100px; height: 100px; border: 1px solid #000 } .abs { width: 50px; height: 50px; position: absolute; left: 10px; top: 10px; background: #00f; } </style>\n</div>\n',mdxType:"HtmlParser"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<style>\n.in {\n    display: inline-block;\n    width: 100px; height: 100px;\n    border: 1px solid #000\n}\n.abs {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    background: #00f;\n}\n</style>\n\n<html>\n<body>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in" style="position: relative">\n      <div class="abs"></div>\n    </div>\n\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in"></div>\n    <div class="in" style="position: relative">\n      <div class="abs"></div>\n    </div>\n    <div class="in"></div>\n</body>\n</html>\n')),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://ktpark1651.tistory.com/204"},"https://ktpark1651.tistory.com/204"))))}m.isMDXComponent=!0}}]);