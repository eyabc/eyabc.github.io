(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(441)),i={title:"18. \uc0c1\uc18d\ubcf4\ub2e4\ub294 \ucef4\ud3ec\uc9c0\uc158\uc744 \uc0ac\uc6a9\ud558\ub77c"},c={unversionedId:"java/effective-java/ch4/ITEM18",id:"java/effective-java/ch4/ITEM18",isDocsHomePage:!1,title:"18. \uc0c1\uc18d\ubcf4\ub2e4\ub294 \ucef4\ud3ec\uc9c0\uc158\uc744 \uc0ac\uc6a9\ud558\ub77c",description:"\uc774\ubc88 \uc7a5\uc5d0\uc11c \ub17c\ud558\ub294 \ubb38\uc81c\ub294, \uc778\ud130\ud398\uc774\uc2a4 \uc0c1\uc18d\uacfc\ub294 \ubb34\uad00\ud558\ub2e4.",source:"@site/docs/java/effective-java/ch4/ITEM18.md",slug:"/java/effective-java/ch4/ITEM18",permalink:"/docs/java/effective-java/ch4/ITEM18",version:"current",sidebar:"effectiveJava",previous:{title:"17. \ubcc0\uacbd \uac00\ub2a5\uc131\uc744 \ucd5c\uc18c\ud654\ud558\ub77c",permalink:"/docs/java/effective-java/ch4/ITEM17"},next:{title:"19. \uc0c1\uc18d\uc744 \uace0\ub824\ud574 \uc124\uacc4\ud558\uace0 \ubb38\uc11c\ud654 \ud558\ub77c, \uadf8\ub7ec\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc0c1\uc18d\uc744 \uae08\uc9c0\ud558\ub77c",permalink:"/docs/java/effective-java/ch4/ITEM19"}},b=[{value:"\ubd88\uc548\uc804\ud55c \uc0c1\uc18d",id:"\ubd88\uc548\uc804\ud55c-\uc0c1\uc18d",children:[]},{value:"\uc548\uc804\ud55c \uc0c1\uc18d",id:"\uc548\uc804\ud55c-\uc0c1\uc18d",children:[]},{value:"\ubd88\uc548\uc804\ud55c \uc0c1\uc18d\uc758 \ubb38\uc81c\uc810",id:"\ubd88\uc548\uc804\ud55c-\uc0c1\uc18d\uc758-\ubb38\uc81c\uc810",children:[{value:"\uba54\uc11c\ub4dc \ud638\ucd9c\uacfc \ub2ec\ub9ac \uc0c1\uc18d\uc740 \ucea1\uc290\ud654\ub97c \uae68\ub728\ub9b0\ub2e4.",id:"\uba54\uc11c\ub4dc-\ud638\ucd9c\uacfc-\ub2ec\ub9ac-\uc0c1\uc18d\uc740-\ucea1\uc290\ud654\ub97c-\uae68\ub728\ub9b0\ub2e4",children:[]},{value:"\uc0c1\uc18d\uc744 \uc798\ubabb \uc0ac\uc6a9\ud55c \uc608",id:"\uc0c1\uc18d\uc744-\uc798\ubabb-\uc0ac\uc6a9\ud55c-\uc608",children:[]}]},{value:"\ub798\ud37c \ud074\ub798\uc2a4 - \uc0c1\uc18d \ub300\uc2e0 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc6a9",id:"\ub798\ud37c-\ud074\ub798\uc2a4---\uc0c1\uc18d-\ub300\uc2e0-\ucef4\ud3ec\uc9c0\uc158-\uc0ac\uc6a9",children:[{value:"\ucef4\ud3ec\uc9c0\uc158 Composition; \uad6c\uc131",id:"\ucef4\ud3ec\uc9c0\uc158-composition-\uad6c\uc131",children:[]},{value:"\uc804\ub2ec forwarding",id:"\uc804\ub2ec-forwarding",children:[]},{value:"\uc804\ub2ec \uba54\uc11c\ub4dc forwarding method",id:"\uc804\ub2ec-\uba54\uc11c\ub4dc-forwarding-method",children:[]},{value:"\ub798\ud37c \ud074\ub798\uc2a4",id:"\ub798\ud37c-\ud074\ub798\uc2a4",children:[]},{value:"\ub370\ucf54\ub808\uc774\ud130 \ud328\ud134",id:"\ub370\ucf54\ub808\uc774\ud130-\ud328\ud134",children:[]},{value:"\ucef4\ud3ec\uc9c0\uc158 + \uc804\ub2ec \u2192 \uc704\uc784 delegation",id:"\ucef4\ud3ec\uc9c0\uc158--\uc804\ub2ec-\u2192-\uc704\uc784-delegation",children:[]},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",children:[]},{value:"\ub798\ud37c \ud074\ub798\uc2a4 - \uc0c1\uc18d\ub300\uc2e0 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc6a9",id:"\ub798\ud37c-\ud074\ub798\uc2a4---\uc0c1\uc18d\ub300\uc2e0-\ucef4\ud3ec\uc9c0\uc158-\uc0ac\uc6a9",children:[]},{value:"\uc7ac\uc0ac\uc6a9 \ud560 \uc218 \uc788\ub294 \uc804\ub2ec \ud074\ub798\uc2a4",id:"\uc7ac\uc0ac\uc6a9-\ud560-\uc218-\uc788\ub294-\uc804\ub2ec-\ud074\ub798\uc2a4",children:[]},{value:"\ub798\ud37c \ud074\ub798\uc2a4\ub294 \ucf5c\ubc31 \ud504\ub808\uc784\uc6cc\ud06c\uc640\ub294 \uc5b4\uc6b8\ub9ac\uc9c0 \uc54a\ub294\ub2e4.",id:"\ub798\ud37c-\ud074\ub798\uc2a4\ub294-\ucf5c\ubc31-\ud504\ub808\uc784\uc6cc\ud06c\uc640\ub294-\uc5b4\uc6b8\ub9ac\uc9c0-\uc54a\ub294\ub2e4",children:[]}]},{value:"\uc0c1\uc18d\uc744 \uc368\uc57c \ud558\ub294 \uc0c1\ud669",id:"\uc0c1\uc18d\uc744-\uc368\uc57c-\ud558\ub294-\uc0c1\ud669",children:[{value:"\uc704\ubc18\ud55c \ud074\ub798\uc2a4",id:"\uc704\ubc18\ud55c-\ud074\ub798\uc2a4",children:[]},{value:"\ucef4\ud3ec\uc9c0\uc158 \ub300\uc2e0 \uc0c1\uc18d\uc744 \uc0ac\uc6a9\ud558\uae30\ub85c \uacb0\uc815\ud558\uae30 \uc804 \ub9c8\uc9c0\ub9c9 \uc790\ubb38",id:"\ucef4\ud3ec\uc9c0\uc158-\ub300\uc2e0-\uc0c1\uc18d\uc744-\uc0ac\uc6a9\ud558\uae30\ub85c-\uacb0\uc815\ud558\uae30-\uc804-\ub9c8\uc9c0\ub9c9-\uc790\ubb38",children:[]}]}],u={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"\uc774\ubc88 \uc7a5\uc5d0\uc11c \ub17c\ud558\ub294 \ubb38\uc81c\ub294, \uc778\ud130\ud398\uc774\uc2a4 \uc0c1\uc18d\uacfc\ub294 \ubb34\uad00\ud558\ub2e4."))),Object(l.b)("h2",{id:"\ubd88\uc548\uc804\ud55c-\uc0c1\uc18d"},"\ubd88\uc548\uc804\ud55c \uc0c1\uc18d"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud56d\uc0c1 \uc7ac\uc0ac\uc6a9\uc758 \ucd5c\uc120\uc740 \uc544\ub2c8\ub2e4 \u2192 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc6a9!"),Object(l.b)("li",{parentName:"ul"},"\uc624\ub958\ub97c \ub0b4\uae30 \uc26c\uc6b4 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ub9cc\ub4e4\uac8c \ub41c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ub2e4\ub978 \ud328\ud0a4\uc9c0\uc758 \uad6c\uccb4 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ud558\ub294 \uc77c\uc740 \uc704\ud5d8\ud558\ub2e4.")),Object(l.b)("h2",{id:"\uc548\uc804\ud55c-\uc0c1\uc18d"},"\uc548\uc804\ud55c \uc0c1\uc18d"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \uc7ac\uc0ac\uc6a9\ud558\ub294 \uac15\ub825\ud55c \uc218\ub2e8\uc774\ub2e4"),Object(l.b)("li",{parentName:"ul"},"\uc0c1\uc704 \ud074\ub798\uc2a4\uc640 \ud558\uc704 \ud074\ub798\uc2a4\ub97c \ubaa8\ub450 \uac19\uc740 \ud504\ub85c\uadf8\ub798\uba38\uac00 \ud1b5\uc81c\ud558\ub294, \ud328\ud0a4\uc9c0 \uc548\uc5d0\uc11c\ub77c\uba74 \uc548\uc804\ud55c \ubc29\ubc95\uc774\ub2e4"),Object(l.b)("li",{parentName:"ul"},"\ud655\uc7a5 \ubaa9\uc801\uc73c\ub85c \uc124\uacc4 + \ubb38\uc11c\ud654\ub3c4 \uc798\ub41c \ud074\ub798\uc2a4")),Object(l.b)("h2",{id:"\ubd88\uc548\uc804\ud55c-\uc0c1\uc18d\uc758-\ubb38\uc81c\uc810"},"\ubd88\uc548\uc804\ud55c \uc0c1\uc18d\uc758 \ubb38\uc81c\uc810"),Object(l.b)("h3",{id:"\uba54\uc11c\ub4dc-\ud638\ucd9c\uacfc-\ub2ec\ub9ac-\uc0c1\uc18d\uc740-\ucea1\uc290\ud654\ub97c-\uae68\ub728\ub9b0\ub2e4"},"\uba54\uc11c\ub4dc \ud638\ucd9c\uacfc \ub2ec\ub9ac \uc0c1\uc18d\uc740 \ucea1\uc290\ud654\ub97c \uae68\ub728\ub9b0\ub2e4."),Object(l.b)("p",null,"\uc0c1\uc704\ud074\ub798\uc2a4\uc758 \uad6c\ud604 \u2192 \ud558\uc704 \ud074\ub798\uc2a4\uc758 \ub3d9\uc791\uc5d0 \uc601\ud5a5"),Object(l.b)("p",null,"\uc0c1\uc704\ud074\ub798\uc2a4\uc758 \ubcc0\ud654"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ub9b4\ub9ac\uc2a4\uc5d0 \ub530\ub77c \ub0b4\ubd80\uad6c\ud604\uc774 \ub2ec\ub77c\uc9c8\uc218 \uc788\uc74c "),Object(l.b)("li",{parentName:"ul"},"\ud558\uc704\ud074\ub798\uc2a4\ub294 \uc0c1\uc704\ud074\ub798\uc2a4\uc5d0 \ub9de\ucdb0 \uc218\uc815\ub418\uc5b4\uc57c\ud568.")),Object(l.b)("h3",{id:"\uc0c1\uc18d\uc744-\uc798\ubabb-\uc0ac\uc6a9\ud55c-\uc608"},"\uc0c1\uc18d\uc744 \uc798\ubabb \uc0ac\uc6a9\ud55c \uc608"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"InstrumentedHashSet<E>")," \ud074\ub798\uc2a4\ub294 ",Object(l.b)("inlineCode",{parentName:"li"},"HasSet<E>")," \ub97c \ud655\uc7a5\ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"HashSet \uc758 \uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud574 \ucc98\uc74c \uc0dd\uc131 \uc774\ud6c4 \uc6d0\uc18c\uac00 \uba87\uac1c \ub354\ud574\uc84c\ub294\uc9c0 (\uc99d\uac00\ub9cc \ud558\ub294 \uc218) \uc54c\uc218 \uc788\uc5b4\uc57c\ud568"),Object(l.b)("li",{parentName:"ul"},"add, addAll \uc744 \uc7ac\uc815\uc758 \ud558\uc600\ub2e4.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"public class InstrumentedHashSet<E> extends HashSet<E> {\n    private int addCount = 0;\n    \n    public InstrumentedHashSet() { }\n    public InstrumentedHashSet(int initCap, float loadFactor) {\n        super(initCap, loadFactor);\n    }   \n\n    @Override public boolean add(E e) {\n        addCount++;\n        return super.add(e);\n    }\n\n    @Override public boolean addAll(Collection<? extends E> c) {\n        addCount += c.size();\n        return super.addAll(c);\n    }\n    \n    public int getAddCount() {\n        return addCount;\n    }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'InstrumentedHashSet<String> s = new InstrumentedHashSet<>();\ns.addAll(List.of("\ud2f1", "\ud0c1\ud0c1", "\ud391"));\ns.getAddCount();    // 6\uc744 \ubc18\ud658\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HashSet \uc758 addAll \uba54\uc11c\ub4dc\uac00 add \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uad6c\ud604\ub428 \u2192 6 \ucd9c\ub825"),Object(l.b)("li",{parentName:"ul"},"\uc774\ub7f0 \ub0b4\ubd80\uad6c\ud604\ubc29\uc2dd\uc740 HashSet \ubb38\uc11c\uc5d0 \uc4f0\uc5ec\uc788\uc9c0 \uc54a\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc790\uae30 \uc0ac\uc6a9 self-use \uc5ec\ubd80\ub294 \ud574\ub2f9 \ud074\ub798\uc2a4\uc758 \ub0b4\ubd80 \uad6c\ud604 \ubc29\uc2dd\uc774\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\ub0b4\ubd80 \uad6c\ud604 \ubc29\uc2dd\uc740 \ub2e4\uc74c \ub9b4\ub9ac\uc2a4\uc5d0\uc11c\ub3c4 \uc720\uc9c0\ub420 \uc9c0 \uc54c \uc218 \uc5c6\ub2e4. ")),Object(l.b)("p",null,"\ubb38\uc81c\ud574\uacb0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"addAll \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758 \ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758 \ud558\ub294 \ub300\uc2e0, \uc0c8\ub85c\uc6b4 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud558\ub294 \uc77c\ub3c4 \uc704\ud5d8\ud560 \uc218 \uc788\ub2e4.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ub2e4\uc74c \ub9b4\ub9ac\uc2a4\uc5d0\uc11c \uc0c1\uc704\ud074\ub798\uc2a4\uc5d0 \uc0c8 \uba54\uc11c\ub4dc\uac00 \ucd94\uac00 \ub420 \ub54c,"),Object(l.b)("li",{parentName:"ul"},"\ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c \uc815\uc758\ud55c \uba54\uc11c\ub4dc\uc640 \uc2dc\uadf8\ub2c8\ucc98\uac00 \ub3d9\uc77c\ud558\uace0, \ubc18\ud658\uac12\uc774 \ub2e4\ub978 \uba54\uc11c\ub4dc\ub97c \uc815\uc758\ud560 \uc218 \uc788\ub2e4. ")))),Object(l.b)("h2",{id:"\ub798\ud37c-\ud074\ub798\uc2a4---\uc0c1\uc18d-\ub300\uc2e0-\ucef4\ud3ec\uc9c0\uc158-\uc0ac\uc6a9"},"\ub798\ud37c \ud074\ub798\uc2a4 - \uc0c1\uc18d \ub300\uc2e0 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc6a9"),Object(l.b)("h3",{id:"\ucef4\ud3ec\uc9c0\uc158-composition-\uad6c\uc131"},"\ucef4\ud3ec\uc9c0\uc158 Composition; \uad6c\uc131"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uae30\uc874 \ud074\ub798\uc2a4\uac00 \uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\uc758 \uad6c\uc131\uc694\uc18c\ub85c \uc4f0\uc778\ub2e4\ub294 \uc758\ubbf8"),Object(l.b)("li",{parentName:"ul"},"\uae30\uc874 \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\ub294 \ub300\uc2e0, "),Object(l.b)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uace0 private \ud544\ub4dc\ub85c \uae30\uc874 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ucc38\uc870\ud558\uac8c \ud55c\ub2e4.")),Object(l.b)("h3",{id:"\uc804\ub2ec-forwarding"},"\uc804\ub2ec forwarding"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\uc0c8 \ud074\ub798\uc2a4\uc758 \uba54\uc11c\ub4dc"),"\ub4e4\uc740 \uae30\uc874 \ud074\ub798\uc2a4\uc758 \ub300\uc751\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574 \uadf8 \uacb0\uacfc\ub97c \ubc18\ud658\ud568."),Object(l.b)("h3",{id:"\uc804\ub2ec-\uba54\uc11c\ub4dc-forwarding-method"},"\uc804\ub2ec \uba54\uc11c\ub4dc forwarding method"),Object(l.b)("p",null,"\uc0c8 \ud074\ub798\uc2a4\uc758 \uba54\uc11c\ub4dc\ub4e4"),Object(l.b)("h3",{id:"\ub798\ud37c-\ud074\ub798\uc2a4"},Object(l.b)("a",{parentName:"h3",href:"https://coding-factory.tistory.com/547"},"\ub798\ud37c \ud074\ub798\uc2a4")),Object(l.b)("p",null,"\uae30\ubcf8 \uc790\ub8cc\ud0c0\uc785(primitive type)\uc744 \uac1d\uccb4\ub85c \ub2e4\ub8e8\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \ud074\ub798\uc2a4"),Object(l.b)("h3",{id:"\ub370\ucf54\ub808\uc774\ud130-\ud328\ud134"},Object(l.b)("a",{parentName:"h3",href:"http://www.w3big.com/ko/design-pattern/decorator-pattern.html"},"\ub370\ucf54\ub808\uc774\ud130 \ud328\ud134")),Object(l.b)("p",null,"\uad6c\uc870\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\uace0 \uae30\uc874 \uac1c\uccb4\uc5d0 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \ucd94\uac00 \ud560 \uc218 \uc788\uc74c \u2192 \ub798\ud37c \ud074\ub798\uc2a4"),Object(l.b)("h3",{id:"\ucef4\ud3ec\uc9c0\uc158--\uc804\ub2ec-\u2192-\uc704\uc784-delegation"},"\ucef4\ud3ec\uc9c0\uc158 + \uc804\ub2ec \u2192 \uc704\uc784 delegation"),Object(l.b)("p",null,"\ub798\ud37c \uac1d\uccb4\uac00 \ub0b4\ubd80 \uac1d\uccb4\uc5d0 \uc790\uc2e0\uc758 \ucc38\uc870\ub97c \ub118\uae30\ub294 \uacbd\uc6b0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"class In {\n    private final int in = 0;\n    \n    public int add(int num) { return num + 1; }\n}\nclass Wrapper {\n    private final In in = new In(); // \ub0b4\ubd80 \uac1d\uccb4\n    private final int num = 1;\n    private int call() {    // \uc804\ub2ec \uba54\uc11c\ub4dc\n        in.add(num);        // \uc804\ub2ec\n    }\n}\n")),Object(l.b)("h3",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\ub294 \uae30\uc874 \ud074\ub798\uc2a4\uc758 \ub0b4\ubd80 \uad6c\ud604\ubc29\uc2dd\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\ub294\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc804\ub2ec\uba54\uc11c\ub4dc\uc758 \uc131\ub2a5\uc5d0 \uc8fc\ub294 \uc601\ud5a5/ \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc740 \ubcc4\ub2e4\ub978 \uc601\ud5a5\uc774 \uc5c6\ub2e4.")),Object(l.b)("h3",{id:"\ub798\ud37c-\ud074\ub798\uc2a4---\uc0c1\uc18d\ub300\uc2e0-\ucef4\ud3ec\uc9c0\uc158-\uc0ac\uc6a9"},"\ub798\ud37c \ud074\ub798\uc2a4 - \uc0c1\uc18d\ub300\uc2e0 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc6a9"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"public class InstrumentSet<E> extends ForwardingSet<E> {\n    private int addCount = 0;\n    \n    public InstrumentSet(Set<E> s) {\n        super(s);\n    }\n    @Override public boolean add(E e) {\n        addCount++;\n        return super.add(e);\n    }\n    @Override public boolean addAll(Collection<? extends E> c) {\n        addCount += c.size();\n        return super.addAll(c);\n    }\n}\n")),Object(l.b)("h3",{id:"\uc7ac\uc0ac\uc6a9-\ud560-\uc218-\uc788\ub294-\uc804\ub2ec-\ud074\ub798\uc2a4"},"\uc7ac\uc0ac\uc6a9 \ud560 \uc218 \uc788\ub294 \uc804\ub2ec \ud074\ub798\uc2a4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"public class ForwardingSet<E> implements Set<E> {\n    private final Set<E> s;\n    public ForwardingSet(Set<E> s) { this.s = s; }\n    \n    public void clear() { s.clear(); }\n    public boolean contains(Object o) { return s.contains(o); }\n    // ...\n}\n")),Object(l.b)("h3",{id:"\ub798\ud37c-\ud074\ub798\uc2a4\ub294-\ucf5c\ubc31-\ud504\ub808\uc784\uc6cc\ud06c\uc640\ub294-\uc5b4\uc6b8\ub9ac\uc9c0-\uc54a\ub294\ub2e4"},"\ub798\ud37c \ud074\ub798\uc2a4\ub294 \ucf5c\ubc31 \ud504\ub808\uc784\uc6cc\ud06c\uc640\ub294 \uc5b4\uc6b8\ub9ac\uc9c0 \uc54a\ub294\ub2e4."),Object(l.b)("h4",{id:"\ucf5c\ubc31-\ud504\ub808\uc784\uc6cc\ud06c"},"\ucf5c\ubc31 \ud504\ub808\uc784\uc6cc\ud06c"),Object(l.b)("p",null,"\uc790\uc2e0\uc758 \ucc38\uc870\ub97c \ub2e4\ub978 \uac1d\uccb4\uc5d0 \ub118\uaca8\uc11c \ub2e4\uc74c \ud638\ucd9c \ucf5c\ubc31 \ub54c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud55c\ub2e4."),Object(l.b)("h4",{id:"self-\ubb38\uc81c"},"SELF \ubb38\uc81c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ub0b4\ubd80 \uac1d\uccb4\ub294 \uc790\uc2e0\uc744 \uac10\uc2f8\uace0 \uc788\ub294 \ub798\ud37c\uc758 \uc874\uc7ac\ub97c \ubaa8\ub974\ub2c8 \ub300\uc2e0 this (\uc790\uc2e0)\uc758 \ucc38\uc870\ub97c \ub118\uae34\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ucf5c\ubc31 \ub54c\ub294 \ub798\ud37c\uac00 \uc544\ub2cc \ub0b4\ubd80 \uac1d\uccb4\ub97c \ud638\ucd9c\ud558\uac8c \ub41c\ub2e4. ")),Object(l.b)("h2",{id:"\uc0c1\uc18d\uc744-\uc368\uc57c-\ud558\ub294-\uc0c1\ud669"},"\uc0c1\uc18d\uc744 \uc368\uc57c \ud558\ub294 \uc0c1\ud669"),Object(l.b)("p",null,"\ubc18\ub4dc\uc2dc \ud558\uc704 \ud074\ub798\uc2a4\uac00 \uc0c1\uc704 \ud074\ub798\uc2a4\uc758 \uc9c4\uc9dc \ud558\uc704\ud0c0\uc785\uc778 \uc0c1\ud669"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"is-a \uad00\uacc4"),Object(l.b)("li",{parentName:"ul"},"\uc0c1\uc18d \u2192 \ubd84\ub958")),Object(l.b)("h3",{id:"\uc704\ubc18\ud55c-\ud074\ub798\uc2a4"},"\uc704\ubc18\ud55c \ud074\ub798\uc2a4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Stack \uc740 Vector \uac00 \uc544\ub2c8\uc9c0\ub9cc \ud655\uc7a5\ud558\uace0 \uc788\ub2e4"),Object(l.b)("li",{parentName:"ul"},"Properties \ub3c4 HashTable \uc744 \ud655\uc7a5\ud574\uc120 \uc548\ub410\ub2e4.")),Object(l.b)("h3",{id:"\ucef4\ud3ec\uc9c0\uc158-\ub300\uc2e0-\uc0c1\uc18d\uc744-\uc0ac\uc6a9\ud558\uae30\ub85c-\uacb0\uc815\ud558\uae30-\uc804-\ub9c8\uc9c0\ub9c9-\uc790\ubb38"},"\ucef4\ud3ec\uc9c0\uc158 \ub300\uc2e0 \uc0c1\uc18d\uc744 \uc0ac\uc6a9\ud558\uae30\ub85c \uacb0\uc815\ud558\uae30 \uc804 \ub9c8\uc9c0\ub9c9 \uc790\ubb38"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\ud655\uc7a5\ud558\ub824\ub294 \ud074\ub798\uc2a4\uc758 API \uc5d0 \uc544\ubb34\ub7f0 \uacb0\ud568\uc774 \uc5c6\ub294\uac00"),Object(l.b)("li",{parentName:"ol"},"\uacb0\ud568\uc774 \uc6b0\ub9ac\uc758 \ud074\ub798\uc2a4 API \uae4c\uc9c0 \uc804\ud30c\ub418\uc5b4\ub3c4 \ub418\ub294\uac00")))}d.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),o=d(n),s=a,j=o["".concat(i,".").concat(s)]||o[s]||p[s]||l;return n?r.a.createElement(j,c(c({ref:t},u),{},{components:n})):r.a.createElement(j,c({ref:t},u))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);