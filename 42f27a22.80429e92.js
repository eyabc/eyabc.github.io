(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(414)),l={title:"Composite"},o={unversionedId:"javascript/OOP/OOP_composite",id:"javascript/OOP/OOP_composite",isDocsHomePage:!1,title:"Composite",description:"\ub2e4\uc911 \uacc4\uce35\uc758 \ubb38\uc81c",source:"@site/docs/javascript/OOP/OOP_composite.md",slug:"/javascript/OOP/OOP_composite",permalink:"/docs/javascript/OOP/OOP_composite",version:"current",sidebar:"javascript",previous:{title:"Observer 1",permalink:"/docs/javascript/OOP/OOP_observer"},next:{title:"Observer 2",permalink:"/docs/javascript/OOP/OOP_observer2"}},c=[{value:"\ub2e4\uc911 \uacc4\uce35\uc758 \ubb38\uc81c",id:"\ub2e4\uc911-\uacc4\uce35\uc758-\ubb38\uc81c",children:[]},{value:"Composite",id:"composite",children:[]},{value:"\uac1d\uccb4\uc9c0\ud5a5 \ucef4\ud3ec\uc9c0\uc158 \u2192 \ub3d9\uc801 \uc704\uc784",id:"\uac1d\uccb4\uc9c0\ud5a5-\ucef4\ud3ec\uc9c0\uc158-\u2192-\ub3d9\uc801-\uc704\uc784",children:[{value:"ViewModelValue",id:"viewmodelvalue",children:[]},{value:"ViewModel",id:"viewmodel",children:[]}]},{value:"requestAnimationFrame",id:"requestanimationframe",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\ub2e4\uc911-\uacc4\uce35\uc758-\ubb38\uc81c"},"\ub2e4\uc911 \uacc4\uce35\uc758 \ubb38\uc81c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const viewmodel = ViewModel.get({\n  wrapper: ViewModel.get({styles: {width: '50%', background: '#ffa', cursor: 'pointer'}}),\n  title: ViewModel.get({properties: {innerHTML: 'Title'}}),\n  contents: ViewModel.get({properties: {innerHTML: 'Contents'}}),\n});\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud30c\uc77c\uc2dc\uc2a4\ud15c : \ud3f4\ub354\uc548\uc5d0 \ud30c\uc77c\uc774 \ud3f4\ub354\uc548\uc5d0 \ud3f4\ub354"),Object(a.b)("li",{parentName:"ul"},"\uc54c\uace0\ub9ac\uc998 \ubb38\uc81c\uc5d0\uc11c\ub294 \ub3d9\uc801\uacc4\ud68d\ubc95, \ud2b8\ub9ac\ud0d0\uc0c9")),Object(a.b)("p",null,"\uc18d\ub3c4\ub294 \ub3d9\uc801\uacc4\ud68d\ubc95\uc774 \ub354 \ube60\ub974\uc9c0\ub9cc \uc815\ud615\ud654\ub41c \uc54c\uace0\ub9ac\uc998\uc5d0 \uac00\uba74 \ud2b8\ub9ac\ud0d0\uc0c9\uc774 \ub354 \uc27d\ub2e4."),Object(a.b)("h2",{id:"composite"},"Composite"),Object(a.b)("p",null,"\ub0b4 \ubb38\uc81c\ub97c \uc2a4\uc2a4\ub85c \ub2e4 \ud574\uacb0\ud558\uc9c0 \uc54a\uace0, \uc704\uc784\uc744 \ubc18\ubcf5\ud574\uc11c \uadf8\uac83\ub4e4\uc744 \ucde8\ud569\ud558\ub294 \ud589\uc704"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\uc0c1\uc704 ViewModel \uc758 \ubcc0\ud654"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\uc790\uae30\ub97c \uad6c\ub3c5 ",Object(a.b)("em",{parentName:"li"},"Observer")," Listen \ud558\uace0 \uc788\ub294 \ub300\uc0c1\uc5d0\uac8c notify \ub41c\ub2e4."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\uc0c1\uc704 ViewModel \uc548\uc758, \ud558\uc704 ViewModel \uc5d0 \ubcc0\ud654"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ud558\uc704 ViewModel \ubcc0\ud654\ub97c, \uc0c1\uc704 ViewModel \uc774 Listen \uad6c\ub3c5\ud558\uac8c \ub9cc\ub4e4 \uace0\uc790 \ud55c\ub2e4.")))),Object(a.b)("p",null,"Binder \ub294 \ucd5c\uc0c1\uc704 ViewModel \uc744 \uc54c\uba74 \ubaa8\ub4e0 ViewModel \uc744 \ub2e4 \ub9e4\ud551\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Binder \ub294  \ucd5c\uc0c1\uc704 ViewModel \uc640 \uacc4\uc57d\uc744 \ud558\uace0, \ud558\uc704 ViewModel \uacfc\ub294 \uacc4\uc57d\ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ud558\uc704 ViewModel \uc758 \ubcc0\ud654\ub294",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\uc790\uc2e0\uc758 \ub9ac\uc2a4\ub108\uc5d0\uac8c\ub3c4 \uc54c\ub824\uc57c \ud558\uace0,"),Object(a.b)("li",{parentName:"ul"},"\uc0c1\uc704\uc758 \ub9ac\uc2a4\ub108\uc5d0\uac8c\ub3c4 \uc54c\ub824\uc57c \ud55c\ub2e4.")))),Object(a.b)("h2",{id:"\uac1d\uccb4\uc9c0\ud5a5-\ucef4\ud3ec\uc9c0\uc158-\u2192-\ub3d9\uc801-\uc704\uc784"},"\uac1d\uccb4\uc9c0\ud5a5 \ucef4\ud3ec\uc9c0\uc158 \u2192 \ub3d9\uc801 \uc704\uc784"),Object(a.b)("h3",{id:"viewmodelvalue"},"ViewModelValue"),Object(a.b)("p",null,"Notification \uc73c\ub85c Observer \uac00 \uc218\uc2e0 \ubc1b\ub294 \uac1d\uccb4 (info \uac1d\uccb4)       "),Object(a.b)("h4",{id:"\uc778\ud3ec\uac1d\uccb4\uc758-\uc124\uacc4"},"\uc778\ud3ec\uac1d\uccb4\uc758 \uc124\uacc4"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uae30\ub2a5\uc774 \ubd80\uc871\ud558\uba74 \uc11c\ube0c\uc81d\ud2b8(ViewModel) \ub97c \ucc38\uc870\ud558\uac8c \ub41c\ub2e4.??"),Object(a.b)("li",{parentName:"ul"},"\ub108\ubb34 \ub9ce\uc73c\uba74 \uc720\uc9c0\ubcf4\uc218\ud560 \ub54c \ub9c8\ub2e4 \ub2e4\ub978 \ucf54\ub4dc\uac00 \ub2e4 \uae68\uc9c4\ub2e4.")),Object(a.b)("h4",{id:"subkey"},"subKey"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ubcc0\ud654 \ud55c \uac83\uc774 \uc774 \ub098 \uc790\uc2e0\uc778\uc9c0, \ud558\uc704 ViewModel \uc778\uc9c0\ub97c \uad6c\ubd84"),Object(a.b)("li",{parentName:"ul"},"subKey \ub294 \uc790\uc2dd\uc774\uc790 \uc790\uae30\uc790\uc2e0\uc744 \uac00\ub9ac\ud0ac \uc218 \uc788\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc790\uc2dd\ub4e4\uc774 \uace0\uc720\ud55c \uc11c\ube0c\ud0a4\ub97c \uac16\uace0 \uc788\ub2e4\uace0 \uac00\uc815\ud588\ub2e4.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModelValue = class {\n  subKey;\n  cat;\n  k;\n  v;\n\n  constructor(subKey, cat, k, v) {\n    this.subKey = subKey;\n    this.cat = cat;\n    this.k = k;\n    this.v = v;\n    Object.freeze(this);\n  }\n};\n")),Object(a.b)("h3",{id:"viewmodel"},"ViewModel"),Object(a.b)("p",null,"ViewModel \uc740 Notifier \uc778 \ub3d9\uc2dc\uc5d0 Observer \uac00 \ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 ViewModelListener \ub97c \ud655\uc7a5\ud55c\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModel = class extends ViewModelListener {\n  // ...\n  subKey = '';\n  parent = null;\n\n  // ViewModel \uac00 Observer, \ub9ac\uc2a4\ub108\ub85c\uc11c\uc758 \uc5ed\ud560,\n  // \ud558\uc704 ViewModel \ubcc0\ud654 \u2192 this.isUpdated \uc5d0 \uc800\uc7a5 \n  viewModelUpdated(updated) {\n    updated.forEach(v => this.#isUpdated.add(v));\n  }\n\n  constructor(checker, data, _ = type(data, 'object')) {\n    super();\n    // ViewModel \uc77c \ub54c k \ub294 [wrapper, title, contents], v \ub294 ViewModel \uc774\ub2e4.\n    Object.entries(data).forEach(([k, v]) => {\n      if ('styles,attributes,properties'.includes(k)) {\n        // ..\n      } else {  // << 'styles,attributes,properties' \uc5d0 \ud574\ub2f9\ud558\uc9c0 \uc54a\uac70\ub098 viewModel \uc77c \ub54c >> \n        Object.defineProperty(this, k, {\n          enumerable: true, get: _ => v, set: newV => {\n            v = newV;\n            /*\n              1) \ub098\uc758 \ubcc0\ud654\ub97c Notification \u2192 \ub098\uc758 subKey \uc0ac\uc6a9 \n              \ub9cc\uc57d\uc5d0 subKey \uac00 \"wrapper, title, contents\" \ub77c\uba74 \uc5b4\ub5a4 viewModel \uc758\n              \ud558\uc704 viewModel \uc774\ub77c\ub294 \uc758\ubbf8\uc774\ub2e4.\n            */\n            this.#isUpdated.add(new ViewModelValue(this.subKey, '', k, v));\n          },\n        });\n        \n        /*\n          << \ud558\uc704 ViewModel \uc774 \uc874\uc7ac\ud560 \ub54c \ucd94\uac00\uc801\uc73c\ub85c>>\n          \ud558\uc704 ViewModel \ub77c\uba74, \uc790\uc2e0\uc758 \ubcc0\ud654\ub97c \uc0c1\uc704 ViewModel \uc5d0\uac8c \uc804\ub2ec(\uc804\ud30c)\ud574\uc57c \ud55c\ub2e4.\n          \uc0c1\uc704 ViewModel \ub77c\uba74, \ud558\uc704 ViewModel \uc758 \ubcc0\ud654\ub97c \uc218\uc2e0\ud574\uc57c \ud55c\ub2e4.\n          - \uc0c1\uc704 ViewModel(\uc11c\ube0c\uc81d\ud2b8) \uac00 Observer \uac00 \ub418\uc5b4\uc57c \ud55c\ub2e4.\n          - \uc11c\ube0c\uc81d\ud2b8\uac00 \ub9ac\uc2a4\ub108\uac00 \uc544\ub2d0 \ub54c \uae4c\uc9c0 \ubcc0\ud654\uac00 \uc804\ud30c\ub418\uc5b4\uc57c \ud55c\ub2e4.\n          - \uc678\ubd80\uc5d0 \uc804\ud30c\ud560 \ub54c, subKey(\uc790\uc2e0\uc778\uc9c0 \ud558\uc704 ViewModel \uc758 \ubcc0\ud654\uc778\uc9c0\ub97c \uad6c\ubd84) \ub97c \uc54c\ub9b0\ub2e4.\n        */\n        if (v instanceof ViewModel) {\n          /*\n            v \ub294 \ud558\uc704 ViewModel \uc774\ub2e4.\n          */\n\n          // \ud558\uc704 ViewModel \ub294 \uc0c1\uc704 ViewModel \uc744 \uc54c\uac8c\ub41c\ub2e4.\n          v.parent = this;\n\n          /*\n            \ud558\uc704 ViewModel \uc758 subKey \uc5d0 \"wrapper, title, contents\" \ub4e4\uc774 \ud560\ub2f9 \ub420 \uc218 \uc788\ub2e4.\n            \uc0c1\uc704 ViewModel \uc5d0\uc11c \ud558\uc704 ViewModel \uc758 parent\uc640 subKey \ub97c \uacb0\uc815\n          */\n          v.subKey = k;\n          // \ubd80\ubaa8\ub294 \uc790\uc2dd\uc758 \ub9ac\uc2a4\ub108\uac00 \ub41c\ub2e4.\n          v.addListener(this);\n        }\n      }\n    });\n\n    /*\n      \ub370\uc774\ud130\uac00 \ucc98\uc74c\uc73c\ub85c \uc644\uc131\ub418\uc5c8\uc744 \ub54c, \ubcc0\ud654\uac00 \uc5c6\uc9c0\ub9cc (setter \uac00 \ud55c\ubc88\ub3c4 \uc218\ud589\ub418\uc9c0 \uc54a\uc74c)\n      \uc0c8\ub85c \ub9cc\ub4e4\uc5b4\uc9c4\uac83\uc744 Notify \ud574\uc57c \ud55c\ub2e4.\n    */\n    ViewModel.notify(this);\n    Object.seal(this);\n  }\n\n}\n\n")),Object(a.b)("h2",{id:"requestanimationframe"},"requestAnimationFrame"),Object(a.b)("p",null,"notify \uac00 \uc18d\uc131\uc774 \ubc14\ub014 \ub54c \ub9c8\ub2e4 \ubc1c\uc0dd \u2192 Binder \uc758 render \uac00 \ub9e4\uc6b0\ub9ce\uc774 \ubc1c\uc0dd"),Object(a.b)("p",null,"\uadf8\ub7ec\ub098,"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c render \ub294 requestAnimationFrame \ub97c \ucd08\uacfc\ud574\uc11c \uc77c\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"requestAnimationFrame \ub2f9 \ubcc0\ud654\ub97c \ucde8\ud569\ud574\uc11c notify \ud55c\ub2e4. ")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModel = class extends ViewModelListener {\n  // Observer \uc5d0\uac8c \ud1b5\ubcf4 \ud560 Subject(\ub300\uc0c1) \ub4e4\uc758 \ubaa8\uc784 \n  static #subjects = new Set;\n\n  // requestAnimationFrame \uc744 \ucd5c\ucd08\ub85c \ud55c\ubc88 \ud558\uac8c \ud55c\ub2e4.\n  static #inited = false;\n\n  // \ub0b4\ubd80\uc5d0\uc11c\ub294 \ud0c0\uc785\uccb4\ud06c\ub97c \ud560 \ud544\uc694 \uc5c6\ub2e4.\n  static notify(vm) {\n    this.#subjects.add(vm);\n    if (this.#inited) return;\n    this.#inited = true;\n\n    // notify \uac00 \ud55c\ud504\ub808\uc784\ub2f9 \ud55c\ubc88\ub9cc \ud638\ucd9c \ub420 \uac83 \n    const f = _ => {  \n      this.#subjects.forEach(vm => {\n        if (vm.#isUpdated.size) {\n          vm.notify();\n          vm.#isUpdated.clear();\n        }\n      });\n      requestAnimationFrame(f);\n    };\n    requestAnimationFrame(f);\n  }\n\n  subKey = '';\n  parent = null;\n\n  constructor(checker, data, _ = type(data, 'object')) {\n    // ...\n    // ViewModel \uc774 \ucd5c\ucd08\ub85c \uc0dd\uc131\ub420 \ub54c subject \uc5d0 \ub4f1\ub85d \ud55c\ub2e4. \n    ViewModel.notify(this);\n    Object.seal(this);\n  }\n}\n")))}b.isMDXComponent=!0},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,O=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?i.a.createElement(O,o(o({ref:t},s),{},{components:n})):i.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);