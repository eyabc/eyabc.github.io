(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return o}));var a=r(3),c=(r(0),r(471));const l={},b={unversionedId:"doing/youtube-clone/2_ExpressJS",id:"doing/youtube-clone/2_ExpressJS",isDocsHomePage:!1,title:"2_ExpressJS",description:"ExpressJS",source:"@site/docs/doing/youtube-clone/2_ExpressJS.md",slug:"/doing/youtube-clone/2_ExpressJS",permalink:"/docs/doing/youtube-clone/2_ExpressJS",version:"current",lastUpdatedAt:1626882853,sidebar:"doing",previous:{title:"1_NodeJS Theory",permalink:"/docs/doing/youtube-clone/1_NodeJS Theory"},next:{title:"3_Mongo",permalink:"/docs/doing/youtube-clone/3_Mongo"}},i=[{value:"What is a Server",id:"what-is-a-server",children:[]},{value:"What is Express",id:"what-is-express",children:[]},{value:"first Express Server",id:"first-express-server",children:[]},{value:"handle route with express",id:"handle-route-with-express",children:[]},{value:"ES6 on NodeJS using Babel",id:"es6-on-nodejs-using-babel",children:[]},{value:"Express Core : Middlewares 1",id:"express-core--middlewares-1",children:[]},{value:"Express Core: Middlewares 2",id:"express-core-middlewares-2",children:[]},{value:"Express Core: Routing",id:"express-core-routing",children:[]},{value:"MVC Pattern 1 - Route",id:"mvc-pattern-1---route",children:[]},{value:"MVC Pattern 2 - routes to const",id:"mvc-pattern-2---routes-to-const",children:[]},{value:"MVC Pattern 3 - controllers",id:"mvc-pattern-3---controllers",children:[]},{value:"Installing pug",id:"installing-pug",children:[]},{value:"Layout with pug",id:"layout-with-pug",children:[]},{value:"Partials with Pug - header, footer",id:"partials-with-pug---header-footer",children:[]},{value:"Local Variables in Pug",id:"local-variables-in-pug",children:[]},{value:"Template Variables in Pug",id:"template-variables-in-pug",children:[]},{value:"Search Controller",id:"search-controller",children:[]},{value:"Log In HTML",id:"log-in-html",children:[]},{value:"Change Profile HTML",id:"change-profile-html",children:[]},{value:"Change ChangePassword.pug, EditVideo.pug, VideoUpload.pug HTML",id:"change-changepasswordpug-editvideopug-videouploadpug-html",children:[]},{value:"Home Controller - Videos",id:"home-controller---videos",children:[]},{value:"Home Controller part Two - mixins",id:"home-controller-part-two---mixins",children:[]},{value:"Join Controller",id:"join-controller",children:[]},{value:"Log In and User Profile Controller",id:"log-in-and-user-profile-controller",children:[]},{value:"More Controllers",id:"more-controllers",children:[]}],n={toc:i};function o({components:e,...t}){return Object(c.b)("wrapper",Object(a.a)({},n,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"expressjs"},"ExpressJS"),Object(c.b)("h2",{id:"what-is-a-server"},"What is a Server"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Software Server",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ub41c \ud55c \ub369\uc5b4\ub9ac\uc758 \ucf54\ub4dc")))),Object(c.b)("h2",{id:"what-is-express"},"What is Express"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"super stable framework!!!")),Object(c.b)("h2",{id:"first-express-server"},"first Express Server"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/709c9f3f97e2af7857e83aa5b635efd9371deceb"},"commit"))),Object(c.b)("h2",{id:"handle-route-with-express"},"handle route with express"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/e061cea3088dd84bb00828b81b709db7b62ec0cc"},"commit"))),Object(c.b)("h2",{id:"es6-on-nodejs-using-babel"},"ES6 on NodeJS using Babel"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/b6a2460419d832830f3bc03dcf09d3008b5d436a"},"commit")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://shlee0882.tistory.com/231"},"\ucc38\uace0"))),Object(c.b)("h2",{id:"express-core--middlewares-1"},"Express Core : Middlewares 1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/054e584f61abfd2421038ab229efc7d8b72d125c"},"commit")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://shlee0882.tistory.com/232?category=797808"},"\ucc38\uace0")),Object(c.b)("li",{parentName:"ul"},"ip \uc8fc\uc18c \uac70\ubd80 \uae30\ub2a5 \ub4f1.."),Object(c.b)("li",{parentName:"ul"},"middleware \ub294 \uc911\uac04\uc5d0 \uc811\uc18d\uc744 \ub04a\uc744 \uc218\ub3c4 \uc788\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"res.send() !!!",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const middleware = (req, res, next) => {\n  res.send('not hapenning')\n}\n")))))),Object(c.b)("h2",{id:"express-core-middlewares-2"},"Express Core: Middlewares 2"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/1dcca49d204527bc005a4f2cfc3dc804ebb930ef"},"commit")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://shlee0882.tistory.com/233?category=797808"},"\ucc38\uace0"))),Object(c.b)("h2",{id:"express-core-routing"},"Express Core: Routing"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/123099dd366443818c578365e17784ba620cd452"},"commit"))),Object(c.b)("h2",{id:"mvc-pattern-1---route"},"MVC Pattern 1 - Route"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/69010a0c9ae6a041302f2e0b04cddadc965add6e"},"commit"))),Object(c.b)("h2",{id:"mvc-pattern-2---routes-to-const"},"MVC Pattern 2 - routes to const"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/edea14c498779ecedd37c258171b56f60660c828"},"commit"))),Object(c.b)("h2",{id:"mvc-pattern-3---controllers"},"MVC Pattern 3 - controllers"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/0cc50e1c32adaf05b84fd985d15bbd95622dc002"},"commit"))),Object(c.b)("h2",{id:"installing-pug"},"Installing pug"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/12fdfc214e4676cf9c9c0f667823218e1628b855"},"commit"))),Object(c.b)("h2",{id:"layout-with-pug"},"Layout with pug"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/4ddcd5cd2b941992dab30f2f46fc06b9e7cb68ad"},"commit"))),Object(c.b)("h2",{id:"partials-with-pug---header-footer"},"Partials with Pug - header, footer"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/4d8ee9614aaec3b01b6222bae95e2d93d5b29c24"},"commit"))),Object(c.b)("h2",{id:"local-variables-in-pug"},"Local Variables in Pug"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/2300a3343c63e458459dd21fd4729bd760806b96"},"commit"))),Object(c.b)("h2",{id:"template-variables-in-pug"},"Template Variables in Pug"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/ade1e0d4628efdf4cf6c42ee1406f28ce8bdec34"},"commit"))),Object(c.b)("h2",{id:"search-controller"},"Search Controller"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/dc086793ea8390116a1b164f0af7c2a3ee76c207"},"commit"))),Object(c.b)("h2",{id:"log-in-html"},"Log In HTML"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/18c149f52f273ad4c405f7cd016fb3746589f6b8"},"commit"))),Object(c.b)("h2",{id:"change-profile-html"},"Change Profile HTML"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/b29cd6004166cfb1180ad852bcf8cc151ac4a96b"},"commit"))),Object(c.b)("h2",{id:"change-changepasswordpug-editvideopug-videouploadpug-html"},"Change ChangePassword.pug, EditVideo.pug, VideoUpload.pug HTML"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/b57ca7cac1a5719d95f589da8aabd5ba4257f251"},"commit"))),Object(c.b)("h2",{id:"home-controller---videos"},"Home Controller - Videos"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/854bcf2751f376cd093aec6ee80e2098a8b4afd1"},"commit"))),Object(c.b)("h2",{id:"home-controller-part-two---mixins"},"Home Controller part Two - mixins"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/bd7598b4cf7beea6cff9e13caa63ea9cae543bd5"},"commit"))),Object(c.b)("h2",{id:"join-controller"},"Join Controller"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/bbfcad8e6d51260d6ea6cd74f128cab0b063089f"},"commit"))),Object(c.b)("h2",{id:"log-in-and-user-profile-controller"},"Log In and User Profile Controller"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/50c6d21e7eae4dda8bf49d7dcf1fb335647f1883"},"commit"))),Object(c.b)("h2",{id:"more-controllers"},"More Controllers"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/eyabc/wetube/commit/6a8b5d1e18cecd0bcc6ff30c597e9835195d9812"},"commit"))))}o.isMDXComponent=!0},471:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var a=r(0),c=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=c.a.createContext({}),u=function(e){var t=c.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),d=u(r),s=a,p=d["".concat(b,".").concat(s)]||d[s]||m[s]||l;return r?c.a.createElement(p,i(i({ref:t},o),{},{components:r})):c.a.createElement(p,i({ref:t},o))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,b=new Array(l);b[0]=s;var i={};for(var n in t)hasOwnProperty.call(t,n)&&(i[n]=t[n]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=r[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);