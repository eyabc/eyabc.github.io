const ROOT = 'database/';
const ORACLE_BOOK = `${ROOT}오라클_전문가로_가는_지름길/`
const DYNAMODB = `${ROOT}dynamoDB/`
const REDIS = `${ROOT}redis/`

module.exports = [
  `${ROOT}index`,
  `${ROOT}ManagingHierarchicalData_in_MySQL`,
  `${ROOT}SQL_Cheat_Sheet`,
  {
    type: 'category',
    label: '오라클 전문가로 가는 지름길',
    items: [
      `${ORACLE_BOOK}1-자료의조회`,
      `${ORACLE_BOOK}2-함수`,
      `${ORACLE_BOOK}3-사례_이해를_위한_기본사항`,
      `${ORACLE_BOOK}4-사례_이해를_위한_필수사항`,
    ]
  },
  {
    type: 'category',
    label: 'Master Amazon DynamoDB',
    items: [
      `${DYNAMODB}1-Introduction`,
      `${DYNAMODB}4. DynamoDB Basics`,
      `${DYNAMODB}5. Working with DynamoDB using AWS Console`,
      `${DYNAMODB}6. Working with DynamoDB using AWS CLI`,
      `${DYNAMODB}7. Working with DynamoDB using AWS SDK`,
    ]
  }, {
    type: 'category',
    label: 'Redis',
    items: [
      `${REDIS}Introduction to Redis`
    ]
  }
];

