(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),c=(n(0),n(241)),i={},l={unversionedId:"java/effective-java/ch4/ITEM25",id:"java/effective-java/ch4/ITEM25",isDocsHomePage:!1,title:"ITEM25",description:"ITEM25 \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4\ub294 \ud55c \ud30c\uc77c\uc5d0 \ud558\ub098\ub9cc \ub2f4\uc73c\ub77c",source:"@site/docs/java/effective-java/ch4/ITEM25.md",slug:"/java/effective-java/ch4/ITEM25",permalink:"/docs/java/effective-java/ch4/ITEM25",version:"current"},s=[{value:"\ud55c \ud30c\uc77c\uc5d0 \uba40\ud2f0 \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4",id:"\ud55c-\ud30c\uc77c\uc5d0-\uba40\ud2f0-\ud1b1\ub808\ubca8-\ud074\ub798\uc2a4",children:[{value:"\ucef4\ud30c\uc77c\ub7ec\uc5d0 \ub123\ub294 \uba85\ub839\uc5b4\uc758 \uc18c\uc2a4\ud30c\uc77c \uc21c\uc11c\uc5d0 \ub530\ub77c \ub3d9\uc791\uc774 \ub2ec\ub77c\uc9c0\ub294 \ubb38\uc81c",id:"\ucef4\ud30c\uc77c\ub7ec\uc5d0-\ub123\ub294-\uba85\ub839\uc5b4\uc758-\uc18c\uc2a4\ud30c\uc77c-\uc21c\uc11c\uc5d0-\ub530\ub77c-\ub3d9\uc791\uc774-\ub2ec\ub77c\uc9c0\ub294-\ubb38\uc81c",children:[]}]},{value:"\ubb38\uc81c \ud574\uacb0",id:"\ubb38\uc81c-\ud574\uacb0",children:[]}],b={toc:s};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"item25-\ud1b1\ub808\ubca8-\ud074\ub798\uc2a4\ub294-\ud55c-\ud30c\uc77c\uc5d0-\ud558\ub098\ub9cc-\ub2f4\uc73c\ub77c"},"ITEM25 \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4\ub294 \ud55c \ud30c\uc77c\uc5d0 \ud558\ub098\ub9cc \ub2f4\uc73c\ub77c"),Object(c.b)("h2",{id:"\ud55c-\ud30c\uc77c\uc5d0-\uba40\ud2f0-\ud1b1\ub808\ubca8-\ud074\ub798\uc2a4"},"\ud55c \ud30c\uc77c\uc5d0 \uba40\ud2f0 \ud1b1\ub808\ubca8 \ud074\ub798\uc2a4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec \uc5d0\ub7ec\ub294 \uc548\ub09c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc544\ubb34\ub7f0 \ub4dd\uc774 \uc5c6\ub2e4"),Object(c.b)("li",{parentName:"ul"},"\uc2ec\uac01\ud55c \uc704\ud5d8\uc774 \uc788\uc744 \uc218 \uc788\ub2e4.")),Object(c.b)("p",null,"Utensil.java"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'class Utensil {\n    static final String NAME = "pan";\n}\nclass Dessert {\n    static final String NAME = "cake";\n}\n')),Object(c.b)("p",null,"Dessert.java"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'class Utensil {\n    static final String NAME = "pot";\n}\nclass Dessert {\n    static final String NAME = "pie";\n}\n')),Object(c.b)("p",null,"\ub611\uac19\uc740 \ud074\ub798\uc2a4\uc758 \uc774\ub984\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \ub450\uac00\uc9c0 \ud30c\uc77c\uc774 \uc874\uc7ac\ud560 \ub54c, \uc544\ub798 \ucef4\ud30c\uc77c \uacb0\uacfc\ub294 \ubb34\uc5c7\uc77c\uae4c? "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public class Main {\n    public static void main(String[] args) {\n        System.out.println(Utensil.NAME + Dessert.NAME); // what ??\n    }   \n}\n")),Object(c.b)("h3",{id:"\ucef4\ud30c\uc77c\ub7ec\uc5d0-\ub123\ub294-\uba85\ub839\uc5b4\uc758-\uc18c\uc2a4\ud30c\uc77c-\uc21c\uc11c\uc5d0-\ub530\ub77c-\ub3d9\uc791\uc774-\ub2ec\ub77c\uc9c0\ub294-\ubb38\uc81c"},"\ucef4\ud30c\uc77c\ub7ec\uc5d0 \ub123\ub294 \uba85\ub839\uc5b4\uc758 \uc18c\uc2a4\ud30c\uc77c \uc21c\uc11c\uc5d0 \ub530\ub77c \ub3d9\uc791\uc774 \ub2ec\ub77c\uc9c0\ub294 \ubb38\uc81c"),Object(c.b)("h4",{id:"javac-mainjava-dessertjava"},Object(c.b)("inlineCode",{parentName:"h4"},"javac Main.java Dessert.java")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \uc624\ub958, Utensil, Dessert \ud074\ub798\uc2a4\uc758 \uc911\ubcf5 \uc815\uc758\ub97c \uc54c\ub9bc"),Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\ub294 ",Object(c.b)("inlineCode",{parentName:"li"},"Main.java")," \ub97c \ucef4\ud30c\uc77c \ud55c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uadf8 \uc548\uc5d0\uc11c Dessert \ucc38\uc870\ubcf4\ub2e4 \uba3c\uc800 \ub098\uc624\ub294 Utensil \ucc38\uc870\ub97c \ub9cc\ub098\uba74 ",Object(c.b)("inlineCode",{parentName:"li"},"Utensil.java")," \ud30c\uc77c\uc758 Utensil \uacfc Dessert \ub97c \ucc3e\uc544\ub0c4"),Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 \ub450 \ubc88\uc9f8 \uba85\ub839\uc904 \uc778\uc218\ub85c \ub118\uc5b4\uc628 ",Object(c.b)("inlineCode",{parentName:"li"},"Dessert.java")," \ub97c \ucc98\ub9ac\ud558\ub824 \ud560 \ub54c, \uac19\uc740 \ud074\ub798\uc2a4\uc758 \uc815\uc758\ub97c \uac10\uc9c0\ud55c\ub2e4.")),Object(c.b)("h4",{id:"javac-mainjava-javac-mainjava-utensiljava"},Object(c.b)("inlineCode",{parentName:"h4"},"javac Main.java"),", ",Object(c.b)("inlineCode",{parentName:"h4"},"javac Main.java Utensil.java")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"pencake \ucd9c\ub825")),Object(c.b)("h4",{id:"javac-dessertjava-mainjava"},Object(c.b)("inlineCode",{parentName:"h4"},"javac Dessert.java Main.java")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"potpie \ucd9c\ub825")),Object(c.b)("h2",{id:"\ubb38\uc81c-\ud574\uacb0"},"\ubb38\uc81c \ud574\uacb0"),Object(c.b)("p",null,"\ud1b1\ub808\ubca8 \ud074\ub798\uc2a4 (Utensil, Dessert) \ub97c \uc11c\ub85c \ub2e4\ub978 \uc18c\uc2a4 \ud30c\uc77c\ub85c \ubd84\ub9ac\ud55c\ub2e4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uad73\uc774 \ud55c\ud30c\uc77c\uc5d0 \ub2f4\uace0 \uc2f6\uc73c\uba74 \uc815\uc801 \uba64\ubc84 \ud074\ub798\uc2a4","[24]","\ub97c \uc0ac\uc6a9\ud55c\ub2e4")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'public class Test {\n    public static void main(String[] args) {\n        System.out.println(Utensil.Name + Dessert.NAME);\n    }\n    \n    private static class Utensil {\n        static final String NAME = "pen";\n    }\n    \n    private static class Dessert {\n        static final String NAME = "cake";\n    }\n}\n')))}o.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=o(n),j=a,v=p["".concat(i,".").concat(j)]||p[j]||u[j]||c;return n?r.a.createElement(v,l(l({ref:t},b),{},{components:n})):r.a.createElement(v,l({ref:t},b))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=j;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);