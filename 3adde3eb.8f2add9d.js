(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(458));const c={title:"9. try-finally \ubcf4\ub2e4\ub294 try-with-resources \ub97c \uc0ac\uc6a9\ud558\ub77c"},l={unversionedId:"java/effective-java/ch2/ITEM9",id:"java/effective-java/ch2/ITEM9",isDocsHomePage:!1,title:"9. try-finally \ubcf4\ub2e4\ub294 try-with-resources \ub97c \uc0ac\uc6a9\ud558\ub77c",description:"close \uba54\uc11c\ub4dc \ud638\ucd9c\ub85c \uc9c1\uc811\ub2eb\uc544\uc8fc\uc5b4\uc57c \ud558\ub294 \uc790\uc6d0",source:"@site/docs/java/effective-java/ch2/ITEM9.md",slug:"/java/effective-java/ch2/ITEM9",permalink:"/docs/java/effective-java/ch2/ITEM9",version:"current",sidebar:"effectiveJava",previous:{title:"8. finalizer \uc640 cleaner \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM8"},next:{title:"ch3 \ubaa8\ub4e0 \uac1d\uccb4\uc758 \uacf5\ud1b5 \uba54\uc11c\ub4dc",permalink:"/docs/java/effective-java/ch3/index"}},i=[{value:"close \uba54\uc11c\ub4dc \ud638\ucd9c\ub85c \uc9c1\uc811\ub2eb\uc544\uc8fc\uc5b4\uc57c \ud558\ub294 \uc790\uc6d0",id:"close-\uba54\uc11c\ub4dc-\ud638\ucd9c\ub85c-\uc9c1\uc811\ub2eb\uc544\uc8fc\uc5b4\uc57c-\ud558\ub294-\uc790\uc6d0",children:[]},{value:"try-finally",id:"try-finally",children:[]},{value:"try-with-resources",id:"try-with-resources",children:[{value:"AutoCloseable \uc778\ud130\ud398\uc774\uc2a4",id:"autocloseable-\uc778\ud130\ud398\uc774\uc2a4",children:[]},{value:"\ubcf5\uc218 \uc790\uc6d0 \ucc98\ub9ac",id:"\ubcf5\uc218-\uc790\uc6d0-\ucc98\ub9ac",children:[]},{value:"try-with-resource \uc640 catch \ud568\uaed8 \uc4f0\uae30",id:"try-with-resource-\uc640-catch-\ud568\uaed8-\uc4f0\uae30",children:[]}]},{value:"Reference",id:"reference",children:[]}],o={toc:i};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"close-\uba54\uc11c\ub4dc-\ud638\ucd9c\ub85c-\uc9c1\uc811\ub2eb\uc544\uc8fc\uc5b4\uc57c-\ud558\ub294-\uc790\uc6d0"},"close \uba54\uc11c\ub4dc \ud638\ucd9c\ub85c \uc9c1\uc811\ub2eb\uc544\uc8fc\uc5b4\uc57c \ud558\ub294 \uc790\uc6d0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"InputStream"),Object(a.b)("li",{parentName:"ul"},"OutputStream"),Object(a.b)("li",{parentName:"ul"},"java.sql.Connection")),Object(a.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ub193\uce58\uae30 \uc26c\uc6cc\uc11c \uc608\uce21\ud560 \uc218 \uc5c6\ub294 \uc131\ub2a5 \ubb38\uc81c\ub85c \uc774\uc5b4\uc9c0\uae30\ub3c4\ud568."),Object(a.b)("h2",{id:"try-finally"},"try-finally"),Object(a.b)("p",null,"\uc804\ud1b5\uc801\uc778 \uc790\uc6d0 \ud68c\uc218 \uc218\ub2e8\uc774\uc9c0\ub9cc, \ucd5c\uc120\uc758 \ubc29\ucc45\uc774 \uc544\ub2c8\ub2e4."),Object(a.b)("h4",{id:"1-\uc790\uc6d0\uc774-\ub458-\uc774\uc0c1\uc774\uba74-\ub108\ubb34-\uc9c0\uc800\ubd84\ud558\ub2e4"},"1. \uc790\uc6d0\uc774 \ub458 \uc774\uc0c1\uc774\uba74 \ub108\ubb34 \uc9c0\uc800\ubd84\ud558\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"static void copy(String src, String dst) throws IOException {\n    InputStream in = new FileInputStream(src);\n    try {\n        OutputStream out = new FileOutputStream(dst);\n        tru {\n            byte[] buf = new byte[BUFFER_SIZE];\n            int n;\n            while ((n = in.read(buf)) >= 0)\n                out.write(buf, 0, n);\n        } finally {\n            out.close()\n        }\n    } finally {\n        in.close();\n    }\n}\n")),Object(a.b)("h4",{id:"2-\uc608\uc678\ub294-try--finally-\ube14\ub85d\uc5d0\uc11c-\ubaa8\ub450-\ubc1c\uc0dd\ud560-\uc218-\uc788\ub2e4"},"2. \uc608\uc678\ub294 try / finally \ube14\ub85d\uc5d0\uc11c \ubaa8\ub450 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("p",null,"\uae30\uae30\uc5d0\uc11c \ubb3c\ub9ac\uc801\uc778 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4\uba74, readLine \uba54\uc11c\ub4dc\uac00 \uc608\uc678\ub97c \ub358\uc9c0\uace0, \uac19\uc740 \uc774\uc720\ub85c close \uba54\uc11c\ub4dc\ub3c4 \uc2e4\ud328\ud55c\ub2e4."),Object(a.b)("p",null,"\ub450\ubc88\uc9f8 \uc608\uc678\uac00 \uccab\ubc88\uc9f8 \uc608\uc678\ub97c \ub36e\ub294\ub2e4.\n\uc774\ub54c, \uccab\ubc88\uc9f8 \uc608\uc678\ub97c \uc2a4\ud0dd\uc5d0\uc11c \ub514\ubc84\uae45 \ud560 \uc218 \uc5c6\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"static String firstLineOfFile(String path) throws IOException {\n    BufferedReader br = new BufferedReader(new FileReader(path));\n    try {\n        return br.readLine();\n    } finally {\n        br.close();\n    }\n}\n")),Object(a.b)("h2",{id:"try-with-resources"},"try-with-resources"),Object(a.b)("p",null,"\ucf54\ub4dc\ub294 \ub354 \uc9e7\uace0 \ubd84\uba85\ud574\uc9c0\uace0, \ub9cc\ub4e4\uc5b4\uc9c0\ub294 \uc608\uc678 \uc815\ubcf4\ub3c4 \ud6e8\uc52c \uc720\uc6a9\ud558\ub2e4."),Object(a.b)("p",null,"\ud574\ub2f9 \uc790\uc6d0\uc774 AutoCloseable \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud574\uc57c \ud55c\ub2e4."),Object(a.b)("h3",{id:"autocloseable-\uc778\ud130\ud398\uc774\uc2a4"},"AutoCloseable \uc778\ud130\ud398\uc774\uc2a4"),Object(a.b)("p",null,"void \ub97c \ubc18\ud658\ud558\ub294 close \uba54\uc11c\ub4dc\ub9cc \ud558\ub098 \uc815\uc758\ud55c \uc778\ud130\ud398\uc774\uc2a4"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc790\ubc14\ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc11c\ub4dc\ud30c\ud2f0\ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc758 \uc218\ub9ce\uc740 \ud074\ub798\uc2a4\uc640 \uc778\ud130\ud398\uc774\uc2a4\uac00 AutoCloseable \uc744 \uad6c\ud604\ud558\uac70\ub098 \ud655\uc7a5\ud568."),Object(a.b)("li",{parentName:"ul"},"\ub2eb\uc544\uc57c \ud558\ub294 \uc790\uc6d0\uc758 \ud074\ub798\uc2a4\ub97c \uc791\uc131\ud560 \ub54c, AutoCloseable \uc744 \uad6c\ud604\ud558\uc790.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"static String firstLineOfFile(String path) throws IOException {\n    try (BufferedReader br = new BufferedReader(new FileReader(path))) {\n        return br.readLine();\n    }\n}\n")),Object(a.b)("h3",{id:"\ubcf5\uc218-\uc790\uc6d0-\ucc98\ub9ac"},"\ubcf5\uc218 \uc790\uc6d0 \ucc98\ub9ac"),Object(a.b)("p",null,"try-finally 2\ubc88 \ucc98\ub7fc, \uc608\uc678\uac00 \uc228\uaca8\uc838\ub3c4, \uc2a4\ud0dd \ucd94\uc801 \ub0b4\uc5ed\uc5d0 suppressed \ub85c \ucd9c\ub825\uc774 \ub41c\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc790\ubc147 \uc5d0\uc11c Throwable \uc5d0 \ucd94\uac00 \ub41c getSuppressed \uba54\uc11c\ub4dc\ub97c \uc774\uc6a9\ud558\uba74 \ud504\ub85c\uadf8\ub7a8 \ucf54\ub4dc\uc5d0\uc11c \uac00\uc838\uc62c \uc218 \uc788\ub2e4.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"static void copy(String src, String dst) throws IOException {\n    try (InputStream in = new FileInputStream(src);\n         OutputStream out = new FileOutputStream(dst)) {\n        byte[] buf = new byte[BUFFER_SIZE];\n        int n;\n        while((n = in.read(buf)) >= 0)\n            out.write(buf, 0 , n);\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42054054/105153029-4ac48500-5b4b-11eb-8cf8-ba1f3830e2b9.png",alt:null})),Object(a.b)("h3",{id:"try-with-resource-\uc640-catch-\ud568\uaed8-\uc4f0\uae30"},"try-with-resource \uc640 catch \ud568\uaed8 \uc4f0\uae30"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"static String firstLineOfFile(String path, String defaultVal) {\n    try (BufferedReader br = new BufferedReader(\n            new FileReader(path))) {\n        return br.readLine();\n    } catch (IOException e) {\n        return defaultVal;\n    }\n}\n")),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/9_try_finally%EB%B3%B4%EB%8B%A4%EB%8A%94_try_with_resources%EB%A5%BC_%EC%82%AC%EC%9A%A9%ED%95%98%EB%9D%BC_%ED%99%A9%EC%A4%80%ED%98%B8.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/9_try_finally%EB%B3%B4%EB%8B%A4%EB%8A%94_try_with_resources%EB%A5%BC_%EC%82%AC%EC%9A%A9%ED%95%98%EB%9D%BC_%ED%99%A9%EC%A4%80%ED%98%B8.md"))))}u.isMDXComponent=!0},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(n),f=r,d=s["".concat(l,".").concat(f)]||s[f]||p[f]||c;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<c;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);