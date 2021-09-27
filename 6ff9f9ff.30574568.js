(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(415));const l={},c={unversionedId:"java/effective-java/ch5/ITEM31",id:"java/effective-java/ch5/ITEM31",isDocsHomePage:!1,title:"ITEM31",description:"ITEM31 \ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c \uc0ac\uc6a9\ud574 API \uc720\uc5f0\uc131\uc744 \ub192\uc774\ub77c",source:"@site/docs/java/effective-java/ch5/ITEM31.md",slug:"/java/effective-java/ch5/ITEM31",permalink:"/docs/java/effective-java/ch5/ITEM31",version:"current",sidebar:"effectiveJava",previous:{title:"ITEM30",permalink:"/docs/java/effective-java/ch5/ITEM30"},next:{title:"ITEM32",permalink:"/docs/java/effective-java/ch5/ITEM32"}},i=[{value:"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785\uc740 \ubd88\uacf5\ubcc0 invariant",id:"\ub9e4\uac1c\ubcc0\uc218\ud654-\ud0c0\uc785\uc740-\ubd88\uacf5\ubcc0-invariant",children:[]},{value:"\ubd88\uacf5\ubcc0 \ubc29\uc2dd\ubcf4\ub2e4 \uc720\uc5f0\ud55c, \uc640\uc77c\ub4dc \ud0c0\uc785 \uce74\ub4dc \ud0c0\uc785",id:"\ubd88\uacf5\ubcc0-\ubc29\uc2dd\ubcf4\ub2e4-\uc720\uc5f0\ud55c-\uc640\uc77c\ub4dc-\ud0c0\uc785-\uce74\ub4dc-\ud0c0\uc785",children:[]},{value:"PECS \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uc758 \uae30\ubcf8\uc6d0\uce59",id:"pecs-\uc640\uc77c\ub4dc\uce74\ub4dc-\ud0c0\uc785\uc758-\uae30\ubcf8\uc6d0\uce59",children:[{value:"pushAll \uc758 src \ub9e4\uac1c\ubcc0\uc218",id:"pushall-\uc758-src-\ub9e4\uac1c\ubcc0\uc218",children:[]},{value:"popAll \uc758 dst \ub9e4\uac1c\ubcc0\uc218",id:"popall-\uc758-dst-\ub9e4\uac1c\ubcc0\uc218",children:[]}]},{value:"\uba85\uc2dc\uc801 \ud0c0\uc785 \uc778\uc218 explicit type arguments",id:"\uba85\uc2dc\uc801-\ud0c0\uc785-\uc778\uc218-explicit-type-arguments",children:[]},{value:"Comparable, Comparator",id:"comparable-comparator",children:[]},{value:"\uba54\uc11c\ub4dc \uc120\uc5b8\uc5d0, \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uac00 \ud55c \ubc88\ub9cc \ub098\uc624\uba74 \uc640\uc77c\ub4dc\uce74\ub4dc\ub85c \ub300\uccb4\ud558\ub77c",id:"\uba54\uc11c\ub4dc-\uc120\uc5b8\uc5d0-\ud0c0\uc785-\ub9e4\uac1c\ubcc0\uc218\uac00-\ud55c-\ubc88\ub9cc-\ub098\uc624\uba74-\uc640\uc77c\ub4dc\uce74\ub4dc\ub85c-\ub300\uccb4\ud558\ub77c",children:[{value:"private \ub3c4\uc6b0\ubbf8 \uba54\uc11c\ub4dc",id:"private-\ub3c4\uc6b0\ubbf8-\uba54\uc11c\ub4dc",children:[]}]}],b={toc:i};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"item31-\ud55c\uc815\uc801-\uc640\uc77c\ub4dc\uce74\ub4dc\ub97c-\uc0ac\uc6a9\ud574-api-\uc720\uc5f0\uc131\uc744-\ub192\uc774\ub77c"},"ITEM31 \ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c \uc0ac\uc6a9\ud574 API \uc720\uc5f0\uc131\uc744 \ub192\uc774\ub77c"),Object(r.b)("h2",{id:"\ub9e4\uac1c\ubcc0\uc218\ud654-\ud0c0\uc785\uc740-\ubd88\uacf5\ubcc0-invariant"},"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785\uc740 \ubd88\uacf5\ubcc0 invariant"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"List<Object>")," \uc5d0\ub294 \uc5b4\ub5a4 \uac1d\uccb4\ub4e0 \ub123\uc744\uc218 \uc788\ub2e4.\n",Object(r.b)("inlineCode",{parentName:"p"},"List<String>")," \uc5d0\ub294 \ubb38\uc790\uc5f4\ub9cc \ub123\uc744 \uc218 \uc788\ub2e4."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"List<String>")," \uc740 ",Object(r.b)("inlineCode",{parentName:"p"},"List<Object>")," \uac00 \ud558\ub294 \uc77c\uc744 \uc81c\ub300\ub85c \uc218\ud589\ud558\uc9c0 \ubabb\ud558\ub2c8 \ud558\uc704 \ud0c0\uc785\uc774 \ub420 \uc218 \uc5c6\ub2e4.(\uc5c5\uce90\uc2a4\ud305 \ubd88\uac00)"),Object(r.b)("h2",{id:"\ubd88\uacf5\ubcc0-\ubc29\uc2dd\ubcf4\ub2e4-\uc720\uc5f0\ud55c-\uc640\uc77c\ub4dc-\ud0c0\uc785-\uce74\ub4dc-\ud0c0\uc785"},"\ubd88\uacf5\ubcc0 \ubc29\uc2dd\ubcf4\ub2e4 \uc720\uc5f0\ud55c, \uc640\uc77c\ub4dc \ud0c0\uc785 \uce74\ub4dc \ud0c0\uc785"),Object(r.b)("p",null,"\uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 pushAll \uba54\uc11c\ub4dc - \uacb0\ud568\uc774 \uc788\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public class Stack<E> {\n    public Stack();\n    public void push(E e);\n    public E pop();\n    public boolean isEmpty();\n\n    public void pushAll(Iterable<E> src) {\n        for(E e : src)\n            push(e);\n    }\n}\n")),Object(r.b)("p",null,"Integer \ub294 Number \uc758 \ud558\uc704\ud0c0\uc785\uc774\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","\uadf8\ub7ec\ub098 \ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785\uc774 \ubd88\uacf5\ubcc0\uc774\uae30 \ub54c\ubb38\uc5d0 \uc624\ub958\uac00 \ub72c\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"Stack<Number> numberStack = new Stack<>();\nIterable<Integer> integers = ...;\nnumberStack.pushAll(integers);  // error: incompatible types\n")),Object(r.b)("p",null,"\uc774\ub7f4 \ub54c, ",Object(r.b)("em",{parentName:"p"},"\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785"),"\uc774\ub77c\ub294 ",Object(r.b)("em",{parentName:"p"},"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785"),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Iterable<? extends E>")," E \uc758 \ud558\uc704\ud0c0\uc785\uc758 Iterable "),Object(r.b)("li",{parentName:"ul"},"\ud558\uc704\ud0c0\uc785\uc740 \uc790\uae30\uc790\uc2e0\ub3c4 \ud3ec\ud568\ud558\ub294 \uc758\ubbf8\uc5d0\uc11c extends \ub294 \ub2e4\uc18c \uc5b4\uc0c9\ud560 \uc218 \uc788\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public void pushAll(Iterable<? extends E> src) {\n    for(E e : src) \n        push(e);\n}\n")),Object(r.b)("p",null,"popAll \uc740 super \ub97c \uc0ac\uc6a9\ud558\uc600\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public void popAll(Collection<? super E> dst) {\n    while(!isEmpty())\n        dst.add(pop());\n}\n")),Object(r.b)("h2",{id:"pecs-\uc640\uc77c\ub4dc\uce74\ub4dc-\ud0c0\uc785\uc758-\uae30\ubcf8\uc6d0\uce59"},"PECS \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uc758 \uae30\ubcf8\uc6d0\uce59"),Object(r.b)("p",null,"PECS: producer-extends, consumer-super"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc6d0\uc18c\uc758 \uc0dd\uc0b0\uc790\ub098 \uc18c\ube44\uc790\uc6a9 \uc785\ub825 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub77c"),Object(r.b)("li",{parentName:"ul"},"\uc720\uc5f0\uc131\uc744 \uadf9\ub300\ud654 \ud55c\ub2e4.")),Object(r.b)("h3",{id:"pushall-\uc758-src-\ub9e4\uac1c\ubcc0\uc218"},"pushAll \uc758 src \ub9e4\uac1c\ubcc0\uc218"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stack \uc774 \uc0ac\uc6a9\ud560 E \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc0b0\ud568 "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Iterable<? extends E>"))),Object(r.b)("h3",{id:"popall-\uc758-dst-\ub9e4\uac1c\ubcc0\uc218"},"popAll \uc758 dst \ub9e4\uac1c\ubcc0\uc218"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stack \uc73c\ub85c \ubd80\ud130 E \uc778\uc2a4\ud134\uc2a4\ub97c \uc18c\ube44\ud568"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Collection<? super E>"))),Object(r.b)("p",null,"\ubc18\ud658\ud0c0\uc785\uc5d0\ub294 \ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud558\uba74 \uc548\ub41c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\uc5d0\uc11c\ub3c4 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uc744 \uc368\uc57c \ud558\ub294 \ubb38\uc81c\uc810")),Object(r.b)("h2",{id:"\uba85\uc2dc\uc801-\ud0c0\uc785-\uc778\uc218-explicit-type-arguments"},"\uba85\uc2dc\uc801 \ud0c0\uc785 \uc778\uc218 explicit type arguments"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public static <E> Set<E> union(Set<? extends E> s1, Set<? extends E> s2)\n...\n\nSet<Integer> integers = Set.of(1, 3, 5);\nSet<Double> doubles = Set.of(2.0, 4.0, 6.0);\nSet<Number> numbers = union(integers, doubles); // java7 \uc5d0\uc11c\ub294 incompatible types error!\n")),Object(r.b)("p",null,"\uc790\ubc14 7\uae4c\uc9c0\ub294 \uba85\uc2dc\uc801 \ud0c0\uc785 \uc778\uc218\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 \uc62c\ubc14\ub978 \ud0c0\uc785\uc744 \ucd94\ub860\ud558\uc9c0 \ubabb\ud558\uae30 \ub54c\ubb38\uc774\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"Set<Number> numbers = Union.<Number>union<integers, doubles>;\n")),Object(r.b)("p",null,"\uc790\ubc148 \ubd80\ud130 \ubaa9\ud45c\ud0c0\uc774\ud551 ??(target typing) \uc744 \uc9c0\uc6d0."),Object(r.b)("h2",{id:"comparable-comparator"},"Comparable, Comparator"),Object(r.b)("p",null,"before ITEM30 "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public static <E extends Comparable<E>> E max(List<E> list)\n")),Object(r.b)("p",null,"after"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public static <E extends Comparable<? super E>> E max(List<? extends E> list)\n// ...\nList<ScheduledFuture<?>> scheduledFutures = ...;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"List<? extends E>")," \uc785\ub825 \ub9e4\uac1c\ubcc0\uc218\ub294 E \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc0b0\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Comparable<? super E>>")," E \uc778\uc2a4\ud134\uc2a4\ub97c \uc18c\ube44\ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Comparable, Comparator \uc740 \ud56d\uc0c1 \uc18c\ube44\uc790")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"java.util.concurrent")," \ud328\ud0a4\uc9c0\uc758 ScheduledFuture \ub294 "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Comparable<ScheduledFuture>")," \ub97c \uad6c\ud604\ud558\uc9c0 \uc54a\uc558\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ub530\ub77c\uc11c, \uc218\uc815 \uc804 max \ub294 \ub9ac\uc2a4\ud2b8\ub97c \ucc98\ub9ac\ud560 \uc218 \uc5c6\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public interface Comparable<E>\npublic interface Delayed extends Comparable<Delayed>\npublic interface ScheduledFuture<V> extends Delayed, Future<V>\n")),Object(r.b)("p",null,"Comparable(Comparator) \ub97c \uc9c1\uc811\uad6c\ud604\ud558\uc9c0 \uc54a\uace0, \uc9c1\uc811 \uad6c\ud604\ud55c \ub2e4\ub978 \ud0c0\uc785\uc744 \ud655\uc7a5\ud55c \ud0c0\uc785\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574\n\uc640\uc77c\ub4dc\uce74\ub4dc\uac00 \ud544\uc694\ud558\ub2e4."),Object(r.b)("h2",{id:"\uba54\uc11c\ub4dc-\uc120\uc5b8\uc5d0-\ud0c0\uc785-\ub9e4\uac1c\ubcc0\uc218\uac00-\ud55c-\ubc88\ub9cc-\ub098\uc624\uba74-\uc640\uc77c\ub4dc\uce74\ub4dc\ub85c-\ub300\uccb4\ud558\ub77c"},"\uba54\uc11c\ub4dc \uc120\uc5b8\uc5d0, \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uac00 \ud55c \ubc88\ub9cc \ub098\uc624\uba74 \uc640\uc77c\ub4dc\uce74\ub4dc\ub85c \ub300\uccb4\ud558\ub77c"),Object(r.b)("p",null,"\ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uc640 \uc640\uc77c\ub4dc\uce74\ub4dc\uc758 \uacf5\ud1b5\ub418\ub294 \ubd80\ubd84\uc774 \uc788\uc5b4\uc11c \ubb34\uc5c7\uc744 \uc0ac\uc6a9\ud574\ub3c4 \uad1c\ucc2e\uc744 \uacbd\uc6b0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public static <E> void swap(List<E> list, int i, int j);\npublic static void swap(List<E> list, int i, int j);\n")),Object(r.b)("p",null,"\ub450 \ubc88\uc9f8 \ubc29\ubc95\uc774 \uac04\ub2e8\ud558\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","\uadf8\ub7ec\ub098, ",Object(r.b)("inlineCode",{parentName:"p"},"list.get(i)")," \uc5d0\uc11c incompatible types \uc624\ub958\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("inlineCode",{parentName:"p"},"List<?>")," \uc5d0\ub294 null \uc774\uc678\uc5d0 \uc5b4\ub5a4 \uac12\ub3c4 \ub123\uc744 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc774\ub2e4.     "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public static void swap(List<?> list, int i, int j) {\n    list.set(i, list.set(j, list.get(i)));  // error!\n}\n")),Object(r.b)("h3",{id:"private-\ub3c4\uc6b0\ubbf8-\uba54\uc11c\ub4dc"},"private \ub3c4\uc6b0\ubbf8 \uba54\uc11c\ub4dc"),Object(r.b)("p",null,"\uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uc758 \uc2e4\uc81c \ud0c0\uc785\uc744 \uc54c\ub824\uc8fc\ub294 \uba54\uc11c\ub4dc\ub97c \uc791\uc131\ud55c\ub2e4."),Object(r.b)("p",null,"\uc2e4\uc81c \ud0c0\uc785\uc744 \uc54c\uc544\ub0b4\ub824\uba74, \ub3c4\uc6b0\ubbf8 \uba54\uc11c\ub4dc\ub294 \uc81c\ub124\ub9ad \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public static void swap(List<?> list, int i, int j) {\n    swapHelper(list, i, j);\n}\n\nprivate static <E> void swapHelper(List<E> list, int i, int j) {\n    list.set(i, list.set(j, list.get(i)));\n}\n")))}p.isMDXComponent=!0},415:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),o=u(n),j=a,d=o["".concat(c,".").concat(j)]||o[j]||s[j]||l;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=j;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);