(window.webpackJsonp=window.webpackJsonp||[]).push([[47,406],{471:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(475),i=t(21),r=t(27),o=t(488),s=t(3),m=t(476),u=t(477),b=t(479),d=t(529),p=t(530),h=t(528),E=t(478),v=t(487),f=t(550);var O=e=>l.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),l.a.createElement("g",{fill:"#7a7a7a"},l.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),k=t(531),j=t(111),C=t.n(j);const g=(e,a)=>"link"===e.type?Object(u.isSamePath)(e.href,a):"category"===e.type&&e.items.some((e=>g(e,a)));function N({item:e,onItemClick:a,collapsible:t,activePath:c,...i}){const{items:r,label:o}=e,u=g(e,c),b=function(e){const a=Object(n.useRef)(e);return Object(n.useEffect)((()=>{a.current=e}),[e]),a.current}(u),[d,p]=Object(n.useState)((()=>!!t&&(!u&&e.collapsed))),h=Object(n.useRef)(null),[E,v]=Object(n.useState)(void 0),f=(e=!0)=>{var a;v(e?`${null===(a=h.current)||void 0===a?void 0:a.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{u&&!b&&d&&p(!1)}),[u,b,d]);const O=Object(n.useCallback)((e=>{e.preventDefault(),E||f(),setTimeout((()=>p((e=>!e))),100)}),[E]);return 0===r.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:o},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&u,[C.a.menuLinkText]:!t}),onClick:t?O:void 0,href:t?"#!":void 0},i),o),l.a.createElement("ul",{className:"menu__list",ref:h,style:{height:E},onTransitionEnd:()=>{d||f(!1)}},r.map((e=>l.a.createElement(y,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t,activePath:c})))))}function _({item:e,onItemClick:a,activePath:t,collapsible:n,...c}){const{href:i,label:r}=e,o=g(e,t);return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(E.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:i},Object(v.a)(i)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),r))}function y(e){switch(e.item.type){case"category":return l.a.createElement(N,e);case"link":default:return l.a.createElement(_,e)}}var S=function({path:e,sidebar:a,sidebarCollapsible:t=!0,onCollapse:c,isHidden:i}){const[r,o]=Object(n.useState)(!1),{navbar:{hideOnScroll:s},hideableSidebar:E}=Object(u.useThemeConfig)(),{isAnnouncementBarClosed:v}=Object(b.a)(),{scrollY:j}=Object(h.a)();Object(d.a)(r);const g=Object(p.a)();return Object(n.useEffect)((()=>{g===p.b.desktop&&o(!1)}),[g]),l.a.createElement("div",{className:Object(m.a)(C.a.sidebar,{[C.a.sidebarWithHideableNavbar]:s,[C.a.sidebarHidden]:i})},s&&l.a.createElement(f.a,{tabIndex:-1,className:C.a.sidebarLogo}),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",C.a.menu,{"menu--show":r,[C.a.menuWithAnnouncementBar]:!v&&0===j})},l.a.createElement("button",{"aria-label":r?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{o(!r)}},r?l.a.createElement("span",{className:Object(m.a)(C.a.sidebarMenuIcon,C.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(k.a,{className:C.a.sidebarMenuIcon,height:24,width:24})),l.a.createElement("ul",{className:"menu__list"},a.map((a=>l.a.createElement(y,{key:a.label,item:a,onItemClick:e=>{e.target.blur(),o(!1)},collapsible:t,activePath:e}))))),E&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",C.a.collapseSidebarButton),onClick:c},l.a.createElement(O,{className:C.a.collapseSidebarButtonIcon})))},w=t(523),I=t(525),M=t(485),P=t(117),x=t.n(P);function T({currentDocRoute:e,versionMetadata:a,children:t}){var r,s;const{siteConfig:b,isClient:d}=Object(i.default)(),{pluginId:p,permalinkToSidebar:h,docsSidebars:E,version:v}=a,f=h[e.path],k=E[f],[j,C]=Object(n.useState)(!1),[g,N]=Object(n.useState)(!1),_=Object(n.useCallback)((()=>{g&&N(!1),C(!j)}),[g]);return l.a.createElement(o.a,{key:d,searchMetadatas:{version:v,tag:Object(u.docVersionSearchTag)(p,v)}},l.a.createElement("div",{className:x.a.docPage},k&&l.a.createElement("div",{className:Object(m.a)(x.a.docSidebarContainer,{[x.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(x.a.docSidebarContainer)&&j&&N(!0)},role:"complementary"},l.a.createElement(S,{key:f,sidebar:k,path:e.path,sidebarCollapsible:null===(r=null===(s=b.themeConfig)||void 0===s?void 0:s.sidebarCollapsible)||void 0===r||r,onCollapse:_,isHidden:g}),g&&l.a.createElement("div",{className:x.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:_,onClick:_},l.a.createElement(O,null))),l.a.createElement("main",{className:x.a.docMainContainer},l.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",x.a.docItemWrapper,{[x.a.docItemWrapperEnhanced]:j})},l.a.createElement(c.a,{components:w.a},t)))))}a.default=function(e){const{route:{routes:a},versionMetadata:t,location:n}=e,c=a.find((e=>Object(M.matchPath)(n.pathname,e)));return c?l.a.createElement(T,{currentDocRoute:c,versionMetadata:t},Object(r.a)(a)):l.a.createElement(I.default,e)}},525:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(488);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);