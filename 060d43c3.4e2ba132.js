(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{481:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),o=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=o(n),d=r,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(O,c(c({ref:t},s),{},{components:n})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(481));const i={title:"Observer 1"},l={unversionedId:"javascript/OOP/OOP_observer",id:"javascript/OOP/OOP_observer",isDocsHomePage:!1,title:"Observer 1",description:"\uc774\uc804\uc758 MVVM \uc740 observation \uc744 \ud558\uace0 \uc788\uc9c0 \uc54a\uc74c",source:"@site/docs/javascript/OOP/OOP_observer.md",slug:"/javascript/OOP/OOP_observer",permalink:"/docs/javascript/OOP/OOP_observer",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"Strategy",permalink:"/docs/javascript/OOP/OOP_strategy"},next:{title:"Composite",permalink:"/docs/javascript/OOP/OOP_composite"}},c=[{value:"Observer \ud328\ud134",id:"observer-\ud328\ud134",children:[]},{value:"Observer \ub97c \ud615(\uac1d\uccb4)\uc73c\ub85c \uc815\uc758",id:"observer-\ub97c-\ud615\uac1d\uccb4\uc73c\ub85c-\uc815\uc758",children:[]},{value:"\ubdf0\ubaa8\ub378 \ud655\uc7a5",id:"\ubdf0\ubaa8\ub378-\ud655\uc7a5",children:[{value:"\ud544\ub4dc\uc640 \uba54\uc11c\ub4dc",id:"\ud544\ub4dc\uc640-\uba54\uc11c\ub4dc",children:[]},{value:"\uc0dd\uc131\uc790\uc758 \ubcc0\uacbd",id:"\uc0dd\uc131\uc790\uc758-\ubcc0\uacbd",children:[]},{value:"ViewModelValue",id:"viewmodelvalue",children:[]}]}],b={toc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("img",{src:"https://user-images.githubusercontent.com/31977543/111023685-c7723200-841d-11eb-9baf-e2bb8409fbd0.png",width:"70%",style:{minWidth:"400px"}}),Object(a.b)("p",null,"\uc774\uc804\uc758 MVVM \uc740 observation \uc744 \ud558\uace0 \uc788\uc9c0 \uc54a\uc74c     "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Model \uc758 \ubcc0\ud654\ub97c \uc790\ub3d9\uc73c\ub85c \uc778\uc2dd\ud574\uc11c \uc790\ub3d9\uc73c\ub85c Binder \uac00 \uc6c0\uc9c1\uc774\uc9c0 \uc54a\uc558\ub2e4"),Object(a.b)("li",{parentName:"ul"},"\uc218\ub3d9\uc73c\ub85c Binder \ub97c call \ud588\ub2e4. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"binder.render(viewmodel);"))),Object(a.b)("h2",{id:"observer-\ud328\ud134"},"Observer \ud328\ud134"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Model \ubcc0\ud654 \u2192 Binder \uc790\ub3d9\uc73c\ub85c \ub3d9\uc791 ")),Object(a.b)("p",null,"\ub9ce\uc740 \ud504\ub808\uc784 \uc6cc\ud06c\uc5d0\uc11c\ub294 \uc790\ub3d9\uc73c\ub85c \ud574\uc900\ub2e4. "),Object(a.b)("p",null,"Binder \uac00 ViewModel \uc744 Observe \ud55c\uace0 \ub80c\ub354\ub9c1 \ud55c\ub2e4.\n",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111900607-e6ed0880-8a76-11eb-84b3-1e5e6f7c251f.png",alt:"image"})),Object(a.b)("p",null,"Observer(Binder) \uac00 \uc544\ub2cc, ViewModel \uc774 \uc77c\uc744 \ub354 \ub9ce\uc774\ud574\uc57c \ud55c\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ViewModel \uc774 Binder \uc5d0\uac8c ",Object(a.b)("strong",{parentName:"li"},"notify")," \ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"ViewModel \uc758 \ubcc0\ud654\ub97c ",Object(a.b)("strong",{parentName:"li"},"\ubd84\ub958"),"\ud574\uc11c \ubcf4\ub0b4\uc918\uc57c \ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ViewModel \uc758 \ubcc0\ud654\ub97c \uc2a4\uc2a4\ub85c \uc54c\uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},"defineProperty"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ud604\uc2dc\uc810\uc5d0\uc11c es5 \uac00 \ub3cc\uc544\uac00\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\ub294 \uc5c6\uc744 \uac83\uc774\ub2e4."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy"},"Proxy")," (es6~, babel \ub85c converting \ubd88\uac00\ub2a5)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\uc548\ub4dc\ub85c\uc774\ub4dc \uac24\ub7ed\uc2dc ~s4, \ub178\ud2b82, \uc708\ub3c4\uc6b0 7(ie9) \ub294 ES6 \ubbf8\uc9c0\uc6d0 "),Object(a.b)("li",{parentName:"ul"},"\uc2e0\uc911\ud558\uac8c \uc368\uc57c\ud55c\ub2e4")))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111900635-097f2180-8a77-11eb-8bdd-dd72fdafc11a.png",alt:"image"})),Object(a.b)("h2",{id:"observer-\ub97c-\ud615\uac1d\uccb4\uc73c\ub85c-\uc815\uc758"},"Observer \ub97c \ud615(\uac1d\uccb4)\uc73c\ub85c \uc815\uc758"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModelListener = class {\n  viewmodelUpdated(updated) {\n    throw 'override';\n  }\n};\n")),Object(a.b)("p",null,"\uac1d\uccb4\uc758 \ud2b9\uc815\ud55c \uba54\uc11c\ub4dc ",Object(a.b)("em",{parentName:"p"},"ViewModelListener")," \ub97c \ud638\ucd9c\ud574\uc57c ",Object(a.b)("em",{parentName:"p"},"Observing")," \uc744 \ud560 \uc218 \uc788\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ViewModelListener \uac00 Type \uc73c\ub85c \ub4e4\uc5b4\uc654\uc744 \uacbd\uc6b0 "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"viewmodelUpdated")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574\uc11c Observing \uc744 \ud1b5\ubcf4\ud55c\ub2e4.")),Object(a.b)("p",null,"Observer \ud328\ud134\uc740 "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc11c \ubcf4\ub0b4\uc8fc\ub294 Subject \uac00 \uc788\uace0"),Object(a.b)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud558\ub294 Observer \uac00 \uc788\ub2e4.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"rss \uc5d0\uc11c\ub294 event emitor \uc774\ub77c\uace0 \ud55c\ub2e4. \ub04a\uc784\uc5c6\uc774 \uc774\ubca4\ud2b8\ub97c \ub9cc\ub4e4\uc5b4 \ub0b4\ub294\uac83.")),Object(a.b)("h2",{id:"\ubdf0\ubaa8\ub378-\ud655\uc7a5"},Object(a.b)("a",{parentName:"h2",href:"https://eyabc.github.io/docs/javascript/OOP_mvvm_role_design#viewmodel"},"\ubdf0\ubaa8\ub378")," \ud655\uc7a5"),Object(a.b)("h3",{id:"\ud544\ub4dc\uc640-\uba54\uc11c\ub4dc"},"\ud544\ub4dc\uc640 \uba54\uc11c\ub4dc"),Object(a.b)("p",null,"\ud544\ub4dc"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"styles, attributes, properties, events")," \ud544\ub4dc\ub97c \uac00\uc9c4\ub2e4."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"isUpdated")," \ubdf0 \ubaa8\ub378\uc758 \uc5c5\ub370\uc774\ud2b8 \ub41c \ud56d\ubaa9\uc744 \uac00\uc9c4\ub2e4."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"listeners")," \ubdf0 \ubaa8\ub378\uc758 \ubcc0\ud654\ub97c \ud1b5\ubcf4\ud560 \ub9ac\uc2a4\ub108\ub4e4 \ubaa9\ub85d\uc774\ub2e4. ")),Object(a.b)("p",null,"\uba54\uc11c\ub4dc"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\ub9ac\uc2a4\ub108 \ucd94\uac00"),Object(a.b)("li",{parentName:"ol"},"\ub9ac\uc2a4\ub108 \uc0ad\uc81c"),Object(a.b)("li",{parentName:"ol"},"\ub9ac\uc2a4\ub108\uc5d0\uac8c isUpdated \ub97c \ud1b5\ubcf4\ud568"),Object(a.b)("li",{parentName:"ol"},"\uc0dd\uc131\uc790",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"styles, attributes, properties, events")," \uc800\uc7a5")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModel = class {\n  static get(data) {\n    return new ViewModel(data);\n  }\n\n  styles = {};\n  attributes = {};\n  properties = {};\n  events = {};\n  \n  // 3) \ub9ac\uc2a4\ub108\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud55c set. \uc5c5\ub370\uc774\ud2b8 \ub41c \uac83\ub4e4\n  #isUpdated = new Set;\n\n  /*\n     2) ViewModel \uc774 Subject \uc774\ub2e4.\n      Subject \ub294 \ub9ac\uc2a4\ub108\ub4e4\uc5d0\uac8c notification \ud574\uc918\uc57c \ud55c\ub2e4.\n  */\n  #listeners = new Set;\n\n  addListener(v, _ = type(v, ViewModelListener)) {\n    this.#listeners.add(v);\n  }\n\n  removeListener(v, _ = type(v, ViewModelListener)) {\n    this.#listeners.delete(v);\n  }\n\n  // 3) \ub9ac\uc2a4\ub108\uc5d0\uac8c isUpdated \uc744 \uc804\uc1a1\ud55c\ub2e4. \n  notify() {\n    this.#listeners.forEach(v => v.viewmodelUpdated(this.#isUpdated));\n  }\n\n  // 1) \uc2a4\uc704\uce58 \ubb38\uc5d0 \uc911\ubcf5\ub41c \ud0a4\uac00 \ubc18\ubcf5\ub418\uace0 \ub611\uac19\uc740 \ud560\ub2f9\uc774 \ubc18\ubcf5\ub418\ub294 \uc911\ubcf5\uc774 \uc788\ub2e4. \n  constructor(checker, data) {\n    Object.entries(data).forEach(([k, v]) => {\n      switch (k) {\n        case'styles':\n          this.styles = v;\n          break;\n        case'attributes':\n          this.attributes = v;\n          break;\n        case'properties':\n          this.properties = v;\n          break;\n        case'events':\n          this.events = v;\n          break;\n        default:\n          this[k] = v;\n      }\n    });\n    Object.seal(this);\n  }\n};\n\n// client\nconst viewmodel = ViewModel.get({\n  wrapper: ViewModel.get({styles: {width: '50%', background: '#ffa', cursor: 'pointer'}}),\n  title: ViewModel.get({properties: {innerHTML: 'Title'}}),\n  contents: ViewModel.get({properties: {innerHTML: 'Contents'}}),\n});\n")),Object(a.b)("h3",{id:"\uc0dd\uc131\uc790\uc758-\ubcc0\uacbd"},"\uc0dd\uc131\uc790\uc758 \ubcc0\uacbd"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModel = class {\n    constructor(checker, data, _ = type(data, 'object')) {\n      super();\n      /*\n        data : {\n                  styles: {width: '50%', background: '#ffa', cursor: 'pointer'},\n                  properties: {...},\n                  attributes: {...},\n                  events: {...},\n                  [category]: ViewModel.get({...}),\n                },\n      */\n      Object.entries(data).forEach(([k, v]) => {\n        /*\n          JS \uc758 \ubb38\uc790\uc5f4 indexOf \ub294 \ud2b9\ubcc4\ud558\uac8c \ube60\ub974\ub2e4.\n          C\ub85c \uc4f0\uc600\ub294\ub370, C \uc5d0\uc11c \uc778\ub77c\uc778\ub8e8\ud504?? \ub97c \ub3cc\uae30 \ub54c\ubb38\n        */\n        if ('styles,attributes,properties'.includes(k)) {\n          // setter \ub97c \uac10\uc2dc\ud558\ub294 defineProperties\n          this[k] = Object.defineProperties({},\n            // v \ub294 { width: '50%', background: '#ffa', cursor: 'pointer' } \uac00 \ub420 \uc218 \uc788\ub2e4. \n            Object.entries(v).reduce((r, [k, value]) => {\n              r[k] = {\n                enumerable: true, \n                get: _ => value, \n                set: newV => {\n                  value = newV;\n                  // \ubcc0\ud654\ub41c \uc18d\uc131\uc744 \uc800\uc7a5\ud55c\ub2e4.\n                  this.#isUpdated.add(new ViewModelValue(cat, k, value));\n                },\n              };\n              return r;\n            }, {}));\n        } else {\n          // default \uc778 \uacbd\uc6b0\uc774\ub2e4. \uae30\uc874\uc5d0\ub294 this[k] = v;\n          Object.defineProperty(this, k, {\n            enumerable: true, \n            get: _ => v,\n            set: newV => {\n              v = newV;\n              this.#isUpdated.add(new ViewModelValue('', k, v));\n            },\n          });\n        }\n      });\n      // ...\n    }\n}\n")),Object(a.b)("h3",{id:"viewmodelvalue"},"ViewModelValue"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModelValue = class {\n  cat;\n  k;\n  v;\n\n  constructor(cat, k, v) {\n    this.cat = cat;\n    this.k = k;\n    this.v = v;\n    Object.freeze(this);\n  }\n};\n")))}s.isMDXComponent=!0}}]);