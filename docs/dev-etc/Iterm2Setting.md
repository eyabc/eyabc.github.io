# Iterm2 개발환경 만들기
#### iterm2
    * 맥의 터미널 보조 프로그

### 맥 처음썼을 때, "su: Sorry" 루트 사용자로 들어가는 방법
* bash-3.2# 접속
```shell script
$ sudo -s 
password: 맥북 비밀번호 입력
```

* 비밀번호 설정
``` shell script
$ passwd root
```

### root 에서  user로 돌아오기
``` shell script
$ su -$username
```

## brew installing
#### home brew
맥에서 라이브러리나 플러그인등을 쉽게 설치하게 도와주는 패키징 매니저

* 아래 주소의 내용 복사하여 터미널에서 실행
https://brew.sh/index_ko

* Press RETURN to continue or any other key to abort 
문구가 출력되면 
RETURN(ENTER)키를 눌러주고 맥 password 입력

## zsh installing
#### ZSH 
쉘의 확장판
```shell script
$ brew install zsh
```

## Oh My ZSH installing
zsh 을 더 쉽게 사용해주는 플러그인
```shell script
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
## agnoster 테마 설치
현재 디렉토리에서 git 의 상태를 알려준다.
* zshrc 파일 수정하기
```shell script
$ vi ~/.zshrc
--- 변경
ZSH_THEME="agnoster" 
---
$ source ~/.zshrc
 
```
## 폰트 깨짐 해결 D2 폰트
1. 최신폰트 다운 후 서체관리자 에 옮김
https://github.com/naver/d2codingfont
2. iterm2 > (command + ,) 창 > Profiles > Font 변경

## 이름부분 Macbook-pro 지우기
```shell script
$ vi .zshrc
--- insert
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
  fi
}
---
$ source .zshrc
``` 
## New Line 
명령어가 화면에서 벗어나는 경우 new line 적용

* agnoster theme update
```shell script
$ vi .oh-my-zsh/themes/agnoster.zsh-theme
--- change
build_prompt() {
  // ...
  prompt_hg
  prompt_newline // added, sequence important
  prompt_end
}

// insert
prompt_newline() {
  if [[ -n $CURRENT_BG ]]; then
    echo -n "%{%k%F{$CURRENT_BG}%}$SEGMENT_SEPARATOR
%{%k%F{blue}%}$SEGMENT_SEPARATOR"
  else
    echo -n "%{%k%}"
  fi

  echo -n "%{%f%}"
  CURRENT_BG=''
}

---
```
## Syntax Highlight
* 사용가능한 명령어: green
* 사용불가능한 명령어: red

```shell script
$ brew install zsh-syntax-highlighting
$ source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## IDE 터미널에 적용
* Preference(cmd + ,)
Tools > Terminal > Shell path: /bin/zsh
참고 
---
* 해리의 유목코딩 https://medium.com/harrythegreat/oh-my-zsh-iterm2%EB%A1%9C-%ED%84%B0%EB%AF%B8%EB%84%90%EC%9D%84-%EB%8D%94-%EA%B0%95%EB%A0%A5%ED%95%98%EA%B2%8C-a105f2c01bec
* subicura https://subicura.com/2017/11/22/mac-os-development-environment-setup.html