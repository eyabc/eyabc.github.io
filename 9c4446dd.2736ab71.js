(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{292:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return c})),r.d(a,"metadata",(function(){return l})),r.d(a,"toc",(function(){return i})),r.d(a,"default",(function(){return p}));var t=r(3),n=(r(0),r(424));const c={title:"\uc54c\uc544\uc57c \ud560 13\uac00\uc9c0 \uc720\uc6a9\ud55c Javascript \ubc30\uc5f4 \ubc29\ubc95\uacfc \ud2b8\ub9ad"},l={unversionedId:"javascript/etc/javascript_array",id:"javascript/etc/javascript_array",isDocsHomePage:!1,title:"\uc54c\uc544\uc57c \ud560 13\uac00\uc9c0 \uc720\uc6a9\ud55c Javascript \ubc30\uc5f4 \ubc29\ubc95\uacfc \ud2b8\ub9ad",description:"Reference",source:"@site/docs/javascript/etc/javascript_array.md",slug:"/javascript/etc/javascript_array",permalink:"/docs/javascript/etc/javascript_array",version:"current",sidebar:"javascript",previous:{title:"CleanCodeJavascript",permalink:"/docs/javascript/clean_code/CleanCodeJavascript"},next:{title:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 History",permalink:"/docs/javascript/etc/\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 History"}},i=[{value:"Reference",id:"reference",children:[]},{value:"1. Array \uc911\ubcf5 \uc0ad\uc81c",id:"1-array-\uc911\ubcf5-\uc0ad\uc81c",children:[]},{value:"2. Array \ud2b9\uc815 \uac12 \ubc14\uafb8\uae30",id:"2-array-\ud2b9\uc815-\uac12-\ubc14\uafb8\uae30",children:[]},{value:"3. Array.map() \uc5c6\uc774 Map \uc0ac\uc6a9\ud558\uae30",id:"3-arraymap-\uc5c6\uc774-map-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"4. Array \ube44\uc6b0\uae30",id:"4-array-\ube44\uc6b0\uae30",children:[]},{value:"5. Array \ub97c Object\ub85c \ubcc0\ud658\ud558\uae30",id:"5-array-\ub97c-object\ub85c-\ubcc0\ud658\ud558\uae30",children:[]},{value:"6. \ub370\uc774\ud130\ub85c Array \ucc44\uc6b0\uae30",id:"6-\ub370\uc774\ud130\ub85c-array-\ucc44\uc6b0\uae30",children:[]},{value:"7. Array \ubcd1\ud569",id:"7-array-\ubcd1\ud569",children:[]},{value:"8. \ub450 Array\uc758 \uad50\uc9d1\ud569",id:"8-\ub450-array\uc758-\uad50\uc9d1\ud569",children:[]},{value:"9. Array\uc5d0\uc11c falsy \uac12 \uc81c\uac70",id:"9-array\uc5d0\uc11c-falsy-\uac12-\uc81c\uac70",children:[]},{value:"10. Array\uc758 \ub79c\ub364 \uac12 \uac00\uc838\uc624\uae30",id:"10-array\uc758-\ub79c\ub364-\uac12-\uac00\uc838\uc624\uae30",children:[]},{value:"11. Array \uc5ed \uc21c\uc11c",id:"11-array-\uc5ed-\uc21c\uc11c",children:[]},{value:".lastIndexOf()",id:"lastindexof",children:[]},{value:"Array \uac12\uc758 \ud569",id:"array-\uac12\uc758-\ud569",children:[]}],o={toc:i};function p({components:e,...a}){return Object(n.b)("wrapper",Object(t.a)({},o,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"reference"},"Reference"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.blog.duomly.com/13-useful-javascript-array-tips-and-tricks-you-should-know/?fbclid=IwAR3YuEviqaZ1ergMhmh3wxM6arYpReKpPFMpDhn4cpjOmeUlIVk0ymXq3-0"},"13 useful JavaScript array tips and tricks you should know"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"const fruits = [\n    'banana', \n    'apple', \n    'orange', \n    'watermelon', \n    'apple', \n    'orange', \n    'grape', \n    'apple'\n];\n")),Object(n.b)("h2",{id:"1-array-\uc911\ubcf5-\uc0ad\uc81c"},"1. Array \uc911\ubcf5 \uc0ad\uc81c"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Array.from(new Set(fruits));"),Object(n.b)("li",{parentName:"ol"},"[...new Set(fruits)]",";")),Object(n.b)("h2",{id:"2-array-\ud2b9\uc815-\uac12-\ubc14\uafb8\uae30"},"2. Array \ud2b9\uc815 \uac12 \ubc14\uafb8\uae30"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Array.splice(start, value to remove, valueToAdd)")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"fruits.splice(0, 2, 'potato', 'tomato');\n// ['potato', 'tomato', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];\n")),Object(n.b)("h2",{id:"3-arraymap-\uc5c6\uc774-map-\uc0ac\uc6a9\ud558\uae30"},"3. Array.map() \uc5c6\uc774 Map \uc0ac\uc6a9\ud558\uae30"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var friends = [\n    { name: 'John', age: 22 },\n    { name: 'Peter', age: 23 },\n    { name: 'Mark', age: 24 },\n    { name: 'Maria', age: 22 },\n    { name: 'Monica', age: 21 },\n    { name: 'Martha', age: 19 },\n];\nvar friendsNames = Array.from(friends, ({ name }) => name)\n// ['John', 'Peter', 'Mark', 'Maria', 'Monica', 'Martha']\n")),Object(n.b)("h2",{id:"4-array-\ube44\uc6b0\uae30"},"4. Array \ube44\uc6b0\uae30"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"fruits.length = 0; \n// [] \n")),Object(n.b)("h2",{id:"5-array-\ub97c-object\ub85c-\ubcc0\ud658\ud558\uae30"},"5. Array \ub97c Object\ub85c \ubcc0\ud658\ud558\uae30"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var fruitsObj = {...fruits};\n// {0: 'banana', 1: 'apple', ...}\n")),Object(n.b)("h2",{id:"6-\ub370\uc774\ud130\ub85c-array-\ucc44\uc6b0\uae30"},"6. \ub370\uc774\ud130\ub85c Array \ucc44\uc6b0\uae30"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var newArray = new Array(10).fill('1');\n// ['1', '1', ...]\n")),Object(n.b)("h2",{id:"7-array-\ubcd1\ud569"},"7. Array \ubcd1\ud569"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"concat()"),Object(n.b)("li",{parentName:"ol"},"spread operator (...)")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var fruits = ['apple', 'banana'];\nvar meat = ['beef'];\nvar vegetables = ['tomato'];\nvar food = [...fruits, ...meat, ...vegetables]\n")),Object(n.b)("h2",{id:"8-\ub450-array\uc758-\uad50\uc9d1\ud569"},"8. \ub450 Array\uc758 \uad50\uc9d1\ud569"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var numOne = [0, 2, 4, 6, 8, 8];\nvar numTwo = [1, 2, 3, 4, 5, 6];\nvar duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item))\n")),Object(n.b)("h2",{id:"9-array\uc5d0\uc11c-falsy-\uac12-\uc81c\uac70"},"9. Array\uc5d0\uc11c falsy \uac12 \uc81c\uac70"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"falsy value in Javascript",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},'9, "", null, NaN, undefined  ')))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var trueArr = mixedArr.filter(Boolean);\n")),Object(n.b)("h2",{id:"10-array\uc758-\ub79c\ub364-\uac12-\uac00\uc838\uc624\uae30"},"10. Array\uc758 \ub79c\ub364 \uac12 \uac00\uc838\uc624\uae30"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},'var colors = ["blue", "white" ];\nvar randomColor = colors[(Math.floor(Math.random()*(colors.length + 1)))]\n')),Object(n.b)("h2",{id:"11-array-\uc5ed-\uc21c\uc11c"},"11. Array \uc5ed \uc21c\uc11c"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var reversedColors = colors.reverse()\n")),Object(n.b)("h2",{id:"lastindexof"},".lastIndexOf()"),Object(n.b)("p",null,"Array \uc5d0 \uc911\ubcf5\ub41c value \uac12\ub4e4\uc774 \ub098\ud0c0\ub0a0 \uc218 \uc788\uc74c.\n\uc911\ubcf5\ub41c \uac12 \ub4e4\uc911 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \uac12\uc758 \uc778\ub371\uc2a4\ub97c \ubc18\ud658\ud568"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var lastIndex = nums.lastIndexOf(5)\n")),Object(n.b)("h2",{id:"array-\uac12\uc758-\ud569"},"Array \uac12\uc758 \ud569"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-javascript"},"var sum = nums.reduce((x, y) => x + y);\n")))}p.isMDXComponent=!0},424:function(e,a,r){"use strict";r.d(a,"a",(function(){return b})),r.d(a,"b",(function(){return m}));var t=r(0),n=r.n(t);function c(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){c(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var a=n.a.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},b=function(e){var a=s(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(r),d=t,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||c;return r?n.a.createElement(m,i(i({ref:a},p),{},{components:r})):n.a.createElement(m,i({ref:a},p))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var p=2;p<c;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);