(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{337:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return o}));var n=t(3),r=(t(0),t(454));const c={title:"14. Comparable \uc744 \uad6c\ud604\ud560\uc9c0 \uace0\ub824\ud558\ub77c"},l={unversionedId:"java/effective-java/ch3/ITEM14",id:"java/effective-java/ch3/ITEM14",isDocsHomePage:!1,title:"14. Comparable \uc744 \uad6c\ud604\ud560\uc9c0 \uace0\ub824\ud558\ub77c",description:"\uadf8 \uc778\uc2a4\ud134\uc2a4\ub4e4\uc744 \uc27d\uac8c \uc815\ub82c\ud558\uace0, \uac80\uc0c9\ud558\uace0, \ube44\uad50 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \uceec\ub809\uc158\uacfc \uc5b4\uc6b0\ub7ec\uc9c0\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4.",source:"@site/docs/java/effective-java/ch3/ITEM14.md",slug:"/java/effective-java/ch3/ITEM14",permalink:"/docs/java/effective-java/ch3/ITEM14",version:"current",sidebar:"effectiveJava",previous:{title:"13. clone \uc7ac\uc815\uc758\ub294 \uc8fc\uc758\ud574\uc11c \uc9c4\ud589\ud558\ub77c",permalink:"/docs/java/effective-java/ch3/ITEM13"},next:{title:"ch4 \ud074\ub798\uc2a4\uc640 \uc778\ud130\ud398\uc774\uc2a4",permalink:"/docs/java/effective-java/ch4/index"}},b=[{value:"compareTo",id:"compareto",children:[{value:"compareTo \ud2b9\uc9d5",id:"compareto-\ud2b9\uc9d5",children:[]},{value:"compareTo \uc77c\ubc18 \uaddc\uc57d",id:"compareto-\uc77c\ubc18-\uaddc\uc57d",children:[]}]},{value:"equals \uc640 compareTo",id:"equals-\uc640-compareto",children:[{value:"equals",id:"equals",children:[]},{value:"compareTo",id:"compareto-1",children:[]}]},{value:"Comparable \uc744 \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud574 \uac12\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95",id:"comparable-\uc744-\uad6c\ud604\ud55c-\ud074\ub798\uc2a4\ub97c-\ud655\uc7a5\ud574-\uac12\uc744-\ucd94\uac00\ud558\ub294-\ubc29\ubc95",children:[]},{value:"compareTo \uba54\uc11c\ub4dc \uc791\uc131 \uc694\ub839",id:"compareto-\uba54\uc11c\ub4dc-\uc791\uc131-\uc694\ub839",children:[{value:"equals\uc640 \ucc28\uc774\uc810",id:"equals\uc640-\ucc28\uc774\uc810",children:[]},{value:"\uac1d\uccb4 compareTo \uc758 \ube44\uad50",id:"\uac1d\uccb4-compareto-\uc758-\ube44\uad50",children:[]},{value:"\uae30\ubcf8 \ud0c0\uc785\uc758 \ube44\uad50",id:"\uae30\ubcf8-\ud0c0\uc785\uc758-\ube44\uad50",children:[]},{value:"\ube44\uad50 \uc21c\uc11c",id:"\ube44\uad50-\uc21c\uc11c",children:[]},{value:"\ube44\uad50\uc790 \uc0dd\uc131 \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud55c \ube44\uad50\uc790",id:"\ube44\uad50\uc790-\uc0dd\uc131-\uba54\uc11c\ub4dc\ub97c-\ud65c\uc6a9\ud55c-\ube44\uad50\uc790",children:[]}]},{value:"Reference",id:"reference",children:[]}],i={toc:b};function o({components:e,...a}){return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),Object(r.b)("strong",{parentName:"h5"},"\uc21c\uc11c\ub97c \uace0\ub824\ud574\uc57c \ud558\ub294 \uac12 \ud074\ub798\uc2a4\ub97c \uc791\uc131")," \u2192 \uaf2d Comparable \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604  ")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\uadf8 \uc778\uc2a4\ud134\uc2a4\ub4e4\uc744 \uc27d\uac8c \uc815\ub82c\ud558\uace0, \uac80\uc0c9\ud558\uace0, \ube44\uad50 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \uceec\ub809\uc158\uacfc \uc5b4\uc6b0\ub7ec\uc9c0\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4.   "))),Object(r.b)("h2",{id:"compareto"},"compareTo"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"compareTo")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Comparable \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc720\uc77c\ud55c \uba54\uc11c\ub4dc"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Object \uba54\uc11c\ub4dc\uac00 \uc544\ub2d8"),Object(r.b)("li",{parentName:"ul"},"Object equals \uc640 \uc720\uc0ac\ud568")))),Object(r.b)("h3",{id:"compareto-\ud2b9\uc9d5"},"compareTo \ud2b9\uc9d5"),Object(r.b)("h4",{id:"1-compareto-\ub294-\ub2e8\uc21c-\ub3d9\uce58\uc131-\ube44\uad50--\uc21c\uc11c-\ube44\uad50"},"1. compareTo \ub294 \ub2e8\uc21c \ub3d9\uce58\uc131 \ube44\uad50 + ",Object(r.b)("strong",{parentName:"h4"},"\uc21c\uc11c \ube44\uad50")),Object(r.b)("hr",null),Object(r.b)("p",null,"Object equals \uc640 \uc720\uc0ac\ud558\uc9c0\ub9cc compareTo\ub294 \uc21c\uc11c\uae4c\uc9c0 \ube44\uad50\ud55c\ub2e4."),Object(r.b)("h4",{id:"2comparable-\uc744-\uad6c\ud604\ud55c-\ud074\ub798\uc2a4"},"2.Comparable \uc744 \uad6c\ud604\ud55c \ud074\ub798\uc2a4"),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac1d\uccb4\ub294 \uc790\uc5f0 \uc21c\uc11c \uc874\uc7ac"),Object(r.b)("li",{parentName:"ul"},"\uac1d\uccb4\ub4e4\uc758 \ubc30\uc5f4\uc740 ",Object(r.b)("inlineCode",{parentName:"li"},"Arrays.sort(a);")," \ub85c \uc815\ub82c \uac00\ub2a5")),Object(r.b)("h4",{id:"3-comparable-\uc744-\uad6c\ud604\ud558\uba74-\uc774-\uc778\ud130\ud398\uc774\uc2a4\ub97c-\ud65c\uc6a9\ud558\ub294-\uc218-\ub9ce\uc740-\uc81c\ub124\ub9ad-\uc54c\uace0\ub9ac\uc998\uacfc-\uceec\ub809\uc158\uc758-\ud6a8\uacfc\ub97c-\uc0ac\uc6a9\ud560-\uc218-\uc788\uc74c"},"3. Comparable \uc744 \uad6c\ud604\ud558\uba74 \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud65c\uc6a9\ud558\ub294 \uc218 \ub9ce\uc740 \uc81c\ub124\ub9ad \uc54c\uace0\ub9ac\uc998\uacfc \uceec\ub809\uc158\uc758 \ud6a8\uacfc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc790\ubc14 \ud50c\ub7ab\ud3fc \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ubaa8\ub4e0 \uac12 \ud074\ub798\uc2a4\uc640 \uc5f4\uac70\ud0c0\uc785",Object(r.b)("a",{parentName:"li",href:"/docs/java/effective-java/ch6/ITEM34"},"34"),"\uc774 Comparable \uc744 \uad6c\ud604\ud568."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\uc54c\ud30c\ubcb3, \uc22b\uc790, \uc5f0\ub300 \uac19\uc774 \uc21c\uc11c\uac00 \uba85\ud655\ud55c \uac12 \ud074\ub798\uc2a4\ub97c \uc791\uc131\ud55c\ub2e4\uba74 \ubc18\ub4dc\uc2dc Comparable \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uc790")),Object(r.b)("li",{parentName:"ul"},"\uac80\uc0c9, \uadf9\ub2e8\uac12 \uacc4\uc0b0, \uc790\ub3d9 \uc815\ub82c\ub418\ub294 \uceec\ub809\uc158 \uad00\ub9ac \uac00\ub2a5")),Object(r.b)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub294 String \uc774 Comparable \uc744 \uad6c\ud604\ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \u2192 \uba85\ub839\uc904 \uc778\uc218\ub4e4\uc744 \uc54c\ud30c\ubcb3 \uc21c\uc73c\ub85c \ucd9c\ub825\ud568"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public class WordList {\n    public static void main(String[] args) {\n        Set<String> s = new TreeSet<>();\n        Collections.addAll(s, args);\n        System.out.println(s);\n    }   \n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"HashSet"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc911\ubcf5 \uc800\uc7a5\ud560 \uc218 \uc5c6\uace0 \uc21c\uc11c\ub97c \ubcf4\uc7a5\ud558\uc9c0 \uc54a\uc74c")),Object(r.b)("p",{parentName:"div"},"TreeSet"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\uc911\ubcf5\ub41c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc5c6\uace0 \uc785\ub825\ud55c \uc21c\uc11c\ub300\ub85c \uac12\uc744 \uc800\uc7a5\ud558\uc9c0 \uc54a\uc74c"),Object(r.b)("li",{parentName:"ul"},"TreeSet\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc624\ub984\ucc28\uc21c\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc815\ub82c\ud568")),Object(r.b)("p",{parentName:"div"},"LinkedHashSet"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\uc911\ubcf5\ub41c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc5c6\uace0 \uc785\ub825\ub41c \uc21c\uc11c\ub300\ub85c \ub370\uc774\ud130\ub97c \uad00\ub9ac\ud568")))),Object(r.b)("h3",{id:"compareto-\uc77c\ubc18-\uaddc\uc57d"},"compareTo \uc77c\ubc18 \uaddc\uc57d"),Object(r.b)("p",null,"equals \uaddc\uc57d\uacfc \uc720\uc0ac\ud568"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public interface Comparable<T> {\n    int compareTo(T t);\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\uc774 \uac1d\uccb4\uc640 \uc8fc\uc5b4\uc9c4 \uac1d\uccb4\uc758 \uc21c\uc11c\ub97c \ube44\uad50\ud55c\ub2e4.")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\uc774 \uac1d\uccb4\uac00 \uc8fc\uc5b4\uc9c4 \uac1d\uccb4\ubcf4\ub2e4 ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc791\uc73c\uba74 \uc74c\uc758\uc815\uc218 \ubc18\ud658"),Object(r.b)("li",{parentName:"ul"},"\uac19\uc73c\uba74 0 \ubc18\ud658"),Object(r.b)("li",{parentName:"ul"},"\ud06c\uba74 \uc591\uc758\uc815\uc218 \ubc18\ud658"))),Object(r.b)("li",{parentName:"ul"},"\uc774 \uac1d\uccb4\uc640 \ube44\uad50\ud560 \uc218 \uc5c6\ub294 \ud0c0\uc785\uc758 \uac1d\uccb4\uac00 \uc8fc\uc5b4\uc9c0\uba74",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ClassCastException \uc744 \ub358\uc9d0")))))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"sng(\ud45c\ud604\uc2dd) \ud45c\uae30        ")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\ubd80\ud638 \ud568\uc218(signum function)    "),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\ud45c\ud604\uc2dd\uc758 \uac12\uc774 \uc74c\uc218, 0, \uc591\uc218 \uc77c \ub54c -1, 0, 1 \uc744 \ubc18\ud658\ud558\ub3c4\ub85d \uc815\uc758\ub428")))),Object(r.b)("p",null,"Comparable \uc744 \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub294"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 x, y \uc5d0 \ub300\ud574  ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sng(x.compareTo(y)) == - sgn(y.compareTo(x))")," \uc774\ub2e4"),Object(r.b)("li",{parentName:"ul"},"(\ub530\ub77c\uc11c ",Object(r.b)("inlineCode",{parentName:"li"},"x.compareTo(y)")," \ub294 ",Object(r.b)("inlineCode",{parentName:"li"},"y.compareTo(x)")," \uac00 \uc608\uc678\ub97c \ub358\uc9c8 \ub54c\uc5d0 \ud55c\ud574 \uc608\uc678\ub97c \ub358\uc838\uc57c \ud55c\ub2e4.)"))),Object(r.b)("li",{parentName:"ul"},"\ucd94\uc774\uc131\uc744 \ubcf4\uc7a5\ud574\uc57c \ud55c\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(x.compareTo(y) > 0 && y.compareTo(z) > 0)")," \uc774\uba74 ",Object(r.b)("inlineCode",{parentName:"li"},"x.compareTo(z) > 0")," \uc774\ub2e4"))),Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 z \uc5d0 \ub300\ud574 ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x.compareTo(y) == 0")," \uc774\uba74 ",Object(r.b)("inlineCode",{parentName:"li"},"sgn(x.compareTo(z)) == sgn(y.compareTo(z))")," "))),Object(r.b)("li",{parentName:"ul"},"\ud544\uc218\ub294 \uc544\ub2c8\uc9c0\ub9cc \uaf2d \uc9c0\ud0a4\ub294\uac8c \uc88b\uc740 \ud56d\ubaa9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(x.compareTo(y) == 0) == (x.equals(y))")," \uc5ec\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"compareTo \ub85c \uc218\ud589\ud55c \ub3d9\uce58\uc131 \ud14c\uc2a4\ud2b8\uc758 \uacb0\uacfc\uac00 equals \uc640 \uac19\uc544\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uad8c\uace0\ub97c \uc9c0\ud0a4\uc9c0 \uc54a\ub294 \ud074\ub798\uc2a4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'"\uc8fc\uc758: \uc774 \ud074\ub798\uc2a4\uc758 \uc21c\uc11c\ub294 equals \uba54\uc11c\ub4dc\uc640 \uc77c\uad00\ub418\uc9c0 \uc54a\ub2e4." \uba85\uc2dc\ud574\uc57c \ud568')))))),Object(r.b)("h2",{id:"equals-\uc640-compareto"},"equals \uc640 compareTo"),Object(r.b)("h3",{id:"equals"},"equals"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uac1d\uccb4\uc5d0 \ub300\ud574 \uc804\uc5ed \ub3d9\uce58\uad00\uacc4\ub97c \ubd80\uc5ec\ud568"),Object(r.b)("li",{parentName:"ul"},"\ud0c0\uc785 \uce90\uc2a4\ud305 \ud544\uc694")),Object(r.b)("h3",{id:"compareto-1"},"compareTo"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud0c0\uc785\uc774 \ub2e4\ub978 \uac1d\uccb4\ub97c \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub428",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\ud0c0\uc785\uc774 \ub2e4\ub978 \uac1d\uccb4\uac00 \uc8fc\uc5b4\uc9c0\uba74 ClassCastException \uc744 \ub358\uc9c0\uba74 \ub428.")),Object(r.b)("li",{parentName:"ul"},"\uaddc\uc57d\uc5d0\uc11c\ub294 \ub2e4\ub978 \ud0c0\uc785 \ube44\uad50\ub3c4 \ud5c8\uc6a9\ud558\uc9c0\ub9cc,",Object(r.b)("br",{parentName:"li"}),"\ubcf4\ud1b5 \ube44\uad50\ud560 \uac1d\uccb4\ub4e4\uc774 \uad6c\ud604\ud55c \uacf5\ud1b5 \uc778\ud130\ud398\uc774\uc2a4(Collections, Set, Map)\ub97c \ub9e4\uac1c\ub85c \uc774\ub904\uc9c4\ub2e4."))),Object(r.b)("li",{parentName:"ul"},"hashCode \uaddc\uc57d\uc744 \uc9c0\ud0a4\uc9c0 \ubabb\ud558\uba74 \ud574\uc2dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ud074\ub798\uc2a4\uc640 \uc5b4\uc6b8\ub9ac\uc9c0 \ubabb\ud558\ub4ef, ",Object(r.b)("strong",{parentName:"li"},"compareTo \uaddc\uc57d\uc744 \uc9c0\ud0a4\uc9c0 \ubabb\ud558\uba74 \ube44\uad50\ub97c \ud65c\uc6a9\ud558\ub294 \ud074\ub798\uc2a4\uc640 \uc5b4\uc6b8\ub9ac\uc9c0 \ubabb\ud55c\ub2e4."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ube44\uad50\ub97c \ud65c\uc6a9\ud558\ub294 \ud074\ub798\uc2a4 ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc815\ub82c\ub41c \uceec\ub809\uc158 TreeSet, TreeMap"),Object(r.b)("li",{parentName:"ul"},"\uac80\uc0c9\uacfc \uc815\ub82c\uc54c\uace0\ub9ac\uc998\uc744 \ud65c\uc6a9\ud558\ub294 Collections, Arrays"))),Object(r.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uceec\ub809\uc158\uc774 \uad6c\ud604\ud55c \uc778\ud130\ud398\uc774\uc2a4(Collections, Set, Map..) \uc5d0 \uc815\uc758\ub41c \ub3d9\uc791\uacfc \uc5b4\uc6b8\ub9ac\uc9c0 \ubabb\ud568.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub4e4\uc740 equals \uba54\uc11c\ub4dc\uc758 \uaddc\uc57d\uc744 \ub530\ub978\ub2e4\uace0 \ub418\uc5b4 \uc788\uc9c0\ub9cc, \ub3d9\uce58\uc131\uc744 \ube44\uad50\ud560 \ub54c compareTo \ub97c \uc0ac\uc6a9\ud568")))))),Object(r.b)("p",null,"compareTo \uc640 equals \uac00 \uc77c\uad00\ub418\uc9c0 \uc54a\ub294 BigDecimal \ud074\ub798\uc2a4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HashSet \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud55c \ub2e4\uc74c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'new BigDecimal("1.0")'),", ",Object(r.b)("inlineCode",{parentName:"li"},'new BigDecimal("1.00")')," \uc744 \ucd94\uac00\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"equals \uba54\uc11c\ub4dc\ub85c \ube44\uad50\ud558\uba74 \uc11c\ub85c \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 hashSet \uc740 \uc6d0\uc18c\ub97c 2\uac1c \uac16\ub294\ub2e4."))),Object(r.b)("li",{parentName:"ul"},"TreeSet \uc778\uc2a4\ud134\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc6d0\uc18c 1\uac1c \ub9cc \uac16\ub294\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"compareTo \uba54\uc11c\ub4dc\ub85c \ube44\uad50\ud558\uba74 \ub450 bigDecimal \uc778\uc2a4\ud134\uc2a4\uac00 \uac19\ub2e4.")))),Object(r.b)("h2",{id:"comparable-\uc744-\uad6c\ud604\ud55c-\ud074\ub798\uc2a4\ub97c-\ud655\uc7a5\ud574-\uac12\uc744-\ucd94\uac00\ud558\ub294-\ubc29\ubc95"},"Comparable \uc744 \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud574 \uac12\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud655\uc7a5(\uc0c1\uc18d)\ud558\uc5ec \uac12\uc744 \ucd94\uac00\ud560 \ub54c compareTo \uaddc\uc57d\uc744 \uc9c0\ud0ac \ubc29\ubc95\uc774 \uc5c6\ub2e4.      "),Object(r.b)("li",{parentName:"ul"},"\ucef4\ud3ec\uc9c0\uc158\uc744 \uc0ac\uc6a9\ud558\uc790")),Object(r.b)("h2",{id:"compareto-\uba54\uc11c\ub4dc-\uc791\uc131-\uc694\ub839"},"compareTo \uba54\uc11c\ub4dc \uc791\uc131 \uc694\ub839"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/java/effective-java/ch3/ITEM10.html#equals-%EB%A9%94%EC%84%9C%EB%93%9C-%EA%B5%AC%ED%98%84-%EB%B0%A9%EB%B2%95"},"equals \uc640 \ube44\uc2b7\ud568")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"==")," \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud574 \uc785\ub825\uc774 \uc790\uae30 \uc790\uc2e0\uc758 \ucc38\uc870\uc778\uc9c0 \ud655\uc778\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"instanceof")," \uc5f0\uc0b0\uc790\ub85c \uc785\ub825\uc774 \uc62c\ubc14\ub978 \ud0c0\uc785\uc778\uc9c0 \ud655\uc778\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\uc785\ub825\uc744 \uc62c\ubc14\ub978 \ud0c0\uc785\uc73c\ub85c ",Object(r.b)("em",{parentName:"li"},"\ud615\ubcc0\ud658"),"\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ol"},"\uc785\ub825 \uac1d\uccb4\uc640 \uc790\uae30 \uc790\uc2e0\uc758 \ub300\uc751\ub418\ub294 \ud575\uc2ec \ud544\ub4dc\ub4e4\uc774 \ubaa8\ub450 \uc77c\uce58\ud558\ub294\uc9c0 \ud558\ub098\uc529 \uac80\uc0ac\ud55c\ub2e4.")),Object(r.b)("h3",{id:"equals\uc640-\ucc28\uc774\uc810"},"equals\uc640 \ucc28\uc774\uc810"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Comparable \uc740 \ud0c0\uc785\uc744 \uc778\uc218\ub85c \ubc1b\ub294 ",Object(r.b)("strong",{parentName:"li"},"\uc81c\ub124\ub9ad \uc778\ud130\ud398\uc774\uc2a4"),"      ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"compareTo \uba54\uc11c\ub4dc\uc758 \uc778\uc218 \ud0c0\uc785\uc740 ",Object(r.b)("em",{parentName:"li"},"\ucef4\ud30c\uc77c \ud0c0\uc784"),"\uc5d0 \uc815\ud574\uc9d0"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"\uc785\ub825 \uc778\uc218\ud0c0\uc785\uc744 \ud655\uc778\ud558\uac70\ub098 \ud615\ubcc0\ud658 \ud560 \ud544\uc694\uac00 \uc5c6\ub2e4.")))),Object(r.b)("li",{parentName:"ul"},"null \uc744 \uc778\uc218\ub85c \ub123\uc5b4 \ud638\ucd9c\ud558\uba74 NullPointerException \uc744 \ub358\uc838\uc57c \ud55c\ub2e4.")),Object(r.b)("h3",{id:"\uac1d\uccb4-compareto-\uc758-\ube44\uad50"},"\uac1d\uccb4 compareTo \uc758 \ube44\uad50"),Object(r.b)("p",null,"compareTo \ub294 \uac01 \ud544\ub4dc\uc758 \ub3d9\uce58\ub97c \ube44\uad50\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, ",Object(r.b)("em",{parentName:"p"},"\uc21c\uc11c\ub97c \ube44\uad50\ud568")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uac1d\uccb4\ucc38\uc870 \ud544\ub4dc\ub97c \ube44\uad50\ud558\ub824\uba74 \u2192 compareTo \uba54\uc11c\ub4dc\ub97c \uc7ac\uadc0\uc801\uc73c\ub85c \ud638\ucd9c\ud568"),Object(r.b)("li",{parentName:"ul"},"Comparator \ube44\uad50\uc790\uc758 \uc0ac\uc6a9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Comparable \uc744 \uad6c\ud604\ud558\uc9c0 \uc54a\uc740 \ud544\ub4dc"),Object(r.b)("li",{parentName:"ul"},"\ud45c\uc900\uc774 \uc544\ub2cc \uc21c\uc11c\ub85c \ube44\uad50\ud574\uc57c \ud560 \ub54c"),Object(r.b)("li",{parentName:"ul"},"\ube44\uad50\uc790\ub294 \uc9c1\uc811 \ub9cc\ub4e4\uac70\ub098 \uc790\ubc14\uac00 \uc81c\uacf5\ud558\ub294 \uac83 \uc911\uc5d0 \uace0\ub974\uba74 \ub41c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ub2e4\uc74c \ucf54\ub4dc\ub294 \uc790\ubc14\uac00 \uc81c\uacf5\ud558\ub294 \ube44\uad50\uc790\ub97c \uc0ac\uc6a9\ud558\uc600\uc74c",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"public final class CaseInsensitiveString \n  implements Comparable<CaseInsensitiveString> {\n    public int compareTo(CaseInsensitiveString cis) {\n        return String.CASE_INSENSITIVE_ORDER.compare(s, cis.s);\n    }\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"implements Comparable<CaseInsensitiveString>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"CaseInsensitiveString \uc758 \ucc38\uc870\ub294, CaseInsensitiveString \ucc38\uc870\uc640\ub9cc \ube44\uad50\ud560 \uc218 \uc788\ub2e4")))))),Object(r.b)("h3",{id:"\uae30\ubcf8-\ud0c0\uc785\uc758-\ube44\uad50"},"\uae30\ubcf8 \ud0c0\uc785\uc758 \ube44\uad50"),Object(r.b)("p",null,"\uc790\ubc147 \uc774\ud6c4\uc758, \ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785 \ud074\ub798\uc2a4\ub4e4\uc5d0 \ucd94\uac00\ub41c \uc815\uc801 \uba54\uc11c\ub4dc compare \uc0ac\uc6a9"),Object(r.b)("h3",{id:"\ube44\uad50-\uc21c\uc11c"},"\ube44\uad50 \uc21c\uc11c"),Object(r.b)("p",null,"\ud074\ub798\uc2a4\uc5d0 \ud575\uc2ec\ud544\ub4dc\uac00 \uc5ec\ub7ec\uac1c\ub77c\uba74 \ube44\uad50 \uc21c\uc11c\uac00 \uc911\uc694\ud558\ub2e4"),Object(r.b)("h4",{id:"1-\uac00\uc7a5-\ud575\uc2ec\uc801\uc778-\ud544\ub4dc\ubd80\ud130-\ube44\uad50"},"1. \uac00\uc7a5 \ud575\uc2ec\uc801\uc778 \ud544\ub4dc\ubd80\ud130 \ube44\uad50"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ube44\uad50 \uacb0\uacfc\uac00 0 \uc774 \uc544\ub2c8\ub77c\uba74, (\uc21c\uc11c\uac00 \uacb0\uc815\ub418\uba74) \uacb0\uacfc\ub97c \ubc14\ub85c \ubc18\ud658\ud574\uc57c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ud575\uc2ec \ud544\ub4dc\uac00 \ub611\uac19\ub2e4\uba74(0), \ub611\uac19\uc9c0 \uc54a\uc740 \ud544\ub4dc\ub97c \ucc3e\uc744 \ub54c \uae4c\uc9c0 \uadf8 \ub2e4\uc74c\uc73c\ub85c \uc911\uc694\ud55c \ud544\ub4dc\ub97c \ube44\uad50\ud55c\ub2e4.\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public int compareTo(PhoneNumber pn) {\n    int result = Short.compare(areaCode, pn.areaCode);\n    if (result == 0) {\n        result = Short.compare(prefix. pn.prefix);\n        if (result == 0)\n            result = Short.compare(lineNum, pn.lineNum);\n    }\n    return result;\n}\n")),Object(r.b)("h3",{id:"\ube44\uad50\uc790-\uc0dd\uc131-\uba54\uc11c\ub4dc\ub97c-\ud65c\uc6a9\ud55c-\ube44\uad50\uc790"},"\ube44\uad50\uc790 \uc0dd\uc131 \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud55c \ube44\uad50\uc790"),Object(r.b)("p",null,"\uc790\ubc148 \uc5d0\uc11c, Comparator \uc778\ud130\ud398\uc774\uc2a4\uac00 \ube44\uad50\uc790 \uc0dd\uc131 \uba54\uc11c\ub4dc comparator constructor method\n\uc640 \uba54\uc11c\ub4dc \uc5f0\uc1c4\ubc29\uc2dd\uc73c\ub85c \ube44\uad50\uc790\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"private static final Comparator<PhoneNumber> COMPARATOR = \n    comparingInt((PhoneNumber pn) -> pn.areaCode)\n        .thenComparingInt(pn -> pn.prefix)\n        .thenComparingInt(pn -> pn.lineNum);\n\npublic int compareTo(PhoneNumber pn) {\n    return COMPARATOR.compare(this, pn);\n}\n")),Object(r.b)("h4",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc57d\uac04\uc758 \uc131\ub2a5\uc800\ud558"),Object(r.b)("li",{parentName:"ul"},"\uc815\uc801 \ube44\uad50\uc790 \uc0dd\uc131 \uba54\uc11c\ub4dc\ub4e4\uc744 \uc774\ub984\uc73c\ub85c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4 \ucf54\ub4dc\uac00 \uae54\ub054\ud574\uc9d0")),Object(r.b)("h4",{id:"\uc815\uc801-compare-\uba54\uc11c\ub4dc\ub97c-\ud65c\uc6a9\ud55c-\ube44\uad50\uc790"},"\uc815\uc801 compare \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud55c \ube44\uad50\uc790"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"static Comparator<Object> hashCodeOrder = new Comparator<>() {\n    public int compare(Object o1, Object o2) {\n        return Integer.compare(o1.hasCode(), o2.hashCode());\n    }\n}\n")),Object(r.b)("h4",{id:"\ube44\uad50\uc790-\uc0dd\uc131-\uba54\uc11c\ub4dc\ub97c-\ud65c\uc6a9\ud55c-\ube44\uad50\uc790-1"},"\ube44\uad50\uc790 \uc0dd\uc131 \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud55c \ube44\uad50\uc790"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"static Comparator<Object> hashCodeOrder = \n    Comparator.comparingInt(o -> o.hashCode());\n")),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/3%EC%9E%A5/14_Comparable%EC%9D%84_%EA%B5%AC%ED%98%84%ED%95%A0%EC%A7%80_%EA%B3%A0%EB%A0%A4%ED%95%98%EB%9D%BC_%EC%9D%B4%EC%A3%BC%ED%98%84.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/3%EC%9E%A5/14_Comparable%EC%9D%84_%EA%B5%AC%ED%98%84%ED%95%A0%EC%A7%80_%EA%B3%A0%EB%A0%A4%ED%95%98%EB%9D%BC_%EC%9D%B4%EC%A3%BC%ED%98%84.md"))))}o.isMDXComponent=!0},454:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return O}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},m=function(e){var a=p(e.components);return r.a.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(t),j=n,O=m["".concat(l,".").concat(j)]||m[j]||u[j]||c;return t?r.a.createElement(O,b(b({ref:a},o),{},{components:t})):r.a.createElement(O,b({ref:a},o))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=j;var b={};for(var i in a)hasOwnProperty.call(a,i)&&(b[i]=a[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<c;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);