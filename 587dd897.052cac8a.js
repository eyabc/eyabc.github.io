(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var r=n(3),a=(n(0),n(447));const l={},c={unversionedId:"java/effective-java/ch5/ITEM30",id:"java/effective-java/ch5/ITEM30",isDocsHomePage:!1,title:"ITEM30",description:"ITEM30 \uc774\uc655\uc774\uba74 \uc81c\ub124\ub9ad \uba54\uc11c\ub4dc\ub85c \ub9cc\ub4e4\ub77c",source:"@site/docs/java/effective-java/ch5/ITEM30.md",slug:"/java/effective-java/ch5/ITEM30",permalink:"/docs/java/effective-java/ch5/ITEM30",version:"current",sidebar:"effectiveJava",previous:{title:"ITEM29",permalink:"/docs/java/effective-java/ch5/ITEM29"},next:{title:"ITEM31",permalink:"/docs/java/effective-java/ch5/ITEM31"}},i=[{value:"\uc81c\ub124\ub9ad \uc2f1\uae00\ud134 \ud329\ud130\ub9ac",id:"\uc81c\ub124\ub9ad-\uc2f1\uae00\ud134-\ud329\ud130\ub9ac",children:[]},{value:"\ud56d\ub4f1 \ud568\uc218 identity function",id:"\ud56d\ub4f1-\ud568\uc218-identity-function",children:[]},{value:"\uc7ac\uadc0\uc801 \ud55c\uc815 recursive type bound",id:"\uc7ac\uadc0\uc801-\ud55c\uc815-recursive-type-bound",children:[]}],b={toc:i};function o({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"item30-\uc774\uc655\uc774\uba74-\uc81c\ub124\ub9ad-\uba54\uc11c\ub4dc\ub85c-\ub9cc\ub4e4\ub77c"},"ITEM30 \uc774\uc655\uc774\uba74 \uc81c\ub124\ub9ad \uba54\uc11c\ub4dc\ub85c \ub9cc\ub4e4\ub77c"),Object(a.b)("p",null,"\uc81c\ub124\ub9ad \ud0c0\uc785\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc785\ub825 \ub9e4\uac1c\ubcc0\uc218\uc640 \ubc18\ud658\uac12\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \ud615\ubcc0\ud658\ud574\uc57c\ud558\ub294 \uba54\uc11c\ub4dc \ubcf4\ub2e4\n\uc81c\ub124\ub9ad \uba54\uc11c\ub4dc\uac00 \ub354 \uc548\uc804\ud558\uba70 \uc0ac\uc6a9\ud558\uae30\ub3c4 \uc27d\ub2e4."),Object(a.b)("p",null,"\uc608\uc2dc"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785\uc744 \ubc1b\ub294 \uc815\uc801 \uc720\ud2f8\ub9ac\ud2f0 \uba54\uc11c\ub4dc\ub4e4"),Object(a.b)("li",{parentName:"ul"},"Collections \uc758 \uc54c\uace0\ub9ac\uc998 \uba54\uc11c\ub4dc binarySearch, sort \ub4f1\uc740 \ubaa8\ub450 \uc81c\ub124\ub9ad\uc774\ub2e4.")),Object(a.b)("p",null,"\ub85c \ud0c0\uc785 \uc0ac\uc6a9 - unchecked call warning ","[26]"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public static Set union(Set s1, Set s2) {\n    Set result = new HashSet(s1);\n    result.addAll(s1);\n    return result;\n}\n")),Object(a.b)("p",null,"\uc81c\ub124\ub9ad \uba54\uc11c\ub4dc"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public static <E> Set<E> union(Set<E> s1, Set<E> s2) {\n    Set<E> result = new HashSet<>(s1);\n    result.addAll(s2);\n    return result;\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\ud0c0\uc785\ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d ",Object(a.b)("inlineCode",{parentName:"strong"},"<E>"))," "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uc758 \uc81c\ud55c\uc790\uc640 \ubc18\ud658\ud0c0\uc785 \uc0ac\uc774\uc5d0 \uc628\ub2e4.")),Object(a.b)("p",null,"\uc81c\ub124\ub9ad \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud558\ub294 \uac04\ub2e8\ud55c \ud504\ub85c\uadf8\ub7a8"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    Set<String> guys = Set.of("tom", "dic", "harry");\n    Set<String> stooges = Set.of("\ub798\ub9ac", "\ubaa8\uc5d0", "\uceec\ub9ac");\n    Set<String> aflCio = union(guys, stooges);\n    System.out.println(aflCio);\n}\n')),Object(a.b)("p",null,"\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785","[31]"," \uc744 \uc0ac\uc6a9\ud558\uba74 \ub354 \uc720\uc5f0\ud558\uac8c \uac1c\uc120\uac00\ub2a5\ud568."),Object(a.b)("h2",{id:"\uc81c\ub124\ub9ad-\uc2f1\uae00\ud134-\ud329\ud130\ub9ac"},"\uc81c\ub124\ub9ad \uc2f1\uae00\ud134 \ud329\ud130\ub9ac"),Object(a.b)("p",null,"\ubd88\ubcc0 \uac1d\uccb4\ub97c \uc5ec\ub7ec \ud0c0\uc785\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5b4\uc57c \ud560 \ub54c"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc694\uccad\ud55c \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub9de\uac8c \uac1d\uccb4\uc758 \ud0c0\uc785\uc744 \ubc14\uafd4\uc8fc\ub294 \uc815\uc801 \ud329\ud130\ub9ac"),Object(a.b)("li",{parentName:"ul"},"Collections.reverseOrder \uac19\uc740 \ud568\uc218 \uac1d\uccb4","[42]"," \ub098 Collections.emptySet \uac19\uc740 \uceec\ub809\uc158 \uc6a9\uc73c\ub85c \uc0ac\uc6a9\ud55c\ub2e4.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"static final ReverseComparator REVERSE_ORDER= new ReverseComparator();\npublic static <T> Comparator<T> reverseOrder() {\n    return (Comparator<T>) ReverseComparator.REVERSE_ORDER;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public static final Set EMPTY_SET = new EmptySet<>();\npublic static final <T> Set<T> emptySet() {\n    return (Set<T>) EMPTY_SET;\n}\n")),Object(a.b)("h2",{id:"\ud56d\ub4f1-\ud568\uc218-identity-function"},Object(a.b)("a",{parentName:"h2",href:"https://ko.wikipedia.org/wiki/%ED%95%AD%EB%93%B1_%ED%95%A8%EC%88%98"},"\ud56d\ub4f1 \ud568\uc218")," identity function"),Object(a.b)("p",null,"\uc815\uc758\uc5ed\uacfc \uacf5\uc5ed\uc774 \uac19\uace0, \ubaa8\ub4e0 \uc6d0\uc18c\ub97c \uc790\uae30 \uc790\uc2e0\uc73c\ub85c \ub300\uc751\uc2dc\ud0a4\ub294 \ud568\uc218"),Object(a.b)("p",null,"\ud56d\ub4f1 \ud568\uc218 \uac1d\uccb4\ub294, \uc0c1\ud0dc\uac00 \uc5c6\uc73c\ub2c8 \uc694\uccad\ud560 \ub54c \ub9c8\ub2e4 \uc0c8\ub85c \uc0dd\uc131\ud558\ub294 \uac83\uc740 \ub0ad\ube44\ub2e4."),Object(a.b)("p",null,"\uc81c\ub124\ub9ad \uc2f1\uae00\ud134 \ud329\ud130\ub9ac \ud328\ud134"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'private static UnaryOperator<Object> IDENTITY_FN = (t) -> t;\n\n@SuppressWarings("unchecked")\npublic static <T> UnaryOperator<T> identityFunction() {\n    return (UnaryOperator<T>) IDENTITY_FN;\n}\n')),Object(a.b)("p",null,"\ud56d\ub4f1 \ud568\uc218\ub780 \uc785\ub825 \uac12\uc744 \uc218\uc815 \uc5c6\uc774 \uadf8\ub300\ub85c \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0 T \uac00 \uc5b4\ub5a4 \ud0c0\uc785\uc774\ub4e0 ",Object(a.b)("inlineCode",{parentName:"p"},"(UnaryOperator<T>)")," \ub294 \uc548\uc804\ud558\ub2e4."),Object(a.b)("p",null,"\uc81c\ub124\ub9ad \uc2f1\uae00\ud134\uc744 \uc0ac\uc6a9\ud558\ub294 \uc608"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    String[] strings = { "\uc0bc\ubca0", "\ub300\ub9c8", "\ub098\uc77c\ub860" };\n    UnaryOperator<String> sameString = identityFunction();\n    for (String s : strings) \n        System.out.println(sameString.apply(s));\n\n    Number[] numbers = { 1, 2.0, 3L };\n    UnaryOperator<Number> sameNumber = identityFunction();\n    for (Number n : numbers) \n        System.out.println(sameNumber.apply(n));\n}\n')),Object(a.b)("h2",{id:"\uc7ac\uadc0\uc801-\ud55c\uc815-recursive-type-bound"},"\uc7ac\uadc0\uc801 \ud55c\uc815 recursive type bound"),Object(a.b)("p",null,"\uc790\uc2e0\uc774 \ub4e4\uc5b4\uac04 \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec, \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uc758 \ud5c8\uc6a9 \ubc94\uc704\ub97c \ud55c\uc815\ud568"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc8fc\ub85c \ud0c0\uc785\uc758 \uc790\uc5f0\uc801 \uc21c\uc11c\ub97c \uc815\ud558\ub294 Comparable \uc778\ud130\ud398\uc774\uc2a4","[14]","\uc640 \ud568\uaed8 \uc4f0\uc778\ub2e4.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public interface Comparable<T> {\n    int compareTo(T o);\n}\n")),Object(a.b)("p",null,"\ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218 T"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Comparable<T>")," \ub97c \uad6c\ud604\ud55c \ud0c0\uc785\uc774 \ube44\uad50\ud560 \uc218 \uc788\ub294 \uc6d0\uc18c \ud0c0\uc785\uc744 \uc815\uc758\ud568."),Object(a.b)("li",{parentName:"ul"},"\uc2e4\uc81c\ub85c \uac70\uc758 \ubaa8\ub4e0 \ud0c0\uc785\uc740 \uc790\uc2e0\uacfc \uac19\uc740 \ud0c0\uc785\uc758 \uc6d0\uc18c\uc640\ub9cc \ube44\uad50\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("li",{parentName:"ul"},"String \uc740 ",Object(a.b)("inlineCode",{parentName:"li"},"Comparable<String>")," \uc744 \uad6c\ud604\ud558\uace0, Integer \ub294 ",Object(a.b)("inlineCode",{parentName:"li"},"Comparable<Integer>")," \ub97c \uad6c\ud604\ud558\ub294 \uc2dd\uc784")),Object(a.b)("p",null,"\uc7ac\uadc0\uc801 \ud0c0\uc785 \ud55c\uc815\uc744 \uc774\uc6a9\ud574 \uc0c1\ud638 \ube44\uad50 \ud560 \uc218 \uc788\uc74c\uc744 \ud45c\ud604"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public static <E extends Comparable<E>> max(Collection<E> c);\n")),Object(a.b)("p",null,"\ud0c0\uc785 \ud55c\uc815 ",Object(a.b)("inlineCode",{parentName:"p"},"<E extends Comparable<E>>")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud0c0\uc785 E \ub294 \uc790\uc2e0\uacfc \ube44\uad50\ud560 \uc218 \uc788\ub2e4.")),Object(a.b)("p",null,"\uc7ac\uadc0\uc801 \ud0c0\uc785 \ud55c\uc815\uc744 \uc0ac\uc6a9\ud558\uc5ec \uceec\ub809\uc158\uc5d0\uc11c \ucd5c\ub300\uac12\uc744 \ubc18\ud658"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'public static <E extends Comparable<E>> E max(Collection<E> c) {\n    if (c.isEmpty()) \n        throw new IllegalArgumentException("\uceec\ub809\uc158\uc774 \ube44\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.");\n    \n    E result = null;\n    for (E e : c) \n        if (result == null || e.compareTo(result) > 0)\n            result = Objects.requireNonNull(e);\n        return result;\n}\n')))}o.isMDXComponent=!0},447:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,j=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return n?a.a.createElement(j,i(i({ref:t},o),{},{components:n})):a.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);