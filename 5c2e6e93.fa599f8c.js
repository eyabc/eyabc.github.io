(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{217:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return i})),t.d(e,"toc",(function(){return c})),t.d(e,"default",(function(){return p}));var r=t(3),s=t(7),o=(t(0),t(447)),a={},i={unversionedId:"javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud568\uc218 Async Await",id:"javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud568\uc218 Async Await",isDocsHomePage:!1,title:"\ube44\ub3d9\uae30 \ud568\uc218 Async Await",description:"[ES2017] \ube44\ub3d9\uae30 \ud568\uc218 Async Await",source:"@site/docs/javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud568\uc218 Async Await.md",slug:"/javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud568\uc218 Async Await",permalink:"/docs/javascript/asynchronous_programming/\ube44\ub3d9\uae30 \ud568\uc218 Async Await",version:"current",sidebar:"javascript",previous:{title:"JOBS",permalink:"/docs/javascript/asynchronous_programming/JOBS"},next:{title:"Async Iterator",permalink:"/docs/javascript/asynchronous_programming/Async Iterator"}},c=[],u={toc:c};function p(n){var e=n.components,t=Object(s.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"es2017-\ube44\ub3d9\uae30-\ud568\uc218-async-await"},"[ES2017]"," \ube44\ub3d9\uae30 \ud568\uc218 Async Await"),Object(o.b)("p",null,"\ub3d9\uae30\uc2dd \ucf54\ub4dc\uc640 \uac70\uc758 \uac19\uc740 \uad6c\uc870\uc758 \ube44\ub3d9\uae30\uc2dd \ucf54\ub4dc\ub97c \uc9e4 \uc218 \uc788\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"* Sync \uc11c\ube0c\ub8e8\ud2f4\uc774 \uc989\uc2dc \uac12\uc744 \ubc18\ud658\n* Async \uc11c\ube0c\ub8e8\ud2f4\uc774 \ub2e4\ub978 \uc218\ub2e8\uc73c\ub85c \uac12\uc744 \ubc18\ud658\n\n|  | Sync | Async \ub2e8\uc810 |\n|---|---|---|\n|\uc11c\ube0c\ub8e8\ud2f4\uc758 \ubc18\ud658 | \uc989\uc2dc \uac12 \ubc18\ud658 | \ub2e4\ub978 \uc218\ub2e8\uc73c\ub85c \uac12 \ubc18\ud658. `<br>` - \uc989\uc2dc \ubc18\ud658\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ud604\uc7ac\uc758 sync flow \uac00 \uc885\ub8cc\ub428|\n|\ud604\uc7ac \uc5b4\ud718\uacf5\uac04 \uc0ac\uc6a9 | O | X (\ud074\ub85c\uc800\ub098, \ubcf5\uc7a1\ud55c \uc2a4\ucf54\ud504 \uc0ac\uc6a9\ud574\uc57c\ud568) `<br>` - \uc694\uccad \uc2dc\uc758 \uc5b4\ud718\uacf5\uac04\uc744 \ubcc4\ub3c4\ub85c \uacb0\uacfc\uc2dc\uc810\uc5d0 \uc804\ub2ec\ud560 \ubd80\uac00\uc7a5\uce58 \ud544\uc694. |\n\n\n## async \ud0a4\uc6cc\ub4dc\nfunction \uc55e\uc5d0 \uc704\uce58\ud568 \n\n\ube44\ub3d9\uae30 \ud568\uc218\n```javascript\nasync function func1() {\n  // ...\n}\n```\n\n\ube44\ub3d9\uae30 \ud654\uc0b4\ud45c \ud568\uc218\n```javascript\nconst func2 = async () => {\n  // ...\n}\n```\n\ube44\ub3d9\uae30 \uba54\uc18c\ub4dc\n```javascript\nclass MyClass {\n  async myMethod() {\n    // ...\n  }\n}\n```\n\n\n### \ud56d\uc0c1 Promise \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4.\nfunction \uc774 Promise \uac00 \uc544\ub2cc \uac12\uc744 \ubc18\ud658\ud574\ub3c4, \uc774\ud589 \uc0c1\ud0dc\uc758 Promise \ub85c \uac10\uc2f8 \ubc18\ud658\ud55c\ub2e4.\n```javascript\nasync function func1() {\n  return 1;\n}\n/*\nfunc1()\nPromise {\n    [[PromiseState]]: \"fulfilled\"\n    [[PromiseResult]]: 1\n}\n*/\n```\nPromise \uc758 \uba85\uc2dc\uc801 \ubc18\ud658\n\n\ube44\ub3d9\uae30 \ud568\uc218 \ub0b4\uc5d0\uc11c return \ud55c \uac12\uc774, Promise \uac1d\uccb4\uc758 `[[PromiseResult]]` \uac12\n```javascript\nasync function func2() {\n  return Promise.resolve(2);\n}\n/*\nfunc2()\nPromise {\n    [[PromiseState]]: \"fulfilled\"\n    [[PromiseResult]]: 2\n}\n*/\n\nasync function func4() {\n  return Promise.reject(2);\n}\n\n/* \nfunc4()\nPromise {\n    [[PromiseState]]: \"rejected\"\n    [[PromiseResult]]: 2\n}\n*/ \n```\n\ube44\ub3d9\uae30 \ud568\uc218\uc5d0\uc11c return \uc744 \ud574\uc8fc\uc9c0 \uc54a\uc558\uc744 \ub54c, \n```javascript\nasync function func3() { }\n/*\nfunc3()\nPromise {\n    [[PromiseState]]: \"fulfilled\"\n    [[PromiseResult]]: undefined\n}\n*/\n```\n\n\n## await \ud0a4\uc6cc\ub4dc\n- async \ud568\uc218 \uc548\uc5d0\uc11c\ub9cc \ub3d9\uc791\n- await \ud0a4\uc6cc\ub4dc \ub4a4\uc5d0 \uc624\ub294 Promise \uac00 \ucc98\ub9ac(settled) \ub420 \ub54c\uae4c\uc9c0 Suspend \ub41c\ub2e4\n    - Promise \uac00 \ucc98\ub9ac\ub418\uae38 \uae30\ub2e4\ub9ac\ub294 \ub3d9\uc548\uc5d4 \uc5d4\uc9c4\uc774 \ub2e4\ub978\uc77c(\ub2e4\ub978 \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589, \uc774\ubca4\ud2b8 \ucc98\ub9ac \ub4f1)\uc744 \ud558\uae30 \ub54c\ubb38\uc5d0 CPU \ub9ac\uc18c\uc2a4\uac00 \ub0ad\ube44\ub418\uc9c0 \uc54a\ub294\ub2e4.\n- await \uc5f0\uc0b0\uc758 \uacb0\uacfc \uac12\n    - \ub4a4\uc5d0 \uc624\ub294 Promise \uac1d\uccb4\uc758 `[[PromiseResult]]`\n\n```javascript\nfunction delay(ms) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      console.log(`${ms} \ubc00\ub9ac\ucd08\uac00 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4.`);\n      resolve()\n    }, ms);\n  });\n}\n\nasync function main() {\n  await delay(1000);\n  await delay(2000);\n  const result = await Promise.resolve('\ub05d');\n  console.log(result);\n}\n\nmain();\n//  1000 \ubc00\ub9ac\ucd08\uac00 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4.\n//  2000 \ubc00\ub9ac\ucd08\uac00 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4.\n//  \ub05d\n```\n\nawait \uc740 \ucd5c\uc0c1\uc704 \ub808\ubca8 \ucf54\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c IIFE \uc744 \uc0ac\uc6a9\ud558\uc790\n- Deno \ub294 top-level await \uc744 \uc9c0\uc6d0\ud55c\ub2e4.\n```javascript\n(async () => {\n  let response = await fetch('/article/promise-chaining/user.json');\n  let user = await response.json();\n  // ...\n})();\n```\n\nawait \uc740 thenable \uac1d\uccb4\ub97c \ubc1b\ub294\ub2e4.\n- resolve, reject \ub97c \uc778\uc218\ub85c \uc81c\uacf5\ud558\ub294 .then \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c\ub2e4.\n```javascript\nclass Thenable {\n  constructor(num) {\n    this.num = num;\n  }\n  then(resolve, reject) {\n    alert(resolve);\n    // 1000\ubc00\ub9ac\ucd08 \ud6c4\uc5d0 \uc774\ud589\ub428(result\ub294 this.num*2)\n    setTimeout(() => resolve(this.num * 2), 1000); // (*)\n  }\n};\n\nasync function f() {\n  // 1\ucd08 \ud6c4, \ubcc0\uc218 result\ub294 2\uac00 \ub428\n  let result = await new Thenable(1);\n  alert(result);\n}\n\nf();\n```\nasync \uac00 \uc544\ub2cc \ud568\uc218\uc5d0\uc11c async \ud568\uc218 \ud638\ucd9c\ud558\uae30\n```javascript\nasync function wait() {\n  await new Promise(resolve => setTimeout(resolve, 1000));\n  return 10;\n}\n\nfunction f() {\n  // shows 10 after 1 second\n  wait().then(result => alert(result));\n}\nf();\n```\n\n## async/await \uc774 promise \ub97c \ub9ac\ud134\ud560 \ub54c\n```javascript\n// bad\nAddUser: async (userName) => {\n  await fetch(`${ADDRESS}/api/users`, ApiOptions.POST({name: userName}));\n},\n\n// good\nAddUser: userName =>  fetch(`${ADDRESS}/api/users`, ApiOptions.POST({name: userName})),\n```\n[promise\ub97c \ubc14\ub85c return \ud558\uba74 \uad73\uc774 async/await\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2f5\ub2c8\ub2e4!](https://github.com/next-step/js-todo-list-step2/pull/23)\n\n\n## \uc5d0\ub7ec \ucc98\ub9ac\n```javascript\nasync function f() {\n  try {\n    let response = await fetch('http://\uc720\ud6a8\ud558\uc9c0-\uc54a\uc740-\uc8fc\uc18c');\n  } catch(err) {\n    alert(err); // TypeError: failed to fetch\n  }\n}\nf();\n```\n```javascript\nasync function f() {\n  let response = await fetch('http://\uc720\ud6a8\ud558\uc9c0-\uc54a\uc740-url');\n}\n\n// f()\ub294 \uac70\ubd80 \uc0c1\ud0dc\uc758 \ud504\ub77c\ubbf8\uc2a4\uac00 \ub429\ub2c8\ub2e4.\nf().catch(alert); // TypeError: failed to fetch // (*)\n```\n\n\uc608\uc678 \ucc98\ub9ac\ub97c \ud574\uc8fc\uc9c0 \uc54a\uc73c\uba74. \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc740 Promise \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4. \n- `unhandledrejection` \uc804\uc5ed \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc774\uc6a9\ud574 \uc7a1\uc744 \uc218 \uc788\ub2e4.\n\n\n## Promise -> \ube44\ub3d9\uae30 \ud568\uc218\n\uc55e\uc11c \ub098\uc624\ub358 \ubcf5\uc7a1\ud55c \uc608\uc81c\uc758 Callback Promise \ucf54\ub4dc\uc640 \ube44\uad50\ud574 \ubcf4\uc790\n```javascript\nconst axios = require('axios');\nconst API_URL = 'https://api.github.com';\n\nasync function fetchStarCount() {\n  const starCount = {};\n\n  // 1. Github\uc5d0 \uacf5\uac1c\ub418\uc5b4\uc788\ub294 \uc800\uc7a5\uc18c \uc911, \uc5b8\uc5b4\uac00 JavaScript\uc774\uace0 \ubcc4\ud45c\ub97c \uac00\uc7a5 \ub9ce\uc774 \ubc1b\uc740 \uc800\uc7a5\uc18c\ub97c \ubd88\ub7ec\uc628\ub2e4.\n  const topRepoRes = await axios.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`);\n\n  // 2. \uc704 \uc800\uc7a5\uc18c\uc5d0 \uac00\uc7a5 \ub9ce\uc774 \uae30\uc5ec\ud55c \uae30\uc5ec\uc790 5\uba85\uc758 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc628\ub2e4.\n  const topMemberRes = await axios.get(`${API_URL}/repos/${topRepoRes.data.items[0].full_name}/contributors?per_page=5`);\n\n  // 3. \ud574\ub2f9 \uae30\uc5ec\uc790\ub4e4\uc774 \ucd5c\uadfc\uc5d0 Github\uc5d0\uc11c \ubcc4\ud45c\ub97c \ud55c \uc800\uc7a5\uc18c\ub97c \uac01\uac01 10\uac1c\uc529 \ubd88\ub7ec\uc628\ub2e4.\n  const ps = topMemberRes.data.map(user => axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`));\n  const starredReposRess = await Promise.all(ps);\n  const starredReposData = starredReposRess.map(r => r.data);\n\n  // 4. \ubd88\ub7ec\uc628 \uc800\uc7a5\uc18c\ub97c \ubaa8\ub450 \ubaa8\uc544, \uac1c\uc218\ub97c \uc13c \ud6c4 \uc800\uc7a5\uc18c\uc758 \uc774\ub984\uc744 \uac1c\uc218\uc640 \ud568\uaed8 \ucd9c\ub825\ud55c\ub2e4.\n  for (let repoArr of starredReposData) {\n    for (let repo of repoArr) {\n      if (repo.full_name in starCount) {\n        starCount[repo.full_name]++;\n      } else {\n        starCount[repo.full_name] = 1;\n      }\n    }\n  }\n  return starCount;\n}\n\nfetchStarCount().then(console.log);\n```\n\n```javascript\nfunction loadJson(url) {\n  return fetch(url)\n    .then(response => {\n      if (response.status == 200) {\n        return response.json();\n      } else {\n        throw new Error(response.status);\n      }\n    })\n}\n\nloadJson('no-such-user.json')\n  .catch(alert); // Error: 404\n```\n```javascript\nasync function loadJson(url) { // (1)\n  let response = await fetch(url); // (2)\n  if (response.status == 200) {\n    let json = await response.json(); // (3)\n    return json;\n  }\n  throw new Error(response.status);\n}\nloadJson('no-such-user.json')\n  .catch(alert); // Error: 404 (4)\n```\n\n---\n### setTimeout \uc758 \ucee8\ubc84\ud130 timeout \ud568\uc218\n\n`res(f())` \n- `f`\uc758 \ub9ac\ud134\uac12\uc744 `[[PromiseResult]]`\uc73c\ub85c \uac00\uc9c0\ub294 Promise \uac1d\uccb4 \n\n```javascript\nconst timeout = (f, ms) => new Promise(res => setTimeout(_ => res(f()), ms));\nconst f1 = _ => 'abc';\nconst f2 = _ => 'def';\nconst start = performance.now();\n```\n> performance.now() \ube0c\ub77c\uc6b0\uc800 \uc2e4\ud589\uc2dc\uac01\uc744 \uae30\uc900\uc73c\ub85c \uc2dc\uac04\uc774 count \ub418\uba70 \ub098\ub178\uc138\ucee8\ub4dc\uc758 \ub354 \uc815\ud655\ud55c \uc2dc\uac04\uacc4\uc0b0\uc774 \uac00\ub2a5\ud574\uc9c4\ub2e4.\n\n\n```javascript\nconst promise1 = new Promise(res => res(f1()));\npromise1.then(console.log);\n```\n\n```javascript\nconst promise2 = (async () => f2())();\npromise2.then(console.log);\n```\n\n\uc774 \ucf54\ub4dc\uc758 \ucd1d \uc2e4\ud589\uc2dc\uac04\uc740 \uc5b4\ub5bb\uac8c \ub420\uae4c? \uc57d 1000ms (\ubcd1\ub82c \uc2e4\ud589)\n```javascript\n(() => {\n    timeout(f1, 500).then(v => console.log(v, performance.now() - start));\n})();\n(() => {\n    timeout(f2, 1000).then(v => console.log(v, performance.now() - start));\n})();\n```\n```javascript\n(async(f, ms) => {\n    console.log(await timeout(f1, ms), performance.now() - start);\n})(f1, 500);\n(async(f, ms) => {\n    console.log(await timeout(f2, ms), performance.now() - start);\n})(f2, 1000);\n```\n\n<img src=\"https://user-images.githubusercontent.com/31977543/92399667-a4608000-f165-11ea-96fd-ab1be3e039a7.png\" style=\"height:200px\"/>\n\n\n\uc57d 1500 ms \uc5d0 \uc218\ud589\ub420 \uac83\uc774\ub2e4.\n```javascript\n(() => {\n    timeout(f1, 500)\n    .then(v => {\n        console.log(v, performance.now() - start);\n        return timeout(f2, 1000);\n    })\n    .then(v => console.log(v, performance.now() - start));\n})();\n```\n```javascript\n(async () => {\n    console.log(await timeout(f1, 500), performance.now() - start);\n    console.log(await timeout(f2, 1000), performance.now() - start);\n})();\n```\n\n```javascript\n(async() => {\n    console.log(\n        await timeout(f1, 500), performance.now() - start,\n        await timeout(f2, 1000), performance.now() - start,\n    )\n})();\n```\n\n<img src=\"https://user-images.githubusercontent.com/31977543/92400722-52b8f500-f167-11ea-842a-1cb2eeda842e.png\" style=\"height:200px\"/>\n\n\uc57d 1000 ms \n```javascript\n(async () => {\n    const [v1, v2] = await Promise.all([timeout(f1, 500), timeout(f2, 1000)]);\n    console.log(v1, v2, performance.now() - start);\n})\n```\n\n<img src=\"https://user-images.githubusercontent.com/31977543/92401591-eccd6d00-f168-11ea-9ab2-c99e867a56d1.png\" style=\"height:200px\"/>\n\n\uc57d 500 ms\n```javascript\n(async () => {\n    const v = await Promise.race([timeout(f1, 500), timeout(f2, 1000)]);\n    console.log(v, performance.now() - start);\n})\n```\n\n\n`timeout fetch`     \ntimeout \uc774 \uc9c0\uc6d0\ub418\ub294 fetch \ud568\uc218. fetch \uc5d0 timeout \uc774 \uc5c6\ub2e4. \n```javascript\nconst api = async(url, timeout = 5000, info = {}) => {\n    // fetch \uc5d0 Throw \uac00 \ub0a0 \uac00\ub2a5\uc131\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \ubd99\uc5ec\uc90c. Promise \uac1d\uccb4\uac00 \uc5d0\ub7ec \uacb0\uacfc\uac12\uc744 \uac16\uace0 await \uc744 \ub9cc\ub098\uba74 try catch \uc5d0\uc11c \uac10\uc9c0 \ub41c\ub2e4.\n    try {\n        let id = -1;    // setTimeout \uc740 \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0\ub3c4 id \ub97c -1 \ub85c \ub9ac\ud134\ud558\ub294 \uacbd\uc6b0\uac00 \uc5c6\ub2e4.\n        const v = await Promise.race([  // v \ub294 undefined \uac00 \uc624\ub4e0\uc9c0 fetch \uc758 Response \uac1d\uccb4\uac00 \uc62c \uac83\uc774\ub2e4.\n            new Promise(res => id = window.setTimeout(_ => res(), timeout)),\n            fetch(new Request(url, info))\n        ]);\n        \n        if (v instanceof Response) {\n            clearTimeout(id);\n            return v.status === 404 ? new Error('404') : await v.text();\n        }\n        else return new Error('timeout');   \n    }\n    catch (e) {\n        return e;\n    }\n}\n```\n\n```javascript\n(async() => {\n    const v = await api(\"200.html\", 1);\n    if (v instanceof Error) console.log(`error: ${v}`);\n    else console.log(`contents: ${v}`);\n})();\n```\n\n\n<img src=\"https://user-images.githubusercontent.com/31977543/92403386-500cce80-f16c-11ea-8a95-f2555306dd45.png\" style=\"height:200px\"/>\n<img src=\"https://user-images.githubusercontent.com/31977543/92403392-5307bf00-f16c-11ea-9220-d91f6a727b44.png\" style=\"height:200px\"/>\n\n\n\ub354 \uce5c\ud654\uc801\uc778 async await \uc758 \uc0ac\uc6a9\ubc29\ubc95\uc740 \uc5d0\ub7ec\uac1d\uccb4\ub97c \ub9ac\ud134\ud558\ub294 \uac83\uc774 \uc544\ub2cc `throw` \ub97c \ud558\ub294 \uac83\uc774\ub2e4. \n\napi \ub97c \uc0ac\uc6a9\ud558\ub294 \ucabd\uc5d0\uc11c try catch \ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.\n\n```javascript\nconst api = async(url, timeout = 5000, info = {}) => {\n    let id = -1;    // setTimeout \uc740 \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0\ub3c4 id \ub97c -1 \ub85c \ub9ac\ud134\ud558\ub294 \uacbd\uc6b0\uac00 \uc5c6\ub2e4.\n    const v = await Promise.race([  // v \ub294 undefined \uac00 \uc624\ub4e0\uc9c0 fetch \uc758 Response \uac1d\uccb4\uac00 \uc62c \uac83\uc774\ub2e4.\n        new Promise(res => id = window.setTimeout(_ => res(), timeout)),\n        fetch(new Request(url, info))\n    ]);\n    \n    if (v instanceof Response) {\n        clearTimeout(id);\n        if(v.status === 404) new Error('404');\n        return await v.text()\n    }\n    else new Error('timeout');   \n}\n```\n\n\ube44\ub3d9\uae30 \uba85\ub839\ubcf4\ub2e4 \ub3d9\uae30 \uba85\ub839\uc774 \ud6e8\uc52c \ud3b8\ud558\ub2e4. \n- \uc9c0\uc5ed\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4. \n- \ud074\ub85c\uc800\ub97c \uc774\uc6a9\ud574\ub3c4 \uc678\ubd80 \uc2a4\ucf54\ud504\uc758 \ubcc0\uc218\uac00 \uac00\uae4c\uc774 \uc788\ub2e4.\n\n```javascript\nconst api = async(url, timeout = 5000, info = {}) => {\n    let id = -1;    // setTimeout \uc740 \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0\ub3c4 id \ub97c -1 \ub85c \ub9ac\ud134\ud558\ub294 \uacbd\uc6b0\uac00 \uc5c6\ub2e4.\n    const v = await Promise.race([  // v \ub294 undefined \uac00 \uc624\ub4e0\uc9c0 fetch \uc758 Response \uac1d\uccb4\uac00 \uc62c \uac83\uc774\ub2e4.\n        new Promise(res => id = window.setTimeout(_ => res(), timeout)),\n        fetch(new Request(url, info))\n    ]);\n    \n    if (v instanceof Response) {\n        clearTimeout(id);\n        if(v.status === 404) new Error('404');\n        return await v.json()\n    }\n    else new Error('timeout');   \n};\n\n(async () => {\n    try {\n        const { id, nick, thumb } = await api('/member');\n        const [ {name, email, sex }, friendsId] = await Promise.all([api(`/detail/${id}`), api(`/friends/${id}`)]);\n        updateMember(nick, thumb, name, email, sex);\n        updateFriends(\n            (await Promise.all(friendsId.map(id => api(`/detail/${id}`)))).map((v, idx) => ({id: friendsId[idx], ...v}));\n        );\n    } catch (e) {\n        console.log(e); // json parsing \uc5d0\ub7ec\ub294 throw \ub97c \ub358\uc9c0\uba74 \uc5ec\uae30\uc11c \uce90\uce58 \n    }\n})();\nconst updateMember = (nick, thumb, name, email, sex) => {}\nconst updateFriends = (details) => details.map(({id, name, email, sex}) => {} ) \n``` \n\n<img src=\"https://user-images.githubusercontent.com/31977543/92436015-a155a600-f1de-11ea-9c33-d933c3cd1aed.png\" style=\"height:200px\"/>\n\nReference & Comment\n--\n- https://gitlab.com/siots-study/topics/-/wikis/asyncronous\n- https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF\n- https://helloworldjavascript.net/pages/285-async.html\n- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all\n- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race\n- https://ko.javascript.info/async\n- https://ko.javascript.info/generators-iterators\n- https://www.bsidesoft.com/8325\n- https://www.bsidesoft.com/6037\n\n")))}p.isMDXComponent=!0},447:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return d}));var r=t(0),s=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var u=s.a.createContext({}),p=function(n){var e=s.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=p(n.components);return s.a.createElement(u.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return s.a.createElement(s.a.Fragment,{},e)}},f=s.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),m=p(t),f=r,d=m["".concat(a,".").concat(f)]||m[f]||l[f]||o;return t?s.a.createElement(d,i(i({ref:e},u),{},{components:t})):s.a.createElement(d,i({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:r,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);