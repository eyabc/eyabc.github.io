/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
const effectiveJava = require('./sidebars/effective_java.js');

module.exports = {
  effectiveJava,
  javascript: [
    {
      type: 'category',
      label: 'test',
      items: ['java', 'java/java']
    },
    {
      type: 'category',
      label: 'test',
      items: ['doc1', 'doc2', 'doc3']
    },

  ],
};
