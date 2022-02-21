const ROOT = 'tdd/';
const ATDD = `${ROOT}atdd/`

module.exports = [
  `${ROOT}index`,
  {
    type: 'category',
    label: 'Acceptance test–driven development',
    items: [
      `${ATDD}1-Intro`,
      `${ATDD}2-미션1_리뷰`,
    ]
  }
];

