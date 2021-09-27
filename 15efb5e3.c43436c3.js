(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{415:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),j=r,d=b["".concat(i,".").concat(j)]||b[j]||f[j]||c;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=j;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(415)),i={title:"ch3 \ubaa8\ub4e0 \uac1d\uccb4\uc758 \uacf5\ud1b5 \uba54\uc11c\ub4dc"},o={unversionedId:"java/effective-java/ch3/index",id:"java/effective-java/ch3/index",isDocsHomePage:!1,title:"ch3 \ubaa8\ub4e0 \uac1d\uccb4\uc758 \uacf5\ud1b5 \uba54\uc11c\ub4dc",description:"Object",source:"@site/docs/java/effective-java/ch3/index.md",slug:"/java/effective-java/ch3/index",permalink:"/docs/java/effective-java/ch3/index",version:"current",sidebar:"effectiveJava",previous:{title:"9. try-finally \ubcf4\ub2e4\ub294 try-with-resources \ub97c \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM9"},next:{title:"10. equals \ub294 \uc77c\ubc18 \uaddc\uc57d\uc744 \uc9c0\ucf1c \uc7ac\uc815\uc758\ud558\ub77c",permalink:"/docs/java/effective-java/ch3/ITEM10"}},l=[{value:"<code>Object</code>",id:"object",children:[]},{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"object"},Object(c.b)("inlineCode",{parentName:"h2"},"Object")),Object(c.b)("p",null,"\uac1d\uccb4\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub294 \uad6c\uccb4 \ud074\ub798\uc2a4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c \uc0c1\uc18d\ud574\uc11c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uacc4\ub428"),Object(c.b)("li",{parentName:"ul"},"final \uc774 \uc544\ub2cc, \uba54\uc11c\ub4dc ",Object(c.b)("inlineCode",{parentName:"li"},"equals"),", ",Object(c.b)("inlineCode",{parentName:"li"},"hashCode"),", ",Object(c.b)("inlineCode",{parentName:"li"},"toString"),", ",Object(c.b)("inlineCode",{parentName:"li"},"clone"),", ",Object(c.b)("inlineCode",{parentName:"li"},"finalize"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ubaa8\ub450 overriding \uc744 \uc5fc\ub450\ud574 \uc124\uacc4\ub418\uc5c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\uc7ac\uc815\uc758 \uc2dc \uc9c0\ucf1c\uc57c \ud558\ub294 \uc77c\ubc18 \uaddc\uc57d\uc774 \uba85\ud655\ud788 \uc815\uc758\ub418\uc5b4 \uc788\uc74c")),Object(c.b)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub97c \uc798\ubabb \uad6c\ud604\ud558\uba74 \ub300\uc0c1 \ud074\ub798\uc2a4\uac00 \uc774 \uaddc\uc57d\uc744 \uc900\uc218\ud55c\ub2e4\uace0 \uac00\uc815\ud558\ub294 \ud074\ub798\uc2a4 (HashMap/HashSet \ub4f1) \ub97c ",Object(c.b)("strong",{parentName:"li"},"\uc624\ub3d9\uc791")," \ud558\uac8c \ud560 \uc218 \uc788\ub2e4.")))),Object(c.b)("h2",{id:"\ubaa9\ud45c"},"\ubaa9\ud45c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"final \uc774 \uc544\ub2cc Object \uba54\uc11c\ub4dc\ub4e4\uc758 \uc815\uc758 \uaddc\uc57d \ubc29\ubc95")))}p.isMDXComponent=!0}}]);