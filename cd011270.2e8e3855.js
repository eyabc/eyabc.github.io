(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(7),a=(t(0),t(164)),l={},c={unversionedId:"java/effective-java/ch2/ITEM2",id:"java/effective-java/ch2/ITEM2",isDocsHomePage:!1,title:"ITEM2",description:"ITEM2 \uc0dd\uc131\uc790\uc5d0 \ub9e4\uac1c\ubcc0\uc218\uac00 \ub9ce\ub2e4\uba74 \ube4c\ub354\ub97c \uace0\ub824\ud558\ub77c",source:"@site/docs/java/effective-java/ch2/ITEM2.md",slug:"/java/effective-java/ch2/ITEM2",permalink:"/docs/java/effective-java/ch2/ITEM2",version:"current"},s=[{value:"\uc5ec\ub7ec \uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218\uc758 \uba87\uac00\uc9c0 \ub300\uc751 \ubc29\ubc95\ub4e4",id:"\uc5ec\ub7ec-\uc120\ud0dd\uc801-\ub9e4\uac1c\ubcc0\uc218\uc758-\uba87\uac00\uc9c0-\ub300\uc751-\ubc29\ubc95\ub4e4",children:[{value:"\uc810\uce35\uc801 \uc0dd\uc131\uc790 \ud328\ud134 telescoping constructor pattern",id:"\uc810\uce35\uc801-\uc0dd\uc131\uc790-\ud328\ud134-telescoping-constructor-pattern",children:[]},{value:"\uc790\ubc14\ube48\uc988 \ud328\ud134 JavaBeans Pattern",id:"\uc790\ubc14\ube48\uc988-\ud328\ud134-javabeans-pattern",children:[]}]},{value:"\ube4c\ub354 \ud328\ud134 Builder pattern",id:"\ube4c\ub354-\ud328\ud134-builder-pattern",children:[]},{value:"\ube4c\ud130 \ud328\ud134\uc758 \ud2b9\uc9d5",id:"\ube4c\ud130-\ud328\ud134\uc758-\ud2b9\uc9d5",children:[]},{value:"\uacc4\uce35\uc801\uc73c\ub85c \uc124\uacc4\ub41c \ud074\ub798\uc2a4\uc640 \ud568\uaed8 \uc4f0\uae30 \uc88b\ub2e4.",id:"\uacc4\uce35\uc801\uc73c\ub85c-\uc124\uacc4\ub41c-\ud074\ub798\uc2a4\uc640-\ud568\uaed8-\uc4f0\uae30-\uc88b\ub2e4",children:[]}],o={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"item2-\uc0dd\uc131\uc790\uc5d0-\ub9e4\uac1c\ubcc0\uc218\uac00-\ub9ce\ub2e4\uba74-\ube4c\ub354\ub97c-\uace0\ub824\ud558\ub77c"},"ITEM2 \uc0dd\uc131\uc790\uc5d0 \ub9e4\uac1c\ubcc0\uc218\uac00 \ub9ce\ub2e4\uba74 \ube4c\ub354\ub97c \uace0\ub824\ud558\ub77c"),Object(a.b)("p",null,"\uc815\uc801 \ud329\ud130\ub9ac\uc640 \uc0dd\uc131\uc790\uc758 \uacf5\ud1b5 \uc81c\uc57d"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218\uac00 \ub9ce\uc744 \ub54c \ub300\uc751\uc758 \uc5b4\ub824\uc6c0")),Object(a.b)("h2",{id:"\uc5ec\ub7ec-\uc120\ud0dd\uc801-\ub9e4\uac1c\ubcc0\uc218\uc758-\uba87\uac00\uc9c0-\ub300\uc751-\ubc29\ubc95\ub4e4"},"\uc5ec\ub7ec \uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218\uc758 \uba87\uac00\uc9c0 \ub300\uc751 \ubc29\ubc95\ub4e4"),Object(a.b)("h3",{id:"\uc810\uce35\uc801-\uc0dd\uc131\uc790-\ud328\ud134-telescoping-constructor-pattern"},"\uc810\uce35\uc801 \uc0dd\uc131\uc790 \ud328\ud134 telescoping constructor pattern"),Object(a.b)("p",null,"\ud655\uc7a5\ud558\uae30 \uc5b4\ub824\uc6b4 \ud2b9\uc9d5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public class NutritionFacts {\n    private final int servingSize;  // required\n    private final int servings;     // required\n    private final int calories;     // options         \n    private final int fat;          // options\n    private final int sodium;       // options\n    private final int carbohydrate; // options\n    \n    public NutritionFacts(int servingSize, int servings) {\n        this(servingSize, servings, 0);\n    }\n    \n    public NutritionFacts(int servingSize, int servings, int calories) {\n        this(servingSize, servings, calories, 0);\n    }\n\n    // ... \n    \n    public NutritionFacts(int servingSize, int servings, int calories, int fat, int sodium, int carbohydrate) {\n        this.servingSize = servingSize;\n        this.servings = servings;\n        this.calories = calories;\n        this.fat = fat;\n        this.sodium = sodium;\n        this.carbohydrate = carbohydrate;\n    }\n\n}\n")),Object(a.b)("p",null,"\ub2e8\uc810"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790\uac00 \uc124\uc815\ud558\uae30 \uc6d0\uce58\uc54a\uc740 \ub9e4\uac1c\ubcc0\uc218\uae4c\uc9c0 \uac12\uc744 \uc9c0\uc815\ud574\uc918\uc57c \ud55c\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ub9e4\uac1c \ubcc0\uc218\uac00 \ub9ce\uc544\uc9c0\ub9cc \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uac70\ub098 \uc77d\uae30 \uc5b4\ub835\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ub9e4\uac1c\ubcc0\uc218\uc758 \uc21c\uc11c\ub97c \ubc14\uafd4 \uac74\ub124\uc918\ub3c4, \ub7f0\ud0c0\uc784\uc5d0 \uc5c9\ub6b1\ud55c \ub3d9\uc791\uc744 \ud558\uac8c \ub428","[51]")),Object(a.b)("h3",{id:"\uc790\ubc14\ube48\uc988-\ud328\ud134-javabeans-pattern"},"\uc790\ubc14\ube48\uc988 \ud328\ud134 JavaBeans Pattern"),Object(a.b)("p",null,"\ub9e4\uac1c \ubcc0\uc218\uac00 \uc5c6\ub294 \uc0dd\uc131\uc790\ub85c \uac1d\uccb4\ub97c \ub9cc\ub4e0 \ud6c4, setter \uba54\uc11c\ub4dc \ud638\ucd9c\ud558\uc5ec \uc6d0\ud558\ub294 \uac12\uc744 \uc124\uc815"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public class NutritionFacts {\n    private int servingSize = -1;   // required \uae30\ubcf8\uac12 \uc5c6\uc74c\n    private int servings = -1;      // required \uae30\ubcf8\uac12 \uc5c6\uc74c\n    private int calories = 0;\n    private int fat = 0;\n    private int sodium = 0;\n    private int carbohydrate = 0;\n    \n    public NutritionFacts() {}\n    \n    public void setServingSize(int val) { servingSize = val; }\n    public void setServings(int val) {servings = val; }\n    // ...\n}\n")),Object(a.b)("p",null,"..."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"class SomeWhere {\n    NutritionFacts cocaCola = new NutritionFacts();\n    cocaCola.setServingSize(240);\n    cocaCola.setServings(8);\n    // ...\n}\n")),Object(a.b)("p",null,"\ub2e8\uc810 "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\uac1d\uccb4 \ud558\ub098\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uba54\uc11c\ub4dc\ub97c \uc5ec\ub7ec\uac1c \ud638\ucd9c\ud574\uc57c \ud568"),Object(a.b)("li",{parentName:"ol"},"\uac1d\uccb4 \uc644\uc131 \uc804\uae4c\uc9c0 \uc77c\uad00\uc131 consistency \uac00 \ubb34\ub108\uc9c4 \uc0c1\ud0dc",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784, \ub514\ubc84\uae45 \ubb38\uc81c"))),Object(a.b)("li",{parentName:"ol"},"\ud074\ub798\uc2a4\ub97c \ubd88\ubcc0\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc5c6\ub2e4.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc \uc548\uc815\uc131\uc744 \uc5bb\uc73c\ub824\uba74 \ucd94\uac00 \uc791\uc5c5 \ud544\uc694")))),Object(a.b)("h2",{id:"\ube4c\ub354-\ud328\ud134-builder-pattern"},"\ube4c\ub354 \ud328\ud134 Builder pattern"),Object(a.b)("p",null,"\uc810\uce35\uc801 \uc0dd\uc131\uc790 \ud328\ud134\uacfc \uc790\ubc14\ube48\uc988 \ud328\ud134\uc758 \uc7a5\uc810\ub9cc \ucde8\ud588\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public class NutritionFacts {\n    // final \ub85c \uc120\uc5b8 -> \ubd88\ubcc0\n    private final int servingSize;\n    private final int servings;\n    private final int calories; \n    // ...\n    \n    public static class Builder {\n        // \ud544\uc218 \ub9e4\uac1c \ubcc0\uc218\n        private final int servingSize;\n        private final int servings;\n    \n        // \uc120\ud0dd \ub9e4\uac1c \ubcc0\uc218 - \uae30\ubcf8\uac12\uc73c\ub85c \ucd08\uae30\ud654\n        private int calories = 0;\n        // ...\n        \n        public Builder(int servingSize, int servings) {\n            this.servingSize = servingSize;\n            this.servings = servings;\n        }\n    \n        public Builder calories(int val) {\n            this.calories = val;\n            // \uc5f0\uc1c4\uc801 \ud638\ucd9c : fluent API, method chaining\n            return this;\n        }\n        // ...\n        \n        public NutritionFacts build() {\n            return new NutritionFacts(this);\n        }\n    }\n    private NutritionFacts(Builder builder) {\n        servingSize = builder.servingSize;\n        // ...\n    }\n}\n\nclass Client {\n    NutritionFacts cocaCola = new NutritionFacts.Builder(240, 8)\n                                                .calories(100)\n                                                // ...\n                                                .build();\n}\n")),Object(a.b)("h2",{id:"\ube4c\ud130-\ud328\ud134\uc758-\ud2b9\uc9d5"},"\ube4c\ud130 \ud328\ud134\uc758 \ud2b9\uc9d5"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc4f0\uae30/\uc77d\uae30 \uac00 \uc218\uc6d4\ud568"),Object(a.b)("li",{parentName:"ol"},"\uac01\uac01\uc758 \uccb4\uc774\ub2dd \uba54\uc11c\ub4dc\uc5d0\uc11c \uc720\ud6a8\uc131 \uac80\uc0ac \ucf54\ub4dc\ub97c \uc0bd\uc785\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ucf54\ub4dc\uac00 \uc7a5\ud669\ud574\uc11c \ub9e4\uac1c\ubcc0\uc218\uac00 4\uac1c \uc774\uc0c1\uc740 \ub418\uc5b4\uc57c \uac12\uc5b4\uce58\ub97c \ud55c\ub2e4.")),Object(a.b)("h2",{id:"\uacc4\uce35\uc801\uc73c\ub85c-\uc124\uacc4\ub41c-\ud074\ub798\uc2a4\uc640-\ud568\uaed8-\uc4f0\uae30-\uc88b\ub2e4"},"\uacc4\uce35\uc801\uc73c\ub85c \uc124\uacc4\ub41c \ud074\ub798\uc2a4\uc640 \ud568\uaed8 \uc4f0\uae30 \uc88b\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"public abstract class Pizza {\n    public enum Topping { HAM, MUSHROOM, ONION, PEPPER, SAUSAGE }\n    final Set<Topping> toppings;\n\n    abstract static class Builder<T extends Builder<T>> { // [30]\n        EnumSet<Topping> toppings = EnumSet.noneOf(Topping.class);\n        public T addTopping(Topping topping) {\n            toppings.add(Object.requiredNonNull(topping));\n            return self;\n        }\n\n        abstract Pizza build(); \n    \n        // \ud558\uc704 \ud074\ub798\uc2a4\ub294 \uc774 \uba54\uc11c\ub4dc\ub97c override \ud558\uc5ec this \ub97c \ubc18\ud658\ud558\ub3c4\ub85d \ud574\uc57c \ud55c\ub2e4. \n        // \ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c \ud615 \ubcc0\ud658\uc744 \ud558\uc9c0 \uc54a\uace0\ub3c4 \uba54\uc11c\ub4dc \uc5f0\uc1c4 \uc9c0\uc6d0.\n        protected abstract T self();\n\n    }\n    \n    Pizza(Builder<?> builder) {\n        toppings = builder.toppings.clone(); // [50]\n    }      \n}\n\npublic class NyPizza extends Pizza {\n    public enum Size { SMALL, MEDIUM, LARGE }\n    private final Size size;\n        \n    public static class Builder extends Pizza.Builder<Builder> {\n        private final Size size;\n        \n        public Builder(Size size) {\n            this.size = Objects.requiredNonNull(size);\n        }\n\n        // \uad6c\uccb4 \ud558\uc704 \ud074\ub798\uc2a4\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \uc120\uc5b8 -> \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud615 \ubcc0\ud658\uc5d0 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uace0\ub3c4 \ube4c\ub354 \uc0ac\uc6a9\uac00\ub2a5\n        @Override public NyPizza build() {\n            return new NyPizza(this);\n        }\n    \n        @Override protected Builder self() {\n            return this;\n        }   \n    }\n\n    private NyPizza(Builder builder) {\n        super(builder);\n        size = builder.size;\n    }\n}\n\nclass Client {\n    NyPizza pizza = new NyPizza.Builder(NyPizza.Size.SMALL)\n                                .addTopping(Pizza.Topping.SAUSAGE)\n                                .addTopping(Pizza.Topping.ONION)\n                                .build();\n}\n")))}p.isMDXComponent=!0},164:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return v}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,v=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return t?r.a.createElement(v,c(c({ref:n},o),{},{components:t})):r.a.createElement(v,c({ref:n},o))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<a;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);