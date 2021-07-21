const ROOT = 'doing/';
const YOUTUBECLONE = `${ROOT}youtube-clone/`;
const TS_WITH_VUE = `${ROOT}Typescript_with_Vue_실전프로젝트/`;

module.exports = [
  `${ROOT}index`,
  `${ROOT}kizstory`,
  `${ROOT}투어갤러리`,
  {
    type: 'category',
    label: 'Youtube Clone',
    items: [
      `${YOUTUBECLONE}0_Intro`,
      `${YOUTUBECLONE}1_NodeJS Theory`,
      `${YOUTUBECLONE}2_ExpressJS`,
      `${YOUTUBECLONE}3_Mongo`,
      `${YOUTUBECLONE}4_Webpack`,
      `${YOUTUBECLONE}5_Styling`,
    ]
  },
  {
    type: 'category',
    label: 'Typescript with Vue 실전프로젝트',
    items: [
      `${TS_WITH_VUE}Class-based_Component`,
      `${TS_WITH_VUE}Interface 로 Vuex 설계하기`,
      `${TS_WITH_VUE}Intro`,
    ]
  }
];
