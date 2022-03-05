(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(455)),c={},l={unversionedId:"javascript/asynchronous_programming/\ucf5c\ubc31 Callback",id:"javascript/asynchronous_programming/\ucf5c\ubc31 Callback",isDocsHomePage:!1,title:"\ucf5c\ubc31 Callback",description:"\ucf5c\ubc31 (Callback)",source:"@site/docs/javascript/asynchronous_programming/\ucf5c\ubc31 Callback.md",slug:"/javascript/asynchronous_programming/\ucf5c\ubc31 Callback",permalink:"/docs/javascript/asynchronous_programming/\ucf5c\ubc31 Callback",version:"current",sidebar:"javascript",previous:{title:"\ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d",permalink:"/docs/javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d"},next:{title:"Promise",permalink:"/docs/javascript/asynchronous_programming/Promise"}},s=[{value:"\ucf5c\ubc31 (Callback)",id:"\ucf5c\ubc31-callback",children:[]},{value:"\ucf5c\ubc31\uc758 \uc5d0\ub7ec \ucc98\ub9ac",id:"\ucf5c\ubc31\uc758-\uc5d0\ub7ec-\ucc98\ub9ac",children:[]},{value:"Reference &amp; Comment",id:"reference--comment",children:[]}],i={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\ucf5c\ubc31-callback"},"\ucf5c\ubc31 (Callback)"),Object(o.b)("p",null,"\ub2e4\ub978 \ud568\uc218\uc758 \uc778\uc218\ub85c \ub118\uae30\ub294 \ud568\uc218"),Object(o.b)("p",null,"\uc608\uc2dc) Github \uc758 create-react-app \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub4f1\ub85d\ub418\uc5b4 \uc788\ub294 \uc774\uc288 \ubaa9\ub85d\uc744 \uac00\uc838\uc640\uc11c \ucd9c\ub825\ud558\ub294 \ucf54\ub4dc"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"$.get \uba54\uc18c\ub4dc",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\ube44\ub3d9\uae30\uc2dd \ub3d9\uc791"),Object(o.b)("li",{parentName:"ul"},"Github API \uc11c\ubc84 \ud1b5\uc2e0 \ud0dc\uc2a4\ud06c\ub97c \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc704\uc784\ud55c \ud6c4 \uc885\ub8cc\ub41c\ub2e4."),Object(o.b)("li",{parentName:"ul"},"\ud1b5\uc2e0\uc774 \ub05d\ub09c \ud6c4 \uadf8 \uacb0\uacfc\ub97c \uccab\ubc88\uc9f8 \uc778\uc218\ub85c \ud574\uc11c \ucf5c\ubc31\uc744 \ud638\ucd9c\ud55c\ub2e4.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const $ = require('jquery');\nconst API_URL = 'https://api.github.com/repos/facebookincubator/create-react-app/issues?per_page=10';\n\n$.ajaxSetup({\n  dataType: 'json'\n});\n\n$.get(API_URL, issues => {\n  console.log('\ucd5c\uadfc 10\uac1c\uc758 \uc774\uc288:');\n  issues\n    .map(issue => issue.title)\n    .forEach(title => console.log(title));\n  console.log('\ucd9c\ub825\uc774 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.');\n});\n\nconsole.log('\ubc1b\uc544\uc624\ub294 \uc911...');\n")),Object(o.b)("p",null,"\ub354 \ubcf5\uc7a1\ud55c \uc608\uc2dc) "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Github \uc5d0 \uacf5\uac1c\ub418\uc5b4\uc788\ub294 \uc800\uc7a5\uc18c \uc911, \uc5b8\uc5b4\uac00 JavaScript \uc774\uace0 \ubcc4\ud45c\ub97c \uac00\uc7a5 \ub9ce\uc774 \ubc1b\uc740 \uc800\uc7a5\uc18c\ub97c \ubd88\ub7ec\uc628\ub2e4."),Object(o.b)("li",{parentName:"ol"},"\uc704 \uc800\uc7a5\uc18c\uc5d0 \uac00\uc7a5 \ub9ce\uc774 \uae30\uc5ec\ud55c \uae30\uc5ec\uc790 5\uba85\uc758 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc628\ub2e4."),Object(o.b)("li",{parentName:"ol"},"\ud574\ub2f9 \uae30\uc5ec\uc790\ub4e4\uc774 \ucd5c\uadfc\uc5d0 Github \uc5d0\uc11c \ubcc4\ud45c\ub97c \ud55c \uc800\uc7a5\uc18c\ub97c \uac01\uac01 10\uac1c\uc529 \ubd88\ub7ec\uc628\ub2e4."),Object(o.b)("li",{parentName:"ol"},"\ubd88\ub7ec\uc628 \uc800\uc7a5\uc18c\ub97c \ubaa8\ub450 \ubaa8\uc544, \uac1c\uc218\ub97c \uc13c \ud6c4 \uc800\uc7a5\uc18c\uc758 \uc774\ub984\uc744 \uac1c\uc218\uc640 \ud568\uaed8 \ucd9c\ub825\ud55c\ub2e4.")),Object(o.b)("p",null,"\ub370\uc774\ud130 \ud750\ub984\uc774 \uc870\uae08\ub9cc \ubcf5\uc7a1\ud574\uc838\ub3c4 \ucf54\ub4dc\uac00 \ubcf5\uc7a1\ud574\uc9c0\ub294 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const $ = require('jquery');\nconst API_URL = 'https://api.github.com';\nconst starCount = {};\n\n$.ajaxSetup({\n  dataType: 'json'\n});\n\n// 1. Github\uc5d0 \uacf5\uac1c\ub418\uc5b4\uc788\ub294 \uc800\uc7a5\uc18c \uc911, \uc5b8\uc5b4\uac00 JavaScript\uc774\uace0 \ubcc4\ud45c\ub97c \uac00\uc7a5 \ub9ce\uc774 \ubc1b\uc740 \uc800\uc7a5\uc18c\ub97c \ubd88\ub7ec\uc628\ub2e4.\n$.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`, result => {\n  // 2. \uc704 \uc800\uc7a5\uc18c\uc5d0 \uac00\uc7a5 \ub9ce\uc774 \uae30\uc5ec\ud55c \uae30\uc5ec\uc790 5\uba85\uc758 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc628\ub2e4.\n  $.get(`${API_URL}/repos/${result.items[0].full_name}/contributors?per_page=5`, users => {\n    let repoArrs = [];\n    for (let user of users) {\n      // 3. \ud574\ub2f9 \uae30\uc5ec\uc790\ub4e4\uc774 \ucd5c\uadfc\uc5d0 Github\uc5d0\uc11c \ubcc4\ud45c\ub97c \ud55c \uc800\uc7a5\uc18c\ub97c \uac01 \uae30\uc5ec\uc790\ub9c8\ub2e4 10\uac1c\uc529 \ubd88\ub7ec\uc628\ub2e4.\n      $.get(`${API_URL}/users/${user.login}/starred?per_page=10`, repos => {\n        repoArrs.push(repos);\n        // 4. \ubd88\ub7ec\uc628 \uc800\uc7a5\uc18c\ub97c \ubaa8\ub450 \ubaa8\uc544, \uac1c\uc218\ub97c \uc13c \ud6c4 \uc800\uc7a5\uc18c\uc758 \uc774\ub984\uc744 \uac1c\uc218\uc640 \ud568\uaed8 \ucd9c\ub825\ud55c\ub2e4.\n        if (repoArrs.length === 5) {\n          for (let repoArr of repoArrs) {\n            for (let repo of repoArr) {\n              if (repo.full_name in starCount) {\n                starCount[repo.full_name]++;\n              } else {\n                starCount[repo.full_name] = 1;\n              }\n            }\n          }\n          console.log(starCount);\n        }\n      });\n    }\n  });\n});\n\nconsole.log('fetching...');\n")),Object(o.b)("h2",{id:"\ucf5c\ubc31\uc758-\uc5d0\ub7ec-\ucc98\ub9ac"},"\ucf5c\ubc31\uc758 \uc5d0\ub7ec \ucc98\ub9ac"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function loadScript(src, callback) {\n  let script = document.createElement('script');\n  script.src = src;\n\n  script.onload = () => callback(null, script);\n  script.onerror = () => callback(new Error(`${src}\ub97c \ubd88\ub7ec\uc624\ub294 \ub3c4\uc911\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.`));\n\n  document.head.append(script);\n}\n\nloadScript('/my/script.js', function(error, script) {\n  if (error) {\n    // \uc5d0\ub7ec \ucc98\ub9ac\n  } else {\n    // \uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub529\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ub05d\ub0a8\n  }\n});\n")),Object(o.b)("h2",{id:"reference--comment"},"Reference & Comment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gitlab.com/siots-study/topics/-/wikis/asyncronous"},"https://gitlab.com/siots-study/topics/-/wikis/asyncronous")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF"},"https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://helloworldjavascript.net/pages/285-async.html"},"https://helloworldjavascript.net/pages/285-async.html")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://ko.javascript.info/async"},"https://ko.javascript.info/async")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://ko.javascript.info/generators-iterators"},"https://ko.javascript.info/generators-iterators")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.bsidesoft.com/8325"},"https://www.bsidesoft.com/8325")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.bsidesoft.com/6037"},"https://www.bsidesoft.com/6037"))))}p.isMDXComponent=!0},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,j=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(j,l(l({ref:t},i),{},{components:r})):a.a.createElement(j,l({ref:t},i))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);