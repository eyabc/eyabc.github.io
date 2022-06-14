(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(475)),l={title:"6. \ubd88\ud544\uc694\ud55c \uac1d\uccb4 \uc0dd\uc131\uc744 \ud53c\ud558\ub77c"},c={unversionedId:"java/effective-java/ch2/ITEM6",id:"java/effective-java/ch2/ITEM6",isDocsHomePage:!1,title:"6. \ubd88\ud544\uc694\ud55c \uac1d\uccb4 \uc0dd\uc131\uc744 \ud53c\ud558\ub77c",description:"\uac1d\uccb4 \ud558\ub098\ub97c \uc7ac\uc0ac\uc6a9\ud558\ub294 \uc608\uc2dc\uc5d0\ub294 \ubd88\ubcc0 \uac1d\uccb4\uac00 \uc801\ud569\ud558\ub2e4.",source:"@site/docs/java/effective-java/ch2/ITEM6.md",slug:"/java/effective-java/ch2/ITEM6",permalink:"/docs/java/effective-java/ch2/ITEM6",version:"current",lastUpdatedAt:1632642016,sidebar:"effectiveJava",previous:{title:"5. \uc790\uc6d0\uc744 \uc9c1\uc811 \uba85\uc2dc\ud558\uc9c0 \ub9d0\uace0 \uc758\uc874 \uac1d\uccb4 \uc8fc\uc785\uc744 \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM5"},next:{title:"7. \ub2e4 \uc4f4 \uac1d\uccb4 \ucc38\uc870\ub97c \ud574\uc81c\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM7"}},b=[{value:"primitive \ubb38\uc790\uc5f4, Object \ubb38\uc790\uc5f4",id:"primitive-\ubb38\uc790\uc5f4-object-\ubb38\uc790\uc5f4",children:[{value:"\uc815\uc801 \ud329\ud130\ub9ac \uba54\uc11c\ub4dc\uc0ac\uc6a9",id:"\uc815\uc801-\ud329\ud130\ub9ac-\uba54\uc11c\ub4dc\uc0ac\uc6a9",children:[]}]},{value:"\uc0dd\uc131\ube44\uc6a9\uc774 \ube44\uc2fc \uac1d\uccb4 \u2192 \uce90\uc2f1",id:"\uc0dd\uc131\ube44\uc6a9\uc774-\ube44\uc2fc-\uac1d\uccb4-\u2192-\uce90\uc2f1",children:[]},{value:"\uc9c0\uc5f0\ucd08\uae30\ud654 Lazy Initialization",id:"\uc9c0\uc5f0\ucd08\uae30\ud654-lazy-initialization",children:[]},{value:"Auto boxing",id:"auto-boxing",children:[]},{value:"\uac1d\uccb4 \ud480",id:"\uac1d\uccb4-\ud480",children:[]},{value:"\ud0c0\ud611\uc810",id:"\ud0c0\ud611\uc810",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\uac1d\uccb4 \ud558\ub098\ub97c \uc7ac\uc0ac\uc6a9\ud558\ub294 \uc608\uc2dc\uc5d0\ub294 \ubd88\ubcc0 \uac1d\uccb4\uac00 \uc801\ud569\ud558\ub2e4. "),Object(i.b)("p",null,"\ubd88\ubcc0 \uac1d\uccb4\ub294 \uc7ac\uc0ac\uc6a9\ud574\ub3c4 \uc548\uc804\ud568\uc774 \uba85\ubc31\ud568."),Object(i.b)("h2",{id:"primitive-\ubb38\uc790\uc5f4-object-\ubb38\uc790\uc5f4"},"primitive \ubb38\uc790\uc5f4, Object \ubb38\uc790\uc5f4"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'String s = new String("bikini");')," ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"new \u2192 Heap \uc601\uc5ed"),Object(i.b)("li",{parentName:"ul"},"\ubb38\uc7a5 \uc2e4\ud589\ub9c8\ub2e4 String \uc778\uc2a4\ud134\uc2a4\ub97c \uc0c8\ub85c \uc0dd\uc131."),Object(i.b)("li",{parentName:"ul"},"\ubc18\ubcf5\uacfc \ud638\ucd9c\uc774 \ub9ce\uc544\uc9c0\uba74 String \uc778\uc2a4\ud134\uc2a4\uac00 \uba54\ubaa8\ub9ac\ub97c \ucc28\uc9c0\ud568."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'String s = "bikini";'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ub9ac\ud130\ub7f4 \u2192 string constant pool \uc601\uc5ed"),Object(i.b)("li",{parentName:"ul"},"\ub0b4\ubd80\uc801\uc73c\ub85c String \uc758 intern() \uba54\uc11c\ub4dc\uac00 \ud638\ucd9c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"intern() \uba54\uc11c\ub4dc\ub294 \ubb38\uc790\uc5f4\uc774 string constant pool \uc5d0 \uc874\uc7ac\ud558\ub294\uc9c0 \uac80\uc0c9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc788\ub2e4\uba74 \uadf8 \uc8fc\uc18c\uac12\uc744 \ubc18\ud658"),Object(i.b)("li",{parentName:"ul"},"\uc5c6\ub2e4\uba74 string constant pool \uc5d0 \ub123\uace0 \uc0c8\ub85c\uc6b4 \uc8fc\uc18c\uac12\uc744 \ubc18\ud658 "))))),Object(i.b)("li",{parentName:"ul"},"\ud558\ub098\uc758 String \uc778\uc2a4\ud134\uc2a4 \uc0ac\uc6a9"),Object(i.b)("li",{parentName:"ul"},"\uac19\uc740 \uac00\uc0c1 \uba38\uc2e0 \uc548\uc5d0\uc11c, \ub611\uac19\uc740 \ubb38\uc790\uc5f4 \ub9ac\ud130\ub7f4\uc744 \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4e0 \ucf54\ub4dc\uac00 \uac19\uc740 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud568\uc744 \ubcf4\uc7a5.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public final class String {\n    public native String intern();\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/kth496/1d6906d43775e76bd0956be228f8f83d"},"@kth496"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class Main {\n    public static void main(String[] args) {\n        String id = "taehongkim";\n        String id2 = new String("taehongkim");\n        String id3 = "taehongkim";\n        System.out.println(id.equals(id2));  // true \uac12 \ube44\uad50\n        System.out.println(id == id2);       // false \uc8fc\uc18c \ube44\uad50\n        System.out.println(id == id3);       // true \n    }\n}\n')),Object(i.b)("h3",{id:"\uc815\uc801-\ud329\ud130\ub9ac-\uba54\uc11c\ub4dc\uc0ac\uc6a9"},"\uc815\uc801 \ud329\ud130\ub9ac \uba54\uc11c\ub4dc\uc0ac\uc6a9"),Object(i.b)("p",null,"Wrapper Class\uc5d0\uc11c\ub294 \uce90\uc2f1\uc744 \uc9c0\uc6d0\ud574\uc8fc\ub294 valueOf()\ub77c\ub294 \uba54\uc18c\ub4dc\uac00 \uc874\uc7ac\ud55c\ub2e4.  ",Object(i.b)("a",{parentName:"p",href:"/docs/java/effective-java/ch2/ITEM1"},"1")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1.8\uc5d0\uc11c\ub294 \uad73\uc774 valueOf()\ub97c \ucd94\uac00\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4.")),Object(i.b)("h2",{id:"\uc0dd\uc131\ube44\uc6a9\uc774-\ube44\uc2fc-\uac1d\uccb4-\u2192-\uce90\uc2f1"},"\uc0dd\uc131\ube44\uc6a9\uc774 \ube44\uc2fc \uac1d\uccb4 \u2192 \uce90\uc2f1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud06c\uae30\uac00 \uc544\uc8fc \ud070 Array"),Object(i.b)("li",{parentName:"ul"},"Database Connection"),Object(i.b)("li",{parentName:"ul"},"I/O \uc791\uc5c5\uc744 \ud544\uc694\ub85c \ud558\ub294 Object")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"String.matches")," "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uc815\uaddc \ud45c\ud604\uc2dd\uc73c\ub85c \ubb38\uc790\uc5f4 \ud615\ud0dc\ub97c \ud655\uc778\ud558\ub294 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'static boolean isRomanNumeral(String s) {\n    return s.matches("reg");\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ub0b4\ubd80\uc801\uc73c\ub85c Pattern \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ud55c\ubc88\uc4f0\uba74 \uac00\ube44\uc9c0 \uceec\ub809\uc158\uc758 \ub300\uc0c1"),Object(i.b)("li",{parentName:"ul"},"\uc0dd\uc131 \ube44\uc6a9\uc774 \ub192\uc74c"))),Object(i.b)("li",{parentName:"ul"},"Pattern \uc778\uc2a4\ud134\uc2a4\ub97c \uce90\uc2f1 (\uac1c\uc120\ud6c4 6\ubc30 \ud5a5\uc0c1)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class RomanNumerals {\n    private static final Pattern ROMAN = Pattern.compile(\n        "^(?=....)" // \uc815\uaddc\ud45c\ud604\uc2dd\n    );\n    \n    static boolean isRomanNumerals(String s) {\n        return ROMAN.macher(s).matches();\n    }\n}\n')),Object(i.b)("h2",{id:"\uc9c0\uc5f0\ucd08\uae30\ud654-lazy-initialization"},"\uc9c0\uc5f0\ucd08\uae30\ud654 Lazy Initialization"),Object(i.b)("p",null,"\uba54\uc11c\ub4dc\uac00 \ucc98\uc74c \ud638\ucd9c\ub420 \ub54c \ud544\ub4dc\ub97c \ucd08\uae30\ud654 \ud558\ub294 \uac83."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uc7a5\uc810: \ubd88\ud544\uc694\ud55c \ucd08\uae30\ud654\ub97c \uc5c6\uc570"),Object(i.b)("li",{parentName:"ul"},"\ub2e8\uc810: \ucf54\ub4dc\uac00 \ubcf5\uc7a1\ud574\uc9c0\ub294 \ub9cc\ud07c \uc131\ub2a5\uc774 \ud06c\uac8c \uac1c\uc120\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc74c")),Object(i.b)("h2",{id:"auto-boxing"},"Auto boxing"),Object(i.b)("p",null,"\uae30\ubcf8\ud0c0\uc785\uacfc \ubc15\uc2f1\ub41c \uae30\ubcf8 \ud0c0\uc785\uc744 \uc11e\uc5b4 \uc4f8 \ub54c \uc790\ub3d9\uc73c\ub85c \uc0c1\ud638 \ubcc0\ud658\ud574 \uc8fc\ub294 \uae30\uc220"),Object(i.b)("p",null,"\uc624\ud1a0\ubc15\uc2f1\uc774 \uc77c\uc5b4\ub0a0 \ub54c \uc778\uc2a4\ud134\uc2a4\uac00 \uc0dd\uc131\ub428 \u2192 \ubc18\ubcf5\uc774 \ub9ce\uc774 \uc77c\uc5b4\ub098\uba74, \uc131\ub2a5\uc5d0 \uc88b\uc9c0 \uc54a\ub2e4."),Object(i.b)("h2",{id:"\uac1d\uccb4-\ud480"},"\uac1d\uccb4 \ud480"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ub2e8\uc21c\ud788 \uac1d\uccb4 \uc0dd\uc131\uc744 \ud53c\ud558\uae30 \uc704\ud55c \uac1d\uccb4 \ud480 \uc0dd\uc131 X",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ucf54\ub4dc\uac00 \uc5b4\ub824\uc6cc\uc9d0, \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc744 \ub298\ub9ac\uace0 \uc131\ub2a5\uc744 \uc800\ud558"))),Object(i.b)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ubca0\uc774\uc2a4 \uc5f0\uacb0\uc740 \uc0dd\uc131 \ube44\uc6a9\uc774 \ube44\uc308 \u2192 \ud480 \uc0dd\uc131 O")),Object(i.b)("h2",{id:"\ud0c0\ud611\uc810"},"\ud0c0\ud611\uc810"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JVM \uc740 \ubcc4\ub2e4\ub978 \uc77c\uc744 \ud558\uc9c0 \uc54a\ub294 \uc791\uc740 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0 \ud68c\uc218\ud558\ub294 \uc77c\uc774 \ud06c\uac8c \ubd80\ub2f4\ub418\uc9c0 \uc54a\uc74c"),Object(i.b)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub7a8\uc758 \uba85\ud655\uc131, \uac04\uacb0\uc131, \uae30\ub2a5\uc744 \uc704\ud574\uc11c \uac1d\uccb4\ub97c \ucd94\uac00\ub85c \uc0dd\uc131\ud558\ub294 \uac83\uc774\ub77c\uba74 \uc77c\ubc18\uc801\uc73c\ub85c \uc88b\uc740 \uc77c"),Object(i.b)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4\uba74 \uae30\uc874 \uac1d\uccb4\ub97c \uc7ac\uc0ac\uc6a9 \ud558\uc9c0\ub9c8\ub77c ",Object(i.b)("a",{parentName:"li",href:"/docs/java/effective-java/ch8/ITEM50"},"50")," ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uc7ac\uc0ac\uc6a9 \ud588\uc744 \ub54c\uc758 \ud53c\ud574 \u2192 \ubc84\uadf8\uc640 \ubcf4\uc548\uad6c\uba4d"),Object(i.b)("li",{parentName:"ul"},"\ubd88\ud544\uc694\ud55c \uac1d\uccb4 \uc0dd\uc131 \u2192 \ucf54\ub4dc \ud615\ud0dc\uc640 \uc131\ub2a5\uc5d0\ub9cc \uc601\ud5a5"),Object(i.b)("li",{parentName:"ul"},"\uac1d\uccb4 \ud2b9\uc131\uc5d0 \ub9de\uac8c \uc0ac\uc6a9")))),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://coding-factory.tistory.com/536"},"== \uc640 equals")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/6_%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C_%EA%B0%9D%EC%B2%B4_%EC%83%9D%EC%84%B1%EC%9D%84_%ED%94%BC%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/6_%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C_%EA%B0%9D%EC%B2%B4_%EC%83%9D%EC%84%B1%EC%9D%84_%ED%94%BC%ED%95%98%EB%9D%BC_%EC%8B%A0%EC%84%A0%EC%98%81.md"))))}o.isMDXComponent=!0},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),o=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,O=p["".concat(l,".").concat(m)]||p[m]||j[m]||i;return n?r.a.createElement(O,c(c({ref:t},u),{},{components:n})):r.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);