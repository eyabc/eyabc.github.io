(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return o}));var a=t(3),c=(t(0),t(441));const i={title:"39. \uba85\uba85 \ud328\ud134\ubcf4\ub2e4 \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\ub77c"},l={unversionedId:"java/effective-java/ch6/ITEM39",id:"java/effective-java/ch6/ITEM39",isDocsHomePage:!1,title:"39. \uba85\uba85 \ud328\ud134\ubcf4\ub2e4 \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\ub77c",description:"\uc560\ub108\ud14c\uc774\uc158\uc73c\ub85c \ud560 \uc218 \uc788\ub294 \uc77c\uc744 \uba85\uba85 \ud328\ud134\uc73c\ub85c \ucc98\ub9ac\ud560 \uc774\uc720\ub294 \uc5c6\ub2e4.",source:"@site/docs/java/effective-java/ch6/ITEM39.md",slug:"/java/effective-java/ch6/ITEM39",permalink:"/docs/java/effective-java/ch6/ITEM39",version:"current",sidebar:"effectiveJava",previous:{title:"38. \ud655\uc7a5\ud560 \uc218 \uc788\ub294 \uc5f4\uac70 \ud0c0\uc785\uc774 \ud544\uc694\ud558\uba74 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch6/ITEM38"},next:{title:"40. @Override \uc560\ub108\ud14c\uc774\uc158\uc744 \uc77c\uad00\ub418\uac8c \uc0ac\uc6a9\ud558\ub77c",permalink:"/docs/java/effective-java/ch6/ITEM40"}},s=[{value:"\uba85\uba85 \ud328\ud134\uc758 \ub2e8\uc810",id:"\uba85\uba85-\ud328\ud134\uc758-\ub2e8\uc810",children:[]},{value:"\uc560\ub108\ud14c\uc774\uc158",id:"\uc560\ub108\ud14c\uc774\uc158",children:[{value:"\uba54\ud0c0\uc560\ub108\ud14c\uc774\uc158 meta-annotation",id:"\uba54\ud0c0\uc560\ub108\ud14c\uc774\uc158-meta-annotation",children:[]},{value:"\ub9c8\ucee4 (marker) \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785 \uc120\uc5b8",id:"\ub9c8\ucee4-marker-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785-\uc120\uc5b8",children:[]},{value:"\ub9e4\uac1c\ubcc0\uc218 \ud558\ub098\ub97c \ubc1b\ub294 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785",id:"\ub9e4\uac1c\ubcc0\uc218-\ud558\ub098\ub97c-\ubc1b\ub294-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785",children:[]},{value:"\ubc30\uc5f4 \ub9e4\uac1c\ubcc0\uc218\ub97c \ubc1b\ub294 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785 1",id:"\ubc30\uc5f4-\ub9e4\uac1c\ubcc0\uc218\ub97c-\ubc1b\ub294-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785-1",children:[]},{value:"\ubc30\uc5f4 \ub9e4\uac1c\ubcc0\uc218\ub97c \ubc1b\ub294 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785 2 <em>@Repeatable</em>",id:"\ubc30\uc5f4-\ub9e4\uac1c\ubcc0\uc218\ub97c-\ubc1b\ub294-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785-2-repeatable",children:[]}]}],r={toc:s};function o({components:e,...n}){return Object(c.b)("wrapper",Object(a.a)({},r,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\uc560\ub108\ud14c\uc774\uc158\uc73c\ub85c \ud560 \uc218 \uc788\ub294 \uc77c\uc744 \uba85\uba85 \ud328\ud134\uc73c\ub85c \ucc98\ub9ac\ud560 \uc774\uc720\ub294 \uc5c6\ub2e4."),Object(c.b)("p",null,"\uc790\ubc14 \ud504\ub85c\uadf8\ub798\uba38\ub77c\uba74 \uc608\uc678 \uc5c6\uc774 \uc790\ubc14\uac00 \uc81c\uacf5\ud558\ub294 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785\ub4e4\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),Object(c.b)("p",null,"\uc804\ud1b5\uc801 \ub3c4\uad6c\uc640 \ud504\ub808\uc784\uc6cc\ud06c ~JUnit3"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc \uc774\ub984\uc744 ",Object(c.b)("em",{parentName:"li"},"test")," \ub85c \uc2dc\uc791\ud574\uc57c \ud55c\ub2e4.")),Object(c.b)("h2",{id:"\uba85\uba85-\ud328\ud134\uc758-\ub2e8\uc810"},"\uba85\uba85 \ud328\ud134\uc758 \ub2e8\uc810"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\uc624\ud0c0\uac00 \ub098\uba74 \ud14c\uc2a4\ud2b8 \uc548\ud568 \u2192 \uc131\uacf5\ud588\ub2e4\uace0 \uc624\ud574 \uac00\ub2a5"),Object(c.b)("li",{parentName:"ol"},"\uc62c\ubc14\ub978 \ud504\ub85c\uadf8\ub7a8 \uc694\uc18c\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub418\ub9ac\ub77c \ubcf4\uc99d\ud560 \ubc29\ubc95\uc774 \uc5c6\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"JUnit3 \uc5d0\uc11c, test \ub97c \uba54\uc11c\ub4dc\uac00 \uc544\ub2cc \ud074\ub798\uc2a4\uc758 \uc774\ub984\uc5d0 \ubd99\uc774\uba74 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4."))),Object(c.b)("li",{parentName:"ol"},"\ud504\ub85c\uadf8\ub7a8 \uc694\uc18c\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud560 \ubc29\ubc95\uc774 \ub9c8\ub545\ud558\uc9c0 \uc54a\ub2e4.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud2b9\uc815 \uc608\uc678\ub97c \ub358\uc838\uc57c\ub9cc \uc131\uacf5\ud558\ub294 \ud14c\uc2a4\ud2b8",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\uae30\ub300\ud558\ub294 \uc608\uc678 \ud0c0\uc785\uc744 \ud14c\uc2a4\ud2b8\uc5d0 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud574\uc57c \ud558\ub294 \uc0c1\ud669")))))),Object(c.b)("h2",{id:"\uc560\ub108\ud14c\uc774\uc158"},"\uc560\ub108\ud14c\uc774\uc158"),Object(c.b)("p",null,"JUnit4 ~"),Object(c.b)("h3",{id:"\uba54\ud0c0\uc560\ub108\ud14c\uc774\uc158-meta-annotation"},"\uba54\ud0c0\uc560\ub108\ud14c\uc774\uc158 meta-annotation"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"@Retention(RetentionPolicy.RUNTIME)")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"@Test")," \uac00 \ub7f0\ud0c0\uc784\uc5d0\ub3c4 \uc720\uc9c0\ub418\uc5b4\uc57c \ud55c\ub2e4\ub294 \uc758\ubbf8")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"@Target(ElementType.METHOD)")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"@Test")," \uac00 \ubc18\ub4dc\uc2dc \uba54\uc11c\ub4dc \uc120\uc5b8\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub3fc\uc57c \ud55c\ub2e4.")),Object(c.b)("h3",{id:"\ub9c8\ucee4-marker-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785-\uc120\uc5b8"},"\ub9c8\ucee4 (marker) \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785 \uc120\uc5b8"),Object(c.b)("p",null,"\uc544\ubb34 \ub9e4\uac1c\ubcc0\uc218 \uc5c6\uc774 \ub2e8\uc21c\ud788 \ub300\uc0c1\uc5d0 \ub9c8\ud0b9\ud55c\ub2e4\ub294 \ub73b"),Object(c.b)("p",null,"\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc\uc784\uc744 \uc120\uc5b8\ud558\ub294 \uc560\ub108\ud14c\uc774\uc158"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"import java.lang.annotation.*;\n\n// \ub9e4\uac1c\ubcc0\uc218 \uc5c6\ub294 \uc815\uc801 \uba54\uc11c\ub4dc \uc804\uc6a9\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface Test { }\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"\ub9e4\uac1c\ubcc0\uc218 \uc5c6\ub294 \uc815\uc801 \uba54\uc11c\ub4dc \uc804\uc6a9")," \uc8fc\uc11d\uc744 \ub2e8 \uc774\uc720"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 \uac15\uc81c\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38"),Object(c.b)("li",{parentName:"ul"},"\uc9c1\uc811 \uc560\ub108\ud14c\uc774\uc158 \ucc98\ub9ac\uae30\ub97c \uad6c\ud604\ud574\uc57c \ud568"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"javax.annotation.processing API")," \ubb38\uc11c \ucc38\uace0")),Object(c.b)("h4",{id:"\uc0ac\uc6a9-\uc608"},"\uc0ac\uc6a9 \uc608"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'public class Sample {\n    @Test public static void m1() { }   // tobe Success\n\n    public static void m2() { }         // ignored\n\n    @Test public static void m3() {     // tobe Fail\n        throw new RuntimeException("Fail");\n    }\n\n    public static void m4() { }         // ignored\n    \n    @Test public void m5() { }          // \uc798\ubabb \uc0ac\uc6a9\ud55c \uc608 : \uc815\uc801 \uba54\uc11c\ub4dc\uac00 \uc544\ub2c8\ub2e4\n\n    public static void m6() { }         // ignored\n    \n    @Test public static void m7() {     // tobe Fail\n        throw new RuntimeException("Fail");   \n    }\n\n    public static void m8() { }         // ignored\n}\n')),Object(c.b)("h4",{id:"\ub9c8\ucee4-\uc560\ub108\ud14c\uc774\uc158\uc744-\ucc98\ub9ac\ud558\ub294-\ud504\ub85c\uadf8\ub7a8"},"\ub9c8\ucee4 \uc560\ub108\ud14c\uc774\uc158\uc744 \ucc98\ub9ac\ud558\ub294 \ud504\ub85c\uadf8\ub7a8"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'import java.lang.reflect.*;\n\npublic class RunTests {\n    public static void main(String[] args) throws Exception {\n        int test = 0;\n        int passed = 0;\n        Class<?> testClass = Class.forName(args[0]);\n        for (Method m : testClass.getDeclatedMethods()) {\n            if (m.isAnnotationPresent(Test.class)) {\n                tests++;\n                try {\n                    m.invoke(null);\n                    passed++;                \n\n                // \ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc\uac00 \uc608\uc678\ub97c \ub358\uc9c0\uba74, \n                // \ub9ac\ud50c\ub809\uc158 \ub9e4\ucee4\ub2c8\uc998?? \uc774 InvocationTargetException \uc73c\ub85c \uac10\uc2f8\uc11c \ub2e4\uc2dc \ub358\uc9c4\ub2e4.\n                } catch(InvocationTargetException wrappedExc) {\n                    Throwable exc = wrappedExc.getCause();\n                    System.out.println(m + "\uc2e4\ud328: " + exc);\n                } catch (Exception exc) {\n                    System.out.println("\uc798\ubabb \uc0ac\uc6a9\ud55c @Test: " + m);                    \n                }\n            }\n        }\n        System.out.println("\uc131\uacf5: %d, \uc2e4\ud328\\: %d%n", passed, tests - passed);\n    }\n}\n')),Object(c.b)("h3",{id:"\ub9e4\uac1c\ubcc0\uc218-\ud558\ub098\ub97c-\ubc1b\ub294-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785"},"\ub9e4\uac1c\ubcc0\uc218 \ud558\ub098\ub97c \ubc1b\ub294 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785"),Object(c.b)("p",null,"\uba85\uc2dc\ud55c \uc608\uc678\ub97c \ub358\uc838\uc57c\ub9cc \uc131\uacf5\ud558\ub294 \ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc\uc6a9 \uc560\ub108\ud14c\uc774\uc158"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"import java.lang.annotation.*;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface ExceptionTest {\n    Class<? extends Throwable> value();\n}\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Class<? extends Throwable> value();")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc560\ub108\ud14c\uc774\uc158\uc758 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785"),Object(c.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc608\uc678(\uc624\ub958) \ud0c0\uc785\uc744 \ub2e4 \uc218\uc6a9\ud55c\ub2e4.")),Object(c.b)("h4",{id:"\uc0ac\uc6a9\uc608"},"\uc0ac\uc6a9\uc608"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public class Sample2 {\n    @ExceptionTest(ArithmeticException.class)\n    public static void m1() {                   // tobe Success\n        int i = 0;\n        i = i / i;\n    }\n\n    @ExceptionTest(ArithmeticException.class)\n    public static void m2() {                   // tobe Fail\n        int[] a = new int[0];\n        int i = a[1];                           // not a ArithmeticException\n    }   \n\n    @ExceptionTest(ArithmeticException.class)\n    public static void m3() { }                 // tobe Fail (not throws a Exception)\n\n}\n")),Object(c.b)("h4",{id:"\uc560\ub108\ud14c\uc774\uc158-\ucc98\ub9ac\uae30"},"\uc560\ub108\ud14c\uc774\uc158 \ucc98\ub9ac\uae30"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'import java.lang.reflect.*;\n\npublic class RunTests {\n    public static void main(String[] args) throws Exception {\n        int test = 0;\n        int passed = 0;\n        Class<?> testClass = Class.forName(args[0]);\n        for (Method m : testClass.getDeclatedMethods()) {\n            if (m.isAnnotationPresent(ExceptionTest.class)) {\n                tests++;\n                try {\n                    m.invoke(null);\n                    System.out.println("\ud14c\uc2a4\ud2b8 %s \uc2e4\ud328: \uc608\uc678\ub97c \ub358\uc9c0\uc9c0 \uc54a\uc74c%n", m);\n                } catch(InvocationTargetException wrappedExc) {\n                    Throwable exc = wrappedExc.getCause();\n                    Class<? extends Throwable> excType = \n                            m.getAnnotation(ExceptionTest.class).value();\n\n                    if (excType.isInstance(exc)) {\n                        passed++;\n                    } else {\n                        System.out.println("\ud14c\uc2a4\ud2b8 %s \uc2e4\ud328: \uae30\ub300\ud55c \uc608\uc678 %s, \ubc1c\uc0dd\ud55c \uc608\uc678 %s%n",\n                                                    m, excType.getName(), exc);\n                    }\n                } catch (Exception exc) {\n                    System.out.println("\uc798\ubabb \uc0ac\uc6a9\ud55c @ExceptionTest: " + m);                    \n                }\n            }\n        }\n        System.out.println("\uc131\uacf5: %d, \uc2e4\ud328\\: %d%n", passed, tests - passed);\n    }\n}\n')),Object(c.b)("h3",{id:"\ubc30\uc5f4-\ub9e4\uac1c\ubcc0\uc218\ub97c-\ubc1b\ub294-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785-1"},"\ubc30\uc5f4 \ub9e4\uac1c\ubcc0\uc218\ub97c \ubc1b\ub294 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785 1"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @intereface ExceptionTest {\n    Class<? extends Throwable>[] value();\n}\n")),Object(c.b)("h4",{id:"\uc0ac\uc6a9-\uc608-1"},"\uc0ac\uc6a9 \uc608"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@ExceptionTest({ IndexOfOutOfBoundsException.class, NullPointerException.class })\npublic static void doublyBad() {\n    List<String> list = new ArrayList<>();\n\n    // will throws a IndexOutOfBoundsException or NullPointerException\n    list.addAll(5, null);       \n}\n")),Object(c.b)("h4",{id:"\uc560\ub124\ud14c\uc774\uc158-\ucc98\ub9ac\uae30"},"\uc560\ub124\ud14c\uc774\uc158 \ucc98\ub9ac\uae30"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'import java.lang.reflect.*;\n\npublic class RunTests {\n    public static void main(String[] args) throws Exception {\n        int test = 0;\n        int passed = 0;\n        Class<?> testClass = Class.forName(args[0]);\n        for (Method m : testClass.getDeclatedMethods()) {\n            if (m.isAnnotationPresent(ExceptionTest.class)) {\n                tests++;\n                try {\n                    m.invoke(null);\n                    System.out.println("\ud14c\uc2a4\ud2b8 %s \uc2e4\ud328: \uc608\uc678\ub97c \ub358\uc9c0\uc9c0 \uc54a\uc74c%n", m);\n                } catch(InvocationTargetException wrappedExc) {\n                    Throwable exc = wrappedExc.getCause();\n                    int oldPassed = passed;\n\n                    Class<? extends Throwable>[] excTypes = \n                            m.getAnnotation(ExceptionTest.class).value();\n\n                    for (Class<? extends Throwable> excType : excTypes) {\n                        if (excType.isInstance(exc)) {\n                            passed++;\n                            break;\n                        }\n                    }\n\n                    if (passed == oldPassed)\n                        System.out.println("\ud14c\uc2a4\ud2b8 %s \uc2e4\ud328: %s%n", m, exc);\n                } catch (Exception exc) {\n                    System.out.println("\uc798\ubabb \uc0ac\uc6a9\ud55c @ExceptionTest: " + m);                    \n                }\n            }\n        }\n        System.out.println("\uc131\uacf5: %d, \uc2e4\ud328\\: %d%n", passed, tests - passed);\n    }\n}\n')),Object(c.b)("h3",{id:"\ubc30\uc5f4-\ub9e4\uac1c\ubcc0\uc218\ub97c-\ubc1b\ub294-\uc560\ub108\ud14c\uc774\uc158-\ud0c0\uc785-2-repeatable"},"\ubc30\uc5f4 \ub9e4\uac1c\ubcc0\uc218\ub97c \ubc1b\ub294 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785 2 ",Object(c.b)("em",{parentName:"h3"},"@Repeatable")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"@Repeatable")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud558\ub098\uc758 \ud504\ub85c\uadf8\ub7a8 \uc694\uc18c\uc5d0 \uc5ec\ub7ec \ubc88 \ub2ec \uc218 \uc788\ub2e4")),Object(c.b)("p",null,"\ucee8\ud14c\uc774\ub108 \uc560\ub108\ud14c\uc774\uc158"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ub0b4\ubd80 \uc560\ub108\ud14c\uc774\uc158 \ud0c0\uc785\uc758 \ubc30\uc5f4\uc744 \ubc18\ud658\ud558\ub294 value \uba54\uc11c\ub4dc\ub97c \uc815\uc758\ud574\uc57c \ud55c\ub2e4. ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface ExceptionTestContainer {\n    ExceptionTest[] value();\n}\n")),Object(c.b)("p",null,"\ubc18\ubcf5 \uac00\ub2a5\ud55c \uc560\ub108\ud14c\uc774\uc158"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\n\n// @Repeatable \uc5d0 \uc774 \ucee8\ud14c\uc774\ub108 \uc560\ub108\ud14c\uc774\uc158\uc758 class \uac1d\uccb4\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud574\uc57c \ud55c\ub2e4.\n@Repeatable(ExceptionTestContainer.class)\npublic @interface ExceptionTest {\n    Class<? extends Throwable> value();\n}\n")),Object(c.b)("h4",{id:"\ubc18\ubcf5-\uac00\ub2a5\ud55c-\uc560\ub108\ud14c\uc774\uc158\uc744-\ub450-\ubc88-\ub2e8-\ucf54\ub4dc"},"\ubc18\ubcf5 \uac00\ub2a5\ud55c \uc560\ub108\ud14c\uc774\uc158\uc744 \ub450 \ubc88 \ub2e8 \ucf54\ub4dc"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@ExceptionTest(IndexOutOfBoundsException.class)\n@ExceptionTest(NullPointerException.class)\npublic static void doublyBad() { ... }\n")),Object(c.b)("h4",{id:"\uc560\ub108\ud14c\uc774\uc158-\ucc98\ub9ac\uae30-1"},"\uc560\ub108\ud14c\uc774\uc158 \ucc98\ub9ac\uae30"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'import java.lang.reflect.*;\n\npublic class RunTests {\n    public static void main(String[] args) throws Exception {\n        int test = 0;\n        int passed = 0;\n        Class<?> testClass = Class.forName(args[0]);\n        for (Method m : testClass.getDeclatedMethods()) {\n            if (m.isAnnotationPresent(ExceptionTest.class) \n                || m.isAnnotationPresent(ExceptionTestContainer.class)) {\n                tests++;\n                try {\n                    m.invoke(null);\n                    System.out.println("\ud14c\uc2a4\ud2b8 %s \uc2e4\ud328: \uc608\uc678\ub97c \ub358\uc9c0\uc9c0 \uc54a\uc74c%n", m);\n                } catch(InvocationTargetException wrappedExc) {\n                    Throwable exc = wrappedExc.getCause();\n                    int oldPassed = passed;\n\n                    ExceptionTest[] excTests = \n                        m.getAnnotationsByType(ExceptionTest.class);\n\n                    for (ExceptionTest excTest : excTests) {\n                        if (excType.value().isInstance(exc)) {\n                            passed++;\n                            break;\n                        }\n                    }\n\n                    if (passed == oldPassed)\n                        System.out.println("\ud14c\uc2a4\ud2b8 %s \uc2e4\ud328: %s%n", m, exc);\n                } catch (Exception exc) {\n                    System.out.println("\uc798\ubabb \uc0ac\uc6a9\ud55c @ExceptionTest: " + m);                    \n                }\n            }\n        }\n        System.out.println("\uc131\uacf5: %d, \uc2e4\ud328\\: %d%n", passed, tests - passed);\n    }\n}\n')))}o.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),c=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var o=c.a.createContext({}),p=function(e){var n=c.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return c.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return t?c.a.createElement(d,s(s({ref:n},o),{},{components:t})):c.a.createElement(d,s({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);