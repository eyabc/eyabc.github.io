(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{462:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||c;return t?a.a.createElement(d,o(o({ref:n},s),{},{components:t})):a.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),c=(t(0),t(462)),i={},o={unversionedId:"dev-etc/Ngnix",id:"dev-etc/Ngnix",isDocsHomePage:!1,title:"Ngnix",description:"Nginx",source:"@site/docs/dev-etc/Ngnix.md",slug:"/dev-etc/Ngnix",permalink:"/docs/dev-etc/Ngnix",version:"current",lastUpdatedAt:1626882853,sidebar:"devEtc",previous:{title:"\ub9e5\uc5d0\uc11c NodeJS \uc124\uce58\ud558\ub294 \ubc29\ubc95",permalink:"/docs/dev-etc/\ub9e5\uc5d0\uc11c NodeJS \uc124\uce58\ud558\ub294 \ubc29\ubc95"},next:{title:"MacTerminalCommand",permalink:"/docs/dev-etc/MacTerminalCommand"}},l=[{value:"Nginx",id:"nginx",children:[]},{value:"Nginx \ubd80\ud305\uc2dc \uc790\ub3d9 \uc2e4\ud589",id:"nginx-\ubd80\ud305\uc2dc-\uc790\ub3d9-\uc2e4\ud589",children:[]},{value:"Cross-Domain",id:"cross-domain",children:[]},{value:"Cross-Domain \ubc30\uacbd",id:"cross-domain-\ubc30\uacbd",children:[]},{value:"Cross-Domain \ud574\uacb0",id:"cross-domain-\ud574\uacb0",children:[]},{value:"ngnix.conf",id:"ngnixconf",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"nginx"},"Nginx"),Object(c.b)("h1",{id:"nginx-1"},"Nginx"),Object(c.b)("h2",{id:"nginx-\ubd80\ud305\uc2dc-\uc790\ub3d9-\uc2e4\ud589"},"Nginx \ubd80\ud305\uc2dc \uc790\ub3d9 \uc2e4\ud589"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# brew install nginx\n$ sudo ln -s /usr/local/opt/nginx/homebrew.mxcl.nginx.plist /Library/LaunchDaemons/\n$ sudo chown root:wheel /usr/local/opt/nginx/homebrew.mxcl.nginx.plist\n$ sudo launchctl load /Library/LaunchDaemons/homebrew.mxcl.nginx.plist\n")),Object(c.b)("h1",{id:"cross-domain-issue"},"Cros`s-Domain Issue"),Object(c.b)("p",null,"CORS (Cross Origin Request)"),Object(c.b)("h2",{id:"cross-domain"},"Cross-Domain"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"javascript \ubcf4\uc548\uc815\ucc45 Same Origin Policy \uc774\ub2e4 ."),Object(c.b)("li",{parentName:"ul"},"\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc2e4\ud589\ub418\ub294 \ud398\uc774\uc9c0\uc640 \ube44\ub3d9\uae30 \ud638\ucd9c\uc2dc \uc8fc\uc18c\uc758 \ud504\ub85c\ud1a0\ucf5c, \ud638\uc2a4\ud2b8, \ud3ec\ud2b8\uac00 \uac19\uc544\uc57c \ud55c\ub2e4. ")),Object(c.b)("h2",{id:"cross-domain-\ubc30\uacbd"},"Cross-Domain \ubc30\uacbd"),Object(c.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c API\uc11c\ubc84\uc5d0 \ube44\ub3d9\uae30 \ud1b5\uc2e0\uc744 \ud558\uc5ec \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub824\uace0 \ud560\ub54c \ubc1c\uc0dd"),Object(c.b)("h2",{id:"cross-domain-\ud574\uacb0"},"Cross-Domain \ud574\uacb0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \ud638\ucd9c \uc11c\ubc84\uc758 Header\uc5d0 Access-Control \uad00\ub828 \ub0b4\uc6a9\uc744 \ubcf4\uc5ec\uc90c "),Object(c.b)("li",{parentName:"ul"},"node.js cors\ubaa8\ub4c8 ",Object(c.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/cors"},"https://www.npmjs.com/package/cors"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"var cors = require('cors');\nvar app = express();\napp.use(cors());\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub3c4\uba54\uc778\uc744 localhost:port \uac00 \uc544\ub2cc\n\uc0c8\ub85c\uc774 \ub9cc\ub4e4\uc5b4 \ud68c\ud53c\ud55c\ub2e4..\n\uc608\ub97c\ub4e4\uc5b4 test.textory.io \uc758 \ud504\ub860\ud2b8 \ub3c4\uba54\uc778\uc73c\ub85c \uc811\uc18d\uc744 \ud558\uba74\nproxy_pass:port \uc124\uc815\uc744 \ud1b5\ud574 CORS \ub97c \ud68c\ud53c\ud558\uac8c \ub418\ub294 \uac83\uc774\ub2e4. ")),Object(c.b)("p",null,"\ud68c\ud53c \uc124\uc815\uc740 "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo vi etc/hosts \uc124\uc815\uc744 \ud558\uace0 \n$ nginx -s reload\n")),Object(c.b)("h2",{id:"ngnixconf"},"ngnix.conf"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc778\uc99d\uc11c\ub97c \ubc1c\uae09\ubc1b\ub294\ub2e4.(raks) "),Object(c.b)("li",{parentName:"ul"},"ngnix.conf \ud30c\uc77c\uc744 \ubc1b\ub294\ub2e4. (raks)",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'/Users/"computerName"/...',Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"computerName \ubd80\ubd84\uc744 \uc218\uc815\ud55c\ub2e4. ")))))),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Nesoy Blog ",Object(c.b)("a",{parentName:"li",href:"https://nesoy.github.io/articles/2017-06/Cross-Domain"},"https://nesoy.github.io/articles/2017-06/Cross-Domain")),Object(c.b)("li",{parentName:"ul"},"nginx \ubd80\ud305\uc2dc \uc790\ub3d9\uc2e4\ud589 ",Object(c.b)("a",{parentName:"li",href:"https://gist.github.com/SergeyMiracle/17753a17531a1f38015364fad159587b"},"https://gist.github.com/SergeyMiracle/17753a17531a1f38015364fad159587b"))))}u.isMDXComponent=!0}}]);