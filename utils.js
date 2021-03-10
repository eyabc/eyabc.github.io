const makeTargetSelf = (navArr) => {
  return navArr.map(nav => {
    nav.target = '_self';

    if (nav.items) {
      nav.items = makeTargetSelf(nav.items);
    }
    return nav;
  });
}

module.exports = { makeTargetSelf };
