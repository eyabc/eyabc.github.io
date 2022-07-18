
const ROOT = 'nest-js/';
const OVERVIEW = `${ROOT}overview/`;
const FUNDAMENTALS = `${ROOT}fundamentals/`;
const TECHNIQUES = `${ROOT}techniques/`;

module.exports = [
  `${ROOT}index`,
  {
    type: 'category',
    label: 'OVERVIEW',
    items: [
      `index`,
      `controller`,
      `providers`,
      `modules`,
      `middleware`,
      `exception-filters`,
      `pipes`,
      `guards`,
      `interceptor`,
      `custom-decorators`,
    ].map(fileName => OVERVIEW + fileName),
  },
  {
    type: 'category',
    label: 'FUNDAMENTALS',
    items: [
      'custom_providers'
    ].map(fileName => FUNDAMENTALS + fileName),
  },
  {
    type: 'category',
    label: 'TECHNIQUES',
    items: [
      'caching'
    ].map(fileName => TECHNIQUES + fileName),
  }
]
