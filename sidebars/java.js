
const ROOT = 'java/';
const LOMBOK = `${ROOT}lombok/`;
module.exports = [
  `${ROOT}index`,
  {
    type: 'category',
    label: 'Lombok',
    items: [
      `${LOMBOK}data`,
    ]
  },
  `${ROOT}transient_fields`,
  `${ROOT}public_suffix_list`,
]
