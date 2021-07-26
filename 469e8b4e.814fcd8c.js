(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(369)),c={title:"MVVM Role Design"},l={unversionedId:"javascript/OOP/OOP_mvvm_role_design",id:"javascript/OOP/OOP_mvvm_role_design",isDocsHomePage:!1,title:"MVVM Role Design",description:"view book & bind",source:"@site/docs/javascript/OOP/OOP_mvvm_role_design.md",slug:"/javascript/OOP/OOP_mvvm_role_design",permalink:"/docs/javascript/OOP/OOP_mvvm_role_design",version:"current",sidebar:"javascript",previous:{title:"TypeCheck",permalink:"/docs/javascript/OOP/OOP_type_check"},next:{title:"Strategy",permalink:"/docs/javascript/OOP/OOP_strategy"}},o=[{value:"view book &amp; bind",id:"view-book--bind",children:[]},{value:"Role Design",id:"role-design",children:[{value:"Framework",id:"framework",children:[]},{value:"\uc5ed\ud560\uc758 \ubd84\ub9ac",id:"\uc5ed\ud560\uc758-\ubd84\ub9ac",children:[]},{value:"hook \uc744 \uac01\uac01 binderItem \uc73c\ub85c \ub9cc\ub4e0\ub2e4.",id:"hook-\uc744-\uac01\uac01-binderitem-\uc73c\ub85c-\ub9cc\ub4e0\ub2e4",children:[]}]},{value:"ViewModel",id:"viewmodel",children:[]},{value:"Binder",id:"binder",children:[{value:"\uc81c\uc5b4\uc758 \uc5ed\uc804",id:"\uc81c\uc5b4\uc758-\uc5ed\uc804",children:[]}]},{value:"Scanner",id:"scanner",children:[]},{value:"Client",id:"client",children:[]}],s={toc:o};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"view-book--bind"},"view book & bind"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111024565-cdb6dd00-8422-11eb-99b6-cf1a420040e3.png",alt:"image"})),Object(i.b)("h2",{id:"role-design"},"Role Design"),Object(i.b)("h3",{id:"framework"},"Framework"),Object(i.b)("p",null,"\uac01\uac01 \uc7a5\ub2e8\uc810\uc774 \uc788\ub2e4. "),Object(i.b)("h4",{id:"vue-angular"},"vue angular"),Object(i.b)("p",null,"binder \uac00 \uc874\uc7ac\ud558\ub294 view \ub97c \uc2a4\uce94\ud55c\ub2e4. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ubaa8\ub378\uacfc \ubdf0\ub97c \uc644\uc804\ud788 \ubd84\ub9ac\ud574\uc11c \uad00\ub9ac\ud558\uae30 \uc27d\ub2e4. ")),Object(i.b)("h4",{id:"react"},"react"),Object(i.b)("p",null,"\ucc98\uc74c\ubd80\ud130 \ub370\uc774\ud130\uc640 \uc5f0\uacb0\ub418\uc5b4\uc788\ub294 \ubdf0\ub97c \ub9cc\ub4e0\ub2e4. (\ucef4\ud3ec\ub10c\ud2b8 \ubc29\uc2dd??) "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ub9ac\uc561\ud2b8\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c state \ub97c \uc18c\uc720 "),Object(i.b)("li",{parentName:"ul"},"\ubaa8\ub378\uacfc \ubdf0\ub97c \uac19\uc774 \uad00\ub9ac\ud574\uc57c \ub41c\ub2e4. ")),Object(i.b)("h3",{id:"\uc5ed\ud560\uc758-\ubd84\ub9ac"},"\uc5ed\ud560\uc758 \ubd84\ub9ac"),Object(i.b)("p",null,"scanner \ub85c \uc778\ud574\uc11c binder \uc640 html \uc758 \uad00\uacc4\ub97c \ub04a\uc5c8\ub2e4.\n",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111025033-2be4bf80-8425-11eb-908c-5b38b4628bf4.png",alt:"image"})),Object(i.b)("p",null,"HTMLElement \ub294 ",Object(i.b)("strong",{parentName:"p"},"\uc790\uc8fc\ubcc0\ud568")," \u2192  Binder \uc5d0\uc11c Scanner \ub97c \ubd84\ub9ac"),Object(i.b)("h4",{id:"\ubcc0\ud654\uc728-\uac1d\uccb4\uac00-\ubc14\ub00c\ub294-\uc774\uc720\ub97c-\ud558\ub098\ub85c-\ub9cc\ub4e4\uc790-srp"},"\ubcc0\ud654\uc728 ",Object(i.b)("em",{parentName:"h4"},"\uac1d\uccb4\uac00 \ubc14\ub00c\ub294 \uc774\uc720\ub97c \ud558\ub098\ub85c \ub9cc\ub4e4\uc790 SRP")),Object(i.b)("p",null,"binder"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"viewModel \uc744 \uc774\uc6a9\ud574\uc11c view \ub97c \uadf8\ub9b4\ub54c\ub9cc \ub85c\uc9c1\uc774 \ubc14\ub00c\uba74 \ub41c\ub2e4.")),Object(i.b)("p",null,"scanner"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTML \uc744 \ud574\uc11d\ud558\ub294 \uac83\uc774 \ub2e4\ub974\uba74 \ubc14\ub010\ub2e4.")),Object(i.b)("h3",{id:"hook-\uc744-\uac01\uac01-binderitem-\uc73c\ub85c-\ub9cc\ub4e0\ub2e4"},"hook \uc744 \uac01\uac01 binderItem \uc73c\ub85c \ub9cc\ub4e0\ub2e4."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111024700-89780c80-8423-11eb-8b41-5349d5c169a2.png",alt:"image"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/111025101-81b96780-8425-11eb-962e-19de651552d9.png",alt:"image"})),Object(i.b)("h2",{id:"viewmodel"},"ViewModel"),Object(i.b)("p",null,"\uc21c\uc218\ud55c ",Object(i.b)("em",{parentName:"p"},"\uc778\uba54\ubaa8\ub9ac \uac1d\uccb4"),"\uc774\uae30 \ub54c\ubb38\uc5d0 \ub9cc\ub4e4\uae30 \uc81c\uc77c \uc27d\ub2e4.        "),Object(i.b)("p",null,"\ub2e8\uc704\ud14c\uc2a4\ud2b8\ub3c4 \uc26c\uc6cc\uc9c4\ub2e4. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"dom \uc744 \ud14c\uc2a4\ud2b8\ud558\uae30\ub294 \uc5b4\ub835\uc9c0\ub9cc viewModel \uc744 \ud14c\uc2a4\ud2b8 \ud558\uae30\ub294 \uc27d\ub2e4. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModel = class {\n  static #private = Symbol();\n\n  static get(data) {\n    return new ViewModel(this.#private, data);\n  }\n\n  /** 2) ViewModel \ub294 \ud558\ub098\uc758 dom \uac1d\uccb4\ub97c \ub300\uc2e0\ud558\ub294 \uba54\ubaa8\ub9ac \uac1d\uccb4\uae30 \ub54c\ubb38\uc5d0\n    *    dom \uc744 \ub300\uc2e0\ud560 \uc18d\uc131\ub4e4\uc744 \uac00\uc9c4\ub2e4. (\ud0a4)\n  **/\n  styles = {};\n  attributes = {};\n  properties = {};\n  events = {};\n\n  constructor(checker, data) {\n    /**\n    * 1) \uc678\ubd80\uc5d0\uc11c\ub294 \uc808\ub300 \uccab\ubc88\uc9f8 \uc778\uc790\uc5d0 static private \uc744 \ub118\uae38 \uc218 \uc5c6\ub2e4.\n    * \uc624\uc9c1 get(data) (\ud074\ub798\uc2a4 \ub0b4\ubd80) \uc5d0\uc11c\ub9cc \uccab\ubc88\uc9f8 \uc18d\uc131\uc744 #private \uc744 \ub118\uae38 \uc218 \uc788\ub2e4.\n    * \ub530\ub77c\uc11c, \uc678\ubd80\uc5d0\uc11c \uc0dd\uc131\uc790\ub97c \ud638\ucd9c\ud560 \uc218 \uc5c6\ub2e4. \n    **/\n    if (checker != ViewModel.#private) throw 'useViewModel.get()!';\n    Object.entries(data).forEach(([k, v]) => {\n      switch (k) {\n        case'styles':\n          this.styles = v;\n          break;\n        case'attributes':\n          this.attributes = v;\n          break;\n        case'properties':\n          this.properties = v;\n          break;\n        case'events':\n          this.events = v;\n          break;\n        default:\n          this[k] = v;\n      }\n    });\n    // 3) \uac12\uc740 \ubcc0\ud654\ud560 \uc218 \uc788\uc9c0\ub9cc \ub354\uc774\uc0c1 \ud0a4\ub294 \ucd94\uac00\ud560 \uc218 \uc5c6\uac8c \ud568. \n    Object.seal(this);\n  }\n};\n")),Object(i.b)("h2",{id:"binder"},"Binder"),Object(i.b)("h3",{id:"\uc81c\uc5b4\uc758-\uc5ed\uc804"},"\uc81c\uc5b4\uc758 \uc5ed\uc804"),Object(i.b)("p",null,"\uc5b4\ub5a0\ud55c \uc885\ub958\uc758 \ubdf0\ub77c\uace0 \ud560\uc9c0\ub77c\ub3c4, paint(render) \ub85c\uc9c1\uc744 binder \uac00 \uac00\uc9c4\ub2e4. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const BinderItem = class {\n  el;\n  viewmodel;\n\n  constructor(el, viewmodel, _0 = type(el, HTMLElement), _1 = type(viewmodel, 'string')) {\n    this.el = el;\n    this.viewmodel = viewmodel;\n    Object.freeze(this);  // \ubd88\ubcc0\uac1d\uccb4\ud654\n  }\n};\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"new BinderItem(section, 'wrapper');\nnew BinderItem(h2, 'title');\nnew BinderItem(section2, 'contents');\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<section id="target" data-viewmodel="wrapper">\n  <h2 data-viewmodel="title"/>\n  <section data-viewmodel="contents"/>\n</section>\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\uc5b8\uc81c Set \uc744 \uc4f0\uace0 \uc5b8\uc81c Array \ub97c \uc4f8\uae4c? "),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Set \uc740 \uc911\ubcf5 \ubc29\uc9c0\uae30\ub2a5\uc774 \uc788\ub2e4. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Set \uc740 \uac1d\uccb4\uc758 \ucee8\ud14c\uc774\ub108\ub2e4.")," "),Object(i.b)("li",{parentName:"ul"},"Array \ub294 \ub611\uac19\uc740 \uac1d\uccb4\ub97c \ub450\ubc88 \ub123\uc744 \uc218 \uc788\ub2e4. "))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const Binder = class {\n  #items = new Set;\n\n  add(v, _ = type(v, BinderItem)) {\n    this.#items.add(v);\n  }\n\n  render(viewmodel, _ = type(viewmodel, ViewModel)) {\n    this.#items.forEach(item => {\n      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;\n      Object.entries(vm.styles).forEach(([k, v]) => el.style[k] = v);\n      Object.entries(vm.attributes).forEach(([k, v]) => el.setAttribute(k, v));\n      Object.entries(vm.properties).forEach(([k, v]) => el[k] = v);\n      Object.entries(vm.events).forEach(([k, v]) => el['on' + k] = e => v.call(el, e, viewmodel)); // this \ub97c el \ub85c \ubc14\uc778\ub529\n    });\n  }\n};\n")),Object(i.b)("h2",{id:"scanner"},"Scanner"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const Scanner = class {\n  scan(el, _ = type(el, HTMLElement)) {\n    const binder = new Binder;\n    this.checkItem(binder, el);\n\n    const stack = [el.firstElementChild];\n    let target;   // \uc784\uc2dc\ubcc0\uc218\n    while (target = stack.pop()) {\n      this.checkItem(binder, target);\n      if (target.firstElementChild) stack.push(target.firstElementChild);\n      if (target.nextElementSibling) stack.push(target.nextElementSibling);\n    }\n    return binder;\n  }\n\n  checkItem(binder, el) {\n    const vm = el.getAttribute('data-viewmodel');\n    if (vm) binder.add(new BinderItem(el, vm));\n  }\n};\n")),Object(i.b)("h2",{id:"client"},"Client"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const viewmodel = ViewModel.get({\n  wrapper: ViewModel.get({styles: {width: '50%', background: '#ffa', cursor: 'pointer'}}),\n  title: ViewModel.get({properties: {innerHTML: 'Title'}}),\n  contents: ViewModel.get({properties: {innerHTML: 'Contents'}}),\n});\n\nconst scanner = new Scanner;\nconst binder = scanner.scan(document.querySelector('#target'));\nbinder.render(viewmodel);\n")),Object(i.b)("p",null,"model render"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const viewmodel = ViewModel.get({\n  isStop: false,\n  changeContents() {\n    this.wrapper.styles.background = `rgb(${parseInt(Math.random() * 150) + 100},${...},${...})`;\n    this.contents.properties.innerHTML = Math.random().toString(16).replace('.', '');\n  }, wrapper: ViewModel.get({\n    styles: {width: '50%', background: '#ffa', cursor: 'pointer'}, events: {\n      click(e, vm) {\n        vm.isStop = true;\n      },\n    },\n  }),\n  // ...\n});\n\nconst f = _ => {\n  viewmodel.changeContents();\n  binder.render(viewmodel);\n  if (!viewmodel.isStop) requestAnimationFrame(f);\n};\nrequestAnimationFrame(f);\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ube0c\ub77c\uc6b0\uc800\uc758 \ub80c\ub354\uc131\ub2a5\uc740, \ub300\ubd80\ubd84 paint \uc5d0 \ub4e0\ub2e4.\n\uc778\uba54\ubaa8\ub9ac\uc758 \uac1d\uccb4\uc758 \ud0d0\uc0c9\uacfc \uac19\uc740 \ubd80\ubd84\uc740 \uc131\ub2a5\uc601\ud5a5\uc5d0 \uac70\uc758 \ubbf8\ubbf8\ud558\ub2e4. ")),Object(i.b)("p",null,Object(i.b)("img",{alt:"MVVM1",src:n(410).default})))}b.isMDXComponent=!0},369:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(u,l(l({ref:t},s),{},{components:n})):a.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},410:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/MVVM1-f647cf227da15d87d3f9ea3c24910451.svg"}}]);