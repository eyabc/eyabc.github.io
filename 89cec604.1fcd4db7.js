(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{254:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var l=a(3),n=(a(0),a(414));const b={},r={unversionedId:"java/effective-java/ch3/ITEM11",id:"java/effective-java/ch3/ITEM11",isDocsHomePage:!1,title:"ITEM11",description:"ITEM11 equals \ub97c \uc7ac\uc815\uc758\ud558\ub824\uac70\ub4e0 hashCode \ub3c4 \uc7ac\uc815\uc758\ud558\ub77c",source:"@site/docs/java/effective-java/ch3/ITEM11.md",slug:"/java/effective-java/ch3/ITEM11",permalink:"/docs/java/effective-java/ch3/ITEM11",version:"current",sidebar:"effectiveJava",previous:{title:"ITEM10",permalink:"/docs/java/effective-java/ch3/ITEM10"},next:{title:"ITEM12",permalink:"/docs/java/effective-java/ch3/ITEM12"}},c=[{value:"Object, API \ubb38\uc11c\uc5d0 \uae30\uc220\ub41c \uc77c\ubc18 \uaddc\uc57d",id:"object-api-\ubb38\uc11c\uc5d0-\uae30\uc220\ub41c-\uc77c\ubc18-\uaddc\uc57d",children:[{value:"hashCode \ub97c \uc7ac\uc815\uc758 \ud558\uc9c0 \uc54a\uc73c\uba74",id:"hashcode-\ub97c-\uc7ac\uc815\uc758-\ud558\uc9c0-\uc54a\uc73c\uba74",children:[]}]},{value:"HashCode \uc815\uc758\ud558\uae30",id:"hashcode-\uc815\uc758\ud558\uae30",children:[{value:"\ucd5c\uc545\uc758 HashCode \uad6c\ud604",id:"\ucd5c\uc545\uc758-hashcode-\uad6c\ud604",children:[]},{value:"\uc804\ud615\uc801\uc778 hashCode \uba54\uc11c\ub4dc",id:"\uc804\ud615\uc801\uc778-hashcode-\uba54\uc11c\ub4dc",children:[]},{value:"\ud574\uc2dc \ucf54\ub4dc \ucd5c\uc801\ud654",id:"\ud574\uc2dc-\ucf54\ub4dc-\ucd5c\uc801\ud654",children:[]},{value:"Object \ud074\ub798\uc2a4\uc758 hash \uba54\uc11c\ub4dc",id:"object-\ud074\ub798\uc2a4\uc758-hash-\uba54\uc11c\ub4dc",children:[]},{value:"\uce90\uc2f1",id:"\uce90\uc2f1",children:[]}]},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",children:[]}],i={toc:c};function u({components:e,...t}){return Object(n.b)("wrapper",Object(l.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"item11-equals-\ub97c-\uc7ac\uc815\uc758\ud558\ub824\uac70\ub4e0-hashcode-\ub3c4-\uc7ac\uc815\uc758\ud558\ub77c"},"ITEM11 equals \ub97c \uc7ac\uc815\uc758\ud558\ub824\uac70\ub4e0 hashCode \ub3c4 \uc7ac\uc815\uc758\ud558\ub77c"),Object(n.b)("p",null,"equals \ub97c \uc7ac\uc815\uc758 \ud560 \ub54c\ub294 hashCode \ub3c4 \ubc18\ub4dc\uc2dc \uc7ac\uc815\uc758 \ud574\uc57c \ud55c\ub2e4.",Object(n.b)("br",{parentName:"p"}),"\n","\uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ud504\ub85c\uadf8\ub7a8\uc774 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub2e4.",Object(n.b)("br",{parentName:"p"}),"\n","\uc7ac\uc815\uc758\ud55c hashCode \ub294 Object \uc758 API \ubb38\uc11c\uc5d0 \uae30\uc220\ub41c \uc77c\ubc18 \uaddc\uc57d\uc744 \ub530\ub77c\uc57c \ud55c\ub2e4."),Object(n.b)("h2",{id:"object-api-\ubb38\uc11c\uc5d0-\uae30\uc220\ub41c-\uc77c\ubc18-\uaddc\uc57d"},"Object, API \ubb38\uc11c\uc5d0 \uae30\uc220\ub41c \uc77c\ubc18 \uaddc\uc57d"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"equals \ube44\uad50\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc815\ubcf4\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc73c\uba74, ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"hashCode \uba54\uc11c\ub4dc\ub294 \uc77c\uad00\ub418\uac8c \ud56d\uc0c1 \uac19\uc740 \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4."))),Object(n.b)("li",{parentName:"ol"},"equals(Object) \uac00 \ub450 \uac1d\uccb4\ub97c \uac19\ub2e4\uace0 \ud310\ub2e8\ud588\ub2e4\uba74, ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uc758 hashCode \ub294 \ub611\uac19\uc740 \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4."))),Object(n.b)("li",{parentName:"ol"},"equals(Object) \uac00 \ub450 \uac1d\uccb4\ub97c \ub2e4\ub974\ub2e4\uace0 \ud310\ub2e8\ud588\ub354\ub77c\ub3c4",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ub450 \uac1d\uccb4\uc758 hashCode \uac00 \uc11c\ub85c \ub2e4\ub978 \uac12\uc744 \ubc18\ud658\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \ub2e4\ub978 \uac1d\uccb4\uc5d0 \ub300\ud574\uc11c \ub2e4\ub978 hashCode \ub97c \ubc18\ud658\ud574\uc57c \ud574\uc2dc\ud14c\uc774\ube14\uc758 \uc131\ub2a5\uc774 \uc88b\uc544\uc9c4\ub2e4.")))),Object(n.b)("p",null,"\uc55e\uc11c ","[10]","\uc758 equals \ub9cc\uc744 \uc815\uc758\ud55c \uac1d\uccb4\ub97c HashMap \uc758 \uc6d0\uc18c\ub85c \uc0ac\uc6a9\ud560 \ub54c,"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'Map<PhoneNumber, String> m = new HashMpa<>();\nm.put(new PhoneNumber(707, 867, 5309), "\uc81c\ub2c8");\nm.get(new PhoneNumber(707, 867, 5309)); // null\n')),Object(n.b)("p",null,"\uc704\uc5d0\uc11c\ub294 2\uac1c\uc758 PhoneNumber \uc778\uc2a4\ud134\uc2a4\uac00 \uc0ac\uc6a9\ub418\uc5c8\ub2e4."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"HashMap \uc5d0 \ub123\uc744 \ub54c"),Object(n.b)("li",{parentName:"ol"},"HashMap \uc5d0\uc11c \uaebc\ub0bc \ub54c")),Object(n.b)("h3",{id:"hashcode-\ub97c-\uc7ac\uc815\uc758-\ud558\uc9c0-\uc54a\uc73c\uba74"},"hashCode \ub97c \uc7ac\uc815\uc758 \ud558\uc9c0 \uc54a\uc73c\uba74"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ub17c\ub9ac\uc801 \ub3d9\uce58\uc778 \ub450 \uac1d\uccb4\uac00 \ub2e4\ub978 \ud574\uc2dc\ucf54\ub4dc \ubc18\ud658",Object(n.b)("br",{parentName:"li"}),"\u2192 2\ubc88\uc9f8 \uaddc\uc57d \uc704\ubc30",Object(n.b)("br",{parentName:"li"}),""),Object(n.b)("li",{parentName:"ul"},"get \uba54\uc11c\ub4dc\ub294 \uc5c9\ub6b1\ud55c \ud574\uc2dc \ubc84\ud0b7\uc5d0\uc11c \uac1d\uccb4\ub97c \ucc3e\uc73c\ub824\ud568",Object(n.b)("br",{parentName:"li"}),"\u2192 \ub450 \uac1d\uccb4\ub97c \uac19\uc740 \ubc84\ud0b7\uc5d0 \ub2f4\uc544\ub3c4, \uacb0\uacfc\ub294 \uac19\ub2e4.",Object(n.b)("br",{parentName:"li"}),"\u2192 HashMap \uc740 hashCode \uac00 \ub2e4\ub978 \uc5d4\ud2b8\ub9ac\ub07c\ub9ac\ub294 \ub3d9\uce58\uc131 \ube44\uad50\ub97c \uc2dc\ub3c4\uc870\ucc28 \ud558\uc9c0 \uc54a\uae30\ub85c \ucd5c\uc801\ud654 \ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\n")),Object(n.b)("h2",{id:"hashcode-\uc815\uc758\ud558\uae30"},"HashCode \uc815\uc758\ud558\uae30"),Object(n.b)("h3",{id:"\ucd5c\uc545\uc758-hashcode-\uad6c\ud604"},"\ucd5c\uc545\uc758 HashCode \uad6c\ud604"),Object(n.b)("p",null,"\ub3d9\uce58\uc778 \ubaa8\ub4e0 \uac1d\uccb4\uc5d0\uc11c \ub611\uac19\uc740 \ud574\uc2dc \ucf54\ub4dc\ub97c \ubc18\ud658\ud558\ub2c8 \uc801\ubc95\ud558\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"@Override public int hashCode() {\n    return 42;\n}\n")),Object(n.b)("h4",{id:"\ubaa8\ub4e0-\uac1d\uccb4\uc5d0\uc11c-\ub611\uac19\uc740-\uac12\uc744-\ubc18\ud658\ud558\ub294-\ubb38\uc81c"},"\ubaa8\ub4e0 \uac1d\uccb4\uc5d0\uc11c \ub611\uac19\uc740 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ubb38\uc81c"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uac1d\uccb4\uac00 \ud574\uc2dc\ud14c\uc774\ube14\uc758 \ubc84\ud0b7 \ud558\ub098\uc5d0 \ub2f4\uaca8 \ub9c8\uce58 \uc5f0\uacb0 \ub9ac\uc2a4\ud2b8\ucc98\ub7fc \ub3d9\uc791"),Object(n.b)("li",{parentName:"ul"},"\ud3c9\uade0 \uc218\ud589 \uc2dc\uac04\uc774 O(1) \uc778 \ud574\uc2dc \ud14c\uc774\ube14\uc774 O(n) \uc73c\ub85c \ub290\ub824\uc838 \uac1d\uccb4\uac00 \ub9ce\uc544\uc9c0\uba74 \ub3c4\uc800\ud788 \uc4f8 \uc218 \uc5c6\uac8c \ub41c\ub2e4.\n")),Object(n.b)("h4",{id:"\uc88b\uc740-\ud574\uc2dc-\ud568\uc218\uc758-\ud2b9\uc9d5"},"\uc88b\uc740 \ud574\uc2dc \ud568\uc218\uc758 \ud2b9\uc9d5"),Object(n.b)("p",null,"\uc11c\ub85c \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud574 \ub2e4\ub978 \ud574\uc2dc\ucf54\ub4dc\ub97c \ubc18\ud658\ud55c\ub2e4.",Object(n.b)("br",{parentName:"p"}),"\n","\u2192 hashCode 3\ubc88\uc9f8 \uaddc\uc57d"),Object(n.b)("p",null,"\uc774\uc0c1\uc801\uc778 \ud574\uc2dc\ud568\uc218\ub294 \uc11c\ub85c \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\ub4e4\uc744 32\ube44\ud2b8 \uc815\uc218 \ubc94\uc704\uc5d0 \uade0\uc77c\ud558\uac8c \ubd84\ubc30\ud574\uc57c \ud55c\ub2e4."),Object(n.b)("h3",{id:"\uc804\ud615\uc801\uc778-hashcode-\uba54\uc11c\ub4dc"},"\uc804\ud615\uc801\uc778 hashCode \uba54\uc11c\ub4dc"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud575\uc2ec\ud544\ub4dc",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"equals \ube44\uad50\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud544\ub4dc")))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"@Override public int hashCode() {\n    int result = Short.hashCode(areaCode);\n    result = 31 * result + Short.hashCode(prefix);\n    result = 31 * result + Short.hashCode(lineNum);\n    return result;\n}\n")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"int \ubcc0\uc218 result \ub97c \uc120\uc5b8\ud55c \ud6c4 \uac12 c \ub85c \ucd08\uae30\ud654 \ud55c\ub2e4.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"c")," \ud574\ub2f9 \uac1d\uccb4\uc758 \uccab\ubc88\uc9f8 \ud575\uc2ec \ud544\ub4dc\ub97c ",Object(n.b)("inlineCode",{parentName:"li"},"2.i")," \ubc29\uc2dd\uc73c\ub85c \uacc4\uc0b0\ud55c \ud574\uc2dc\ucf54\ub4dc"))),Object(n.b)("li",{parentName:"ol"},"\ub098\uba38\uc9c0 \ud575\uc2ec \ud544\ub4dc f \uac01\uac01\uc5d0 \ub300\ud574 \ub2e4\uc74c \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4. ",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"\ud574\ub2f9 \ud544\ub4dc\uc758 \ud574\uc2dc\ucf54\ub4dc c \ub97c \uacc4\uc0b0\ud55c\ub2e4",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"\uae30\ubcf8 \ud0c0\uc785 \ud544\ub4dc",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Type.hashCode(f)")," Type \uc740 \uae30\ubcf8 \ud0c0\uc785\uc758 \ubc15\uc2f1 \ud074\ub798\uc2a4"))),Object(n.b)("li",{parentName:"ol"},"\ucc38\uc870 \ud0c0\uc785 \ud544\ub4dc",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ud544\ub4dc\uc758 hashCode \ub97c \uc7ac\uadc0\uc801\uc73c\ub85c \ud638\ucd9c\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud558\ub2e4\uba74 \ud544\ub4dc\uc758 \ud45c\uc900\ud615 nonical representation \uc744 \ub9cc\ub4e4\uc5b4 \ud45c\uc900\ud615\uc758 hashCode \ub97c \ud638\ucd9c\ud55c\ub2e4."))),Object(n.b)("li",{parentName:"ol"},"\uac12\uc774 null",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ub2e4\ub978 \uc0c1\uc218\ub3c4 \uad1c\ucc2e\uc9c0\ub9cc \uc804\ud1b5\uc801\uc73c\ub85c 0 \uc0ac\uc6a9"))),Object(n.b)("li",{parentName:"ol"},"\ubc30\uc5f4",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ud575\uc2ec \uc6d0\uc18c\ub97c \uac01\uac01\uc758 \ubcc4\ub3c4 \ud544\ub4dc\ucc98\ub7fc \ub2e4\ub8ec\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uac01 \ud575\uc2ec\uc6d0\uc18c\uc758 \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud55c \ub2e4\uc74c, ",Object(n.b)("inlineCode",{parentName:"li"},"2.ii")," \ubc29\uc2dd\uc73c\ub85c \uac31\uc2e0\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ud575\uc2ec\uc6d0\uc18c\uac00 \ud558\ub098\ub3c4 \uc5c6\ub2e4\uba74 \uc0c1\uc218(0) \uc744 \uc0ac\uc6a9\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc6d0\uc18c\uac00 \ud575\uc2ec\uc6d0\uc18c\ub77c\uba74 Arrays.hashCode \ub97c \uc0ac\uc6a9"))),Object(n.b)("li",{parentName:"ol"},"\uc81c\uc678 \ud544\ub4dc",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ud30c\uc0dd \ud544\ub4dc \uc81c\uc678 \uc635\uc158"),Object(n.b)("li",{parentName:"ul"},"equals \ube44\uad50\uc5d0 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ud544\ub4dc\ub294 \uc81c\uc678 \ud544\uc218."))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"2.i")," \uc5d0\uc11c \uacc4\uc0b0\ud55c \ud574\uc2dc\ucf54\ub4dc c\ub85c result \ub97c \uac31\uc2e0\ud55c\ub2e4.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"result = 31 * result + c;")))))),Object(n.b)("li",{parentName:"ol"},"result \ub97c \ubc18\ud658\ud55c\ub2e4.")),Object(n.b)("h3",{id:"\ud574\uc2dc-\ucf54\ub4dc-\ucd5c\uc801\ud654"},"\ud574\uc2dc \ucf54\ub4dc \ucd5c\uc801\ud654"),Object(n.b)("h4",{id:"31--result\ub294-\ud544\ub4dc\ub97c-\uacf1\ud558\ub294-\uc21c\uc11c\uc5d0-\ub530\ub77c-result-\uac12\uc774-\ub2ec\ub77c\uc9c0\uac8c-\ud55c\ub2e4"},Object(n.b)("inlineCode",{parentName:"h4"},"31 * result"),"\ub294 \ud544\ub4dc\ub97c \uacf1\ud558\ub294 \uc21c\uc11c\uc5d0 \ub530\ub77c result \uac12\uc774 \ub2ec\ub77c\uc9c0\uac8c \ud55c\ub2e4."),Object(n.b)("p",null,"\ube44\uc2b7\ud55c \ud544\ub4dc\uac00 \uc5ec\ub7ec\uac1c\uc77c \ub54c \ud574\uc2dc \ud6a8\uacfc\ub97c \ud06c\uac8c \ub192\uc5ec\uc900\ub2e4."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"String \uc758 hashCode \ub97c \uacf1\uc148 \uc5c6\uc774 \uad6c\ud604\ud55c\ub2e4\uba74 \ubaa8\ub4e0 \uc544\ub098\uadf8\ub7a8(\uad6c\uc131 \ucca0\uc790\uac00 \uac19\uace0 \uc21c\uc11c\ub9cc \ub2e4\ub978 \ubb38\uc790\uc5f4)\uc758 \ud574\uc2dc\ucf54\ub4dc\uac00 \uac19\uc544\uc9c4\ub2e4.\n")),Object(n.b)("h4",{id:"31-\ub85c-\uacf1\ud558\ub294-\uc774\uc720"},"31 \ub85c \uacf1\ud558\ub294 \uc774\uc720"),Object(n.b)("p",null,"31 \uc740 \ud640\uc218\uc774\uba74\uc11c prime \uc774\ub2e4."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc9dd\uc218\ub77c\uba74, \uc624\ubc84\ud50c\ub85c\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74 \uc815\ubcf4\ub97c \uc783\uac8c \ub41c\ub2e4 ??"),Object(n.b)("li",{parentName:"ul"},"\uc18c\uc218\ub97c \uacf1\ud558\ub294 \uc774\uc720   ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\uba85\ud655\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc \uc804\ud1b5\uc801\uc778 \ubc29\ubc95"))),Object(n.b)("li",{parentName:"ul"},"\uacf1\uc148\uc744 \uc2dc\ud504\ud2b8 \uc5f0\uc0b0\uacfc \ube84\uc148\uc73c\ub85c \ub300\uccb4\ud574 \ucd5c\uc801\ud654 \uac00\ub2a5",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"31 * i")," == ",Object(n.b)("inlineCode",{parentName:"li"},"(i << 5) - i)")," ??")))),Object(n.b)("h3",{id:"object-\ud074\ub798\uc2a4\uc758-hash-\uba54\uc11c\ub4dc"},"Object \ud074\ub798\uc2a4\uc758 hash \uba54\uc11c\ub4dc"),Object(n.b)("p",null,"\uc784\uc758\uc758 \uac1c\uc218\ub9cc\ud07c \uac1d\uccb4\ub97c \ubc1b\uc544 \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud574 \uc8fc\ub294 \uc815\uc801 \uba54\uc11c\ub4dc"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"@Override public int hashCode() {\n    return Objects.hash(lineNum, prefix, areaCode);\n}\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc18d\ub3c4\ub294 \ub354 \ub290\ub9ac\ub2e4.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\uc785\ub825 \ubcc0\uc218\ub97c \ub2f4\uae30 \uc704\ud55c \ubc30\uc5f4\uc774 \uc0dd\uc131\ub41c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uae30\ubcf8\ud0c0\uc785\uc740 \ubc15\uc2f1\uacfc \uc5b8\ubc15\uc2f1\uc774 \ubc1c\uc0dd\ud55c\ub2e4."))),Object(n.b)("li",{parentName:"ul"},"\uc131\ub2a5\uc5d0 \ubbfc\uac10\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud669\uc5d0\ub9cc \uc0ac\uc6a9\ud558\uc790")),Object(n.b)("h3",{id:"\uce90\uc2f1"},"\uce90\uc2f1"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"\ubd88\ubcc0 \ud074\ub798\uc2a4"),Object(n.b)("li",{parentName:"ol"},"\ud574\uc2dc\ucf54\ub4dc \uacc4\uc0b0\ube44\uc6a9\uc774 \ud070 \ud074\ub798\uc2a4")),Object(n.b)("p",null,"\uc774\ub7f0 \ud0c0\uc785\uc758 \uac1d\uccb4\uac00"),Object(n.b)("h4",{id:"\uc8fc\ub85c-\ud574\uc2dc\uc758-\ud0a4\ub85c-\uc0ac\uc6a9\ub420-\uac83-\uac19\ub2e4\uba74"},"\uc8fc\ub85c \ud574\uc2dc\uc758 \ud0a4\ub85c \uc0ac\uc6a9\ub420 \uac83 \uac19\ub2e4\uba74,"),Object(n.b)("p",null,"\uc778\uc2a4\ud134\uc2a4\uac00 \ub9cc\ub4e4\uc5b4\uc9c8 \ub54c \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud574 \ub454\ub2e4."),Object(n.b)("h4",{id:"\ud574\uc2dc\uc758-\ud0a4\ub85c-\uc0ac\uc6a9\ub418\uc9c0-\uc54a\uc740-\uacbd\uc6b0"},"\ud574\uc2dc\uc758 \ud0a4\ub85c \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),Object(n.b)("p",null,"\ud574\uc2dc\ucf54\ub4dc\ub97c \uc9c0\uc5f0\ucd08\uae30\ud654 \ud558\ub824\ub294 hasCode \uba54\uc11c\ub4dc"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc\uc758 \uc548\uc815\uc131\uae4c\uc9c0 \uace0\ub824\ud574\uc57c \ud55c\ub2e4. ","[83]")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"private int hashCode;   // \uc790\ub3d9\uc73c\ub85c 0\uc73c\ub85c \ucd08\uae30\ud654 \ub41c\ub2e4.\n\n@Override public int hashCode() {\n    int result = hashCode;\n    if (result == 0) {\n        result = Short.hashCode(areaCode);\n        result = 31 * result + Short.hashCode(prefix);\n        result = 31 * result + Short.hashCode(lineNum);\n        hashCode = result;\n    }\n    return result;\n}\n")),Object(n.b)("h2",{id:"\uc8fc\uc758\ud560-\uc810"},"\uc8fc\uc758\ud560 \uc810"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\uc131\ub2a5\uc744 \uc704\ud574 \ud574\uc2dc\ucf54\ub4dc\uc758 \ud575\uc2ec\ud544\ub4dc\ub97c \uc0dd\ub7b5\ud558\uba74 \uc548\ub41c\ub2e4."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\uacc4\uc0b0 \uc18d\ub3c4\ub294 \ube68\ub77c\uc9c0\uc9c0\ub9cc, \ud574\uc2dc\ud488\uc9c8\uc774 \ub098\ube60\uc838 \ud574\uc2dc\ud14c\uc774\ube14\uc758 \uc131\ub2a5\uc744 \uc120\ud615\uc73c\ub85c \ub5a8\uc5b4\ub728\ub9b0\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc2e4\uc81c\ub85c \uc790\ubc14 2 \uc804\uc758 String \uc740 \ucd5c\ub300 16\uac1c\uc758 \ubb38\uc790\ub9cc\uc73c\ub85c \ud574\uc2dc\ucf54\ub4dc\ub97c \uacc4\uc0b0\ud588\ub2e4. ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uc601\uc5ed\uc758 \uc218\ub9ce\uc740 \uc778\uc2a4\ud134\uc2a4\uac00 \ub2e8 \uba87\uac1c\uc758 \ud574\uc2dc\ucf54\ub4dc\ub85c \uc9d1\uc911\ub41c\ub2e4."))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"hashCode \uac00 \ubc18\ud658\ud558\ub294 \uac12\uc758 \uc0dd\uc131 \uaddc\uce59\uc744 API \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc790\uc138\ud788 \uacf5\ud45c\ud558\uc9c0 \ub9d0\uc790"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud604\uc7ac\uc758 hashCode \uac12\uc5d0 \uc758\uc9c0\ud558\uc9c0 \uc54a\uac8c \ub418\uace0, \ucd94\ud6c4\uc5d0 \uacc4\uc0b0 \ubc29\uc2dd\uc744 \ubc14\uafc0 \uc218 \uc788\ub2e4."),Object(n.b)("li",{parentName:"ul"},"String, Integer \uc640 \uac19\uc740 \uc790\ubc14 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ub9ce\uc740 \ud074\ub798\uc2a4\uc5d0\uc11c hashCode \uba54\uc11c\ub4dc\uac00 \ubc18\ud658\ud558\ub294 \uc815\ud655\ud55c \uac12\uc744 \uc54c\ub824\uc8fc\ub294 \uc2e4\uc218\ub97c \uc800\uc9c8\ub800\ub2e4.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ud5a5\ud6c4 \ub9b4\ub9ac\uc2a4\uc5d0\uc11c \uac1c\uc120\ud558\uae30 \uc5b4\ub824\uc6cc \uc84c\uc74c"),Object(n.b)("li",{parentName:"ul"},"\uacb0\ud568\uc744 \uace0\uce60\uc218 \uc5c6\uc5b4\uc9d0")))))))}u.isMDXComponent=!0},414:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return h}));var l=a(0),n=a.n(l);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},b=Object.keys(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(a),O=l,h=o["".concat(r,".").concat(O)]||o[O]||j[O]||b;return a?n.a.createElement(h,c(c({ref:t},u),{},{components:a})):n.a.createElement(h,c({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=a.length,r=new Array(b);r[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var u=2;u<b;u++)r[u]=a[u];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);