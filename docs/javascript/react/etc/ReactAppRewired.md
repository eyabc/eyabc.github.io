react-app-rewired
--
* create-react-app은 복잡한 웹팩 설정을 감춰주기 때문에 프로젝트를 깔끔하게 시작할 수 있는 장점이 있다.
* 하지만 직접 웹팩 설정을 변경해야 하는 경우가 있는데 npm run eject 명령어를 사용하는 방법을 제공한다.
* 명령어를 실행하면 node_modules/react-script 폴더에 감춰놓은 온갖 웹팩 설정 파일들을 프로젝트 루트 폴더에 풀어 놓는다.
* 하지만 어떤 경우에는 create-react-app이 만들어주는 깔끔한 환경을 유지하고 싶을 수도 있다.
* 이때 사용하는 것이 react-app-rewired다.
* 이 툴로 만든 프로젝트는 웹팩 설정을 덮어쓰는(overriding) 하는 방식으로 개발 환경을 개선할 수 있다.

// config-overrides.js
```javascript
const rewireLess = require('react-app-rewire-less')
module.exports = (config, env) => rewireLess(config, env)
```

# DF
.(work)
└─ config-overrides.js

# config-overrieds.js
```javascript

```

Reference
--
* http://jeonghwan-kim.github.io/2018/07/16/react-app-overview.html