(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(252)),l={},i={unversionedId:"java/effective-java/ch2/ITEM4",id:"java/effective-java/ch2/ITEM4",isDocsHomePage:!1,title:"ITEM4",description:"ITEM4 \uc778\uc2a4\ud134\uc2a4\ud654\ub97c \ub9c9\uc73c\ub824\uac70\ub4e0 private \uc0dd\uc131\uc790\ub97c \uc0ac\uc6a9\ud558\ub77c",source:"@site/docs/java/effective-java/ch2/ITEM4.md",slug:"/java/effective-java/ch2/ITEM4",permalink:"/docs/java/effective-java/ch2/ITEM4",version:"current"},o=[{value:"\uc815\uc801 \uba54\uc11c\ub4dc\uc640 \uc815\uc801 \ud544\ub4dc\ub9cc\uc744 \ub2f4\uc740 \ud074\ub798\uc2a4, \ub098\ub984\uc758 \uc4f0\uc784\uc0c8",id:"\uc815\uc801-\uba54\uc11c\ub4dc\uc640-\uc815\uc801-\ud544\ub4dc\ub9cc\uc744-\ub2f4\uc740-\ud074\ub798\uc2a4-\ub098\ub984\uc758-\uc4f0\uc784\uc0c8",children:[]},{value:"\uc815\uc801 \uba64\ubc84\ub9cc \ub2f4\uc740 \uc720\ud2f8\ub9ac\ud2f0 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ud654 \ubc29\uc9c0",id:"\uc815\uc801-\uba64\ubc84\ub9cc-\ub2f4\uc740-\uc720\ud2f8\ub9ac\ud2f0-\ud074\ub798\uc2a4\uc758-\uc778\uc2a4\ud134\uc2a4\ud654-\ubc29\uc9c0",children:[]}],b={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"item4-\uc778\uc2a4\ud134\uc2a4\ud654\ub97c-\ub9c9\uc73c\ub824\uac70\ub4e0-private-\uc0dd\uc131\uc790\ub97c-\uc0ac\uc6a9\ud558\ub77c"},"ITEM4 \uc778\uc2a4\ud134\uc2a4\ud654\ub97c \ub9c9\uc73c\ub824\uac70\ub4e0 private \uc0dd\uc131\uc790\ub97c \uc0ac\uc6a9\ud558\ub77c"),Object(c.b)("p",null,"\uc815\uc801 \uba54\uc11c\ub4dc\uc640 \uc815\uc801 \ud544\ub4dc\ub9cc\uc744 \ub2f4\uc740 \ud074\ub798\uc2a4"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\uac1d\uccb4 \uc9c0\ud5a5\uc801\uc73c\ub85c \uc0ac\uace0\ud558\uc9c0 \uc54a\ub294 \uc774\ub4e4\uc774 \uc885\uc885 \ub0a8\uc6a9\ud558\ub294 \ubc29\uc2dd"),Object(c.b)("li",{parentName:"ol"},"\ub098\ub984\uc758 \uc4f0\uc784\uc0c8")),Object(c.b)("h2",{id:"\uc815\uc801-\uba54\uc11c\ub4dc\uc640-\uc815\uc801-\ud544\ub4dc\ub9cc\uc744-\ub2f4\uc740-\ud074\ub798\uc2a4-\ub098\ub984\uc758-\uc4f0\uc784\uc0c8"},"\uc815\uc801 \uba54\uc11c\ub4dc\uc640 \uc815\uc801 \ud544\ub4dc\ub9cc\uc744 \ub2f4\uc740 \ud074\ub798\uc2a4, \ub098\ub984\uc758 \uc4f0\uc784\uc0c8"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"java.lang.Math")," ",Object(c.b)("inlineCode",{parentName:"li"},"java.util.Arrays")," ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uae30\ubcf8 \ud0c0\uc785 \uac12\uc774\ub098 \ubc30\uc5f4 \uad00\ub828 \uba54\uc11c\ub4dc\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \ud074\ub798\uc2a4    "))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"java.util.Collections")," ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud2b9\uc815 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub294 \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\uc8fc\ub294 \uc815\uc801 \uba54\uc11c\ub4dc(\ud329\ud130\ub9ac)"))),Object(c.b)("li",{parentName:"ul"},"final \ud074\ub798\uc2a4\uc640 \uad00\ub828\ud55c \uba54\uc11c\ub4dc\ub4e4\uc744 \ubaa8\uc544\ub193\uc744 \ub54c",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"final \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ud574\uc11c \ud558\uc704 \ud074\ub798\uc2a4\uc5d0 \uba54\uc11c\ub4dc\ub97c \ub123\ub294 \uac74 \ubd88\uac00\ub2a5 \ud558\uae30 \ub54c\ubb38.")))),Object(c.b)("h2",{id:"\uc815\uc801-\uba64\ubc84\ub9cc-\ub2f4\uc740-\uc720\ud2f8\ub9ac\ud2f0-\ud074\ub798\uc2a4\uc758-\uc778\uc2a4\ud134\uc2a4\ud654-\ubc29\uc9c0"},"\uc815\uc801 \uba64\ubc84\ub9cc \ub2f4\uc740 \uc720\ud2f8\ub9ac\ud2f0 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ud654 \ubc29\uc9c0"),Object(c.b)("p",null,"private \uc0dd\uc131\uc790\ub97c \ucd94\uac00\ud558\uc5ec \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\ud654\ub97c \ub9c9\uc544\uc57c \ud55c\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"private UtilityClass() {\n    // \ud074\ub798\uc2a4 \uc548\uc5d0\uc11c \uc2e4\uc218\ub85c\ub77c\ub3c4 \uc0dd\uc131\uc790\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud568.\n    throw new AssertionError();\n}\n")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\uc0dd\uc131\uc790\ub97c \uba85\uc2dc\ud558\uc9c0 \uc54a\uc73c\uba74 \ucef4\ud30c\uc77c\ub7ec\uac00 \uc790\ub3d9\uc73c\ub85c \uae30\ubcf8 \uc0dd\uc131\uc790\ub97c \uc0dd\uc131\ud568."),Object(c.b)("li",{parentName:"ol"},"\ucd94\uc0c1\ud074\ub798\uc2a4\ub85c \ub9cc\ub4dc\ub294 \uac83\uc740 \uc778\uc2a4\ud134\uc2a4\ud654\ub97c \ub9c9\uc744 \uc218 \uc5c6\uc74c",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud558\uc704 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \uc778\uc2a4\ud134\uc2a4\ud654 \ud560 \uc218 \uc788\uc74c")))),Object(c.b)("p",null,"\uc0c1\uc18d\uc744 \ubd88\uac00\ub2a5\ud558\uac8c \ud558\ub294 \ud6a8\uacfc"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc0dd\uc131\uc790\ub294 \uba85\uc2dc\uc801\uc774\ub4e0 \ubb35\uc2dc\uc801\uc774\ub4e0 \uc0c1\uc704 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790\ub97c \ud638\ucd9c\ud55c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"private \uc73c\ub85c \uc120\uc5b8\ub418\uc5b4, \ud558\uc704 \ud074\ub798\uc2a4\uac00 \uc0c1\uc704 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\ub2e4.")))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,O=p["".concat(l,".").concat(f)]||p[f]||j[f]||c;return n?a.a.createElement(O,i(i({ref:t},b),{},{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);