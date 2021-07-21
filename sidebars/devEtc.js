const ROOT = 'dev-etc/';
const GIT = `${ROOT}git/`;

module.exports = [
  `${ROOT}index`,
  `${ROOT}맥에서 NodeJS 설치하는 방법`,
  `${ROOT}Ngnix`,
  `${ROOT}MacTerminalCommand`,
  `${ROOT}Iterm2Setting`,
  `${ROOT}ChattingService`,
  `${ROOT}Boilerplate`,
  `${ROOT}PureComponent`,
  `${ROOT}XHR`,
  `${ROOT}ZeroDependencyModule`,
  `${ROOT}스크립트 언어`,
  `${ROOT}인터프리터 언어`,
  {
    type: 'category',
    label: 'Git',
    items: [
      `${GIT}git`,
      `${GIT}MistakesGit6`,
    ]
  },

];
