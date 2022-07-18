
const ROOT = 'java/';
const LOMBOK = `${ROOT}lombok/`;
const DATA_STRUCTURE = `${ROOT}data_structure/`;
const JOOQ = `${ROOT}jooq/`;

module.exports = [
  `${ROOT}index`,
  `${ROOT}compareTo_equals`,
  {
    type: 'category',
    label: 'Lombok',
    items: [
      `${LOMBOK}data`,
    ]
  },
  {
    type: 'category',
    label: '자료구조',
    items: [
      `${DATA_STRUCTURE}Set`,
      `${DATA_STRUCTURE}Map`,
    ]
  },
  {
    type: 'category',
    label: 'JOOQ',
    items: [
      `${JOOQ}jooq_tricks`,
    ]
  },

  `${ROOT}transient_fields`,
  `${ROOT}public_suffix_list`,
  `${ROOT}JDBC`,
  `${ROOT}package_module`,
  `${ROOT}jacksonJSONLibrary`,
]
