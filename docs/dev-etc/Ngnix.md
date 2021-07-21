Nginx
--
# Nginx
## Nginx 부팅시 자동 실행
```shell script
# brew install nginx
$ sudo ln -s /usr/local/opt/nginx/homebrew.mxcl.nginx.plist /Library/LaunchDaemons/
$ sudo chown root:wheel /usr/local/opt/nginx/homebrew.mxcl.nginx.plist
$ sudo launchctl load /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
```
# Cros`s-Domain Issue
CORS (Cross Origin Request)

## Cross-Domain 
* javascript 보안정책 Same Origin Policy 이다 .
* 스크립트가 실행되는 페이지와 비동기 호출시 주소의 프로토콜, 호스트, 포트가 같아야 한다. 

## Cross-Domain 배경
클라이언트에서 API서버에 비동기 통신을 하여 데이터를 가져오려고 할때 발생

## Cross-Domain 해결
* 비동기 호출 서버의 Header에 Access-Control 관련 내용을 보여줌 
* node.js cors모듈 https://www.npmjs.com/package/cors
```javascript
var cors = require('cors');
var app = express();
app.use(cors());
```

* 클라이언트 도메인을 localhost:port 가 아닌 
새로이 만들어 회피한다..
예를들어 test.textory.io 의 프론트 도메인으로 접속을 하면
proxy_pass:port 설정을 통해 CORS 를 회피하게 되는 것이다. 

회피 설정은 
```shell script
$ sudo vi etc/hosts 설정을 하고 
$ nginx -s reload
```

## ngnix.conf
* 인증서를 발급받는다.(raks) 
* ngnix.conf 파일을 받는다. (raks)
    * /Users/"computerName"/...
        * computerName 부분을 수정한다. 



Reference
--
* Nesoy Blog https://nesoy.github.io/articles/2017-06/Cross-Domain
* nginx 부팅시 자동실행 https://gist.github.com/SergeyMiracle/17753a17531a1f38015364fad159587b
