환경 세팅하기
--
* 사용 예
    * 웹 서비스 개발시, 개발(development)모드와 배포(production)모드 등.. 따라 다른 결과가 나와야 하는 경우
    * 요청할 API 서버의 주소가 내 컴퓨터에서 개발중일때와 서버에 올라갔을 때 다른경우
    * 개발중인 코드에서 보여주지 말아야 할 에러 메시지
    * 캐싱 여부
    * 다른 페이지

# Directory & Files
.(src)
└─ config
    └─ env.js
    └─ config.js


# [dotenv](./Dotenv.md)
* 환경 변수(environment variables)를 .env 파일 내부의 process.env로 로드합니다.

# env.js
```javascript
export default {
    env: process.env.NODE_ENV || 'development'
}
```

# ./config/config.js
```javascript
import env from './env'

const config = {
    env,
};

export default config;
```

Reference
--
* http://guswnsxodlf.github.io/production-with-webpack
* https://www.npmjs.com/package/dotenv
