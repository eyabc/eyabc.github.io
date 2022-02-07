(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{227:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return u}));var t=r(3),o=(r(0),r(441));const a={},c={unversionedId:"javascript/javascript/\ud504\ub85c\ud1a0\ud0c0\uc785",id:"javascript/javascript/\ud504\ub85c\ud1a0\ud0c0\uc785",isDocsHomePage:!1,title:"\ud504\ub85c\ud1a0\ud0c0\uc785",description:"Prototype",source:"@site/docs/javascript/javascript/\ud504\ub85c\ud1a0\ud0c0\uc785.md",slug:"/javascript/javascript/\ud504\ub85c\ud1a0\ud0c0\uc785",permalink:"/docs/javascript/javascript/\ud504\ub85c\ud1a0\ud0c0\uc785",version:"current",sidebar:"javascript",previous:{title:"\ud074\ub798\uc2a4",permalink:"/docs/javascript/javascript/\ud074\ub798\uc2a4"},next:{title:"\uc5d0\ub7ec \ud578\ub4e4\ub9c1",permalink:"/docs/javascript/javascript/\uc5d0\ub7ec \ud578\ub4e4\ub9c1"}},i=[{value:"Reference",id:"reference",children:[]}],p={toc:i};function u({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"prototype"},"Prototype"),Object(o.b)("p",null,"\ud568\uc218\uc758 \uc0dd\uc131\uc790."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function Person(name){\n    this.name = name;\n    this.introduce = function(){\n        return 'My name is '+this.name; \n    }   \n}\nconst p1 = new Person('egoing');\ndocument.write(p1.introduce()+\"<br />\");\n \nconst p2 = new Person('leezche');\ndocument.write(p2.introduce());\n")),Object(o.b)("p",null,"Person, \uc218\ud37c \ud504\ub85c\ud1a0\ud0c0\uc785. \uac1d\uccb4\uc758 \ud504\ub85c\ud1a0\ud0c0\uc785 \uc815\uc758"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"function Person(name){\n    this.name = name;\n}\nPerson.prototype.name = null;\nPerson.prototype.introduce = function(){\n    return 'My name is ' + this.name; \n};\n")),Object(o.b)("p",null,"Programmer, \uc11c\ube0c \ud504\ub85c\ud1a0\ud0c0\uc785, "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'function Programmer(name){\n    this.name = name;\n}\n// Programmer.prototype.constructor = Programmer\n\nProgrammer.prototype = new Person();    // Person \ud504\ub85c\ud1a0 \ud0c0\uc785\uc744 \uc0c1\uc18d\n// \ud639\uc740\n// Programmer.prototype = Object.create(Person.prototype);\n\nProgrammer.prototype.coding = function(){\n    return "hello world";\n};\n \nvar p1 = new Programmer(\'egoing\');\ndocument.write(p1.introduce()+"<br />");\ndocument.write(p1.coding()+"<br />")\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Prototype \uc5d0 \uc800\uc7a5\ub41c \uc18d\uc131\ub4e4\uc740 \uc0dd\uc131\uc790\ub97c \ud1b5\ud574\uc11c ",Object(o.b)("strong",{parentName:"li"},"\uac1d\uccb4\uac00 \ub9cc\ub4e4\uc5b4\uc9c8 \ub54c \uadf8 \uac1d\uccb4\uc5d0 \uc5f0\uacb0\ub41c\ub2e4."),Object(o.b)("inlineCode",{parentName:"li"},"Programmer.prototype = new Person();"),"\n\uc774\ucc98\ub7fc prototype \uc18d\uc131\uc740 \uac1d\uccb4\uc640 \uac1d\uccb4\ub97c \uc5f0\uacb0\ud558\ub294 \uccb4\uc778\uc758 \uc5ed\ud560\uc744 \ud55c\ub2e4.")),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\uc0dd\ud65c\ucf54\ub529")))}u.isMDXComponent=!0},441:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),b=t,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return r?o.a.createElement(f,i(i({ref:n},u),{},{components:r})):o.a.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);