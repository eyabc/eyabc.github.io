(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(456));const c={},i={unversionedId:"java/spring/maven",id:"java/spring/maven",isDocsHomePage:!1,title:"maven",description:"\uba54\uc774\ube10(Maven)\uc740 \uc54c\uace0 \uc2a4\ud504\ub9c1(Spring)\uc744 \uc4f0\ub294\uac00? (pom.xml \ubd84\uc11d\ud558\uba70 \uac00\ubccd\uac8c \uc815\ub9ac\ud558\ub294 \ube4c\ub4dc \ud234, Maven)",source:"@site/docs/java/spring/maven.md",slug:"/java/spring/maven",permalink:"/docs/java/spring/maven",version:"current",sidebar:"javaSpring",previous:{title:"index",permalink:"/docs/java/spring/index"}},l=[{value:"Maven\uc774\ub780 \ubb34\uc5c7\uc778\uac00?",id:"maven\uc774\ub780-\ubb34\uc5c7\uc778\uac00",children:[]},{value:"Maven \uc758 \ucc38\uc870 \uc124\uc815\ud30c\uc77c",id:"maven-\uc758-\ucc38\uc870-\uc124\uc815\ud30c\uc77c",children:[]}],o={toc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://jeong-pro.tistory.com/168"},"\uba54\uc774\ube10(Maven)\uc740 \uc54c\uace0 \uc2a4\ud504\ub9c1(Spring)\uc744 \uc4f0\ub294\uac00? (pom.xml \ubd84\uc11d\ud558\uba70 \uac00\ubccd\uac8c \uc815\ub9ac\ud558\ub294 \ube4c\ub4dc \ud234, Maven)")),Object(a.b)("h2",{id:"maven\uc774\ub780-\ubb34\uc5c7\uc778\uac00"},"Maven\uc774\ub780 \ubb34\uc5c7\uc778\uac00?"),Object(a.b)("p",null,"\uc790\ubc14 \ud504\ub85c\uc81d\ud2b8\uc758 \ube4c\ub4dc \uc790\ub3d9\ud654 \ud234"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"java source -- compile -- packaging -- deploy")),Object(a.b)("h2",{id:"maven-\uc758-\ucc38\uc870-\uc124\uc815\ud30c\uc77c"},"Maven \uc758 \ucc38\uc870 \uc124\uc815\ud30c\uc77c"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"settings.xml"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"maven \ud234\uc758 \uc124\uc815"),Object(a.b)("li",{parentName:"ul"},"\uacbd\ub85c (\ud658\uacbd\ubcc0\uc218)/conf/"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"pom.xml"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"POM (Project Object Model) \uc124\uc815")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\ud504\ub85c\uc81d\ud2b8 \ub0b4 \ube4c\ub4dc \uc635\uc158 \uc124\uc815")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\ud504\ub85c\uc81d\ud2b8 \uc815\ubcf4")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\uc758\uc874\uc131 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc815\ubcf4")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"build \uc815\ubcf4")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"maven\uc758 lifecycle : default, clean, site... phase\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/115119637-6de4c080-9fe4-11eb-8c9c-6f2620fede11.png",alt:"image"}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"maven\uc758 \ubaa8\ub4e0 \uae30\ub2a5\uc740 plugin \uc744 \uae30\ubc18\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4. "))),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'mvn process-resources : resources:resources\uc758 \uc2e4\ud589\uc73c\ub85c resource \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc788\ub294 \ub0b4\uc6a9\uc744 target/classes\ub85c \ubcf5\uc0ac\ud55c\ub2e4.\nmvn compile : compiler:compile\uc758 \uc2e4\ud589\uc73c\ub85c src/java \ubc11\uc758 \ubaa8\ub4e0 \uc790\ubc14 \uc18c\uc2a4\ub97c \ucef4\ud30c\uc77c\ud574\uc11c target/classes\ub85c \ubcf5\uc0ac\nmvn process-testResources, mvn test-compile : \uc774\uac83\uc740 \uc704\uc758 \ub450 \uac1c\uac00 src/java\uc600\ub2e4\uba74 test/java\uc758 \ub0b4\uc6a9\uc744 target/test-classes\ub85c \ubcf5\uc0ac. (\ucc38\uace0\ub85c test\ub9cc mvn test \uba85\ub839\uc744 \ub0b4\ub9ac\uba74 \ub77c\uc774\ud504\uc0ac\uc774\ud074\uc0c1 \uc6d0\ubcf8 \uc18c\uc2a4\ub85c \ucef4\ud30c\uc77c\ub41c\ub2e4.)\nmvn test : surefire:test\uc758 \uc2e4\ud589\uc73c\ub85c target/test-classes\uc5d0 \uc788\ub294 \ud14c\uc2a4\ud2b8\ucf00\uc774\uc2a4\uc758 \ub2e8\uc704\ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud55c\ub2e4. \uacb0\uacfc\ub97c target/surefire-reports\uc5d0 \uc0dd\uc131\ud55c\ub2e4.\nmvn package : target\ub514\ub809\ud1a0\ub9ac \ud558\uc704\uc5d0 jar, war, ear\ub4f1 \ud328\ud0a4\uc9c0\ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0 \uc774\ub984\uc740 <build>\uc758 <finalName>\uc758 \uac12\uc744 \uc0ac\uc6a9\ud55c\ub2e4 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc558\uc744 \ub54c\ub294 \uc544\uae4c \uc124\uba85\ud55c "artifactId-version.extention" \uc774\ub984\uc73c\ub85c \uc0dd\uc131\nmvn install : \ub85c\uceec \uc800\uc7a5\uc18c\ub85c \ubc30\ud3ec\nmvn deploy : \uc6d0\uaca9 \uc800\uc7a5\uc18c\ub85c \ubc30\ud3ec\nmvn clean : \ube4c\ub4dc \uacfc\uc815\uc5d0\uc11c \uc0dd\uae34 target \ub514\ub809\ud1a0\ub9ac \ub0b4\uc6a9 \uc0ad\uc81c\nmvn site : target/site\uc5d0 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc0dd\uc131\nmvn site-deploy : \ubb38\uc11c \uc0ac\uc774\ud2b8\ub97c \uc11c\ubc84\ub85c \ubc30\ud3ec\n')))))}p.isMDXComponent=!0},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return v}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,v=m["".concat(i,".").concat(u)]||m[u]||b[u]||c;return n?a.a.createElement(v,l(l({ref:t},p),{},{components:n})):a.a.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);