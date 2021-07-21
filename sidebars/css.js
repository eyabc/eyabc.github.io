const ROOT = 'css/';
const CSS_RENDERING = `${ROOT}css-rendering/`;

module.exports = [
  `${ROOT}index`,
  `${ROOT}background-image`,
  {
    type: 'category',
    label: '코드 스피츠',
    items: [
        `${CSS_RENDERING}graphics_system`,
        `${CSS_RENDERING}rendering_system`,
        `${CSS_RENDERING}css_specifications`,
        `${CSS_RENDERING}normal_flow`,
        `${CSS_RENDERING}float`,
        `${CSS_RENDERING}line_box`,
        `${CSS_RENDERING}overflow`,
        `${CSS_RENDERING}overflow_float`,
        `${CSS_RENDERING}morden_box`,
        `${CSS_RENDERING}box_sizing`,
        `${CSS_RENDERING}box_shadow`,
        `${CSS_RENDERING}outline`,
        `${CSS_RENDERING}position_model_offset`,
        `${CSS_RENDERING}cssom_rules`,
        `${CSS_RENDERING}vendor_prefix`,
        `${CSS_RENDERING}style_rule`,
        `${CSS_RENDERING}keyframe_rule`,
        `${CSS_RENDERING}typed_cssom`,
        `${CSS_RENDERING}Transform3D_SCSS_Compass`,
        `${CSS_RENDERING}post_process`,
        `${CSS_RENDERING}Transform3D`,
        `${CSS_RENDERING}draw_3d_drum`,
        `${CSS_RENDERING}semantic_web`,
    ]
  }
];
