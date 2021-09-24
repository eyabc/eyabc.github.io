(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=(n(0),n(425));const l={},b={unversionedId:"javascript/browser_events/Browser_keydown_keyup_events",id:"javascript/browser_events/Browser_keydown_keyup_events",isDocsHomePage:!1,title:"Browser_keydown_keyup_events",description:"Keyboard: keydown and keyup",source:"@site/docs/javascript/browser_events/Browser_keydown_keyup_events.md",slug:"/javascript/browser_events/Browser_keydown_keyup_events",permalink:"/docs/javascript/browser_events/Browser_keydown_keyup_events",version:"current",sidebar:"javascript",previous:{title:"Browser_pointer_events",permalink:"/docs/javascript/browser_events/Browser_pointer_events"},next:{title:"Browser_event_scrolling",permalink:"/docs/javascript/browser_events/Browser_event_scrolling"}},c=[{value:"event.code and event.key",id:"eventcode-and-eventkey",children:[{value:"other key codes",id:"other-key-codes",children:[]}]},{value:"event.repeat",id:"eventrepeat",children:[]},{value:"\uae30\ubcf8 \ub3d9\uc791\ub4e4",id:"\uae30\ubcf8-\ub3d9\uc791\ub4e4",children:[{value:"\uae30\ubcf8 \ub3d9\uc791 \ucde8\uc18c\ud558\uae30",id:"\uae30\ubcf8-\ub3d9\uc791-\ucde8\uc18c\ud558\uae30",children:[]}]},{value:"Legacy",id:"legacy",children:[]},{value:"Reference &amp; Comment",id:"reference--comment",children:[]}],i={toc:c};function o({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"keyboard-keydown-and-keyup"},"Keyboard: keydown and keyup"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"<input>")," \ud544\ub4dc\uc5d0 \ub300\ud55c \uc785\ub825\uc744 \ucd94\uc801\ud558\ub824\uba74 Keyboard \uc774\ubca4\ud2b8\ub85c \ubd80\uc871\ud558\ub2e4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubcf4\ucda9 : ",Object(r.b)("a",{parentName:"li",href:"https://ko.javascript.info/events-change-input"},"\uc774\ubca4\ud2b8: change, input, cut, copy, paste"))),Object(r.b)("h2",{id:"eventcode-and-eventkey"},"event.code and event.key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"event.code")," \ubb3c\ub9ac\uc801 key code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"event.key")," \ub204\ub978 \ubb38\uc790\ub97c \ud45c\ud604")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"event.key"),Object(r.b)("th",{parentName:"tr",align:null},"event.code"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Z"),Object(r.b)("td",{parentName:"tr",align:null},"z (lowercase)"),Object(r.b)("td",{parentName:"tr",align:null},"KeyZ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Shift+Z"),Object(r.b)("td",{parentName:"tr",align:null},"Z (uppercase)"),Object(r.b)("td",{parentName:"tr",align:null},"KeyZ")))),Object(r.b)("p",null,"\ud0a4\ubcf4\ub4dc \uc790\ud310 Z \ub294 \uc5b8\uc5b4/OS \uc5d0 \ub530\ub77c z \uc774\uc678\uc5d0\ub3c4 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc9c0\ub9cc, code \ub294 \ud56d\uc0c1 KeyZ "),Object(r.b)("h3",{id:"other-key-codes"},"other key codes"),Object(r.b)("p",null,"\ud0a4\ubcf4\ub4dc\uc758 \uac01 \ud0a4\ub294 \ubaa8\ub450 code \ub97c \uac00\uc9c0\uace0 \uc788\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubb38\uc790 \ud0a4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Key<letter>")," : KeyA, KeyB .."))),Object(r.b)("li",{parentName:"ul"},"\uc22b\uc790 \ud0a4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Digit<number>")," : Digit0, Digit1"))),Object(r.b)("li",{parentName:"ul"},"\ud2b9\uc218 \ud0a4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Enter, Backspace, Tab, Quote ...")))),Object(r.b)("p",null,"\ucf58\uc194\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc785\ub825\ud558\uace0, \uc6f9\ud398\uc774\uc9c0\uc5d0\uc11c \uc544\ubb34 \ud0a4\ub098 \ub20c\ub7ec\ubcf4\uc790"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const dom = document.querySelector('body')\ndom.addEventListener(\"keydown\", e => {\n    console.log(e.key, e.code)\n})\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"event.key")," \uac00 \ud45c\ud604\ud558\uc9c0 \ubabb\ud558\ub294 Shift \ub098 F1 \uac19\uc740 \ud0a4\ub294 ",Object(r.b)("inlineCode",{parentName:"p"},"event.code")," \uc640 \uac19\uac70\ub098 \uc720\uc0ac\ud55c \uac12\uc744 \uac00\uc9c4\ub2e4."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Key"),Object(r.b)("th",{parentName:"tr",align:null},"event.key"),Object(r.b)("th",{parentName:"tr",align:null},"event.code"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"F1"),Object(r.b)("td",{parentName:"tr",align:null},"F1"),Object(r.b)("td",{parentName:"tr",align:null},"F1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Backspace"),Object(r.b)("td",{parentName:"tr",align:null},"Backspace"),Object(r.b)("td",{parentName:"tr",align:null},"Backspace")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Shift"),Object(r.b)("td",{parentName:"tr",align:null},"Shift"),Object(r.b)("td",{parentName:"tr",align:null},"ShiftRight or ShiftLeft")))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"event.code")," ctrl + z \ub97c os/\uc5b8\uc5b4 \uc5d0 \uc0c1\uad00\uc5c6\uc774 \uc778\uc2dd\ud558\ub294 \ubc29\ubc95"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"document.addEventListener('keydown', function(event) {\n  if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {\n    alert('Undo!')\n  }\n});\n")),Object(r.b)("p",null,"\uac19\uc740\ud0a4, \ub2e4\ub978 \ub808\uc774\uc544\uc6c3"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/108058161-f43d5e80-7096-11eb-8085-93b7f4308f92.png",alt:"image"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"US \u2192 Z"),Object(r.b)("li",{parentName:"ul"},"German \u2192 Y"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system"},"\uc774\uc678"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"event.code == 'KeyZ'")," \ub97c \uccb4\ud06c\ud560 \ub54c, "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"German \ub808\uc774\uc544\uc6c3\uc5d0\uc11c\ub294 Y \ub97c \ub204\ub974\uae30 \ub54c\ubb38\uc5d0 \uccb4\ud06c\ud558\uc9c0 \ubabb\ud55c\ub2e4. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\uc774 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"event.key")," \ub808\uc774\uc544\uc6c3 \uc885\uc18d \ubb38\uc790\uac00 \ub354 \uc548\uc804\ud560 \uc218\ub3c4 \uc788\ub2e4. "))),Object(r.b)("h2",{id:"eventrepeat"},"event.repeat"),Object(r.b)("p",null,"auto-repeat"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"key \ub97c \uc77c\uc815 \uc2dc\uac04 \uc774\uc0c1 \uacc4\uc18d \ub204\ub974\uace0 \uc788\uc744 \ub54c "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keydown")," \uc774 \ubc18\ubcf5\uc801\uc73c\ub85c \uc77c\uc5b4\ub098\uba74 ",Object(r.b)("inlineCode",{parentName:"li"},"true")," \uac00 \ub41c\ub2e4.")),Object(r.b)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c single ",Object(r.b)("inlineCode",{parentName:"p"},"keyup")," \uc73c\ub85c \ub9c8\ubb34\ub9ac \ub41c\ub2e4."),Object(r.b)("h2",{id:"\uae30\ubcf8-\ub3d9\uc791\ub4e4"},"\uae30\ubcf8 \ub3d9\uc791\ub4e4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubb38\uc790\uac00 \uc2a4\ud06c\ub9b0\uc5d0 \ub4f1\uc7a5\ud558\ub294 \uac83"),Object(r.b)("li",{parentName:"ul"},"\ubb38\uc790\uac00 ",Object(r.b)("inlineCode",{parentName:"li"},"Delete")," \ud0a4\ub85c \uc778\ud574 \uc0ad\uc81c \ub418\ub294 \uac83"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PageDown")," \ud0a4\ub85c \uc778\ud574 \ud398\uc774\uc9c0\uac00 \uc2a4\ud06c\ub864 \ub418\ub294 \uac83"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Ctrl + S")," \ub97c \ud1b5\ud574 \ube0c\ub77c\uc6b0\uc800\uac00 '\ud398\uc774\uc9c0 \uc800\uc7a5' dialog \ub97c \uc5ec\ub294 \uac83"),Object(r.b)("li",{parentName:"ul"},"\ub4f1..")),Object(r.b)("h3",{id:"\uae30\ubcf8-\ub3d9\uc791-\ucde8\uc18c\ud558\uae30"},"\uae30\ubcf8 \ub3d9\uc791 \ucde8\uc18c\ud558\uae30"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keydown")," \uc758 \uc774\ubca4\ud2b8\ub97c prevent \ud558\uba74 \ub300\ubd80\ubd84\uc758 \uae30\ubcf8\ub3d9\uc791\uc744 \ub9c9\uc744 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"OS \uae30\ubc18 \ud2b9\uc218\ud0a4\ub85c \uc778\ud55c \uae30\ubcf8 \ub3d9\uc791\uc740 \ub9c9\uc744 \uc218 \uc5c6\ub2e4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"windows ",Object(r.b)("inlineCode",{parentName:"li"},"Alt + F4")),Object(r.b)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ub9c9\uc744 \uc218 \uc5c6\ub2e4")))),Object(r.b)("h2",{id:"legacy"},"Legacy"),Object(r.b)("p",null,"keypress, keyCode, charCode, which"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"browser \ud638\ud658\uc131 \ubb38\uc81c ")),Object(r.b)("h2",{id:"reference--comment"},"Reference & Comment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ko.javascript.info/keyboard-events"},"https://ko.javascript.info/keyboard-events"))))}o.isMDXComponent=!0},425:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),j=a,O=u["".concat(b,".").concat(j)]||u[j]||d[j]||l;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);