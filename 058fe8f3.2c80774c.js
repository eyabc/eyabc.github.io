(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{462:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,O=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(O,i(i({ref:t},p),{},{components:n})):a.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(462)),c={title:"\uc12c\uc138\ud55c \uad8c\ud55c \uc870\uc815"},i={unversionedId:"javascript/OOP/OOP_access",id:"javascript/OOP/OOP_access",isDocsHomePage:!1,title:"\uc12c\uc138\ud55c \uad8c\ud55c \uc870\uc815",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uae30\ubcf8 \uc811\uadfc \uad8c\ud55c\uc740 \ubaa8\ub450 public \uc774\ub2e4.",source:"@site/docs/javascript/OOP/OOP_access.md",slug:"/javascript/OOP/OOP_access",permalink:"/docs/javascript/OOP/OOP_access",version:"current",lastUpdatedAt:1626882853,sidebar:"javascript",previous:{title:"ISP",permalink:"/docs/javascript/OOP/OOP_code_ISP"},next:{title:"Visitors",permalink:"/docs/javascript/OOP/OOP_visitor"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/r4vOF7WpxgM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uae30\ubcf8 \uc811\uadfc \uad8c\ud55c\uc740 \ubaa8\ub450 ",Object(o.b)("em",{parentName:"p"},"public")," \uc774\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const ViewModel = class extends ViewModelSubject {\n  static get(data) {\n    return new ViewModel(data);\n  }\n\n  styles = {};\n  attributes = {};\n  properties = {};\n  events = {};\n  \n  // subKey \uc640 \uad00\ub828\ub41c isUpdated \ub098 listeners \uac00 \ubaa8\ub450 \uc5c6\uc5b4\uc84c\ub2e4.\n  #subKey = '';\n  // outer readOnly\n  get subKey() {\n    return this.#subKey;\n  }\n\n  #parent = null;\n  get parent() {\n    return this.#parent;\n  }\n  \n  // js \ub294 private function \uc744 \ub9cc\ub4e4 \uc218 \uc5c6\ub2e4. \uc678\ubd80\uc6a9\uc774 \uc544\ub2c8\ub77c\ub294 \ub73b\uc73c\ub85c \uad00\uc2b5\uc801\uc778 _ \ub97c \ubd99\uc774\uc790.\n  // \ud2b8\ub79c\uc7ad\uc158\uc744 \ud568\uc218\ub85c \ud45c\ud604\ud558\uc600\ub2e4. parent \uac00 \ubc14\ub00c\ub294 \uc21c\uac04 \uc77c\uc5b4\ub098\uc57c \ud558\ub294 \uc77c. \ud2b8\ub79c\uc7ad\uc158\uc774 \ubc1c\uacac\ub418\uba74 \ubb34\uc870\uac74\ud568\uc218\ub85c \ube7c\uc790.\n  setParent(parent, subKey) {\n    this.#parent = type(parent, ViewModel);\n    this.#subKey = subKey;\n    this.addListener(parent);\n  }\n\n  constructor(data, _ = type(data, 'object')) {\n    super();\n    Object.entries(data).forEach(([cat, obj]) => {\n      if ('styles,attributes,properties'.includes(cat)) {\n        if (!obj || typeof obj != 'object') throw`invalidobjectcat:${cat}, obj:${obj}`;\n        this[cat] = Object.defineProperties({}, Object.entries(obj).reduce((r, [k, v]) => {\n          r[k] = {\n            enumerable: true, get: _ => v, set: newV => {\n              v = newV;\n              this.add(new ViewModelValue(this.#subKey, cat, k, v));\n            },\n          };\n          return;\n        }, {}));\n      } else {\n        Object.defineProperties(this, {\n          [cat]: {\n            enumerable: true, get: _ => obj, set: newV => {\n              obj = newV;\n              // \ubd80\ubaa8(ViewModelSubject) \uc758 \uc18d\uc131\uc5d0\uac8c message \ub97c \ubcf4\ub0c4\n              this.add(new ViewModelValue(this.#subKey, 'root', cat, obj));\n            },\n          },\n        });\n        // \ub2ec\ub77c\uc9c4 \ubd80\ubd84\n        if (obj instanceof ViewModel) obj.setParent(this, cat);\n      }\n    });\n    // ViewModel.notify(this); \uac00 \uc0ad\uc81c\ub418\uc5c8\ub2e4. \uc0dd\uc131\uc2dc\uc810\uc774 \uc544\ub2cc add \ub97c \ud558\ub294 \uc2dc\uc810\uc5d0 lazy \ud560 \uac83\uc774\uae30 \ub54c\ubb38\n    Object.seal(this);\n  }\n\n  // viewModelListener \uc758 \uba54\uc11c\ub4dc\ub97c \uc624\ubc84\ub77c\uc774\ub4dc \ud558\uace0\uc788\ub2e4. \n  viewmodelUpdated(updated) {\n    updated.forEach(v => this.add(v));\n  }\n}\n")))}u.isMDXComponent=!0}}]);