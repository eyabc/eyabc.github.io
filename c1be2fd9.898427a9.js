(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{369:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return b}));var t=r(3),a=(r(0),r(447));const c={title:"40. @Override \uc560\ub108\ud14c\uc774\uc158\uc744 \uc77c\uad00\ub418\uac8c \uc0ac\uc6a9\ud558\ub77c"},i={unversionedId:"java/effective-java/ch6/ITEM40",id:"java/effective-java/ch6/ITEM40",isDocsHomePage:!1,title:"40. @Override \uc560\ub108\ud14c\uc774\uc158\uc744 \uc77c\uad00\ub418\uac8c \uc0ac\uc6a9\ud558\ub77c",description:"@Override",source:"@site/docs/java/effective-java/ch6/ITEM40.md",slug:"/java/effective-java/ch6/ITEM40",permalink:"/docs/java/effective-java/ch6/ITEM40",version:"current",sidebar:"effectiveJava",previous:{title:"39. \uba85\uba85 \ud328\ud134\ubcf4\ub2e4 \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch6/ITEM39"},next:{title:"ITEM41",permalink:"/docs/java/effective-java/ch6/ITEM41"}},l=[{value:"@Override",id:"override",children:[]},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",children:[]},{value:"\ucd94\uc0c1\uba54\uc11c\ub4dc \uc7ac\uc815\uc758",id:"\ucd94\uc0c1\uba54\uc11c\ub4dc-\uc7ac\uc815\uc758",children:[]},{value:"\uc778\ud130\ud398\uc774\uc2a4 \uba54\uc11c\ub4dc \uc7ac\uc815\uc758",id:"\uc778\ud130\ud398\uc774\uc2a4-\uba54\uc11c\ub4dc-\uc7ac\uc815\uc758",children:[]}],o={toc:l};function b({components:e,...n}){return Object(a.b)("wrapper",Object(t.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"override"},"@Override"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uc120\uc5b8\uc5d0\ub9cc \ub2ec \uc218 \uc788\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\uc0c1\uc704 \ud0c0\uc785\uc758 \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758 \ud588\uc74c\uc744 \ub73b\ud55c\ub2e4.")),Object(a.b)("h2",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc7ac\uc815\uc758 \ud55c \ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc5d0 @Override \ub97c \uc758\uc2dd\uc801\uc73c\ub85c \ub2ec\uba74,\n\uc6b0\ub9ac\uac00 \uc2e4\uc218\ud588\uc744\ub54c \ucef4\ud30c\uc77c\ub7ec\uac00 \ubc14\ub85c \uc54c\ub824\uc900\ub2e4.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc77c\uad00\ub418\uac8c \uc0ac\uc6a9\ud558\uba74 \uc5ec\ub7ec\uac00\uc9c0 \uc545\uba85 \ub192\uc740 \ubc84\uadf8\ub4e4\uc744 \uc608\ubc29\ud574 \uc900\ub2e4. ")),Object(a.b)("p",null,"\uc601\uc5b4 \uc54c\ud30c\ubcb3 2\uac1c\ub85c \uad6c\uc131\ub41c \ubb38\uc790\uc5f4\uc744 \ud45c\ud604\ud558\ub294 \ud074\ub798\uc2a4 - \ubc84\uadf8\ub97c \ucc3e\uc544\ubcf4\uc790"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public class Bigram {\n    private final char first;\n    private final char second;\n\n    public Bigram(char first, char second) {\n        this.first = first;\n        this.second = second;\n    }\n\n    public boolean equals(Bigram b) {\n        return b.first == first & b.second == second;        \n    }\n\n    public int hashCode() {\n        return 31 * first + second;\n    }\n\n    /*\n        \ub611\uac19\uc740 \uc18c\ubb38\uc790 2\uac1c\ub85c \uad6c\uc131\ub41c \ubc14\uc774\uadf8\ub7a8 26\uac1c\ub97c 10\ubc88 \ubc18\ubcf5\ud574\uc11c \uc9d1\ud569\uc5d0 \ucd94\uac00\ud558\uace0 \uc788\ub2e4.\n        Set \uc740 \uc911\ubcf5\uc744 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c 26\uc774 \ucd9c\ub825\ub420 \uac83 \uac19\uc9c0\ub9cc \uc2e4\uc81c\ub85c 260\uc774 \ucd9c\ub825\ub41c\ub2e4.\n    */\n    public static void main(String[] args) {;\n        Set<Bigram> s = new HashSet<>();\n        for (int i = 0; i < 10; i++) \n            for (char ch = 'a'; ch <= 'z'; ch++)\n                s.add(new Bigram(ch, ch));\n        System.out.println(s.size());\n    }   \n}                                                                                                          b\n")),Object(a.b)("p",null,"equals \uc640 hashCode \uc744 \uc7ac\uc815\uc758 ",Object(a.b)("em",{parentName:"p"},"overriding")," \uc774 \uc544\ub2cc, \ub2e4\uc911 \uc815\uc758 ",Object(a.b)("em",{parentName:"p"},"overloading")," ","[52]"," \uc744 \ud558\uc600\uae30 \ub54c\ubb38"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uc758 \uc2dc\uadf8\ub2c8\ucc98\uac00 \ub2e4\ub974\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"Object \uc758 equals \ub97c \uc7ac\uc815\uc758\ud558\ub824\uba74 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc744 Object \ub85c \ud574\uc57c\ud55c\ub2e4.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"@Override")," \ub97c \uc0ac\uc6a9\ud558\uc5ec \uc7ac\uc815\uc758\ud55c\ub2e4\ub294 \uc758\ub3c4\ub97c \uba85\uc2dc\ud55c\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"@Override public boolean equals(Bigram b) {\n    return b.first == first && b.second == second;\n}\n")),Object(a.b)("p",null,"\uc774 \ub54c \ub9e4\uac1c\ubcc0\uc218\uac00 Object \ud0c0\uc785\uc774 \uc544\ub2c8\ubbc0\ub85c \ucef4\ud30c\uc77c \uc624\ub958\ub97c \ubc1c\uacac\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"@Override public boolean equals(Object o) {\n    if (!(o instanceof Bigram))\n        return false;\n    Bigram b = (Bigram) o;\n    retur b.first == first && b.second == second;\n}\n")),Object(a.b)("p",null,"@Override \ub97c \uc0ac\uc6a9\ud558\uba74 ",Object(a.b)("strong",{parentName:"p"},"\uc0c1\uc704 \uba54\uc11c\ub4dc\ub97c \ub354 \uc815\ud655\ud788 \uc7ac\uc815\uc758")," \ud560 \uc218 \uc788\ub2e4."),Object(a.b)("h2",{id:"\ucd94\uc0c1\uba54\uc11c\ub4dc-\uc7ac\uc815\uc758"},"\ucd94\uc0c1\uba54\uc11c\ub4dc \uc7ac\uc815\uc758"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uad73\uc774 @Override \ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\ub3c4, \uc7ac\uc815\uc758 \uad00\ub828 \ucef4\ud30c\uc77c \uc624\ub958\ub97c \uc54c\ub824\uc900\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\uc77c\uad00\uc801\uc73c\ub85c @Override \ub97c \ubd99\uc5ec\uc918\ub3c4 \uc88b\ub2e4.")),Object(a.b)("h2",{id:"\uc778\ud130\ud398\uc774\uc2a4-\uba54\uc11c\ub4dc-\uc7ac\uc815\uc758"},"\uc778\ud130\ud398\uc774\uc2a4 \uba54\uc11c\ub4dc \uc7ac\uc815\uc758"),Object(a.b)("p",null,"\ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uae30 \uc2dc\uc791\ud558\uba74\uc11c,"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4 \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud55c \uba54\uc11c\ub4dc\uc5d0\ub3c4 @Override \ud560 \uc218 \uc788\ub2e4.")))}b.isMDXComponent=!0},447:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=t,f=p["".concat(i,".").concat(d)]||p[d]||s[d]||c;return r?a.a.createElement(f,l(l({ref:n},b),{},{components:r})):a.a.createElement(f,l({ref:n},b))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);