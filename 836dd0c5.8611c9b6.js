(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{279:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var i=n(3),c=(n(0),n(471));const a={},o={unversionedId:"doing/youtube-clone/3_Mongo",id:"doing/youtube-clone/3_Mongo",isDocsHomePage:!1,title:"3_Mongo",description:"MongoDB & Mongoose",source:"@site/docs/doing/youtube-clone/3_Mongo.md",slug:"/doing/youtube-clone/3_Mongo",permalink:"/docs/doing/youtube-clone/3_Mongo",version:"current",lastUpdatedAt:1626882853,sidebar:"doing",previous:{title:"2_ExpressJS",permalink:"/docs/doing/youtube-clone/2_ExpressJS"},next:{title:"4_Webpack",permalink:"/docs/doing/youtube-clone/4_Webpack"}},b=[{value:"MongoDB &amp; Mongoose",id:"mongodb--mongoose",children:[]},{value:"Connecting MongoDB",id:"connecting-mongodb",children:[]},{value:"Configuring Dot Env",id:"configuring-dot-env",children:[]},{value:"Video Model",id:"video-model",children:[]},{value:"Comment Model",id:"comment-model",children:[]},{value:"Home Controller Finished",id:"home-controller-finished",children:[]},{value:"Uploading and Creating Video",id:"uploading-and-creating-video",children:[]},{value:"Uploading and Creating a Video part Two",id:"uploading-and-creating-a-video-part-two",children:[]},{value:"Getting Video By ID",id:"getting-video-by-id",children:[]},{value:"Editing a Video",id:"editing-a-video",children:[]},{value:"Deleting a Video",id:"deleting-a-video",children:[]},{value:"<del>Installing ESLint</del> IntelliJ JSLint &amp;&amp; Search",id:"installing-eslint-intellij-jslint--search",children:[]},{value:"Searching Videos",id:"searching-videos",children:[]}],r={toc:b};function l({components:e,...t}){return Object(c.b)("wrapper",Object(i.a)({},r,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"mongodb--mongoose"},"MongoDB & ",Object(c.b)("a",{parentName:"h2",href:"https://mongoosejs.com/"},"Mongoose")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/76c5dc943ebbe9e44a4930c66bc8461d14c30d58"},"commit")),Object(c.b)("li",{parentName:"ul"},"mongodb object modeling for node.js"),Object(c.b)("li",{parentName:"ul"},"mongo - >chatting ")),Object(c.b)("h2",{id:"connecting-mongodb"},"Connecting MongoDB"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/b04cc3df2fe8d342e0a7c2f0181145aab619f6e2"},"commit"))),Object(c.b)("h2",{id:"configuring-dot-env"},"Configuring Dot Env"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/b19637cb121a804ed9908df4284f4c26107aa536"},"commit"))),Object(c.b)("h2",{id:"video-model"},"Video Model"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/f59c097dcee32993213924f3e167d3797cc28445"},"commit"))),Object(c.b)("h2",{id:"comment-model"},"Comment Model"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/9cb5611a8337dcd01235ce8ced70e9ac76617aa7"},"commit"))),Object(c.b)("h2",{id:"home-controller-finished"},"Home Controller Finished"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/2bbbb190168af7d8e3ab21a0e890b9fcf120393e"},"commit"))),Object(c.b)("h2",{id:"uploading-and-creating-video"},"Uploading and Creating Video"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/636ca9f989d74a399e34289729f6a9f0b5c34ae0"},"commit")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/multer"},"multer"))),Object(c.b)("h2",{id:"uploading-and-creating-a-video-part-two"},"Uploading and Creating a Video part Two"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/c2017fc8f1c5051a6e6830cf7e0e5218694bdbe1"},"commit1")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/0927d813bd4fed4618dfe872e44d08b0f25dc027"},"commit2")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/e6275f5ece8f476fbf733ce31d1083c3cc25ad6b"},"commit3"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"mongo\n> use we-tube\n> show collections\n> db.videos.remove({})\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"express.static('dir')",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"dir\uc5d0\uc11c file\uc744 \ubcf4\ub0b4\uc8fc\ub294 middleware")))),Object(c.b)("h2",{id:"getting-video-by-id"},"Getting Video By ID"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/9408c224fe8eec8287d3fb6728ed14d91430c58d"},"commit"))),Object(c.b)("h2",{id:"editing-a-video"},"Editing a Video"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/724d25d5fa5e0f052ca9cd6d83606b6bd5456d0c"},"commit"))),Object(c.b)("h2",{id:"deleting-a-video"},"Deleting a Video"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/b9c5ab618451b8bd3ac68b5cb6e559af93787b0e"},"commit"))),Object(c.b)("h2",{id:"installing-eslint-intellij-jslint--search"},Object(c.b)("del",{parentName:"h2"},"Installing ESLint")," IntelliJ JSLint && Search"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/b9c5ab618451b8bd3ac68b5cb6e559af93787b0e"},"commit"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install eslint -g\neslint --init\n")),Object(c.b)("h2",{id:"searching-videos"},"Searching Videos"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/bf0c083a9104c65dfcbb25249393346688636cc9"},"commit")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/8fca103f8068ce3caaaed3286e8de2fb288a413c"},"commit"))))}l.isMDXComponent=!0},471:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var i=n(0),c=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),d=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=d(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,g=m["".concat(o,".").concat(p)]||m[p]||u[p]||a;return n?c.a.createElement(g,b(b({ref:t},l),{},{components:n})):c.a.createElement(g,b({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var b={};for(var r in t)hasOwnProperty.call(t,r)&&(b[r]=t[r]);b.originalType=e,b.mdxType="string"==typeof e?e:i,o[1]=b;for(var l=2;l<a;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);