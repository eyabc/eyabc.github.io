(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{194:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return p})),a.d(n,"default",(function(){return o}));var t=a(3),l=a(7),r=(a(0),a(276)),i={title:"37. ordinal \uc778\ub371\uc2f1 \ub300\uc2e0 EnumMap \uc744 \uc0ac\uc6a9\ud558\ub77c"},c={unversionedId:"java/effective-java/ch6/ITEM37",id:"java/effective-java/ch6/ITEM37",isDocsHomePage:!1,title:"37. ordinal \uc778\ub371\uc2f1 \ub300\uc2e0 EnumMap \uc744 \uc0ac\uc6a9\ud558\ub77c",description:"\ubc30\uc5f4 \uc778\ub371\uc2a4\ub97c \uc5bb\uae30 \uc704\ud55c \ubc29\ubc95",source:"@site/docs/java/effective-java/ch6/ITEM37.md",slug:"/java/effective-java/ch6/ITEM37",permalink:"/docs/java/effective-java/ch6/ITEM37",version:"current",sidebar:"effectiveJava",previous:{title:"36. \ube44\ud2b8 \ud544\ub4dc \ub300\uc2e0 EnumSet \uc744 \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch6/ITEM36"},next:{title:"38. \ud655\uc7a5\ud560 \uc218 \uc788\ub294 \uc5f4\uac70 \ud0c0\uc785\uc774 \ud544\uc694\ud558\uba74 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch6/ITEM38"}},p=[{value:"\ubc30\uc5f4 \uc778\ub371\uc2a4\ub97c \uc5bb\uae30 \uc704\ud55c \ubc29\ubc95",id:"\ubc30\uc5f4-\uc778\ub371\uc2a4\ub97c-\uc5bb\uae30-\uc704\ud55c-\ubc29\ubc95",children:[{value:"ordinal() \u2192 \ud83c\udd67",id:"ordinal-\u2192-\ud83c\udd67",children:[]},{value:"EnumMap",id:"enummap",children:[]},{value:"\uc2a4\ud2b8\ub9bc\uc744 \uc0ac\uc6a9\ud55c Map \ucf54\ub4dc 1",id:"\uc2a4\ud2b8\ub9bc\uc744-\uc0ac\uc6a9\ud55c-map-\ucf54\ub4dc-1",children:[]},{value:"\uc2a4\ud2b8\ub9bc + EnumMap : \ub370\uc774\ud130\uc640 \uc5f4\uac70\ud0c0\uc785\uc758 \ub9e4\ud551",id:"\uc2a4\ud2b8\ub9bc--enummap--\ub370\uc774\ud130\uc640-\uc5f4\uac70\ud0c0\uc785\uc758-\ub9e4\ud551",children:[]}]},{value:"\ub2e4\ucc28\uc6d0 \uad00\uacc4 : \ub370\uc774\ud130\uc640 \uc5f4\uac70 \ud0c0\uc785\uc30d\uc758 \uc5f0\uacb0",id:"\ub2e4\ucc28\uc6d0-\uad00\uacc4--\ub370\uc774\ud130\uc640-\uc5f4\uac70-\ud0c0\uc785\uc30d\uc758-\uc5f0\uacb0",children:[{value:"\uc548\uc88b\uc740 \uc608: ordinal",id:"\uc548\uc88b\uc740-\uc608-ordinal",children:[]},{value:"\uc911\ucca9 EnumMap \ub370\uc774\ud130\uc640 \uc5f4\uac70 \ud0c0\uc785\uc30d\uc758 \uc5f0\uacb0",id:"\uc911\ucca9-enummap-\ub370\uc774\ud130\uc640-\uc5f4\uac70-\ud0c0\uc785\uc30d\uc758-\uc5f0\uacb0",children:[]}]}],u={toc:p};function o(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},u,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\ubc30\uc5f4 \uc778\ub371\uc2a4\ub97c \uc5bb\uae30 \uc704\ud55c \ubc29\ubc95"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"ordinal")," X \u2192 ",Object(r.b)("em",{parentName:"li"},"EnumMap"))),Object(r.b)("p",null,"\ub2e4\ucc28\uc6d0 \uad00\uacc4 \u2192 ",Object(r.b)("em",{parentName:"p"},"EnumMap<..., EnumMap<...>>")),Object(r.b)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub85c\uadf8\ub798\uba38\ub294 Enum.ordinal \uc744 \uc6ec\ub9cc\ud574\uc11c\ub294 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c \ud55c\ub2e4.","[35]"),Object(r.b)("h2",{id:"\ubc30\uc5f4-\uc778\ub371\uc2a4\ub97c-\uc5bb\uae30-\uc704\ud55c-\ubc29\ubc95"},"\ubc30\uc5f4 \uc778\ub371\uc2a4\ub97c \uc5bb\uae30 \uc704\ud55c \ubc29\ubc95"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"class Plant {\n    enum LifeCycle { ANNUAL, PERENNIAL, BIENNIAL }\n    \n    final String name;\n    final LifeCycle lifeCycle;\n    \n    Plant(String name, LifeCycle lifeCycle) {\n        this.name = name;   \n        this.lifeCycle = lifeCycle;\n    }\n\n    @Override public String toString() {\n        return name;\n    }\n}\n")),Object(r.b)("p",null,"\uc2dd\ubb3c\uc744 \uc0dd\uc560\uc8fc\uae30\ubcc4\ub85c \ucd1d 3\uac1c\uc758 \uc9d1\ud569\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uc790."),Object(r.b)("h3",{id:"ordinal-\u2192-\ud83c\udd67"},"ordinal() \u2192 \ud83c\udd67"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'// 1) \ubc30\uc5f4\uc740 \uc81c\ub124\ub9ad\uacfc \ud638\ud658\ub418\uc9c0 \uc54a\uc544 \ube44\uac80\uc0ac \ud615\ubcc0\ud658[35]\uc744 \uc218\ud589\ud574\uc57c \ud55c\ub2e4.\n// \uae54\ub054\ud558\uac8c \ucef4\ud30c\uc77c \ub418\uc9c0 \uc54a\uc744 \uac83.\nSet<Plant>[] plantsByLifeCycle\n         = (Set<Plant>[]) new Set[Plant.LifeCycle.values().length];\n\n// init\nfor (int i = 0; i < plantsByLifeCycle.length; i++) \n    plantsByLifeCycle[i] = new HashSet<>(); \n\nfor (Plant p : garden)\n    plantByLifeCycle[p.lifeCycle.ordinal()].add(p)\n\n// 2) \ubc30\uc5f4\uc740 \uac01 \uc778\ub371\uc2a4\uc758 \uc758\ubbf8\ub97c \uc54c\uc218 \uc5c6\uc5b4, \ucd9c\ub825 \uacb0\uacfc\uc5d0 \uc9c1\uc811 \ub808\uc774\ube14\uc744 \ub2ec\uc544\uc57c \ud55c\ub2e4.\n// \uc815\uc218\ub294 \ud0c0\uc785 \uc548\uc804\ud558\uc9c0 \uc54a\ub2e4. \u2192 ArrayIndexOutOfBoundException\nfor (int i = 0; i < plantsByLifeCycle.length; i++) {\n    System.out.printf("%s: %s%n",\n        Plant.LifeCycle.values()[i], plantsByLifeCycle[i]);\n}\n')),Object(r.b)("h3",{id:"enummap"},"EnumMap"),Object(r.b)("p",null,"\uc5f4\uac70 \ud0c0\uc785\uc744 \ud0a4\ub85c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uacc4\ud55c \uc544\uc8fc \ube60\ub978 Map \uad6c\ud604\uccb4 "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// EnumMap \uc758 \uc0dd\uc131\uc790\uac00 \ubc1b\ub294 \ud0a4 \ud0c0\uc785\uc758 Class \uac1d\uccb4\n// -> \ud55c\uc815\uc801 \ud0c0\uc785 \ud1a0\ud070, \ub7f0\ud0c0\uc784 \uc81c\ub124\ub9ad \ud0c0\uc785 \uc815\ubcf4\ub97c \uc81c\uacf5\ud568[33]\nMap<Plant.LifeCycle, Set<Plant>> plantsByLifeCycle = \n    new EnumMap<>(Plant.LifeCycle.class);\n\n// init\nfor (Plant.LifeCycle lc : Plant.LifeCycle.values())\n    plantsByLifeCycle.put(lc, new HashSet<>());\n\nfor (Plant p : garden)\n    planetsByLifeCycle.get(p.lifeCycle).add(p);\n\nSystem.out.printlnf(plantsByLifeCycle);\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc9e7\uace0 \uba85\ub8cc\ud568",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ub9f5\uc758 \ud0a4\uc778 \uc5f4\uac70 \ud0c0\uc785 \uadf8 \uc790\uccb4\ub85c \ucd9c\ub825\uc6a9 \ubb38\uc790\uc5f4\uc744 \uc81c\uacf5\ud558\uc5ec \ub808\uc774\ube14\uc774 \ud544\uc694 \uc5c6\uc74c"))),Object(r.b)("li",{parentName:"ul"},"\uc548\uc804\ud568",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ud615\ubcc0\ud658\uc744 \uc4f0\uc9c0 \uc54a\ub294\ub2e4."))),Object(r.b)("li",{parentName:"ul"},"\uc131\ub2a5\ub3c4 ordinal \uacfc \ube44\uacac\ub41c\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"EnumMap \ub0b4\ubd80\uc5d0\uc11c \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38")))),Object(r.b)("h3",{id:"\uc2a4\ud2b8\ub9bc\uc744-\uc0ac\uc6a9\ud55c-map-\ucf54\ub4dc-1"},"\uc2a4\ud2b8\ub9bc\uc744 \uc0ac\uc6a9\ud55c Map \ucf54\ub4dc 1"),Object(r.b)("p",null,"\uc0dd\uc560\uc8fc\uae30\uc5d0 \uc18d\ud558\ub294 \uc2dd\ubb3c\uc774 \uc788\uc744 \ub54c\ub9cc \ub9f5\uc744 \ub9cc\ub4e0\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"System.out.println(Arrays.stream(garden)\n        .collect(groupingBy(p -> p.lifeCycle)));   \n")),Object(r.b)("p",null,"EnumMap \uc774 \uc544\ub2cc \uace0\uc720\ud55c \ub9f5 \uad6c\ud604\uccb4\ub97c \uc0ac\uc6a9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"EnumMap \uc758 \uacf5\uac04 \uc131\ub2a5 \uc774\uc810\uc774 \uc0ac\ub77c\uc9d0")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Collectors.groupingBy \uba54\uc11c\ub4dc"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"mapFactory \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc6d0\ud558\ub294 \ub9f5 \uad6c\ud604\uccb4\ub97c \uba85\uc2dc\ud574 \ud638\ucd9c \ud560 \uc218 \uc788\ub2e4."))),Object(r.b)("h3",{id:"\uc2a4\ud2b8\ub9bc--enummap--\ub370\uc774\ud130\uc640-\uc5f4\uac70\ud0c0\uc785\uc758-\ub9e4\ud551"},"\uc2a4\ud2b8\ub9bc + EnumMap : \ub370\uc774\ud130\uc640 \uc5f4\uac70\ud0c0\uc785\uc758 \ub9e4\ud551"),Object(r.b)("p",null,"\uc2dd\ubb3c\uc758 \uc0dd\uc560\uc8fc\uae30 \ub2f9 \ud558\ub098\uc529\uc758 \uc911\ucca9 \ub9f5\uc744 \ub9cc\ub4e0\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"System.out.println(Arrays.stream(garden)\n                         .collect(groupingBy(p -> p.lifeCycle, \n                                            () -> new EnumMap<>(LifeCycle.class),\n                                            toSet())));\n")),Object(r.b)("h2",{id:"\ub2e4\ucc28\uc6d0-\uad00\uacc4--\ub370\uc774\ud130\uc640-\uc5f4\uac70-\ud0c0\uc785\uc30d\uc758-\uc5f0\uacb0"},"\ub2e4\ucc28\uc6d0 \uad00\uacc4 : \ub370\uc774\ud130\uc640 \uc5f4\uac70 \ud0c0\uc785\uc30d\uc758 \uc5f0\uacb0"),Object(r.b)("p",null,"\ud55c \uc0c1\ud0dc\uc5d0\uc11c \ub2e4\ub978 \uc0c1\ud0dc\ub85c\uc758 \uc804\uc774\ub97c \ubc18\ud658\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc790"),Object(r.b)("h3",{id:"\uc548\uc88b\uc740-\uc608-ordinal"},"\uc548\uc88b\uc740 \uc608: ordinal"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public enum Phase {\n    SOLID, LIQUID, GAS;\n\n    public enum Transition {\n        MELT, FREEZE, BOIL, CONDENSE, SUBLIME, DEPOSIT;\n\n        private static final Transition[][] TRANSITIONS = {\n            { null, MELT, SUBLIME },\n            { FREEZE, null, BOIL },\n            { DEPOSIT, CONDENSE, null }\n        };\n        // \ud55c \uc0c1\ud0dc\uc5d0\uc11c \ub2e4\ub978 \uc0c1\ud0dc\ub85c\uc758 \uc804\uc774\ub97c \ubc18\ud658\ud55c\ub2e4.\n        public static Transition from(Phase from, Phase to) {\n            return TRANSITIONS[from.ordinal()][to.ordinal()];\n        }\n\n    }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\ub294 ordinal \uacfc \ubc30\uc5f4 \uc778\ub371\uc2a4\uc758 \uad00\uacc4\ub97c \ubaa8\ub978\ub2e4.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Phase \ub098, Phase.Transition \uc5f4\uac70 \ud0c0\uc785\uc744 \uc218\uc815\ud558\uba74 \ud45c TRANSITIONS \ub97c \ud568\uaed8 \uc218\uc815\ud558\uc9c0 \uc54a\uac70\ub098 \uc798 \ubabb \uc218\uc815\ud558\uba74 \ub7f0\ud0c0\uc784 \uc624\ub958 \ubc1c\uc0dd"))),Object(r.b)("li",{parentName:"ul"},"ArrayIndexOutOfBoundsException, NullPointerException \uc744 \ub358\uc9c8 \uc218 \uc788\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc0c1\ud0dc\uac00\uc9c0\uc218\uac00 \ub298\uc5b4\ub098\uba74 \uc81c\uacf1\ud574\uc11c null \uce78\ub3c4 \uc99d\uac00\ud55c\ub2e4.")),Object(r.b)("h3",{id:"\uc911\ucca9-enummap-\ub370\uc774\ud130\uc640-\uc5f4\uac70-\ud0c0\uc785\uc30d\uc758-\uc5f0\uacb0"},"\uc911\ucca9 EnumMap \ub370\uc774\ud130\uc640 \uc5f4\uac70 \ud0c0\uc785\uc30d\uc758 \uc5f0\uacb0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public enum Phase {\n    SOLID, LIQUID, GAS;\n\n    public enum Transition {\n        MELT(SOLID, LIQUID), FREEZE(LIQUID, SOLID),\n        BOIL(LIQUID, GAS), CONDENSE(GAS, LIQUID),\n        SUBLIME(SOLID, GAS), DEPOSIT(GAS, SOLID);\n\n        private final Phase from;  \n        private final Phase to;\n\n        Transition(Phase from, Phase to) {\n            this.from = from;\n            this.to = to;\n        }\n        // \uc774\uc804 \uc0c1\ud0dc\uc5d0\uc11c "\uc774\ud6c4 \uc0c1\ud0dc\uc5d0\uc11c \uc804\uc774\ub85c\uc758 \ub9f5" \uc5d0 \ub300\uc751\uc2dc\ud0a4\ub294 \ub9f5\n        private static final Map<Phase, Map<Phase, Transition>> m = \n                Stream.of(values())\n                                          // \uc804\uc774\ub97c \uc774\uc804 \uc0c1\ud0dc\ub97c \uae30\uc900\uc73c\ub85c \ubb36\ub294\ub2e4.\n                      .collect(groupingBy(t -> t.from, \n                                         () -> new EnumMap<>(Phase.class),\n                                         // \uc774\ud6c4 \uc0c1\ud0dc\ub97c \uc804\uc774\uc5d0 \ub300\uc751 \uc2dc\ud0a4\ub294 EnumMap \uc0dd\uc131\n                                         toMap(t -> t.to, t -> t,\n                                               (x, y) -> y, \n                                               () -> new EnumMap<>(Phase.class))\n                      ));\n    }\n}\n')),Object(r.b)("p",null,"\uc0c8\ub85c\uc6b4 \uc0c1\ud0dc \ucd94\uac00\ud558\uae30"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public enum Phase {\n    SOLID, LIQUID, GAS, PLASMA;\n\n    public enum Transition {\n        MELT(SOLID, LIQUID), FREEZE(LIQUID, SOLID),\n        BOIL(LIQUID, GAS), CONDENSE(GAS, LIQUID),\n        SUBLIME(SOLID, GAS), DEPOSIT(GAS, SOLID),\n        IONIZE(GAS, PLASMA), DEIONIZE(PLAZMA, GAS);\n        // ...\n    }\n}\n")))}o.isMDXComponent=!0},276:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return O}));var t=a(0),l=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=l.a.createContext({}),o=function(e){var n=l.a.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},b=function(e){var n=o(e.components);return l.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},s=l.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=o(a),s=t,O=b["".concat(i,".").concat(s)]||b[s]||m[s]||r;return a?l.a.createElement(O,c(c({ref:n},u),{},{components:a})):l.a.createElement(O,c({ref:n},u))}));function O(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<r;u++)i[u]=a[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);