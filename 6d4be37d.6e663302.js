(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{240:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),r=(a(0),a(456));const i={title:"25. \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4\ub294 \ud55c \ud30c\uc77c\uc5d0 \ud558\ub098\ub9cc \ub2f4\uc73c\ub77c"},c={unversionedId:"java/effective-java/ch4/ITEM25",id:"java/effective-java/ch4/ITEM25",isDocsHomePage:!1,title:"25. \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4\ub294 \ud55c \ud30c\uc77c\uc5d0 \ud558\ub098\ub9cc \ub2f4\uc73c\ub77c",description:"\ud55c \ud30c\uc77c\uc5d0 \uba40\ud2f0 \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4",source:"@site/docs/java/effective-java/ch4/ITEM25.md",slug:"/java/effective-java/ch4/ITEM25",permalink:"/docs/java/effective-java/ch4/ITEM25",version:"current",sidebar:"effectiveJava",previous:{title:"24. \uba64\ubc84 \ud074\ub798\uc2a4\ub294 \ub418\ub3c4\ub85d static \uc73c\ub85c \ub9cc\ub4e4\ub77c",permalink:"/docs/java/effective-java/ch4/ITEM24"},next:{title:"ch5 \uc81c\ub124\ub9ad Generic",permalink:"/docs/java/effective-java/ch5/index"}},l=[{value:"\ud55c \ud30c\uc77c\uc5d0 \uba40\ud2f0 \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4",id:"\ud55c-\ud30c\uc77c\uc5d0-\uba40\ud2f0-\ud1b1\ub808\ubca8-\ud074\ub798\uc2a4",children:[{value:"\ucef4\ud30c\uc77c\ub7ec\uc5d0 \ub123\ub294 \uba85\ub839\uc5b4\uc758 \uc18c\uc2a4\ud30c\uc77c \uc21c\uc11c\uc5d0 \ub530\ub77c \ub3d9\uc791\uc774 \ub2ec\ub77c\uc9c0\ub294 \ubb38\uc81c",id:"\ucef4\ud30c\uc77c\ub7ec\uc5d0-\ub123\ub294-\uba85\ub839\uc5b4\uc758-\uc18c\uc2a4\ud30c\uc77c-\uc21c\uc11c\uc5d0-\ub530\ub77c-\ub3d9\uc791\uc774-\ub2ec\ub77c\uc9c0\ub294-\ubb38\uc81c",children:[]}]},{value:"\ubb38\uc81c \ud574\uacb0",id:"\ubb38\uc81c-\ud574\uacb0",children:[]}],s={toc:l};function o({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\ud55c-\ud30c\uc77c\uc5d0-\uba40\ud2f0-\ud1b1\ub808\ubca8-\ud074\ub798\uc2a4"},"\ud55c \ud30c\uc77c\uc5d0 \uba40\ud2f0 \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec \uc5d0\ub7ec\ub294 \uc548\ub09c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc544\ubb34\ub7f0 \ub4dd\uc774 \uc5c6\ub2e4"),Object(r.b)("li",{parentName:"ul"},"\uc2ec\uac01\ud55c \uc704\ud5d8\uc774 \uc788\uc744 \uc218 \uc788\ub2e4.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Utensil.java"',title:'"Utensil.java"'},'class Utensil {\n    static final String NAME = "pan";\n}\nclass Dessert {\n    static final String NAME = "cake";\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:'title="Dessert.java"',title:'"Dessert.java"'},'class Utensil {\n    static final String NAME = "pot";\n}\nclass Dessert {\n    static final String NAME = "pie";\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\ub611\uac19\uc740 \ud074\ub798\uc2a4\uc758 \uc774\ub984\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \ub450\uac00\uc9c0 \ud30c\uc77c"),"\uc774 \uc874\uc7ac\ud560 \ub54c, \uc544\ub798 \ucef4\ud30c\uc77c \uacb0\uacfc\ub294 \ubb34\uc5c7\uc77c\uae4c? "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public class Main {\n    public static void main(String[] args) {\n        System.out.println(Utensil.NAME + Dessert.NAME); // what ??\n    }   \n}\n")),Object(r.b)("h3",{id:"\ucef4\ud30c\uc77c\ub7ec\uc5d0-\ub123\ub294-\uba85\ub839\uc5b4\uc758-\uc18c\uc2a4\ud30c\uc77c-\uc21c\uc11c\uc5d0-\ub530\ub77c-\ub3d9\uc791\uc774-\ub2ec\ub77c\uc9c0\ub294-\ubb38\uc81c"},"\ucef4\ud30c\uc77c\ub7ec\uc5d0 \ub123\ub294 \uba85\ub839\uc5b4\uc758 \uc18c\uc2a4\ud30c\uc77c \uc21c\uc11c\uc5d0 \ub530\ub77c \ub3d9\uc791\uc774 \ub2ec\ub77c\uc9c0\ub294 \ubb38\uc81c"),Object(r.b)("h4",{id:"javac-mainjava-dessertjava"},Object(r.b)("inlineCode",{parentName:"h4"},"javac Main.java Dessert.java")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \uc624\ub958, Utensil, Dessert \ud074\ub798\uc2a4\uc758 \uc911\ubcf5 \uc815\uc758\ub97c \uc54c\ub9bc"),Object(r.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\ub294 ",Object(r.b)("inlineCode",{parentName:"li"},"Main.java")," \ub97c \ucef4\ud30c\uc77c \ud55c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uadf8 \uc548\uc5d0\uc11c Dessert \ucc38\uc870\ubcf4\ub2e4 \uba3c\uc800 \ub098\uc624\ub294 Utensil \ucc38\uc870\ub97c \ub9cc\ub098\uba74 ",Object(r.b)("inlineCode",{parentName:"li"},"Utensil.java")," \ud30c\uc77c\uc758 Utensil \uacfc Dessert \ub97c \ucc3e\uc544\ub0c4"),Object(r.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 \ub450 \ubc88\uc9f8 \uba85\ub839\uc904 \uc778\uc218\ub85c \ub118\uc5b4\uc628 ",Object(r.b)("inlineCode",{parentName:"li"},"Dessert.java")," \ub97c \ucc98\ub9ac\ud558\ub824 \ud560 \ub54c, \uac19\uc740 \ud074\ub798\uc2a4\uc758 \uc815\uc758\ub97c \uac10\uc9c0\ud55c\ub2e4.")),Object(r.b)("h4",{id:"javac-mainjava-javac-mainjava-utensiljava"},Object(r.b)("inlineCode",{parentName:"h4"},"javac Main.java"),", ",Object(r.b)("inlineCode",{parentName:"h4"},"javac Main.java Utensil.java")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"pencake \ucd9c\ub825")),Object(r.b)("h4",{id:"javac-dessertjava-mainjava"},Object(r.b)("inlineCode",{parentName:"h4"},"javac Dessert.java Main.java")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"potpie \ucd9c\ub825")),Object(r.b)("h2",{id:"\ubb38\uc81c-\ud574\uacb0"},"\ubb38\uc81c \ud574\uacb0"),Object(r.b)("p",null,"\ud1b1\ub808\ubca8 \ud074\ub798\uc2a4 (Utensil, Dessert) \ub97c \uc11c\ub85c \ub2e4\ub978 \uc18c\uc2a4 \ud30c\uc77c\ub85c \ubd84\ub9ac\ud55c\ub2e4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uad73\uc774 \ud55c\ud30c\uc77c\uc5d0 \ub2f4\uace0 \uc2f6\uc73c\uba74 \uc815\uc801 \uba64\ubc84 \ud074\ub798\uc2a4",Object(r.b)("a",{parentName:"li",href:"/docs/java/effective-java/ch4/ITEM24"},"24")," \ub97c \uc0ac\uc6a9\ud55c\ub2e4")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class Test {\n    public static void main(String[] args) {\n        System.out.println(Utensil.Name + Dessert.NAME);\n    }\n    \n    private static class Utensil {\n        static final String NAME = "pen";\n    }\n    \n    private static class Dessert {\n        static final String NAME = "cake";\n    }\n}\n')))}o.isMDXComponent=!0},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,v=p["".concat(c,".").concat(u)]||p[u]||j[u]||i;return a?r.a.createElement(v,l(l({ref:t},o),{},{components:a})):r.a.createElement(v,l({ref:t},o))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);