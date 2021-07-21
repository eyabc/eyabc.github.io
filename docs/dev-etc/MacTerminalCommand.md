Mac Terminal Command
--
## mkdir + cd
1. ``` shell script 
mkdir [dir] && cd '$_'
    ```

2. shell function
    * ```~/.bashrc```   
    ```shell script
     function mkcd {
       if [ ! -n "$1" ]; then
         echo "Enter a directory name"
       elif [ -d $1 ]; then
         echo "\`$1' already exists"
       else
         mkdir $1 && cd $1
       fi
     }
    ```

## 내 아이피 주소 깔끔하게 확인
ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'

Reference
--
* https://appletree.or.kr/blog/notes/%ED%84%B0%EB%AF%B8%EB%84%90%EC%97%90%EC%84%9C-mkdir%EC%99%80-cd-%EB%AA%85%EB%A0%B9%EC%9D%84-%ED%95%9C%EA%BA%BC%EB%B2%88%EC%97%90/