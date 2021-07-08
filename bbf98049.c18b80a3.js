(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{230:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(3),o=(r(0),r(275));const s={title:"Observer 2"},i={unversionedId:"javascript/OOP/OOP_observer2",id:"javascript/OOP/OOP_observer2",isDocsHomePage:!1,title:"Observer 2",description:"MVVM1",source:"@site/docs/javascript/OOP/OOP_observer2.md",slug:"/javascript/OOP/OOP_observer2",permalink:"/docs/javascript/OOP/OOP_observer2",version:"current",sidebar:"javascript",previous:{title:"Composite",permalink:"/docs/javascript/OOP/OOP_composite"},next:{title:"ISP",permalink:"/docs/javascript/OOP/OOP_code_ISP"}},c=[{value:"Observer",id:"observer",children:[{value:"Visitor",id:"visitor",children:[]}]},{value:"client",id:"client",children:[]}],a={toc:c};function l({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},a,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"MVVM1",src:r(316).default})),Object(o.b)("h2",{id:"observer"},"Observer"),Object(o.b)("p",null,"ViewModel \uc758 \uc2e4\uc9c8\uc801\uc778 \uc8fc\uc778\uc740 Binder(Observer) \uc774\ub2e4"),Object(o.b)("p",null,"Binder \uac00 ViewModel \uc744 Observe"),Object(o.b)("p",null,"Binder(Observer) \ub294 ViewModel \uc758 \ub9ac\uc2a4\ub108 \uc774\uae30\ub3c4 \ud558\ub2e4"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const Binder = class extends ViewModelListener {\n  #items = new Set;\n  #processors = {};\n  add(v, _ = type(v, BinderItem)) {\n    this.#items.add(v);\n  }\n  addProcessor(v, _0 = type(v, Processor)) {\n    this.#processors[v.cat] = v;\n  }\n  render(viewmodel, _ = type(viewmodel, ViewModel)) {\n    const processores = Object.entries(this.#processors);\n    this.#items.forEach(item => {\n      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;\n      processores.forEach(([pk, processor]) => {\n        Object.entries(vm[pk]).forEach(([k, v]) => {\n          processor.process(vm, el, k, v);\n        });\n      });\n    });\n  }\n};\n")),Object(o.b)("h3",{id:"visitor"},"Visitor"),Object(o.b)("p",null,"\ub450 \uacf3 \uc774\uc0c1\uc758 \uc54c\uace0\ub9ac\uc998\uc5d0 \uac1c\uc785\ud558\ub294 \uc678\ubd80\uc5d0\uc11c \uacf5\uae09\ub41c \uc804\ub7b5\uc744 Visitor \ub77c\uace0 \ud55c\ub2e4. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"render \uc5d0\uc11c process \ub97c \uc0ac\uc6a9"),Object(o.b)("li",{parentName:"ol"},"viewmodelUpdated \uc5d0\uc11c process \ub97c \uc0ac\uc6a9")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const Binder = class extends ViewModelListener {\n  #items = new Set;\n  #processors = {};\n  // 2) updated Set \uc5d0\ub294 ViewModelValue \uac00 \uc788\ub2e4. subKey, cat, k, v..  \n  viewmodelUpdated(updated) {\n    const items = {};\n    // Set (#items) \uc740 forEach \ub9cc \uc4f8 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 obj \ub85c \ubc14\uafe8\ub2e4. \n    this.#items.forEach(item => {\n      items[item.viewmodel] = [type(viewmodel[item.viewmodel], ViewModel), item.el];\n    });\n    updated.forEach(v => {\n      if (!items[v.subKey]) return;\n      const [vm, el] = items[v.subKey], processor = this.#processors[v.cat];\n      if (!el || !processor) return;\n      processor.process(vm, el, v.k, v.v);\n    });\n  }\n  add(v, _ = type(v, BinderItem)) {\n    this.#items.add(v);\n  }\n  addProcessor(v, _0 = type(v, Processor)) {\n    // ..\n  }\n  render(viewmodel, _ = type(viewmodel, ViewModel)) {\n    // ..\n  }\n\n  watch(viewmodel, _ = type(viewmodel, ViewModel)) {\n    // Binder \uc5d0\uc11c\ub294 ViewModel \uc744 \ubc1b\uc544\uc11c, ViewModel \uc5d0\uac8c \uad6c\ub3c5\uc744 \uc2e0\uccad\ud55c\ub2e4 \n    viewmodel.addListener(this);\n    this.render(viewmodel);\n  }\n  unwatch(viewmodel, _ = type(viewmodel, ViewModel)) {\n    viewmodel.removeListener(this);\n  }\n};\n")),Object(o.b)("h2",{id:"client"},"client"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const scanner = new Scanner;\nconst binder = scanner.scan(document.querySelector('#target'));\nbinder.addProcessor(new (class extends Processor {\n  _process(vm, el, k, v) {\n    el.style[k] = v;\n  }\n})('styles'));\nbinder.addProcessor(new (class extends Processor {\n  _process(vm, el, k, v) {\n    el.setAttribute(k, v);\n  }\n})('attributes'));\nbinder.addProcessor(new (class extends Processor {\n  _process(vm, el, k, v) {\n    el[k] = v;\n  }\n})('properties'));\nbinder.addProcessor(new (class extends Processor {\n  _process(vm, el, k, v) {\n    console.log('event', k, v, el);\n    el['on' + k] = e => v.call(el, e, vm);\n  }\n})('events'));\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const viewmodel = ViewModel.get({\n  isStop: false, changeContents() {\n    this.wrapper.styles.background = `rgb(${/*...*/})`;\n    this.contents.properties.innerHTML = Math;\n    // ...\n    ;\n  }, \n  wrapper: ViewModel.get({\n    styles: {width: '50%', background: '#ffa', cursor: 'pointer'}, events: {\n      click(e, vm) {\n        // \uc790\uc2dd vm \ub3c4 vm \uac1d\uccb4\uc774\uace0\n        // vm \uc740 \ubb34\uc870\uac74 wrapper \uc774\ub2e4. \uc5b4\ud734..    \n        // \ubd80\ubaa8\uc5d0 \uc788\ub294 \uac83\uc744 \ubc14\uafb8\uace0 \uc2f6\uc744\ub550 \uac04\uc811\ucc38\uc870\uc778 parent \uc5d0 \uc788\ub294 \uac83\uc744 \ubc14\uafbc\ub2e4. \n        vm.parent.isStop = true;\n        console.log('click', vm);\n      },\n    },\n  }), \n  title: /* .. */ , \n  contents: /* .. */ ,\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"binder.watch(viewmodel);\nconst f = _ => {\n  viewmodel.changeContents();\n  if (!viewmodel.isStop) requestAnimationFrame(f);\n};\nrequestAnimationFrame(f);\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Binder \uc5d0\uc11c render \ub97c \ud638\ucd9c\ud558\ub294 \ubd80\ubd84\uc774 \uc5c6\uc5b4\uc84c\ub2e4."),Object(o.b)("li",{parentName:"ul"},"ViewModel \uc758 \uac12\uc744 \ubc14\uafb8\ub294 \ubd80\ubd84\ub9cc \uc874\uc7ac\ud55c\ub2e4. ")),Object(o.b)("p",null,"\uc804\ub7b5, \ud0ec\ud50c\ub9bf \uba54\uc11c\ub4dc, \uc635\uc800\ube0c, \ucef4\ud3ec\uc9d3 \ud328\ud134\ub9cc \uc798\uc368\ub3c4 \ub9ce\uc740 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4. "),Object(o.b)("p",null,"\ub2e4\uc74c\uc2dc\uac04\uc5d0\ub294 \ubc30\uc5f4\ubc1b\uc544\uc11c \ub3d4\uc5d8\ub9ac\uba3c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\ub294\uac83\uc744 \ud560 \uac83\uc774\ub2e4."))}l.isMDXComponent=!0},275:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=t,b=p["".concat(i,".").concat(m)]||p[m]||v[m]||s;return r?o.a.createElement(b,c(c({ref:n},l),{},{components:r})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},316:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/MVVM1-f647cf227da15d87d3f9ea3c24910451.svg"}}]);