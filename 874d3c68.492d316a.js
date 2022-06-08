(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),l=n(7),b=(n(0),n(472)),i={title:"Design Patterns"},c={unversionedId:"javascript/OOP/OOP_design_patterns",id:"javascript/OOP/OOP_design_patterns",isDocsHomePage:!1,title:"Design Patterns",description:"MVC 1",source:"@site/docs/javascript/OOP/OOP_design_patterns.md",slug:"/javascript/OOP/OOP_design_patterns",permalink:"/docs/javascript/OOP/OOP_design_patterns",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Inversion of Control",permalink:"/docs/javascript/OOP/OOP_inversion_of_control"},next:{title:"TypeCheck",permalink:"/docs/javascript/OOP/OOP_type_check"}},a=[{value:"MVC 1",id:"mvc-1",children:[{value:"\ubcc0\ud654\uc728\uc774 \ub2e4\ub974\uba74 \uc758\uc874\uc131\uc744 \ubd84\ub9ac\ud574\uc57c \ud55c\ub2e4.",id:"\ubcc0\ud654\uc728\uc774-\ub2e4\ub974\uba74-\uc758\uc874\uc131\uc744-\ubd84\ub9ac\ud574\uc57c-\ud55c\ub2e4",children:[]}]},{value:"\uc81c\uc655\uc801 controller MVC \ubaa8\ub378",id:"\uc81c\uc655\uc801-controller-mvc-\ubaa8\ub378",children:[]},{value:"MVP model view presenter",id:"mvp-model-view-presenter",children:[]},{value:"MVVM model view viewModel",id:"mvvm-model-view-viewmodel",children:[{value:"ViewModel \ubdf0\ub97c \ub300\uc2e0\ud560 \uac1d\uccb4",id:"viewmodel-\ubdf0\ub97c-\ub300\uc2e0\ud560-\uac1d\uccb4",children:[]},{value:"Binder",id:"binder",children:[]}]}],o={toc:a};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"mvc-1"},"MVC 1"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023309-a14b9280-841b-11eb-9dcc-843574d06234.png",alt:"image"}),"\n\ud654\uc0b4\ud45c\ub294 \uc54c\uace0 \uc788\ub2e4 \uad00\uacc4"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"controller \ub294, view \uc640 model \uc744 \uc54c\uace0\uc788\ub2e4.")),Object(b.b)("h3",{id:"\ubcc0\ud654\uc728\uc774-\ub2e4\ub974\uba74-\uc758\uc874\uc131\uc744-\ubd84\ub9ac\ud574\uc57c-\ud55c\ub2e4"},"\ubcc0\ud654\uc728\uc774 \ub2e4\ub974\uba74 \uc758\uc874\uc131\uc744 \ubd84\ub9ac\ud574\uc57c \ud55c\ub2e4."),Object(b.b)("p",null,"\ubcc0\ud654\uc728"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\ubcc0\uacbd \uc774\uc720"),", \ubcc0\uacbd \ube48\ub3c4 .. \ub4f1")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"\uac1d\uccb4\uac00 \ubc14\ub00c\ub294 \uc774\uc720\ub97c \ud558\ub098\ub85c \ub9cc\ub4e4\uc790 SRP")),Object(b.b)("p",null,"View \ub294 Model \uc744 \uc54c\uace0 \uc788\ub2e4.(\uc758\uc874\uc131\uc774 \uc788\ub2e4)"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc View \uc640 Model \uc758 \ubcc0\ud654\uc728\uc774 \ub2e4\ub974\ubbc0\ub85c \ubd84\ub9ac\ud574\uc57c \ud55c\ub2e4.")),Object(b.b)("h4",{id:"model"},"Model"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ube44\uc988\ub2c8\uc2a4\uc5d0 \uad00\uacc4\ub41c \uac83\uc744 \ubcc0\uacbd")),Object(b.b)("h4",{id:"view"},"View"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uc758 \uc778\ud130\ub809\uc158\ud558\ub294 \ubc29\ubc95\uc744 \ubcc0\uacbd")),Object(b.b)("p",null,"mvc \ub294 \uc8fc\ub85c \uc11c\ubc84\uc5d0\uc11c \uc4f4\ub2e4."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uc11c\ubc84\uc5d0\uc11c\ub294 view -> model \uad00\uacc4\uac00 \uc5c6\uae30 \ub54c\ubb38")),Object(b.b)("h2",{id:"\uc81c\uc655\uc801-controller-mvc-\ubaa8\ub378"},"\uc81c\uc655\uc801 controller MVC \ubaa8\ub378"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023322-b1637200-841b-11eb-9df3-41c5f09e1a9d.png",alt:"image"})),Object(b.b)("p",null,"View \uac00 Model \ub300\uc2e0, Controller \ub97c \uc54c\uac8c \ub418\uc5c8\ub2e4. "),Object(b.b)("p",null,"\u2192 \ucee8\ud2b8\ub864\ub7ec\uac00 \ubaa8\ub450 \uc54c\uac8c\ub41c \uad6c\uc870 "),Object(b.b)("p",null,"\ubb38\uc81c"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Controller \uac00 View \uc640 Model \uc758 \ubcc0\ud654\ub97c \ubc18\uc601\ud574 \uc8fc\uc5b4\uc57c \ud55c\ub2e4. "),Object(b.b)("li",{parentName:"ul"},"Controller \uc758 \uc720\uc9c0\ubcf4\uc218\uac00 \ud798\ub4e4\uc5b4\uc9c4\ub2e4.")),Object(b.b)("p",null,"\uc774\ub7f0 \uc758\uc874\uc131\ub4e4\uc744 \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 mvc \uc790\uccb4\uc5d0\uc11c\ub294 \uc5c6\ub2e4."),Object(b.b)("h2",{id:"mvp-model-view-presenter"},"MVP model view presenter"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023342-dc4dc600-841b-11eb-9ce9-d9ed6e8f4048.png",alt:"image"}),"\n\ub9ce\uc774 \ucc44\uc6a9\ub418\uc5c8\ub2e4.\n\ube44\uc8fc\uc5bc \ubca0\uc774\uc9c1, MFC, \uc548\ub4dc\ub85c\uc774\ub4dc\ubdf0 \uac00 \uc774 \ubaa8\ub378\uc744 \uc4f4\ub2e4."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"View \uc5d0 \ub300\ud55c \ubaa8\ub378\uc758 \uc758\uc874\uc131\uc774 \uc644\uc804\ud788 \uc81c\uac70\ub418\uc5c8\ub2e4.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"View \uac00 \uadf8\ub9bc\uc744 \uadf8\ub9ac\ub294 \uc7ac\ub7c9\uad8c\uc774 \uc5c6\uc74c "),Object(b.b)("li",{parentName:"ul"},"Presenter \uac00 getter setter \ub97c \ud1b5\ud574\uc11c View \uc758 \ud1b5\uc81c\ub97c \ubc14\uafd4\uc90c"),Object(b.b)("li",{parentName:"ul"},"View \uc5d0 \ub9ce\uc740 getter setter \ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4\ub294 \ub2e8\uc810")),Object(b.b)("h2",{id:"mvvm-model-view-viewmodel"},"MVVM model view viewModel"),Object(b.b)("p",null,Object(b.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111023682-bcb79d00-841d-11eb-8c9e-bd7a70d48903.png",alt:"image"})),Object(b.b)("p",null,"viewModel \uc774 view \ub97c \ubaa8\ub974\uac8c \ud558\ub294 \uac83\uc5d0 \uc788\ub2e4. "),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"binder \ub77c\ub294 \uac83\uc774 \ud544\uc694\ud558\ub2e4.")),Object(b.b)("h3",{id:"viewmodel-\ubdf0\ub97c-\ub300\uc2e0\ud560-\uac1d\uccb4"},"ViewModel \ubdf0\ub97c \ub300\uc2e0\ud560 \uac1d\uccb4"),Object(b.b)("p",null,"\uc21c\uc218\ud55c view \uc774\ub2e4. "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\uadf8\ub9bc \uadf8\ub9ac\ub294 view \uac00 \uc544\ub2d8"),Object(b.b)("li",{parentName:"ul"},"\uc778\uba54\ubaa8\ub9ac \uac1c\uccb4\ub85c\uc11c\uc758 \uc21c\uc218\ud55c \ub370\uc774\ud130\ub85c\uc11c\uc758 view \uc774\ub2e4.")),Object(b.b)("p",null,"\ub178\ub4dc\uc5d0\uc11c\ub294 dom \uc774 \uc5c6\ub2e4. \ub300\uc2e0 \ub178\ub4dc\uc5d0\uc11c viewModel \uc744 \uac31\uc2e0\ud560 \uc218 \uc788\ub2e4."),Object(b.b)("p",null,"viewModel \uc5d0 \ub9de\uac8c \uadf8\ub9bc\uc774 \uadf8\ub824\uc838\uc57c \ud55c\ub2e4. "),Object(b.b)("h3",{id:"binder"},"Binder"),Object(b.b)("img",{src:"https://user-images.githubusercontent.com/31977543/111023682-bcb79d00-841d-11eb-8c9e-bd7a70d48903.png",width:"50%",style:{minWidth:"400px"}}),Object(b.b)("img",{src:"https://user-images.githubusercontent.com/31977543/111023685-c7723200-841d-11eb-9baf-e2bb8409fbd0.png",width:"50%",style:{minWidth:"400px"}}),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"binder \uac00 viewModel \uc758 \ubcc0\ud654\ub97c \uac10\uc9c0\ud574 view \ub97c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95"),Object(b.b)("li",{parentName:"ol"},"view \uc758 \ubcc0\ud654\uac00 \uc0dd\uae30\uba74 binder \ub97c \ub530\ub77c\uc11c viewModel \uc744 \uac31\uc2e0\ud558\ub294 \ubc29\ubc95")),Object(b.b)("p",null,"\uc790\ub3d9\uc73c\ub85c \ud574\uc8fc\ub294 binder \uac00 \uc788\uc5b4\uc57c MVVM \uc774 \uc131\ub9bd "),Object(b.b)("p",null,"view \uc640 viewModel \uc0ac\uc774\uc758 \uc758\uc874\uc131\uc744,"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"binder \uac00 \ub2e4 \uc544\ub294 \uac83\uc73c\ub85c \ub458 \uc0ac\uc774\uc758 \uc758\uc874\uc131\uc744 \uc5c6\uc560 \ubc84\ub838\ub2e4. ")),Object(b.b)("h4",{id:"\ub2e8\ubc29\ud5a5-observation"},"\ub2e8\ubc29\ud5a5 observation"),Object(b.b)("img",{src:"https://user-images.githubusercontent.com/31977543/111023682-bcb79d00-841d-11eb-8c9e-bd7a70d48903.png",width:"50%",style:{minWidth:"400px"}}),Object(b.b)("p",null,"binder \uac00 observe \ud558\ub294 \ub300\uc0c1\uc740 \uc635\uc158\uc774\ub2e4. "),Object(b.b)("h4",{id:"call"},"call"),Object(b.b)("img",{src:"https://user-images.githubusercontent.com/31977543/111023685-c7723200-841d-11eb-9baf-e2bb8409fbd0.png",width:"50%",style:{minWidth:"400px"}}),Object(b.b)("p",null,"viewModel \uc774 binder \ub97c \uc54c\uac8c \ud574\uc11c \uc9c1\uc811 \uc0c1\ud0dc\uac00 \ubc14\ub01c\uc744 call \ud574 \uc900\ub2e4."),Object(b.b)("p",null,"observer \ubcf4\ub2e4, \uc218\ub3d9\uc73c\ub85c call \uc744 \ud558\ub294 \uac83\uc774 \uc720\ub9ac\ud55c \uacbd\uc6b0\ub3c4 \uc788\ub2e4."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"observer \ub294 viewModel \uc774 10\uac1c \ubc14\ub00c\uba74 10\ubc88 \uac31\uc2e0\uc774 \ub418\uc9c0\ub9cc"),Object(b.b)("li",{parentName:"ul"},"call \uc740 \uc218\ub3d9\uc73c\ub85c \ud55c\ubc88\uc5d0 \uac31\uc2e0\ud560 \uc218\ub3c4 \uc788\ub2e4.")))}p.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),l=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,s=u["".concat(i,".").concat(O)]||u[O]||d[O]||b;return n?l.a.createElement(s,c(c({ref:t},o),{},{components:n})):l.a.createElement(s,c({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,i=new Array(b);i[0]=O;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<b;o++)i[o]=n[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);