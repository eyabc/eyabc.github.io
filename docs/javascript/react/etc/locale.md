Locale: i18next
--
# 국제화, i18n, i18next, internationalization
현지화
## i18n가 개발자에게 주는 영향
* WordPress 의 1/3 이 영어 이외 지역화 버전을 사용. 
* 플러그인 개발자는 빌드할 때 현지화를 고려합니다.
* 국제 전자 상거래 사이트에서, 가격, 무게, 설명, 날짜 등의 현지화가 필요
* 문화마다 다른 레이아

# i18next plugins
* i18next plugins provides you
    1. 사용자 언어 감지
    2. 번역 로드
    3. 선택적 번역 캐시
    4. 후 처리 사용 eg. sprintf 지원

* install 
    ```shell script
    $ yarn add i18next
    ```
* plugin use & options
    ```javascript
    i18next.use(plugin).init(options);
    ```

## i18next-browser-languagedetector
* 브라우저의 사용자 언어를 탐지
    * 쿠키(set cookie i18next=LANGUAGE)
    * localStorage (set key i18nextLng=LANGUAGE)
    * navigator (set browser language)
    * querystring (append ?lng=LANGUAGE to URL)
    * htmlTag (add html language tag <html lang="LANGUAGE"...)
    * path (http://my.site.com/LANGUAGE/...)
    * subdomain (http://LANGUAGE.site.com/...)

## i18next-xhr-backend
* backend 의 i18next 를 브라우저에서 사용하게 함
* backend server 에서 xhr API를 이용하여 로드합니다.

## react-i18next
* internationalization framework for React / React Native which is based on i18next.
* optimally suited for server-side rendering.

### Configure i18next
* index.js 파일과 같은 위치에 i18n.js 을 만든다.


# files,
``` shell script
.(src)
└─config       
  └─index.js        
  └─i18n.js        
  └─config.js    
  └─env.js       
  └─locale
    └─index.js
    └─ko
      └─common.json
└─ locale
  └─ index.js
  └─ ko
    └─ common.json  
```

## ./locale/index.js
```javascript
import commonKo from './ko/common.json';

const ko = {};

ko.common = commonKo;

export { ko };
```

## ./config/index.js
```javascript
export { default as config } from './config';
```

## work/env/.env.work, .env.work.env
```
REACT_APP_I18N_DOMAIN=http://localhost
PORT=3000
```
### ./config/env.js
```javascript
i18nDomain: process.env.REACT_APP_I18N_DOMAIN || 'localhost'
```

## ./config/i18n.js

```javascript
import i18next from 'i18next';
import LanguageDetector from 'i18next-brower-languagedetector';
import Backend from '18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import { config } from 'config'
import { ko } from './locales'

const detector = {
    // order and from where user language should be detected
    order: ['cookie', 'navigator'],

    // keys or params to lookup language from
    lookupCookie: 'i18next',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    //cookieMinutes: 10,
    cookieDomain: config.env.i18nDomain
};

i18next
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .use(initReactI18next)
    .init({
        // default: false
        // array of allowed languages
        whitelist: ['ko'],
        // default: 'dev'
        // language to use if translations in user language are not available.
        fallbackLng: 'ko',
        // logging, default: false
        // logs info level to console output. Helps finding issues with loading not working
        debug: config.env.env !== 'production',
        // default: 'all
        // language codes to lookup, given set language is 'en-US':
        // 'all' --> ['en-US', 'en', 'dev']
        // 'currentOnly' --> 'en-US'
        // 'languageOnly' --> 'en'
        load: 'languageOnly',
        // default: undefined
        // options for language detection
        detection: detector,
        // default: undefined
        // resources to initialize with (if not using loading or not appending using addResourceBundle)
        resources: {
            ko: ko,
        },
        // default: 'translation'
        // string or array of namespaces to load
        ns: ['common'],
        // default: {...}
        // integrate dynamic values into your translations
        interpolation: {
            escapeValue: false,
        },
        // withnamespaces-options
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            useSuspense: false,
            nsMode: "default",
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i']
        }
    });

export default i18next;
```


Reference
--
* i18n https://phrase.com/blog/posts/i18n-a-simple-definition/
* https://blog.asamaru.net/2015/09/15/internationalization-i18n-for-javascript-i18next/
* https://www.npmjs.com/package/i18next
* https://www.i18next.com/
* https://github.com/i18next/i18next-browser-languageDetector
* https://github.com/i18next/i18next-xhr-backend
* https://react.i18next.com/
* https://www.i18next.com/overview/configuration-options
* https://www.i18next.com/translation-function/interpolation
* https://react.i18next.com/legacy-v9/withnamespaces#withnamespaces-options
