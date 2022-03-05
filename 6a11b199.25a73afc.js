(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{235:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),c=t(7),o=(t(0),t(455)),a={},s={unversionedId:"javascript/airbnb_js_style_guides/References",id:"javascript/airbnb_js_style_guides/References",isDocsHomePage:!1,title:"References",description:"References",source:"@site/docs/javascript/airbnb_js_style_guides/References.md",slug:"/javascript/airbnb_js_style_guides/References",permalink:"/docs/javascript/airbnb_js_style_guides/References",version:"current",sidebar:"javascript",previous:{title:"Types",permalink:"/docs/javascript/airbnb_js_style_guides/Types"},next:{title:"Objects",permalink:"/docs/javascript/airbnb_js_style_guides/Objects"}},i=[{value:"prefer-const, no-const-assign : \ubaa8\ub4e0 \uacf3\uc5d0 const \uc0ac\uc6a9",id:"prefer-const-no-const-assign--\ubaa8\ub4e0-\uacf3\uc5d0-const-\uc0ac\uc6a9",children:[]},{value:"no-var : references \uc7ac\ud560\ub2f9 -&gt; let",id:"no-var--references-\uc7ac\ud560\ub2f9---let",children:[]},{value:"let/ const -&gt; block-scoped.",id:"let-const---block-scoped",children:[]}],l={toc:i};function u(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"references"},"References"),Object(o.b)("h2",{id:"prefer-const-no-const-assign--\ubaa8\ub4e0-\uacf3\uc5d0-const-\uc0ac\uc6a9"},"prefer-const, no-const-assign : \ubaa8\ub4e0 \uacf3\uc5d0 const \uc0ac\uc6a9"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uc778\uc9c0 \ubd80\ud558 \uac10\uc18c"),Object(o.b)("li",{parentName:"ul"},"\uc720\uc9c0 \uad00\ub9ac\uc131 \ud5a5\uc0c1")),Object(o.b)("p",null,"references \uc758 \uc7ac\ud560\ub2f9 -> bugs, \ucf54\ub4dc \uc774\ud574\uc758 \uc5b4\ub824\uc6c0"),Object(o.b)("h2",{id:"no-var--references-\uc7ac\ud560\ub2f9---let"},"no-var : references \uc7ac\ud560\ub2f9 -> let"),Object(o.b)("p",null,"\ud568\uc218 \uc2a4\ucf54\ud504 var < \ube14\ub85d \uc2a4\ucf54\ud504 let"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ube14\ub85d \uc2a4\ucf54\ud504\ub294 \ub2e4\ub978 \ub9ce\uc740 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c \uc77c\ubc18\uc801\uc774\ub2e4."),Object(o.b)("li",{parentName:"ul"},"\ube14\ub85d \uc2a4\ucf54\ud504\ub294 \ud504\ub85c\uadf8\ub798\uba38\uc758 \uc2e4\uc218 \ubc29\uc9c0")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'var count = people.length;\nvar enoughFood = count > sandwiches.length;\n\nif (enoughFood) {\n    var count = sandwiches.length; // \uc2e4\uc218\ub85c count \ubcc0\uc218 \uc7ac\uc815\uc758\n    console.log("We have " + count + " sandwiches for everyone. Plenty for all!");\n}\n\n// count \ubcc0\uc218\uac00 \ub354 \uc774\uc0c1 \uc815\ud655\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nconsole.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");\n')),Object(o.b)("h2",{id:"let-const---block-scoped"},"let/ const -> block-scoped."))}u.isMDXComponent=!0},455:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),u=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},f=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,d=p["".concat(a,".").concat(f)]||p[f]||b[f]||o;return t?c.a.createElement(d,s(s({ref:n},l),{},{components:t})):c.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);