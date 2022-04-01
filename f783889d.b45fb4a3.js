(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(3),o=n(7),a=(n(0),n(462)),l={},c={unversionedId:"doing/Typescript_with_Vue_\uc2e4\uc804\ud504\ub85c\uc81d\ud2b8/Class-based_Component",id:"doing/Typescript_with_Vue_\uc2e4\uc804\ud504\ub85c\uc81d\ud2b8/Class-based_Component",isDocsHomePage:!1,title:"Class-based_Component",description:"Class Based Component",source:"@site/docs/doing/Typescript_with_Vue_\uc2e4\uc804\ud504\ub85c\uc81d\ud2b8/Class-based_Component.md",slug:"/doing/Typescript_with_Vue_\uc2e4\uc804\ud504\ub85c\uc81d\ud2b8/Class-based_Component",permalink:"/docs/doing/Typescript_with_Vue_\uc2e4\uc804\ud504\ub85c\uc81d\ud2b8/Class-based_Component",version:"current",lastUpdatedAt:1626882853,sidebar:"doing",previous:{title:"5_Styling",permalink:"/docs/doing/youtube-clone/5_Styling"},next:{title:"Interface \ub85c Vuex \uc124\uacc4\ud558\uae30",permalink:"/docs/doing/Typescript_with_Vue_\uc2e4\uc804\ud504\ub85c\uc81d\ud2b8/Interface \ub85c Vuex \uc124\uacc4\ud558\uae30"}},p=[{value:"@Component",id:"component",children:[]},{value:"@Prop",id:"prop",children:[]},{value:"@Watch : method decorator",id:"watch--method-decorator",children:[]},{value:"@Emit Method Decorator",id:"emit-method-decorator",children:[]},{value:"Provide/@inject \ub85c \ub370\uc774\ud130 \uc804\ub2ec : Property Decorator",id:"provideinject-\ub85c-\ub370\uc774\ud130-\uc804\ub2ec--property-decorator",children:[]},{value:"@Model Property Decorator",id:"model-property-decorator",children:[]},{value:"Mixins \ubbf9\uc2a4\uc778",id:"mixins-\ubbf9\uc2a4\uc778",children:[]}],b={toc:p};function i(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"class-based-component"},"Class Based Component"),Object(a.b)("h2",{id:"component"},"@Component"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"Vue.component('App', {\n\n});\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Component\nexport default class App extends Vue {}\n")),Object(a.b)("h2",{id:"prop"},"@Prop"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"Vue.component('child', {\n  props: ['message'],\n})\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Component\nexport default class PropExample extends Vue {\n  @Prop() message: string;\n}\n")),Object(a.b)("h2",{id:"watch--method-decorator"},"@Watch : method decorator"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const watchExampleVM = new Vue({\n  el: '#watch-example',\n  data: {\n    question: '',\n    answer: '\uc9c8\ubb38\uc744 \ud558\uae30 \uc804\uae4c\uc9c0\ub294 \ub300\ub2f5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',\n  },\n  watch: {\n    question: function(newQuestion) {\n      this.answer = '\uc785\ub825\uc744 \uae30\ub2e4\ub9ac\ub294 \uc911...';\n    }\n  }\n})\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Component\nexport default class WatchExample extends Vue {\n    question: string = '';\n    answer: string = '\uc9c8\ubb38\uc744 \ud558\uae30 \uc804\uae4c\uc9c0\ub294 \ub300\ub2f5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.';\n    \n    @Watch('question')\n    watcher() {\n        this.answer = '\uc785\ub825\uc744 \uae30\ub2e4\ub9ac\ub294 \uc911...'\n    }\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"immediate: \uc18d\uc131\uc758 \ud604\uc7ac\uac12\uc73c\ub85c \uc774 \ud578\ub4e4\ub7ec\ub97c \uc989\uc2dc \ud638\ucd9c\ud558\ub294 \uc5ec\ubd80."),Object(a.b)("li",{parentName:"ul"},"deep: \uc18d\uc131\uc774 \uac1d\uccb4\uc778 \uacbd\uc6b0 deep \ud558\uac8c \uac10\uc2dc\ud558\uaca0\ub2e4.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Watch('parentMessage', {immediate: false, deep: true})\nupdate(value: string, oldValue: string) {\n  this.alertMessage = '\uba54\uc138\uc9c0\ub97c \uc5c5\ub370\uc774\ud2b8 \ud588\uc2b5\ub2c8\ub2e4.';\n}\n")),Object(a.b)("h2",{id:"emit-method-decorator"},"@Emit Method Decorator"),Object(a.b)("p",null,Object(a.b)("img",{alt:"props-event",src:n(641).default})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  data() {\n    return {\n      count: 0\n    }\n  },\n  methods: {\n    addToCount(n) {\n      this.count += n;\n      this.$emit('add-to-count', n);\n    },\n  } \n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Component\nexport default class YourComponent extends Vue {\n    count = 0;\n    @Emit() \n    addToCount(n: number) {\n        this.count += n;\n    }\n    @Emit('reset')\n    resetCount() {\n        this.count = 0;\n    }\n    @Emit()\n    returnValue() {\n        return 10;\n    }\n    @Emit() \n    promise() {\n        return new Promise(resolve => {\n            setTimeout(() => {\n                resolve(20)\n            }, 0);    \n        })\n    }\n}\n")),Object(a.b)("h2",{id:"provideinject-\ub85c-\ub370\uc774\ud130-\uc804\ub2ec--property-decorator"},"Provide/@inject \ub85c \ub370\uc774\ud130 \uc804\ub2ec : Property Decorator"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"JS"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"inject: \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c provide\ub97c \ubc1b\uc544 \uc81c\uacf5\ub41c \uc18d\uc131\ub4e4")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"provide: \ubd80\ubaa8\uc5d0\uc11c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc81c\uacf5\ud55c \uc18d\uc131"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const symbol = Symbol('baz');\n\nexport const MyComponent = Vue.extend({\n  inject: {\n    foo: 'foo',\n    bar: 'bar',\n    'optional': { from: 'optional', default: 'default' },\n    [symbol]: symbol\n  },\n  data () {\n    return {\n      foo: 'foo',\n      baz: 'bar'\n    }\n  },\n  provide () {\n    return {\n      foo: this.foo,\n      bar: this.baz\n    }\n  }\n})\n"))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"TS"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const symbol = Symbol('baz');\n\n@Component\nexport class MyComponent extends Vue {\n    @Inject() readonly foo!: string;\n    @Inject('bar') readonly bar!: string;\n    @Inject({ from: 'optional', default: 'default'}) readonly optional !: string;\n    @Inject(symbol) readonly baz!: string;\n    \n    @Provide() foo = 'foo';\n    @Provide('bar') baz = 'bar';\n\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ubd80\ubaa8\uc5d0\uc11c \uc8fc\ub294 \ubcc0\uc218\uc774\ub984\uacfc \uc790\uc2dd\uc758 \ubcc0\uc218\uc774\ub984\uc774 \ub2e4\ub97c \ub54c \uad04\ud638\uc758 String\uc73c\ub85c \ub9e4\ud551\uc2dc\ud0ac \uc218 \uc788\ub2e4.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export default class Home extends Vue {\n  @Provide('message') msg: string = 'provide/inject example';\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"@Prop - \uc9c1\uacc4 \ubd80\ubaa8\uc5d0\uc11c\ub9cc \uc4f8 \uc218 \uc788\uc5c8\ub2e4. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"@Provide, @Inject - \ubd80\ubaa8\uc758 \ubd80\ubaa8\uc758 \ubd80\ubaa8... \uc5d0\uac8c \uc8fc\uc785\ubc1b\uc744 \uc218 \uc788\ub2e4.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc9c1\uc811 \ub118\uaca8\uc8fc\ub294 \ubc29\uc2dd\uacfc \ub2ec\ub9ac \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc9c1\uad00\uc801\uc73c\ub85c \ub118\uc5b4\uac00\ub294\uc9c0 \ud30c\uc545\ud558\uae30 \uc5b4\ub835\ub2e4.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\uc77c\ubc18\ub85c\uc9c1\uc5d0\uc11c\ub294 \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\ucd08\uae30\ud654\ub97c \uc548\ud558\uba74 lint \uc5d0\uc11c \uc5d0\ub7ec\ub97c \ub098\uac8c \ud55c\ub2e4.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"! \ub294 \uac12\uc774 \ucd08\uae30\ud654\ub97c \uc548\ud55c\uac83\uc774 \uc758\ub3c4\uc801\uc778\uac83\uc73c\ub85c \uc778\uc2dd\ud568.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"readonly \ubd80\ubaa8\uc5d0\uc11c \ubc1b\uc544\uc624\ub294 \uac12\uc73c\ub85c \ubcc0\uacbd\uc774 \ub418\uc5b4\uc11c\ub294 \uc548\ub41c\ub2e4."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Inject() readonly message!: string;\n")))),Object(a.b)("h2",{id:"model-property-decorator"},"@Model Property Decorator"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"export default {\n    model: {\n        prop: 'checked',\n        event: 'change'\n    },\n    props: {\n        checked: {\n            type: Boolean\n        }\n    }\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TS")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Component\nexport default class YourComponent extends Vue {\n    @Model('change', { type: Boolean }) readonly checked!: boolean \n}\n")),Object(a.b)("h2",{id:"mixins-\ubbf9\uc2a4\uc778"},"Mixins \ubbf9\uc2a4\uc778"),Object(a.b)("p",null,"Vue \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uae30\ub2a5\uc744 \ubc30\ud3ec\ud558\ub294 \uc720\uc5f0\ud55c \ubc29\ubc95\uc774\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import {Vue, Component, Mixins} from 'vue-property-decorator';\nimport toggle from './toggle.vue';\n\n@Component({\n    components: {\n        toggle\n    }\n})\n// \ucd5c\ub300 5\uac1c\uae4c\uc9c0 Mixins(\ub2e4\uc911\uc0c1\uc18d) \uac00\ub2a5\ud558\ub2e4.\n// \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc0c1\uc18d \ubc1b\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc774\ub984\uc774 \uac19\ub2e4\uba74 \ud604\uc7ac \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc624\ubc84\ub77c\uc774\ub4dc \ub41c\ub2e4.\nexport default class Dropdown extends Mixins(toggle) {\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"<script lang=\"ts\">\n    import { Vue, Component } from 'vue-property-decorator';\n\n    @Component\n    export default class Toggle extends Vue {\n        public show: boolean = false;\n        public toggle() {\n            this.show = !this.show;\n        }\n    }\n<\/script>\n")))}i.isMDXComponent=!0},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),i=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=i(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?o.a.createElement(d,c(c({ref:t},b),{},{components:n})):o.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<a;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},641:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);