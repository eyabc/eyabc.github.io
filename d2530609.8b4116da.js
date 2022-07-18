(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{416:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),l=(a(0),a(481));const i={},b={unversionedId:"database/dynamoDB/4. DynamoDB Basics",id:"database/dynamoDB/4. DynamoDB Basics",isDocsHomePage:!1,title:"4. DynamoDB Basics",description:"image",source:"@site/docs/database/dynamoDB/4. DynamoDB Basics.md",slug:"/database/dynamoDB/4. DynamoDB Basics",permalink:"/docs/database/dynamoDB/4. DynamoDB Basics",version:"current",sidebar:"database",previous:{title:"1. Introduction",permalink:"/docs/database/dynamoDB/1-Introduction"},next:{title:"5. Working with DynamoDB using AWS Console",permalink:"/docs/database/dynamoDB/5. Working with DynamoDB using AWS Console"}},c=[{value:"24. Terminology Comparision with SQL",id:"24-terminology-comparision-with-sql",children:[]},{value:"25. DynamoDB Tables and Naming Conventions",id:"25-dynamodb-tables-and-naming-conventions",children:[{value:"DynamoDB Tables",id:"dynamodb-tables",children:[]},{value:"Table Naming Conventions",id:"table-naming-conventions",children:[]},{value:"Top level Entities",id:"top-level-entities",children:[]},{value:"Independent Entities",id:"independent-entities",children:[]},{value:"Flexible Schema",id:"flexible-schema",children:[]}]},{value:"26. Data Types in DynamoDB",id:"26-data-types-in-dynamodb",children:[{value:"Scalar Types",id:"scalar-types",children:[]},{value:"Set Types",id:"set-types",children:[]},{value:"Document Types",id:"document-types",children:[]}]},{value:"27. DynamoDB Consistency Model",id:"27-dynamodb-consistency-model",children:[{value:"AWS Infrastructure",id:"aws-infrastructure",children:[]},{value:"Automatic Synchronous Replication",id:"automatic-synchronous-replication",children:[]},{value:"DynamoDB Read Consistency",id:"dynamodb-read-consistency",children:[]}]},{value:"28. DynamoDB Capacity Units",id:"28-dynamodb-capacity-units",children:[{value:"DynamoDB Tables",id:"dynamodb-tables-1",children:[]},{value:"Throughput Capacity \ucc98\ub9ac\ub7c9",id:"throughput-capacity-\ucc98\ub9ac\ub7c9",children:[]},{value:"RCU",id:"rcu",children:[]},{value:"WCU",id:"wcu",children:[]},{value:"Example",id:"example",children:[]},{value:"Burst Capacity",id:"burst-capacity",children:[]},{value:"Scaling",id:"scaling",children:[]}]},{value:"29. DynamoDB On-Demand Capacity",id:"29-dynamodb-on-demand-capacity",children:[{value:"On-demand capacity mode",id:"on-demand-capacity-mode",children:[]},{value:"Best if you",id:"best-if-you",children:[]}]},{value:"30. Basics of DynamoDB Partitions",id:"30-basics-of-dynamodb-partitions",children:[{value:"DynamoDB Partitions Overview",id:"dynamodb-partitions-overview",children:[]},{value:"Partition Behavior - Example",id:"partition-behavior---example",children:[]}]},{value:"31. Basics of DynamoDB Indexes",id:"31-basics-of-dynamodb-indexes",children:[{value:"Table Index",id:"table-index",children:[]},{value:"Hash Algorithm | Hash Function",id:"hash-algorithm--hash-function",children:[]}]},{value:"32. Local Secondary Indexes and Global Secondary Indexes",id:"32-local-secondary-indexes-and-global-secondary-indexes",children:[{value:"Local Secondary Index",id:"local-secondary-index",children:[]},{value:"Global Secondary Index",id:"global-secondary-index",children:[]}]},{value:"33. Interacting with DynamoDB",id:"33-interacting-with-dynamodb",children:[{value:"Different Ways to work with DynamoDB",id:"different-ways-to-work-with-dynamodb",children:[]}]},{value:"Refs",id:"refs",children:[]}],r={toc:c};function o({components:e,...t}){return Object(l.b)("wrapper",Object(n.a)({},r,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/161763616-ac530144-9c70-4eeb-ab9b-a7bd8b19cd83.png",alt:"image"})),Object(l.b)("h2",{id:"24-terminology-comparision-with-sql"},"24. Terminology Comparision with SQL"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/161765806-aa23371f-0db1-40ec-b915-1c0441761211.png",alt:"image"})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"mandatory attribute - partition key"),Object(l.b)("li",{parentName:"ul"},"optional attribute - sort key | range key")),Object(l.b)("p",null,"\ubc18\ub4dc\uc2dc \ud558\ub098\uc758 Primary key \ub97c \uac00\uc9c0\uace0 \uc788\uc5b4\uc57c \ud558\ub294\uc774\uc720"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"cost \ud574 \ubcf4\uc774\uc9c0\ub9cc, \uacb0\uad6d\uc5d0\ub294 \uad49\uc7a5\ud55c \ud37c\ud3ec\uba3c\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \ub0bc \uc218 \uc788\uac8c \ub41c\ub2e4.")),Object(l.b)("h2",{id:"25-dynamodb-tables-and-naming-conventions"},"25. DynamoDB Tables and Naming Conventions"),Object(l.b)("p",null,"\ub9ce\uc740 DBMS \uc5d0\uc11c \uc5ec\ub7ec\uac1c\uc758 DB \uc640 \uac01 DB \ub4e4\uc740 \uc5ec\ub7ec TABLE \uc744 \uac00\uc9c0\uace0 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. "),Object(l.b)("h3",{id:"dynamodb-tables"},"DynamoDB Tables"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Multiple Database \uc758 \uac1c\ub150\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\ud14c\uc774\ube14\ub4e4\uc740 Top level Entities \uc785\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\ud14c\uc774\ube14\ub4e4\uc740 AWS region \uc744 \uac00\uc9c0\uc9c0\ub9cc, \ud558\ub098\uc758 Database \ub85c \ubcf4\uc785\ub2c8\ub2e4.")),Object(l.b)("h3",{id:"table-naming-conventions"},"Table Naming Conventions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Prefix table names to create namespaces"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"prefix.tablename")," or ",Object(l.b)("inlineCode",{parentName:"li"},"prefix_tablename")),Object(l.b)("li",{parentName:"ul"},"e.g. test.user, test.projects or test_users, test_projects"),Object(l.b)("li",{parentName:"ul"},"Not mandatory, yet a good practice to follow.")),Object(l.b)("p",null,"\ub2f9\uc2e0\uc774 \ud14c\uc774\ube14\uc744 \ube60\ub974\uac8c \ubc1c\uacac\ud558\uae30 \uc704\ud574 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4. "),Object(l.b)("h3",{id:"top-level-entities"},"Top level Entities"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Different \ud55c AWS regions \ub294, \uac01\uac01 \ud14c\uc774\ube14\uc744 \uc18c\uc720\ud558\uace0 \uc788\uc744 \uac83 \uc785\ub2c8\ub2e4. ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ud14c\uc774\ube14 \ub610\ud55c \uc704\uce58\uac00 \ub530\ub85c \ub098\ub258\uc5b4\uc838 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\uac15\uc758 \uc5d0\uc11c\ub294 DynamoDB \uac00 \uc624\uc9c1 \ud558\ub098\uc758 region \uc5d0 \uc874\uc7ac\ud55c\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4. ",Object(l.b)("br",null),"\nregion \uac04 \ud14c\uc774\ube14\uc5d0 \ub300\ud574 \uc5b8\uae09\ud560 \ub54c\ub9c8\ub2e4 \uba85\uc2dc\uc801\uc73c\ub85c \uc5b8\uae09\ud569\ub2c8\ub2e4.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\ud14c\uc774\ube14\uc740 top level entities \uc774\uae30 \ub54c\ubb38\uc5d0, \uac19\uc740 \uc774\ub984\uc758 \ud14c\uc774\ube14\uc744 \uac00\uc9c8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. "))),Object(l.b)("h3",{id:"independent-entities"},"Independent Entities"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc740 \ub3c5\ub9bd\uc801\uc778 Entity \uc785\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uc678\ub798\ud0a4 \uad00\uacc4\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"DynamoDB \ub294 relationship \uc744 \uac15\uc81c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uad00\uacc4\uac00 \uc5c4\uaca9\ud558\uc9c0 \uc54a\ub294\uac83\uc774 \ud55c\uacc4\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc, \ud14c\uc774\ube14 \ucffc\ub9ac\ub97c \ub9e4\uc6b0 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"join \uc5c6\ub294 \ub3d9\uc2dc\uc5d0, \uac01 \ud14c\uc774\ube14\uc5d0 \uc801\uc808\ud55c Capacity \ub97c \uac00\ub2a5\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uac01 \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \uc131\ub2a5\uc744 \uc608\uce21\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4. ")),Object(l.b)("h3",{id:"flexible-schema"},"Flexible Schema"),Object(l.b)("p",null,"RDB \uc758 ACID \ub294 flexibility \ub97c \uc783\ub294 \uac83\uc5d0 \ub300\ud55c \ube44\uc6a9\uc744 \uc57c\uae30\ud569\ub2c8\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Different Table Items \uc740 Different Attributes \ub97c \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"Item \uc744 \ub300\ud45c\ud558\ub294 Common Attribute \ub294 \ud14c\uc774\ube14\uc758 Primary key \uc785\ub2c8\ub2e4.   "),Object(l.b)("li",{parentName:"ul"},"DynamoDB Table \uc744 \ub9cc\ub4e4 \ub54c, Attribute \ub97c \ubaa8\ub450 \uc815\uc758\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"Table \uc744 \uc0dd\uc131\ud560 \ub54c, Primary Key \uc640, \uc120\ud0dd\uc801\uc73c\ub85c \ud544\uc694\ud55c Local Indexes \ub97c \uc815\uc758\ud558\uba74 \ub429\ub2c8\ub2e4. ")),Object(l.b)("h2",{id:"26-data-types-in-dynamodb"},"26. Data Types in DynamoDB"),Object(l.b)("h3",{id:"scalar-types"},"Scalar Types"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Exactly One Value"),Object(l.b)("li",{parentName:"ul"},"e.g. string, number. binary, boolean, and null"),Object(l.b)("li",{parentName:"ul"},"Keys or Index attributes only support string, number and binary scalar types")),Object(l.b)("h4",{id:"string"},"String"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Stores text data (UTF-8 encoded)"),Object(l.b)("li",{parentName:"ul"},"Only non-empty values"),Object(l.b)("li",{parentName:"ul"},"Maximum : 4\ubc31\ub9cc KB "),Object(l.b)("li",{parentName:"ul"},"String \uc744 \uc778\ub371\uc2a4\uc758 \ubd80\ubd84\uc73c\ub85c\uc11c \uc0ac\uc6a9\ud55c\ub2e4\uba74 2KB \ubbf8\ub9cc\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. (Item \uc758 \uc804\uccb4 \ub808\ucf54\ub4dc\uc758 \uc0ac\uc774\uc988\ub3c4 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38)"),Object(l.b)("li",{parentName:"ul"},"String \uc744 Primary key \ub85c \uc0ac\uc6a9\ud55c\ub2e4\uba74 1KB \ubbf8\ub9cc\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"String \uc744 Sort Key \ub85c \uc0ac\uc6a9\ud55c\ub2e4\uba74 1KB \ubbf8\ub9cc\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},'e.g. "John", "California", "Fox in Socks"')),Object(l.b)("h4",{id:"number"},"Number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Stores all numeric types"),Object(l.b)("li",{parentName:"ul"},"e.g. 123, 100.88, -5, 0"),Object(l.b)("li",{parentName:"ul"},"API \ub85c \uc804\ub2ec\ub420 \ub54c\uc5d4 String \uc73c\ub85c \uc804\ub2ec\ub418\uc9c0\ub9cc \uacc4\uc0b0\uc5d0 \uc758\ud574 Number \ub85c \ucde8\uae09 \ub429\ub2c8\ub2e4. ")),Object(l.b)("h4",{id:"boolean"},"Boolean"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"true or false")),Object(l.b)("h4",{id:"binary"},"Binary"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Blobs of binary data"),Object(l.b)("li",{parentName:"ul"},"e.g. compressed text, encrypted data, images etc"),Object(l.b)("li",{parentName:"ul"},"Only non-empty values"),Object(l.b)("li",{parentName:"ul"},"e.g.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'"QmFzZTYOIGVu..."'))),Object(l.b)("li",{parentName:"ul"},"\uc778\ub371\uc2a4\ub85c \uc0ac\uc6a9\ud55c\ub2e4\uba74 2KB \ubbf8\ub9cc \uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"Hash Key \ub85c \uc0ac\uc6a9\ud55c\ub2e4\uba74 1KB \ubbf8\ub9cc \uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"Sort Hash Key \ub85c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc81c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158\ud0a4\ub85c \uc0ac\uc6a9\ud55c\ub2e4\uba74 ...?")),Object(l.b)("h4",{id:"null"},"Null"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Unknown or undefined state")),Object(l.b)("h3",{id:"set-types"},"Set Types"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Multiple scalar values"),Object(l.b)("li",{parentName:"ul"},"Unordered collection of strings, numbers of binary"),Object(l.b)("li",{parentName:"ul"},"e.g string set, number set and binary set"),Object(l.b)("li",{parentName:"ul"},"Only non-empty values"),Object(l.b)("li",{parentName:"ul"},"No duplicates allowed"),Object(l.b)("li",{parentName:"ul"},"No empty sets allowed"),Object(l.b)("li",{parentName:"ul"},"All values must be of same scalar type")),Object(l.b)("h3",{id:"document-types"},"Document Types"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Complex structure with nested attributes"),Object(l.b)("li",{parentName:"ul"},"e.g list and map"),Object(l.b)("li",{parentName:"ul"},"Nesting up to 32 leveles deep"),Object(l.b)("li",{parentName:"ul"},"Only non-empty values within lists and maps"),Object(l.b)("li",{parentName:"ul"},"Empty lists and maps are allowed")),Object(l.b)("h4",{id:"list"},"List"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ordered collection of values"),Object(l.b)("li",{parentName:"ul"},"Can have multiple data types"),Object(l.b)("li",{parentName:"ul"},"e.g. ",Object(l.b)("inlineCode",{parentName:"li"},'["John", 128.88, "Apples"]'))),Object(l.b)("h4",{id:"maps"},"Maps"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Unordered collection of Key-Value pairs"),Object(l.b)("li",{parentName:"ul"},"Ideal of storing JSON documents"),Object(l.b)("li",{parentName:"ul"},"e.g.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'{\n  name: "John",\n  age: 22,\n  address: {\n    city: "Stamford",\n    state: "Connecticut"\n  }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"DynamoDB \ub294 JSON \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc720\uc800\uc640 \uc0c1\ud638\uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \uc2e4\uc81c\ub85c JSON \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"DynamoDB \uc758 \ub370\uc774\ud130 \ud0c0\uc785\ub4e4\uc740 JSON \uc758 superset \uc785\ub2c8\ub2e4. ")),Object(l.b)("h2",{id:"27-dynamodb-consistency-model"},"27. DynamoDB Consistency Model"),Object(l.b)("h3",{id:"aws-infrastructure"},"AWS Infrastructure"),Object(l.b)("img",{alt:"image",src:"https://user-images.githubusercontent.com/31977543/161783297-34097da0-53aa-4106-b91d-b4b9d43bb026.png",width:"500"}),Object(l.b)("h3",{id:"automatic-synchronous-replication"},"Automatic Synchronous Replication"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/161784019-b886f253-27c7-4fdc-a5f6-766c66d2f754.png",alt:"image"})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ub9cc\uc57d Facility \uac00 Failure/DownTime \uc774 \ubc1c\uc0dd\ud558\uc5ec\ub3c4,  ",Object(l.b)("br",null),"\nDynamoDB \ub294 Consistent Performance \uc640 Scale \ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. ")),Object(l.b)("h3",{id:"dynamodb-read-consistency"},"DynamoDB Read Consistency"),Object(l.b)("h4",{id:"strong-consistency"},"Strong Consistency"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The most up-to-date data"),Object(l.b)("li",{parentName:"ul"},"Must be requested explicitly")),Object(l.b)("h4",{id:"eventual-consistency"},"Eventual Consistency"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"May or may not reflect the latest copy of data",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\uc624\uc9c1, \ub370\uc774\ud130\uac00 \ucd5c\uadfc 2\ucd08\ub098 3\ucd08 \uc774\ub0b4\uc5d0 \uc4f0\uc5ec\uc84c\uc744 \ub54c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."))),Object(l.b)("li",{parentName:"ul"},"Default consistency for all operations (without Strong Consistency)"),Object(l.b)("li",{parentName:"ul"},"50% cheaper than, Strong Consistency")),Object(l.b)("h2",{id:"28-dynamodb-capacity-units"},"28. DynamoDB Capacity Units"),Object(l.b)("h3",{id:"dynamodb-tables-1"},"DynamoDB Tables"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Top-level entities"),Object(l.b)("li",{parentName:"ul"},"No Strict inter-table relationships"),Object(l.b)("li",{parentName:"ul"},"Mandatory primary keys"),Object(l.b)("li",{parentName:"ul"},"Control performance at the table level")),Object(l.b)("p",null,"DynamoDB Table \uc740 \uac01\uac01 Independent \ud558\uae30 \ub54c\ubb38\uc5d0, \ud14c\uc774\ube14\ub9c8\ub2e4 Performance \ub97c \uc81c\uc5b4\ud558\uace0 \ud29c\ub2dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("h3",{id:"throughput-capacity-\ucc98\ub9ac\ub7c9"},"Throughput Capacity \ucc98\ub9ac\ub7c9"),Object(l.b)("p",null,"DynamoDB \ucc98\ub9ac\ub7c9\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 \uac01 \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \ucc98\ub9ac\ub7c9 \uc6a9\ub7c9\uc744 ",Object(l.b)("a",{parentName:"p",href:"https://m.blog.naver.com/design4u74/220288723591"},"\ud504\ub85c\ube44\uc800\ub2dd"),"\ud574\uc57c \ud569\ub2c8\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Scale \uc2dc, \uc131\ub2a5\uc744 \uc608\uce21 \uac00\ub2a5\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4. (Allows for predictable performance at scale)"),Object(l.b)("li",{parentName:"ul"},"Read/Write \ucc98\ub9ac\ub7c9 \uc81c\uc5b4\ub97c \ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"Auto-scaling \uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud558\ub294 ",Object(l.b)("a",{parentName:"li",href:"https://aws.amazon.com/ko/dynamodb/pricing/provisioned/"},"RCUs \uc640 WCUs")," \ub97c \uc815\uc758 \ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"DynamoDB \uac00\uaca9\uc5d0\uc11c \uc8fc\uc694 \uc694\uc778\uc785\ub2c8\ub2e4"),Object(l.b)("li",{parentName:"ul"},"1 Capacity Unit = 1 Request/sec")),Object(l.b)("h3",{id:"rcu"},"RCU"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Read Capacity Units"),Object(l.b)("li",{parentName:"ul"},"1 RCU = 1 strongly consistent table read/sec",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"(data will get passed on to all the replicas as soon as a write request comes to one of the replicas of the database.)"),Object(l.b)("li",{parentName:"ul"},"(get delayed)"))),Object(l.b)("li",{parentName:"ul"},"1 RCU = 2 eventually consistency table reads/sec",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"(Eventual consistency offers low latency at the risk of returning stale data)"))),Object(l.b)("li",{parentName:"ul"},"In blocks of 4KB")),Object(l.b)("h3",{id:"wcu"},"WCU"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Write capacity unit"),Object(l.b)("li",{parentName:"ul"},"1 WCU = 1 table write/sec"),Object(l.b)("li",{parentName:"ul"},"In blocks of 1KB")),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Average Item Size: 10KB"),Object(l.b)("li",{parentName:"ul"},"Provisioned Capacity: 10 RCUs and 10 WCUs"),Object(l.b)("li",{parentName:"ul"},"Read throughput with strong consistency = 4KB x 10 = 40KB/sec"),Object(l.b)("li",{parentName:"ul"},"Read throughput = 2 (4KB x 10) = 80KB/sec"),Object(l.b)("li",{parentName:"ul"},"Write throughput = 1KB x 10 = 10KB/sec"),Object(l.b)("li",{parentName:"ul"},"RCUs to read 10KB of data per second with string consistency = 10KB/4KB = 2.5 => rounded up => 3 RCUs"),Object(l.b)("li",{parentName:"ul"},"RCUs to read 10KB of data per second = 3 RCUs x 0.5 = 1.5 RCUs"),Object(l.b)("li",{parentName:"ul"},"WCUs to write 10KB of data per second = 10KB/1KB = 10 WCUs"),Object(l.b)("li",{parentName:"ul"},"WCUs to write 1.5KB of data per second = 1.5KB/1KB = 1.5 => rounded up -> 2 WCUs")),Object(l.b)("h3",{id:"burst-capacity"},"Burst Capacity"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ucd94\uac00\uc801\uc778 Bursts or Spikes Capacity \ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud504\ub85c\ube44\uc800\ub2dd\ub41c \uc6a9\ub7c9\uc744 \ucd08\uacfc\ud558\uc5ec \uacc4\uc18d\ud574\uc11c \uc99d\uac00\ud558\ub294 \uacbd\uc6b0 DynamoDB \ub294 \uc694\uccad \uc81c\ud55c\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"DynamoDB\ub294 \uc784\uc2dc Spikes \ubc0f Bursts \ub3d9\uc548, \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ucd5c\ub300 5\ubd84\uc758 \ubbf8\uc0ac\uc6a9 read/write capacity \ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4. ")),Object(l.b)("h3",{id:"scaling"},"Scaling"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Scaling \uc740 \ube44\ub3d9\uae30\uc801\uc73c\ub85c, Downtime \uc5c6\uc774, \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc77c\uc5b4\ub0a9\ub2c8\ub2e4.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Scaling Up: As and when needed"),Object(l.b)("li",{parentName:"ul"},"Scaling Down: Up to 4 times in a day"))),Object(l.b)("li",{parentName:"ul"},"Capacity \ubcc0\uacbd\uc740 \ud14c\uc774\ube14\uc758 \ud30c\ud2f0\uc158 \uc218\uc640\ub3c4 \uad00\ub828\uc774 \uc788\uc73c\uba70 \ucd08\uae30 Capacity \ub97c \uc120\ud0dd\ud558\uace0 \ubcc0\uacbd\ud558\uae30 \uc804\uc5d0 \uc5fc\ub450\uc5d0 \ub450\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"1 partition supports up to 1000 WCUs or 3000 RCUs ")),Object(l.b)("h2",{id:"29-dynamodb-on-demand-capacity"},"29. DynamoDB On-Demand Capacity"),Object(l.b)("p",null,"AWS \ub294 \ud604\uc7ac  ",Object(l.b)("strong",{parentName:"p"},"On-Demand Capacity mode for DynamoDB"),". \ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. ",Object(l.b)("br",null),"\n\uc55e\uc120 \uac15\uc758\uc5d0\uc11c \ub2e4\ub8ec ",Object(l.b)("strong",{parentName:"p"},"provisioned capacity mode")," \uc5d0\uc11c \ucd94\uac00\uc801\uc778 \uac83\uc785\ub2c8\ub2e4. "),Object(l.b)("h3",{id:"on-demand-capacity-mode"},"On-demand capacity mode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"DynamoDB\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud14c\uc774\ube14\uc5d0\uc11c \uc218\ud589\ud558\ub294 \ub370\uc774\ud130 \uc77d\uae30 \ubc0f \uc4f0\uae30\uc5d0 \ub300\ud574 \uc694\uae08\uc744 \ubd80\uacfc\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"DynamoDB\ub294 \uc6cc\ud06c\ub85c\ub4dc\uac00 \uc99d\uac00\ud558\uac70\ub098 \uac10\uc18c\ud560 \ub54c \uc989\uc2dc \uc218\uc6a9\ud558\ubbc0\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc218\ud589\ud560 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\ub294 \uc77d\uae30 \ubc0f \uc4f0\uae30 \ucc98\ub9ac\ub7c9\uc744 \uc9c0\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),Object(l.b)("h3",{id:"best-if-you"},"Best if you"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc791\uc5c5\ubd80\ud558\ub97c \uc54c\uc218 \uc5c6\ub294 \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud560 \ub54c "),Object(l.b)("li",{parentName:"ul"},"\ud2b8\ub798\ud53d\uc744 \uc608\uce21\ud560 \uc218 \uc5c6\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 "),Object(l.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud55c \ub9cc\ud07c\ub9cc \uc9c0\ubd88\ud558\ub294 \uac04\ud3b8\ud568\uc744 \uc120\ud638\ud560 \ub54c ")),Object(l.b)("h2",{id:"30-basics-of-dynamodb-partitions"},"30. Basics of DynamoDB Partitions"),Object(l.b)("p",null,"DynamoDB \ud14c\uc774\ube14\uc744 \ud6a8\uc728\uc801\uc774\uace0 \ube44\uc6a9\ud6a8\uacfc\uc801\uc73c\ub85c \uc124\uacc4\ud558\ub824\uba74, DynamoDB \uc758 \ub0b4\ubd80\ub3d9\uc791\uc744 \uc774\ud574\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("br",null)," Partition \uc758 \uc774\ud574\ub294 \uc911\uc694\ud569\ub2c8\ub2e4.",Object(l.b)("h3",{id:"dynamodb-partitions-overview"},"DynamoDB Partitions Overview"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Store DynamoDB table Data "),Object(l.b)("li",{parentName:"ul"},"A table have multiple partitions"),Object(l.b)("li",{parentName:"ul"},"Number of table partitions depend on its size and provisioned capacity"),Object(l.b)("li",{parentName:"ul"},"Managed internally by DynamoDB"),Object(l.b)("li",{parentName:"ul"},"1 partition = upto 10GB of data"),Object(l.b)("li",{parentName:"ul"},"1 partition = upto 1000 WCUs or 3000RCUs"),Object(l.b)("li",{parentName:"ul"},"additional partition happens in background and without downtime. ")),Object(l.b)("h3",{id:"partition-behavior---example"},"Partition Behavior - Example"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Provisioned Capacity: 500 RCUs and 500 WCUs"),Object(l.b)("li",{parentName:"ul"},"Number of Partitions,",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"P",Object(l.b)("sub",null,"T")," = (500 RCUs/3000 + 500 WCUs/1000) = 0.67 => rounded up => 1 partition"))),Object(l.b)("li",{parentName:"ul"},"New Capacity: 1000 RCUs and 1000 WCUs ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"P",Object(l.b)("sub",null,"T")," = (1000 RCUs/3000 + 1000 WCUs/1000) = 1.33 => rounded up => 2 partition")))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/162613947-c42fc533-c8a1-4210-8cf4-936a6a3646f6.png",alt:"image"})),Object(l.b)("h2",{id:"31-basics-of-dynamodb-indexes"},"31. Basics of DynamoDB Indexes"),Object(l.b)("p",null,"DynamoDB \uac00 \ub370\uc774\ud130\ub97c \ud30c\ud2f0\uc158\uc5d0 \uc800\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \ub2e4\ub8f9\ub2c8\ub2e4. "),Object(l.b)("h3",{id:"table-index"},"Table Index"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Mandatory Primary Key - Either simple or composite"),Object(l.b)("li",{parentName:"ul"},"Simple Primary Key => Only Partition or Hash Key"),Object(l.b)("li",{parentName:"ul"},"Composite Primary Key => Partition Key + Sort or Range Key"),Object(l.b)("li",{parentName:"ul"},"Partition or Hash Key decided the target partition.")),Object(l.b)("p",null,"\uc778\ub371\uc2a4\ub294 \ucffc\ub9ac\ub97c \ub9e4\uc6b0 \ube60\ub974\uac8c \ud574\uc90d\ub2c8\ub2e4.\nDynamoDB \ub294 Primary key \uae30\ubc18\uc73c\ub85c, \uc778\ub371\uc2a4\ub97c \ub0b4\ubd80\uc801\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4. "),Object(l.b)("h3",{id:"hash-algorithm--hash-function"},"Hash Algorithm | Hash Function"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/162616726-e0b7fb90-e72d-4bdf-a8e7-090d657e3210.png",alt:"image"})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158 \ud0a4\uc758 Hash \ub97c \uacc4\uc0b0\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158 \ud0a4\uc758 \uac12\uc740 Item \uc774 \uc800\uc7a5\ub418\uc5b4\uc57c \ud558\ub294 \ud30c\ud2f0\uc158\uc744 \uacb0\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"sort key \uac12\uc5d0 \ub530\ub77c \uc815\ub82c\ub41c \ub3d9\uc77c\ud55c \ud30c\ud2f0\uc158 \ud0a4 \uac12\uc744 \uac00\uc9c4 \ubaa8\ub4e0 \ud56d\ubaa9\ub4e4\uc744 \ubb3c\ub9ac\uc801\uc73c\ub85c \uc11c\ub85c \uac00\uae5d\uac8c \uc800\uc7a5\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158 \ud0a4\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 \ud14c\uc774\ube14 \ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \ud56d\ubaa9\uc744 \uc77d\uac70\ub098 \ud14c\uc774\ube14\uc5d0\uc11c \ud56d\ubaa9\uc744 \ucffc\ub9ac\ud560 \ub54c\ub9c8\ub2e4 \ud30c\ud2f0\uc158 \ud0a4\ub97c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uadf8\ub7f0 \ub2e4\uc74c dynamoDB\ub294 \ud30c\ud2f0\uc158 \ud0a4\uc758 \ud574\uc2dc\ub97c \uacc4\uc0b0\ud558\uc5ec \ud56d\ubaa9\uc758 \uc704\uce58\ub97c \uc2dd\ubcc4\ud55c \ub2e4\uc74c \uc694\uccad\ub41c \ub370\uc774\ud130\ub97c \uc6b0\ub9ac\uc5d0\uac8c \ubc18\ud658\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ubb3c\ub860 \ud30c\ud2f0\uc158 \ud0a4\ub97c \uc9c0\uc815\ud560 \ud544\uc694\uac00 \uc5c6\ub294 \uc2a4\uce94 \uac00\ub2a5\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Scan operation \uc758 \uc0ac\uc6a9\uc774 \uc815\ub9d0\ub85c \ud544\uc694\ud560 \uacbd\uc6b0\ub9cc \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"Scan operation \uc740 \uac00\ub2a5\ud55c \uc0ac\uc6a9\uc744 \uc548\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. ")))),Object(l.b)("h2",{id:"32-local-secondary-indexes-and-global-secondary-indexes"},"32. Local Secondary Indexes and Global Secondary Indexes"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/162619459-67f8ffb7-d236-4c5a-a30d-d8814fc2abf0.png",alt:"image"})),Object(l.b)("h3",{id:"local-secondary-index"},"Local Secondary Index"),Object(l.b)("p",null,"\ubd80\uc11c\uac00 IT \uc774\uace0, DoJ \ub97c \uae30\uc900\uc73c\ub85c sort \ub97c \ud558\ub294 \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5b4\ub5a1\ud560\uae4c\uc694?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"IT \ubd80\uc11c\uc778 \ubaa8\ub4e0 \uc9c1\uc6d0\uc744 query \ud574\uc57c \ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\ube44\ud6a8\uc728 \uc801\uc778 \ubc29\ubc95 \uc785\ub2c8\ub2e4. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/162619565-21d60094-2198-45d7-8012-2a495e7980ca.png",alt:"image"})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Doj \uc5d0 sort key \ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ")),Object(l.b)("p",null,"EmpID \uac00 Primary sort key \uc77c \ub54c\uc5d0\uc640 \ube44\uad50\ud558\uc790\uba74,"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Dept \uac00 Primary Partition Key \uc778 \uac83\uc740 \ub3d9\uc77c\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uc774 \ub54c, DoJ \uc5d0\uac8c Secondary Sort Key \ub97c \ubd80\uc5ec\ud558\uac8c \ub418\uc5c8\ub294\ub370\uc694, \uc774\uac83\uc744 Local Secondary Index \ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Local Secondary Index")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"Local Secondary Index \ub294 \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud560 \ub54c \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud14c\uc774\ube14\ub2f9 5\uac1c\uae4c\uc9c0 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc758 \ud504\ub85c\ube44\uc804\ub41c RCU WCU \ub294 Local Secondary Index \uc640 \uacf5\uc720 \ub429\ub2c8\ub2e4.   ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Local Secondary Index \ub97c \uc0ac\uc6a9\ud558\uc5ec Eventually/Strongly consistency \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ")))))),Object(l.b)("h3",{id:"global-secondary-index"},"Global Secondary Index"),Object(l.b)("p",null,"\uc608\uc81c\uc5d0\uc11c, Location \uc774 NYC \uc778 \uc9c1\uc6d0\uc744 DoJ \uc815\ub82c\ud55c \uacb0\uacfc\ub97c \uc5bb\uace0\uc790 \ud569\ub2c8\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"partition key \uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\ub294 \ub370\uc774\ud130 \uc785\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\ucd94\uac00\uc801\uc778 Local Secondary Index \ub97c \uc815\uc758\ud560 \uc218\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4.  ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/162620504-391f83bb-0429-40a0-a266-9e0a6b5f1ef0.png",alt:"image"})),Object(l.b)("p",null,"Location \uc744 \ud30c\ud2f0\uc158\ud0a4\ub85c \uc9c0\uc815\ud558\uace0, DoJ \ub97c sort key \ub85c \uc815\uc758\ud588\uc2b5\ub2c8\ub2e4. "),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Global Secondary Index")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\uc5b8\uc81c\ub4e0 \uc0dd\uc131 \uac00\ub2a5  "),Object(l.b)("li",{parentName:"ul"},"Global Secondary Index \ub9cc\uc758 \ud30c\ud2f0\uc158\uc5d0 Global Secondary Index \ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"Global Secondary Index \ub9cc\uc758 Throughput Capacity \uc124\uc815\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table \uacfc \uacf5\uc720\ub418\uc9c0 \uc54a\uc740, RCU WCU \ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "))),Object(l.b)("li",{parentName:"ul"},"Eventually Consistent Reads \ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"Strong Consistent Reads \ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\uc911\ubcf5\ub41c \uc544\uc774\ud15c\uc774 \uc874\uc7ac\ud560 \uc218 \uc788\ub2e4. "),Object(l.b)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc5d0\uc11c item \uc744 \ubc18\ud658\ud560 \ub54c, Global secondary index \ub294 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4. (?)")))),Object(l.b)("h2",{id:"33-interacting-with-dynamodb"},"33. Interacting with DynamoDB"),Object(l.b)("h3",{id:"different-ways-to-work-with-dynamodb"},"Different Ways to work with DynamoDB"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AWS Management Console"),Object(l.b)("li",{parentName:"ul"},"AWS CLI"),Object(l.b)("li",{parentName:"ul"},"AWS DSK")),Object(l.b)("h2",{id:"refs"},"Refs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://hackernoon.com/eventual-vs-strong-consistency-in-distributed-databases-282fdad37cf7"},"strongly consistent vs eventually consistent")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.dynamodbguide.com/scans/"},"scan"))))}o.isMDXComponent=!0},481:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),u=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=u(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),s=u(a),p=n,d=s["".concat(b,".").concat(p)]||s[p]||m[p]||i;return a?l.a.createElement(d,c(c({ref:t},o),{},{components:a})):l.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=p;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);