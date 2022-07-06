(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{224:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return b}));var a=t(3),n=t(7),i=(t(0),t(479)),c={},o={unversionedId:"java/compareTo_equals",id:"java/compareTo_equals",isDocsHomePage:!1,title:"compareTo_equals",description:"compareTo \uc640 equals \ub97c \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218\ub294 \uc5c6\uc744\uae4c?",source:"@site/docs/java/compareTo_equals.mdx",slug:"/java/compareTo_equals",permalink:"/docs/java/compareTo_equals",version:"current",sidebar:"java",previous:{title:"java",permalink:"/docs/java/index"},next:{title:"Lombok - @Data",permalink:"/docs/java/lombok/data"}},l=[{value:"given",id:"given",children:[]},{value:"when",id:"when",children:[]},{value:"then",id:"then",children:[]},{value:"Error",id:"error",children:[]},{value:"Solve",id:"solve",children:[]}],s={toc:l};function b(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"compareTo \uc640 equals \ub97c \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218\ub294 \uc5c6\uc744\uae4c?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Po-Zzo/wish-list-app/tree/535d32bc4e4553e01c71090a13187357d5818a25/api/src"},"github"))),Object(i.b)("h3",{id:"given"},"given"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RegisteredPrice")," \ud074\ub798\uc2a4\ub294 price \uc640 registerDate \ub97c \uba64\ubc84\ubcc0\uc218\ub85c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class RegisteredPrice {\n\n  private final Price price;\n  private final DateVO registeredDate;\n\n  public static int sortByRegisteredDate(RegisteredPrice registeredPrice, RegisteredPrice anotherRegisteredPrice) {\n    return registeredPrice.registeredDate.compareTo(anotherRegisteredPrice.registeredDate);\n  }\n\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"VariablePrices")," \ud074\ub798\uc2a4\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},"RegisteredPrice")," \ud074\ub798\uc2a4\ub97c Set \uc758 \ud0c0\uc785\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class VariablePrices {\n\n  private final Set<RegisteredPrice> variablePrices;\n\n  public static VariablePrices of() {\n    return new VariablePrices(new HashSet<>());\n  }\n\n  public VariablePrices orderByTime() {\n    return variablePrices.stream()\n        .sorted(RegisteredPrice::sortByRegisteredDate)\n        .collect(Collectors.collectingAndThen(Collectors.toSet(),\n            VariablePrices::of));\n  }\n\n}\n")),Object(i.b)("h3",{id:"when"},"when"),Object(i.b)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 VariablePrices \uc758 set \uc5d0  ",Object(i.b)("inlineCode",{parentName:"p"},"add")," \ub97c \ud569\ub2c8\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"    VariablePrices variablePrices = VariablePrices.of();\n    DateVO DateVO1 = DateVO.of(LocalDate.of(2022, 1, 1));\n    DateVO DateVO2 = DateVO.of(LocalDate.of(2022, 1, 2));\n    DateVO DateVO3 = DateVO.of(LocalDate.of(2022, 1, 3));\n    DateVO DateVO4 = DateVO.of(LocalDate.of(2022, 1, 4));\n\n    variablePrices.add(RegisteredPrice.of(Price.of(1100), DateVO1)); // 1\n    variablePrices.add(RegisteredPrice.of(Price.of(1200), DateVO3)); // 2\n    variablePrices.add(RegisteredPrice.of(Price.of(1300), DateVO4)); // 3\n    variablePrices.add(RegisteredPrice.of(Price.of(1400), DateVO2)); // 4\n    variablePrices.add(RegisteredPrice.of(Price.of(1400), DateVO2)); // 5\n    variablePrices.add(RegisteredPrice.of(Price.of(1400), DateVO1)); // 6\n\n    System.out.printf(variablePrices.orderByTime().toString());\n")),Object(i.b)("h3",{id:"then"},"then"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"4 \uc640 5\ub294 \uac12 price \uc640 date \uac00  \uac19\uae30 \ub54c\ubb38\uc5d0 5\ub294 set \uc5d0\uc11c \uc81c\uc678 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ol"},"Date \uc21c\uc73c\ub85c \uc815\ub82c\ub418\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 1 -> 6 -> 4 -> 2 -> 3 \uc21c\uc73c\ub85c \ucd9c\ub825\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),Object(i.b)("p",null,"(variablePrices \uc5d0\uc11c \uc870\ud569\ub418\ub294 \ud074\ub798\uc2a4\ub4e4\uc740 \ubaa8\ub450 equals \uc640 hash \ub97c override \ud558\uc600\uc2b5\ub2c8\ub2e4.)"),Object(i.b)("h3",{id:"error"},"Error"),Object(i.b)("p",null,"\ucee4\ubc0b \uc804\uc5d0, Comparable \uc744 RegisteredPrice \uc5d0\uc11c \uad6c\ud604\uc744 \ud558\uc600\uc9c0\ub9cc, then.1 \uc744 \uc704\ud574 equals \ub97c \uc0ac\uc6a9\ud558\uace0,\nthen.2 \ub97c \uc704\ud574 compareTo \ub97c override \ud558\uc600\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"equals \uc5d0\uc11c\ub294 price \uc640 Date \ub97c \ube44\uad50, compareTo \uc5d0\uc11c\ub294 registeredDate \ube44\uad50"),Object(i.b)("p",null,"\uadf8\ub7ec\ub098 \uceec\ub809\uc158\ub4e4\uc740 compareTo \ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, equal \ub294 \ubb34\uc2dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uadf8 \uacb0\uacfc, \uc21c\uc11c\ub294 \uae30\ub300\ud55c \ubc14\uc640 \uac19\uc558\uc9c0\ub9cc, 4,5\ubc88\uc774 \uc911\ubcf5\uc73c\ub85c \ub4e4\uc5b4\uac00\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"\ub450\ubc88\uc9f8 \ubc29\ubc95\uc73c\ub85c, Comparable \uc744 \uad6c\ud604\ud558\uc9c0 \uc54a\uace0 Comparator \ud568\uc218\ud615 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc791\uc131\ud558\uc600\ub294\ub370\uc694, \uccab\ubc88\uc9f8 \ubc29\ubc95\uacfc \ub611\uac19\uc740 \uacb0\uacfc\ub97c \uc5bb\uc5c8\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"then \uc744 \ub9cc\uc871\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \uad6c\uc870\ub97c \uc9dc\uba74 \uc88b\uc744\uae4c\uc694?"),Object(i.b)("h2",{id:"solve"},"Solve"),Object(i.b)("p",null,"TreeMap \uc73c\ub85c \ud0c0\uc785\uc744 \ubcc0\uacbd\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 \uc544\uc774\ub514\uc5d0\uc774\uc158\uc744 \ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/173869240-d483b655-4a6b-43c1-b361-69f525ad554a.png",alt:"image"})))}b.isMDXComponent=!0},479:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return O}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),b=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=b(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,O=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return t?n.a.createElement(O,o(o({ref:r},s),{},{components:t})):n.a.createElement(O,o({ref:r},s))}));function O(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);