(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{458:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),i=(t(0),t(475)),u={},c={unversionedId:"design-pattern/iterator pattern",id:"design-pattern/iterator pattern",isDocsHomePage:!1,title:"iterator pattern",description:"\uc774\ud130\ub808\uc774\ud130 \ud328\ud134",source:"@site/docs/design-pattern/iterator pattern.md",slug:"/design-pattern/iterator pattern",permalink:"/docs/design-pattern/iterator pattern",version:"current",lastUpdatedAt:1626882853,sidebar:"designPattern"},l=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:l};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\uc774\ud130\ub808\uc774\ud130-\ud328\ud134"},"\uc774\ud130\ub808\uc774\ud130 \ud328\ud134"),Object(i.b)("p",null,"\uceec\ub809\uc158 \uad6c\ud604 \ubc29\ubc95\uc744 \ub178\ucd9c\uc2dc\ud0a4\uc9c0 \uc54a\uc73c\uba74\uc11c,\n\uadf8 \uc9d1\ud569\uccb4 \uc548\uc5d0 \ub4e4\uc5b4\uc788\ub294 \ubaa8\ub4e0 \ud56d\ubaa9\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ubc29\ubc95"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\ud56d\ubaa9\uc5d0 \uc811\uadfc\ud558\ub294 \ubc29\ubc95\uc740 \ubc18\ubcf5\uc790 \uac1d\uccb4\uc5d0\uc11c \ub9de\uac8c \ub41c\ub2e4.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\uc9d1\ud569\uccb4\ub294 \ubc18\ubcf5\uc791\uc5c5\uc5d0\uc11c \uc190\uc744 \ub5bc\uace0 \uac1d\uccb4 \uceec\ub809\uc158 \uad00\ub9ac\uc5d0\uc11c \uc804\ub150\ud560 \uc218 \uc788\ub2e4.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\uc5b4\ub5a4 \uc9d1\ud569\uccb4\uc5d0 \ub300\ud574\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub2e4\ud615\uc801\uc778 \ucf54\ub4dc\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4."))),Object(i.b)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),Object(i.b)("p",null,"\ub450\uac1c\uc758 \uc11c\ub85c\ub2e4\ub978 \uc2dd\ub2f9\uc774\uc788\uace0 \uac01\uac01\uc758 \uc2dd\ub2f9\uc5d0\uc11c \uba54\ub274\ub97c \uad6c\ud604\ud55c\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uc790."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class MenuItem {\n    String name;\n    String description;\n    String vegetarian;\n    double price;\n\n    public MenuItem(String name, String description, boolean vegetarian, double price){\n        this.name = name;\n        this.description = description;\n        this.vegetarian = vegetarian;\n        this.price = price;\n    }\n    public String getName() {\n        return name;\n    }\n    public String getDescription() {\n        return description;\n    }\n    public double getPrice() {\n        return price;\n    }\n    public boolean isVegetarian() {\n        return vegetarian;\n    }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class PancakeHouseMenu {\n    ArrayList<MenuItem> menuItems;\n\n    public PancakeHouseMenu() {\n        this.menuItems = new ArrayList();\n        additem("K&B \ud32c\ucf00\uc774\ud06c \uc138\ud2b8","\uc2a4\ud06c\ub7a8\ube14\ub4dc \uc5d0\uadf8\uc640 \ud1a0\uc2a4\ud2b8\uac00 \uacc1\ub4e4\uc5ec\uc9c4 \ud39c\ucf00\uc774\ud06c",true,2.99);\n        additem("\ub808\uade4\ub7ec \ud32c\ucf00\uc774\ud06c \uc138\ud2b8","\ub2ec\uac40 \ud6c4\ub77c\uc774\uc640 \uc18c\uc2dc\uc9c0\uac00 \uacc1\ub4e4\uc5ec\uc9c4 \ud39c\ucf00\uc774\ud06c",false,2.99);\n        additem("\ube14\ub8e8\ubca0\ub9ac \ud39c\ucf00\uc774\ud06c","\uc2e0\uc120\ud55c \ube14\ub8e8\ubca0\ub9ac\uc640 \ube14\ub8e8\ubca0\ub9ac \uc2dc\ub7fd\uc73c\ub85c \ub9cc\ub4e0 \ud39c\ucf00\uc774\ud06c",true,3.49);\n        additem("\uc640\ud50c","\uc640\ud50c, \ucde8\ud5a5\uc5d0 \ub530\ub77c \ube14\ub8e8\ubca0\ub9ac\ub098 \ub538\uae30\ub97c \uc5b9\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",true,3.59);\n    }\n    public void additem(string name, String description, boolean vegetarian, double price) {\n        MenuItem menuItem = new MenuItem(name, description, vegetarian, price);\n        menuItem.add(menuItem);\n    }\n    public ArrayList<MenuItem> getMenuItems() {\n        return menuItems;\n    }\n    //\uae30\ud0c0 \uba54\uc18c\ub4dc\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class DinerMenu {\n    static final int MAX_ITEMS = 6;\n    int numberOfItems = 0;\n    MenuItem[] menuItems;\n\n    public DinerMenu() {\n        this.menuItems = new MenuItem[MAX_ITEMS];\n        additem("\ucc44\uc2dd\uc8fc\uc758\uc790\uc6a9 BLT","\ud1b5\ubc00 \uc704\uc5d0 (\uc2dd\ubb3c\uc131)\ubca0\uc774\ucee8, \uc0c1\ucd94, \ud1a0\ub9c8\ud1a0\ub97c \uc5b9\uc740 \uba54\ub274",true,2.99);\n        additem("BLT","\ud1b5\ubc00 \uc704\uc5d0 \ubca0\uc774\ucee8, \uc0c1\ucd94, \ud1a0\ub9c8\ud1a0\ub97c \uc5b9\uc740 \uba54\ub274",false,2.99);\n        additem("\uc624\ub298\uc758 \uc2a4\ud504","\uac10\uc790 \uc0d0\ub7ec\ub4dc\ub97c \uacc1\ub4e4\uc778 \uc624\ub298\uc758 \uc2a4\ud504",false,3.29);\n        additem("\ud56b\ub3c4\uadf8","\uc0ac\uc6cc\ud06c\ub77c\uc6b0\ud2b8, \uac16\uc740 \uc591\ub150, \uc591\ud30c, \uce58\uc988\uac00 \uacc1\ub4e4\uc5ec\uc9c4 \ud56b\ub3c4\uadf8",false,3.05);\n    }\n    public void additem(string name, String description, boolean vegetarian, double price) {\n        MenuItem menuItem = new MenuItem(name, description, vegetarian, price);\n        if(nemberOfItems >= MAX_ITEMS){\n            System.err.println("\uc8c4\uc1a1\ud569\ub2c8\ub2e4, \uba54\ub274\uac00 \uaf49 \ucc3c\uc2b5\ub2c8\ub2e4. \ub354 \uc774\uc0c1 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");\n        } else {\n            menuItems[numberOfItems] = menuItem;\n            numberOfItems = numberOfItems+1;\n        }\n    }\n    public MenuItem[] getMenuItems() {\n        return menuItems;\n    }\n    //\uae30\ud0c0 \uba54\uc18c\ub4dc\n}\n')),Object(i.b)("p",null,"\uac01 \uba54\ub274\uc758 \ubaa8\ub4e0 \ud56d\ubaa9 \ucd9c\ub825"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"PancakeHouseMenu pancakeHouseMenu = new PancakeHouseMenu();\nArrayList<MenuItem> breakfastItems = pancakeHouseMenu.getMenuItems();\n\nDinerMenu dinerMenu = new DinerMenu();\nMenuItem[] lunchItems = dinerMenu.getMenuItems();\n\nfor (int i=0; i < breakfaseItems.size(); i++) {\n    MenuItem menuItem = breakfastItems.get(i);\n    System.out.println(menuItem.getName());\n    System.out.println(menuItem.getPrice());\n    System.out.println(menuItem.getDescription());\n}\nfor (int i=0; i < lunchItems.length; i++) {\n    MenuItem menuItem = lunchItems[i];\n    System.out.println(menuItem.getName());\n    System.out.println(menuItem.getPrice());\n    System.out.println(menuItem.getDescription());\n}\n")),Object(i.b)("p",null,"\uc704\uc640 \uac19\uc774 \ub450\uac00\uc9c0 \uc11c\ub85c \ub2e4\ub978 \uba54\ub274 \ud45c\ud604 \ubc29\uc2dd\uc774 \uc788\uc744 \ub54c \uc5b4\ub5a4\ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc744\uae4c.     "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/89864164-70d21a80-dbe6-11ea-9962-564b23ee5152.png",alt:"image"}),"\n\ub0b4\uac00 \uc774\ud574\ud55c \uadf8\ub9bc\uc774\ub2e4.\nPancake \uba54\ub274\uc640 Diner \uba54\ub274\uc5d0\ub294 \uc21c\ud68c\ud558\ub294 \uba54\uc11c\ub4dc\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 for \ubb38\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubcfc \uc218 \uc788\ub2e4."),Object(i.b)("p",null,"\ubc18\ubcf5\uc801\uc778 \uc791\uc5c5\uc744 \ucea1\uc290\ud654\ud55c Iterator \ub77c\ub294 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Iterator<MenuItem> iterator = breakfastMenu.createIterator();\nwhile (iterator.hasNext()) {\n    MenuItem menuItem = iterator.next();\n}\n\nIterator<MenuItem> iterator2 = lunchMenu.createIterator();\nwhile (iterator2.hasNext()) {\n    MenuItem menuItem = iterator2.next();\n}\n")),Object(i.b)("p",null,"java.util.Iterator \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud55c Iterator \ub97c \uc801\uc6a9\uc2dc\ucf1c\ubcf4\uc790."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public interface Menu {\n    public Iterator<MenuItem> createIterator();\n}\n")),Object(i.b)("p",null,"ArrayList \uceec\ub809\uc158\uc740 \ubc18\ubcf5\uc790\ub97c \ub9ac\ud134\ud558\ub294 iterator() \ub77c\ub294 \uba54\uc18c\ub4dc\uac00 \uc788\uc74c."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class PancakeHouseMenu implements Menu {\n    ArrayList<MenuItem> menuItems;\n    // \ub3d9\uc77c\ud55c addItem, getMenuItems \uba54\uc11c\ub4dc\uc640 \uc0dd\uc131\uc790\n    @Override\n    public Iterator<MenuItem> createIterator() {\n        return menuItems.iterator();\n    }   \n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class DinerMenu implements Menu {\n    // \ub3d9\uc77c\n\n    @Override\n    public Iterator<MenuItem> createIterator() {\n        return new DinerMenuIterator(menuItems);\n    }      \n}\n")),Object(i.b)("p",null,"Iterator \ub97c \uc9c1\uc811 implements \ud558\uc5ec \uad6c\ud604"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class DinerMenuIterator implements Iterator<MenuItem> {\n    MenuItems[] list;\n    int position = 0;\n    \n    public DinerMenuIterator(MenuItem[] list) {\n        this.list = list;   \n    }\n\n    @Override\n    public MenuItem next() {\n        MenuItem menuItem = list[position];\n        position += 1;\n        return menuItem;\n    }\n    \n    @Override\n    public boolean hasNext() {\n        if (position >= list.length || list[position] == null) return false;\n        return true;\n    }\n    @Override\n    public void remove() {\n        if (position <= 0) \n            throw new IllegalStateException('next() \uac00 \ud55c\ubc88\ub3c4 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc74c.');\n        if (list[position - 1] != null) {\n            for (int i = position -1; i < (list.length - 1); i++) {\n                list[i] = list[i + 1];\n            }\n            list[list.length - 1] = null;\n        }\n    }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class Waitress {\n    ArrayList<Menu> menus;\n    \n    public Waitress(ArrayList<Menu> menus) {\n        this.menus = menus;\n    }\n    public void printMenu () {\n        Iterator menuIterator = menus.createIterator();\n        while(menuIterator.hasNext()) {\n            Menu menu = menuIterator.next();\n            printMenu(menu);            \n        }\n    }  \n    private void printMenu(Iterator<MenuItem> iterator) {\n        while(iterator.hasNext()) {\n            MenuItem menuItem = iterator.next();\n            System.out.println(menuItem.getName());\n            System.out.println(menuItem.getPrice());\n            System.out.println(menuItem.getDescription());\n        }\n    } \n}\n")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31977543/89864582-22714b80-dbe7-11ea-847e-df7f80ee755d.png",alt:"image"}),"\n\ud32c\ucf00\uc78c \uba54\ub274\uc640 \ub514\ub108 \uba54\ub274\ub294 \uac15\uc81c\ub85c Iterator \ub97c \ubc18\ud658\ud558\ub294 createIterator \uba54\uc11c\ub4dc\ub97c \uad6c\ud604\ud558\uc5ec\uc57c \ud55c\ub2e4.\n\ud32c\ucf00\uc78c\uc740 createIterator \ub97c \uad6c\ud604\ud560 \ub54c,\nMenuItem \uac00 ArrayList \uceec\ub809\uc158\uc774\uae30 \ub54c\ubb38\uc5d0 \ubc18\ubcf5\uc790\ub97c \ub9ac\ud134\ud558\ub294 iterator() \ub77c\ub294 \uba54\uc18c\ub4dc\uac00 \uc788\ub2e4\ub294 \uc810\uc744 \uc774\uc6a9\ud558\uc600\uace0. "),Object(i.b)("p",null,"\ub514\ub108 \uba54\ub274\ub294 createIterator \ub97c \uad6c\ud604\ud560 \ub54c,\nDinerMenuIterator \ub77c\ub294 Java \uc758 Iterator \ub97c \uc9c1\uc811 implement \ud558\ub294 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5b4.\n\uadf8 \uc548\uc5d0\uc11c next, hasNext, remove \ub4f1\uc744 \ucee4\uc2a4\ud140\ud558\uc5ec \uad6c\ud604\ud558\uc600\ub2e4."),Object(i.b)("p",null,"Waitress \ub294 \ubb34\uc2a8 \uba54\ub274\ub4e0 \uc0dd\uc131\uc790\uc758 \uc778\uc790\ub85c \ubc1b\uc744 \uc218 \uc788\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4.\n\uadf8\ub798\uc11c \ud32c\ucf00\uc775\uc774\ub4e0 \ub514\ub108\uc774\ub4e0 \ud32c\ucf00\uc78c+\ub514\ub108 \uc774\ub4e0 \uc0dd\uc131\uc790\uc758 \uc778\uc790\ub85c \ub118\uae38 \uc218 \uc788\ub2e4."),Object(i.b)("p",null,"printMenu () \uba54\uc11c\ub4dc\ub294 \ud39c\ucf00\uc78c\uacfc \ub514\ub108\uac00 \uacf5\ud1b5\uc801\uc73c\ub85c \uac00\uc9c0\uace0 \uc788\ub294 createIterator \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \ubc18\ubcf5\uc790 \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c\ub2e4. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class MenuTestDrive {\n    public static void main(String args[]) {\n        ArrayList<Menu> menuList = new ArrayList();\n        menuList.add(new PancakgeHouseMenu());\n        menuList.add(new DinerMenu());\n    \n        Waitress waitress = new Waitress(menuList);\n        waitress.printMenu();\n    }\n}\n")),Object(i.b)("p",null,"\uc5b4\ub835\ub2e4. \ub0b4\uac00 \uc774\ud574\ud55c \uacb0\ub860\uc740 "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\uba54\ub274\uc640 \ubc18\ubcf5 \uba54\uc11c\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uac1d\uccb4\ub97c \ub9cc\ub4e0\ub2e4. "),Object(i.b)("li",{parentName:"ol"},"\uba54\ub274\uc640 \ubc18\ubcf5 \uba54\uc11c\ub4dc\ub77c\ub294 \ub3d9\uc77c\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\uba74, \uacf5\ud1b5\uc801\uc73c\ub85c \ud1b5\uc77c\ub41c \ud589\ub3d9\uc744 \ud558\ub294 \ud074\ub798\uc2a4(waitress)\uc758 \uba54\uc11c\ub4dc\ub4e4(\uc7ac\ud65c\uc6a9) \ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.")),Object(i.b)("p",null,"JS \uc5d0\uc11c\ub294 Iteration \ud504\ub85c\ud1a0\ucf5c\uc744 \ub9cc\uc871\ud558\uba74 spread, for..of \ub4f1\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. !"),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://jusungpark.tistory.com/25"},"https://jusungpark.tistory.com/25"))))}m.isMDXComponent=!0},475:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),m=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},o=function(e){var n=m(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),o=m(t),b=r,d=o["".concat(u,".").concat(b)]||o[b]||p[b]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var s=2;s<i;s++)u[s]=t[s];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);