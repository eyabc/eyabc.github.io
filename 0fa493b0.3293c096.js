(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{419:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),o=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=o(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=o(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||j[d]||c;return n?i.a.createElement(m,b(b({ref:t},p),{},{components:n})):i.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var b={};for(var r in t)hasOwnProperty.call(t,r)&&(b[r]=t[r]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<c;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return o}));var a=n(3),i=n(7),c=(n(0),n(419)),l={title:"26. \ub85c\ud0c0\uc785 raw type \uc740 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\ub77c"},b={unversionedId:"java/effective-java/ch5/ITEM26",id:"java/effective-java/ch5/ITEM26",isDocsHomePage:!1,title:"26. \ub85c\ud0c0\uc785 raw type \uc740 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\ub77c",description:"- \ub85c\ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uba74 \ub7f0\ud0c0\uc784 \uc608\uc678\uac00 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uc73c\ub2c8 \uc0ac\uc6a9\ud558\uba74 \uc548\ub41c\ub2e4.",source:"@site/docs/java/effective-java/ch5/ITEM26.md",slug:"/java/effective-java/ch5/ITEM26",permalink:"/docs/java/effective-java/ch5/ITEM26",version:"current",sidebar:"effectiveJava",previous:{title:"ch5 \uc81c\ub124\ub9ad Generic",permalink:"/docs/java/effective-java/ch5/index"},next:{title:"ITEM27",permalink:"/docs/java/effective-java/ch5/ITEM27"}},r=[{value:"\uc81c\ub124\ub9ad \ud0c0\uc785 generic type",id:"\uc81c\ub124\ub9ad-\ud0c0\uc785-generic-type",children:[{value:"\uc81c\ub124\ub9ad \ud074\ub798\uc2a4, \uc81c\ub124\ub9ad \uc778\ud130\ud398\uc774\uc2a4",id:"\uc81c\ub124\ub9ad-\ud074\ub798\uc2a4-\uc81c\ub124\ub9ad-\uc778\ud130\ud398\uc774\uc2a4",children:[]},{value:"List \uc778\ud130\ud398\uc774\uc2a4",id:"list-\uc778\ud130\ud398\uc774\uc2a4",children:[]}]},{value:"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785",id:"\ub9e4\uac1c\ubcc0\uc218\ud654-\ud0c0\uc785",children:[]},{value:"\ub85c\ud0c0\uc785 raw type",id:"\ub85c\ud0c0\uc785-raw-type",children:[{value:"\ud0c0\ud611\uc810",id:"\ud0c0\ud611\uc810",children:[]}]},{value:"<code>List&lt;Object&gt;</code>",id:"listobject",children:[{value:"\ub85c\ud0c0\uc785 List",id:"\ub85c\ud0c0\uc785-list",children:[]},{value:"<code>List&lt;Object&gt;</code>",id:"listobject-1",children:[]},{value:"\uc81c\ub124\ub9ad\uc758 \ud558\uc704 \ud0c0\uc785 \uaddc\uce59",id:"\uc81c\ub124\ub9ad\uc758-\ud558\uc704-\ud0c0\uc785-\uaddc\uce59",children:[]}]},{value:"\ube44\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785 unbounded wildcard type",id:"\ube44\ud55c\uc815\uc801-\uc640\uc77c\ub4dc\uce74\ub4dc-\ud0c0\uc785-unbounded-wildcard-type",children:[{value:"\ube44\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uacfc \ub85c\ud0c0\uc785\uc758 \ucc28\uc774\uc810",id:"\ube44\ud55c\uc815\uc801-\uc640\uc77c\ub4dc\uce74\ub4dc-\ud0c0\uc785\uacfc-\ub85c\ud0c0\uc785\uc758-\ucc28\uc774\uc810",children:[]}]},{value:"\ub85c\ud0c0\uc785 \uaddc\uce59\uc758 \uc608\uc678",id:"\ub85c\ud0c0\uc785-\uaddc\uce59\uc758-\uc608\uc678",children:[{value:"class \ub9ac\ud130\ub7f4\uc5d0\ub294 \ub85c\ud0c0\uc785\uc744 \uc368\uc57c \ud55c\ub2e4.",id:"class-\ub9ac\ud130\ub7f4\uc5d0\ub294-\ub85c\ud0c0\uc785\uc744-\uc368\uc57c-\ud55c\ub2e4",children:[]},{value:"instanceof \uc5f0\uc0b0\uc790",id:"instanceof-\uc5f0\uc0b0\uc790",children:[]}]},{value:"\ub85c\ud0c0\uc785, <code>...&lt;Object&gt;</code>, <code>...&lt;?&gt;</code>",id:"\ub85c\ud0c0\uc785-object-",children:[]}],p={toc:r};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\ub85c\ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uba74 \ub7f0\ud0c0\uc784 \uc608\uc678\uac00 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uc73c\ub2c8 \uc0ac\uc6a9\ud558\uba74 \uc548\ub41c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc81c\ub124\ub9ad \ub3c4\uc785 \uc774\uc804 \ucf54\ub4dc\uc640\uc758 \ud638\ud658\uc131\uc744 \uc704\ud574 \uc81c\uacf5\ub420 \ubfd0\uc784")))),Object(c.b)("h2",{id:"\uc81c\ub124\ub9ad-\ud0c0\uc785-generic-type"},"\uc81c\ub124\ub9ad \ud0c0\uc785 generic type"),Object(c.b)("h3",{id:"\uc81c\ub124\ub9ad-\ud074\ub798\uc2a4-\uc81c\ub124\ub9ad-\uc778\ud130\ud398\uc774\uc2a4"},"\uc81c\ub124\ub9ad \ud074\ub798\uc2a4, \uc81c\ub124\ub9ad \uc778\ud130\ud398\uc774\uc2a4"),Object(c.b)("p",null,"\ud074\ub798\uc2a4\uc640 \uc778\ud130\ud398\uc774\uc2a4 \uc120\uc5b8\uc5d0 \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc4f0\uc784"),Object(c.b)("h3",{id:"list-\uc778\ud130\ud398\uc774\uc2a4"},"List \uc778\ud130\ud398\uc774\uc2a4"),Object(c.b)("p",null,"\uc6d0\uc18c\ud0c0\uc785\uc744 \ub098\ud0c0\ub0b4\ub294 \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218 E \ub97c \ubc1b\ub294\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"List \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc644\uc804\ud55c \uc774\ub984\uc740 ",Object(c.b)("inlineCode",{parentName:"li"},"List<E>")," \uc774\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc9e7\uac8c ",Object(c.b)("inlineCode",{parentName:"li"},"List")," \ub77c\uace0 \uc790\uc8fc \uc4f4\ub2e4.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public interface List<E> extends Collection<E> {\n    // ..\n}\n")),Object(c.b)("h2",{id:"\ub9e4\uac1c\ubcc0\uc218\ud654-\ud0c0\uc785"},"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785"),Object(c.b)("p",null,"\uc81c\ub124\ub9ad \ud0c0\uc785\uc740 \ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785\uc744 \uc815\uc758\ud568"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},Object(c.b)("em",{parentName:"p"},"\ud074\ub798\uc2a4(\uc778\ud130\ud398\uc774\uc2a4)\uc774\ub984 <\uc2e4\uc81c \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218>")))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"List<String>")," "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\uc6d0\uc18c\uc758 \ud0c0\uc785\uc774 String \uc778 \ub9ac\uc2a4\ud2b8"),"\ub97c \ub73b\ud558\ub294 ",Object(c.b)("strong",{parentName:"li"},"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"String"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\uc815\uaddc (formal) \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218 E")," \uc5d0 \ud574\ub2f9"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\uc2e4\uc81c (actual) \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218"))))),Object(c.b)("h2",{id:"\ub85c\ud0c0\uc785-raw-type"},"\ub85c\ud0c0\uc785 raw type"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\uc81c\ub124\ub9ad \ud0c0\uc785\uc744 \uc815\uc758\ud558\uba74 \u2192 \ub538\ub9b0 \ub85c\ud0c0\uc785\ub3c4 \ud568\uaed8 \uc815\uc758\ub41c\ub2e4."))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"raw type \uc758\ubbf8")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\uc81c\ub124\ub9ad \ud0c0\uc785\uc5d0\uc11c \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc804\ud600 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac83"))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"List<E>")," \uc758 \ub85c\ud0c0\uc785 \u2192 List"),Object(c.b)("p",null,"\ud0c0\uc785 \uc120\uc5b8\uc5d0\uc11c \uc81c\ub124\ub9ad\ud0c0\uc785 \uc815\ubcf4\uac00 \uc804\ubd80 \uc9c0\uc6cc\uc9c4 \uac83\ucc98\ub7fc \ub3d9\uc791\ud568"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'private final Collection stamps = ...;\nstamps.add(new Coin(...));  // "unchecked call" \uacbd\uace0\ub97c \ub0b4\ubc49\ub294\ub2e4.\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Stamp \ub300\uc2e0 Coin \uc744 \ub123\uc5b4\ub3c4 \uc544\ubb34\ub7f0 \uc624\ub958\uc5c6\uc774 \ucef4\ud30c\uc77c \ub418\uace0 \uc2e4\ud589\ub41c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 \ubaa8\ud638\ud55c \uacbd\uace0\uba54\uc138\uc9c0\ub97c \ubcf4\uc5ec\uc8fc\uae34 \ud55c\ub2e4.")),Object(c.b)("h4",{id:"\ubc18\ubcf5\uc790\uc758-\ub85c-\ud0c0\uc785---\ub7f0\ud0c0\uc784\uc5d0-\uc624\ub958-\ubc1c\uacac-\ubb38\uc81c"},"\ubc18\ubcf5\uc790\uc758 \ub85c \ud0c0\uc785 -> \ub7f0\ud0c0\uc784\uc5d0 \uc624\ub958 \ubc1c\uacac \ubb38\uc81c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"for (Iterator i = stamps.iterator(); i.hasNext(); ) {\n    Stamp stamp = (Stamp) i.next(); // ClassCastException \uc744 \ub358\uc9c4\ub2e4.\n    stamp.cancel();\n}\n")),Object(c.b)("h4",{id:"\ub9e4\uac1c\ubcc0\uc218\ud654\ub41c-\uceec\ub809\uc158-\ud0c0\uc785---\ud0c0\uc785-\uc548\uc804\uc131-\ud655\ubcf4"},"\ub9e4\uac1c\ubcc0\uc218\ud654\ub41c \uceec\ub809\uc158 \ud0c0\uc785 - \ud0c0\uc785 \uc548\uc804\uc131 \ud655\ubcf4"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"private final Collection<Stamp> stamps = ...;\n")),Object(c.b)("p",null,"\uc624\ub958\ub294 \ucef4\ud30c\uc77c\ud0c0\uc784\uc5d0 \ubc1c\uacac\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc774\uc0c1\uc801\uc774\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 stamps \uc5d0\ub294 Stamp \uc758 \uc778\uc2a4\ud134\uc2a4\ub9cc \ub123\uc5b4\uc57c \ud568\uc744 \uc778\uc9c0"),Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\ub294 \uceec\ub809\uc158\uc5d0\uc11c \uc6d0\uc18c\ub97c \uaebc\ub0b4\ub294 \ubaa8\ub4e0 \uacf3 \u2192 \ubcf4\uc774\uc9c0 \uc54a\ub294 \ud615\ubcc0\ud658\uc744 \ucd94\uac00",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud56d\uc0c1 \uc131\uacf5")))),Object(c.b)("h3",{id:"\ud0c0\ud611\uc810"},"\ud0c0\ud611\uc810"),Object(c.b)("p",null,"\ub85c\ud0c0\uc785\uc740 \uc808\ub300 \uc4f0\uba74 \uc548\ub418\uc9c0\ub9cc,\n\uc5b8\uc5b4\ucc28\uc6d0\uc5d0\uc11c\ub294 \ud638\ud658\uc131 \ub54c\ubb38\uc5d0 \uc9c0\uc6d0\ud558\uace0 \uc788\ub2e4."),Object(c.b)("p",null,"\uc704\ud5d8\uc131 "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc81c\ub124\ub9ad\uc774 \uc548\uaca8\uc8fc\ub294 \uc548\uc804\uc131\uacfc \ud45c\ud604\ub825\uc744 \ubaa8\ub450 \uc783\uc74c")),Object(c.b)("p",null,"\ud638\ud658\uc131"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc790\ubc14\uac00 \uc81c\ub124\ub9ad\uc744 \ubc1b\uc544\ub4e4\uc774\uae30\uae4c\uc9c0 10\ub144\uc774 \uac78\ub9b0 \ud0d3\uc5d0 \uc81c\ub124\ub9ad \uc5c6\uc774 \uc9e0 \ucf54\ub4dc\uac00 \uc138\uc0c1\uc744 \ub4a4\ub36e\uc5b4 \ubc84\ub9bc")),Object(c.b)("h2",{id:"listobject"},Object(c.b)("inlineCode",{parentName:"h2"},"List<Object>")),Object(c.b)("h3",{id:"\ub85c\ud0c0\uc785-list"},"\ub85c\ud0c0\uc785 List"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud558\uba74 \uc548\ub41c\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc81c\ub124\ub9ad \ud0c0\uc785\uc5d0\uc11c \uc644\uc804\ud788 \ubc1c\uc744 \ube80 \uac83"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"List<String>")," \uc744 \ub118\uae38 \uc218 \uc788\ub2e4\n")),Object(c.b)("h3",{id:"listobject-1"},Object(c.b)("inlineCode",{parentName:"h3"},"List<Object>")),Object(c.b)("p",null,"\uc784\uc758 \uac1d\uccb4\ub97c \ud5c8\uc6a9\ud558\ub294 \ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud574\ub3c4 \uad1c\ucc2e\ub2e4"),Object(c.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud55c\ub2e4\ub294 \uc758\ubbf8\ub97c \ucef4\ud30c\uc77c\ub7ec\uc5d0 \uba85\ud655\ud788 \uc804\ub2ec\ud55c \uac83"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"List<String>")," \uc744 \ub118\uae38 \uc218 \uc5c6\ub2e4.")),Object(c.b)("h3",{id:"\uc81c\ub124\ub9ad\uc758-\ud558\uc704-\ud0c0\uc785-\uaddc\uce59"},"\uc81c\ub124\ub9ad\uc758 \ud558\uc704 \ud0c0\uc785 \uaddc\uce59"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"List<String>")," "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ub85c\ud0c0\uc785 List \uc758 \ud558\uc704 \ud0c0\uc785 O"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"List<Object>")," \uc758 \ud558\uc704\ud0c0\uc785 X \u2192 \ud0c0\uc785 \uc548\uc804")),Object(c.b)("h4",{id:"\ub7f0\ud0c0\uc784\uc5d0-\uc2e4\ud328\ud55c\ub2e4---unsafeadd-\uba54\uc11c\ub4dc\uac00-\ub85c\ud0c0\uc785-list-\ub97c-\uc0ac\uc6a9"},"\ub7f0\ud0c0\uc784\uc5d0 \uc2e4\ud328\ud55c\ub2e4 - unsafeAdd \uba54\uc11c\ub4dc\uac00 \ub85c\ud0c0\uc785 List \ub97c \uc0ac\uc6a9"),Object(c.b)("p",null,"\ucef4\ud30c\uc77c\uc740 \ub418\uc9c0\ub9cc, \ub85c\ud0c0\uc785 List \ub97c \uc0ac\uc6a9\ud558\uc5ec \uacbd\uace0\ubc1c\uc0dd,",Object(c.b)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \ub7f0\ud0c0\uc784\uc5d0\uc11c ClassCastException \uc774 \ubc1c\uc0dd\ud558\uace0\uc57c \ub9cc\ub2e4.    "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java",metastring:"{7}","{7}":!0},"public static void main(String[] args) {\n    List<String> strings = new ArrayList<>();\n    unsafeAdd(strings, Integer.valueOf(42));\n    String s = strings.get(0);  // ClassCastException, Integer \u2192 String\n}\n\nprivate statis void unsafeAdd(List list, Object o) {\n    list.add(o);\n}\n")),Object(c.b)("p",null,"List \ub97c \ub9e4\uac1c\ubcc0\uc218\ud654\ud0c0\uc785 ",Object(c.b)("inlineCode",{parentName:"p"},"List<Object>")," \ub85c \ubc14\uafb8\uba74 \ucef4\ud30c\uc77c \uc870\ucc28 \ub418\uc9c0 \uc54a\uac8c \ub41c\ub2e4."),Object(c.b)("h2",{id:"\ube44\ud55c\uc815\uc801-\uc640\uc77c\ub4dc\uce74\ub4dc-\ud0c0\uc785-unbounded-wildcard-type"},"\ube44\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785 unbounded wildcard type"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\uc81c\ub124\ub9ad \ud0c0\uc785\uc744 \uc4f0\uace0 \uc2f6\uc9c0\ub9cc, \uc2e4\uc81c \ud0c0\uc785 \ub9e4\uac1c\ubcc0\uc218\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc2e0\uacbd\uc4f0\uace0 \uc2f6\uc9c0 \uc54a\uc744 \ub54c \uc0ac\uc6a9\ud568"),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud0c0\uc785\uc774\ub77c\ub3c4 \ub2f4\uc744 \uc218 \uc788\ub294 \uac00\uc7a5 \ubc94\uc6a9\uc801\uc778 \ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Set<E>")," \u2192 ",Object(c.b)("inlineCode",{parentName:"li"},"Set<?>")," "),Object(c.b)("li",{parentName:"ul"},"\ud0c0\uc785\uc548\uc804, \uc720\uc5f0\ud568")))),Object(c.b)("p",null,"\uc798\ubabb\ub41c \uc608 - \ubaa8\ub974\ub294 \ud0c0\uc785\uc758 \uc6d0\uc18c\ub3c4 \ubc1b\ub294 \ub85c \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud568"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"static int numElementsInCommon(Set s1, Set s2) {\n    int result = 0;\n    for (Object o1 : s1) \n        if (s2.contains(o1)) \n            result++;\n    return result;\n}\n")),Object(c.b)("p",null,"\ube44\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785 \uc0ac\uc6a9"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"static int numElementsInCommon(Set<?> s1, Set<?> s2) { ... }\n")),Object(c.b)("h3",{id:"\ube44\ud55c\uc815\uc801-\uc640\uc77c\ub4dc\uce74\ub4dc-\ud0c0\uc785\uacfc-\ub85c\ud0c0\uc785\uc758-\ucc28\uc774\uc810"},"\ube44\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\uacfc \ub85c\ud0c0\uc785\uc758 \ucc28\uc774\uc810"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc640\uc77c\ub4dc\uce74\ub4dc\ud0c0\uc785 \u2192 \uc548\uc804, \ub85c\ud0c0\uc785 \u2192 \ube44\uc548\uc804")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Collection<?>")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"null \uc678\uc5d0\ub294 \uc5b4\ub5a4 \uc6d0\uc18c\ub3c4 \ub123\uc744 \uc218 \uc5c6\ub2e4. \u2192 else \ucef4\ud30c\uc77c \uc5d0\ub7ec"),Object(c.b)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc5d0\uc11c \uaebc\ub0bc \uc218 \uc788\ub294 \uac1d\uccb4\uc758 \ud0c0\uc785\ub3c4 \uc804\ud600 \uc54c \uc218 \uc5c6\ub2e4.")),Object(c.b)("h2",{id:"\ub85c\ud0c0\uc785-\uaddc\uce59\uc758-\uc608\uc678"},"\ub85c\ud0c0\uc785 \uaddc\uce59\uc758 \uc608\uc678"),Object(c.b)("h3",{id:"class-\ub9ac\ud130\ub7f4\uc5d0\ub294-\ub85c\ud0c0\uc785\uc744-\uc368\uc57c-\ud55c\ub2e4"},"class \ub9ac\ud130\ub7f4\uc5d0\ub294 \ub85c\ud0c0\uc785\uc744 \uc368\uc57c \ud55c\ub2e4."),Object(c.b)("p",null,"\uc790\ubc14 \uba85\uc138, class \ub9ac\ud130\ub7f4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uc9c0 \ubabb\ud55c\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"List<String>.class"),", ",Object(c.b)("inlineCode",{parentName:"li"},"List<?>.class")))),Object(c.b)("li",{parentName:"ul"},"\ubc30\uc5f4\uacfc \uae30\ubcf8 \ud0c0\uc785\ub9cc \ud5c8\uc6a9\ud55c\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"List.class"),", ",Object(c.b)("inlineCode",{parentName:"li"},"String[].class"),", ",Object(c.b)("inlineCode",{parentName:"li"},"int.class"))))),Object(c.b)("h3",{id:"instanceof-\uc5f0\uc0b0\uc790"},"instanceof \uc5f0\uc0b0\uc790"),Object(c.b)("p",null,"\ub7f0\ud0c0\uc784\uc5d0\ub294 \uc81c\ub124\ub9ad \ud0c0\uc785 \uc815\ubcf4\uac00 \uc9c0\uc6cc\uc9d0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"instanceof \uc5f0\uc0b0\uc790",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785 \uc911, \ube44\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785\ub9cc \uc0ac\uc6a9 \uac00\ub2a5"),Object(c.b)("li",{parentName:"ul"},"\ub85c\ud0c0\uc785, \ube44\ud55c\uc815\uc801 \uc640\uc77c\ub4dc\uce74\ub4dc \ubaa8\ub450 \ub611\uac19\uc774 \ub3d9\uc791\ud568",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ub85c\ud0c0\uc785\uc0ac\uc6a9 \u2192 \ucf54\ub4dc \uae54\ub054")))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"if (o instanceof Set) {\n    Set<?> s = (Set<?>) o;\n}\n")),Object(c.b)("h2",{id:"\ub85c\ud0c0\uc785-object-"},"\ub85c\ud0c0\uc785, ",Object(c.b)("inlineCode",{parentName:"h2"},"...<Object>"),", ",Object(c.b)("inlineCode",{parentName:"h2"},"...<?>")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"...<Object>")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud0c0\uc785\uc758 \uac1d\uccb4\ub3c4 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \ub9e4\uac1c\ubcc0\uc218\ud654 \ud0c0\uc785")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"...<?>")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ubaa8\uc885\uc758 \ud0c0\uc785 \uac1d\uccb4\ub9cc \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uc640\uc77c\ub4dc\uce74\ub4dc \ud0c0\uc785 ??")),Object(c.b)("p",null,"\ub85c\ud0c0\uc785"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc81c\ub124\ub9ad \ud0c0\uc785 \uc2dc\uc2a4\ud15c\uc5d0 \uc18d\ud558\uc9c0 \uc54a\uc74c")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"...<Object>"),", ",Object(c.b)("inlineCode",{parentName:"p"},"...<?>")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud0c0\uc785 \uc548\uc804")),Object(c.b)("p",null,"\ub85c\ud0c0\uc785"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud0c0\uc785 \ubd88\uc548\uc804")))}o.isMDXComponent=!0}}]);