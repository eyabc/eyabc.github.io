(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{420:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(455)),o={},i={unversionedId:"javascript/dev-settings/yarn_workspaces",id:"javascript/dev-settings/yarn_workspaces",isDocsHomePage:!1,title:"yarn_workspaces",description:"yarn workspaces -> mono repo",source:"@site/docs/javascript/dev-settings/yarn_workspaces.mdx",slug:"/javascript/dev-settings/yarn_workspaces",permalink:"/docs/javascript/dev-settings/yarn_workspaces",version:"current",sidebar:"devSettings",previous:{title:"index",permalink:"/docs/javascript/dev-settings/index"}},s=[{value:"terms",id:"terms",children:[]},{value:"declare a worktree",id:"declare-a-worktree",children:[]},{value:"Babel",id:"babel",children:[]},{value:"Origin",id:"origin",children:[]}],p={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"yarn workspaces -> mono repo"),Object(c.b)("h2",{id:"terms"},"terms"),Object(c.b)("p",null,"project"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"workspaces, repository itself")),Object(c.b)("p",null,"workspace"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"local package made up from your own sources from that same project.")),Object(c.b)("p",null,"worktree"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"list their own child workspaces.")),Object(c.b)("p",null,"Any project contains at least one workspace: the root one."),Object(c.b)("h2",{id:"declare-a-worktree"},"declare a worktree"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="/package.json"',title:'"/package.json"'},'"workspaces": [ ".packages/*\u201d ]\n')),Object(c.b)("p",null,"packages \uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud3f4\ub354\ub97c \uc4f0\uaca0\ub2e4. (\uc815\uaddc\uc2dd)"),Object(c.b)("h2",{id:"babel"},"Babel"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/babel/babel"},"\ubc14\ubca8 \uc800\uc7a5\uc18c"),"\uc5d0 \ubcf4\uba74, package.json \uc774 \uc788\ub2e4."),Object(c.b)("li",{parentName:"ul"},"packages \uc758 \ud558\uc704 \ud3f4\ub354\ub4e4\uc740 \uac01\uac01 package.json \uc744 \uac00\uc9c0\uace0 \uc788\uc74c."),Object(c.b)("li",{parentName:"ul"},"node_modules \uac00 \uacf5\uc720\ub428")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/154635434-5e64baf3-d1ca-4a02-82e8-559b6929455d.png",alt:"image"})),Object(c.b)("h2",{id:"origin"},"Origin"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://yarnpkg.com/features/workspaces"},"https://yarnpkg.com/features/workspaces")))}l.isMDXComponent=!0},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);