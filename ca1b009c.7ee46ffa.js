(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{388:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(462)),l={title:"7. \ub2e4 \uc4f4 \uac1d\uccb4 \ucc38\uc870\ub97c \ud574\uc81c\ud558\ub77c"},i={unversionedId:"java/effective-java/ch2/ITEM7",id:"java/effective-java/ch2/ITEM7",isDocsHomePage:!1,title:"7. \ub2e4 \uc4f4 \uac1d\uccb4 \ucc38\uc870\ub97c \ud574\uc81c\ud558\ub77c",description:"GC \uac00 \uc788\ub294 \uc5b8\uc5b4\uc5d0\uc11c\ub3c4 \uba54\ubaa8\ub9ac \uad00\ub9ac\ub97c \uc2e0\uacbd\uc368\uc57c \ud55c\ub2e4.",source:"@site/docs/java/effective-java/ch2/ITEM7.md",slug:"/java/effective-java/ch2/ITEM7",permalink:"/docs/java/effective-java/ch2/ITEM7",version:"current",lastUpdatedAt:1632642016,sidebar:"effectiveJava",previous:{title:"6. \ubd88\ud544\uc694\ud55c \uac1d\uccb4 \uc0dd\uc131\uc744 \ud53c\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM6"},next:{title:"8. finalizer \uc640 cleaner \uc0ac\uc6a9\uc744 \ud53c\ud558\ub77c",permalink:"/docs/java/effective-java/ch2/ITEM8"}},b=[{value:"\uc2a4\ud0dd\uc5d0\uc11c \uaebc\ub0b4\uc9c4 \uac1d\uccb4\ub4e4\uc744 GC \uac00 \ud68c\uc218\ud558\uc9c0 \uc54a\uc74c",id:"\uc2a4\ud0dd\uc5d0\uc11c-\uaebc\ub0b4\uc9c4-\uac1d\uccb4\ub4e4\uc744-gc-\uac00-\ud68c\uc218\ud558\uc9c0-\uc54a\uc74c",children:[]},{value:"null \ucc98\ub9ac\ub294 \uc5b8\uc81c \ud574\uc57c \ud560\uae4c?",id:"null-\ucc98\ub9ac\ub294-\uc5b8\uc81c-\ud574\uc57c-\ud560\uae4c",children:[{value:"1. \uc790\uae30 \uba54\ubaa8\ub9ac\ub97c \uc9c1\uc811 \uad00\ub9ac\ud558\ub294 \ud074\ub798\uc2a4",id:"1-\uc790\uae30-\uba54\ubaa8\ub9ac\ub97c-\uc9c1\uc811-\uad00\ub9ac\ud558\ub294-\ud074\ub798\uc2a4",children:[]},{value:"2. \uce90\uc2dc \uba54\ubaa8\ub9ac",id:"2-\uce90\uc2dc-\uba54\ubaa8\ub9ac",children:[]},{value:"3. \ub9ac\uc2a4\ub108 (\ucf5c\ubc31)",id:"3-\ub9ac\uc2a4\ub108-\ucf5c\ubc31",children:[]}]},{value:"Reference",id:"reference",children:[]}],o={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"GC \uac00 \uc788\ub294 \uc5b8\uc5b4\uc5d0\uc11c\ub3c4 \uba54\ubaa8\ub9ac \uad00\ub9ac\ub97c \uc2e0\uacbd\uc368\uc57c \ud55c\ub2e4."),Object(c.b)("p",null,"\uba54\ubaa8\ub9ac \ub204\uc218\ub294 \uac89\uc73c\ub85c \uc798 \ub4dc\ub7ec\ub098\uc9c0 \uc54a\uc544 \uc2dc\uc2a4\ud15c\uc5d0 \uc218\ub144\uac04 \uc7a0\ubcf5\ud558\ub294 \uc0ac\ub840\ub3c4 \uc788\ub2e4.\n\uc774\ub7ec\ud55c \ub204\uc218\ub294 \ucca0\uc800\ud55c \ucf54\ub4dc \ub9ac\ubdf0\ub098 \ud799 \ud504\ub85c\ud30c\uc77c\ub7ec \uac19\uc740 \ub514\ubc84\uae45 \ub3c4\uad6c\ub97c \ub3d9\uc6d0\ud574\uc57c\ub9cc \ubc1c\uacac\ub418\uae30\ub3c4 \ud55c\ub2e4.\n\uadf8\ub798\uc11c \uc774\ub7f0 \uc885\ub958\uc758 \ubb38\uc81c\ub294 \uc608\ubc29\ubc95\uc744 \uc775\ud600\ub450\ub294 \uac83\uc774 \ub9e4\uc6b0 \uc911\uc694\ud558\ub2e4."),Object(c.b)("h2",{id:"\uc2a4\ud0dd\uc5d0\uc11c-\uaebc\ub0b4\uc9c4-\uac1d\uccb4\ub4e4\uc744-gc-\uac00-\ud68c\uc218\ud558\uc9c0-\uc54a\uc74c"},"\uc2a4\ud0dd\uc5d0\uc11c \uaebc\ub0b4\uc9c4 \uac1d\uccb4\ub4e4\uc744 GC \uac00 \ud68c\uc218\ud558\uc9c0 \uc54a\uc74c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public class Stack {\n    private Object[] elements;\n    private int size = 0;\n    private static final int DEFAULT_INITIAL_CAPACITY = 16;\n    \n    public Stack() {\n        elements = new Object[DEFAULT_INITIAL_CAPACITY];\n    }\n    \n    public void push(Object e) {\n        ensureCapacity();\n        elements[size++] = e;\n    }\n\n    public Object pop() {\n        if (size == 0)\n            throw new EmptyStackException();\n        return elements[--size];\n    }\n\n    private void ensureCapacity() {\n        if (elements.length == size) {\n            elements = Arrays.copyOf(elements, 2 * size + 1);            \n        }\n    }\n\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc2a4\ud0dd\ub4e4\uc774 \uadf8 \uac1d\uccb4\ub4e4\uc758 \ub2e4\uc4f4 \ucc38\uc870 obsolete reference(\ub2e4\uc2dc \uc4f0\uc9c0 \uc54a\uc744 \ucc38\uc870) \ub97c \uc5ec\uc804\ud788 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38"),Object(c.b)("li",{parentName:"ul"},"\ud574\ub2f9 \ucc38\uc870\ub97c \ub2e4 \uc37c\uc744 \ub54c null \ucc98\ub9ac \ud574\uc918\uc57c \ud55c\ub2e4.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public Object pop() {\n    if (size == 0) \n        throw new EmptyStackException();\n    Object result = elements[--size];\n    elements[size] = null;\n    return result;\n}\n")),Object(c.b)("h2",{id:"null-\ucc98\ub9ac\ub294-\uc5b8\uc81c-\ud574\uc57c-\ud560\uae4c"},"null \ucc98\ub9ac\ub294 \uc5b8\uc81c \ud574\uc57c \ud560\uae4c?"),Object(c.b)("p",null,"\uac1d\uccb4 \ucc38\uc870\ub97c null \ucc98\ub9ac \ud558\ub294 \uc77c\uc740 \uc608\uc678\uc801\uc778 \uacbd\uc6b0\uc5ec\uc57c \ud55c\ub2e4."),Object(c.b)("h3",{id:"1-\uc790\uae30-\uba54\ubaa8\ub9ac\ub97c-\uc9c1\uc811-\uad00\ub9ac\ud558\ub294-\ud074\ub798\uc2a4"},"1. \uc790\uae30 \uba54\ubaa8\ub9ac\ub97c \uc9c1\uc811 \uad00\ub9ac\ud558\ub294 \ud074\ub798\uc2a4"),Object(c.b)("p",null,"Stack \ud074\ub798\uc2a4\ub294, \uc2a4\ud0dd\uc774 \uc790\uae30 \uba54\ubaa8\ub9ac\ub97c \uc9c1\uc811 \uad00\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uba54\ubaa8\ub9ac \ub204\uc218\uc5d0 \ucde8\uc57d\ud558\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uac1d\uccb4\uc758 \ucc38\uc870\ub97c \ub2f4\ub294 \ubc30\uc5f4\uc740, \uc800\uc7a5\uc18c \ud480\uc744 \ub9cc\ub4e4\uc5b4 \uc6d0\uc18c\ub97c \uad00\ub9ac\ud568."),Object(c.b)("li",{parentName:"ul"},"GC \ub294 \ubc30\uc5f4\uc758 \ud65c\uc131 \uc601\uc5ed\uacfc \ube44\ud65c\uc131 \uc601\uc5ed\uc744 \uad6c\ubd84\ud560 \uc218 \uc5c6\ub2e4.")),Object(c.b)("h3",{id:"2-\uce90\uc2dc-\uba54\ubaa8\ub9ac"},"2. \uce90\uc2dc \uba54\ubaa8\ub9ac"),Object(c.b)("h4",{id:"weakhashmap"},Object(c.b)("inlineCode",{parentName:"h4"},"WeakHashMap")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uce90\uc2dc \uc678\ubd80\uc5d0\uc11c, \ud0a4\ub97c \ucc38\uc870\ud558\ub294 \ub3d9\uc548\uc5d0\ub9cc \uc5d4\ud2b8\ub9ac\uac00 \uc0b4\uc544\uc788\ub294 \uce90\uc2dc\uac00 \ud544\uc694\ud55c \uc0c1\ud669\uc77c \ub54c"),Object(c.b)("li",{parentName:"ul"},"\ub2e4\uc4f4 \uc5d4\ud2b8\ub9ac\ub294 \uc989\uc2dc \uc81c\uac70\ub428")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    Map<Integer, String> map = new WeakHashMap<>();\n\n    Integer key1 = 1000;\n    Integer key2 = 2000;\n\n    map.put(key1, "test a");\n    map.put(key2, "test b");\n\n    key1 = null;\n\n    System.gc();  //\uac15\uc81c Garbage Collection\n\n    map.entrySet().stream().forEach(el -> System.out.println(el));\n}\n2000=test b\n')),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\uc57d\ud55c \ucc38\uc870 ")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"WeakReference weak = new WeakReference<>(prime);"),"\n\uc640 \uac19\uc774 prime \uc774 null\uc774 \ub418\uba74 GC\uc758 \ub300\uc0c1\uc774 \ub41c\ub2e4."))),Object(c.b)("p",null,"\uce90\uc2dc \uc5d4\ud2b8\ub9ac\uc758 \uc720\ud6a8 \uae30\uac04\uc744 \uc815\ud655\ud788 \uc815\uc758\ud558\uae30 \uc5b4\ub824\uc6b8 \ub54c "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc9c1\uc811 \uccad\uc18c"),Object(c.b)("li",{parentName:"ul"},"Scheduled ThreadPoolExecutor \uacfc \uac19\uc740 \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc4f0\ub808\ub4dc \ud65c\uc6a9")),Object(c.b)("h4",{id:"linkedhashmap"},Object(c.b)("inlineCode",{parentName:"h4"},"LinkedHashMap")),Object(c.b)("p",null,"\uce90\uc2dc\uc5d0 \uc0c8\ub85c\uc6b4 \ud56d\ubaa9\uc774 \ucd94\uac00\ub420 \ub54c removeEldestEntry \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\ud558\ub294\ub370 \uc774\uac8c \uac00\uc7a5 \uc624\ub798\ub41c \uce90\uc2dc\ub97c \uc81c\uac70\ud558\ub294 \uac83\uc774\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) {\n    LinkedHashMap<Integer, Integer> map = new LinkedHashMap<>(1000, 0.75f, true) {\n\n        private final static int MAX = 10;\n\n        protected boolean removeEldestEntry(java.util.Map.Entry<Integer, Integer> eldest) {\n            return size() >= MAX;\n        }\n    };\n\n    for (int i = 0; i < 20; i++) {\n        map.put(i, i);\n    }\n\n    for (Map.Entry<Integer, Integer> string : map.entrySet()) {\n        System.out.println(string);\n    }\n}\n/*\n    11=11\n    12=12\n    13=13\n    14=14\n    15=15\n    16=16\n    17=17\n    18=18\n    19=19\n*/\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ub354 \ubcf5\uc7a1\ud55c \uce90\uc2dc\ub97c \ub9cc\ub4e4\uace0 \uc2f6\ub2e4\uba74 java.lang.ref \ud328\ud0a4\uc9c0 \uc9c1\uc811 \ud65c\uc6a9")),Object(c.b)("h3",{id:"3-\ub9ac\uc2a4\ub108-\ucf5c\ubc31"},"3. \ub9ac\uc2a4\ub108 (\ucf5c\ubc31)"),Object(c.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ucf5c\ubc31\uc744 \ub4f1\ub85d\ud558\uace0 \uba85\ud655\ud55c \ud574\uc9c0\ub97c \ud558\uc9c0 \uc54a\uc744 \ub54c, \ucf5c\ubc31\uc740 \uacc4\uc18d \uc313\uc5ec\uac10."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ucf5c\ubc31\uc744 \uc57d\ud55c\ucc38\uc870\ub85c \uc800\uc7a5\ud558\uba74 GC \uac00 \uc989\uc2dc \uc218\uac70\ud574 \uac04\ub2e4."),Object(c.b)("li",{parentName:"ul"},"WeakHashMap \uc5d0 \ud0a4\ub85c \uc800\uc7a5\ud55c\ub2e4.")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ucf5c\ubc31\uc758 \ud574\uc9c0\ub97c \ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0, java.lang.ref \uac00 \ubb34\uc5c7\uc77c\uae4c?")),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/7_%EB%8B%A4%20%EC%93%B4%20%EA%B0%9D%EC%B2%B4%20%EC%B0%B8%EC%A1%B0%EB%A5%BC%20%ED%95%B4%EC%A0%9C%ED%95%98%EB%9D%BC_%EA%B9%80%EC%84%B8%EC%9C%A4.md"},"https://github.com/Meet-Coder-Study/book-effective-java/blob/main/2%EC%9E%A5/7_%EB%8B%A4%20%EC%93%B4%20%EA%B0%9D%EC%B2%B4%20%EC%B0%B8%EC%A1%B0%EB%A5%BC%20%ED%95%B4%EC%A0%9C%ED%95%98%EB%9D%BC_%EA%B9%80%EC%84%B8%EC%9C%A4.md"))))}p.isMDXComponent=!0},462:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||c;return t?r.a.createElement(d,i(i({ref:n},o),{},{components:t})):r.a.createElement(d,i({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=m;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);