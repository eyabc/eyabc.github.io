const ROOT = 'sql/';
const ORACLE_BOOK = `${ROOT}오라클_전문가로_가는_지름길/`

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
    ]
  }
];
