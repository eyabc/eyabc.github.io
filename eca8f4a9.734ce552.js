(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),l=n(7),c=(n(0),n(166)),r={},b={unversionedId:"java/effective-java/ch5/ITEM29",id:"java/effective-java/ch5/ITEM29",isDocsHomePage:!1,title:"ITEM29",description:"\uc774\uc655\uc774\uba74 \uc81c\ub124\ub9ad \ud0c0\uc785\uc73c\ub85c \ub9cc\ub4e4\ub77c",source:"@site/docs/java/effective-java/ch5/ITEM29.md",slug:"/java/effective-java/ch5/ITEM29",permalink:"/docs/java/effective-java/ch5/ITEM29",version:"current",sidebar:"effectiveJava",previous:{title:"ITEM28",permalink:"/docs/java/effective-java/ch5/ITEM28"},next:{title:"ITEM30",permalink:"/docs/java/effective-java/ch5/ITEM30"}},i=[{value:"Object \uae30\ubc18 \uc2a4\ud0dd\uc744 \uc81c\ub124\ub9ad\uc73c\ub85c \ubcc0\ud658",id:"object-\uae30\ubc18-\uc2a4\ud0dd\uc744-\uc81c\ub124\ub9ad\uc73c\ub85c-\ubcc0\ud658",children:[]},{value:"1. \uc81c\ub124\ub9ad \ubc30\uc5f4 \uc0dd\uc131 \uae08\uc9c0 \uc81c\uc57d\uc744 \uc6b0\ud68c",id:"1-\uc81c\ub124\ub9ad-\ubc30\uc5f4-\uc0dd\uc131-\uae08\uc9c0-\uc81c\uc57d\uc744-\uc6b0\ud68c",children:[]},{value:"2. \ud544\ub4dc \ud0c0\uc785\uc744 E[] \uc5d0\uc11c Object[] \ub85c \ubcc0\uacbd",id:"2-\ud544\ub4dc-\ud0c0\uc785\uc744-e-\uc5d0\uc11c-object-\ub85c-\ubcc0\uacbd",children:[]},{value:"\ube44\uad50",id:"\ube44\uad50",children:[{value:"\uccab\ubc88\uc9f8 \ubc29\uc2dd",id:"\uccab\ubc88\uc9f8-\ubc29\uc2dd",children:[]},{value:"\ub450\ubc88\uc9f8 \ubc29\uc2dd",id:"\ub450\ubc88\uc9f8-\ubc29\uc2dd",children:[]}]},{value:"\uc81c\ub124\ub9ad Stack \uc744 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub7a8",id:"\uc81c\ub124\ub9ad-stack-\uc744-\uc0ac\uc6a9\ud558\ub294-\ud504\ub85c\uadf8\ub7a8",children:[]},{value:"\uc81c\ub124\ub9ad\ud0c0\uc785\uc758 \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218",id:"\uc81c\ub124\ub9ad\ud0c0\uc785\uc758-\ud0c0\uc785-\ub9e4\uac1c\ubcc0\uc218",children:[]},{value:"\ud55c\uc815\uc801 \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218 bound type parameter",id:"\ud55c\uc815\uc801-\ud0c0\uc785-\ub9e4\uac1c\ubcc0\uc218-bound-type-parameter",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\uc774\uc655\uc774\uba74-\uc81c\ub124\ub9ad-\ud0c0\uc785\uc73c\ub85c-\ub9cc\ub4e4\ub77c"},"\uc774\uc655\uc774\uba74 \uc81c\ub124\ub9ad \ud0c0\uc785\uc73c\ub85c \ub9cc\ub4e4\ub77c"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"JDK \uac00 \uc81c\uacf5\ud558\ub294 \uc81c\ub124\ub9ad\ud0c0\uc785/\uba54\uc11c\ub4dc"),"\ub97c \uc0ac\uc6a9\ud558\ub294\uc77c\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc27d\ub2e4."),Object(c.b)("p",null,"\uc81c\ub124\ub9ad\ud0c0\uc785\uc744 \uc0c8\ub85c \ub9cc\ub4dc\ub294 \uc77c\uc740 \uc870\uae08\uc5b4\ub835\uc9c0\ub9cc ",Object(c.b)("em",{parentName:"p"},"\uac12\uc5b4\uce58\ub294 \ucda9\ubd84\ud558\ub2e4")),Object(c.b)("p",null,"\uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc124\uacc4\ud560 \ub54c\ub294 ",Object(c.b)("em",{parentName:"p"},"\ud615\ubcc0\ud658 \uc5c6\uc774\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub77c.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc9c1\uc811 \ud615\ubcc0\ud658\ud574\uc57c \ud558\ub294 \ud0c0\uc785\ubcf4\ub2e4, ",Object(c.b)("em",{parentName:"li"},"\uc81c\ub124\ub9ad\ud0c0\uc785\uc774 \ub354 \uc548\uc804\ud558\uace0 \uc4f0\uae30 \ud3b8\ud558\ub2e4."))),Object(c.b)("p",null,"\uae30\uc874 \ud0c0\uc785 \uc911 \uc81c\ub124\ub9ad\uc774\uc5c8\uc5b4\uc57c \ud558\ub294 \uac83\uc774 \uc788\ub2e4\uba74 \uc81c\ub124\ub9ad\ud0c0\uc785\uc73c\ub85c \ubcc0\uacbd\ud558\uc790.",Object(c.b)("br",{parentName:"p"}),"\n","\uae30\uc874 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\ub294 \uc544\ubb34 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uc73c\uba74\uc11c, \uc0c8\ub85c\uc6b4 \uc0ac\uc6a9\uc790\ub97c \ud6e8\uc52c \ud3b8\ud558\uac8c \ud574\uc8fc\ub294 \uae38\uc774\ub2e4."),Object(c.b)("h2",{id:"object-\uae30\ubc18-\uc2a4\ud0dd\uc744-\uc81c\ub124\ub9ad\uc73c\ub85c-\ubcc0\ud658"},"Object \uae30\ubc18 \uc2a4\ud0dd\uc744 \uc81c\ub124\ub9ad\uc73c\ub85c \ubcc0\ud658"),Object(c.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc2a4\ud0dd\uc5d0\uc11c ",Object(c.b)("em",{parentName:"p"},"\uaebc\ub0b8 \uac1d\uccb4\ub97c \ud615\ubcc0\ud658")," \ud560 \ub54c ",Object(c.b)("strong",{parentName:"p"},"\ub7f0\ud0c0\uc784 \uc624\ub958"),"\uac00 \ub0a0 \uc704\ud5d8\uc774 \uc788\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java{2,7,15,18}"},"public class Stack {\n    private Object[] elements;\n    private int size = 0;\n    private static final int DEFAULT_INITIAL_CAPACITY = 16;\n    \n    public Stack() {\n        elements = new Object[DEFAULT_INITIAL_CAPACITY];\n    }\n\n    public void push(Object e) {\n        ensureCapacity();\n        elements[size++] = e;\n    }\n\n    public Object pop() {\n        if (size == 0)\n            throw new EmptyStackException();\n        Object result = elements[--size];\n        elements[size] = null;\n        return result;\n    }\n\n    // ...    \n}\n")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\ud074\ub798\uc2a4 \uc120\uc5b8\uc5d0 ",Object(c.b)("em",{parentName:"li"},"\ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218"),Object(c.b)("inlineCode",{parentName:"li"},"E"),"\ub97c \ucd94\uac00\ud55c\ub2e4.","[68]"),Object(c.b)("li",{parentName:"ol"},"Object \ub97c \uc801\uc808\ud55c ",Object(c.b)("em",{parentName:"li"},"\ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218")," \ub85c \ubc14\uafb8\uace0 \ucef4\ud30c\uc77c \ud55c\ub2e4.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java{1,2,7,10,15,18}"},"public class Stack<E> {\n    private E[] elements;\n    private int size = 0;\n    private static final int DEFAULT_INITIAL_CAPACITY = 16;\n    \n    public Stack() {\n        elements = new E[DEFAULT_INITIAL_CAPACITY]; // \uc624\ub958 \ubc1c\uc0dd\n    }\n\n    public void push(E e) {\n        ensureCapacity();\n        elements[size++] = e;\n    }\n\n    public E pop() {\n        if (size == 0)\n            throw new EmptyStackException();\n        E result = elements[--size];\n        elements[size] = null;\n        return result;\n    }\n\n    // ...    \n}\n")),Object(c.b)("p",null,"7 \ubc88\uc9f8 \uc904\uc5d0\uc11c \uc624\ub958 \ubc1c\uc0dd "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"E \uc640 \uac19\uc740 \uc2e4\uccb4\ud654 \ubd88\uac00 \ud0c0\uc785 \u2192 \ubc30\uc5f4\uc744 \ub9cc\ub4e4 \uc218 \uc5c6\ub2e4.")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"[28]","\ubc30\uc5f4\ubcf4\ub2e4\ub294 \ub9ac\uc2a4\ud2b8\ub97c \uc6b0\uc120\ud558\ub77c \uc640\ub294 \ubaa8\uc21c\ub3fc \ubcf4\uc778\ub2e4."),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\uc0ac\uc2e4 \uc81c\ub124\ub9ad \ud0c0\uc785\uc548\uc5d0\uc11c \ub9ac\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294\uac8c \ud56d\uc0c1 \uac00\ub2a5\ud558\uc9c0\ub3c4, \uaf2d \ub354 \uc88b\uc740 \uac83\ub3c4 \uc544\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc790\ubc14\uac00 \ub9ac\uc2a4\ud2b8\ub97c \uae30\ubcf8 \ud0c0\uc785\uc73c\ub85c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c ArrayList \uac19\uc740 \uc81c\ub124\ub9ad \ud0c0\uc785\ub3c4 \uacb0\uad6d\uc740 \uae30\ubcf8\ud0c0\uc785\uc778 \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud574 \uad6c\ud604\ud574\uc57c \ud55c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"HashMap \uac19\uc740 \uc81c\ub124\ub9ad \ud0c0\uc785\uc740 \uc131\ub2a5\uc744 \ub192\uc77c \ubaa9\uc801\uc73c\ub85c \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud558\uae30\ub3c4 \ud55c\ub2e4."))),Object(c.b)("h2",{id:"1-\uc81c\ub124\ub9ad-\ubc30\uc5f4-\uc0dd\uc131-\uae08\uc9c0-\uc81c\uc57d\uc744-\uc6b0\ud68c"},"1. \uc81c\ub124\ub9ad \ubc30\uc5f4 \uc0dd\uc131 \uae08\uc9c0 \uc81c\uc57d\uc744 \uc6b0\ud68c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public Stack() {\n    elements = new E[DEFAULT_INITIAL_CAPACITY]; // \uc624\ub958 \ubc1c\uc0dd\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud0c0\uc785 \ubd88\uc548\uc804 \uacbd\uace0")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Stack.java:7: warning: [unchecked] unchecked cast\nfound: Object[], required: E[]\n    elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY]\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ube44\uac80\uc0ac \ud615\ubcc0\ud658\uc774 \ud504\ub85c\uadf8\ub7a8\uc758 \ud0c0\uc785 \uc548\uc804\uc131\uc744 \ud574\uce58\uc9c0 \uc54a\uc74c\uc744 \uc2a4\uc2a4\ub85c \ud655\uc778\ud574\uc57c \ud55c\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"elements \ubc30\uc5f4\uc740 private \ud544\ub4dc\uc5d0 \uc800\uc7a5\ub41c\ub2e4"),Object(c.b)("li",{parentName:"ul"},"elements \ubc30\uc5f4\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \ubc18\ud658\ub418\uac70\ub098 \ub2e4\ub978 \uba54\uc11c\ub4dc\uc5d0 \uc804\ub2ec\ub418\ub294 \uc77c\uc774 \uc804\ud600 \uc5c6\ub2e4."),Object(c.b)("li",{parentName:"ul"},"push \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \ubc30\uc5f4\uc5d0 \uc800\uc7a5\ub418\ub294 \uc6d0\uc18c\uc758 \ud0c0\uc785\uc740 \ud56d\uc0c1 E \ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc548\uc804\ud568\uc774 \uc99d\uba85\ub418\uba74 \ubc94\uc704\ub97c \ucd5c\uc18c\ub85c \uc881\ud600 ",Object(c.b)("inlineCode",{parentName:"li"},"@SuppressWarnings")," \uc560\ub108\ud14c\uc774\uc158\uc73c\ub85c \uacbd\uace0\ub97c \uc228\uae34\ub2e4.")))),Object(c.b)("p",null,"\ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud55c \ucf54\ub4dc\ub97c \uc81c\ub124\ub9ad\uc73c\ub85c \ub9cc\ub4e0\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'@SuppressWarnings("unchecked")\npublic Stack() {\n    elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY];\n}\n')),Object(c.b)("h2",{id:"2-\ud544\ub4dc-\ud0c0\uc785\uc744-e-\uc5d0\uc11c-object-\ub85c-\ubcc0\uacbd"},"2. \ud544\ub4dc \ud0c0\uc785\uc744 E[] \uc5d0\uc11c Object[] \ub85c \ubcc0\uacbd"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"private Object[] elements;\n")),Object(c.b)("p",null,"\ud544\ub4dc \ud0c0\uc785\uc744 E[] \uc5d0\uc11c Object[] \ub85c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud568"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"elements[--size]")," \ub294 Object \ub97c \ubc18\ud658 "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Stack.java:18: incompatible types\n    found: Object, required: E\n    E result = elements[--size];\n")),Object(c.b)("p",null,"\ubc30\uc5f4\uc774 \ubc18\ud658\ud55c \uc6d0\uc18c\ub97c E \ub85c \ud615\ubcc0\ud658 \ud558\uba74 \uc624\ub958 \ub300\uc2e0 \uacbd\uace0\uac00 \ub72c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Stack:java:19: warning: [unchecked] unchecked cast\nfound: Object, requried: E\n      E result = (E) elements[--size];\n")),Object(c.b)("p",null,"\uc2e4\uccb4\ud654 \ubd88\uac00 \ud0c0\uc785 E \ub294"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\ub294 \ub7f0\ud0c0\uc784\uc5d0 \uc774\ub904\uc9c0\ub294 \ud615\ubcc0\ud658\uc774 \uc548\uc804\ud55c\uc9c0 \uc99d\uba85\ud560 \uc218 \uc5c6\ub2e4."),Object(c.b)("li",{parentName:"ul"},"@SuppressWarnings \ub97c \ubd99\uc778\ub2e4.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'public E pop() {\n    if (size == 0)\n        throw new EmptyStackException();\n    \n    @SuppressWarnins("unchecked") \n    E result = (E) elements[--size];\n    \n    elements[size] = null;\n    return result;\n}\n')),Object(c.b)("h2",{id:"\ube44\uad50"},"\ube44\uad50"),Object(c.b)("h3",{id:"\uccab\ubc88\uc9f8-\ubc29\uc2dd"},"\uccab\ubc88\uc9f8 \ubc29\uc2dd"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uac00\ub3c5\uc131\uc774 \ub354 \uc88b\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ubc30\uc5f4\uc758 \ud0c0\uc785\uc744 E[] \ub85c \uc120\uc5b8 \u2192 \uc624\uc9c1 E \ud0c0\uc785 \uc778\uc2a4\ud134\uc2a4\ub9cc \ubc1b\uc74c\uc744 \ud655\uc2e4\ud788 \uc5b4\ud544\ud568",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-java"},"private E[] elements;\n"))),Object(c.b)("li",{parentName:"ul"},"\ub354 \uac04\uacb0\ud55c \ucf54\ub4dc"),Object(c.b)("li",{parentName:"ul"},"\ud615\ubcc0\ud658\uc744 \ubc30\uc5f4 \uc0dd\uc131 \uc2dc \ub2e8 \ud55c\ubc88\ub9cc \ud574\uc900\ub2e4"),Object(c.b)("li",{parentName:"ul"},"\ud604\uc5c5\uc5d0\uc11c \ub354 \uc120\ud638\ud558\ub294 \ubc29\uc2dd\uc774\uc9c0\ub9cc, \ud799 \uc624\uc5fc heap pollution \uc720\ubc1c",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"E \uac00 Object \uac00 \uc544\ub2cc \uacbd\uc6b0, \ubc30\uc5f4\uc758 \ub7f0\ud0c0\uc784 \ud0c0\uc785\uc774 \ucef4\ud30c\uc77c\ud0c0\uc784 \ud0c0\uc785\uacfc \ub2ec\ub77c \ud799\uc624\uc5fc","[32]","\uc744 \uc720\ubc1c")))),Object(c.b)("h3",{id:"\ub450\ubc88\uc9f8-\ubc29\uc2dd"},"\ub450\ubc88\uc9f8 \ubc29\uc2dd"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ubc30\uc5f4\uc5d0\uc11c \uc6d0\uc18c\ub97c \uc77d\uc744 \ub54c \ub9c8\ub2e4 \ud615\ubcc0\ud658 \ubc1c\uc0dd"),Object(c.b)("li",{parentName:"ul"},"\ud799\uc624\uc5fc\uc774 \ub9c8\uc74c\uc5d0 \uac78\ub9ac\ub294 \ud504\ub85c\uadf8\ub798\uba38\ub294 \ub450\ubc88\uc9f8 \ubc29\uc2dd\uc744 \uace0\uc218\ud558\uae30\ub3c4\ud568.")),Object(c.b)("h2",{id:"\uc81c\ub124\ub9ad-stack-\uc744-\uc0ac\uc6a9\ud558\ub294-\ud504\ub85c\uadf8\ub7a8"},"\uc81c\ub124\ub9ad Stack \uc744 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub7a8"),Object(c.b)("p",null,"\uba85\ub839\uc904 \uc778\uc218\ub4e4\uc744 \uc5ed\uc21c\uc73c\ub85c \ubc14\uafd4 \ub300\ubb38\uc790\ub85c \ucd9c\ub825\ud558\ub294 \ud504\ub85c\uadf8\ub7a8"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) {\n    Stack<String> stack = new Stack<>();\n    for (String args: args)\n        stack.push(arg);\n    while (!stack.isEmpty())\n        System.out.println(stack.pop().toUpperCase());\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uba85\uc2dc\uc801 \ud615\ubcc0\ud658\uc744 \uc4f0\uc9c0 \uc54a\uc74c"),Object(c.b)("li",{parentName:"ul"},"\ud615\ubcc0\ud658\uc774 \ud56d\uc0c1 \uc131\uacf5\ud568\uc744 \ubcf4\uc7a5\ud568")),Object(c.b)("h2",{id:"\uc81c\ub124\ub9ad\ud0c0\uc785\uc758-\ud0c0\uc785-\ub9e4\uac1c\ubcc0\uc218"},"\uc81c\ub124\ub9ad\ud0c0\uc785\uc758 \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218"),Object(c.b)("p",null,"\ubaa8\ub4e0 ",Object(c.b)("strong",{parentName:"p"},"\ucc38\uc870 \ud0c0\uc785")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Stack<Object>")," ",Object(c.b)("inlineCode",{parentName:"li"},"Stack<int[]>")," ",Object(c.b)("inlineCode",{parentName:"li"},"Stack<List<String>>"),", ",Object(c.b)("inlineCode",{parentName:"li"},"Stack")," ")),Object(c.b)("p",null,"\uae30\ubcf8 \ud0c0\uc785 \u2192 \ucef4\ud30c\uc77c \uc624\ub958"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"String<int>")," ",Object(c.b)("inlineCode",{parentName:"li"},"Stack<double>")),Object(c.b)("li",{parentName:"ul"},"\uc81c\ub124\ub9ad \ud0c0\uc785 \uc2dc\uc2a4\ud15c\uc758 \uadfc\ubcf8\uc801\uc778 \ubb38\uc81c"),Object(c.b)("li",{parentName:"ul"},"\ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud574 \uc6b0\ud68c \uac00\ub2a5")),Object(c.b)("h2",{id:"\ud55c\uc815\uc801-\ud0c0\uc785-\ub9e4\uac1c\ubcc0\uc218-bound-type-parameter"},"\ud55c\uc815\uc801 \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218 bound type parameter"),Object(c.b)("p",null,"\ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc81c\uc57d\uc744 \ub450\ub294 \uc81c\ub124\ub9ad \ud0c0\uc785"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"package java.util.concurrent.DelayQueue;\nclass DelayQueue<E extends Delayed> implements  BlockingQueue<E> {}\n")),Object(c.b)("p",null,"\ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d ",Object(c.b)("inlineCode",{parentName:"p"},"<E extneds Delayed>")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"java.util.concurrent.Delayed")," \uc758 \ud558\uc704 \ud0c0\uc785\ub9cc \ubc1b\ub294\ub2e4\ub294 \uc758\ubbf8"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"DelayQueue<Delayed>")," \ub3c4 \uac00\ub2a5"),Object(c.b)("li",{parentName:"ul"},"\ud615\ubcc0\ud658 \uc5c6\uc774 Delayed \ud074\ub798\uc2a4\uc758 \uba54\uc11c\ub4dc \ud638\ucd9c \uac00\ub2a5")))}u.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),u=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},j=function(e){var t=u(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},o=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),j=u(n),o=a,O=j["".concat(r,".").concat(o)]||j[o]||s[o]||c;return n?l.a.createElement(O,b(b({ref:t},p),{},{components:n})):l.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=o;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var p=2;p<c;p++)r[p]=n[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);