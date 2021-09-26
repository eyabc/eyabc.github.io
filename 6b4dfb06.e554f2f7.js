(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{213:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var s=t(3),r=(t(0),t(414)),o=t(421),a=t(422);const c={title:"5. \uc2e4\uc804 \ucf54\ub4dc\uc870\uac01"},i={unversionedId:"javascript/functional_programming/5_\uc2e4\uc804\ucf54\ub4dc\uc870\uac01",id:"javascript/functional_programming/5_\uc2e4\uc804\ucf54\ub4dc\uc870\uac01",isDocsHomePage:!1,title:"5. \uc2e4\uc804 \ucf54\ub4dc\uc870\uac01",description:"users, posts, comments",source:"@site/docs/javascript/functional_programming/5_\uc2e4\uc804\ucf54\ub4dc\uc870\uac01.mdx",slug:"/javascript/functional_programming/5_\uc2e4\uc804\ucf54\ub4dc\uc870\uac01",permalink:"/docs/javascript/functional_programming/5_\uc2e4\uc804\ucf54\ub4dc\uc870\uac01",version:"current",sidebar:"javascript",previous:{title:"4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\uc758 \uc9c0\uc5f0 \ud3c9\uac00",permalink:"/docs/javascript/functional_programming/4_\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\uc758_\uc9c0\uc5f0_\ud3c9\uac00"},next:{title:"Sync Async",permalink:"/docs/javascript/asynchronous_programming/Sync Async"}},u=[{value:"users, posts, comments",id:"users-posts-comments",children:[{value:"1. \ud2b9\uc815\uc778\uc758 posts \uc758 \ubaa8\ub4e0 comments \uac70\ub974\uae30",id:"1-\ud2b9\uc815\uc778\uc758-posts-\uc758-\ubaa8\ub4e0-comments-\uac70\ub974\uae30",children:[]},{value:"2. \ud2b9\uc815\uc778\uc758 posts\uc5d0 comments \ub97c \ub2e8 \uce5c\uad6c\uc758 \uc774\ub984\ub4e4 \ubf51\uae30",id:"2-\ud2b9\uc815\uc778\uc758-posts\uc5d0-comments-\ub97c-\ub2e8-\uce5c\uad6c\uc758-\uc774\ub984\ub4e4-\ubf51\uae30",children:[]},{value:"\uc911\ubcf5 \uc81c\uac70\ud558\uae30",id:"\uc911\ubcf5-\uc81c\uac70\ud558\uae30",children:[]},{value:"3. \ud2b9\uc815\uc778\uc758 posts\uc5d0 comments\ub97c \ub2e8 \uce5c\uad6c\ub4e4 \uce74\uc6b4\ud2b8 \uc815\ubcf4",id:"3-\ud2b9\uc815\uc778\uc758-posts\uc5d0-comments\ub97c-\ub2e8-\uce5c\uad6c\ub4e4-\uce74\uc6b4\ud2b8-\uc815\ubcf4",children:[]},{value:"\ubb38\uc81c 1,2,3 \uc744 \ud568\uc218\ub85c \ub9cc\ub4e4\uae30",id:"\ubb38\uc81c-123-\uc744-\ud568\uc218\ub85c-\ub9cc\ub4e4\uae30",children:[]},{value:"4. \ud2b9\uc815\uc778\uc774 comment\ub97c \ub2e8 posts \uac70\ub974\uae30",id:"4-\ud2b9\uc815\uc778\uc774-comment\ub97c-\ub2e8-posts-\uac70\ub974\uae30",children:[]}]},{value:"\ud6a8\uc728 \ub192\uc774\uae30",id:"\ud6a8\uc728-\ub192\uc774\uae30",children:[{value:"index_by",id:"index_by",children:[]},{value:"group_by",id:"group_by",children:[]},{value:"\uae30\uc874 object \uc758 \uac12\ub4e4\uc744 \uc9c1\uc811 \ubcc0\uacbd\ud558\ub294 \ubc29\uc2dd\uc758 \ubb38\uc81c\uc810",id:"\uae30\uc874-object-\uc758-\uac12\ub4e4\uc744-\uc9c1\uc811-\ubcc0\uacbd\ud558\ub294-\ubc29\uc2dd\uc758-\ubb38\uc81c\uc810",children:[]}]}],l={toc:u};function p({components:e,...n}){return Object(r.b)("wrapper",Object(s.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"users-posts-comments"},"users, posts, comments"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var users = [\n  { id: 101, name: 'ID' },\n  { id: 102, name: 'BJ' },\n  { id: 103, name: 'PJ' },\n  { id: 104, name: 'HA' },\n  { id: 105, name: 'JE' },\n  { id: 106, name: 'JI' }\n];\n\nvar posts = [\n  { id: 201, body: '\ub0b4\uc6a91', user_id: 101 },\n  { id: 202, body: '\ub0b4\uc6a92', user_id: 102 },\n  { id: 203, body: '\ub0b4\uc6a93', user_id: 103 },\n  { id: 204, body: '\ub0b4\uc6a94', user_id: 102 },\n  { id: 205, body: '\ub0b4\uc6a95', user_id: 101 },\n];\n\nvar comments = [\n  { id: 301, body: '\ub313\uae001', user_id: 105, post_id: 201 },\n  { id: 302, body: '\ub313\uae002', user_id: 104, post_id: 201 },\n  { id: 303, body: '\ub313\uae003', user_id: 104, post_id: 202 },\n  { id: 304, body: '\ub313\uae004', user_id: 105, post_id: 203 },\n  { id: 305, body: '\ub313\uae005', user_id: 106, post_id: 203 },\n  { id: 306, body: '\ub313\uae006', user_id: 106, post_id: 204 },\n  { id: 307, body: '\ub313\uae007', user_id: 102, post_id: 205 },\n  { id: 308, body: '\ub313\uae008', user_id: 103, post_id: 204 },\n  { id: 309, body: '\ub313\uae009', user_id: 103, post_id: 202 },\n  { id: 310, body: '\ub313\uae0010', user_id: 105, post_id: 201 }\n];\n")),Object(r.b)("h3",{id:"1-\ud2b9\uc815\uc778\uc758-posts-\uc758-\ubaa8\ub4e0-comments-\uac70\ub974\uae30"},"1. \ud2b9\uc815\uc778\uc758 posts \uc758 \ubaa8\ub4e0 comments \uac70\ub974\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="1. \ud2b9\uc815\uc778\uc758 posts \uc758 \ubaa8\ub4e0 comments \uac70\ub974\uae30"',title:'"1.',"\ud2b9\uc815\uc778\uc758":!0,posts:!0,"\uc758":!0,"\ubaa8\ub4e0":!0,comments:!0,'\uac70\ub974\uae30"':!0},"_.go(\n  _.where(posts, { user_id: 101 }), // _.filter(posts, (post) => post.user_id == 101),\n  _.pluck('id'), // _.map((post) => post.id),\n  (post_ids) => _.filter(comments, (comment) => _.contains(post_ids, comment.post_id)),\n  console.log\n);\n/*[\n  {id: 301, body: '\ub313\uae001', user_id: 105, post_id: 201},\n  {id: 302, body: '\ub313\uae002', user_id: 104, post_id: 201},\n  {id: 307, body: '\ub313\uae007', user_id: 102, post_id: 205},\n  {id: 310, body: '\ub313\uae0010', user_id: 105, post_id: 201}\n]\n * */\n")),Object(r.b)("h3",{id:"2-\ud2b9\uc815\uc778\uc758-posts\uc5d0-comments-\ub97c-\ub2e8-\uce5c\uad6c\uc758-\uc774\ub984\ub4e4-\ubf51\uae30"},"2. \ud2b9\uc815\uc778\uc758 posts\uc5d0 comments \ub97c \ub2e8 \uce5c\uad6c\uc758 \uc774\ub984\ub4e4 \ubf51\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="2. \ud2b9\uc815\uc778\uc758 posts\uc5d0 comments \ub97c \ub2e8 \uce5c\uad6c\uc758 \uc774\ub984\ub4e4 \ubf51\uae30"',title:'"2.',"\ud2b9\uc815\uc778\uc758":!0,"posts\uc5d0":!0,comments:!0,"\ub97c":!0,"\ub2e8":!0,"\uce5c\uad6c\uc758":!0,"\uc774\ub984\ub4e4":!0,'\ubf51\uae30"':!0},"_.go(\n  _.where(posts, { user_id: 101}),\n  _.pluck('id'),\n  (post_ids) => _.filter(comments, (comment) => _.contains(post_ids, comment.post_id)),\n  _.map((comment) => _.find(users, (user) => user.id == comment.user_id).name),\n  _.uniq,\n  console.log\n);\n// ['JE', 'HA', 'BJ']\n")),Object(r.b)("h3",{id:"\uc911\ubcf5-\uc81c\uac70\ud558\uae30"},"\uc911\ubcf5 \uc81c\uac70\ud558\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uc911\ubcf5 \uc81c\uac70\ud558\uae30 1"',title:'"\uc911\ubcf5',"\uc81c\uac70\ud558\uae30":!0,'1"':!0},"function posts_by(attr) {\n  return _.where(posts, attr);\n}\n\n_.go({ user_id: 101 },\n posts_by,\n ...\n);\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\uc911\ubcf5 \uc81c\uac70\ud558\uae30 2"',title:'"\uc911\ubcf5',"\uc81c\uac70\ud558\uae30":!0,'2"':!0},"var comments_by_posts = _.pipe(\n  _.pluck('id'),\n  (post_ids) => _.filter(comments, (comment) => _.contains(post_ids, comment.post_id)),\n);\n\n_.go({ user_id: 101 },\n  posts_by,\n  comments_by_posts\n);\n")),Object(r.b)("h3",{id:"3-\ud2b9\uc815\uc778\uc758-posts\uc5d0-comments\ub97c-\ub2e8-\uce5c\uad6c\ub4e4-\uce74\uc6b4\ud2b8-\uc815\ubcf4"},"3. \ud2b9\uc815\uc778\uc758 posts\uc5d0 comments\ub97c \ub2e8 \uce5c\uad6c\ub4e4 \uce74\uc6b4\ud2b8 \uc815\ubcf4"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="3. \ud2b9\uc815\uc778\uc758 posts\uc5d0 comments\ub97c \ub2e8 \uce5c\uad6c\ub4e4 \uce74\uc6b4\ud2b8 \uc815\ubcf4"',title:'"3.',"\ud2b9\uc815\uc778\uc758":!0,"posts\uc5d0":!0,"comments\ub97c":!0,"\ub2e8":!0,"\uce5c\uad6c\ub4e4":!0,"\uce74\uc6b4\ud2b8":!0,'\uc815\ubcf4"':!0},"_.go(\n  { user_id: 101},\n  posts_by,\n  comments_by_posts,\n  _.map((comment) => _.find(users, (user) => user.id == comment.user_id).name),\n  _.count_by,\n  console.log\n);\n// {JE: 2, HA: 1, BJ: 1}\n\nvar user_names_by_comments =\n   _.map((comment) => _.find(users, (user) => user.id == comment.user_id).name);\n\n_.go(\n  { user_id: 101},\n  posts_by,\n  comments_by_posts,\n  user_names_by_comments\n  _.count_by,\n  console.log\n);\n")),Object(r.b)("h3",{id:"\ubb38\uc81c-123-\uc744-\ud568\uc218\ub85c-\ub9cc\ub4e4\uae30"},"\ubb38\uc81c 1,2,3 \uc744 \ud568\uc218\ub85c \ub9cc\ub4e4\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="\ubb38\uc81c 1,2,3 \uc744 \ud568\uc218\ub85c \ub9cc\ub4e4\uae30"',title:'"\ubb38\uc81c',"1,2,3":!0,"\uc744":!0,"\ud568\uc218\ub85c":!0,'\ub9cc\ub4e4\uae30"':!0},"const f1 = _.pipe(posts_by, comments_by_posts);\nconsole.log(f1({ user_id: 101 }));\n\nconst f2 = _.pipe(\n  f1,\n  comments_to_user_names,\n  _.uniq\n);\nconsole.log(f2({ user_id: 101 }));\n\nconst f3 = _.pipe(\n  f1,\n  comments_to_user_names,\n  _.count_by\n);\nconsole.log(f3({ user_id: 101 }));\n")),Object(r.b)("h3",{id:"4-\ud2b9\uc815\uc778\uc774-comment\ub97c-\ub2e8-posts-\uac70\ub974\uae30"},"4. \ud2b9\uc815\uc778\uc774 comment\ub97c \ub2e8 posts \uac70\ub974\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="4. \ud2b9\uc815\uc778\uc774 comment\ub97c \ub2e8 posts \uac70\ub974\uae30"',title:'"4.',"\ud2b9\uc815\uc778\uc774":!0,"comment\ub97c":!0,"\ub2e8":!0,posts:!0,'\uac70\ub974\uae30"':!0},"_.go(\n  _.where(comments, { user_id: 105 }),\n  _.pluck('post_id'),\n  (post_ids) => _.filter(posts, (post) => _.contains(posts_ids, post.id)),\n  console.log\n);\n\n/* [\n  {id: 201, body: '\ub0b4\uc6a91', user_id: 101},\n  {id: 203, body: '\ub0b4\uc6a93', user_id: 103}\n] */\n")),Object(r.b)("h2",{id:"\ud6a8\uc728-\ub192\uc774\uae30"},"\ud6a8\uc728 \ub192\uc774\uae30"),Object(r.b)("p",null,"users + posts + comments (index_by \uc640 group_by \ub85c \ud6a8\uc728 \ub192\uc774\uae30)"),Object(r.b)("p",null,"users \ub4e4\uc774 \ub2ec\ub824\uc788\ub294 comments \ub97c \ub9cc\ub4e4 \uac83\uc774\ub2e4."),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"code",value:"code"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function find_user_by_id(user_id) {\n  return _.find(users, function(user) {\n    return user.id == user_id;\n  })\n}\n\nvar comments2 = _.map(comments, function(comment) {\n  return _.extend({\n    user: find_user_by_id(comment.user_id)\n  }, comment);\n})\n"))),Object(r.b)(a.a,{value:"result",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "user": {\n      "id": 105,\n      "name": "JE"\n    },\n    "id": 301,\n    "body": "\ub313\uae001",\n    "user_id": 105,\n    "post_id": 201\n  },\n  // ....\n]\n')))),Object(r.b)("h3",{id:"index_by"},"index_by"),Object(r.b)("p",null,"\uc5b4\ub5a4 \ud0a4\ub97c \uae30\uc900\uc73c\ub85c \uc778\ub371\uc2f1\uc744 \ud574\uc8fc\ub294 \ud568\uc218"),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"code",value:"code"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var users2 = _.index_by(users, 'id');\nconsole.log(users2);\n\nfunction find_user_by_id(user_id) {\n  return users2[user_id];\n}\n"))),Object(r.b)(a.a,{value:"code",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "101": {\n    "id": 101,\n    "name": "ID"\n  },\n  "102": {\n    "id": 102,\n    "name": "BJ"\n  },\n  // ...\n}\n')))),Object(r.b)("h3",{id:"group_by"},"group_by"),Object(r.b)("p",null,"\ud574\ub2f9\ud558\ub294 \ud0a4\ub97c \uae30\uc900\uc73c\ub85c \ubc30\uc5f4\ub85c \uac12\uc744 \ub9ac\ud134\ud55c\ub2e4."),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"code",value:"code"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"code",mdxType:"TabItem"},Object(r.b)("p",null,"\ud3ec\uc2a4\ud2b8\uc5d0 \ub2ec\ub9b0 \ub313\uae00\ub4e4\uc744 \ud3ec\ud568\uc2dc\ud0a4\ub294 \uacfc\uc815\uc774\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var comments2 = _.go(\n  comments,\n  _.map(function(comment) {\n    return _.extend({\n      user: find_user_by_id(comment.user_id)\n    }, comment);\n  }),\n  _.group_by('post_id')\n);\n"))),Object(r.b)(a.a,{value:"result",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "201": [  // post id\n    { // comments 1\n      "user": { "id": 105, "name": "JE" },\n      "id": 301,\n      "body": "\ub313\uae001",\n      "user_id": 105,\n      "post_id": 201\n    },\n    { // comments 2\n      "user": { "id": 104, "name": "HA" },\n      "id": 302,\n      "body": "\ub313\uae002",\n      "user_id": 104,\n      "post_id": 201\n    },\n    // comments of post\n  ],\n  "202": [\n    {\n      "user": {\n        "id": 104,\n        "name": "HA"\n      },\n      "id": 303,\n      "body": "\ub313\uae003",\n      "user_id": 104,\n      "post_id": 202\n    },\n    {\n      "user": {\n        "id": 103,\n        "name": "PJ"\n      },\n      "id": 309,\n      "body": "\ub313\uae009",\n      "user_id": 103,\n      "post_id": 202\n    }\n  ],\n  // ... posts with comments\n}\n')))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var posts2 = _.map(posts, function(post) {\n  return _.extend({\n    comments: comments2[post.id],\n    user: find_user_by_id(post.user_id)\n  }, post);\n})\n")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/132219845-9076cd0c-5dc3-407b-9d4f-a71cc7f64408.png",alt:"image"})),Object(r.b)("h3",{id:"\uae30\uc874-object-\uc758-\uac12\ub4e4\uc744-\uc9c1\uc811-\ubcc0\uacbd\ud558\ub294-\ubc29\uc2dd\uc758-\ubb38\uc81c\uc810"},"\uae30\uc874 object \uc758 \uac12\ub4e4\uc744 \uc9c1\uc811 \ubcc0\uacbd\ud558\ub294 \ubc29\uc2dd\uc758 \ubb38\uc81c\uc810"),Object(r.b)("p",null,"\ub9cc\ub4e4\uc5b4\uc9c4 posts3 \ub97c user \uc544\ub798\uc5d0 \ub450\ub824\uace0 \ud55c\ub2e4."),Object(r.b)("p",null,"\uc774 \ub54c user \ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uace0 \uae30\uc874 user \ub97c \ubcc0\uacbd\ud558\ub294 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud560 \ub54c\uc758 \ubb38\uc81c\uc810\uc774 \uc788\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"_.each(users2, function(user) {\n  user.posts = _.filter(posts2, function(post) {\n    return post.user_id == user.id;\n  })\n});\n")),Object(r.b)("p",null,"\uc7ac\uadc0\uc801\uc73c\ub85c user \uac00 \ucc38\uc870\ub418\ub294 \uc0c1\ud0dc\uc774\ub2e4."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/132220837-77c688da-8715-4979-8043-91f35b45e1d2.png",alt:"image"})),Object(r.b)("p",null,"\uc774\uac83\uc740 ",Object(r.b)("inlineCode",{parentName:"p"},"JSON.stringify")," \ub97c \ud558\uc600\uc744 \ub54c \ubb38\uc81c\ub97c \uad00\ucc30\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"JSON.stringify(users2);\n\n/*\nUncaught TypeError: Converting circular structure to JSON\n    --\x3e starting at object with constructor 'Object'\n    |     property 'posts' -> object with constructor 'Array'\n    |     index 0 -> object with constructor 'Object'\n    --- property 'user' closes the circle\n    at JSON.stringify (<anonymous>)\n    at <anonymous>:1:6\n(anonymous) @ VM2281:1\n */\n")),Object(r.b)("p",null,"\ub530\ub77c\uc11c \uae30\uc874 \uac1d\uccb4\ub97c \ubcc0\uacbd\ud558\ub294 \ubc29\uc2dd\uc774 \uc544\ub2cc \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \ub9cc\ub4dc\ub294 \ubc29\uc2dd\uc744 \ud0dd\ud574\uc57c \ud55c\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var posts3 =  _.group_by(posts2, 'user_id');\nvar user3 = _.map(users2, function(user) {\n  return _.extend({\n    posts: posts3[user.id]\n  }, user);\n});\n")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/132222447-d392c59f-629f-41bc-b4a5-3c60de0febf3.png",alt:"image"})),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"code",value:"code"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"code",mdxType:"TabItem"},Object(r.b)("p",null,"\ud2b9\uc815\uc778\uc758 posts \uc758 \ubaa8\ub4e0 comments \uac70\ub974\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"var user = user3[0];\n_.go(\n  user.posts,\n  _.pluck('comments'),\n  _.flatten\n);\n\n// \ud639\uc740\n_.go(\n  _.deep_pluck(user, 'posts.comments'),\n  _.flatten\n);\n"))),Object(r.b)(a.a,{value:"result",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/132223379-3b111ad3-8974-42b1-a2db-7f116dd3a0c6.png",alt:"image"})))),Object(r.b)(o.a,{defaultValue:"code",values:[{label:"code",value:"code"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"code",mdxType:"TabItem"},Object(r.b)("p",null,"\ud2b9\uc815\uc778\uc758 posts comments \ub97c \ub2e8 \uce5c\uad6c\ub4e4 \uce74\uc6b4\ud2b8 \uc815\ubcf4"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"_.go(user,\n  _.deep_pluck('posts.comments.user.name'),\n  _.count_by\n);\n"))),Object(r.b)(a.a,{value:"result",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "JE": 2,\n  "HA": 1,\n  "BJ": 1\n}\n')))),Object(r.b)("p",null,"\ud2b9\uc815\uc778\uc774 comments \ub97c \ub2e8 posts \uac70\ub974\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascripts"},"_.filter(posts2, function(post) {\n  return _.find(post.comments, function(comment) {\n    return comment.user_id == 105;\n  });\n});\n")))}p.isMDXComponent=!0},414:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var s=t(0),r=t.n(s);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),l=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=s,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||o;return t?r.a.createElement(b,c(c({ref:n},u),{},{components:t})):r.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},415:function(e,n,t){"use strict";function s(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=s(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=s(e))&&(r&&(r+=" "),r+=n);return r}},418:function(e,n,t){"use strict";var s=t(0),r=t(419);n.a=function(){const e=Object(s.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},419:function(e,n,t){"use strict";var s=t(0),r=Object(s.createContext)(void 0);n.a=r},421:function(e,n,t){"use strict";var s=t(0),r=t.n(s),o=t(418),a=t(415),c=t(53),i=t.n(c);const u=37,l=39;n.a=function(e){const{lazy:n,block:t,defaultValue:c,values:p,groupId:m,className:d}=e,{tabGroupChoices:b,setTabGroupChoices:_}=Object(o.a)(),[j,g]=Object(s.useState)(c),f=s.Children.toArray(e.children);if(null!=m){const e=b[m];null!=e&&e!==j&&p.some((n=>n.value===e))&&g(e)}const y=e=>{g(e),null!=m&&_(m,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":t},d)},p.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(a.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case l:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case u:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(O,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},n)))),n?Object(s.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map(((e,n)=>Object(s.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}},422:function(e,n,t){"use strict";var s=t(0),r=t.n(s);n.a=function({children:e,hidden:n,className:t}){return r.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}}}]);