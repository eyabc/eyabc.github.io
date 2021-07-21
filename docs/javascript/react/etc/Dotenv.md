Dotenv
--

* [zero-dependency module](../../Term/ZeroDependencyModule.md)
* 환경 변수(environment variables)를 .env 파일 내부의 process.env로 로드합니다.
* 코드와 별도로 환경에 구성을 저장하는 것은 The Twelve-Factor App 방법론을 기반으로합니다.

# Directory & Files
.(work)
└─ env
    └─ .env.work.dev
    └─ .env.work

# dotenv-cli install
```
yarn add dotenv-cli
```

# .env.work.dev
```
# work dev
NODE_ENV=development
```

# .env.work
```
# work production
NODE_ENV=production
```

# package.json
```json {
    script: {
        "work-dev": "dotenv -e env/.env.work.dev react-app-rewired start",
        "work": "dotenv -e env/.env.work react-app-rewired start"
    }
}
```
> [react-app-rewired](./ReactAppRewired.md)

Reference
--
* https://www.npmjs.com/package/dotenv
* https://www.npmjs.com/package/dotenv-cli
