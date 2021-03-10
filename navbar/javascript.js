/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
// eslint-disable-next-line header/header
module.exports = {
  to: 'docs/javascript/',
  activeBasePath: 'javascript',
  label: 'JavaScript',
  position: 'left',
  items: [
    {
      label: 'Facebook',
      href: 'test',
    },
  ].map(item => {
    // eslint-disable-next-line no-param-reassign
    item.target = '_self'
    return item;
  }),
};
