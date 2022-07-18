---

title: 1. Introduction

---

## My Story with dynamoDB

### Issue 
No Nosql expert

### R/W Locks 
- upgrade HW
- Replication
- Slow
- loose user

### NoSql 
- mongoDB
- Cassandra
- DynamoDB 

#### requires
- server infrastructure
- steep learning curve

#### takes a time 

####  loosing user 

### DynamoDB
- two weeks migration
- mysql -> RDS (Serverless DynamoDB)
- No learning curve
- no infrastructure overhead
- server less

## 3. What is Dynamo DB?
Advent of BigData.. Demends
- high speed, scale, performance

### Amazon DynamoDB
- nosql
- scale on demand
- virtually unlimited concurrent R/W
- response time in single digit 
  - (ms)
    - DAX (cache)
    - Dynamodb Accelerator
- Integration AWS services

## 4. Demo Environment Setup
<img alt="image" src="https://user-images.githubusercontent.com/31977543/161553638-22cd157f-275d-466f-82b0-e028a2a91dd8.png"/>

![image](https://user-images.githubusercontent.com/31977543/161554053-f6c4e053-ef5f-44d8-85e6-d5ca439c138a.png)

- Programmatic access
    - API credentials (access key, secret key) 를 생성한다.
---

![image](https://user-images.githubusercontent.com/31977543/161554926-d371ba7e-d0a7-4ec0-99af-76e8d6f563ee.png)
- 일단은, 간단하게 DynamoDB 에 대한 full access 를 부여할 것입니다.

---

![image](https://user-images.githubusercontent.com/31977543/161555243-4000e105-b2f8-4ad1-9346-09f52d781a6f.png)

`Access key ID`
- Amazon DynamoDB 에 access 하기 위해 필요한 credentials 입니다.
- 로컬 컴퓨터에 Copy 혹은 Download 하여, 안전한곳에 보관하세요.
    - 환경 변수에 추가하기

### 로컬 환경 변수에 추가하기 (Windows)
- 관리자 권한으로,

<figure>
  <img alt="Environment Variables" src="https://user-images.githubusercontent.com/31977543/161556015-9e483277-185b-436f-b237-e42ebaa50655.png" title="Environment Variables"/>
  <figcaption>
    <small>Environment Variables</small>
  </figcaption>
</figure>  

<figure>
<img alt="image" src="https://user-images.githubusercontent.com/31977543/161556312-c0a47d64-449c-4a0d-87ab-ade7ec06279a.png"/>
  <figcaption>
    <small>AWS_ACCESS_KEY_ID</small>
  </figcaption>
</figure> 
 
<figure>
<img alt="image" src="https://user-images.githubusercontent.com/31977543/161556631-bb817b56-0a4b-46aa-b1ab-df4119f933c9.png"/>
  <figcaption>
    <small>AWS_SECRET_ACCESS_KEY</small>
  </figcaption>
</figure> 

<figure>
<img alt="image" src="https://user-images.githubusercontent.com/31977543/161558459-80338582-8a26-4c2f-a84f-bde2c614e9a4.png"/>
  <figcaption>
    <small>AWS_DEFAULT_REGION is on top-right corner of your AWS Management Console </small>
  </figcaption>
</figure> 


### 리눅스 환경에 추가하기
- https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
- https://stackoverflow.com/questions/61028751/missing-credentials-in-config-if-using-aws-config-file-set-aws-sdk-load-config


```shell
vi ~/.bash_profile

export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
export AWS_DEFAULT_REGION=...
```
bash_profile 설정 대신 `aws configure` 설정을 해주어야 하는 것 같다. 

## 5. Test the Setup
```javascript
const AWS = require('aws-sdk');
AWS.config.update({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: '...',
    secretAccessKey: '...'
  },
});

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

```

```shell
$ node list-tables.js
{
  TableNames: [
    'dynamo-table', 'music',
    'music_renew',  'order',
    'personal',     'personal-api',
    'post',         'push',
    'test',         'user-push'
  ]
}
```

