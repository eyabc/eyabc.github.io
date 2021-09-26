/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 [object Object]
 */

  // eslint-disable-next-line header/header
const ROOT = 'javascript/';
const JAVASCRIPT = `${ROOT}javascript/`;
const OOP = `${ROOT}OOP/`;
const BROWSER = `${ROOT}browser/`;
const CLEAN_CODE = `${ROOT}clean_code/`;
const ETC = `${ROOT}etc/`;
const AIRBNB_STYLE = `${ROOT}airbnb_js_style_guides/`;
const TS = `${ROOT}typescript/`;
const JS_ENGINE = `${ROOT}js_engine/`;
const FUNCTIONAL_PROGRAMMING = `${ROOT}functional_programming/`;
const ASYNCHRONOUS_PROGRAMMING = `${ROOT}asynchronous_programming/`;
const MODULE = `${ROOT}module/`;
const OBJECT = `${ROOT}object/`;
const BROWSER_EVENTS = `${ROOT}browser_events/`;

module.exports = [
  {
    type: 'category',
    label: 'Javascript',
    items: [
      `${JAVASCRIPT}index`,
      `${JAVASCRIPT}const, let, var`,
      `${JAVASCRIPT}렉시컬 환경`,
      `${JAVASCRIPT}반환함수`,
      `${JAVASCRIPT}호이스팅`,
      `${JAVASCRIPT}스코프`,
      `${JAVASCRIPT}글로벌 변수를 사용하면 안되는 이유`,
      `${JAVASCRIPT}JS 메모리 누수`,
      `${JAVASCRIPT}엄격모드`,
      `${JAVASCRIPT}JS전역객체`,
      `${JAVASCRIPT}전역객체 window`,
      `${JAVASCRIPT}값`,
      `${JAVASCRIPT}원시타입과 참조타입`,
      `${JAVASCRIPT}래퍼 객체`,
      `${JAVASCRIPT}가비지 컬렉션`,
      `${JAVASCRIPT}this`,
      `${JAVASCRIPT}화살표함수`,
      `${JAVASCRIPT}Symbol`,
      `${JAVASCRIPT}Iteration 프로토콜`,
      `${JAVASCRIPT}클래스`,
      `${JAVASCRIPT}프로토타입`,
      `${JAVASCRIPT}에러 핸들링`,
      `${JAVASCRIPT}참고자료`,
      `${JAVASCRIPT}DanfoJS`,
    ]
  },
  {
    type: 'category',
    label: 'JS Engine',
    items: [
      `${JS_ENGINE}V8`,
    ]
  },
  {
    type: 'category',
    label: '객체 지향 자바스크립트',
    items: [
      `${OOP}OOP_value_and_identifier_context`,
      `${OOP}OOP_polymorphism`,
      `${OOP}OOP_object_essentials`,
      `${OOP}OOP_solid_principle`,
      `${OOP}OOP_message`,
      `${OOP}OOP_dependency`,
      `${OOP}OOP_dependency_inversion`,
      `${OOP}OOP_inversion_of_control`,
      `${OOP}OOP_design_patterns`,
      `${OOP}OOP_type_check`,
      `${OOP}OOP_mvvm_role_design`,
      `${OOP}OOP_strategy`,
      `${OOP}OOP_observer`,
      `${OOP}OOP_composite`,
      `${OOP}OOP_observer2`,
      `${OOP}OOP_code_ISP`,
      `${OOP}OOP_access`,
      `${OOP}OOP_visitor`,
      `${OOP}OOP_abstract_layer`,
      `${OOP}OOP_4`,
      `${OOP}OOP_5`,
    ],
  },
  {
    type: 'category',
    label: '브라우저',
    items: [
      `${BROWSER}window-opener`,
      `${BROWSER}Browser`,
      `${BROWSER}Browser_BOM`,
      `${BROWSER}Browser_DOM`,
      `${BROWSER}Browser_DOM_Tree`,
      `${BROWSER}Browser_DOM_Search`,
      `${BROWSER}Browser_Compiler`,
      `${BROWSER}browser_Rendering_HTML_Parser`,
      `${BROWSER}Browser_DOM_API`,
      `${BROWSER}Browser_Rendering_CSS_Parsing`,
      `${BROWSER}Browser_Rendering_RenderTree`,
      `${BROWSER}Browser_DOM_Reflow_Repaint`,
      `${BROWSER}Browser_성능_최적화`,
    ]
  },
  {
    type: 'category',
    label: '클린 코드',
    items: [
      `${CLEAN_CODE}CleanCodeJavascript`
    ]
  },
  {
    label: 'ETC',
    type: 'category',
    items: [
      `${ETC}javascript_array`,
      `${ETC}자바스크립트 History`,
      `${ETC}자바스크립트의 장점`,
      `${ETC}자바스크립트의 값의 특징`,
      `${ETC}object_assign`,
      `${ETC}JavascriptFunctionalProgramming`,
      `${ETC}with`,
      `${ETC}eval`,
      `${ETC}caller_callee`,
      `${ETC}typeof`,
      // `${ETC}else`,
    ]
  },
  {
    label: 'Airbnb JS Style Guides',
    type: 'category',
    items: [
      `${AIRBNB_STYLE}자바스크립트 스타일 가이드`,
      `${AIRBNB_STYLE}Types`,
      `${AIRBNB_STYLE}References`,
      `${AIRBNB_STYLE}Objects`,
      `${AIRBNB_STYLE}Arrays`,
      `${AIRBNB_STYLE}Destructuring`,
      `${AIRBNB_STYLE}Strings`,
      `${AIRBNB_STYLE}Functions`,
      `${AIRBNB_STYLE}Arrow Functions`,
    ]
  },
  {
    type: 'category',
    label: 'Getting Start',
    items: [
      `${CLEAN_CODE}CleanCodeJavascript`
    ]
  },
  {
    type: 'category',
    label: 'Typescript',
    items: [
      `${TS}g`
    ]
  },
  {
    type: 'category',
    label: '함수형 프로그래밍',
    items: [
      `${FUNCTIONAL_PROGRAMMING}1_함수형_프로그래밍_개요`,
      `${FUNCTIONAL_PROGRAMMING}2_함수형으로_전환하기`,
      `${FUNCTIONAL_PROGRAMMING}3_컬렉션_중심_프로그래밍`,
      `${FUNCTIONAL_PROGRAMMING}4_자바스크립트에서의_지연_평가`,
      `${FUNCTIONAL_PROGRAMMING}5_실전코드조각`,
    ]
  },
  {
    type: 'category',
    label: '비동기 프로그래밍',
    items: [
      `${ASYNCHRONOUS_PROGRAMMING}Sync Async`,
      `${ASYNCHRONOUS_PROGRAMMING}브라우저의 JS 실행과정`,
      `${ASYNCHRONOUS_PROGRAMMING}비동기 프로그래밍`,
      `${ASYNCHRONOUS_PROGRAMMING}콜백 Callback`,
      `${ASYNCHRONOUS_PROGRAMMING}Promise`,
      `${ASYNCHRONOUS_PROGRAMMING}JOBS`,
      `${ASYNCHRONOUS_PROGRAMMING}비동기 함수 Async Await`,
      `${ASYNCHRONOUS_PROGRAMMING}Async Iterator`,
      `${ASYNCHRONOUS_PROGRAMMING}Async Generator`,
      `${ASYNCHRONOUS_PROGRAMMING}Async Iterable`,
    ]
  },
  {
    type: 'category',
    label: 'JS 모듈',
    items: [
      `${MODULE}모듈`,
      `${MODULE}JS 모듈의 변화`,
      `${MODULE}브라우저 모듈`,
      `${MODULE}ESM`,
      `${MODULE}Module Reference`,
    ],
  },
  {
    type: 'category',
    label: '객체',
    items: [
        `${OBJECT}객체 기본 문법`,
        `${OBJECT}내장 객체`,
        `${OBJECT}객체 프로퍼티`,
        `${OBJECT}객체 메서드`,
        `${OBJECT}객체 옵셔널체이닝`,
        `${OBJECT}객체 심볼`,
        `${OBJECT}객체 원시형 변환`,
        `${OBJECT}객체 프로토타입 상속`,
        `${OBJECT}객체 함수의 prototype 프로퍼티`,
        `${OBJECT}객체_네이티브_프로토타입`,
        `${OBJECT}객체_프로토타입 메서드와 __proto__가 없는 객체`,
        `${AIRBNB_STYLE}Objects`,
        `${OBJECT}객체 Reference`,
    ],
  },
  {
    type: 'category',
    label: '브라우저 이벤트',
    items: [
      `${BROWSER_EVENTS}Browser_Event`,
      `${BROWSER_EVENTS}Browser_Bubbling_Capturing`,
      `${BROWSER_EVENTS}Browser_Event_Delegation`,
      `${BROWSER_EVENTS}Browser_Default_Action`,
      `${BROWSER_EVENTS}Browser_event_custom_dispatch`,
      `${BROWSER_EVENTS}browser_mouse_event`,
      `${BROWSER_EVENTS}Browser_event_mouse-drag-and-drop`,
      `${BROWSER_EVENTS}Browser_pointer_events`,
      `${BROWSER_EVENTS}Browser_keydown_keyup_events`,
      `${BROWSER_EVENTS}Browser_event_scrolling`,
    ]
  },
];
