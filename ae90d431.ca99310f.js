(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{154:function(e,n,l){"use strict";l.r(n),l.d(n,"frontMatter",(function(){return i})),l.d(n,"metadata",(function(){return c})),l.d(n,"toc",(function(){return b})),l.d(n,"default",(function(){return o}));var t=l(3),a=l(7),r=(l(0),l(191)),i={},c={unversionedId:"java/effective-java/ch2/ITEM8",id:"java/effective-java/ch2/ITEM8",isDocsHomePage:!1,title:"ITEM8",description:"ITEM8 finalizer \uc640 cleaner \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c",source:"@site/docs/java/effective-java/ch2/ITEM8.md",slug:"/java/effective-java/ch2/ITEM8",permalink:"/docs/java/effective-java/ch2/ITEM8",version:"current"},b=[{value:"\ubb38\uc81c\uc810\ub4e4",id:"\ubb38\uc81c\uc810\ub4e4",children:[{value:"\uc989\uc2dc \uc2e4\ud589\ub41c\ub2e4\ub294 \ubcf4\uc7a5\uc774 \uc5c6\ub2e4.",id:"\uc989\uc2dc-\uc2e4\ud589\ub41c\ub2e4\ub294-\ubcf4\uc7a5\uc774-\uc5c6\ub2e4",children:[]},{value:"\uc218\ud589 \uc5ec\ubd80\ub97c \ubcf4\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4.",id:"\uc218\ud589-\uc5ec\ubd80\ub97c-\ubcf4\uc7a5\ud558\uc9c0-\uc54a\ub294\ub2e4",children:[]},{value:"finalizer \ub3d9\uc791 \uc911 \ubc1c\uc0dd\ud55c \uc608\uc678\ub294 \ubb34\uc2dc\ub41c\ub2e4.",id:"finalizer-\ub3d9\uc791-\uc911-\ubc1c\uc0dd\ud55c-\uc608\uc678\ub294-\ubb34\uc2dc\ub41c\ub2e4",children:[]},{value:"\uc2ec\uac01\ud55c \uc131\ub2a5 \ubb38\uc81c",id:"\uc2ec\uac01\ud55c-\uc131\ub2a5-\ubb38\uc81c",children:[]},{value:"finalizer \uacf5\uaca9\uc5d0 \ub178\ucd9c\ub418\uc5b4 \uc2ec\uac01\ud55c \ubcf4\uc548 \ubb38\uc81c",id:"finalizer-\uacf5\uaca9\uc5d0-\ub178\ucd9c\ub418\uc5b4-\uc2ec\uac01\ud55c-\ubcf4\uc548-\ubb38\uc81c",children:[]}]},{value:"finalizer / cleaner \uc758 \ub300\uc548",id:"finalizer--cleaner-\uc758-\ub300\uc548",children:[{value:"AutoClosable \uc758 \uad6c\ud604",id:"autoclosable-\uc758-\uad6c\ud604",children:[]},{value:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e4 \uc4f0\uace0\ub098\uba74 close \uba54\uc11c\ub4dc \ud638\ucd9c",id:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c-\uc778\uc2a4\ud134\uc2a4\ub97c-\ub2e4-\uc4f0\uace0\ub098\uba74-close-\uba54\uc11c\ub4dc-\ud638\ucd9c",children:[]},{value:"\uc778\uc2a4\ud134\uc2a4 \uc790\uc2e0\uc774 \ub2eb\ud614\ub294\uc9c0 \ucd94\uc801\ud558\uae30",id:"\uc778\uc2a4\ud134\uc2a4-\uc790\uc2e0\uc774-\ub2eb\ud614\ub294\uc9c0-\ucd94\uc801\ud558\uae30",children:[]}]},{value:"finalizer / cleaner \uc758 \uc4f0\uc784\uc0c8",id:"finalizer--cleaner-\uc758-\uc4f0\uc784\uc0c8",children:[{value:"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud558\uc9c0 \uc54a\uc740 \uc790\uc6d0\ud68c\uc218\ub97c \ub2a6\uac8c\ub77c\ub3c4 \ud574\uc8fc\ub294\uac8c \ub0ab\ub2e4.",id:"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00-\ud558\uc9c0-\uc54a\uc740-\uc790\uc6d0\ud68c\uc218\ub97c-\ub2a6\uac8c\ub77c\ub3c4-\ud574\uc8fc\ub294\uac8c-\ub0ab\ub2e4",children:[]},{value:"\ub124\uc774\ud2f0\ube0c \ud53c\uc5b4\uc640 \uc5f0\uacb0\ub41c \uac1d\uccb4",id:"\ub124\uc774\ud2f0\ube0c-\ud53c\uc5b4\uc640-\uc5f0\uacb0\ub41c-\uac1d\uccb4",children:[]},{value:"cleaner",id:"cleaner",children:[]}]}],u={toc:b};function o(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},u,l,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"item8-finalizer-\uc640-cleaner-\uc0ac\uc6a9\uc744-\ud53c\ud558\ub77c"},"ITEM8 finalizer \uc640 cleaner \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c"),Object(r.b)("p",null,"\uc774\ubc88 \ub0b4\uc6a9\uc740 \uc798 \uc640\ub2ff\uc9c0 \uc54a\uc544\uc11c \ub0b4\uc6a9\uc744 \uc801\uae30\ub9cc \ud558\uc600\uc2b5\ub2c8\ub2e4. \uc5bc\ub9c8\ub098 \uc758\ubbf8\uac00 \uc788\uc744\uae4c \ubaa8\ub974\uaca0\ub124\uc694\n",Object(r.b)("inlineCode",{parentName:"p"},"try-with-resources"),"\ub97c \uc704\ud55c \ub0b4\uc6a9\uc778 \uac83 \uac19\uae30\ub3c4 \ud569\ub2c8\ub2e4."),Object(r.b)("h2",{id:"\ubb38\uc81c\uc810\ub4e4"},"\ubb38\uc81c\uc810\ub4e4"),Object(r.b)("p",null,"\uc790\ubc14\uc758 \ub450\uac00\uc9c0 \uac1d\uccb4 \uc18c\uba78\uc790 ",Object(r.b)("inlineCode",{parentName:"p"},"finalizer")," ",Object(r.b)("inlineCode",{parentName:"p"},"cleaner")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc608\uce21\uc774 \uc5b4\ub824\uc6c0"),Object(r.b)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ubd88\ud544\uc694\ud568"),Object(r.b)("li",{parentName:"ul"},"\uc624\ub3d9\uc791, \ub0ae\uc740\uc131\ub2a5, \uc774\uc2dd\uc131 \ubb38\uc81c, \uc704\ud5d8\uc131")),Object(r.b)("h3",{id:"\uc989\uc2dc-\uc2e4\ud589\ub41c\ub2e4\ub294-\ubcf4\uc7a5\uc774-\uc5c6\ub2e4"},"\uc989\uc2dc \uc2e4\ud589\ub41c\ub2e4\ub294 \ubcf4\uc7a5\uc774 \uc5c6\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac1d\uccb4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uac8c \ub41c \ud6c4 finalizer / cleaner \uc758 \uc218\ud589\uc2dc\uc810\uc744 \uc54c \uc218 \uc5c6\ub2e4."),Object(r.b)("li",{parentName:"ul"},"finalizer / cleaner \uc758 \uc218\ud589\uc740, \uc804\uc801\uc73c\ub85c GC \uc54c\uace0\ub9ac\uc998\uc5d0 \ub2ec\ub838\ub2e4."),Object(r.b)("li",{parentName:"ul"},"finalizer \uc2a4\ub808\ub4dc\ub294 \ub2e4\ub978 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ub808\ub4dc\ubcf4\ub2e4 \uc6b0\uc120\uc21c\uc704\uac00 \ub0ae\uc544 \uc2e4\ud589 \uae30\ud68c\ub97c \uc81c\ub300\ub85c \uc5bb\uc9c0 \ubabb\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"cleaner \ub294 \uc790\uc2e0\uc744 \uc218\ud589\ud560 \uc2a4\ub808\ub4dc\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\ub2e4.")),Object(r.b)("h3",{id:"\uc218\ud589-\uc5ec\ubd80\ub97c-\ubcf4\uc7a5\ud558\uc9c0-\uc54a\ub294\ub2e4"},"\uc218\ud589 \uc5ec\ubd80\ub97c \ubcf4\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(r.b)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac19\uc740 \uacf5\uc720 \uc790\uc6d0\uc758 \uc601\uad6c Lock \ud574\uc81c\ub97c finalizer \ub098 cleaner \uc5d0 \ub9e1\uaca8 \ub193\uc73c\uba74 \ubd84\uc0b0 \uc2dc\uc2a4\ud15c \uc804\uccb4\uac00 \uc11c\uc11c\ud788 \uba48\ucd9c\uac83 ? "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub97c \uc601\uad6c\uc801\uc73c\ub85c \uc218\uc815\ud558\ub294 \uc791\uc5c5\uc5d0\uc11c\ub294 \uc808\ub300 \uc758\uc874\ud574\uc120 \uc548\ub41c\ub2e4.")),Object(r.b)("h3",{id:"finalizer-\ub3d9\uc791-\uc911-\ubc1c\uc0dd\ud55c-\uc608\uc678\ub294-\ubb34\uc2dc\ub41c\ub2e4"},"finalizer \ub3d9\uc791 \uc911 \ubc1c\uc0dd\ud55c \uc608\uc678\ub294 \ubb34\uc2dc\ub41c\ub2e4."),Object(r.b)("p",null,"\uacbd\uace0 \uc870\ucc28 \ucd9c\ub825\ud558\uc9c0 \uc54a\uc74c."),Object(r.b)("p",null,"\uc7a1\uc9c0 \ubabb\ud55c \uc608\uc678 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \uac1d\uccb4\ub294 \uc790\uce6b \ub9c8\ubb34\ub9ac\uac00 \ub35c \ub41c \uc0c1\ud0dc\ub85c \ub0a8\uc744 \uc218 \uc788\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"cleaner \ub97c \uc0ac\uc6a9\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc790\uc2e0\uc758 \uc2a4\ub808\ub4dc\ub97c \ud1b5\uc81c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7f0 \ubb38\uc81c\uac00 \uc5c6\ub2e4.")),Object(r.b)("h3",{id:"\uc2ec\uac01\ud55c-\uc131\ub2a5-\ubb38\uc81c"},"\uc2ec\uac01\ud55c \uc131\ub2a5 \ubb38\uc81c"),Object(r.b)("p",null,"GC \uc758 \ud6a8\uc728\uc744 \ub5a8\uc5b4 \ub728\ub9b0\ub2e4."),Object(r.b)("h3",{id:"finalizer-\uacf5\uaca9\uc5d0-\ub178\ucd9c\ub418\uc5b4-\uc2ec\uac01\ud55c-\ubcf4\uc548-\ubb38\uc81c"},"finalizer \uacf5\uaca9\uc5d0 \ub178\ucd9c\ub418\uc5b4 \uc2ec\uac01\ud55c \ubcf4\uc548 \ubb38\uc81c"),Object(r.b)("p",null,"finalizer \uacf5\uaca9 \uc6d0\ub9ac"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0dd\uc131\uc790\ub098 \uc9c1\ub82c\ud654 \uacfc\uc815\uc5d0\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\uba74,",Object(r.b)("br",{parentName:"li"}),"\uc0dd\uc131 \ub418\ub2e4\ub9cc \uac1d\uccb4\uc5d0\uc11c \uc545\uc758\uc801\uc778 \ud558\uc704 \ud074\ub798\uc2a4\uc758 finalizer \uac00 \uc218\ud589\ub420 \uc218 \uc788\ub2e4.")),Object(r.b)("h4",{id:"\uc545\uc758\uc801\uc778-\ud558\uc704-\ud074\ub798\uc2a4\uc758-finalizer"},"\uc545\uc758\uc801\uc778 \ud558\uc704 \ud074\ub798\uc2a4\uc758 finalizer"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"finalizer \ub294 \uc815\uc801 \ud544\ub4dc\uc5d0 \uc790\uc2e0\uc758 \ucc38\uc870\ub97c \ud560\ub2f9\ud558\uc5ec GC \uac00 \uc218\uc9d1\ud558\uc9c0 \ubabb\ud558\uac8c\ud568")),Object(r.b)("p",null,"\uac1d\uccb4 \uc0dd\uc131\uc744 \ub9c9\uc73c\ub824\uba74 \uc0dd\uc131\uc790\uc5d0\uc11c \uc608\uc678\ub97c \ub358\uc9c0\ub294 \uac83\ub9cc\uc73c\ub85c \ucda9\ubd84\ud558\uc9c0\ub9cc, finalizer \uac00 \uc788\ub2e4\uba74 \uadf8\ub807\uc9c0 \uc54a\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"final \ud074\ub798\uc2a4\ub294 \ud558\uc704 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc218 \uc5c6\uc73c\ub2c8 finalizer \uacf5\uaca9\uc5d0\uc11c \uc548\uc804\ud568."),Object(r.b)("li",{parentName:"ul"},"final \ud074\ub798\uc2a4\uac00 \uc544\ub2c8\uba74, \uc544\ubb34\uc77c\ub3c4 \ud558\uc9c0 \uc54a\ub294 finalize \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4e4\uace0 final \ub85c \uc120\uc5b8\ud558\uc790.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"?? \uc2e4\uc81c finalizer \uacf5\uaca9\uc774 \ubc1c\uc0dd\ud55c \uc0ac\ub840\uac00 \ubb34\uc5c7\uc774 \uc788\uc744\uae4c?")),Object(r.b)("h2",{id:"finalizer--cleaner-\uc758-\ub300\uc548"},"finalizer / cleaner \uc758 \ub300\uc548"),Object(r.b)("h3",{id:"autoclosable-\uc758-\uad6c\ud604"},"AutoClosable \uc758 \uad6c\ud604"),Object(r.b)("h3",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c-\uc778\uc2a4\ud134\uc2a4\ub97c-\ub2e4-\uc4f0\uace0\ub098\uba74-close-\uba54\uc11c\ub4dc-\ud638\ucd9c"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e4 \uc4f0\uace0\ub098\uba74 close \uba54\uc11c\ub4dc \ud638\ucd9c"),Object(r.b)("p",null,"\uc608\uc678\uac00 \ubc1c\uc0dd\ud574\ub3c4 \uc81c\ub300\ub85c \uc885\ub8cc\ub418\ub3c4\ub85d ",Object(r.b)("inlineCode",{parentName:"p"},"try-with-resources")," \ub97c \uc0ac\uc6a9 ","[9]"),Object(r.b)("h3",{id:"\uc778\uc2a4\ud134\uc2a4-\uc790\uc2e0\uc774-\ub2eb\ud614\ub294\uc9c0-\ucd94\uc801\ud558\uae30"},"\uc778\uc2a4\ud134\uc2a4 \uc790\uc2e0\uc774 \ub2eb\ud614\ub294\uc9c0 \ucd94\uc801\ud558\uae30"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"close \uba54\uc11c\ub4dc \uc5d0\uc11c, \uac1d\uccb4\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc74c\uc744 \ud544\ub4dc\uc5d0 \uae30\ub85d\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\ub2e4\ub978 \uba54\uc11c\ub4dc\ub294 \uc774 \ud544\ub4dc\ub97c \uac80\uc0ac\ud574\uc11c \uac1d\uccb4\uac00 \ub2eb\ud78c \ud6c4 \ubd88\ub838\ub2e4\uba74 IllegalStateException \uc744 \ub358\uc9c4\ub2e4.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"?? 2 \ubc88\uc758 \ubc29\ubc95\uc740 \uc5b4\ub5bb\uac8c \uc4f0\uc774\ub294 \uac83\uc77c\uae4c? \uc5bc\ub9c8\ub098 \uc4f0\uc77c\uae4c? ")),Object(r.b)("h2",{id:"finalizer--cleaner-\uc758-\uc4f0\uc784\uc0c8"},"finalizer / cleaner \uc758 \uc4f0\uc784\uc0c8"),Object(r.b)("h3",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00-\ud558\uc9c0-\uc54a\uc740-\uc790\uc6d0\ud68c\uc218\ub97c-\ub2a6\uac8c\ub77c\ub3c4-\ud574\uc8fc\ub294\uac8c-\ub0ab\ub2e4"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud558\uc9c0 \uc54a\uc740 \uc790\uc6d0\ud68c\uc218\ub97c \ub2a6\uac8c\ub77c\ub3c4 \ud574\uc8fc\ub294\uac8c \ub0ab\ub2e4."),Object(r.b)("p",null,"FileInputStrean, FileOutputStream, ThreadPoolExecutor \uac00 \ub300\ud45c\uc801\uc73c\ub85c\n\uc548\uc804\ub9dd \uc5ed\ud560\uc758 finalizer \ub97c \uc81c\uacf5\ud568."),Object(r.b)("h3",{id:"\ub124\uc774\ud2f0\ube0c-\ud53c\uc5b4\uc640-\uc5f0\uacb0\ub41c-\uac1d\uccb4"},"\ub124\uc774\ud2f0\ube0c \ud53c\uc5b4\uc640 \uc5f0\uacb0\ub41c \uac1d\uccb4"),Object(r.b)("h4",{id:"native-peer"},"Native Peer"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc77c\ubc18 \uc790\ubc14 \uac1d\uccb4\uac00 \ub124\uc774\ud2f0\ube0c \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uae30\ub2a5\uc744 \uc704\uc784\ud55c \ub124\uc774\ud2f0\ube0c \uac1d\uccb4"),Object(r.b)("li",{parentName:"ul"},"\ub124\uc774\ud2f0\ube0c \ud53c\uc5b4\ub294 \uc790\ubc14 \uac1d\uccb4\uac00 \uc544\ub2c8\ub2c8 GC \ub294 \uc874\uc7ac\ub97c \uc54c\uc9c0 \ubabb\ud558\uc5ec \ud68c\uc218\ud558\uc9c0 \uc54a\uc74c")),Object(r.b)("h4",{id:"\uc870\uac74"},"\uc870\uac74"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc131\ub2a5\uc800\ud558\ub97c \uac10\ub2f9\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ub124\uc774\ud2f0\ube0c\ud53c\uc5b4\uac00 \uc2ec\uac01\ud55c \uc790\uc6d0??\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc544\uc57c \ud55c\ub2e4.")),Object(r.b)("h4",{id:"close-\uba54\uc11c\ub4dc"},"close \uba54\uc11c\ub4dc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc131\ub2a5\uc800\ud558\ub97c \uac10\ub2f9\ud560 \uc218 \uc5c6\uc74c"),Object(r.b)("li",{parentName:"ul"},"\ub124\uc774\ud2f0\ube0c \ud53c\uc5b4\uac00 \uc0ac\uc6a9\ud558\ub294 \uc790\uc6d0\uc744 \uc989\uc2dc \ud68c\uc218\ud574\uc57c \ud560 \uacbd\uc6b0")),Object(r.b)("p",null,"close \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),Object(r.b)("h3",{id:"cleaner"},"cleaner"),Object(r.b)("p",null,"cleaner \ub294 \uc0ac\uc6a9\ud558\uae30\uc5d0 \uc870\uae08 \uae4c\ub2e4\ub86d\ub2e4."),Object(r.b)("p",null,"Room \ud074\ub798\uc2a4\ub85c \uc774 \uae30\ub2a5\uc744 \uc124\uba85\ud558\uace0 \uc788\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"room \uc744 \uc218\uac70\ud558\uae30 \uc804, \ubc18\ub4dc\uc2dc clean \uccad\uc18c \ud574\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Room \ud074\ub798\uc2a4\ub294 AutoCloseable \uc744 \uad6c\ud604\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc790\ub3d9 \uccad\uc18c \uc548\uc804\ub9dd\uc774 cleaner \ub97c \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uc9c0\ub294 \ub0b4\ubd80 \uad6c\ud604 \ubc29\uc2dd\uc5d0 \uad00\ud55c \ubb38\uc81c\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"finalizer \uc640 \ub2ec\ub9ac cleaner \ud074\ub798\uc2a4\uc758 public API \uc5d0 \ub098\ud0c0\ub098\uc9c0 \uc54a\ub294\ub2e4. ??")))),Object(r.b)("p",null,"cleaner \ub97c \uc548\uc804\ub9dd\uc73c\ub85c \ud65c\uc6a9\ud558\ub294 AutoCloseable \ud074\ub798\uc2a4    "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class Room implements AutoCloseable {\n    private static final Cleaner cleaner = Cleaner.create();\n        \n    // \uccad\uc18c\uac00 \ud544\uc694\ud55c \uc790\uc6d0. \uc808\ub300 Room \uc744 \ucc38\uc870\ud574\uc120 \uc548\ub41c\ub2e4.\n    // Room \uc778\uc2a4\ud134\uc2a4\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \uc21c\ud658\ucc38\uc870\uac00 \uc0dd\uaca8 GC \uac00 Room \uc778\uc2a4\ud134\uc2a4\ub97c \ud68c\uc218\ud558\uc9c0 \uc54a\uc74c\n    // \uc815\uc801\uc774 \uc544\ub2cc \uc911\ucca9 \ud074\ub798\uc2a4\ub294 \uc790\ub3d9\uc73c\ub85c \ubc14\uae65 \uac1d\uccb4\uc758 \ucc38\uc870\ub97c \uac16\ub294\ub2e4.\n    // \ub78c\ub2e4\ub3c4 \ubc14\uae65\uac1d\uccb4\uc758 \ucc38\uc870\ub97c \uac16\uae30 \uc27d\ub2e4.\n    private static class State implements Runnable {\n        int numJunkPiles;   // Room \uc548\uc758 \uc4f0\ub808\uae30 \uc218\n        \n        State(int numJunkPiles) {\n            this.numJunkPiles = numJunkPiles;\n        }\n    \n        // close \uba54\uc11c\ub4dc\ub098, cleaner \uac00 \ud638\ucd9c\ub41c\ub2e4. .. \n        // cleanable \uc5d0 \uc758\ud574 \ub531 \ud55c\ubc88 \ud638\ucd9c\ub41c\ub2e4\uace0 \ud568.\n        // \ubcf4\ud1b5\uc740 Room \uc758 close \ub97c \ud638\ucd9c\ud560 \ub54c \ud638\ucd9c\ub428\n        // GC \uac00 Room \uc744 \ud68c\uc218\ud560 \ub54c\uae4c\uc9c0 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 close \ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \n        // cleaner \uac00 State \uc758 run \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c \ud560 \uac83\uc784.\n        @Override public void run() {\n            System.out.println("\ubc29 \uccad\uc18c");\n            numJunkPiles = 0;\n        }\n    }\n\n    // \ubc29\uc758 \uc0c1\ud0dc, cleanable \uacfc \uacf5\uc720\ud568.\n    private final State state; \n\n    // Cleanable \uac1d\uccb4, \uc218\uac70 \ub300\uc0c1\uc774 \ub418\uba74 \ubc29\uc744 \uccad\uc18c\ud55c\ub2e4.\n    private final Cleaner.Cleanable cleanable;\n\n    public Room(int numJunkPiles) {\n        state = new State(numJunkPiles);\n        cleanable = cleaner.register(this, state);\n    }\n\n    @Override public void close() {\n        cleanable.clean();\n    }\n} \n')),Object(r.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ubaa8\ub4e0 Room \uc0dd\uc131\uc744 ",Object(r.b)("inlineCode",{parentName:"p"},"try-with-resources")," \ube14\ub85d\uc73c\ub85c \uac10\uc30c\ub2e4\uba74 \uc790\ub3d9 \uccad\uc18c\ub294 \uc804\ud600 \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4.\n",Object(r.b)("inlineCode",{parentName:"p"},'System.out.println("\ubc29 \uccad\uc18c");')," \uac00 \uac19\uc774 \uc2e4\ud589 \ub420 \uac83\uc774\ub2e4. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class Adult {\n    public static void main(String[] args) {\n        try (Room myRoom = new Room(7)) {\n            System.out.println("hi~");\n        }\n    }\n}\n')),Object(r.b)("p",null,"\ub9cc\uc57d ",Object(r.b)("inlineCode",{parentName:"p"},"try-with-resources")," \ube14\ub85d \uc774 \uc5c6\ub2e4\uba74,\n",Object(r.b)("inlineCode",{parentName:"p"},'System.out.println("\ubc29 \uccad\uc18c");')," \uac00 \ucd9c\ub825\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4.\nclean \uc758 \uc608\uce21\ud560 \uc218 \uc5c6\ub294 \ud2b9\uc9d5 \ub54c\ubb38\uc774\ub2e4."))}o.isMDXComponent=!0},191:function(e,n,l){"use strict";l.d(n,"a",(function(){return p})),l.d(n,"b",(function(){return m}));var t=l(0),a=l.n(t);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function c(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function b(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=a.a.createContext({}),o=function(e){var n=a.a.useContext(u),l=n;return e&&(l="function"==typeof e?e(n):c(c({},n),e)),l},p=function(e){var n=o(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},j=a.a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=o(l),j=t,m=p["".concat(i,".").concat(j)]||p[j]||O[j]||r;return l?a.a.createElement(m,c(c({ref:n},u),{},{components:l})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,i=new Array(r);i[0]=j;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<r;u++)i[u]=l[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"}}]);