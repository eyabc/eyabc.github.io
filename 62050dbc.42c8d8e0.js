(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{221:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var l=a(3),n=(a(0),a(441)),b=a(448),r=a(449);const c={title:"4. \uc0ac\ub840 \uc774\ud574\ub97c \uc704\ud55c \ud544\uc218\uc0ac\ud56d"},s={unversionedId:"sql/\uc624\ub77c\ud074_\uc804\ubb38\uac00\ub85c_\uac00\ub294_\uc9c0\ub984\uae38/4-\uc0ac\ub840_\uc774\ud574\ub97c_\uc704\ud55c_\ud544\uc218\uc0ac\ud56d",id:"sql/\uc624\ub77c\ud074_\uc804\ubb38\uac00\ub85c_\uac00\ub294_\uc9c0\ub984\uae38/4-\uc0ac\ub840_\uc774\ud574\ub97c_\uc704\ud55c_\ud544\uc218\uc0ac\ud56d",isDocsHomePage:!1,title:"4. \uc0ac\ub840 \uc774\ud574\ub97c \uc704\ud55c \ud544\uc218\uc0ac\ud56d",description:"ROWNUM\uacfc ROWID",source:"@site/docs/sql/\uc624\ub77c\ud074_\uc804\ubb38\uac00\ub85c_\uac00\ub294_\uc9c0\ub984\uae38/4-\uc0ac\ub840_\uc774\ud574\ub97c_\uc704\ud55c_\ud544\uc218\uc0ac\ud56d.mdx",slug:"/sql/\uc624\ub77c\ud074_\uc804\ubb38\uac00\ub85c_\uac00\ub294_\uc9c0\ub984\uae38/4-\uc0ac\ub840_\uc774\ud574\ub97c_\uc704\ud55c_\ud544\uc218\uc0ac\ud56d",permalink:"/docs/sql/\uc624\ub77c\ud074_\uc804\ubb38\uac00\ub85c_\uac00\ub294_\uc9c0\ub984\uae38/4-\uc0ac\ub840_\uc774\ud574\ub97c_\uc704\ud55c_\ud544\uc218\uc0ac\ud56d",version:"current",sidebar:"sql",previous:{title:"3. \uc0ac\ub840 \uc774\ud574\ub97c \uc704\ud55c \uae30\ubcf8\uc0ac\ud56d",permalink:"/docs/sql/\uc624\ub77c\ud074_\uc804\ubb38\uac00\ub85c_\uac00\ub294_\uc9c0\ub984\uae38/3-\uc0ac\ub840_\uc774\ud574\ub97c_\uc704\ud55c_\uae30\ubcf8\uc0ac\ud56d"}},u=[{value:"ROWNUM\uacfc ROWID",id:"rownum\uacfc-rowid",children:[{value:"ROWNUM",id:"rownum",children:[]},{value:"ROWID",id:"rowid",children:[]}]},{value:"DECODE",id:"decode",children:[{value:"\ub2e8\uc21c \ub4f1\ud638 \ube44\uad50 DECODE(A, B, &#39;T&#39;)",id:"\ub2e8\uc21c-\ub4f1\ud638-\ube44\uad50-decodea-b-t",children:[]},{value:"\ub4f1\ud638\ube44\uad50 + ELSE DECODE(A, B, &#39;T&#39;, &#39;F&#39;)",id:"\ub4f1\ud638\ube44\uad50--else-decodea-b-t-f",children:[]},{value:"ELSEIF \ub85c \ubd84\uae30\ub418\ub294 \ub4f1\ud638 \ube44\uad50 DECODE(A, B, &#39;T&#39;, C, &#39;F&#39;, &#39;X&#39;)",id:"elseif-\ub85c-\ubd84\uae30\ub418\ub294-\ub4f1\ud638-\ube44\uad50-decodea-b-t-c-f-x",children:[]},{value:"\ubd80\ub4f1\ud638\ube44\uad50",id:"\ubd80\ub4f1\ud638\ube44\uad50",children:[]},{value:"OR \ub610\ub294 IN \ube44\uad50",id:"or-\ub610\ub294-in-\ube44\uad50",children:[]},{value:"AND \ube44\uad50",id:"and-\ube44\uad50",children:[]}]}],O={toc:u};function p({components:e,...t}){return Object(n.b)("wrapper",Object(l.a)({},O,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"rownum\uacfc-rowid"},"ROWNUM\uacfc ROWID"),Object(n.b)("h3",{id:"rownum"},"ROWNUM"),Object(n.b)("p",null,"WHERE(WHERE \uc808\uc774 \uc5c6\uc73c\uba74 FROM)\uc808\uc758 \uc758\ud574 \ucd94\ucd9c\ub41c DATA SET \uc5d0 ROW \ub2e8\uc704\ub85c \ubd99\ub294 \uc21c\ubc88"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc790\ub8cc\uc758 \uc21c\uc11c\ub97c \ub2e4\ub978 \ubaa9\uc801\uc73c\ub85c \uc774\uc6a9\ud558\uace0\uc790 \ud560 \ub54c \uc720\uc6a9")),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"{1}","{1}":!0},"SELECT ROWNUM,\n       EMP_ID, EMP_NAME\nFROM TEMP\nWHERE EMP_ID > 0\nAND LEV = '\uc218\uc2b5';\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ROWNUM |  EMP_ID | EMP_NAME\n1       20000101    \uc774\ud0dc\ubc31\n2       20000102    \uae40\uc124\uc545\n3       20000119    \uc7a5\uae08\uac15\n4       20000203    \ucd5c\uc624\ub300\n5       20000210    \ub098\ud55c\ub77c\n6       20000305    \uc815\ubd81\uc545\n7       20000308    \uac15\uc6d4\uc545\n8       20000334    \ubc15\uc9c0\ub9ac\n9       20000407    \uc724\uc8fc\uc655\n10      20006106    \uc720\ub3c4\ubd09\n")))),Object(n.b)("h4",{id:"rownum-\uc744-\uc870\uac74\uc73c\ub85c-\uc0ac\uc6a9\ud560-\ub54c"},"ROWNUM \uc744 \uc870\uac74\uc73c\ub85c \uc0ac\uc6a9\ud560 \ub54c"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ROWNUM '=', '>', '>='")," \uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ROWNUM <, <="),"  \ub97c \uc774\uc6a9"),Object(n.b)("li",{parentName:"ul"},"\uc608\uc678\uc801\uc73c\ub85c 1 \uacfc \ube44\uad50\ud560 \ub54c\ub294 ",Object(n.b)("inlineCode",{parentName:"li"},"=")," \ub85c \ube44\uad50 \uac00\ub2a5"),Object(n.b)("li",{parentName:"ul"},"\ud2b9\uc815 \ud589\ub9cc \uc870\ud68c, \ud2b9\uc815 \ud589 \ubcf4\ub2e4 \ud070 \ud589\uc744 \uc870\ud68c\ud558\ub294 \uac83\uc740 ",Object(n.b)("strong",{parentName:"li"},"Inline View")," \uc0ac\uc6a9")),Object(n.b)(b.a,{defaultValue:"ROWNUM =, >, >=",values:[{label:"ROWNUM =, >, >= \uc0ac\uc6a9",value:"ROWNUM =, >, >="},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"ROWNUM =, >, >=",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"{5}","{5}":!0},"SELECT ROWNUM, EMP_ID, EMP_NAME\nFROM TEMP\nWHERE EMP_ID > 0\nAND LEV = '\uc218\uc2b5'\nAND ROWNUM >= 5;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ROWNUM |  EMP_ID | EMP_NAME\n")))),Object(n.b)(b.a,{defaultValue:"ROWNUM <, <=",values:[{label:"ROWNUM <, <=",value:"ROWNUM <, <="},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"ROWNUM <, <=",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"{5}","{5}":!0},"SELECT ROWNUM, EMP_ID, EMP_NAME\nFROM TEMP\nWHERE EMP_ID > 0\nAND LEV = '\uc218\uc2b5'\nAND ROWNUM < 5;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ROWNUM |  EMP_ID | EMP_NAME\n1       20000101    \uc774\ud0dc\ubc31\n2       20000102    \uae40\uc124\uc545\n3       20000119    \uc7a5\uae08\uac15\n4       20000203    \ucd5c\uc624\ub300\n")))),Object(n.b)("h4",{id:"select-rownum--order-by"},"SELECT ROWNUM ... ORDER BY"),Object(n.b)("p",null,"\uc870\uac74 \uc808\uc744 \ub9cc\uc871\uc2dc\ud0a8 \ud589\ub4e4\uc5d0 ROWNUM \uc774 \ubd99\uc740 \ud6c4 ORDER BY \uac00 \uc774\ub8e8\uc5b4 \uc9c4\ub2e4."),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"{6}","{6}":!0},"SELECT ROWNUM, EMP_ID, EMP_NAME\nFROM TEMP\nWHERE EMP_ID > 0\nAND LEV = '\uc218\uc2b5'\nAND ROWNUM < 5\nORDER BY EMP_NAME;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ROWNUM |  EMP_ID | EMP_NAME\n2       20000102    \uae40\uc124\uc545\n4       20000334    \ubc15\uc9c0\ub9ac\n1       20000101    \uc774\ud0dc\ubc31\n3       20000203    \ucd5c\uc624\ub300\n")))),Object(n.b)("h4",{id:"select-\uacb0\uacfc\ub97c-3\uac1c\ud589-\uc529-\ubb36\uc5b4-\ud558\ub098\uc758-\ubc88\ud638\ub97c-\ubd80\uc5ec\ud558\uae30"},"SELECT \uacb0\uacfc\ub97c 3\uac1c\ud589 \uc529 \ubb36\uc5b4 \ud558\ub098\uc758 \ubc88\ud638\ub97c \ubd80\uc5ec\ud558\uae30"),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"SELECT  ROWNUM,\n        CEIL(ROWNUM/3),\n        EMP_ID, EMP_NAME\nFROM TEMP\nWHERE  EMP_ID > 0;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script {2,3,4,8,9,10,14,15,16,20,21}",script:!0,"{2,3,4,8,9,10,14,15,16,20,21}":!0},"ROWNUM | CEIL(ROWNUM/3) |  EMP_ID  | EMP_NAME\n1         1               19930331  \uc815\ub3c4\ub839\n2         1               19930402  \uac15\uac10\ucc2c\n3         1               19950303  \uc774\uc21c\uc2e0\n4         2               19960101  \ud64d\uae38\ub3d9\n5         2               19960212  \ubc30\ubc45\uc774\n6         2               19960303  \uc124\uae4c\uce58\n7         3               19966102  \uc9c0\ubb38\ub355\n8         3               19970101  \uae40\uae38\ub3d9\n9         3               19970112  \uc5f0\ud765\ubd80\n10      4                 19970201  \ubc15\ubb38\uc218\n11      4                 20000101  \uc774\ud0dc\ubc31\n12      4                 20000102  \uae40\uc124\uc545\n13      5                 20000119  \uc7a5\uae08\uac15\n14      5                 20000203  \ucd5c\uc624\ub300\n15      5                 20000210  \ub098\ud55c\ub77c\n16      6                 20000305  \uc815\ubd81\uc545\n17      6                 20000308  \uac15\uc6d4\uc545\n18      6                 20000334  \ubc15\uc9c0\ub9ac\n19      7                 20000407  \uc724\uc8fc\uc655\n20      7                 20006106  \uc720\ub3c4\ubd09\n")))),Object(n.b)("h3",{id:"rowid"},"ROWID"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"DATABASE \ub0b4\uc758 \ubaa8\ub4e0 ROW \uac00 \uac00\uc9c0\ub294 \uc720\uc77c\ud55c \uc2dd\ubcc4\uc790")),Object(n.b)("h4",{id:"oracle7-8-\uc758-rowid-\uad6c\uc870\ucc28\uc774"},"ORACLE7, 8 \uc758 ROWID \uad6c\uc870\ucc28\uc774"),Object(n.b)("p",null,"Oracle7"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"FILE \ubc88\ud638, BLOCK \ubc88\ud638, BLOCK \ub0b4 ROW \ubc88\ud638\uc758 3\uac00\uc9c0 \uc815\ubcf4\ub85c \uad6c\uc131")),Object(n.b)("p",null,"Oracle8"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Oracle7 \uc758 \uc815\ubcf4\uc5d0 \uac1d\uccb4 \uace0\uc720\ubc88\ud638\uae4c\uc9c0\ub97c \ud3ec\ud568\ud558\ub294 4\uac00\uc9c0 \uc815\ubcf4\ub85c \uad6c\uc131")),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"SELECT ROWNUM,\n       ROWID,\n       EMP_ID, EMP_NAME\nFROM TEMP\nWHERE  EMP_ID > 0;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script {}",script:!0,"{}":!0},"ROWNUM |     ROWID      |  EMP_ID | EMP_NAME\n1      AAAE5IAABAAAK/pAAD   19930331    \uc815\ub3c4\ub839\n2      AAAE5IAABAAAK/pAAG   19930402    \uac15\uac10\ucc2c\n3      AAAE5IAABAAAK/pAAE   19950303    \uc774\uc21c\uc2e0\n4      AAAE5IAABAAAK/pAAB   19960101    \ud64d\uae38\ub3d9\n5      AAAE5IAABAAAK/pAAJ   19960212    \ubc30\ubc45\uc774\n6      AAAE5IAABAAAK/pAAH   19960303    \uc124\uae4c\uce58\n7      AAAE5IAABAAAK/pAAF   19966102    \uc9c0\ubb38\ub355\n...\n")))),Object(n.b)("p",null,"ROWID \uc758 \ud2b9\uc9d5"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ROWID \ub294 SELECT \ud560 \uc218 \uc788\uc9c0\ub9cc, UPDATE, INSERT \ub294 \ubd88\uac00\ub2a5."),Object(n.b)("li",{parentName:"ul"},"ROWID \ub97c \ud1b5\ud55c ",Object(n.b)("strong",{parentName:"li"},"ROW ACCESS \uac00 \ub2e4\ub978 \uc5b4\ub5a4 \ubc29\uc2dd\ubcf4\ub2e4 \ube60\ub974\ub2e4."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\ucc3e\uace0\uc790 \ud558\ub294 ROWID \ub97c \uc54c\uace0 \uc788\ub2e4\uba74, \uc870\uac74\uc5d0 ROWID \ub97c \uc8fc\uc5b4\uc8fc\uace0 \uac80\uc0c9\ud558\ub294 \ubc29\ubc95\uc744 \ucd5c\uc6b0\uc120\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uc790.")))),Object(n.b)("h2",{id:"decode"},"DECODE"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IF")," \ubb38\uc744 SQL \ubb38\uc7a5 \ub610\ub294 PL/SQL \uc548\uc73c\ub85c \ub04c\uc5b4\ub4e4\uc5ec \uc0ac\uc6a9\ud558\uae30 \uc704\ud558\uc5ec \ub9cc\ub4e4\uc5b4\uc9c4 ",Object(n.b)("strong",{parentName:"p"},"\uc624\ub77c\ud074 \ud568\uc218")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"FROM \uc808 \ube7c\uace0 \uc5b4\ub514\uc11c\ub098 \uc0ac\uc6a9 \uac00\ub2a5",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"SELECT \uc2dc \ud14c\uc774\ube14\uc744 \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc74c")))),Object(n.b)("h3",{id:"\ub2e8\uc21c-\ub4f1\ud638-\ube44\uad50-decodea-b-t"},"\ub2e8\uc21c \ub4f1\ud638 \ube44\uad50 DECODE(A, B, 'T')"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"IF  A = B   THEN\n    RETURN  'T';\nEND IF;\n")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"A != B")," \uc774\uba74 \uacb0\uacfc\ub294 ",Object(n.b)("inlineCode",{parentName:"p"},"NULL")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"DECODE(A, B, 'T', NULL)"))),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"\uc8fc\ub2f9 \uac15\uc758 \uc2dc\uac04\uacfc \ud559\uc810\uc774 \uac19\uc73c\uba74 '\uc77c\ubc18' \uc744 \ud45c\uc2dc\ud558\uae30\" {2}",title:'"\uc8fc\ub2f9',"\uac15\uc758":!0,"\uc2dc\uac04\uacfc":!0,"\ud559\uc810\uc774":!0,"\uac19\uc73c\uba74":!0,"'\uc77c\ubc18'":!0,"\uc744":!0,'\ud45c\uc2dc\ud558\uae30"':!0,"{2}":!0},"SELECT LEC_ID,\n       DECODE(LEC_TIME, LEC_POINT, '\uc77c\ubc18')\nFROM   LECTURE;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script title=\"\uc8fc\ub2f9 \uac15\uc758 \uc2dc\uac04\uacfc \ud559\uc810\uc774 \uac19\uc73c\uba74 '\uc77c\ubc18' \uc744 \ud45c\uc2dc\ud558\uae30\" {}",script:!0,title:'"\uc8fc\ub2f9',"\uac15\uc758":!0,"\uc2dc\uac04\uacfc":!0,"\ud559\uc810\uc774":!0,"\uac19\uc73c\uba74":!0,"'\uc77c\ubc18'":!0,"\uc744":!0,'\ud45c\uc2dc\ud558\uae30"':!0,"{}":!0},"LEC_ID | DECODE(LEC_TIME, LEC_POINT, '\uc77c\ubc18')\nL0001   \uc77c\ubc18\nL0002\nL0003\nL0004   \uc77c\ubc18\nL0005\n")))),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:'title="\uc8fc\ub2f9 \uac15\uc758 \uc2dc\uac04\uacfc \ud559\uc810\uc774 \uac19\uc740 \uac15\uc758\uc758 \uc22b\uc790 \ucd9c\ub825" {1}',title:'"\uc8fc\ub2f9',"\uac15\uc758":!0,"\uc2dc\uac04\uacfc":!0,"\ud559\uc810\uc774":!0,"\uac19\uc740":!0,"\uac15\uc758\uc758":!0,"\uc22b\uc790":!0,'\ucd9c\ub825"':!0,"{1}":!0},"SELECT  COUNT(DECODE(LEC_TIME, LEC_POINT, 1))\nFROM    LECTURE;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\uc8fc\ub2f9 \uac15\uc758 \uc2dc\uac04\uacfc \ud559\uc810\uc774 \uac19\uc740 \uac15\uc758\uc758 \uc22b\uc790 \ucd9c\ub825" {}',script:!0,title:'"\uc8fc\ub2f9',"\uac15\uc758":!0,"\uc2dc\uac04\uacfc":!0,"\ud559\uc810\uc774":!0,"\uac19\uc740":!0,"\uac15\uc758\uc758":!0,"\uc22b\uc790":!0,'\ucd9c\ub825"':!0,"{}":!0},"COUNT(DECODE(LEC_TIME, LEC_POINT, 1))\n2\n")))),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"\uc8fc\ub2f9 \uac15\uc758 \uc2dc\uac04\uacfc \ud559\uc810\uc774 \uac19\uc73c\uba74 '\uc77c\ubc18'\uc744 \ub9ac\ud134\ud558\uace0 \uc815\ub82c\ud558\uae30\" {2,4}",title:'"\uc8fc\ub2f9',"\uac15\uc758":!0,"\uc2dc\uac04\uacfc":!0,"\ud559\uc810\uc774":!0,"\uac19\uc73c\uba74":!0,"'\uc77c\ubc18'\uc744":!0,"\ub9ac\ud134\ud558\uace0":!0,'\uc815\ub82c\ud558\uae30"':!0,"{2,4}":!0},"SELECT  LEC_ID,\n        DECODE(LEC_TIME, LEC_POINT, '\uc77c\ubc18')\nFROM    LECTURE\nORDER BY DECODE(LEC_TIME, LEC_POINT, '\uc77c\ubc18')\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script title=\"\uc8fc\ub2f9 \uac15\uc758 \uc2dc\uac04\uacfc \ud559\uc810\uc774 \uac19\uc73c\uba74 '\uc77c\ubc18'\uc744 \ub9ac\ud134\ud558\uace0 \uc815\ub82c\ud558\uae30\"",script:!0,title:'"\uc8fc\ub2f9',"\uac15\uc758":!0,"\uc2dc\uac04\uacfc":!0,"\ud559\uc810\uc774":!0,"\uac19\uc73c\uba74":!0,"'\uc77c\ubc18'\uc744":!0,"\ub9ac\ud134\ud558\uace0":!0,'\uc815\ub82c\ud558\uae30"':!0},"LEC_ID | DECODE(LEC_TIME, LEC_POINT, '\uc77c\ubc18')\nL0004   \uc77c\ubc18\nL0001   \uc77c\ubc18\nL0005\nL0002\nL0003\n")))),Object(n.b)("h3",{id:"\ub4f1\ud638\ube44\uad50--else-decodea-b-t-f"},"\ub4f1\ud638\ube44\uad50 + ELSE DECODE(A, B, 'T', 'F')"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"IF A = B THEN\n  RETURN 'T';\nELSE\n  RETURN 'F';\nEND IF;\n")),Object(n.b)("h3",{id:"elseif-\ub85c-\ubd84\uae30\ub418\ub294-\ub4f1\ud638-\ube44\uad50-decodea-b-t-c-f-x"},"ELSEIF \ub85c \ubd84\uae30\ub418\ub294 \ub4f1\ud638 \ube44\uad50 DECODE(A, B, 'T', C, 'F', 'X')"),Object(n.b)("p",null,"ELSE \uc758 \uc218\ub294 \uacc4\uc18d \uc99d\uac00\uac00\ub2a5"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"A=B")," \uc774\uba74 'T'"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"A=C")," \uc774\uba74 'F'"),Object(n.b)("li",{parentName:"ul"},"\uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 'X'")),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("p",null,"  \uc6d4\uc694\uc77c\uc5d4 \ud574\ub2f9\uc77c\uc790\uc5d0 01\uc744 \ubd99\uc5ec 4\uc790\ub9ac \uc554\ud638\ub97c \ub9cc\ub4e4\uace0, \ud654\uc694\uc77c\uc5d4 11, \uc218\uc694\uc77c\uc5d4 ...\n\uc554\ud638\ub97c SELECT \ud558\ub294 SQL \ub9cc\ub4e4\uae30"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:'title="\uc694\uc77c\ub9c8\ub2e4 LOGIN \uc554\ud638\ub97c \uc790\ub3d9\uc73c\ub85c \ubc14\uafd4\uc8fc\ub294 \ud504\ub85c\uadf8\ub7a8"',title:'"\uc694\uc77c\ub9c8\ub2e4',LOGIN:!0,"\uc554\ud638\ub97c":!0,"\uc790\ub3d9\uc73c\ub85c":!0,"\ubc14\uafd4\uc8fc\ub294":!0,'\ud504\ub85c\uadf8\ub7a8"':!0},"SELECT  TO_CHAR(SYSDATE, 'DD') ||\n        DECODE(TO_CHAR(SYSDATE, 'DAY'), '\uc6d4\uc694\uc77c', '01',\n                                        '\ud654\uc694\uc77c', '11',\n                                        '\uc218\uc694\uc77c', '21',\n                                        '\ubaa9\uc694\uc77c', '31',\n                                        '\uae08\uc694\uc77c', '41',\n                                        '\ud1a0\uc694\uc77c', '51',\n                                        '\uc77c\uc694\uc77c', '61'\n        ) SEC_KEY\nFROM DUAL;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\uc694\uc77c\ub9c8\ub2e4 LOGIN \uc554\ud638\ub97c \uc790\ub3d9\uc73c\ub85c \ubc14\uafd4\uc8fc\ub294 \ud504\ub85c\uadf8\ub7a8"',script:!0,title:'"\uc694\uc77c\ub9c8\ub2e4',LOGIN:!0,"\uc554\ud638\ub97c":!0,"\uc790\ub3d9\uc73c\ub85c":!0,"\ubc14\uafd4\uc8fc\ub294":!0,'\ud504\ub85c\uadf8\ub7a8"':!0},"SEC_KEY\n0341\n")))),Object(n.b)("h3",{id:"\ubd80\ub4f1\ud638\ube44\uad50"},"\ubd80\ub4f1\ud638\ube44\uad50"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"IF A > B THEN\n  RETURN 'T'\nELSE\n  RETURN 'F';\nEND IF;\n")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SIGN")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \uac12\uc774 \uc74c\uc218\uc778\uc9c0, \uc591\uc218\uc778\uc9c0 0 \uc778\uc9c0\ub97c \ud310\ub2e8\ud568.")))),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("p",null,"  LEC_TIME \uc774 \ud06c\uba74 '\uc2e4\ud5d8\uacfc\ubaa9' LEC_POINT \uac00 \ud06c\uba74 '\uae30\ud0c0\uacfc\ubaa9', \ub458\uc774 \uac19\uc73c\uba74 '\uc77c\ubc18\uacfc\ubaa9' \uc744 \ub9ac\ud134\ud558\ub294 SQL"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"SELECT  LEC_ID, LEC_POINT, LEC_TIME,\n        DECODE(SIGN(LEC_POINT - LEC_TIME),\n        0, '\uc77c\ubc18\uacfc\ubaa9',\n        1, '\uc2e4\ud5d8\uacfc\ubaa9',\n        -1, '\uae30\ud0c0\uacfc\ubaa9'\n        ) AS TY\nFROM    LECTURE;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script {}",script:!0,"{}":!0},"LEC_ID | LEC_POINT | LEC_TIME | TY\nL0001   3   3   \uc77c\ubc18\uacfc\ubaa9\nL0002   2   3   \uae30\ud0c0\uacfc\ubaa9\nL0003   3   2   \uc2e4\ud5d8\uacfc\ubaa9\nL0004   2   2   \uc77c\ubc18\uacfc\ubaa9\nL0005   1   3   \uae30\ud0c0\uacfc\ubaa9\n")))),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"LEAST, GREATEST")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"\ub4f1\ud638\uc640 \ubd80\ub4f1\ud638\uac00 \ud568\uaed8 \uc4f0\uc774\ub294 \ube44\uad50"),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},"\ud06c\uac70\ub098 \uac19\ub2e4, \uc791\uac70\ub098 \uac19\ub2e4")),Object(n.b)("p",{parentName:"div"},Object(n.b)("inlineCode",{parentName:"p"},"LEAST")),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \uac12\ub4e4 \uc911 \ucd5c\uc18c\uac12\uc744 \ub3cc\ub824\uc90c")),Object(n.b)("p",{parentName:"div"},Object(n.b)("inlineCode",{parentName:"p"},"GREATEST")),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \uac12\ub4e4 \uc911 \ucd5c\ub300 \uac12\uc744 \ub3cc\ub824\uc90c")))),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("p",null,"  LEC_TIME \uc774 LEC_POINT \ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc73c\uba74 \uc77c\ubc18 \uacfc\ubaa9\uc744 \ub9ac\ud134\ud558\uace0,"),Object(n.b)("p",null,"  LEC_POINT \uc774 LEC_TIME \ubcf4\ub2e4 \ud06c\uba74 \uc2e4\ud5d8\uacfc\ubaa9\uc744 \ub9ac\ud134\ud55c\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"SELECT  LEC_ID, LEC_POINT, LEC_TIME,\n        DECODE(LEAST(LEC_TIME, LEC_POINT), LEC_TIME, '\uc77c\ubc18\uacfc\ubaa9', '\uc2e4\ud5d8\uacfc\ubaa9') AS TY\nFROM    LECTURE;\n"))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script {}",script:!0,"{}":!0},"LEC_ID | LEC_POINT | LEC_TIME | TY\nL0001   3   3   \uc77c\ubc18\uacfc\ubaa9\nL0002   2   3   \uc2e4\ud5d8\uacfc\ubaa9\nL0003   3   2   \uc77c\ubc18\uacfc\ubaa9\nL0004   2   2   \uc77c\ubc18\uacfc\ubaa9\nL0005   1   3   \uc2e4\ud5d8\uacfc\ubaa9\n")))),Object(n.b)("h3",{id:"or-\ub610\ub294-in-\ube44\uad50"},"OR \ub610\ub294 IN \ube44\uad50"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"IF A IN (B,C,D) THEN\n  RETURN 'T';\nELSE\n  RETURN 'F';\nEND IF;\n")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"IF A = B OR A = C OR A = D THEN\n  RETURN 'T';\nELSE\n  RETURN 'F';\nEND IF;\n")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"DECODE(A, B, 'T', C, 'T', D, 'T', 'F')")," \uc640 \uac19\ub2e4."),Object(n.b)("h3",{id:"and-\ube44\uad50"},"AND \ube44\uad50"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"IF A = B AND\n   A = C THEN\n  RETURN 'T';\nELSE\n  RETURN 'F';\nEND IF;\n")),Object(n.b)("p",null,"\uc911\ucca9 IF \uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},"IF A = B THEN\n  IF C = D THEN\n    RETURN 'T';\n  ELSE\n    RETURN 'F';\nELSE\n  RETURN 'F';\nEND IF;\n")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"DECODE(A, B, DECODE(C, D, 'T, 'F'), 'F')")),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},Object(n.b)("p",null,"  \ud55c \ud589\uc5d0 \uc0ac\ubc88, \uc131\uba85\uc744 3\uba85\uc529 \ubcf4\uc5ec\uc8fc\ub294 SQL"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sql"},""))),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script {}",script:!0,"{}":!0},"")))),Object(n.b)(b.a,{defaultValue:"sql",values:[{label:"sql",value:"sql"},{label:"result",value:"result"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"sql",mdxType:"TabItem"},"```sql ```"),Object(n.b)(r.a,{value:"result",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell",metastring:"script {}",script:!0,"{}":!0},"")))))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var l=a(0),n=a.n(l);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},b=Object.keys(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),O=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=O(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},E=n.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=O(a),E=l,m=p["".concat(r,".").concat(E)]||p[E]||i[E]||b;return a?n.a.createElement(m,c(c({ref:t},u),{},{components:a})):n.a.createElement(m,c({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=a.length,r=new Array(b);r[0]=E;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var u=2;u<b;u++)r[u]=a[u];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}E.displayName="MDXCreateElement"},442:function(e,t,a){"use strict";function l(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=l(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=l(e))&&(n&&(n+=" "),n+=t);return n}},445:function(e,t,a){"use strict";var l=a(0),n=a(446);t.a=function(){const e=Object(l.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},446:function(e,t,a){"use strict";var l=a(0),n=Object(l.createContext)(void 0);t.a=n},448:function(e,t,a){"use strict";var l=a(0),n=a.n(l),b=a(445),r=a(442),c=a(53),s=a.n(c);const u=37,O=39;t.a=function(e){const{lazy:t,block:a,defaultValue:c,values:p,groupId:i,className:E}=e,{tabGroupChoices:m,setTabGroupChoices:o}=Object(b.a)(),[d,N]=Object(l.useState)(c),j=l.Children.toArray(e.children);if(null!=i){const e=m[i];null!=e&&e!==d&&p.some((t=>t.value===e))&&N(e)}const T=e=>{N(e),null!=i&&o(i,e)},v=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},E)},p.map((({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case O:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>T(e),onClick:()=>{T(e)}},t)))),t?Object(l.cloneElement)(j.filter((e=>e.props.value===d))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==d})))))}},449:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function({children:e,hidden:t,className:a}){return n.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);