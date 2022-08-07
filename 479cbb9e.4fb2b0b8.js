(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(482)),o={},l={unversionedId:"database/dynamoDB/6. Working with DynamoDB using AWS CLI",id:"database/dynamoDB/6. Working with DynamoDB using AWS CLI",isDocsHomePage:!1,title:"6. Working with DynamoDB using AWS CLI",description:"37. Installing the AWS CLI",source:"@site/docs/database/dynamoDB/6. Working with DynamoDB using AWS CLI.md",slug:"/database/dynamoDB/6. Working with DynamoDB using AWS CLI",permalink:"/docs/database/dynamoDB/6. Working with DynamoDB using AWS CLI",version:"current",lastUpdatedAt:1658155721,sidebar:"database",previous:{title:"5. Working with DynamoDB using AWS Console",permalink:"/docs/database/dynamoDB/5. Working with DynamoDB using AWS Console"},next:{title:"7. Working with DynamoDB using AWS SDK",permalink:"/docs/database/dynamoDB/7. Working with DynamoDB using AWS SDK"}},s=[{value:"37. Installing the AWS CLI",id:"37-installing-the-aws-cli",children:[]},{value:"38. Table level Operations with AWS CLI",id:"38-table-level-operations-with-aws-cli",children:[]},{value:"39. Write Operations - Item level Operations with AWS CLI",id:"39-write-operations---item-level-operations-with-aws-cli",children:[]},{value:"40. Read Operations - Item level Operations with AWS CLI",id:"40-read-operations---item-level-operations-with-aws-cli",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"37-installing-the-aws-cli"},"37. Installing the AWS CLI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"))),Object(i.b)("h2",{id:"38-table-level-operations-with-aws-cli"},"38. Table level Operations with AWS CLI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/reference/dynamodb/index.html"},"https://docs.aws.amazon.com/cli/latest/reference/dynamodb/index.html"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ aws dynamodb list-tables\n{\n    "TableNames": [\n        "td_notes"\n    ]\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ aws dynamodb describe-table help\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ aws dynamodb describe-table --table-name td_notes\n{\n    "Table": {\n        "AttributeDefinitions": [\n            {\n                "AttributeName": "cat",\n                "AttributeType": "S"\n            },\n            {\n                "AttributeName": "note_id",\n                "AttributeType": "S"\n            },\n            {\n                "AttributeName": "timestamp",\n                "AttributeType": "N"\n            },\n            {\n                "AttributeName": "title",\n                "AttributeType": "S"\n            },\n            {\n                "AttributeName": "user_id",\n                "AttributeType": "S"\n            }\n        ],\n                "TableName": "td_notes",\n        "KeySchema": [\n            {\n                "AttributeName": "user_id",\n                "KeyType": "HASH"\n            },\n            {\n                "AttributeName": "timestamp",\n                "KeyType": "RANGE"\n            }\n        ],\n        "TableStatus": "ACTIVE",\n        "CreationDateTime": "2022-04-12T00:08:14.752000+09:00",\n        "ProvisionedThroughput": {\n            "NumberOfDecreasesToday": 0,\n            "ReadCapacityUnits": 1,\n            "WriteCapacityUnits": 1\n        },\n        "TableSizeBytes": 117,\n        "ItemCount": 1,\n        # ...\n')),Object(i.b)("h2",{id:"39-write-operations---item-level-operations-with-aws-cli"},"39. Write Operations - Item level Operations with AWS CLI"),Object(i.b)("h2",{id:"40-read-operations---item-level-operations-with-aws-cli"},"40. Read Operations - Item level Operations with AWS CLI"))}u.isMDXComponent=!0},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);