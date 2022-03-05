(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{241:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),l=a(7),r=(a(0),a(455)),c={title:"3. private \uc0dd\uc131\uc790\ub098 \uc5f4\uac70 \ud0c0\uc785\uc73c\ub85c \uc2f1\uae00\ud134\uc784\uc744 \ubcf4\uc99d\ud558\ub77c"},b={unversionedId:"java/effective-java/ch2/ITEM3",id:"java/effective-java/ch2/ITEM3",isDocsHomePage:!1,title:"3. private \uc0dd\uc131\uc790\ub098 \uc5f4\uac70 \ud0c0\uc785\uc73c\ub85c \uc2f1\uae00\ud134\uc784\uc744 \ubcf4\uc99d\ud558\ub77c",description:"Singleton",source:"@site/docs/java/effective-java/ch2/ITEM3.md",slug:"/java/effective-java/ch2/ITEM3",permalink:"/docs/java/effective-java/ch2/ITEM3",version:"current",sidebar:"effectiveJava",previous:{title:"2. \uc0dd\uc131\uc790\uc5d0 \ub9e4\uac1c\ubcc0\uc218\uac00 \ub9ce\ub2e4\uba74 \ube4c\ub354\ub97c \uace0\ub824\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM2"},next:{title:"4. \uc778\uc2a4\ud134\uc2a4\ud654\ub97c \ub9c9\uc73c\ub824\uac70\ub4e0 private \uc0dd\uc131\uc790\ub97c \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM4"}},i=[{value:"Singleton",id:"singleton",children:[{value:"\ub300\uc0c1",id:"\ub300\uc0c1",children:[]},{value:"\ud55c\uacc4",id:"\ud55c\uacc4",children:[]}]},{value:"Singleton \uc0dd\uc131 \ubc29\uc2dd",id:"singleton-\uc0dd\uc131-\ubc29\uc2dd",children:[{value:"1. public static final \ud544\ub4dc \ubc29\uc2dd\uc758 \uc2f1\uae00\ud134",id:"1-public-static-final-\ud544\ub4dc-\ubc29\uc2dd\uc758-\uc2f1\uae00\ud134",children:[]},{value:"2. \uc815\uc801 \ud329\ud130\ub9ac \ubc29\uc2dd\uc758 \uc2f1\uae00\ud134",id:"2-\uc815\uc801-\ud329\ud130\ub9ac-\ubc29\uc2dd\uc758-\uc2f1\uae00\ud134",children:[]},{value:"3. \uc6d0\uc18c\uac00 \ud558\ub098\uc778 \uc5f4\uac70 \ud0c0\uc785 \uc120\uc5b8",id:"3-\uc6d0\uc18c\uac00-\ud558\ub098\uc778-\uc5f4\uac70-\ud0c0\uc785-\uc120\uc5b8",children:[]}]},{value:"Reference",id:"reference",children:[]}],p={toc:i};function o(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"singleton"},"Singleton"),Object(r.b)("hr",null),Object(r.b)("p",null,"\uc778\uc2a4\ud134\uc2a4\ub97c \uc624\uc9c1 \ud558\ub098\ub9cc \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ud074\ub798\uc2a4"),Object(r.b)("h3",{id:"\ub300\uc0c1"},"\ub300\uc0c1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud568\uc218\uc640 \uac19\uc740 \ubb34\uc0c1\ud0dc \uac1d\uccb4"),Object(r.b)("li",{parentName:"ul"},"\uc124\uacc4\uc0c1 \uc720\uc77c\ud574\uc57c \ud558\ub294 \uc2dc\uc2a4\ud15c \ucef4\ud3ec\ub10c\ud2b8")),Object(r.b)("h3",{id:"\ud55c\uacc4"},"\ud55c\uacc4"),Object(r.b)("p",null,"\uc2f1\uae00\ud134 \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ud14c\uc2a4\ud2b8\ud558\uae30 \uc5b4\ub835\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc2f1\uae00\ud134 \uc778\uc2a4\ud134\uc2a4\ub97c mock \uad6c\ud604\uc73c\ub85c \ub300\uccb4\ud560 \uc218 \uc5c6\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ubc29\ubc95\uc740 \uc788\ub2e4. \ud0c0\uc785\uc744 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc815\uc758\ud55c \ub2e4\uc74c, \uadf8 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud574 \uc2f1\uae00\ud134\uc73c\ub85c \ub9cc\ub4e0\ub2e4. ")),Object(r.b)("h2",{id:"singleton-\uc0dd\uc131-\ubc29\uc2dd"},"Singleton \uc0dd\uc131 \ubc29\uc2dd"),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc0dd\uc131\uc790\ub294 private \uc73c\ub85c \uac10\ucd98\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc720\uc77c\ud55c \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uc218\ub2e8\uc73c\ub85c ",Object(r.b)("inlineCode",{parentName:"li"},"public static")," \uba64\ubc84\ub97c \ud558\ub098 \ub9cc\ub4e0\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ub9ac\ud50c\ub809\uc158 \uacf5\uaca9 : \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c AccessibleObject.setAccessible ",Object(r.b)("a",{parentName:"li",href:"/docs/java/effective-java/ch9/ITEM65"},"65")," \uc744 \uc0ac\uc6a9\ud574 private \uc744 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 \ucde8\uc57d\uc810",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc0dd\uc131\uc790\uc5d0\uc11c \ub450 \ubc88\uc9f8 \uac1d\uccb4\uac00 \uc0dd\uc131\ub418\ub824 \ud560 \ub54c \uc608\uc678\ub97c \ub358\uc9c0\ub294 \ucf54\ub4dc\ub97c \ucd94\uac00\ud55c\ub2e4.")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://sas-study.tistory.com/275"},"\ub9ac\ud50c\ub809\uc158 API"),"     "),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub41c \ubc14\uc774\ud2b8 \ucf54\ub4dc\ub97c \ud1b5\ud574 \ud574\ub2f9 \ud074\ub798\uc2a4\uc758 \uba54\uc18c\ub4dc, \ud0c0\uc785, \ubcc0\uc218\uae4c\uc9c0 \uc811\uadfc\uac00\ub2a5\ud55c \uc790\ubc14 API"))),Object(r.b)("h3",{id:"1-public-static-final-\ud544\ub4dc-\ubc29\uc2dd\uc758-\uc2f1\uae00\ud134"},"1. public static final \ud544\ub4dc \ubc29\uc2dd\uc758 \uc2f1\uae00\ud134"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public class Elvis {\n    public static final Elvis INSTANCE = new Elvis();\n    private Elvis() { /* ...*/ }\n    \n    public void leaveTheBuilding() { /* ... */ } \n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud574\ub2f9 \ud074\ub798\uc2a4\uac00 \uc2f1\uae00\ud134\uc784\uc774 API \uc5d0 \uba85\ubc31\ud788 \ub4dc\ub7ec\ub09c\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uac04\uacb0\ud558\ub2e4")),Object(r.b)("h3",{id:"2-\uc815\uc801-\ud329\ud130\ub9ac-\ubc29\uc2dd\uc758-\uc2f1\uae00\ud134"},"2. \uc815\uc801 \ud329\ud130\ub9ac \ubc29\uc2dd\uc758 \uc2f1\uae00\ud134"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public class Elvis {\n    private static final Elvis INSTANCE = new Elvis();\n    private Elvis() { /*... */ }\n    public static Elvis getInstance() { return INSTANCE; }\n}\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"API \ub97c \ubc14\uafb8\uc9c0 \uc54a\uace0\ub3c4 \uc2f1\uae00\ud134\uc774 \uc544\ub2c8\uac8c \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc \ubcc4\ub85c \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\ub97c \ub118\uaca8\uc8fc\uac8c \ud560 \uc218 \uc788\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"DataSourceLookupKeyContextHolder \uad6c\ud604.."))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\uc815\uc801 \ud329\ud130\ub9ac\ub97c \uc81c\ub124\ub9ad \uc2f1\uae00\ud134 \ud329\ud130\ub9ac\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub2e4 ",Object(r.b)("a",{parentName:"p",href:"/docs/java/effective-java/ch5/ITEM30"},"30")," ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\uc815\uc801 \ud329\ud130\ub9ac\uc758 \uba54\uc11c\ub4dc \ucc38\uc870\ub97c \uacf5\uae09\uc790(supplier) \ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4 ",Object(r.b)("a",{parentName:"p",href:"/docs/java/effective-java/ch7/ITEM43"},"43"),"  ",Object(r.b)("a",{parentName:"p",href:"/docs/java/effective-java/ch7/ITEM44"},"44")))),Object(r.b)("p",null,"\uc774\ub7ec\ud55c \uc7a5\uc810\ub4e4\uc774 \uad73\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\uba74 public \ud544\ub4dc \ubc29\uc2dd\uc774 \uc88b\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://m.blog.naver.com/zzang9ha/222087025042"},"Supplier Interface")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218\ub97c \ubc1b\uc9c0 \uc54a\uace0 \ub2e8\uc21c\ud788 \ubb34\uc5c7\uc778\uac00\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ud615 \uc778\ud130\ud398\uc774\uc2a4 -> Lazy Evaluation"))),Object(r.b)("h4",{id:"\uc2f1\uae00\ud134-\ud074\ub798\uc2a4\uc758-\uc9c1\ub82c\ud654-12"},"\uc2f1\uae00\ud134 \ud074\ub798\uc2a4\uc758 \uc9c1\ub82c\ud654 ",Object(r.b)("a",{parentName:"h4",href:"/docs/java/effective-java/ch3/ITEM12"},"12")),Object(r.b)("p",null,"Serializable \uc758 \uad6c\ud604/\uc120\uc5b8 \uc758 \ud55c\uacc4",Object(r.b)("br",{parentName:"p"}),"\n","\u2192 \uc9c1\ub82c\ud654\ub41c \uc778\uc2a4\ud134\uc2a4\ub97c \uc5ed\uc9c1\ub82c\ud654 \ud560 \ub54c\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \uc778\uc2a4\ud134\uc2a4\uac00 \ub9cc\ub4e4\uc5b4\uc9d0"),Object(r.b)("p",null,"\ubb38\uc81c\ud574\uacb0 "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\ubaa8\ub4e0 \uc778\uc2a4\ud134\uc2a4 \ud544\ub4dc\ub97c \uc77c\uc2dc\uc801(transient) \ub85c \uc120\uc5b8"),Object(r.b)("li",{parentName:"ol"},"Elvis \ud074\ub798\uc2a4\uc5d0 \ub2e4\uc74c\uc758 readResolve \uba54\uc11c\ub4dc \uc81c\uacf5 ","[89]")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"private Object readResolve() {\n    // \uc9c4\uc9dc 'Elvis' \ub97c \ubc18\ud658\ud558\uace0, \uac00\uc9dc Elvis \ub294 \uac00\ube44\uc9c0 \uceec\ub809\ud130\uc5d0 \ub9e1\uae34\ub2e4.\n    return INSTANCE;\n}\n")),Object(r.b)("h3",{id:"3-\uc6d0\uc18c\uac00-\ud558\ub098\uc778-\uc5f4\uac70-\ud0c0\uc785-\uc120\uc5b8"},"3. \uc6d0\uc18c\uac00 \ud558\ub098\uc778 \uc5f4\uac70 \ud0c0\uc785 \uc120\uc5b8"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public enum Elvis {\n    INSTANCE;\n    \n    public void leaveTheBuilding() { /* ...*/ }\n}\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"public \ud544\ub4dc \ubc29\uc2dd\ubcf4\ub2e4 \ub354 \uac04\uacb0\ud558\ub2e4"),Object(r.b)("li",{parentName:"ol"},"\ucd94\uac00 \ub178\ub825\uc5c6\uc774 \uc9c1\ub82c\ud654 \uac00\ub2a5"),Object(r.b)("li",{parentName:"ol"},"\ubcf5\uc7a1\ud55c \uc9c1\ub82c\ud654 \uc0c1\ud669\uc774\ub098 \ub9ac\ud50c\ub809\uc158 \uacf5\uaca9\uc744 \uc644\ubcbd\ud788 \ub9c9\uc544\uc900\ub2e4.")),Object(r.b)("p",null,"\ub300\ubd80\ubd84\uc758 \uc0c1\ud669, \uc2f1\uae00\ud134\uc744 \ub9cc\ub4dc\ub294 \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95"),Object(r.b)("p",null,"\ud55c\uacc4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub9cc\ub4dc\ub824\ub294 \uc2f1\uae00\ud134\uc774 Enum \uc678\uc758 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ud574\uc57c \ud55c\ub2e4\uba74 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\uc5b4\ub5a4 \uc0c1\ud669\uc774 \uc788\uc744\uae4c, Spring \uc744 \uc4f0\ub294 \uc0c1\ud669\uc5d0\uc11c\ub3c4 \uc2f1\uae00\ud134 \ud328\ud134\uc744 \uc9c1\uc811 \ub9cc\ub4dc\ub294 \uc77c\uc774 \uc788\uc744\uae4c? "))),Object(r.b)("li",{parentName:"ul"},"\uc5f4\uac70 \ud0c0\uc785\uc774 \ub2e4\ub978 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub3c4\ub85d \uc120\uc5b8\ud560 \uc218\ub294 \uc788\ub2e4.")),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/3_private%20%EC%83%9D%EC%84%B1%EC%9E%90%EB%82%98%20%EC%97%B4%EA%B1%B0%20%ED%83%80%EC%9E%85%EC%9C%BC%EB%A1%9C%20%EC%8B%B1%EA%B8%80%ED%84%B4%EC%9E%84%EC%9D%84%20%EB%B3%B4%EC%A6%9D%ED%95%98%EB%9D%BC_%EA%B9%80%EB%B3%B4%EB%B0%B0.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/3_private%20%EC%83%9D%EC%84%B1%EC%9E%90%EB%82%98%20%EC%97%B4%EA%B1%B0%20%ED%83%80%EC%9E%85%EC%9C%BC%EB%A1%9C%20%EC%8B%B1%EA%B8%80%ED%84%B4%EC%9E%84%EC%9D%84%20%EB%B3%B4%EC%A6%9D%ED%95%98%EB%9D%BC_%EA%B9%80%EB%B3%B4%EB%B0%B0.md"))))}o.isMDXComponent=!0},455:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return v}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),o=function(e){var t=l.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=o(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),O=n,v=u["".concat(c,".").concat(O)]||u[O]||j[O]||r;return a?l.a.createElement(v,b(b({ref:t},p),{},{components:a})):l.a.createElement(v,b({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<r;p++)c[p]=a[p];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);