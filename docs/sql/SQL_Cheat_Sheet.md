# SQL Cheat Sheet
프로그래머스 연습문제를 기반으로 정리

## SELECT
```
SELECT [속성명, *] FROM [테이블명] 
```

### 정렬 ORDER BY 
* 기준 1개 
    ```
    ORDER BY [기준 속성명] ASC[DESC] 
    ```
  
* 기준 n개
    ```
    ORDER BY [1번째 기준 속성명] [옵션], [n번 째 기준 속성명] [옵션]
    ```

* 상위 n개 레코드
    ```
    ORDER BY [기준레코드]
    LIMIT [n]
    ```
  
### 조건 WHERE 
```
WHERE [속성명] = [속성명의 값]
```
* 조건 연산자
    * (=), (!=)




## SUM, MAX, MIN
* 최대값, 최소값
    ```
    MAX(속성명), MIN(속성명)
    ```

* 총 row 수
    ```
    COUNT(*)
    ```

* 중복제거
    ```shell script
    count(distinct [속성명])
    ```
  
## GROUP BY
* 고양이와 개는 몇 마리 있을까
    ```
    SELECT [분류할 속성명], COUNT(*) FROM [TABLE_NAME]
    GROUP BY [분류할 속성명]
    ```
  
* 동명 동물 수 찾기
    ```
    SELECT NAME, COUNT(*) AS COUNT FROM [TABLE_NAME]
    WHERE NAME != ''
    GROUP BY NAME
    HAVING COUNT(*) > 1
    ```

* 입양 시각 구하기 1
    ```
    SELECT HOUR(DATETIME) as HOUR, COUNT(*) AS COUNT FROM ANIMAL_OUTS
    WHERE HOUR(DATETIME)>= 9 AND HOUR(DATETIME) <= 19
    GROUP BY HOUR(DATETIME)
    ```

* 입양 시각 구하기 2
    ```
    SET @hour = -1;
    SELECT
        (@hour := @hour + 1) as HOUR,
        (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) AS COUNT
     FROM ANIMAL_OUTS
     WHERE @hour < 23
    ```


## IS NULL
* 이름이 없는 동물의 아이디
    ```
    WHERE NAME IS NULL
    ```
  
* 이름이 있는 동물의 아이디
    ```
    SELECT ANIMAL_ID FROM ANIMAL_INS
    WHERE NAME IS NOT NULL
    ```

* null 처리하기
    ```
    SELECT ANIMAL_TYPE,IFNULL(NAME, 'No name'), SEX_UPON_INTAKE FROM ANIMAL_INS
    ORDER BY ANIMAL_ID  
    ```
  
## JOIN
![lnnerJoin](./images/Innerjoin.gif)
![leftJoin](./images/leftjoin.gif)
![rightJoin](./images/rightjoin.gif)
![fullouterJoin](./images/fulljoin.gif)

* 없어진 기록찾기
    ```
    SELECT A.ANIMAL_ID, A.NAME
    FROM ANIMAL_OUTS A LEFT JOIN ANIMAL_INS B ON A.ANIMAL_ID = B.ANIMAL_ID
    WHERE B.ANIMAL_ID IS NULL
    ORDER BY A.ANIMAL_ID
    ```
  
* 있었는데요 없었습니다
    ``` 
    SELECT A.ANIMAL_ID, A.NAME FROM ANIMAL_INS A
    JOIN ANIMAL_OUTS B ON B.ANIMAL_ID = A.ANIMAL_ID
    WHERE A.DATETIME > B.DATETIME
    ORDER BY A.DATETIME
    ```

* 오랜 기간 보호한 동물(1)
    ```
    SELECT A.NAME, A.DATETIME FROM ANIMAL_INS A
    LEFT JOIN ANIMAL_OUTS B ON A.ANIMAL_ID = B.ANIMAL_ID
    WHERE B.ANIMAL_ID IS NULL
    ORDER BY A.DATETIME
    LIMIT 3
    ```
  
* 보호소에서 중성화한 동물
    ```
    SELECT A.ANIMAL_ID, A.ANIMAL_TYPE, A.NAME FROM ANIMAL_OUTS A
    JOIN ANIMAL_INS B ON B.ANIMAL_ID = A.ANIMAL_ID
    WHERE B.SEX_UPON_INTAKE LIKE 'Intact%'
    AND (A.SEX_UPON_OUTCOME LIKE 'Spayed%' OR A.SEX_UPON_OUTCOME LIKE 'Neutered%')
    ```
  
## String, Date
* LIKE 'a%' start with "a"
* LIKE '%a' end with "a"
* LIKE '%or%' have "or" in any position
* LIKE '_r%' have "r" in the second position
* LIKE 'a__%' start with "a" and are at least 3 characters in length
* LIKE 'a%o' start with "a" and ends with "o"

* 루시와 엘라 찾기
    ```
    SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
    WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
    ```
* 이름에 el이 들어가는 동물 찾기
    ```
    SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
    WHERE ANIMAL_TYPE LIKE 'DOG' AND NAME LIKE '%EL%'
    ORDER BY NAME
    ```
  
* 중성화여부 파악하기
    ```
    SELECT ANIMAL_ID, NAME, 
    CASE WHEN SEX_UPON_INTAKE LIKE 'Neutered%' 
        OR SEX_UPON_INTAKE LIKE  'Spayed%' THEN 'O'
    ELSE 'X'
    END AS '중성화' 
    FROM ANIMAL_INS
    ```

* 오랜 기간 보호한 동물(2)
    ```
    SELECT A.ANIMAL_ID, A.NAME FROM ANIMAL_OUTS A
    JOIN ANIMAL_INS B ON B.ANIMAL_ID = A.ANIMAL_ID
    ORDER BY A.DATETIME - B.DATETIME DESC
    LIMIT 2
    ```
  
* DATETIME에서 DATE로 형 변환
    ```
    SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS 날짜 FROM ANIMAL_INS
    ORDER BY ANIMAL_ID
    ```

Reference
--
* https://www.sqltutorial.org/sql-cheat-sheet/
