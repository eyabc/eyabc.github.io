(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{417:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(447)),o={},c={unversionedId:"javascript/react/etc/locale",id:"javascript/react/etc/locale",isDocsHomePage:!1,title:"locale",description:"Locale: i18next",source:"@site/docs/javascript/react/etc/locale.md",slug:"/javascript/react/etc/locale",permalink:"/docs/javascript/react/etc/locale",version:"current"},l=[{value:"Locale: i18next",id:"locale-i18next",children:[]},{value:"i18n\uac00 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc8fc\ub294 \uc601\ud5a5",id:"i18n\uac00-\uac1c\ubc1c\uc790\uc5d0\uac8c-\uc8fc\ub294-\uc601\ud5a5",children:[]},{value:"i18next-browser-languagedetector",id:"i18next-browser-languagedetector",children:[]},{value:"i18next-xhr-backend",id:"i18next-xhr-backend",children:[]},{value:"react-i18next",id:"react-i18next",children:[{value:"Configure i18next",id:"configure-i18next",children:[]}]},{value:"./locale/index.js",id:"localeindexjs",children:[]},{value:"./config/index.js",id:"configindexjs",children:[]},{value:"work/env/.env.work, .env.work.env",id:"workenvenvwork-envworkenv",children:[{value:"./config/env.js",id:"configenvjs",children:[]}]},{value:"./config/i18n.js",id:"configi18njs",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"locale-i18next"},"Locale: i18next"),Object(r.b)("h1",{id:"\uad6d\uc81c\ud654-i18n-i18next-internationalization"},"\uad6d\uc81c\ud654, i18n, i18next, internationalization"),Object(r.b)("p",null,"\ud604\uc9c0\ud654"),Object(r.b)("h2",{id:"i18n\uac00-\uac1c\ubc1c\uc790\uc5d0\uac8c-\uc8fc\ub294-\uc601\ud5a5"},"i18n\uac00 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc8fc\ub294 \uc601\ud5a5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"WordPress \uc758 1/3 \uc774 \uc601\uc5b4 \uc774\uc678 \uc9c0\uc5ed\ud654 \ubc84\uc804\uc744 \uc0ac\uc6a9. "),Object(r.b)("li",{parentName:"ul"},"\ud50c\ub7ec\uadf8\uc778 \uac1c\ubc1c\uc790\ub294 \ube4c\ub4dc\ud560 \ub54c \ud604\uc9c0\ud654\ub97c \uace0\ub824\ud569\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uad6d\uc81c \uc804\uc790 \uc0c1\uac70\ub798 \uc0ac\uc774\ud2b8\uc5d0\uc11c, \uac00\uaca9, \ubb34\uac8c, \uc124\uba85, \ub0a0\uc9dc \ub4f1\uc758 \ud604\uc9c0\ud654\uac00 \ud544\uc694"),Object(r.b)("li",{parentName:"ul"},"\ubb38\ud654\ub9c8\ub2e4 \ub2e4\ub978 \ub808\uc774\uc544")),Object(r.b)("h1",{id:"i18next-plugins"},"i18next plugins"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"i18next plugins provides you"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\uc0ac\uc6a9\uc790 \uc5b8\uc5b4 \uac10\uc9c0"),Object(r.b)("li",{parentName:"ol"},"\ubc88\uc5ed \ub85c\ub4dc"),Object(r.b)("li",{parentName:"ol"},"\uc120\ud0dd\uc801 \ubc88\uc5ed \uce90\uc2dc"),Object(r.b)("li",{parentName:"ol"},"\ud6c4 \ucc98\ub9ac \uc0ac\uc6a9 eg. sprintf \uc9c0\uc6d0"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"install "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ yarn add i18next\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"plugin use & options"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"i18next.use(plugin).init(options);\n")))),Object(r.b)("h2",{id:"i18next-browser-languagedetector"},"i18next-browser-languagedetector"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\uc758 \uc0ac\uc6a9\uc790 \uc5b8\uc5b4\ub97c \ud0d0\uc9c0",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\ucfe0\ud0a4(set cookie i18next=LANGUAGE)"),Object(r.b)("li",{parentName:"ul"},"localStorage (set key i18nextLng=LANGUAGE)"),Object(r.b)("li",{parentName:"ul"},"navigator (set browser language)"),Object(r.b)("li",{parentName:"ul"},"querystring (append ?lng=LANGUAGE to URL)"),Object(r.b)("li",{parentName:"ul"},'htmlTag (add html language tag <html lang="LANGUAGE"...)'),Object(r.b)("li",{parentName:"ul"},"path (",Object(r.b)("a",{parentName:"li",href:"http://my.site.com/LANGUAGE/..."},"http://my.site.com/LANGUAGE/..."),")"),Object(r.b)("li",{parentName:"ul"},"subdomain (",Object(r.b)("a",{parentName:"li",href:"http://LANGUAGE.site.com/..."},"http://LANGUAGE.site.com/..."),")")))),Object(r.b)("h2",{id:"i18next-xhr-backend"},"i18next-xhr-backend"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"backend \uc758 i18next \ub97c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc0ac\uc6a9\ud558\uac8c \ud568"),Object(r.b)("li",{parentName:"ul"},"backend server \uc5d0\uc11c xhr API\ub97c \uc774\uc6a9\ud558\uc5ec \ub85c\ub4dc\ud569\ub2c8\ub2e4.")),Object(r.b)("h2",{id:"react-i18next"},"react-i18next"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"internationalization framework for React / React Native which is based on i18next."),Object(r.b)("li",{parentName:"ul"},"optimally suited for server-side rendering.")),Object(r.b)("h3",{id:"configure-i18next"},"Configure i18next"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"index.js \ud30c\uc77c\uacfc \uac19\uc740 \uc704\uce58\uc5d0 i18n.js \uc744 \ub9cc\ub4e0\ub2e4.")),Object(r.b)("h1",{id:"files"},"files,"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},".(src)\n\u2514\u2500config       \n  \u2514\u2500index.js        \n  \u2514\u2500i18n.js        \n  \u2514\u2500config.js    \n  \u2514\u2500env.js       \n  \u2514\u2500locale\n    \u2514\u2500index.js\n    \u2514\u2500ko\n      \u2514\u2500common.json\n\u2514\u2500 locale\n  \u2514\u2500 index.js\n  \u2514\u2500 ko\n    \u2514\u2500 common.json  \n")),Object(r.b)("h2",{id:"localeindexjs"},"./locale/index.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import commonKo from './ko/common.json';\n\nconst ko = {};\n\nko.common = commonKo;\n\nexport { ko };\n")),Object(r.b)("h2",{id:"configindexjs"},"./config/index.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"export { default as config } from './config';\n")),Object(r.b)("h2",{id:"workenvenvwork-envworkenv"},"work/env/.env.work, .env.work.env"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"REACT_APP_I18N_DOMAIN=http://localhost\nPORT=3000\n")),Object(r.b)("h3",{id:"configenvjs"},"./config/env.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"i18nDomain: process.env.REACT_APP_I18N_DOMAIN || 'localhost'\n")),Object(r.b)("h2",{id:"configi18njs"},"./config/i18n.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import i18next from 'i18next';\nimport LanguageDetector from 'i18next-brower-languagedetector';\nimport Backend from '18next-xhr-backend';\nimport { initReactI18next } from 'react-i18next';\nimport { config } from 'config'\nimport { ko } from './locales'\n\nconst detector = {\n    // order and from where user language should be detected\n    order: ['cookie', 'navigator'],\n\n    // keys or params to lookup language from\n    lookupCookie: 'i18next',\n    lookupFromPathIndex: 0,\n    lookupFromSubdomainIndex: 0,\n\n    // cache user language on\n    caches: ['cookie'],\n    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)\n\n    // optional expire and domain for set cookie\n    //cookieMinutes: 10,\n    cookieDomain: config.env.i18nDomain\n};\n\ni18next\n    // load translation using xhr -> see /public/locales\n    // learn more: https://github.com/i18next/i18next-xhr-backend\n    .use(Backend)\n    // detect user language\n    // learn more: https://github.com/i18next/i18next-browser-languageDetector\n    .use(LanguageDetector)\n    // pass the i18n instance to react-i18next.\n    // init i18next\n    // for all options read: https://www.i18next.com/overview/configuration-options\n    .use(initReactI18next)\n    .init({\n        // default: false\n        // array of allowed languages\n        whitelist: ['ko'],\n        // default: 'dev'\n        // language to use if translations in user language are not available.\n        fallbackLng: 'ko',\n        // logging, default: false\n        // logs info level to console output. Helps finding issues with loading not working\n        debug: config.env.env !== 'production',\n        // default: 'all\n        // language codes to lookup, given set language is 'en-US':\n        // 'all' --\x3e ['en-US', 'en', 'dev']\n        // 'currentOnly' --\x3e 'en-US'\n        // 'languageOnly' --\x3e 'en'\n        load: 'languageOnly',\n        // default: undefined\n        // options for language detection\n        detection: detector,\n        // default: undefined\n        // resources to initialize with (if not using loading or not appending using addResourceBundle)\n        resources: {\n            ko: ko,\n        },\n        // default: 'translation'\n        // string or array of namespaces to load\n        ns: ['common'],\n        // default: {...}\n        // integrate dynamic values into your translations\n        interpolation: {\n            escapeValue: false,\n        },\n        // withnamespaces-options\n        react: {\n            wait: true,\n            bindI18n: 'languageChanged loaded',\n            useSuspense: false,\n            nsMode: \"default\",\n            transSupportBasicHtmlNodes: true,\n            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i']\n        }\n    });\n\nexport default i18next;\n")),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"i18n ",Object(r.b)("a",{parentName:"li",href:"https://phrase.com/blog/posts/i18n-a-simple-definition/"},"https://phrase.com/blog/posts/i18n-a-simple-definition/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://blog.asamaru.net/2015/09/15/internationalization-i18n-for-javascript-i18next/"},"https://blog.asamaru.net/2015/09/15/internationalization-i18n-for-javascript-i18next/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/i18next"},"https://www.npmjs.com/package/i18next")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.i18next.com/"},"https://www.i18next.com/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/i18next/i18next-browser-languageDetector"},"https://github.com/i18next/i18next-browser-languageDetector")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/i18next/i18next-xhr-backend"},"https://github.com/i18next/i18next-xhr-backend")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://react.i18next.com/"},"https://react.i18next.com/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.i18next.com/overview/configuration-options"},"https://www.i18next.com/overview/configuration-options")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.i18next.com/translation-function/interpolation"},"https://www.i18next.com/translation-function/interpolation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://react.i18next.com/legacy-v9/withnamespaces#withnamespaces-options"},"https://react.i18next.com/legacy-v9/withnamespaces#withnamespaces-options"))))}p.isMDXComponent=!0},447:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return t?i.a.createElement(d,c(c({ref:n},s),{},{components:t})):i.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);