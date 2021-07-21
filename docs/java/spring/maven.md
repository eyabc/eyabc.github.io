 
[메이븐(Maven)은 알고 스프링(Spring)을 쓰는가? (pom.xml 분석하며 가볍게 정리하는 빌드 툴, Maven)](https://jeong-pro.tistory.com/168)

## Maven이란 무엇인가?
자바 프로젝트의 빌드 자동화 툴
* java source -- compile -- packaging -- deploy

## Maven 의 참조 설정파일
1. settings.xml
    * maven 툴의 설정
    * 경로 (환경변수)/conf/
    
2. pom.xml
    * POM (Project Object Model) 설정
    * 프로젝트 내 빌드 옵션 설정
    * 프로젝트 정보
    * 의존성 라이브러리 정보
    * build 정보
    
    * maven의 lifecycle : default, clean, site... phase
    ![image](https://user-images.githubusercontent.com/31977543/115119637-6de4c080-9fe4-11eb-8c9c-6f2620fede11.png)

    * maven의 모든 기능은 plugin 을 기반으로 동작한다. 
    ```shell script
    mvn process-resources : resources:resources의 실행으로 resource 디렉토리에 있는 내용을 target/classes로 복사한다.
    mvn compile : compiler:compile의 실행으로 src/java 밑의 모든 자바 소스를 컴파일해서 target/classes로 복사
    mvn process-testResources, mvn test-compile : 이것은 위의 두 개가 src/java였다면 test/java의 내용을 target/test-classes로 복사. (참고로 test만 mvn test 명령을 내리면 라이프사이클상 원본 소스로 컴파일된다.)
    mvn test : surefire:test의 실행으로 target/test-classes에 있는 테스트케이스의 단위테스트를 진행한다. 결과를 target/surefire-reports에 생성한다.
    mvn package : target디렉토리 하위에 jar, war, ear등 패키지파일을 생성하고 이름은 <build>의 <finalName>의 값을 사용한다 지정되지 않았을 때는 아까 설명한 "artifactId-version.extention" 이름으로 생성
    mvn install : 로컬 저장소로 배포
    mvn deploy : 원격 저장소로 배포
    mvn clean : 빌드 과정에서 생긴 target 디렉토리 내용 삭제
    mvn site : target/site에 문서 사이트 생성
    mvn site-deploy : 문서 사이트를 서버로 배포
    ```

    


