---
title: HTTP headers Referrer 보안이슈
---

## [HTTP headers Referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
*Referer request header* 는 현재 요청된 페이지로 연결되는 **이전 웹페이지의 주소를 담고 있다.**

## Referer header
- 서버가 사람들이 어디를 방문하는지 식별하고    
분석, 로깅 또는 최적화된 캐싱 등을 위해 해당 데이터를 사용할 수 있다.

## Referrer Issue
- 소셜 미디어 링크가 있는 *암호 재설정* 페이지     
→ 소셜 미디어 사이트가 재설정 비밀번호 url 을 수신할 수 있다.

- 제 3의 페이지에 호스팅 된 이미지를 당신의 페이지에 포함시키는 경우.       
→ 보안이 안전하거나 사용자가 정보를 공유하지싶지 않더라도 제3 페이지에 누출될 수있다.

## 해결방법
- 비밀번호 재설정 url 을 한번만 사용할 수 있게한다.
- 고유한 사용자 토큰과 결합하여 다른 방식으로 민감한 데이터를 전송한다.
- url 을 통해 민감한 데이터를 다른 위치로 전달하지 않으려면 post 말고 get 을 사용한다
- **https 를 사용한다. https 사이트는 비참조 사이트에 참조 정보를 전송하지 않는다.** 
- iframe 비밀번호 재설정 페이지, 결제 양식, 로그인 영역 등과 같은 웹사이트의 안전한 영역에서 *타사 컨텐츠를 제거한다.*
- *no-referrer* 지시문으로, **Referer 헤더를 완전히 생략한다.**
- 누출위험이 있는 *img, a* 태그에 *no-referer* 를 사용한다.
