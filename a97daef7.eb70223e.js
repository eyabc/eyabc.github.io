(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return d}));var l=n(3),i=n(7),a=(n(0),n(196)),c={},b={unversionedId:"css/css-rendering/2",id:"css/css-rendering/2",isDocsHomePage:!1,title:"2",description:"float",source:"@site/docs/css/css-rendering/2.md",slug:"/css/css-rendering/2",permalink:"/docs/css/css-rendering/2",version:"current",sidebar:"css",previous:{title:"1-4 Normal flow",permalink:"/docs/css/css-rendering/normal_flow"}},r=[{value:"float",id:"float",children:[]},{value:"Line box",id:"line-box",children:[]},{value:"overflow",id:"overflow",children:[]},{value:"overflow hidden \uc640 float \uc758 \uad00\uacc4",id:"overflow-hidden-\uc640-float-\uc758-\uad00\uacc4",children:[]}],s={toc:r};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"float"},"float"),Object(a.b)("p",null,"\uc5b4\ub514\uae4c\uc9c0 normal flow(bfc, ifc, relative position) \uc73c\ub85c \uadf8\ub9b4\uae4c \ud558\ub294 \uac00\ub4dc\ub97c \ub9cc\ub4e4\ub54c\ub3c4 float \ub97c \uc0ac\uc6a9\ud55c\ub2e4.\nfloat \ub294 bfc ifc \uacf5\uc2dd\uc73c\ub85c \uadf8\ub824\uc9c0\uc9c0 \uc54a\ub294\ub2e4.\nline box \ub77c\ub294 \uacf5\uc2dd\uc73c\ub85c \uadf8\ub824\uc9c4\ub2e4. "),Object(a.b)("p",null,"bfc \uc640 float \ub97c \uacb0\ud569\ud574 \ubcf4\uc790"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div style="width:500px">\n  <div style="height:50px;background:red"></div>\n  <div style="width:200px;height:150px; float:left;background:rgba(0,255,0,0.5)"></div>\n  <div style="height:50px;background:skyblue"></div>\n</div>\n')),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118349480-e317c700-b58b-11eb-9f29-496eeb40a855.png",alt:"image"}),"\nfloat \uac00 \ub4f1\uc7a5\ud558\ub294 \uc21c\uac04 \uc0c8\ub85c\uc6b4 bfc \uc601\uc5ed\uc774 \uc0dd\uc131\ub41c\ub2e4.\n\uc0c8\ub85c\uc6b4 bfc \uc601\uc5ed\uc548\uc5d0 \ube14\ub8e8\uc2a4\uce74\uc774 \ubc15\uc2a4\ub294 \uc77c\ubc18\uc801\uc778 normal flow \ub85c \uadf8\ub9bc\uadf8\ub824\uc9c4\ub2e4.\n\uadf8\ub9ac\uace0 \ube14\ub8e8\uc2a4\uce74\uc774 \uc704\uc5d0 \ucd08\ub85d\uc0c9 \ubc15\uc2a4\uac00 \ub5a0\uc788\uac8c \ub41c\ub2e4.\n\uc774\ud604\uc0c1\uc744 normal float + float \ubaa8\ub378\ub85c \uc774\ud574\ud560 \uc218 \uc788\ub2e4.\nfloat \uc601\uc5ed\uc744 \ub2e4\ub2e8\uc73c\ub85c \ub9cc\ub4e4\uba74 geometry \uacc4\uc0b0\uc774 \uae4c\ub2e4\ub85c\uc6cc\uc9c4\ub2e4.\nfloat \ub294 \ucd94\uac00\uc801\uc778 bfc \ubc15\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4.\n\uc774 \ub54c bfc \ubc15\uc2a4\uc758 \ud06c\uae30\ub294? float \uc601\uc5ed \uc804\uccb4\uc640 \uc778\ub77c\uc778\uc601\uc5ed\uc774 \ub2e4 \ucc28\uc9c0\ud558\ub294 \uacf5\uac04 \ub05d\uae4c\uc9c0"),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div style="width:500px">\n  <div style="height:50px;background:red"></div>\n  <div style="width:200px;height:150px;float:left;background:rgba(0,255,0,0.5)"></div>\n  Hello\n  <div style="height:50px;background:skyblue">WOLRD</div>\n</div>\n')),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118349592-7d780a80-b58c-11eb-93dc-77ab3f36ba78.png",alt:"image"})),Object(a.b)("p",null,"HELLO \uac00 \ucd08\ub85d\uc0c9 \ubc15\uc2a4 \ub4a4\uc5d0 \uadf8\ub824\uc9c8 \uac83\uc73c\ub85c \uae30\ub300\ud588\uc9c0\ub9cc\nfloat \ub294 inline \uc694\uc18c\uc758 \uac00\ub4dc\ub85c \uc791\uc6a9\ud558\uc5ec \uac00\ub4dc \ubc14\uae65\ucabd\uc5d0 \uadf8\ub824\uc9c0\uac8c \ub41c\ub2e4.",Object(a.b)("br",{parentName:"p"}),"\n","inline \uc694\uc18c\uc5d0 \uac00\ub4dc\ub85c \uc791\ub3d9\ud558\uc9c0\ub9cc block \uc694\uc18c\uc5d0 \uac00\ub4dc\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\ub294\ub2e4.\nfloat \uc548\uc5d0\ub294 inline \uc774 \ub4e4\uc5b4\uac00\uc9c0 \ubabb\ud55c\ub2e4."),Object(a.b)("h2",{id:"line-box"},"Line box"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<-- class \uc758 \uc758\ubbf8\ub294 float \uc774\ub2e4 !--\x3e\n<div style="width:500px">\n  <div class="left" style="width:200px;height:150px">1</div>\n  <div class="right" style="width:50px;height:150px">2</div>\n  <div class="right" style="width:50px;height:100px">3</div>\n  <div class="left" style="width:150px;height:50px">4</div>\n  <div class="right style=width:150px;height:70px">5</div>\n  <div class="left" style="width:150px;height:50px">6</div>\n  <div class="left" style="width:150px;height:50px">7</div>\n    <div style="height:30px;background:red;color:yellow;">\n      <span>ABC1</span>\n      <span>ABC2</span>\n      <span>ABC3</span>\n      <span>ABC4</span>\n      <span>ABC5</span>\n      <span>ABC6</span>\n      <span>ABC7</span>\n      <span>ABC8</span>\n  </div>\n</div>\n')),Object(a.b)("p",null,"linebox \uc5d0 float \uc694\uc18c\uac00 \ud558\ub098\ub3c4 \uc5c6\uc5c8\ub2e4. linebox \uc5d0\uc11c \uc2e0\uacbd\uc4f0\ub294 \uac83\uc740 float \uc694\uc18c\ubc16\uc5d0 \uc5c6\ub2e4.\n1 \uc601\uc5ed\uc740 \ucc98\uc74c\uc2dc\uc791\ud588\uae30 \ub54c\ubb38\uc5d0 \uc0c8\ub85c\uc6b4 bfc \uc601\uc5ed\uc744 \ub9cc\ub4e0\ub2e4.\nfloat left \ub294 line box \uc758 \uac00\uc7a5 \uc67c\ucabd\uc5d0 \ubd99\ub294 \uac83"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118350470-e01fd500-b591-11eb-8b3a-a79e0e60f450.png",alt:"image"})),Object(a.b)("p",null,"\ub450\ubc88\uc9f8 \uc601\uc5ed\uc5d0\uc11c\ub294 \ub77c\uc778\ubc15\uc2a4\uc758 \uc601\uc5ed\uc774 \uc904\uc5b4\ub4e0\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118350554-60463a80-b592-11eb-9a30-45d717438b51.png",alt:"image"})),Object(a.b)("p",null,"linebox \ub294 \uac00\ub85c\ub9cc \ubcf4\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc138\ub85c\ub3c4 \ubcf8\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118350594-9388c980-b592-11eb-8a82-02525c00f28a.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118350628-ca5edf80-b592-11eb-974f-c09d85575f54.png",alt:"image"})),Object(a.b)("p",null,"5\ubc88\uc601\uc5ed\uc744 \ub123\uc744 \ub54c\uc5d0\ub294, \uae30\uc874\uc758 linebox \uc758 \uc601\uc5ed\uc774 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc544 \ud30c\uae30\ub41c\ub2e4.\n\ud604\uc7ac \ub77c\uc778\ubc15\uc2a4\uc758 \uac00\uc7a5 \ubc14\ub2e5\uba74\uc744 \uae30\uc900(\ubc14\uc6b4\ub4dc\ub77c\uc778)\uc73c\ub85c \ube48 \uacf5\uac04\uc774 \ub77c\uc778\ubc15\uc2a4 \uc601\uc5ed\uc774 \ub41c\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118350676-0f831180-b593-11eb-8614-f545db3688b6.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118350720-4fe28f80-b593-11eb-8ac2-1c4a0807ed5f.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118350819-af409f80-b593-11eb-8343-5b52623fd6fe.png",alt:"image"})),Object(a.b)("p",null,"right \ubcf4\ub2e4 \uc624\ub978\ucabd\uc5d0 \uadf8\ub824\uc9c4 \uadf8\ub9bc \uc5c6\uace0 left \ubcf4\ub2e4 \ub354 \uc67c\ucabd\uc5d0 \uadf8\ub824\uc9c4 \uadf8\ub9bc \uc5c6\ub2e4."),Object(a.b)("p",null,"\ube48\uacf5\uac04\uc740 left right \uc0ac\uc774\ub9cc \uc720\ud6a8\ud558\ub2e4."),Object(a.b)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c ABC \ubc15\uc2a4\ub294 float \uac00 \uc544\ub2c8\ub2e4.\n\ucd5c\ucd08 float \uac00 \ub9cc\ub4e4\uc5b4\uc9c4 \uacf3\uc744 \uae30\uc900\uc73c\ub85c \uc815\ub82c\ub420 \uac83\uc774\ub2e4.  "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118351069-bae09600-b594-11eb-976c-6b3a5d3a7c20.png",alt:"image"})),Object(a.b)("p",null,"ABC1-8 \uc774 \uadf8\ub824\uc9c0\ub294 \uac83.\nABCN \uc740 inline \uc694\uc18c\uc774\ub2e4. float \uc5d0 \uac00\ub4dc \ub418\uc9c0 \uc54a\uc73c\uba70,\noverflow:auto \uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0, auto \ub9cc\ud07c visible \ud558\uac8c \ube68\uac15 \ubc15\uc2a4\uac00 \ub298\uc5b4\ub098\uc9c0 \uc54a\uc558\ub2e4.\n\ube68\uac15 \ubc15\uc2a4\uc5d0\uc11c inline \ub9cc \ubc97\uc5b4\ub098\uc788\ub2e4.\n\uc6d0\ub798 \ucee8\ud150\uce20\uac00 \ucee4\uc11c BFC \ub97c \ubc15\uc2a4\ub97c\ubc00\uc5b4\ub0bc \ub584 visible \uc18d\uc131\uc774\uba74 \ub298\uc5b4\ub09c\ub2e4.\nlinebox \ub54c\ubb38\uc5d0 \uc778\ub77c\uc778 \uc694\uc18c\uac00 \ubc00\ub9b4\ub54c\ub294 \ub298\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4.\nABCN \uc740 \uadf8\ub9bc\uc740 \uadf8\ub838\uc9c0\ub9cc \uc2e4\uccb4(geometry)\uac00 \uc5c6\ub2e4"),Object(a.b)("p",null,"ABC8 \uc740 \uc65c \uc800\uae30\uc5d0 \uc704\uce58\ud574\uc788\ub294\uc9c0 \ubaa8\ub974\uaca0\uc74c"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118353294-938fc600-b5a0-11eb-84c1-98018b5ae010.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118351234-c4b6c900-b595-11eb-891d-8657365d04e7.png",alt:"image"})),Object(a.b)("h2",{id:"overflow"},"overflow"),Object(a.b)("p",null,"float \uc5d0 \ub300\ud55c \ud2b9\uc57d\uc0ac\ud56d"),Object(a.b)("p",null,"CSS2.1 visual formatting model"),Object(a.b)("p",null,"visible | hidden | scroll | inherit | auto(default)"),Object(a.b)("p",null,"auto "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ub0b4\ubd80\uc5d0 \uc788\ub294 \ud06c\uae30\uac00 \ucee4\uc9c0\uba74 \ubd80\ubaa8\ub3c4 \uac19\uc774 \ucee4\uc9c4\ub2e4.")),Object(a.b)("p",null,"visible"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"auto \uac00 visible(\uc77c\ubc18\uc801\uc778 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c.. \uc9c0\uae08\uc740 \uc608\uc678\uac00 \uc5c6\uc744 \uac83)")),Object(a.b)("p",null,"scroll"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ub0b4 geomerty \ub97c \ub118\uc5b4\uac00\ub294 \ucee8\ud150\uce20\uac00 \ubc1c\uc0dd\ud558\uba74 \uc2a4\ud06c\ub864\ubc14\ub97c \ub9cc\ub4e0\ub2e4. ")),Object(a.b)("p",null,"hidden "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ub0b4 geometry \ub97c \ub118\uc5b4\uac00\ub294 \ub0b4\ubd80 \ucee8\ud150\uce20\ub97c \uc548\ubcf4\uc774\uac8c \uc790\ub978\ub2e4.")),Object(a.b)("hr",null),Object(a.b)("p",null,"overflow-x, -y\noverflow module level3 draft"),Object(a.b)("p",null,"visible | hidden | scroll | clip | auto"),Object(a.b)("p",null,"overflow x \ucd95 y \ucd95\uc744 \ub530\ub85c \uad00\ub9ac\ud558\ub294 \uc2a4\ud399"),Object(a.b)("p",null,"\uc544\uc9c1\uae4c\uc9c0 draft \uc774\ub2e4. recommendation \uc5d0\uc11c draft  \ub85c \ubc14\ub00c\uc5c8\ub2e4.\n\uadf8 \uc774\uc720\ub294 overflow x y \ub97c \uacc4\uc0b0\ud560 \ub54c, \uc0c8\ub85c\ub098 \uc2a4\ud399\ub4e4\uacfc \ubaa8\uc21c\uc810\ub4e4\uc774 \uc788\uc74c"),Object(a.b)("hr",null),Object(a.b)("p",null,"text-overflow\ncss2.1 ui module level3"),Object(a.b)("p",null,"clip | ellipsis (text\uc5d0 ... \ud45c\uc2dc)"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"overflow-hidden-\uc640-float-\uc758-\uad00\uacc4"},"overflow hidden \uc640 float \uc758 \uad00\uacc4"),Object(a.b)("p",null,"\uc774\ub7f0 \uc2a4\ud399\ub4e4\uc774 \uc788\ub294\ub370"),Object(a.b)("p",null,"overflow \uc758 hidden \uacfc scroll \uc744 \uac00\uc9c8 \ub54c\uc5d0\ub9cc flow \uc640 \uad00\ub828\uc774 \uc788\ub2e4.\n\uaddc\uc57d: overflow hidden or scroll \uc18d\uc131\uc744 \uac00\uc9c8 \ub54c\uc5d0\ub9cc \uc774 \uac12\uc744 \uac00\uc9c0\ub294 \uc694\uc18c\ub85c \ubd80\ud130 \uc0c8\ub85c\uc6b4 bfc \ub97c \ub9cc\ub4e0\ub2e4.\n\uc774\ub54c first line box bound \ub97c \uc778\uc2dd\ud574\uc11c \ub9cc\ub4e0\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div style="width:500px">\n  <div class="left" style="width:200px;height:150px">1</div>\n  <div class="right" style="width:50px;height:150px">2</div>\n  <div class="right" style="width:50px;height:100px">3</div>\n  <div class="left" style="width:150px;height:50px">4</div>\n  <div class="right style=width:150px;height:70px">5</div>\n  <div class="left" style="width:150px;height:50px">6</div>\n  <div class="left" style="width:150px;height:50px">7</div>\n  <div style="height:30px;background:red;"></div>\n</div>\n')),Object(a.b)("p",null,"div \ub9c8\uc9c0\ub9c9 \uc790\uc2dd\uc694\uc18c\uc5d0 overflow:hidden \uc744 \ub123\ub294\uc21c\uac04 \uc0c8\ub85c\uc6b4 bfc \uac00 \ud0dc\uc5b4\ub09c\ub2e4.\nbfc \ub294 \ubd80\ubaa8 \uc601\uc5ed\ub9cc\ud07c width \ub97c \uac16\ub294\ub2e4.\n\ubd80\ubaa8 \uc601\uc5ed\uc744 \uacc4\uc0b0\ud560 \ub54c line-box-bound \ub97c \uac16\ub294\ub2e4\ub294 \uc2a4\ud399\uc774 \ub4e4\uc5b4\uc788\ub2e4. "),Object(a.b)("p",null,"\uc774\uc804\uc5d0 ABC \ube68\uac04 \ubc15\uc2a4\uc758 \uc601\uc5ed\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118351588-d8632f00-b597-11eb-8724-2da474e974dd.png",alt:"image"})),Object(a.b)("p",null,"overflow-hidden \uc758 \uc601\uc5ed\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118351626-fa5cb180-b597-11eb-94fb-70477faadf60.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118351691-40197a00-b598-11eb-80c6-90688bb8c155.png",alt:"image"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div style="width:500px">\n    ...\n  <div class="hidden" style="height:30px;background:red;">A</div>\n\n  <div class="hidden" style="height:15px;background:orange;">B</div>\n  <div style=height:30px;background:black></div>\n  \n  <div class="hidden" style="height:30px;background:red;">C</div>\n\n  <div class="hidden" style="height:20px;background:orange;">D</div>\n  <div style="height:30px;background:black;"></div>\n\n  <div class="hidden" style="background:red">E</div>   \n  <div style="height:30px;background:black"></div>   \n  <div class="hidden" style="height:30px;background:orange">F</div>\n  <div style="height:30px;background:black">F</div>\n</div>\n')),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118351781-d0f05580-b598-11eb-8290-2fccaa57b001.png",alt:"image"})),Object(a.b)("p",null,"\uc138\ubc88\uc9f8 black \ube14\ub85d\uc740 hidden \uc694\uc18c\uac00 \uc5c6\uc5b4\uc11c \ub450\ubc88\uc9f8 BFC \uc694\uc18c\uc5d0 \ud574\ub2f9\ud558\uace0 geometry \ub97c \ub113\ud78c\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118351837-275d9400-b599-11eb-896c-2fe534a1ce91.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118352209-1a41a480-b59b-11eb-98b3-97d49aee0703.png",alt:"image"})),Object(a.b)("p",null,"D \uc758 \uacbd\uc6b0 \uac15\uc758\uc5d0\uc11c C \ubc11\uc758 \uacf5\uac04(15px) \uc744 \ub118\uc5b4\uac00\ubbc0\ub85c hidden \uc774 \ub418\uc5b4 \ubcf4\uc774\uc9c0 \uc54a\ub294\ub2e4\uace0 \ub418\uc5b4\uc788\uc73c\ub098\n\uc2e4\ud589 \uacb0\uacfc \ub2e4\uc74c line bound \ub97c \uae30\uc900\uc73c\ub85c \uc601\uc5ed\uc744 \ucc28\uc9c0\ud558\uc5ec \uc0dd\uc131\uc774 \ub418\uc5c8\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118352310-bff51380-b59b-11eb-8236-d10d90449a14.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118352357-021e5500-b59c-11eb-9979-cddbfe9ec20d.png",alt:"image"})),Object(a.b)("p",null,"\ub2e4\uc74c E \uc758 \uc0c8\ub85c\uc6b4 BFC \ub294 line bound \uc758 float:left \uac00 7\ubc88 \ubc15\uc2a4\uc778\ub370 left \uac00 \ubd80\ubaa8\uc758 \uac00\uc7a5 \uc624\ub978\ucabd 500width \uc5d0 \uc704\uce58\ud55c\ub2e4.\n500x \uac00 \uac00\uc7a5 \uccab \uc2dc\uc791\uc774\ubbc0\ub85c \uacb0\uad6d\uc5d4 \ubd80\ubaa8\uc758 geometry \ub97c \ubc97\uc5b4\ub098 hidden \uc774 \ub41c\ub2e4.\n\ud558\uc9c0\ub9cc height \ub294 \ucc28\uc9c0\ud55c\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118352464-8ffa4000-b59c-11eb-97ba-533600c9cb67.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118352547-0139f300-b59d-11eb-8ff5-c15e7e14f15e.png",alt:"image"})),Object(a.b)("p",null,"line box \uac00 \ub354\uc774\uc0c1 \uad00\uc5ec\ud558\uc9c0 \uc54a\ub294 \ubd80\ubd84\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/118352622-5e35a900-b59d-11eb-9407-fec8808df201.png",alt:"image"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div style="width:500px;">\n  <div class="left" style="width:200px;height:150px;background: green">1</div>\n  <div class="right" style="width:50px;height:150px;background: red;">2</div>\n  <div class="right" style="width:50px;height:100px;background: darkred">3</div>\n  <div class="left" style="width:150px;height:50px;background: greenyellow">4</div>\n  <div class="right" style="width:150px;height:70px;background:indianred">5</div>\n  <div class="left" style="width:150px;height:50px;background: darkgreen">6</div>\n  <div class="left" style="width:150px;height:50px;background: darkseagreen">7</div>\n\n  <div class="hidden" style="height:30px;background:red;">A</div>\n  <div class="hidden" style="height:15px;background:orange;">B</div>\n  <div style=height:30px;background:black></div>\n  <div class="hidden" style="height:30px;background:red;">C</div>\n  <div class="hidden" style="height:20px;background:orange;">D</div>\n  <div style="height:30px;background:black;"></div>\n  <div class="hidden" style="background:red">E</div>\n  <div style="height:30px;background:black"></div>\n  <div class="hidden" style="height:30px;background:orange">F</div>\n  <div style="height:30px;background:black"></div>\n</div>\n<style>\n  div {\n      color: white;\n      text-align: center;\n  }\n  .left {\n      float:left;\n  }\n  .right {\n      float:right;\n  }\n  .hidden {\n      overflow: hidden;\n  }\n</style>\n\n')),Object(a.b)("p",null,"\uc5ec\uae30\uae4c\uc9c0 \uace0\uc804 \ub808\uc774\uc544\uc6c3 \uc2dc\uc2a4\ud15c\uc774\ub2e4.\n\ub2e4\ub978\uac83\uc740 grid, flex...\nIE \ud638\ud658\uc5d0 \uc911\uc694\ud558\ub2e4."))}d.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var l=n(0),i=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),o=d(n),g=l,u=o["".concat(c,".").concat(g)]||o[g]||p[g]||a;return n?i.a.createElement(u,b(b({ref:t},s),{},{components:n})):i.a.createElement(u,b({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,c=new Array(a);c[0]=g;var b={};for(var r in t)hasOwnProperty.call(t,r)&&(b[r]=t[r]);b.originalType=e,b.mdxType="string"==typeof e?e:l,c[1]=b;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);