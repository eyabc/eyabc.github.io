(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{432:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=(r(0),r(471));const c={},o={unversionedId:"javascript/dev-settings/yarn_workspaces",id:"javascript/dev-settings/yarn_workspaces",isDocsHomePage:!1,title:"yarn_workspaces",description:"yarn workspaces -> mono repo",source:"@site/docs/javascript/dev-settings/yarn_workspaces.mdx",slug:"/javascript/dev-settings/yarn_workspaces",permalink:"/docs/javascript/dev-settings/yarn_workspaces",version:"current",lastUpdatedAt:1645453415,sidebar:"devSettings",previous:{title:"index",permalink:"/docs/javascript/dev-settings/index"}},i=[{value:"terms",id:"terms",children:[]},{value:"declare a worktree",id:"declare-a-worktree",children:[]},{value:"Babel",id:"babel",children:[]},{value:"Origin",id:"origin",children:[]}],s={toc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"yarn workspaces -> mono repo"),Object(a.b)("h2",{id:"terms"},"terms"),Object(a.b)("p",null,"project"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"workspaces, repository itself")),Object(a.b)("p",null,"workspace"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"local package made up from your own sources from that same project.")),Object(a.b)("p",null,"worktree"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"list their own child workspaces.")),Object(a.b)("p",null,"Any project contains at least one workspace: the root one."),Object(a.b)("h2",{id:"declare-a-worktree"},"declare a worktree"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="/package.json"',title:'"/package.json"'},'"workspaces": [ ".packages/*\u201d ]\n')),Object(a.b)("p",null,"packages \uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud3f4\ub354\ub97c \uc4f0\uaca0\ub2e4. (\uc815\uaddc\uc2dd)"),Object(a.b)("h2",{id:"babel"},"Babel"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/babel/babel"},"\ubc14\ubca8 \uc800\uc7a5\uc18c"),"\uc5d0 \ubcf4\uba74, package.json \uc774 \uc788\ub2e4."),Object(a.b)("li",{parentName:"ul"},"packages \uc758 \ud558\uc704 \ud3f4\ub354\ub4e4\uc740 \uac01\uac01 package.json \uc744 \uac00\uc9c0\uace0 \uc788\uc74c."),Object(a.b)("li",{parentName:"ul"},"node_modules \uac00 \uacf5\uc720\ub428")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/154635434-5e64baf3-d1ca-4a02-82e8-559b6929455d.png",alt:"image"})),Object(a.b)("h2",{id:"origin"},"Origin"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://yarnpkg.com/features/workspaces"},"https://yarnpkg.com/features/workspaces")))}l.isMDXComponent=!0},471:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);