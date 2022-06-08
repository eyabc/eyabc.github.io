(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{284:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return r})),t.d(a,"default",(function(){return m}));var n=t(3),i=t(7),c=(t(0),t(472)),b={title:"11. equals \ub97c \uc7ac\uc815\uc758\ud558\ub824\uac70\ub4e0 hashCode \ub3c4 \uc7ac\uc815\uc758\ud558\ub77c"},l={unversionedId:"java/effective-java/ch3/ITEM11",id:"java/effective-java/ch3/ITEM11",isDocsHomePage:!1,title:"11. equals \ub97c \uc7ac\uc815\uc758\ud558\ub824\uac70\ub4e0 hashCode \ub3c4 \uc7ac\uc815\uc758\ud558\ub77c",description:"\uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ud504\ub85c\uadf8\ub7a8\uc774 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub2e4.",source:"@site/docs/java/effective-java/ch3/ITEM11.md",slug:"/java/effective-java/ch3/ITEM11",permalink:"/docs/java/effective-java/ch3/ITEM11",version:"current",lastUpdatedAt:1643112588,sidebar:"effectiveJava",previous:{title:"10. equals \ub294 \uc77c\ubc18 \uaddc\uc57d\uc744 \uc9c0\ucf1c \uc7ac\uc815\uc758\ud558\ub77c",permalink:"/docs/java/effective-java/ch3/ITEM10"},next:{title:"12. toString \uc744 \ud56d\uc0c1 \uc7ac\uc815\uc758\ud558\ub77c",permalink:"/docs/java/effective-java/ch3/ITEM12"}},r=[{value:"Object, API \ubb38\uc11c\uc5d0 \uae30\uc220\ub41c \uc77c\ubc18 \uaddc\uc57d",id:"object-api-\ubb38\uc11c\uc5d0-\uae30\uc220\ub41c-\uc77c\ubc18-\uaddc\uc57d",children:[]},{value:"hashCode \ub97c \uc7ac\uc815\uc758 \ud558\uc9c0 \uc54a\uc73c\uba74",id:"hashcode-\ub97c-\uc7ac\uc815\uc758-\ud558\uc9c0-\uc54a\uc73c\uba74",children:[]},{value:"HashCode \uc815\uc758\ud558\uae30",id:"hashcode-\uc815\uc758\ud558\uae30",children:[{value:"\ucd5c\uc545\uc758 HashCode \uad6c\ud604",id:"\ucd5c\uc545\uc758-hashcode-\uad6c\ud604",children:[]},{value:"\uc804\ud615\uc801\uc778 hashCode \uba54\uc11c\ub4dc",id:"\uc804\ud615\uc801\uc778-hashcode-\uba54\uc11c\ub4dc",children:[]},{value:"\ud574\uc2dc \ucf54\ub4dc \ucd5c\uc801\ud654",id:"\ud574\uc2dc-\ucf54\ub4dc-\ucd5c\uc801\ud654",children:[]},{value:"Object \ud074\ub798\uc2a4\uc758 hash \uba54\uc11c\ub4dc",id:"object-\ud074\ub798\uc2a4\uc758-hash-\uba54\uc11c\ub4dc",children:[]},{value:"\uce90\uc2f1",id:"\uce90\uc2f1",children:[]}]},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",children:[]},{value:"Reference",id:"reference",children:[]}],o={toc:r};function m(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),Object(c.b)("inlineCode",{parentName:"h5"},"equals")," \ub97c \uc7ac\uc815\uc758 \ud560 \ub54c\ub294 ",Object(c.b)("inlineCode",{parentName:"h5"},"hashCode")," \ub3c4 \ubc18\ub4dc\uc2dc \uc7ac\uc815\uc758 \ud574\uc57c \ud55c\ub2e4.")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ud504\ub85c\uadf8\ub7a8\uc774 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub2e4."))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"HashCode")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"Java\uc758 \ubaa8\ub4e0 \uac1d\uccb4\ub294 ",Object(c.b)("inlineCode",{parentName:"li"},"hashCode")," \uba54\uc11c\ub4dc\ub97c \uac00\uc9c4\ub2e4"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"HashMap"),", ",Object(c.b)("inlineCode",{parentName:"li"},"HashSet")," \ub4f1 hash \ub97c \ud65c\uc6a9\ud55c Collection \ub4e4\uc744 \uc790\uc8fc \ubcfc \uc218 \uc788\ub294\ub370 \ubaa8\ub450 hashCode \ub97c \uae30\ubc18\uc73c\ub85c \ud558\uace0 \uc788\ub2e4."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Object#hashCode")," \uad6c\ud604",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:'title="native call\uc744 \ud1b5\ud574 \ud574\ub2f9 \uac1d\uccb4\uc758 \uba54\ubaa8\ub9ac \ud574\uc26c \uc8fc\uc18c\ub97c \uac00\uc838\uc628\ub2e4"',title:'"native',"call\uc744":!0,"\ud1b5\ud574":!0,"\ud574\ub2f9":!0,"\uac1d\uccb4\uc758":!0,"\uba54\ubaa8\ub9ac":!0,"\ud574\uc26c":!0,"\uc8fc\uc18c\ub97c":!0,'\uac00\uc838\uc628\ub2e4"':!0},"public native int hashCode();\n")))))),Object(c.b)("p",null,"\uc7ac\uc815\uc758\ud55c hashCode \ub294 Object \uc758 API \ubb38\uc11c\uc5d0 \uae30\uc220\ub41c \uc77c\ubc18 \uaddc\uc57d\uc744 \ub530\ub77c\uc57c \ud55c\ub2e4."),Object(c.b)("h2",{id:"object-api-\ubb38\uc11c\uc5d0-\uae30\uc220\ub41c-\uc77c\ubc18-\uaddc\uc57d"},"Object, API \ubb38\uc11c\uc5d0 \uae30\uc220\ub41c \uc77c\ubc18 \uaddc\uc57d"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",{parentName:"ol"},"equals \ube44\uad50\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc815\ubcf4\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc73c\uba74,",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"hashCode \uba54\uc11c\ub4dc\ub294 \uc77c\uad00\ub418\uac8c \ud56d\uc0c1 \uac19\uc740 \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4."))),Object(c.b)("li",{parentName:"ol"},"equals(Object) \uac00 \ub450 \uac1d\uccb4\ub97c \uac19\ub2e4\uace0 \ud310\ub2e8\ud588\ub2e4\uba74,",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uc758 hashCode \ub294 \ub611\uac19\uc740 \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4."))),Object(c.b)("li",{parentName:"ol"},"equals(Object) \uac00 \ub450 \uac1d\uccb4\ub97c \ub2e4\ub974\ub2e4\uace0 \ud310\ub2e8\ud588\ub354\ub77c\ub3c4",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uc758 hashCode \uac00 \uc11c\ub85c \ub2e4\ub978 \uac12\uc744 \ubc18\ud658\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \ub2e4\ub978 \uac1d\uccb4\uc5d0 \ub300\ud574\uc11c \ub2e4\ub978 hashCode \ub97c \ubc18\ud658\ud574\uc57c \ud574\uc2dc\ud14c\uc774\ube14\uc758 \uc131\ub2a5\uc774 \uc88b\uc544\uc9c4\ub2e4.")))))),Object(c.b)("h4",{id:"\uc55e\uc11c-equals-10-\ub9cc\uc744-\uc815\uc758\ud55c-\uac1d\uccb4\ub97c-hashmap-\uc758-\uc6d0\uc18c\ub85c-\uc0ac\uc6a9\ud560-\ub54c"},"\uc55e\uc11c equals ",Object(c.b)("a",{parentName:"h4",href:"/docs/java/effective-java/ch3/ITEM10"},"10")," \ub9cc\uc744 \uc815\uc758\ud55c \uac1d\uccb4\ub97c HashMap \uc758 \uc6d0\uc18c\ub85c \uc0ac\uc6a9\ud560 \ub54c,"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'Map<PhoneNumber, String> m = new HashMpa<>();\nm.put(new PhoneNumber(707, 867, 5309), "\uc81c\ub2c8");\nm.get(new PhoneNumber(707, 867, 5309)); // null\n')),Object(c.b)("p",null,"\uc704\uc5d0\uc11c\ub294 2\uac1c\uc758 PhoneNumber \uc778\uc2a4\ud134\uc2a4\uac00 \uc0ac\uc6a9\ub418\uc5c8\ub2e4."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"HashMap \uc5d0 \ub123\uc744 \ub54c"),Object(c.b)("li",{parentName:"ol"},"HashMap \uc5d0\uc11c \uaebc\ub0bc \ub54c")),Object(c.b)("h2",{id:"hashcode-\ub97c-\uc7ac\uc815\uc758-\ud558\uc9c0-\uc54a\uc73c\uba74"},"hashCode \ub97c \uc7ac\uc815\uc758 \ud558\uc9c0 \uc54a\uc73c\uba74"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\ub17c\ub9ac\uc801 \ub3d9\uce58\uc778 \ub450 \uac1d\uccb4\uac00 \ub2e4\ub978 \ud574\uc2dc\ucf54\ub4dc \ubc18\ud658\n\u2192 2\ubc88\uc9f8 \uaddc\uc57d \uc704\ubc30")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"get \uba54\uc11c\ub4dc\ub294 \uc5c9\ub6b1\ud55c \ud574\uc2dc \ubc84\ud0b7\uc5d0\uc11c \uac1d\uccb4\ub97c \ucc3e\uc73c\ub824\ud568\n\u2192 \ub450 \uac1d\uccb4\ub97c \uac19\uc740 \ubc84\ud0b7\uc5d0 \ub2f4\uc544\ub3c4, \uacb0\uacfc\ub294 \uac19\ub2e4.\n\u2192 HashMap \uc740 hashCode \uac00 \ub2e4\ub978 \uc5d4\ud2b8\ub9ac\ub07c\ub9ac\ub294 \ub3d9\uce58\uc131 \ube44\uad50\ub97c \uc2dc\ub3c4\uc870\ucc28 \ud558\uc9c0 \uc54a\uae30\ub85c \ucd5c\uc801\ud654 \ub418\uc5b4 \uc788\uae30 \ub54c\ubb38"))))),Object(c.b)("h2",{id:"hashcode-\uc815\uc758\ud558\uae30"},"HashCode \uc815\uc758\ud558\uae30"),Object(c.b)("h3",{id:"\ucd5c\uc545\uc758-hashcode-\uad6c\ud604"},"\ucd5c\uc545\uc758 HashCode \uad6c\ud604"),Object(c.b)("p",null,"\ub3d9\uce58\uc778 \ubaa8\ub4e0 \uac1d\uccb4\uc5d0\uc11c \ub611\uac19\uc740 \ud574\uc2dc \ucf54\ub4dc\ub97c \ubc18\ud658\ud558\ub2c8 \uc801\ubc95\ud558\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@Override public int hashCode() {\n    return 42;\n}\n")),Object(c.b)("h4",{id:"\ubaa8\ub4e0-\uac1d\uccb4\uc5d0\uc11c-\ub611\uac19\uc740-\uac12\uc744-\ubc18\ud658\ud558\ub294-\ubb38\uc81c"},"\ubaa8\ub4e0 \uac1d\uccb4\uc5d0\uc11c \ub611\uac19\uc740 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ubb38\uc81c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uac1d\uccb4\uac00 \ud574\uc2dc\ud14c\uc774\ube14\uc758 \ubc84\ud0b7 \ud558\ub098\uc5d0 \ub2f4\uaca8 \ub9c8\uce58 ",Object(c.b)("strong",{parentName:"li"},"\uc5f0\uacb0 \ub9ac\uc2a4\ud2b8"),"\ucc98\ub7fc \ub3d9\uc791"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\ud3c9\uade0 \uc218\ud589 \uc2dc\uac04\uc774 O(1) \uc778 \ud574\uc2dc \ud14c\uc774\ube14\uc774 O(n) \uc73c\ub85c \ub290\ub824\uc838 \uac1d\uccb4\uac00 \ub9ce\uc544\uc9c0\uba74 \ub3c4\uc800\ud788 \uc4f8 \uc218 \uc5c6\uac8c \ub41c\ub2e4."))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\uc88b\uc740 \ud574\uc2dc \ud568\uc218\uc758 \ud2b9\uc9d5")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\uc11c\ub85c \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud574 \ub2e4\ub978 \ud574\uc2dc\ucf54\ub4dc\ub97c \ubc18\ud658\ud55c\ub2e4.\n\u2192 hashCode 3\ubc88\uc9f8 \uaddc\uc57d"),Object(c.b)("p",{parentName:"div"},"\uc774\uc0c1\uc801\uc778 \ud574\uc2dc\ud568\uc218\ub294 \uc11c\ub85c \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\ub4e4\uc744 32\ube44\ud2b8 \uc815\uc218 \ubc94\uc704\uc5d0 ",Object(c.b)("strong",{parentName:"p"},"\uade0\uc77c"),"\ud558\uac8c \ubd84\ubc30\ud574\uc57c \ud55c\ub2e4."))),Object(c.b)("h3",{id:"\uc804\ud615\uc801\uc778-hashcode-\uba54\uc11c\ub4dc"},"\uc804\ud615\uc801\uc778 hashCode \uba54\uc11c\ub4dc"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud575\uc2ec\ud544\ub4dc")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"equals \ube44\uad50\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud544\ub4dc"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:"{2,3,4}","{2,3,4}":!0},"@Override public int hashCode() {\n    int result = Short.hashCode(areaCode);\n    result = 31 * result + Short.hashCode(prefix);\n    result = 31 * result + Short.hashCode(lineNum);\n    return result;\n}\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",{parentName:"ol"},"int \ubcc0\uc218 result \ub97c \uc120\uc5b8\ud55c \ud6c4 \uac12 c \ub85c \ucd08\uae30\ud654 \ud55c\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"c")," \ud574\ub2f9 \uac1d\uccb4\uc758 \uccab\ubc88\uc9f8 \ud575\uc2ec \ud544\ub4dc\ub97c ",Object(c.b)("inlineCode",{parentName:"li"},"2.i")," \ubc29\uc2dd\uc73c\ub85c \uacc4\uc0b0\ud55c \ud574\uc2dc\ucf54\ub4dc"))),Object(c.b)("li",{parentName:"ol"},"\ub098\uba38\uc9c0 \ud575\uc2ec \ud544\ub4dc ",Object(c.b)("inlineCode",{parentName:"li"},"f")," \uac01\uac01\uc5d0 \ub300\ud574 \ub2e4\uc74c \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4.",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"\ud574\ub2f9 \ud544\ub4dc\uc758 \ud574\uc2dc\ucf54\ub4dc ",Object(c.b)("inlineCode",{parentName:"li"},"c")," \ub97c \uacc4\uc0b0\ud55c\ub2e4",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"\uae30\ubcf8 \ud0c0\uc785 \ud544\ub4dc",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Type.hashCode(f)")," Type \uc740 \uae30\ubcf8 \ud0c0\uc785\uc758 \ubc15\uc2f1 \ud074\ub798\uc2a4"))),Object(c.b)("li",{parentName:"ol"},"\ucc38\uc870 \ud0c0\uc785 \ud544\ub4dc",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud544\ub4dc\uc758 hashCode \ub97c \uc7ac\uadc0\uc801\uc73c\ub85c \ud638\ucd9c\ud55c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud558\ub2e4\uba74 \ud544\ub4dc\uc758 \ud45c\uc900\ud615 canonical representation \uc744 \ub9cc\ub4e4\uc5b4 \ud45c\uc900\ud615\uc758 hashCode \ub97c \ud638\ucd9c\ud55c\ub2e4."))),Object(c.b)("li",{parentName:"ol"},"\uac12\uc774 null",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ub2e4\ub978 \uc0c1\uc218\ub3c4 \uad1c\ucc2e\uc9c0\ub9cc \uc804\ud1b5\uc801\uc73c\ub85c 0 \uc0ac\uc6a9"))),Object(c.b)("li",{parentName:"ol"},"\ubc30\uc5f4",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud575\uc2ec \uc6d0\uc18c\ub97c \uac01\uac01\uc758 \ubcc4\ub3c4 \ud544\ub4dc\ucc98\ub7fc \ub2e4\ub8ec\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uac01 \ud575\uc2ec\uc6d0\uc18c\uc758 \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud55c \ub2e4\uc74c, ",Object(c.b)("inlineCode",{parentName:"li"},"2.ii")," \ubc29\uc2dd\uc73c\ub85c \uac31\uc2e0\ud55c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ud575\uc2ec\uc6d0\uc18c\uac00 \ud558\ub098\ub3c4 \uc5c6\ub2e4\uba74 \uc0c1\uc218(0) \uc744 \uc0ac\uc6a9\ud55c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc6d0\uc18c\uac00 \ud575\uc2ec\uc6d0\uc18c\ub77c\uba74 ",Object(c.b)("inlineCode",{parentName:"li"},"Arrays.hashCode")," \ub97c \uc0ac\uc6a9"))),Object(c.b)("li",{parentName:"ol"},"\uc81c\uc678 \ud544\ub4dc",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud30c\uc0dd \ud544\ub4dc \uc81c\uc678 \uc635\uc158"),Object(c.b)("li",{parentName:"ul"},"equals \ube44\uad50\uc5d0 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ud544\ub4dc\ub294 \uc81c\uc678 \ud544\uc218."))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"2.i")," \uc5d0\uc11c \uacc4\uc0b0\ud55c \ud574\uc2dc\ucf54\ub4dc c\ub85c result \ub97c \uac31\uc2e0\ud55c\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"result = 31 * result + c;")))))),Object(c.b)("li",{parentName:"ol"},"result \ub97c \ubc18\ud658\ud55c\ub2e4.")))),Object(c.b)("h3",{id:"\ud574\uc2dc-\ucf54\ub4dc-\ucd5c\uc801\ud654"},"\ud574\uc2dc \ucf54\ub4dc \ucd5c\uc801\ud654"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"31 * result"),"\ub294 \ud544\ub4dc\ub97c \uacf1\ud558\ub294 \uc21c\uc11c\uc5d0 \ub530\ub77c result \uac12\uc774 \ub2ec\ub77c\uc9c0\uac8c \ud55c\ub2e4."))),Object(c.b)("p",null,"\ube44\uc2b7\ud55c \ud544\ub4dc\uac00 \uc5ec\ub7ec\uac1c\uc77c \ub54c \ud574\uc2dc \ud6a8\uacfc\ub97c \ud06c\uac8c \ub192\uc5ec\uc900\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"String \uc758 hashCode \ub97c \uacf1\uc148 \uc5c6\uc774 \uad6c\ud604\ud55c\ub2e4\uba74 \ubaa8\ub4e0 \uc544\ub098\uadf8\ub7a8(\uad6c\uc131 \ucca0\uc790\uac00 \uac19\uace0 \uc21c\uc11c\ub9cc \ub2e4\ub978 \ubb38\uc790\uc5f4)\uc758 \ud574\uc2dc\ucf54\ub4dc\uac00 \uac19\uc544\uc9c4\ub2e4.")),Object(c.b)("h4",{id:"31-\ub85c-\uacf1\ud558\ub294-\uc774\uc720"},"31 \ub85c \uacf1\ud558\ub294 \uc774\uc720"),Object(c.b)("p",null,"31 \uc740 \ud640\uc218\uc774\uba74\uc11c prime \uc774\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc9dd\uc218\ub77c\uba74, \uc624\ubc84\ud50c\ub85c\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74 \uc815\ubcf4\ub97c \uc783\uac8c \ub41c\ub2e4 ??"),Object(c.b)("li",{parentName:"ul"},"\uc18c\uc218\ub97c \uacf1\ud558\ub294 \uc774\uc720",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uba85\ud655\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc \uc804\ud1b5\uc801\uc778 \ubc29\ubc95"))),Object(c.b)("li",{parentName:"ul"},"\uacf1\uc148\uc744 \uc2dc\ud504\ud2b8 \uc5f0\uc0b0\uacfc \ube84\uc148\uc73c\ub85c \ub300\uccb4\ud574 \ucd5c\uc801\ud654 \uac00\ub2a5",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"31 * i")," == ",Object(c.b)("inlineCode",{parentName:"li"},"(i << 5) - i)")," ??")))),Object(c.b)("h3",{id:"object-\ud074\ub798\uc2a4\uc758-hash-\uba54\uc11c\ub4dc"},"Object \ud074\ub798\uc2a4\uc758 hash \uba54\uc11c\ub4dc"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Object \ud074\ub798\uc2a4\uc758 hash \uba54\uc11c\ub4dc")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\uc784\uc758\uc758 \uac1c\uc218\ub9cc\ud07c \uac1d\uccb4\ub97c \ubc1b\uc544 \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud574 \uc8fc\ub294 \uc815\uc801 \uba54\uc11c\ub4dc"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@Override public int hashCode() {\n    return Objects.hash(lineNum, prefix, areaCode);\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc18d\ub3c4\ub294 \ub354 \ub290\ub9ac\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uc785\ub825 \ubcc0\uc218\ub97c \ub2f4\uae30 \uc704\ud55c \ubc30\uc5f4\uc774 \uc0dd\uc131\ub41c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uae30\ubcf8\ud0c0\uc785\uc740 \ubc15\uc2f1\uacfc \uc5b8\ubc15\uc2f1\uc774 \ubc1c\uc0dd\ud55c\ub2e4."))),Object(c.b)("li",{parentName:"ul"},"\uc131\ub2a5\uc5d0 \ubbfc\uac10\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud669\uc5d0\ub9cc \uc0ac\uc6a9\ud558\uc790")),Object(c.b)("h3",{id:"\uce90\uc2f1"},"\uce90\uc2f1"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"case")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",{parentName:"ol"},"\ubd88\ubcc0 \ud074\ub798\uc2a4"),Object(c.b)("li",{parentName:"ol"},"\ud574\uc2dc\ucf54\ub4dc \uacc4\uc0b0\ube44\uc6a9\uc774 \ud070 \ud074\ub798\uc2a4")))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\uc774\ub7f0 \ud0c0\uc785\uc758 \uac1d\uccb4\uac00 \uc8fc\ub85c \ud574\uc2dc\uc758 \ud0a4\ub85c \uc0ac\uc6a9\ub420 \uac83 \uac19\ub2e4\uba74,")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\uc778\uc2a4\ud134\uc2a4\uac00 \ub9cc\ub4e4\uc5b4\uc9c8 \ub54c \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud574 \ub454\ub2e4."))),Object(c.b)("h4",{id:"\ud574\uc2dc\ucf54\ub4dc\ub97c-\uc9c0\uc5f0\ucd08\uae30\ud654-\ud558\ub824\ub294-hashcode-\uba54\uc11c\ub4dc"},"\ud574\uc2dc\ucf54\ub4dc\ub97c \uc9c0\uc5f0\ucd08\uae30\ud654 \ud558\ub824\ub294 hashCode \uba54\uc11c\ub4dc"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud574\uc2dc\uc758 \ud0a4\ub85c \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc774\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc\uc758 \uc548\uc815\uc131\uae4c\uc9c0 \uace0\ub824\ud574\uc57c \ud55c\ub2e4. ",Object(c.b)("a",{parentName:"li",href:"/docs/java/effective-java/ch11/ITEM83"},"83"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:"{5}","{5}":!0},"private int hashCode;   // \uc790\ub3d9\uc73c\ub85c 0\uc73c\ub85c \ucd08\uae30\ud654 \ub41c\ub2e4.\n\n@Override public int hashCode() {\n    int result = hashCode;\n    if (result == 0) {\n        result = Short.hashCode(areaCode);\n        result = 31 * result + Short.hashCode(prefix);\n        result = 31 * result + Short.hashCode(lineNum);\n        hashCode = result;\n    }\n    return result;\n}\n")),Object(c.b)("h2",{id:"\uc8fc\uc758\ud560-\uc810"},"\uc8fc\uc758\ud560 \uc810"),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"1. \uc131\ub2a5\uc744 \uc704\ud574 \ud574\uc2dc\ucf54\ub4dc\uc758 \ud575\uc2ec\ud544\ub4dc\ub97c \uc0dd\ub7b5\ud558\uba74 \uc548\ub41c\ub2e4.")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\uacc4\uc0b0 \uc18d\ub3c4\ub294 \ube68\ub77c\uc9c0\uc9c0\ub9cc, \ud574\uc2dc\ud488\uc9c8\uc774 \ub098\ube60\uc838 \ud574\uc2dc\ud14c\uc774\ube14\uc758 \uc131\ub2a5\uc744 \uc120\ud615\uc73c\ub85c \ub5a8\uc5b4\ub728\ub9b0\ub2e4.")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc2e4\uc81c\ub85c \uc790\ubc14 2 \uc804\uc758 String \uc740 \ucd5c\ub300 16\uac1c\uc758 \ubb38\uc790\ub9cc\uc73c\ub85c \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud588\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uc601\uc5ed\uc758 \uc218\ub9ce\uc740 \uc778\uc2a4\ud134\uc2a4\uac00 \ub2e8 \uba87\uac1c\uc758 \ud574\uc2dc\ucf54\ub4dc\ub85c \uc9d1\uc911\ub41c\ub2e4.")))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"2. hashCode \uac00 \ubc18\ud658\ud558\ub294 \uac12\uc758 \uc0dd\uc131 \uaddc\uce59\uc744 API \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc790\uc138\ud788 \uacf5\ud45c\ud558\uc9c0 \ub9d0\uc790")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud604\uc7ac\uc758 hashCode \uac12\uc5d0 \uc758\uc9c0\ud558\uc9c0 \uc54a\uac8c \ub418\uc5b4\uc57c \ud55c\ub2e4"),Object(c.b)("li",{parentName:"ul"},"\ucd94\ud6c4\uc5d0 hashCode \uacc4\uc0b0 \ubc29\uc2dd\uc744 \ubc14\uafc0 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"String, Integer \uc640 \uac19\uc740 \uc790\ubc14 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ub9ce\uc740 \ud074\ub798\uc2a4\uc5d0\uc11c hashCode \uba54\uc11c\ub4dc\uac00 \ubc18\ud658\ud558\ub294 \uc815\ud655\ud55c \uac12\uc744 \uc54c\ub824\uc8fc\ub294 \uc2e4\uc218\ub97c \uc800\uc9c8\ub800\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud5a5\ud6c4 \ub9b4\ub9ac\uc2a4\uc5d0\uc11c \uac1c\uc120\ud558\uae30 \uc5b4\ub824\uc6cc \uc84c\uc74c"),Object(c.b)("li",{parentName:"ul"},"\uacb0\ud568\uc744 \uace0\uce60\uc218 \uc5c6\uc5b4\uc9d0")))),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/3%EC%9E%A5/11_equals%EB%A5%BC_%EC%9E%AC%EC%A0%95%EC%9D%98%ED%95%98%EB%A0%A4%EA%B1%B0%EB%93%A0_hashCode%EB%8F%84_%EC%9E%AC%EC%A0%95%EC%9D%98%ED%95%98%EB%9D%BC_%EB%B0%95%EA%B2%BD%EC%B2%A0.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/3%EC%9E%A5/11_equals%EB%A5%BC_%EC%9E%AC%EC%A0%95%EC%9D%98%ED%95%98%EB%A0%A4%EA%B1%B0%EB%93%A0_hashCode%EB%8F%84_%EC%9E%AC%EC%A0%95%EC%9D%98%ED%95%98%EB%9D%BC_%EB%B0%95%EA%B2%BD%EC%B2%A0.md"))))}m.isMDXComponent=!0},472:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return h}));var n=t(0),i=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),m=function(e){var a=i.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=m(e.components);return i.a.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},p=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=m(t),p=n,h=d["".concat(b,".").concat(p)]||d[p]||s[p]||c;return t?i.a.createElement(h,l(l({ref:a},o),{},{components:t})):i.a.createElement(h,l({ref:a},o))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,b=new Array(c);b[0]=p;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=t[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);