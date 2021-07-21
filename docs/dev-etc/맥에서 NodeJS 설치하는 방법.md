# Node.js

## 맥에서 NodeJS 설치하는 방법
1. 공식홈페이지
    * 단점
        1. 설치위치 /usr/local 는 관리자 권한 없이 제대로 실행이 안된다.
            * global 모듈 (-g 옵션)을 설치할 때; sudo 필요  
            * Permission 변경은 보안 권장사항이 아님.
        2. 노드를 여러 버전으로 관리할 수 없음. 
            * 노드 버전별로 테스트 해야할 때
            * 프로젝트 별로 다른버전 써야할 때
            
2. homebrew 
    * 단점
        1. El Capitan에서 새로 추가된 SIP(System Integrity Protection) 때문에 권한 문제가 발생할 때가 종종...

3. nvm (node version manager)

## 이미 1, 2번 방법으로 이미 Node를 설치했을 때 삭제방법
노드는 깔끔하게 삭제하기가 매우 어렵습니다. 아래의 방법으로 삭제하시기 바랍니다. (참고 자료: http://benznext.com/completely-uninstall-node-js-from-mac-os-x/)

* /usr/local/lib 에 있는 node와 node_modules를 삭제
* /usr/local/include 에 있는 node와 node_modules를 삭제
* Homebrew로 설치하셨다면, brew uninstall node를 실행
* ~/local 또는 ~/lib 또는 ~/include 디렉토리 밑에 존재하는 node와 node_modules 삭제
* /usr/local/bin 에 있는 node 관련 실행파일들 삭제
* 추가로, 필요에 따라 아래 명령어들을 실행하시면 됩니다. (다른 파일까지 삭제하지 않도록 주의!)

* sudo rm /usr/local/bin/npm
* sudo rm /usr/local/share/man/man1/node.1
* sudo rm /usr/local/lib/dtrace/node.d
* sudo rm -rf ~/.npm
* sudo rm -rf ~/.node-gyp
* sudo rm /opt/local/bin/node
* sudo rm /opt/local/include/node
* sudo rm -rf /opt/local/lib/node_modules
``
### nvm (node version manager) 으로 Node.js 설치하기.
1. srcipt 실행 https://github.com/nvm-sh/nvm
2. 쉘을 재시작
3. 설치 확인
    ```shell script
    shell script
     $ nvm --version
    ```
4. node 설치
  * 최신 stable version node
    ```shell script
    $ nvm install stable
    ```
  * 특정 버전
    ``` shell script
    $ nvm install v5.5.0
    ```
  * 설치할 수 있는 버전 목록
    ``` shell script
    $ npm ls-remote
    ```
  * 버전 전환
    ```shell script
      nvm use [versioin]
    ```



참고
--
* junsikBlog http://junsikshim.github.io/2016/01/29/Mac%EC%97%90%EC%84%9C-Node.js-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0.html
