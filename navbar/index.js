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
const INFRA = require('./infra.js');
const CONSULTANT = require('./consultant.js');
const DATABASE = require('./database.js');

module.exports = {
  title: '두려워도 중요하다면 시도해봐야 하지 않겠는가',
  logo: {
    alt: '두려워도 중요하다면 시도해봐야 하지 않겠는가',
    src: 'img/logo.svg',
  },
  items: [
    ...makeTargetSelf([
      JAVASCRIPT,
      JAVA,
      CSS,
      DEV_ETC,
      INFRA,
      DATABASE,
      CONSULTANT,
      {to: 'blog', label: 'Blog', position: 'left'},
      // ETC,
      // DOING,
      {
        href: 'https://github.com/eyabc/eyabc.github.io',
        label: 'GitHub',
        position: 'right',
      },
      // Please keep GitHub link to the right for consistency.
      STUDY,
    ]),

  ],
};
