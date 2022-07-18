(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var s=t(3),a=(t(0),t(481));t(492);const c={title:"6-4 \ub4dc\ub7fc\ud1b5 \uadf8\ub9ac\uae30"},r={unversionedId:"css/css-rendering/draw_3d_drum",id:"css/css-rendering/draw_3d_drum",isDocsHomePage:!1,title:"6-4 \ub4dc\ub7fc\ud1b5 \uadf8\ub9ac\uae30",description:"\ub4dc\ub7fc\ud1b5\uc758 \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4.",source:"@site/docs/css/css-rendering/draw_3d_drum.mdx",slug:"/css/css-rendering/draw_3d_drum",permalink:"/docs/css/css-rendering/draw_3d_drum",version:"current",lastUpdatedAt:1626882853,sidebar:"css",previous:{title:"6-3 Transform 3D",permalink:"/docs/css/css-rendering/Transform3D"},next:{title:"7-1 Semantic Web & CSS Query",permalink:"/docs/css/css-rendering/semantic_web"}},i=[{value:"Reference",id:"reference",children:[]}],o={toc:i};function l({components:e,...n}){return Object(a.b)("wrapper",Object(s.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\ub4dc\ub7fc\ud1b5\uc758 ",Object(a.b)("a",{parentName:"p",href:"https://woo-dev.tistory.com/167"},"\uad6c\uc870"),"\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/124756086-101e9f80-df67-11eb-898d-4d32cb02e037.png",alt:"image"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://keithclark.co.uk/labs/css-fps/drum2.png"},"https://keithclark.co.uk/labs/css-fps/drum2.png")),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/124756945-08abc600-df68-11eb-835f-ef9b2d254fd6.png",alt:"image"})))),Object(a.b)("p",null,"CSS Sprite"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud55c\uc7a5\uc758 \uc774\ubbf8\uc9c0\ub97c \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc774\ubbf8\uc9c0\uc640 \ubc31\uadf8\ub77c\uc6b4\ub4dc \ud3ec\uc9c0\uc158\uc744 \uc774\uc6a9\ud574 \uc798\ub77c\uc11c \uc4f0\ub294\uac83"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/31977543/124757211-4dcff800-df68-11eb-9cde-421d8c358dce.png",alt:"image"}))),Object(a.b)("p",null,"3D \uc5d0\uc11c\ub294 \ud55c \uba74\uc744 Face \ub77c\uace0 \ubd80\ub978\ub2e4."),Object(a.b)("p",null,"\uadf8\ub9bc \uc0ac\uc774\uc5d0\uc11c\uc758 \uc704\uce58\ub77c\ub294 \uac1c\ub150\uc774 \uc788\ub2e4.\n3D \uc5d0\uc11c \uc774\ubbf8\uc9c0 \uc18c\uc2a4\ub97c \ud14d\uc2a4\uccd0\ub77c\uace0 \ubd80\ub978\ub2e4.\n\uc5ec\ub7ec\uac1c\uc758 \ud14d\uc2a4\uccd0\ub97c \ub300\uc2e0\ud558\ub294 \ud55c\uc7a5\uc758 \uadf8\ub9bc\uc744 \uc544\ud2c0\ub77c\uc2a4\ub77c\uace0 \ud55c\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"@keyframes spin {\n    to { transform: rotateY(360deg) rotateZ(360deg) rotateX(720deg) }\n}\nhtml, body { height: 100% }\nbody { perspective: 600px; background: #404040 }\n.ani {\n    animation: spin 4s linear infinite;\n}\n.drum { background: url('https://keithclark.co.uk/labs/css-fps/drum2.png')}\n")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/124758720-d4390980-df69-11eb-87ac-9cea626fa03a.png",alt:"image"})),Object(a.b)("p",null,"\ub9cc\ub4e4\uc5b4\uc57c \ud560 \ubaa8\ub4e0 face \uc758 \ubd84\ubaa8\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uc790."),Object(a.b)("p",null,"Dom \uc744 wrapping \ud55c El \uc774\ub77c\ub294 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const El = class {\n    constructor() {\n        this.el = document.createElement('div');\n    }\n\n    set class(v) { this.el.className = v; }\n}\n\nconst Face = class extends El {\n    constructor(w, h, x, y, z, rx, ry, rz, tx, ty) {\n        super();\n        this.el.style.cssText = `\n            position: absolute;\n            width: ${w}px; height: ${h}px;\n            margin: -${h/2}px 0 0 -${w/2}px;Y(${ry}rad) rotateZ(${rz}rad);\n            background-position: -${tx}px ${ty}px;\n        `;\n    }\n}\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),Object(a.b)("a",{parentName:"h5",href:"https://developer.mozilla.org/ko/docs/Web/CSS/margin"},"margin"))),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"margin-top, margin-right, margin-bottom, margin-left \uc758 \ub2e8\ucd95 \uc18d\uc131"))),Object(a.b)("p",null,"\uc911\uac04\uc810\uc744 \ubc14\ub77c\ubcfc \uc218 \uc788\uac8c \ubcc0\ud615\uc744 \ud55c\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/124760985-46125280-df6c-11eb-8bac-ace3878ff114.png",alt:"image"})),Object(a.b)("p",null,"\ub2e4\uc74c\uc740 face \ub97c \ubaa8\uc740 mesh \uac00 \ud544\uc694\ud558\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/124761789-20397d80-df6d-11eb-8b96-fe9ea035ff42.png",alt:"image"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const Mesh = class extends El {\n    constructor(l, t) {\n        super();\n        this.el.style.cssText = `\n            position: absolute;\n            left: ${l}; top: ${t};\n            transform-style: preserve-3d\n        `;\n    }\n    add(face) {\n        this.el.appendChild(face.el);\n        return face;\n    }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const mesh = new Mesh('50%', '50%');\n// \ubc18\uc9c0\ub984, \uc6d0\ud1b5\uc758 \ub192\uc774, \uc6d0\ud1b5 \ub4f1\ubd84 \uc218\nconst r = 100, height = 196, sides = 20;\n\n// \uc911\uc2ec\uc810\uc744 \ud5a5\ud55c \uac01\ub3c4, (Math.PI : 180 deg)\nconst sideAngle = (Math.PI / sides) * 2;\n\n// \ube57\ubcc0\uc758 \uae38\uc774.\nconst sideLen = r * Math.tan(Math.PI / sides);\n\nfor (let c = 0; c < sides; c++) {\n    const x = Math.sin(sideAngle * c) * r / 2;\n    const z = Math.cos(sideAngle * c) * r / 2;\n    const ry = Math.atan2(x, z);\n    const face = new Face(sideLen + 1, height, x, 0, z, 0, ry, 0, sideLen * c, 0);\n    face.class = 'drum';\n    mesh.add(face);\n}\n\nconst top = new Face(100, 100, 0 , -98, 0, Math.PI/2, 0, 0, 0, 100);\nconst bottom = new Face(100, 100, 0 , 98, 0, Math.PI/2, 0, 0, 0, 100);\ntop.class = 'drum';\nbottom.class = 'drum';\nmesh.add(top);\nmesh.add(bottom);\n")),Object(a.b)("details",null,Object(a.b)("summary",null,"\uc804\uccb4 \ucf54\ub4dc"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <title>CSS Drum(3D)</title>\n  <style>\n      @keyframes spin {\n          to {\n              transform: rotateY(360deg) rotateZ(360deg) rotateX(720deg);\n          }\n      }\n      html,\n      body {\n          height: 100%;\n      }\n      body {\n          perspective: 600px;\n          background: #404040;\n      }\n      .ani {\n          animation: spin 4s linear infinite;\n      }\n      .drum {\n          background: url("http://keithclark.co.uk/labs/css-fps/drum2.png");\n      }\n  </style>\n</head>\n<body>\n<script>\n  // \ucf54\ub4dc\uc2a4\ud53c\uce2076 - CSS Rendering https://www.youtube.com/watch?v=Tf5KvpYNNv8\n  const El = class {\n    constructor() {\n      this.el = document.createElement("div");\n    }\n    set class(v) {\n      this.el.className = v;\n    }\n  };\n\n  /**\n   * \ud558\ub098\uc758 \uba74\n   * - margin : x,y\ub97c \uc88c\uc0c1\ub2e8\uc774 \uc544\ub2cc \uc911\uc559\uc810\uc73c\ub85c \ud558\uae30\uc704\ud55c \ubc29\ubc95(\uacc4\uc0b0\uc758 \ud3b8\uc758\uc131) - CSS\uc5d0\uc11c \uc911\uc559\uc815\ub82c\ud558\ub294 \uae30\ubc95\uc774\uae30\ub3c4\ud568\n   * - rotateX : deg\uac00 \uc544\ub2cc radian\uc73c\ub85c (\uc218\ud559\uc801 \uacf5\uc2dd \uc0ac\uc6a9\uc744 \uc704\ud574)\n   */\n  const Face = class extends El {\n    constructor(w, h, x, y, z, rx, ry, rz, tx, ty) {\n      super();\n      this.el.style.cssText = `\n              position: absolute;\n              width:${w}px;\n              height:${h}px;\n              margin: -${h * 0.5}px 0 0 -${w * 0.5}px;\n              transform: translate3d(${x}px, ${y}px, ${z}px)\n              rotateX(${rx}rad) rotateY(${ry}rad) rotateZ(${rz}rad);\n              background-position: -${tx}px ${ty}px;\n              backface-visibility: hidden;\n            `;\n    }\n  };\n\n  /**\n   * face\uc758 \uadf8\ub8f9\n   */\n  const Mesh = class extends El {\n    constructor(l, t) {\n      super();\n      this.el.style.cssText = `\n              position: absolute;\n              left: ${l};\n              top: ${t};\n              transform-style: preserve-3d;\n            `;\n    }\n    add(face) {\n      this.el.appendChild(face.el);\n      return face;\n    }\n  };\n\n  const mesh = new Mesh("50%", "50%");\n  const r = 100;\n  const height = 196;\n  const sides = 20;\n  const sideAngle = (Math.PI / sides) * 2; // 360deg\uc0c1\uc758 \uacc4\uc0b0\uc744 \uc704\ud574 x 2\n  const sideLen = r * Math.tan(Math.PI / sides);\n\n  // 3D\uc5d0\uc11c \ud3c9\uba74\uc801\uc778 \uadf8\ub9bc\uc744 \uadf8\ub9b4\ub54c x, z\ub85c \uacc4\uc0b0\n  for (let c = 0; c < sides; c++) {\n    const x = (Math.sin(sideAngle * c) * r) / 2;\n    const z = (Math.cos(sideAngle * c) * r) / 2;\n    const ry = Math.atan2(x, z);\n    const face = new Face(\n      sideLen + 1,\n      height,\n      x,\n      0,\n      z,\n      0,\n      ry,\n      0,\n      sideLen * c,\n      0\n    );\n    face.class = "drum";\n    mesh.add(face);\n  }\n\n  const topFace = new Face(100, 100, 0, -98, 0, Math.PI / 2, 0, 0, 0, 100);\n  const bottomFace = new Face(\n    100,\n    100,\n    0,\n    98,\n    0,\n    -Math.PI / 2,\n    0,\n    0,\n    0,\n    100\n  );\n  topFace.class = "drum";\n  bottomFace.class = "drum";\n  mesh.add(topFace);\n  mesh.add(bottomFace);\n  mesh.class = "ani";\n  document.body.appendChild(mesh.el);\n<\/script>\n</body>\n</html>\n')))),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://gist.github.com/pistis/2926f06a4caf18f00f16b0e35d46b762"},"https://gist.github.com/pistis/2926f06a4caf18f00f16b0e35d46b762")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://ktpark1651.tistory.com/208?category=681949"},"https://ktpark1651.tistory.com/208?category=681949"))))}l.isMDXComponent=!0},492:function(e,n,t){"use strict";var s=t(0),a=t.n(s),c=t(501);n.a=({content:e})=>a.a.createElement("div",null,Object(c.a)(e))}}]);