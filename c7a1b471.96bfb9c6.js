(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{375:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(3),r=(a(0),a(447));const c={title:"21. \uc778\ud130\ud398\uc774\uc2a4\ub294 \uad6c\ud604\ud558\ub294 \ucabd\uc744 \uc0dd\uac01\ud574 \uc124\uacc4\ud558\ub77c"},i={unversionedId:"java/effective-java/ch4/ITEM21",id:"java/effective-java/ch4/ITEM21",isDocsHomePage:!1,title:"21. \uc778\ud130\ud398\uc774\uc2a4\ub294 \uad6c\ud604\ud558\ub294 \ucabd\uc744 \uc0dd\uac01\ud574 \uc124\uacc4\ud558\ub77c",description:"Default Method",source:"@site/docs/java/effective-java/ch4/ITEM21.md",slug:"/java/effective-java/ch4/ITEM21",permalink:"/docs/java/effective-java/ch4/ITEM21",version:"current",sidebar:"effectiveJava",previous:{title:"20. \ucd94\uc0c1 \ud074\ub798\uc2a4\ubcf4\ub2e4\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc6b0\uc120\ud558\ub77c",permalink:"/docs/java/effective-java/ch4/ITEM20"},next:{title:"22. \uc778\ud130\ud398\uc774\uc2a4\ub294 \ud0c0\uc785\uc744 \uc815\uc758\ud558\ub294 \uc6a9\ub3c4\ub85c\ub9cc \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch4/ITEM22"}},o=[{value:"Default Method",id:"default-method",children:[]},{value:"Before Java 1.8",id:"before-java-18",children:[]},{value:"\uc8fc\uc758 \uc0ac\ud56d",id:"\uc8fc\uc758-\uc0ac\ud56d",children:[{value:"1. \ubd88\ubcc0\uc2dd\uc744 \ud574\uce58\uc9c0 \uc54a\ub294 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc \uc791\uc131\uc758 \uc5b4\ub824\uc6c0",id:"1-\ubd88\ubcc0\uc2dd\uc744-\ud574\uce58\uc9c0-\uc54a\ub294-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc-\uc791\uc131\uc758-\uc5b4\ub824\uc6c0",children:[]},{value:"2. \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \ucef4\ud30c\uc77c\uc5d0 \uc131\uacf5\ud558\ub354\ub77c\ub3c4 \uae30\uc874 \uad6c\ud604\uccb4\uc5d0 \ub7f0\ud0c0\uc784 \uc624\ub958\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\ub2e4.",id:"2-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\ucef4\ud30c\uc77c\uc5d0-\uc131\uacf5\ud558\ub354\ub77c\ub3c4-\uae30\uc874-\uad6c\ud604\uccb4\uc5d0-\ub7f0\ud0c0\uc784-\uc624\ub958\ub97c-\uc77c\uc73c\ud0ac-\uc218-\uc788\ub2e4",children:[]},{value:"3. \uae30\uc874 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub85c \uc0c8 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud558\ub294 \uc77c\uc740 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \ud53c\ud55c\ub2e4.",id:"3-\uae30\uc874-\uc778\ud130\ud398\uc774\uc2a4\uc5d0-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub85c-\uc0c8-\uba54\uc11c\ub4dc\ub97c-\ucd94\uac00\ud558\ub294-\uc77c\uc740-\uaf2d-\ud544\uc694\ud55c-\uacbd\uc6b0\uac00-\uc544\ub2c8\uba74-\ud53c\ud55c\ub2e4",children:[]},{value:"4. \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130 \uba54\uc11c\ub4dc\ub97c \uc81c\uac70\ud558\uac70\ub098 \uae30\uc874 \uba54\uc11c\ub4dc\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub97c \uc218\uc815\ud558\ub294 \uc6a9\ub3c4\uac00 \uc544\ub2c8\ub2e4.",id:"4-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130-\uba54\uc11c\ub4dc\ub97c-\uc81c\uac70\ud558\uac70\ub098-\uae30\uc874-\uba54\uc11c\ub4dc\uc758-\uc2dc\uadf8\ub2c8\ucc98\ub97c-\uc218\uc815\ud558\ub294-\uc6a9\ub3c4\uac00-\uc544\ub2c8\ub2e4",children:[]},{value:"5. \uc0c8\ub85c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74 \ub9b4\ub9ac\uc2a4 \uc804\uc5d0 \ubc18\ub4dc\uc2dc \ud14c\uc2a4\ud2b8\ub97c \uac70\uccd0\uc57c \ud55c\ub2e4.",id:"5-\uc0c8\ub85c\uc6b4-\uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74-\ub9b4\ub9ac\uc2a4-\uc804\uc5d0-\ubc18\ub4dc\uc2dc-\ud14c\uc2a4\ud2b8\ub97c-\uac70\uccd0\uc57c-\ud55c\ub2e4",children:[]}]},{value:"Reference",id:"reference",children:[]}],b={toc:o};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"default-method"},"Default Method"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Default Method (java 8)")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"\uae30\uc874 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00"),"\ud560 \uc218 \uc788\ub294 \ubc29\ubc95"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\ud575\uc2ec \uceec\ub809\uc158 \uc778\ud130\ud398\uc774\uc2a4"),"\uc5d0 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\uac00 \ucd94\uac00 \ub418\uc5c8\ub2e4. "),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\uc8fc\ub85c ",Object(r.b)("strong",{parentName:"p"},"\ub78c\ub2e4"),"\ub97c \ud65c\uc6a9\ud558\uae30 \uc704\ud568"))),Object(r.b)("p",null,"\uc790\ubc14 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \ucf54\ub4dc\ud488\uc9c8\uc774 \ub192\uace0 \ubc94\uc6a9\uc801 \u2192 \ub300\ubd80\ubd84 \uc798 \uc791\ub3d9"),Object(r.b)("h2",{id:"before-java-18"},"Before Java 1.8"),Object(r.b)("p",null,"\ub514\uc790\uc778\ud328\ud134\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \uac1c\ubc1c\uc790\ub77c\uba74 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc911\uc694\uc131\uc740 \uc798 \uc54c\uace0 \uc788\uc744 \uac83\uc774\ub2e4. "),Object(r.b)("p",null,"\uc790\ubc14 8 \uc774\ud6c4\ub85c\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ud558\uc704 \ud638\ud658\uc131\uc744 \uc9c0\ud0ac \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc790\ubc14 8 \uc774\uc804\uc5d0\ub294 \ud558\uc704 \ud638\ud658\uc131\uc744 \uc9c0\ud0a4\uba74\uc11c \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud558\ub294 \uac83\uc774 \ubd88\uac00\ub2a5\ud588\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc790\ubc14 8 \uc774\ud6c4, default method \uac00 \ucd94\uac00\ub418\uba74\uc11c \uc0c8\ub85c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uc9c0 \uc54a\uc544 \ubc1c\uc0dd\ud558\ub294 \ucef4\ud30c\uc77c \uc5d0\ub7ec\ub97c \uc7a1\uc744 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4.")),Object(r.b)("h2",{id:"\uc8fc\uc758-\uc0ac\ud56d"},"\uc8fc\uc758 \uc0ac\ud56d"),Object(r.b)("h3",{id:"1-\ubd88\ubcc0\uc2dd\uc744-\ud574\uce58\uc9c0-\uc54a\ub294-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc-\uc791\uc131\uc758-\uc5b4\ub824\uc6c0"},"1. \ubd88\ubcc0\uc2dd\uc744 \ud574\uce58\uc9c0 \uc54a\ub294 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc \uc791\uc131\uc758 \uc5b4\ub824\uc6c0"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\ubaa8\ub4e0 \uae30\uc874 \uad6c\ud604\uccb4\ub4e4\uacfc \ub9e4\ub044\ub7fd\uac8c \uc5f0\ub3d9\ub418\ub9ac\ub77c\ub294 \ubcf4\uc7a5\uc740 \uc5c6\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","\ubd88\ubcc0\uc2dd\uc744 \ud574\uce58\uc9c0 \uc54a\ub294 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc5b4\ub835\ub2e4."),Object(r.b)("p",{parentName:"div"},"\u2192 \uc790\ubc14 7\uae4c\uc9c0\uc758 \uc138\uc0c1\uc5d0\uc11c\ub294 \ubaa8\ub4e0 \ud074\ub798\uc2a4\uac00 ",Object(r.b)("strong",{parentName:"p"},'"\ud604\uc7ac\uc758 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc0c8\ub85c\uc6b4 \uba54\uc11c\ub4dc\uac00 \ucd94\uac00\ub420 \uc77c\uc740 \uc601\uc6d0\ud788 \uc5c6\ub2e4"')," \uace0 \uac00\uc815\ud558\uace0 \uc791\uc131\ub418\uc5c8\uae30 \ub54c\ubb38\uc774\ub2e4."))),Object(r.b)("h4",{id:"\ubb38\uc81c\uc810"},"\ubb38\uc81c\uc810"),Object(r.b)("p",null,"\uc790\ubc14 8 \uc758 Collection \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ucd94\uac00\ub41c removeIf \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public interface Collection<E> extends Iterable<E> {\n    default boolean removeIf(Predicate<? super E> filter) {\n        Objects.requireNonNull(filter);\n        boolean result = false;\n        for (Iterator<E> it = iterator(); it.hasNext(); ) {\n            if (filter.test(it.next())) {\n                it.remove();\n                result = true;\n            } \n        }\n        return result;\n    }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) {\n    List<Integer> numbers= new ArrayList();\n    numbers.add(1);\n    numbers.add(2);\n    numbers.add(3);\n\n    numbers.removeIf(a -> a == 2);\n\n    // number -> 1, 3\n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),Object(r.b)("inlineCode",{parentName:"h5"},"apache.commons.collections4.collection.SynchronizedCollection")," ")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc81c\uacf5\ud55c \uac1d\uccb4\ub85c \ub77d\uc744 \uac70\ub294 \ub2a5\ub825\uc744 \ucd94\uac00\ub85c \uc81c\uacf5 (Thread-safe \ud55c \uac1d\uccb4\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.)"),Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc5d0\uc11c \uc8fc\uc5b4\uc9c4 \ub77d \uac1d\uccb4\ub85c \ub3d9\uae30\ud654 \ud55c \ud6c4 \ub0b4\ubd80 \uceec\ub809\uc158 \uac1d\uccb4\uc5d0 \uc704\uc784\ud558\ub294 \ub798\ud37c\ud074\ub798\uc2a4")),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"removeIf")," \uc640 \ub9de\uc9c0 \uc54a\uc74c (effective java 3\ud310 \uc791\uc131\uc2dc\uc810)"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"removeIf \uc758 \uad6c\ud604\uc740 \ub3d9\uae30\ud654\uc5d0 \ub300\ud574 \ubaa8\ub974\ubbc0\ub85c \ub77d \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4."),Object(r.b)("li",{parentName:"ul"},"3.2.2 \ubc84\uc804\uc5d0\uc11c\ub294 removeIf\ub97c \uc7ac\uc815\uc758\ud558\uc9c0 \uc54a\uace0 \uc788\ub2e4.\n",Object(r.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/42836576/106704468-8a04d280-662f-11eb-979d-3905cb495335.png",alt:null}),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ConcurrentModificationException\uc774 \ubc1c\uc0dd\ud558\uac70\ub098 \uc608\uae30\uce58 \ubabb\ud55c \uacb0\uacfc\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.")))),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"4.4 \ubc84\uc804\uc5d0\uc11c\ub294 removeIf\ub97c \uc7ac\uc815\uc758\ud558\uace0 \uc788\ub2e4.\n",Object(r.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/42836576/106704478-8c672c80-662f-11eb-8434-d37db32b0134.png",alt:null}),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean removeIf(Predicate<? super E> filter) {\n   synchronized (mutex) { // \ub3d9\uae30\ud654\ucc98\ub9ac\ub97c \ud574\uc8fc\uace0 \uc788\ub2e4.\n        return c.removeIf(filter);\n     }\n}\n")))))),Object(r.b)("h4",{id:"\ud574\uacb0-\ubc29\uc548"},"\ud574\uacb0 \ubc29\uc548"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uad6c\ud604\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc \uc7ac\uc815\uc758")),Object(r.b)("p",null,"\uc790\ubc14 \ud50c\ub7ab\ud3fc\uc5d0 \uc18d\ud558\uc9c0 \uc54a\uc740 \uc81c 3\uc758 \uae30\uc874 \uceec\ub809\uc158 \uad6c\ud604\uccb4\uc5d0\uc11c\ub294 \uc5ec\uc804\ud788 \uc218\uc815\ub418\uc9c0 \uc54a\uace0 \uc788\uc744 \uc218 \uc788\ub2e4."),Object(r.b)("h3",{id:"2-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\ucef4\ud30c\uc77c\uc5d0-\uc131\uacf5\ud558\ub354\ub77c\ub3c4-\uae30\uc874-\uad6c\ud604\uccb4\uc5d0-\ub7f0\ud0c0\uc784-\uc624\ub958\ub97c-\uc77c\uc73c\ud0ac-\uc218-\uc788\ub2e4"},"2. \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \ucef4\ud30c\uc77c\uc5d0 \uc131\uacf5\ud558\ub354\ub77c\ub3c4 \uae30\uc874 \uad6c\ud604\uccb4\uc5d0 \ub7f0\ud0c0\uc784 \uc624\ub958\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\ub2e4."),Object(r.b)("p",null,"\ud754\ud55c\uc77c\uc740 \uc544\ub2c8\uc9c0\ub9cc \uc77c\uc5b4\ub0a0 \uc218 \uc788\ub2e4."),Object(r.b)("h3",{id:"3-\uae30\uc874-\uc778\ud130\ud398\uc774\uc2a4\uc5d0-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub85c-\uc0c8-\uba54\uc11c\ub4dc\ub97c-\ucd94\uac00\ud558\ub294-\uc77c\uc740-\uaf2d-\ud544\uc694\ud55c-\uacbd\uc6b0\uac00-\uc544\ub2c8\uba74-\ud53c\ud55c\ub2e4"},"3. \uae30\uc874 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub85c \uc0c8 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud558\ub294 \uc77c\uc740 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \ud53c\ud55c\ub2e4."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\uac00 \uae30\uc874 \uad6c\ud604\uccb4\ub4e4\uacfc \ucda9\ub3cc\ud558\uc9c0 \uc54a\ub294\uc9c0 \uace0\ub824\ud55c\ub2e4."))),Object(r.b)("p",null,"\uc0c8\ub85c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uacbd\uc6b0\ub77c\uba74 \uc720\uc6a9\ud55c \uc218\ub2e8\uc774\ub2e4."),Object(r.b)("h3",{id:"4-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130-\uba54\uc11c\ub4dc\ub97c-\uc81c\uac70\ud558\uac70\ub098-\uae30\uc874-\uba54\uc11c\ub4dc\uc758-\uc2dc\uadf8\ub2c8\ucc98\ub97c-\uc218\uc815\ud558\ub294-\uc6a9\ub3c4\uac00-\uc544\ub2c8\ub2e4"},"4. \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130 \uba54\uc11c\ub4dc\ub97c \uc81c\uac70\ud558\uac70\ub098 \uae30\uc874 \uba54\uc11c\ub4dc\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub97c \uc218\uc815\ud558\ub294 \uc6a9\ub3c4\uac00 \uc544\ub2c8\ub2e4."),Object(r.b)("p",null,"\uc774\ub7f0 \ud615\ud0dc\ub85c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud558\uba74 \uae30\uc874 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ub9dd\uac00\ub728\ub9ac\uac8c \ub41c\ub2e4."),Object(r.b)("h3",{id:"5-\uc0c8\ub85c\uc6b4-\uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74-\ub9b4\ub9ac\uc2a4-\uc804\uc5d0-\ubc18\ub4dc\uc2dc-\ud14c\uc2a4\ud2b8\ub97c-\uac70\uccd0\uc57c-\ud55c\ub2e4"},"5. \uc0c8\ub85c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74 \ub9b4\ub9ac\uc2a4 \uc804\uc5d0 \ubc18\ub4dc\uc2dc \ud14c\uc2a4\ud2b8\ub97c \uac70\uccd0\uc57c \ud55c\ub2e4."),Object(r.b)("p",null,"\uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9b4\ub9ac\uc988 \ud55c \ud6c4\uc758 \uacb0\ud568 \uc218\uc815 \uac00\ub2a5\uc131\uc5d0 \ub300\ud574 \uae30\ub300\uc11c\ub294 \uc548\ub41c\ub2e4."),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/21_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%8A%94_%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94_%EC%AA%BD%EC%9D%84_%EC%83%9D%EA%B0%81%ED%95%B4_%EC%84%A4%EA%B3%84%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/21_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%8A%94_%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94_%EC%AA%BD%EC%9D%84_%EC%83%9D%EA%B0%81%ED%95%B4_%EC%84%A4%EA%B3%84%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/21_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%8A%94_%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94_%EC%AA%BD%EC%9D%84_%EC%83%9D%EA%B0%81%ED%95%B4_%EC%84%A4%EA%B3%84%ED%95%98%EB%9D%BC_%EB%B0%95%EC%B0%BD%EC%9B%90.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/4%EC%9E%A5/21_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%8A%94_%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94_%EC%AA%BD%EC%9D%84_%EC%83%9D%EA%B0%81%ED%95%B4_%EC%84%A4%EA%B3%84%ED%95%98%EB%9D%BC_%EB%B0%95%EC%B0%BD%EC%9B%90.md"))))}l.isMDXComponent=!0},447:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=d(a),s=n,v=m["".concat(i,".").concat(s)]||m[s]||p[s]||c;return a?r.a.createElement(v,o(o({ref:t},l),{},{components:a})):r.a.createElement(v,o({ref:t},l))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);