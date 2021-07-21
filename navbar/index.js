/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 [object Object]
 */
  // eslint-disable-next-line header/header
const {makeTargetSelf} = require('../utils.js');
const JAVASCRIPT = require('./javascript.js');
const JAVA = require('./java.js');
const STUDY = require('./study.js');
const ETC = require('./etc.js');
const CSS = require('./css.js');
const DEV_ETC = require('./DevEtc.js');
const DOING = require('./doing.js');

module.exports = {
  title: '나를 존중하는 시간',
  logo: {
    alt: 'Respect myself',
    src: 'img/logo.svg',
  },
  items: [
    ...makeTargetSelf([
      JAVASCRIPT,
      JAVA,
      STUDY,
      CSS,
      DEV_ETC,
      ETC,
      DOING,
      {to: 'blog', label: 'Blog', position: 'left'},
      // Please keep GitHub link to the right for consistency.
      {
        href: 'https://github.com/eyabc/eyabc.github.io',
        label: 'GitHub',
        position: 'right',
      },
    ]),

  ],
};
