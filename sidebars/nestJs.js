
const ROOT = 'nest-js/';
const OVERVIEW = `${ROOT}overview/`;
module.exports = [
  `${ROOT}index`,
  {
    type: 'category',
    label: '개요',
    items: [
      `${OVERVIEW}index`,
      `${OVERVIEW}controller`,
      `${OVERVIEW}providers`,
      `${OVERVIEW}modules`,
      `${OVERVIEW}middleware`,
      `${OVERVIEW}exception-filters`,
      `${OVERVIEW}pipes`,
      `${OVERVIEW}guards`,
      `${OVERVIEW}interceptor`,
      `${OVERVIEW}custom-decorators`,
    ]
  },
]
