(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{437:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(458));const i={title:"Lombok - @Data"},l={unversionedId:"java/lombok/data",id:"java/lombok/data",isDocsHomePage:!1,title:"Lombok - @Data",description:'<img alt="image" height="400"',source:"@site/docs/java/lombok/data.mdx",slug:"/java/lombok/data",permalink:"/docs/java/lombok/data",version:"current",sidebar:"java",previous:{title:"java",permalink:"/docs/java/index"},next:{title:"transient fields \uc784\uc2dc \ud544\ub4dc",permalink:"/docs/java/transient_fields"}},o=[{value:"@Data \uac00 generate \ud558\ub294 \uac83\ub4e4",id:"data-\uac00-generate-\ud558\ub294-\uac83\ub4e4",children:[]},{value:"\uc774\ub984\uc774 \uc788\ub294 static \uc0dd\uc131\uc790 \uba54\uc11c\ub4dc \uc0dd\uc131",id:"\uc774\ub984\uc774-\uc788\ub294-static-\uc0dd\uc131\uc790-\uba54\uc11c\ub4dc-\uc0dd\uc131",children:[]},{value:"getter \uc640 setter \uc758 \uc811\uadfc\uc790",id:"getter-\uc640-setter-\uc758-\uc811\uadfc\uc790",children:[]},{value:"transient &amp; static \ud544\ub4dc\ub294 \uc81c\uc678 \ub41c\ub2e4.",id:"transient--static-\ud544\ub4dc\ub294-\uc81c\uc678-\ub41c\ub2e4",children:[]},{value:"\uc774\ubbf8 \uc815\uc758\ub41c \uba54\uc11c\ub4dc\uac00 \uc874\uc7ac\ud560 \ub54c",id:"\uc774\ubbf8-\uc815\uc758\ub41c-\uba54\uc11c\ub4dc\uac00-\uc874\uc7ac\ud560-\ub54c",children:[]},{value:"Generic \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790",id:"generic-\ud074\ub798\uc2a4\uc758-\uc0dd\uc131\uc790",children:[]},{value:"Origin",id:"origin",children:[]}],c={toc:o};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("img",{alt:"image",height:"400",src:"https://user-images.githubusercontent.com/31977543/151168472-4b2cafbc-1d85-40d8-b8e7-028c41e382af.png"}),Object(a.b)("h2",{id:"data-\uac00-generate-\ud558\ub294-\uac83\ub4e4"},"@Data \uac00 generate \ud558\ub294 \uac83\ub4e4"),Object(a.b)("p",null,"generates all the boilerplate"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@Getter")," \ubaa8\ub4e0 field \uc5d0 \ub300\ud55c getters"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@ToString")," toString \uba54\uc11c\ub4dc"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@EqualsAndHashCode")," hashCode \uba54\uc11c\ub4dc equals \uba54\uc11c\ub4dc implementaions, \ubaa8\ub4e0 ",Object(a.b)("a",{parentName:"li",href:"/docs/java/transient_fields"},"non-transient fields")," \ub97c \uccb4\ud06c\ud55c\ub2e4."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@Setter")," non final field \uc5d0 \ub300\ud55c \ubaa8\ub4e0 setter"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@RequiredArgsConstructor")," \uc0dd\uc131\uc790 ",Object(a.b)("br",null),Object(a.b)("small",null," \uba85\uc2dc\uc801\uc73c\ub85c \uc791\uc131\ub41c \uc0dd\uc131\uc790\uac00 \uc788\uc73c\uba74 Data\ub294 \uc0dd\uc131\uc790\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc74c "))),Object(a.b)("p",null,"initializer \uac00 \uc5c6\ub294 \ubaa8\ub4e0 non-final fields \ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"@NonNull")," \uc5b4\ub178\ud14c\uc774\uc158\uc774 \ubd99\ub294\ub2e4."),Object(a.b)("h2",{id:"\uc774\ub984\uc774-\uc788\ub294-static-\uc0dd\uc131\uc790-\uba54\uc11c\ub4dc-\uc0dd\uc131"},"\uc774\ub984\uc774 \uc788\ub294 static \uc0dd\uc131\uc790 \uba54\uc11c\ub4dc \uc0dd\uc131"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'@Data(staticConstructor = "of")')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uae30\ubcf8 \uc0dd\uc131\uc790\ub294 private \uc73c\ub85c \uc0dd\uc131 \ub41c\ub2e4.")),Object(a.b)("h2",{id:"getter-\uc640-setter-\uc758-\uc811\uadfc\uc790"},"getter \uc640 setter \uc758 \uc811\uadfc\uc790"),Object(a.b)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c public \uc73c\ub85c \uc0dd\uc131"),Object(a.b)("p",null,"@Getter(",Object(a.b)("inlineCode",{parentName:"p"},"AccessLevel.NONE"),"), @Setter(",Object(a.b)("inlineCode",{parentName:"p"},"AccessLevel.NONE"),")"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"private \uc73c\ub85c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95")),Object(a.b)("h2",{id:"transient--static-\ud544\ub4dc\ub294-\uc81c\uc678-\ub41c\ub2e4"},"transient & static \ud544\ub4dc\ub294 \uc81c\uc678 \ub41c\ub2e4."),Object(a.b)("h2",{id:"\uc774\ubbf8-\uc815\uc758\ub41c-\uba54\uc11c\ub4dc\uac00-\uc874\uc7ac\ud560-\ub54c"},"\uc774\ubbf8 \uc815\uc758\ub41c \uba54\uc11c\ub4dc\uac00 \uc874\uc7ac\ud560 \ub54c"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"lombok \uc740 \uc774\ubbf8 \uc815\uc758\ub41c \uba54\uc11c\ub4dc\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc74c"),Object(a.b)("li",{parentName:"ul"},"lombok \uc774 \uc0dd\uc131\ud558\ub294 \uba54\uc11c\ub4dc\uc640 \uc0ac\uc6a9\uc790\uac00 \uc815\uc758\ud55c \uba54\uc11c\ub4dc\uac00 parameter \uac00 \ub2e4\ub974\ub354\ub77c\ub3c4\n\ub86c\ubcf5\uc740 \uba54\uc11c\ub4dc\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc74c."),Object(a.b)("li",{parentName:"ul"},"lombok \uba54\uc11c\ub4dc\ub97c \uc0dd\uc131\ud558\uace0 \uc2f6\ub2e4\uba74 \uba54\uc11c\ub4dc\uc5d0 ",Object(a.b)("inlineCode",{parentName:"li"},"@lombok.experimental.Tolerate")," \uc744 \uc120\uc5b8\ud55c\ub2e4.")),Object(a.b)("h2",{id:"generic-\ud074\ub798\uc2a4\uc758-\uc0dd\uc131\uc790"},"Generic \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Data(staticConstructor="of") class Foo<T> {\n    private T x;\n}\n\nFoo.of(5);  // new Foo<Integer>(5);\n')),Object(a.b)("h2",{id:"origin"},"Origin"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://projectlombok.org/features/Data"},"https://projectlombok.org/features/Data")))}b.isMDXComponent=!0},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);