(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(417));const c={},l={unversionedId:"java/effective-java/ch4/ITEM21",id:"java/effective-java/ch4/ITEM21",isDocsHomePage:!1,title:"ITEM21",description:"ITEM21 \uc778\ud130\ud398\uc774\uc2a4\ub294 \uad6c\ud604\ud558\ub294 \ucabd\uc744 \uc0dd\uac01\ud574 \uc124\uacc4\ud558\ub77c",source:"@site/docs/java/effective-java/ch4/ITEM21.md",slug:"/java/effective-java/ch4/ITEM21",permalink:"/docs/java/effective-java/ch4/ITEM21",version:"current",sidebar:"effectiveJava",previous:{title:"20. \ucd94\uc0c1 \ud074\ub798\uc2a4\ubcf4\ub2e4\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc6b0\uc120\ud558\ub77c",permalink:"/docs/java/effective-java/ch4/ITEM20"},next:{title:"ITEM22",permalink:"/docs/java/effective-java/ch4/ITEM22"}},i=[{value:"Default Method",id:"default-method",children:[]},{value:"\uc8fc\uc758 \uc0ac\ud56d",id:"\uc8fc\uc758-\uc0ac\ud56d",children:[{value:"\ubd88\ubcc0\uc2dd\uc744 \ud574\uce58\uc9c0 \uc54a\ub294 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc \uc791\uc131\uc758 \uc5b4\ub824\uc6c0",id:"\ubd88\ubcc0\uc2dd\uc744-\ud574\uce58\uc9c0-\uc54a\ub294-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc-\uc791\uc131\uc758-\uc5b4\ub824\uc6c0",children:[]},{value:"\ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \ucef4\ud30c\uc77c\uc5d0 \uc131\uacf5\ud558\ub354\ub77c\ub3c4 \uae30\uc874 \uad6c\ud604\uccb4\uc5d0 \ub7f0\ud0c0\uc784 \uc624\ub958\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\ub2e4.",id:"\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\ucef4\ud30c\uc77c\uc5d0-\uc131\uacf5\ud558\ub354\ub77c\ub3c4-\uae30\uc874-\uad6c\ud604\uccb4\uc5d0-\ub7f0\ud0c0\uc784-\uc624\ub958\ub97c-\uc77c\uc73c\ud0ac-\uc218-\uc788\ub2e4",children:[]},{value:"\uae30\uc874 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub85c \uc0c8 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud558\ub294 \uc77c\uc740 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \ud53c\ud55c\ub2e4.",id:"\uae30\uc874-\uc778\ud130\ud398\uc774\uc2a4\uc5d0-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub85c-\uc0c8-\uba54\uc11c\ub4dc\ub97c-\ucd94\uac00\ud558\ub294-\uc77c\uc740-\uaf2d-\ud544\uc694\ud55c-\uacbd\uc6b0\uac00-\uc544\ub2c8\uba74-\ud53c\ud55c\ub2e4",children:[]},{value:"\ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130 \uba54\uc11c\ub4dc\ub97c \uc81c\uac70\ud558\uac70\ub098 \uae30\uc874 \uba54\uc11c\ub4dc\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub97c \uc218\uc815\ud558\ub294 \uc6a9\ub3c4\uac00 \uc544\ub2c8\ub2e4.",id:"\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130-\uba54\uc11c\ub4dc\ub97c-\uc81c\uac70\ud558\uac70\ub098-\uae30\uc874-\uba54\uc11c\ub4dc\uc758-\uc2dc\uadf8\ub2c8\ucc98\ub97c-\uc218\uc815\ud558\ub294-\uc6a9\ub3c4\uac00-\uc544\ub2c8\ub2e4",children:[]},{value:"\uc0c8\ub85c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74 \ub9b4\ub9ac\uc2a4 \uc804\uc5d0 \ubc18\ub4dc\uc2dc \ud14c\uc2a4\ud2b8\ub97c \uac70\uccd0\uc57c \ud55c\ub2e4.",id:"\uc0c8\ub85c\uc6b4-\uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74-\ub9b4\ub9ac\uc2a4-\uc804\uc5d0-\ubc18\ub4dc\uc2dc-\ud14c\uc2a4\ud2b8\ub97c-\uac70\uccd0\uc57c-\ud55c\ub2e4",children:[]}]}],o={toc:i};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"item21-\uc778\ud130\ud398\uc774\uc2a4\ub294-\uad6c\ud604\ud558\ub294-\ucabd\uc744-\uc0dd\uac01\ud574-\uc124\uacc4\ud558\ub77c"},"ITEM21 \uc778\ud130\ud398\uc774\uc2a4\ub294 \uad6c\ud604\ud558\ub294 \ucabd\uc744 \uc0dd\uac01\ud574 \uc124\uacc4\ud558\ub77c"),Object(a.b)("h2",{id:"default-method"},"Default Method"),Object(a.b)("p",null,"\uc790\ubc148, ",Object(a.b)("strong",{parentName:"p"},"\uae30\uc874 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00"),"\ud560 \uc218 \uc788\ub294 \ubc29\ubc95"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\ud575\uc2ec \uceec\ub809\uc158 \uc778\ud130\ud398\uc774\uc2a4"),"\uc5d0 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\uac00 \ucd94\uac00 \ub418\uc5c8\ub2e4. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc8fc\ub85c ",Object(a.b)("strong",{parentName:"li"},"\ub78c\ub2e4"),"\ub97c \ud65c\uc6a9\ud558\uae30 \uc704\ud568"),Object(a.b)("li",{parentName:"ul"},"\uc790\ubc14 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \ucf54\ub4dc\ud488\uc9c8\uc774 \ub192\uace0 \ubc94\uc6a9\uc801 \u2192 \ub300\ubd80\ubd84 \uc798 \uc791\ub3d9")),Object(a.b)("h2",{id:"\uc8fc\uc758-\uc0ac\ud56d"},"\uc8fc\uc758 \uc0ac\ud56d"),Object(a.b)("h3",{id:"\ubd88\ubcc0\uc2dd\uc744-\ud574\uce58\uc9c0-\uc54a\ub294-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc-\uc791\uc131\uc758-\uc5b4\ub824\uc6c0"},"\ubd88\ubcc0\uc2dd\uc744 \ud574\uce58\uc9c0 \uc54a\ub294 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc \uc791\uc131\uc758 \uc5b4\ub824\uc6c0"),Object(a.b)("h4",{id:"\ubb38\uc81c\uc810"},"\ubb38\uc81c\uc810"),Object(a.b)("p",null,"\uc790\ubc14 8 \uc758 Collection \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ucd94\uac00\ub41c removeIf \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"default boolean removeIf(Predicate<? super E> filter) {\n    Objects.requireNonNull(filter);\n    boolean result = false;\n    for (Iterator<E> it = iterator(); it.hasNext(); ) {\n        if (filter.test(it.next())) {\n            it.remove();\n            result = true;\n        } \n    }\n    return result;\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"apache.commons.collections4.collection.SynchronizedCollection")," "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc81c\uacf5\ud55c \uac1d\uccb4\ub85c \ub77d\uc744 \uac70\ub294 \ub2a5\ub825\uc744 \ucd94\uac00\ub85c \uc81c\uacf5"),Object(a.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc5d0\uc11c \uc8fc\uc5b4\uc9c4 \ub77d \uac1d\uccb4\ub85c \ub3d9\uae30\ud654 \ud55c \ud6c4 \ub0b4\ubd80 \uceec\ub809\uc158 \uac1d\uccb4\uc5d0 \uc704\uc784\ud558\ub294 \ub798\ud37c\ud074\ub798\uc2a4"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"removeIf")," \uc640 \ub9de\uc9c0 \uc54a\uc74c (effective java 3\ud310 \uc791\uc131\uc2dc\uc810)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"removeIf \uc758 \uad6c\ud604\uc740 \ub3d9\uae30\ud654\uc5d0 \ub300\ud574 \ubaa8\ub974\ubbc0\ub85c \ub77d \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.")))),Object(a.b)("h4",{id:"\ud574\uacb0-\ubc29\uc548"},"\ud574\uacb0 \ubc29\uc548"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uad6c\ud604\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc \uc7ac\uc815\uc758")),Object(a.b)("p",null,"\uc790\ubc14 \ud50c\ub7ab\ud3fc\uc5d0 \uc18d\ud558\uc9c0 \uc54a\uc740 \uc81c 3\uc758 \uae30\uc874 \uceec\ub809\uc158 \uad6c\ud604\uccb4\uc5d0\uc11c\ub294 \uc5ec\uc804\ud788 \uc218\uc815\ub418\uc9c0 \uc54a\uace0 \uc788\uc744 \uc218 \uc788\ub2e4."),Object(a.b)("hr",null),Object(a.b)("hr",null),Object(a.b)("h3",{id:"\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\ucef4\ud30c\uc77c\uc5d0-\uc131\uacf5\ud558\ub354\ub77c\ub3c4-\uae30\uc874-\uad6c\ud604\uccb4\uc5d0-\ub7f0\ud0c0\uc784-\uc624\ub958\ub97c-\uc77c\uc73c\ud0ac-\uc218-\uc788\ub2e4"},"\ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \ucef4\ud30c\uc77c\uc5d0 \uc131\uacf5\ud558\ub354\ub77c\ub3c4 \uae30\uc874 \uad6c\ud604\uccb4\uc5d0 \ub7f0\ud0c0\uc784 \uc624\ub958\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\ub2e4."),Object(a.b)("p",null,"\ud754\ud55c\uc77c\uc740 \uc544\ub2c8\uc9c0\ub9cc \uc77c\uc5b4\ub0a0 \uc218 \uc788\ub2e4."),Object(a.b)("h3",{id:"\uae30\uc874-\uc778\ud130\ud398\uc774\uc2a4\uc5d0-\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub85c-\uc0c8-\uba54\uc11c\ub4dc\ub97c-\ucd94\uac00\ud558\ub294-\uc77c\uc740-\uaf2d-\ud544\uc694\ud55c-\uacbd\uc6b0\uac00-\uc544\ub2c8\uba74-\ud53c\ud55c\ub2e4"},"\uae30\uc874 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub85c \uc0c8 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud558\ub294 \uc77c\uc740 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \ud53c\ud55c\ub2e4."),Object(a.b)("p",null,"\ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\uac00 \uae30\uc874 \uad6c\ud604\uccb4\ub4e4\uacfc \ucda9\ub3cc\ud558\uc9c0 \uc54a\ub294\uc9c0 \uace0\ub824\ud55c\ub2e4."),Object(a.b)("p",null,"\uc0c8\ub85c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uacbd\uc6b0\ub77c\uba74 \uc720\uc6a9\ud55c \uc218\ub2e8\uc774\ub2e4."),Object(a.b)("h3",{id:"\ub514\ud3f4\ud2b8-\uba54\uc11c\ub4dc\ub294-\uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130-\uba54\uc11c\ub4dc\ub97c-\uc81c\uac70\ud558\uac70\ub098-\uae30\uc874-\uba54\uc11c\ub4dc\uc758-\uc2dc\uadf8\ub2c8\ucc98\ub97c-\uc218\uc815\ud558\ub294-\uc6a9\ub3c4\uac00-\uc544\ub2c8\ub2e4"},"\ub514\ud3f4\ud2b8 \uba54\uc11c\ub4dc\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub85c\ubd80\ud130 \uba54\uc11c\ub4dc\ub97c \uc81c\uac70\ud558\uac70\ub098 \uae30\uc874 \uba54\uc11c\ub4dc\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub97c \uc218\uc815\ud558\ub294 \uc6a9\ub3c4\uac00 \uc544\ub2c8\ub2e4."),Object(a.b)("p",null,"\uc774\ub7f0 \ud615\ud0dc\ub85c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud558\uba74 \uae30\uc874 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ub9dd\uac00\ub728\ub9ac\uac8c \ub41c\ub2e4."),Object(a.b)("h3",{id:"\uc0c8\ub85c\uc6b4-\uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74-\ub9b4\ub9ac\uc2a4-\uc804\uc5d0-\ubc18\ub4dc\uc2dc-\ud14c\uc2a4\ud2b8\ub97c-\uac70\uccd0\uc57c-\ud55c\ub2e4"},"\uc0c8\ub85c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub77c\uba74 \ub9b4\ub9ac\uc2a4 \uc804\uc5d0 \ubc18\ub4dc\uc2dc \ud14c\uc2a4\ud2b8\ub97c \uac70\uccd0\uc57c \ud55c\ub2e4."),Object(a.b)("p",null,"\uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9b4\ub9ac\uc988 \ud55c \ud6c4\uc758 \uacb0\ud568 \uc218\uc815 \uac00\ub2a5\uc131\uc5d0 \ub300\ud574 \uae30\ub300\uc11c\ub294 \uc548\ub41c\ub2e4."))}b.isMDXComponent=!0},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),j=r,d=p["".concat(l,".").concat(j)]||p[j]||f[j]||c;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=j;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);