(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(368)),l={},c={unversionedId:"javascript/asynchronous_programming/Async Iterable",id:"javascript/asynchronous_programming/Async Iterable",isDocsHomePage:!1,title:"Async Iterable",description:"Async Iterable",source:"@site/docs/javascript/asynchronous_programming/Async Iterable.md",slug:"/javascript/asynchronous_programming/Async Iterable",permalink:"/docs/javascript/asynchronous_programming/Async Iterable",version:"current",sidebar:"javascript",previous:{title:"Async Generator",permalink:"/docs/javascript/asynchronous_programming/Async Generator"},next:{title:"\ubaa8\ub4c8",permalink:"/docs/javascript/module/\ubaa8\ub4c8"}},i=[{value:"generator Iterator",id:"generator-iterator",children:[]},{value:"\ube44\ub3d9\uae30 \ub3d9\uc791\uc744 \ucd94\uac00\ud55c generator",id:"\ube44\ub3d9\uae30-\ub3d9\uc791\uc744-\ucd94\uac00\ud55c-generator",children:[]},{value:"Pagination",id:"pagination",children:[]},{value:"co \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"co-\ub77c\uc774\ube0c\ub7ec\ub9ac",children:[]},{value:"iterable &amp; generator \uc694\uc57d",id:"iterable--generator-\uc694\uc57d",children:[]},{value:"Reference &amp; Comment",id:"reference--comment",children:[]}],s={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"async-iterable"},"Async Iterable"),Object(o.b)("h2",{id:"generator-iterator"},"generator Iterator"),Object(o.b)("p",null,"Symbol.iterator \ub294 next() \uac00 \uad6c\ud604\ub41c \uc77c\ubc18 \uac1d\uccb4\ubcf4\ub2e4, \uc81c\ub108\ub808\uc774\ud130\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \uad6c\ud604\ud558\ub294 \uacbd\uc6b0\uac00 \ub354 \ub9ce\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"let range = {\n from: 1,\n to: 5,\n\n *[Symbol.iterator]() { // [Symbol.iterator]: function*()\ub97c \uc9e7\uac8c \uc904\uc784\n   for(let value = this.from; value <= this.to; value++) {\n     yield value;\n   }\n }\n};\n")),Object(o.b)("h2",{id:"\ube44\ub3d9\uae30-\ub3d9\uc791\uc744-\ucd94\uac00\ud55c-generator"},"\ube44\ub3d9\uae30 \ub3d9\uc791\uc744 \ucd94\uac00\ud55c generator"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"let range = {\n from: 1,\n to: 5,\n\n async *[Symbol.asyncIterator]() { // [Symbol.asyncIterator]: async function*()\uc640 \ub3d9\uc77c\n   for(let value = this.from; value <= this.to; value++) {\n\n     // \uac12 \uc0ac\uc774 \uc0ac\uc774\uc5d0 \uc57d\uac04\uc758 \uacf5\ubc31\uc744 \uc90c\n     await new Promise(resolve => setTimeout(resolve, 1000));\n\n     yield value;\n   }\n }\n};\n")),Object(o.b)("h2",{id:"pagination"},"Pagination"),Object(o.b)("p",null,"\ub9ce\uc740 \uc628\ub77c\uc778 \uc11c\ube44\uc2a4\uac00 Pagination \uc744 \uad6c\ud604\ud574 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud55c\ub2e4.\n\uc0ac\uc6a9\uc790 \ubaa9\ub85d\uc774 \ud544\uc694\ud574\uc11c \uc11c\ubc84\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uba74, \uc11c\ubc84\ub294 \uc77c\uc815 \uc22b\uc790 \ub2e8\uc704\ub85c \uc0ac\uc6a9\uc790\ub97c \ub04a\uc5b4 \uc815\ubcf4\ub97c \ud55c \ud398\uc774\uc9c0\ub85c \uad6c\uc131\ud55c \ud6c4 \ub2e4\uc74c\ud398\uc774\uc9c0\ub97c \ubcfc \uc218 \uc788\ub294 url \uacfc \ud568\uaed8 \uc751\ub2f5\ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"async function* fetchCommits(repo) {\n let url = `https://api.github.com/repos/${repo}/commits`;\n\n while (url) {\n   const response = await fetch(url, { // (1)\n     headers: {'User-Agent': 'Our script'}, // GitHub\ub294 \ubaa8\ub4e0 \uc694\uccad\uc5d0 user-agent\ud5e4\ub354\ub97c \uac15\uc81c \ud569\ub2c8\ub2e4.\n   });\n\n   const body = await response.json(); // (2) \uc751\ub2f5\uc740 JSON \ud615\ud0dc\ub85c \uc635\ub2c8\ub2e4(\ucee4\ubc0b\uc774 \ub2f4\uae34 \ubc30\uc5f4).\n\n   // (3) \ud5e4\ub354\uc5d0 \ub2f4\uae34 \ub2e4\uc74c \ud398\uc774\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 URL\uc744 \ucd94\ucd9c\ud569\ub2c8\ub2e4.\n   let nextPage = response.headers.get('Link').match(/<(.*?)>; rel=\"next\"/);\n   nextPage = nextPage?.[1];\n\n   url = nextPage;\n\n   for(let commit of body) { // (4) \ud398\uc774\uc9c0\uac00 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 \ucee4\ubc0b\uc744 \ud558\ub098\uc529 \ubc18\ud658(yield)\ud569\ub2c8\ub2e4.\n     yield commit;\n   }\n }\n}\n(async () => {\n let count = 0;\n for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {\n   console.log(commit.author.login);\n   if (++count == 100) { // 100\ubc88\uc9f8 \ucee4\ubc0b\uc5d0\uc11c \uba48\ucda5\ub2c8\ub2e4.\n     break;\n   }\n }\n})();\n")),Object(o.b)("h2",{id:"co-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"co \ub77c\uc774\ube0c\ub7ec\ub9ac"),Object(o.b)("p",null,"generator \ub97c \ube44\ub3d9\uae30\uc2dd\uc73c\ub85c \uc791\ub3d9\uc2dc\ud0ac \uc218 \uc788\ub294 co \ub77c\uc774\ube0c\ub7ec\ub9ac"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Github\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 \uc608\uc81c\ub97c \ub2e4\uc2dc \uc791\uc131")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const co = require('co');\nconst axios = require('axios');\nconst API_URL = 'https://api.github.com';\n\nfunction* fetchStarCount() {\n const starCount = {};\n\n // 1. Github\uc5d0 \uacf5\uac1c\ub418\uc5b4\uc788\ub294 \uc800\uc7a5\uc18c \uc911, \uc5b8\uc5b4\uac00 JavaScript \uc774\uace0 \ubcc4\ud45c\ub97c \uac00\uc7a5 \ub9ce\uc774 \ubc1b\uc740 \uc800\uc7a5\uc18c\ub97c \ubd88\ub7ec\uc628\ub2e4.\n const topRepoRes = yield axios.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`);\n\n // 2. \uc704 \uc800\uc7a5\uc18c\uc5d0 \uac00\uc7a5 \ub9ce\uc774 \uae30\uc5ec\ud55c \uae30\uc5ec\uc790 5\uba85\uc758 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc628\ub2e4.\n const topMemberRes = yield axios.get(`${API_URL}/repos/${topRepoRes.data.items[0].full_name}/contributors?per_page=5`);\n\n // 3. \ud574\ub2f9 \uae30\uc5ec\uc790\ub4e4\uc774 \ucd5c\uadfc\uc5d0 Github\uc5d0\uc11c \ubcc4\ud45c\ub97c \ud55c \uc800\uc7a5\uc18c\ub97c \uac01\uac01 10\uac1c\uc529 \ubd88\ub7ec\uc628\ub2e4.\n const ps = topMemberRes.data.map(user => axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`));\n const starredReposRess = yield Promise.all(ps);\n const starredReposData = starredReposRess.map(r => r.data);\n\n // 4. \ubd88\ub7ec\uc628 \uc800\uc7a5\uc18c\ub97c \ubaa8\ub450 \ubaa8\uc544, \uac1c\uc218\ub97c \uc13c \ud6c4 \uc800\uc7a5\uc18c\uc758 \uc774\ub984\uc744 \uac1c\uc218\uc640 \ud568\uaed8 \ucd9c\ub825\ud55c\ub2e4.\n for (let repoArr of starredReposData) {\n   for (let repo of repoArr) {\n     if (repo.full_name in starCount) {\n       starCount[repo.full_name]++;\n     } else {\n       starCount[repo.full_name] = 1;\n     }\n   }\n }\n return starCount;\n}\n\nco(fetchStarCount).then(console.log);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const infinity = async function* (category) {\n    let page = -1;\n    do {\n        try {\n            const { nextPage, items} = await api(`/list/${category}/${page === -1 ? \"\": page}`);\n            page = nextPage;\n            yield items;\n        } catch(e) {\n            return;\n        }\n    } while(page !== -1);\n};\nconst notice = infinity('notice');\n(async () => {\n    const { value, done } = await notice.next();\n    if (!done) console.log(value);  // \ud398\uc774\uc9c0 \ub80c\ub354\ub9c1\n});\ndocument.querySelector('#next').onclick = async() => {\n    const { value, done } = await notice.next();\n    if (!done) console.log(value);\n}\n")),Object(o.b)("h2",{id:"iterable--generator-\uc694\uc57d"},"iterable & generator \uc694\uc57d"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"iterable"),Object(o.b)("th",{parentName:"tr",align:null},"async iterable"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"iterator \ub97c \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc"),Object(o.b)("td",{parentName:"tr",align:null},"Symbol.iterator"),Object(o.b)("td",{parentName:"tr",align:null},"Symbol.asyncIterator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"next() \uac00 \ubc18\ud658\ud558\ub294 \uac12"),Object(o.b)("td",{parentName:"tr",align:null},"{ value:..., done: true/false }"),Object(o.b)("td",{parentName:"tr",align:null},"{ value:..., done: true/false } \ub97c \uac10\uc2f8\ub294 Promise")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"generator"),Object(o.b)("th",{parentName:"tr",align:null},"async generator"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"\uc120\uc5b8"),Object(o.b)("td",{parentName:"tr",align:null},"function*"),Object(o.b)("td",{parentName:"tr",align:null},"async function*")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"next() \uac00 \ubc18\ud658\ud558\ub294 \uac12"),Object(o.b)("td",{parentName:"tr",align:null},"{ value:..., done: true/false }"),Object(o.b)("td",{parentName:"tr",align:null},"{ value:..., done: true/false } \ub97c \uac10\uc2f8\ub294 Promise")))),Object(o.b)("p",null,"\uc6f9\uac1c\ubc1c\uc744 \ud558\ub2e4\ubcf4\uba74 \ub744\uc5c4\ub744\uc5c4 \ub4e4\uc5b4\uc624\ub294 \ub370\uc774\ud130 \uc2a4\ud2b8\ub9bc\uc744 \ub2e4\ub8e8\uc5b4\uc57c \ud560 \ub54c\uac00 \uc790\uc8fc \uc0dd\uae34\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uc6a9\ub7c9\uc774 \ud070 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc&\uc5c5\ub85c\ub4dc")),Object(o.b)("p",null,"\uc774\ub7f0 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud560 \ub54c, async generator \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("p",null,"\uba87\uba87 \ube0c\ub77c\uc6b0\uc800 \ubc0f \ud638\uc2a4\ud2b8 \ud658\uacbd\uc5d0\uc11c\ub294 \ub370\uc774\ud130\uc2a4\ud2b8\ub9bc\uc744 \ucc98\ub9ac\ud574\uc8fc\ub294 API \ub97c \uc81c\uacf5\ud558\uae30\ub3c4 \ud55c\ub2e4."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ud55c\ucabd\uc5d0\uc11c \ubc1b\uc740 \ub370\uc774\ud130\ub97c \ub2e4\ub978 \ucabd\uc5d0 \uc989\uac01 \uc804\ub2ec\ud558\ub294\uac8c \uac00\ub2a5\ud574\uc9c4\ub2e4.\n(TODO)")),Object(o.b)("h2",{id:"reference--comment"},"Reference & Comment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gitlab.com/siots-study/topics/-/wikis/asyncronous"},"https://gitlab.com/siots-study/topics/-/wikis/asyncronous")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF"},"https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://helloworldjavascript.net/pages/285-async.html"},"https://helloworldjavascript.net/pages/285-async.html")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://ko.javascript.info/async"},"https://ko.javascript.info/async")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://ko.javascript.info/generators-iterators"},"https://ko.javascript.info/generators-iterators")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.bsidesoft.com/8325"},"https://www.bsidesoft.com/8325")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.bsidesoft.com/6037"},"https://www.bsidesoft.com/6037"))))}b.isMDXComponent=!0},368:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);