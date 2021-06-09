(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var c=n(3),r=n(7),a=(n(0),n(248)),o={},i={unversionedId:"doing/youtube-clone/4_Webpack",id:"doing/youtube-clone/4_Webpack",isDocsHomePage:!1,title:"4_Webpack",description:"Webpack",source:"@site/docs/doing/youtube-clone/4_Webpack.md",slug:"/doing/youtube-clone/4_Webpack",permalink:"/docs/doing/youtube-clone/4_Webpack",version:"current",sidebar:"doing",previous:{title:"3_Mongo",permalink:"/docs/doing/youtube-clone/3_Mongo"},next:{title:"5_Styling",permalink:"/docs/doing/youtube-clone/5_Styling"}},b=[{value:"Introduction to Webpack",id:"introduction-to-webpack",children:[]},{value:"Styles with Webpack 1",id:"styles-with-webpack-1",children:[]},{value:"Styles with Webpack 2",id:"styles-with-webpack-2",children:[]},{value:"ES6 with Webpack",id:"es6-with-webpack",children:[]}],p={toc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"webpack"},"Webpack"),Object(a.b)("h2",{id:"introduction-to-webpack"},"Introduction to Webpack"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://velog.io/@decody/Webpack-%EC%84%A4%EC%A0%95"},"https://velog.io/@decody/Webpack-%EC%84%A4%EC%A0%95")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/052d28a103e53c44b8dcaf59ac8cb3e7442d47a2"},"commit"),"\n\uc6f9\ud329\uc740 \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\uc774\ub2e4.\nmodern .js .hbs .cjs .sass .png .jpg\n-> .js .css .jpg .png")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install webpack webpack-cli\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"webpack.config.js \ub294 modern js \ud30c\uc77c\uc774 \uc544\ub2c8\ub77c\uc11c import\ub97c \uc4f8 \uc218 \uc5c6\ub2e4."),Object(a.b)("li",{parentName:"ul"},"Node.js\uc5d0\uc11c \ud30c\uc77c\uacfc \ub514\ub809\ud130\ub9ac \uacbd\ub85c\ub97c \uc808\ub300\uacbd\ub85c\ub85c \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \ubc29\ubc95 path \ub294 node\uc5d0 \uae30\ubcf8\uc801\uc73c\ub85c \uae54\ub824\uc788\ub2e4."),Object(a.b)("li",{parentName:"ul"},"__dirname \uc740 \ud604\uc7ac \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac \uc774\ub984. Node.js\uc758 \uc804\uc5ed \ubcc0\uc218")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"const path = require('path');\nconst ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');\nconst OUTPUT_DIR = path.join(__dirname, 'static');\n\nconst config = {\n  entry: ENTRY_FILE,\n  output: {\n    path: OUTPUT_DIR,\n    filename: '[name].[format]'\n  }\n}\nmodule.exports = config;\n")),Object(a.b)("h2",{id:"styles-with-webpack-1"},"Styles with Webpack 1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/1b02b53b0c22297085550d0ee2be2b0c5f734dd7"},"commit")),Object(a.b)("li",{parentName:"ul"},"webpack \uc740  config \ud30c\uc77c\uc5d0\uc11c \uc544\ub798\uc5d0\uc11c \uc704\ub85c \uc2e4\ud589\ud55c\ub2e4.")),Object(a.b)("h2",{id:"styles-with-webpack-2"},"Styles with Webpack 2"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/11dfc175bf0ff4906867c3d5768b3b6943e1f616"},"commit"))),Object(a.b)("h2",{id:"es6-with-webpack"},"ES6 with Webpack"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/5a58213540b3ca44ce894f29259909eb3a4fd55e"},"commit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/88807fc850a04ca560021bd5146e92a0107fa457"},"commit"))))}l.isMDXComponent=!0},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=l(n),m=c,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||a;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);