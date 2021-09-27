(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{310:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(3),l=t(7),r=(t(0),t(414)),c={title:"8. finalizer \uc640 cleaner \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c"},i={unversionedId:"java/effective-java/ch2/ITEM8",id:"java/effective-java/ch2/ITEM8",isDocsHomePage:!1,title:"8. finalizer \uc640 cleaner \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c",description:"finalizer \uc640 cleaner \ub294 \uc790\ubc14\uc758 \ub450\uac00\uc9c0 \uac1d\uccb4 \uc18c\uba78\uc790\uc774\ub2e4.",source:"@site/docs/java/effective-java/ch2/ITEM8.md",slug:"/java/effective-java/ch2/ITEM8",permalink:"/docs/java/effective-java/ch2/ITEM8",version:"current",sidebar:"effectiveJava",previous:{title:"7. \ub2e4 \uc4f4 \uac1d\uccb4 \ucc38\uc870\ub97c \ud574\uc81c\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM7"},next:{title:"9. try-finally \ubcf4\ub2e4\ub294 try-with-resources \ub97c \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM9"}},b=[{value:"Cleaner",id:"cleaner",children:[]},{value:"finalizer \uc640 cleaner \uc758 \ubb38\uc81c\uc810\ub4e4",id:"finalizer-\uc640-cleaner-\uc758-\ubb38\uc81c\uc810\ub4e4",children:[]},{value:"finalizer / cleaner \uc758 \ub300\uc548",id:"finalizer--cleaner-\uc758-\ub300\uc548",children:[]},{value:"finalizer / cleaner \uc758 \uc4f0\uc784\uc0c8",id:"finalizer--cleaner-\uc758-\uc4f0\uc784\uc0c8",children:[]},{value:"Reference",id:"reference",children:[]}],o={toc:b};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"finalizer \uc640 cleaner \ub294 \uc790\ubc14\uc758 \ub450\uac00\uc9c0 \uac1d\uccb4 \uc18c\uba78\uc790\uc774\ub2e4. "),Object(r.b)("h2",{id:"cleaner"},"Cleaner"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java 9\uc5d0\uc11c\ub294 fianlizer\uac00 deprecated \ub410\uace0 cleaner\uac00 \uc0c8\ub85c \uc0dd\uacbc\ub2e4."),Object(r.b)("li",{parentName:"ul"},"cleaner\ub294 \ubcc4\ub3c4\uc758 \uc4f0\ub808\ub4dc\ub97c \uc0ac\uc6a9\ud574\uc11c finalizer\ubcf4\ub2e4\ub294 \ub35c \uc704\ud5d8\ud558\uc9c0\ub9cc, \uc5ec\uc804\ud788 \uc608\uce21\ubd88\uac00\ud558\uace0, \ub290\ub9ac\uba70 \ubd88\ud544\uc694\ud558\ub2e4.")),Object(r.b)("h2",{id:"finalizer-\uc640-cleaner-\uc758-\ubb38\uc81c\uc810\ub4e4"},"finalizer \uc640 cleaner \uc758 \ubb38\uc81c\uc810\ub4e4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc608\uce21\uc774 \uc5b4\ub824\uc6c0"),Object(r.b)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ubd88\ud544\uc694\ud568"),Object(r.b)("li",{parentName:"ul"},"\uc624\ub3d9\uc791, \ub0ae\uc740\uc131\ub2a5, \uc774\uc2dd\uc131 \ubb38\uc81c, \uc704\ud5d8\uc131")),Object(r.b)("h4",{id:"1-\uc989\uc2dc-\uc2e4\ud589\ub41c\ub2e4\ub294-\ubcf4\uc7a5\uc774-\uc5c6\ub2e4"},"1. \uc989\uc2dc \uc2e4\ud589\ub41c\ub2e4\ub294 \ubcf4\uc7a5\uc774 \uc5c6\ub2e4."),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac1d\uccb4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uac8c \ub41c \ud6c4 finalizer / cleaner \uc758 \uc218\ud589\uc2dc\uc810\uc744 \uc54c \uc218 \uc5c6\ub2e4."),Object(r.b)("li",{parentName:"ul"},"finalizer / cleaner \uc758 \uc218\ud589\uc740, \uc804\uc801\uc73c\ub85c GC \uc54c\uace0\ub9ac\uc998\uc5d0 \ub2ec\ub838\ub2e4."),Object(r.b)("li",{parentName:"ul"},"finalizer \uc2a4\ub808\ub4dc\ub294 \ub2e4\ub978 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ubcf4\ub2e4 \uc6b0\uc120\uc21c\uc704\uac00 \ub0ae\uc544 \uc2e4\ud589 \uae30\ud68c\ub97c \uc81c\ub300\ub85c \uc5bb\uc9c0 \ubabb\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"cleaner \ub294 \uc790\uc2e0\uc744 \uc218\ud589\ud560 \uc2a4\ub808\ub4dc\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\ub2e4.")),Object(r.b)("h4",{id:"2\uc218\ud589-\uc5ec\ubd80\ub97c-\ubcf4\uc7a5\ud558\uc9c0-\uc54a\ub294\ub2e4"},"2.\uc218\ud589 \uc5ec\ubd80\ub97c \ubcf4\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(r.b)("hr",null),Object(r.b)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac19\uc740 \uacf5\uc720 \uc790\uc6d0\uc758 \uc601\uad6c Lock \ud574\uc81c\ub97c finalizer \ub098 cleaner \uc5d0 \ub9e1\uaca8 \ub193\uc73c\uba74 \ubd84\uc0b0 \uc2dc\uc2a4\ud15c \uc804\uccb4\uac00 \uc11c\uc11c\ud788 \uba48\ucd9c\uac83  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub97c \uc601\uad6c\uc801\uc73c\ub85c \uc218\uc815\ud558\ub294 \uc791\uc5c5\uc5d0\uc11c\ub294 \uc808\ub300 \uc758\uc874\ud574\uc120 \uc548\ub41c\ub2e4.")),Object(r.b)("h4",{id:"3finalizer-\ub3d9\uc791-\uc911-\ubc1c\uc0dd\ud55c-\uc608\uc678\ub294-\ubb34\uc2dc\ub41c\ub2e4"},"3.finalizer \ub3d9\uc791 \uc911 \ubc1c\uc0dd\ud55c \uc608\uc678\ub294 \ubb34\uc2dc\ub41c\ub2e4."),Object(r.b)("hr",null),Object(r.b)("p",null,"\uacbd\uace0 \uc870\ucc28 \ucd9c\ub825\ud558\uc9c0 \uc54a\uc74c."),Object(r.b)("p",null,"\uc7a1\uc9c0 \ubabb\ud55c \uc608\uc678 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \uac1d\uccb4\ub294 \uc790\uce6b \ub9c8\ubb34\ub9ac\uac00 \ub35c \ub41c \uc0c1\ud0dc\ub85c \ub0a8\uc744 \uc218 \uc788\ub2e4."),Object(r.b)("p",null,"Finalize\ub97c \uc2e4\ud589\ud558\ub294 \ub3d9\uc548 catch\ub418\uc9c0 \uc54a\ub294 \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\uba74 \uc608\uc678\uac00 \ubb34\uc2dc\ub418\uace0, Finalize\uac00 \ub05d\ub09c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc774\ub85c\uc778\ud574 \uac1d\uccb4\uac00 \ub9dd\uac00\uc9c8 \uac00\ub2a5\uc131\uc774 \uc788\uace0, \ub2e4\ub978 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ud574\ub2f9 \uac1d\uccb4\uc5d0 \uc811\uadfc\ud558\uba74 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"cleaner \ub97c \uc0ac\uc6a9\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc790\uc2e0\uc758 \uc2a4\ub808\ub4dc\ub97c \ud1b5\uc81c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7f0 \ubb38\uc81c\uac00 \uc5c6\ub2e4."))),Object(r.b)("h4",{id:"4-\uc2ec\uac01\ud55c-\uc131\ub2a5-\ubb38\uc81c"},"4. \uc2ec\uac01\ud55c \uc131\ub2a5 \ubb38\uc81c"),Object(r.b)("hr",null),Object(r.b)("p",null,"GC \uc758 \ud6a8\uc728\uc744 \ub5a8\uc5b4 \ub728\ub9b0\ub2e4."),Object(r.b)("h4",{id:"5-finalizer-\uacf5\uaca9\uc5d0-\ub178\ucd9c\ub418\uc5b4-\uc2ec\uac01\ud55c-\ubcf4\uc548-\ubb38\uc81c"},"5. finalizer \uacf5\uaca9\uc5d0 \ub178\ucd9c\ub418\uc5b4 \uc2ec\uac01\ud55c \ubcf4\uc548 \ubb38\uc81c"),Object(r.b)("hr",null),Object(r.b)("p",null,"finalizer \uacf5\uaca9 \uc6d0\ub9ac"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0dd\uc131\uc790\ub098 \uc9c1\ub82c\ud654 \uacfc\uc815\uc5d0\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\uba74,",Object(r.b)("br",{parentName:"li"}),"\uc0dd\uc131 \ub418\ub2e4\ub9cc \uac1d\uccb4\uc5d0\uc11c \uc545\uc758\uc801\uc778 \ud558\uc704 \ud074\ub798\uc2a4\uc758 finalizer \uac00 \uc218\ud589\ub420 \uc218 \uc788\ub2e4.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\uc545\uc758\uc801\uc778 \ud558\uc704 \ud074\ub798\uc2a4\uc758 finalizer    ")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"finalizer \ub294 \uc815\uc801 \ud544\ub4dc\uc5d0 \uc790\uc2e0\uc758 \ucc38\uc870\ub97c \ud560\ub2f9\ud558\uc5ec GC \uac00 \uc218\uc9d1\ud558\uc9c0 \ubabb\ud558\uac8c\ud568")),Object(r.b)("p",{parentName:"div"},"\uac1d\uccb4 \uc0dd\uc131\uc744 \ub9c9\uc73c\ub824\uba74 \uc0dd\uc131\uc790\uc5d0\uc11c \uc608\uc678\ub97c \ub358\uc9c0\ub294 \uac83\ub9cc\uc73c\ub85c \ucda9\ubd84\ud558\uc9c0\ub9cc, finalizer \uac00 \uc788\ub2e4\uba74 \uadf8\ub807\uc9c0 \uc54a\ub2e4."),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"final \ud074\ub798\uc2a4\ub294 \ud558\uc704 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc218 \uc5c6\uc73c\ub2c8 finalizer \uacf5\uaca9\uc5d0\uc11c \uc548\uc804\ud568."),Object(r.b)("li",{parentName:"ul"},"final \ud074\ub798\uc2a4\uac00 \uc544\ub2c8\uba74, \uc544\ubb34\uc77c\ub3c4 \ud558\uc9c0 \uc54a\ub294 finalize \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4e4\uace0 final \ub85c \uc120\uc5b8\ud558\uc790.")),Object(r.b)("blockquote",{parentName:"div"},Object(r.b)("p",{parentName:"blockquote"},"?? \uc2e4\uc81c finalizer \uacf5\uaca9\uc774 \ubc1c\uc0dd\ud55c \uc0ac\ub840\uac00 \ubb34\uc5c7\uc774 \uc788\uc744\uae4c?")))),Object(r.b)("h2",{id:"finalizer--cleaner-\uc758-\ub300\uc548"},"finalizer / cleaner \uc758 \ub300\uc548"),Object(r.b)("h4",{id:"1autoclosable-\uc758-\uad6c\ud604"},"1.AutoClosable \uc758 \uad6c\ud604"),Object(r.b)("hr",null),Object(r.b)("p",null,"\uc608\uc678\uac00 \ubc1c\uc0dd\ud574\ub3c4 \uc81c\ub300\ub85c \uc885\ub8cc\ud560 \uc218 \uc788\uac8c \ucc98\ub9ac\ud574\uc8fc\ub294 try-with-resouces\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),Object(r.b)("h4",{id:"2-\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c-\uc778\uc2a4\ud134\uc2a4\ub97c-\ub2e4-\uc4f0\uace0\ub098\uba74-close-\uba54\uc11c\ub4dc-\ud638\ucd9c"},"2. \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e4 \uc4f0\uace0\ub098\uba74 close \uba54\uc11c\ub4dc \ud638\ucd9c"),Object(r.b)("hr",null),Object(r.b)("p",null,"\uc608\uc678\uac00 \ubc1c\uc0dd\ud574\ub3c4 \uc81c\ub300\ub85c \uc885\ub8cc\ub418\ub3c4\ub85d ",Object(r.b)("inlineCode",{parentName:"p"},"try-with-resources")," \ub97c \uc0ac\uc6a9 ",Object(r.b)("a",{parentName:"p",href:"/docs/java/effective-java/ch2/ITEM9"},"9")),Object(r.b)("h4",{id:"3-\uc778\uc2a4\ud134\uc2a4-\uc790\uc2e0\uc774-\ub2eb\ud614\ub294\uc9c0-\ucd94\uc801\ud558\uae30"},"3. \uc778\uc2a4\ud134\uc2a4 \uc790\uc2e0\uc774 \ub2eb\ud614\ub294\uc9c0 \ucd94\uc801\ud558\uae30"),Object(r.b)("hr",null),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"close \uba54\uc11c\ub4dc\uc5d0\uc11c, \uac1d\uccb4\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc74c\uc744 \ud544\ub4dc\uc5d0 \uae30\ub85d\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\ub2e4\ub978 \uba54\uc11c\ub4dc\ub294 \uc774 \ud544\ub4dc\ub97c \uac80\uc0ac\ud574\uc11c \uac1d\uccb4\uac00 \ub2eb\ud78c \ud6c4 \ubd88\ub838\ub2e4\uba74 IllegalStateException \uc744 \ub358\uc9c4\ub2e4.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"?? 2 \ubc88\uc758 \ubc29\ubc95\uc740 \uc5b4\ub5bb\uac8c \uc4f0\uc774\ub294 \uac83\uc77c\uae4c? \uc5bc\ub9c8\ub098 \uc4f0\uc77c\uae4c? ")),Object(r.b)("h2",{id:"finalizer--cleaner-\uc758-\uc4f0\uc784\uc0c8"},"finalizer / cleaner \uc758 \uc4f0\uc784\uc0c8"),Object(r.b)("h4",{id:"1-\ud074\ub77c\uc774\uc5b8\ud2b8\uac00-\ud558\uc9c0-\uc54a\uc740-\uc790\uc6d0\ud68c\uc218\ub97c-\ub2a6\uac8c\ub77c\ub3c4-\ud574\uc8fc\ub294\uac8c-\ub0ab\ub2e4"},"1. \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud558\uc9c0 \uc54a\uc740 \uc790\uc6d0\ud68c\uc218\ub97c \ub2a6\uac8c\ub77c\ub3c4 \ud574\uc8fc\ub294\uac8c \ub0ab\ub2e4."),Object(r.b)("hr",null),Object(r.b)("p",null,"FileInputStrean, FileOutputStream, ThreadPoolExecutor \uac00 \ub300\ud45c\uc801\uc73c\ub85c\n\uc548\uc804\ub9dd \uc5ed\ud560\uc758 finalizer \ub97c \uc81c\uacf5\ud568."),Object(r.b)("h4",{id:"2-\ub124\uc774\ud2f0\ube0c-\ud53c\uc5b4\uc640-\uc5f0\uacb0\ub41c-\uac1d\uccb4"},"2. \ub124\uc774\ud2f0\ube0c \ud53c\uc5b4\uc640 \uc5f0\uacb0\ub41c \uac1d\uccb4"),Object(r.b)("hr",null),Object(r.b)("h5",{id:"native-peer"},"Native Peer"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc77c\ubc18 \uc790\ubc14 \uac1d\uccb4\uac00 \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uae30\ub2a5\uc744 \uc704\uc784\ud55c \ub124\uc774\ud2f0\ube0c \uac1d\uccb4"),Object(r.b)("li",{parentName:"ul"},"\ub124\uc774\ud2f0\ube0c \ud53c\uc5b4\ub294 \uc790\ubc14 \uac1d\uccb4\uac00 \uc544\ub2c8\ub2c8 GC \ub294 \uc874\uc7ac\ub97c \uc54c\uc9c0 \ubabb\ud558\uc5ec \ud68c\uc218\ud558\uc9c0 \uc54a\uc74c")),Object(r.b)("h5",{id:"\uc870\uac74"},"\uc870\uac74"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc131\ub2a5\uc800\ud558\ub97c \uac10\ub2f9\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ub124\uc774\ud2f0\ube0c\ud53c\uc5b4\uac00 \uc2ec\uac01\ud55c \uc790\uc6d0??\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc544\uc57c \ud55c\ub2e4.")),Object(r.b)("h5",{id:"close-\uba54\uc11c\ub4dc\uc758-\uc0ac\uc6a9"},"close \uba54\uc11c\ub4dc\uc758 \uc0ac\uc6a9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc131\ub2a5\uc800\ud558\ub97c \uac10\ub2f9\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0"),Object(r.b)("li",{parentName:"ul"},"\ub124\uc774\ud2f0\ube0c \ud53c\uc5b4\uac00 \uc0ac\uc6a9\ud558\ub294 \uc790\uc6d0\uc744 \uc989\uc2dc \ud68c\uc218\ud574\uc57c \ud560 \uacbd\uc6b0")),Object(r.b)("h4",{id:"3-cleaner"},"3. cleaner"),Object(r.b)("hr",null),Object(r.b)("p",null,"cleaner \ub294 \uc0ac\uc6a9\ud558\uae30\uc5d0 \uc870\uae08 \uae4c\ub2e4\ub86d\ub2e4."),Object(r.b)("p",null,"Room \ud074\ub798\uc2a4\ub85c \uc774 \uae30\ub2a5\uc744 \uc124\uba85\ud558\uace0 \uc788\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"room \uc744 \uc218\uac70\ud558\uae30 \uc804, \ubc18\ub4dc\uc2dc clean \uccad\uc18c \ud574\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Room \ud074\ub798\uc2a4\ub294 AutoCloseable \uc744 \uad6c\ud604\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc790\ub3d9 \uccad\uc18c \uc548\uc804\ub9dd\uc774 cleaner \ub97c \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uc9c0\ub294 \ub0b4\ubd80 \uad6c\ud604 \ubc29\uc2dd\uc5d0 \uad00\ud55c \ubb38\uc81c\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"finalizer \uc640 \ub2ec\ub9ac cleaner \ud074\ub798\uc2a4\uc758 public API \uc5d0 \ub098\ud0c0\ub098\uc9c0 \uc54a\ub294\ub2e4. ??")))),Object(r.b)("p",null,"cleaner \ub97c \uc548\uc804\ub9dd\uc73c\ub85c \ud65c\uc6a9\ud558\ub294 AutoCloseable \ud074\ub798\uc2a4    "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class Room implements AutoCloseable {\n    private static final Cleaner cleaner = Cleaner.create();\n        \n    // \uccad\uc18c\uac00 \ud544\uc694\ud55c \uc790\uc6d0. \uc808\ub300 Room \uc744 \ucc38\uc870\ud574\uc120 \uc548\ub41c\ub2e4.\n    // Room \uc778\uc2a4\ud134\uc2a4\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \uc21c\ud658\ucc38\uc870\uac00 \uc0dd\uaca8 GC \uac00 Room \uc778\uc2a4\ud134\uc2a4\ub97c \ud68c\uc218\ud558\uc9c0 \uc54a\uc74c\n    // \uc815\uc801\uc774 \uc544\ub2cc \uc911\ucca9 \ud074\ub798\uc2a4\ub294 \uc790\ub3d9\uc73c\ub85c \ubc14\uae65 \uac1d\uccb4\uc758 \ucc38\uc870\ub97c \uac16\ub294\ub2e4.\n    // \ub78c\ub2e4\ub3c4 \ubc14\uae65\uac1d\uccb4\uc758 \ucc38\uc870\ub97c \uac16\uae30 \uc27d\ub2e4.\n    private static class State implements Runnable {\n        int numJunkPiles;   // Room \uc548\uc758 \uc4f0\ub808\uae30 \uc218\n        \n        State(int numJunkPiles) {\n            this.numJunkPiles = numJunkPiles;\n        }\n    \n        // close \uba54\uc11c\ub4dc\ub098, cleaner \uac00 \ud638\ucd9c\ub41c\ub2e4. .. \n        // cleanable \uc5d0 \uc758\ud574 \ub531 \ud55c\ubc88 \ud638\ucd9c\ub41c\ub2e4\uace0 \ud568.\n        // \ubcf4\ud1b5\uc740 Room \uc758 close \ub97c \ud638\ucd9c\ud560 \ub54c \ud638\ucd9c\ub428\n        // GC \uac00 Room \uc744 \ud68c\uc218\ud560 \ub54c\uae4c\uc9c0 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 close \ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \n        // cleaner \uac00 State \uc758 run \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c \ud560 \uac83\uc784.\n        @Override public void run() {\n            System.out.println("\ubc29 \uccad\uc18c");\n            numJunkPiles = 0;\n        }\n    }\n\n    // \ubc29\uc758 \uc0c1\ud0dc, cleanable \uacfc \uacf5\uc720\ud568.\n    private final State state; \n\n    // Cleanable \uac1d\uccb4, \uc218\uac70 \ub300\uc0c1\uc774 \ub418\uba74 \ubc29\uc744 \uccad\uc18c\ud55c\ub2e4.\n    private final Cleaner.Cleanable cleanable;\n\n    public Room(int numJunkPiles) {\n        state = new State(numJunkPiles);\n        cleanable = cleaner.register(this, state);\n    }\n\n    @Override public void close() {\n        cleanable.clean();\n    }\n} \n')),Object(r.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ubaa8\ub4e0 Room \uc0dd\uc131\uc744 ",Object(r.b)("inlineCode",{parentName:"p"},"try-with-resources")," \ube14\ub85d\uc73c\ub85c \uac10\uc30c\ub2e4\uba74 \uc790\ub3d9 \uccad\uc18c\ub294 \uc804\ud600 \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4.\n",Object(r.b)("inlineCode",{parentName:"p"},'System.out.println("\ubc29 \uccad\uc18c");')," \uac00 \uac19\uc774 \uc2e4\ud589 \ub420 \uac83\uc774\ub2e4. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class Adult {\n    public static void main(String[] args) {\n        try (Room myRoom = new Room(7)) {\n            System.out.println("hi~");\n        }\n    }\n}\n')),Object(r.b)("p",null,"\ub9cc\uc57d ",Object(r.b)("inlineCode",{parentName:"p"},"try-with-resources")," \ube14\ub85d \uc774 \uc5c6\ub2e4\uba74,\n",Object(r.b)("inlineCode",{parentName:"p"},'System.out.println("\ubc29 \uccad\uc18c");')," \uac00 \ucd9c\ub825\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4.\nclean \uc758 \uc608\uce21\ud560 \uc218 \uc5c6\ub294 \ud2b9\uc9d5 \ub54c\ubb38\uc774\ub2e4."),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/8_finalizer%EC%99%80_cleaner_%EC%82%AC%EC%9A%A9%EC%9D%84_%ED%94%BC%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/8_finalizer%EC%99%80_cleaner_%EC%82%AC%EC%9A%A9%EC%9D%84_%ED%94%BC%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md"))))}u.isMDXComponent=!0},414:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),u=function(e){var n=l.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return l.a.createElement(o.Provider,{value:n},e.children)},j={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},O=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(t),O=a,m=p["".concat(c,".").concat(O)]||p[O]||j[O]||r;return t?l.a.createElement(m,i(i({ref:n},o),{},{components:t})):l.a.createElement(m,i({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=O;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<r;o++)c[o]=t[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);