(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{1334:function(){!function(){if("undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&"undefined"!==typeof navigator.userAgent&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return e=!1;e=!0}}))}catch(o){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var n=function(e){for(var t=0;t<e.length;t++)e[t][0].scrollTop=e[t][1],e[t][0].scrollLeft=e[t][2];e=[]};HTMLElement.prototype.focus=function(e){if(e&&e.preventScroll){var t=function(e){for(var t=e.parentNode,n=[],o=document.scrollingElement||document.documentElement;t&&t!==o;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push([t,t.scrollTop,t.scrollLeft]),t=t.parentNode;return t=o,n.push([t,t.scrollTop,t.scrollLeft]),n}(this);this.nativeFocus(),"function"===typeof setTimeout?setTimeout((function(){n(t)}),0):n(t)}else this.nativeFocus()}}}}()},9749:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(c){l=!0,r=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw r}}return i}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,l=void 0!==o&&o,c=e.priority,u=void 0!==c&&c,v=e.loading,p=e.lazyRoot,z=void 0===p?null:p,A=e.lazyBoundary,j=void 0===A?"200px":A,O=e.className,R=e.quality,I=e.width,T=e.height,B=e.style,D=e.objectFit,M=e.objectPosition,P=e.onLoadingComplete,U=e.placeholder,W=void 0===U?"empty":U,H=e.blurDataURL,_=y(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=d.useContext(g.ImageConfigContext),q=d.useMemo((function(){var e=b||Z||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:n})}),[Z]),N=_,F=n?"responsive":"intrinsic";"layout"in N&&(N.layout&&(F=N.layout),delete N.layout);var V=x;if("loader"in N){if(N.loader){var G=N.loader;V=function(e){e.config;var t=y(e,["config"]);return G(t)}}delete N.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=S(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(H=H||Q.blurDataURL,J=Q.src,(!F||"fill"!==F)&&(T=T||Q.height,I=I||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:J;var $=k(I),K=k(T),X=k(R),Y=!u&&("lazy"===v||"undefined"===typeof v);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Y=!1);w.has(t)&&(Y=!1);var ee,te=i(d.useState(!1),2),ne=te[0],oe=te[1],re=i(m.useIntersection({rootRef:z,rootMargin:j,disabled:!Y}),3),ie=re[0],ae=re[1],le=re[2],ce=!Y||ae,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:D,objectPosition:M};0;0;var me=Object.assign({},B,"raw"===F?{}:fe),ge="blur"!==W||ne?{}:{filter:"blur(20px)",backgroundSize:D||"cover",backgroundImage:'url("'.concat(H,'")'),backgroundPosition:M||"0% 0%"};if("fill"===F)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof K){var ve=K/$,pe=isNaN(ve)?"100%":"".concat(100*ve,"%");"responsive"===F?(ue.display="block",ue.position="relative",se=!0,de.paddingTop=pe):"intrinsic"===F?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",se=!0,de.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===F&&(ue.display="inline-block",ue.position="relative",ue.width=$,ue.height=K)}else 0;var he={src:E,srcSet:void 0,sizes:void 0};ce&&(he=C({config:q,src:t,unoptimized:l,layout:F,width:$,quality:X,sizes:n,loader:V}));var ye=t;0;var be;0;var we=(r(be={},"imagesrcset",he.srcSet),r(be,"imagesizes",he.sizes),be),Ee=d.default.useLayoutEffect,ze=d.useRef(P),Se=d.useRef(t);d.useEffect((function(){ze.current=P}),[P]),Ee((function(){Se.current!==t&&(le(),Se.current=t)}),[le,t]);var Ce=h({isLazy:Y,imgAttributes:he,heightInt:K,widthInt:$,qualityInt:X,layout:F,className:O,imgStyle:me,blurStyle:ge,loading:v,config:q,unoptimized:l,placeholder:W,loader:V,srcString:ye,onLoadingCompleteRef:ze,setBlurComplete:oe,setIntersection:ie,isVisible:ce},N);return d.default.createElement(d.default.Fragment,null,"raw"===F?d.default.createElement(L,Object.assign({},Ce)):d.default.createElement("span",{style:ue},se?d.default.createElement("span",{style:de},ee?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,d.default.createElement(L,Object.assign({},Ce))),u?d.default.createElement(s.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},we))):null)};var c,u,d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(1720)),s=(c=n(3121))&&c.__esModule?c:{default:c},f=n(139),m=n(9246),g=n(8730),v=(n(670),n(2700));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=arguments,n=function(n){var o=null!=t[n]?t[n]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){p(e,t,o[t])}))},o=1;o<arguments.length;o++)n(o);return e}function y(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},w=new Set,E=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(e){var t=e.config,n=e.src,o=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(v.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,o=e.width,r=e.quality,i=new URL("".concat(t.path).concat(j(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||o.toString()),r&&a.set("q",r.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,o=e.width,r=e.quality,i=["f_auto","c_limit","w_"+o,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(j(n))}],["akamai",function(e){var t=e.config,n=e.src,o=e.width;return"".concat(t.path).concat(j(n),"?imwidth=").concat(o)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function C(e){var t=e.config,n=e.src,o=e.unoptimized,r=e.layout,i=e.width,l=e.quality,c=e.sizes,u=e.loader;if(o)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,o){var r=e.deviceSizes,i=e.allSizes;if(o&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(o);l)u.push(parseInt(l[2]));if(u.length){var d,s=.01*(d=Math).min.apply(d,a(u));return{widths:i.filter((function(e){return e>=r[0]*s})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,r,c),s=d.widths,f=d.kind,m=s.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:s.map((function(e,o){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:o+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:l,width:s[m]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",o=z.get(n);if(o)return o(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function A(e,t,n,o,r,i){e&&e.src!==E&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===o&&i(!0),null===r||void 0===r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var L=function(e){var t=e.imgAttributes,n=e.heightInt,o=e.widthInt,r=e.qualityInt,i=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,s=e.placeholder,f=e.loading,m=e.srcString,g=e.config,v=e.unoptimized,p=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,E=e.setIntersection,z=e.onLoad,S=e.onError,k=(e.isVisible,y(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},k,t,"raw"===i?{height:n,width:o}:{},{decoding:"async","data-nimg":i,className:a,style:h({},l,c),ref:d.useCallback((function(e){E(e),(null===e||void 0===e?void 0:e.complete)&&A(e,m,0,s,b,w)}),[E,m,i,s,b,w]),onLoad:function(e){A(e.currentTarget,m,0,s,b,w),z&&z(e)},onError:function(e){"blur"===s&&w(!0),S&&S(e)}})),(u||"blur"===s)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},k,C({config:g,src:m,unoptimized:v,layout:i,width:o,quality:r,sizes:t.sizes,loader:p}),"raw"===i?{height:n,width:o}:{},{decoding:"async","data-nimg":i,style:l,className:a,loading:f||"lazy"}))))};function j(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8411:function(){},5675:function(e,t,n){e.exports=n(9749)},1163:function(e,t,n){e.exports=n(880)},7282:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});n(1334);var o=n(1720);Object.create;function r(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}Object.create;var i=function(e){return"".concat(e,"ms")},a=function(e){var t=e.height,n=e.innerHeight,o=e.innerWidth,a=e.isLoaded,l=e.isUnloading,c=e.left,u=e.originalTransform,d=e.top,s=e.transitionDuration,f=e.width,m=e.zoomMargin,g=i(s);if(!a||l){var v=r(["scale(1)","translate(0, 0)"],u?[u]:[],!0).join(" ");return{height:t,left:c,top:d,transform:v,WebkitTransform:v,transitionDuration:g,width:f}}var p=function(e){var t=e.height,n=e.innerHeight,o=e.innerWidth,r=e.width,i=e.zoomMargin,a=o/(r+i),l=n/(t+i);return Math.min(a,l)}({height:t,innerWidth:o,innerHeight:n,width:f,zoomMargin:m}),h=(o/2-(c+f/2))/p,y=(n/2-(d+t/2))/p,b=r(["scale(".concat(p,")"),"translate(".concat(h,"px, ").concat(y,"px)")],u?[u]:[],!0).join(" ");return{height:t,left:c,top:d,transform:b,WebkitTransform:b,transitionDuration:g,width:f}},l=function(e){var t=e.isLoaded,n=e.isUnloading,o=e.overlayBgColorEnd,r=e.overlayBgColorStart,a=e.transitionDuration,l=e.zoomZindex,c={backgroundColor:r,transitionDuration:i(a),zIndex:l};return t&&!n&&(c.backgroundColor=o),c},c={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},u=function(e){var t,n=(0,o.useRef)(e);n.current=e,t=function(){return function(){return n.current()}},(0,o.useEffect)(t,[])},d=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n="undefined"!==typeof window,r=function(e){var t=(0,o.useRef)(0),n=(0,o.useState)(e),r=n[0],i=n[1],a=(0,o.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){i(e)}))}),[]);return u((function(){cancelAnimationFrame(t.current)})),[r,a]}({width:n?window.innerWidth:e,height:n?window.innerHeight:t}),i=r[0],a=r[1];return(0,o.useEffect)((function(){if(n){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[n,a]),i};function s(e){var t=(0,o.useRef)();return(0,o.useEffect)((function(){t.current=e})),t.current}var f=(0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom Image":n,i=e.isActive,u=e.onLoad,f=e.onUnload,m=e.onZoomChange,g=e.overlayBgColorEnd,v=void 0===g?"rgba(255, 255, 255, 0.95)":g,p=e.overlayBgColorStart,h=void 0===p?"rgba(255, 255, 255, 0)":p,y=e.parentRef,b=e.portalEl,w=void 0===b?document.body:b,E=e.scrollableEl,z=void 0===E?window:E,S=e.transitionDuration,C=void 0===S?300:S,k=e.zoomMargin,x=void 0===k?0:k,A=e.zoomZindex,L=void 0===A?2147483647:A,j=(0,o.useRef)(null),O=(0,o.useState)(0)[1],R=(0,o.useState)(i),I=R[0],T=R[1],B=(0,o.useState)(!1),D=B[0],M=B[1],P=(0,o.useState)(!1),U=P[0],W=P[1],H=s(I),_=s(i),Z=s(D),q=d(),N=q.width,F=q.height,V=(0,o.useCallback)((function(e){e.preventDefault(),m&&m(!1)}),[m]),G=(0,o.useCallback)((function(e){!I||"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),m&&m(!1))}),[I,m]),J=(0,o.useCallback)((function(){O((function(e){return e+1})),!U&&m&&m(!1)}),[U,m]);(0,o.useEffect)((function(){return document.addEventListener("keydown",G),function(){document.removeEventListener("keydown",G)}}),[G]),(0,o.useEffect)((function(){var e;return null===(e=null===z||void 0===z?void 0:z.addEventListener)||void 0===e||e.call(z,"scroll",J),function(){var e;null===(e=null===z||void 0===z?void 0:z.removeEventListener)||void 0===e||e.call(z,"scroll",J)}}),[J,z]),(0,o.useEffect)((function(){!H&&I&&(M(!0),j.current&&j.current.focus({preventScroll:!0}))}),[I,H]),(0,o.useEffect)((function(){_&&!i&&W(!0),!_&&i&&T(!0)}),[i,_]),(0,o.useEffect)((function(){var e;return U&&(e=setTimeout((function(){M(!1),T(!1),W(!1)}),C)),function(){clearTimeout(e)}}),[U,C]),(0,o.useEffect)((function(){!Z&&D&&u(),Z&&!D&&f()}),[D,u,f,Z]);var Q=y.current||c,$=Q.getBoundingClientRect(),K=$.height,X=$.left,Y=$.top,ee=$.width,te=l({isLoaded:D,isUnloading:U,overlayBgColorEnd:v,overlayBgColorStart:h,transitionDuration:C,zoomZindex:L}),ne=a({height:K,isLoaded:D,innerHeight:F,innerWidth:N,isUnloading:U,left:X,originalTransform:Q.style.transform,top:Y,transitionDuration:C,width:ee,zoomMargin:x});return I?(0,o.createPortal)(o.default.createElement("div",{"aria-label":"Zoomed image","aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:te},o.default.createElement("div",{"data-rmiz-modal-content":!0,style:ne},t),o.default.createElement("button",{"aria-label":r,"data-rmiz-btn-close":!0,onClick:V,ref:j,type:"button"})),w):null})),m=((0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom image":n,i=e.isZoomed,a=e.overlayBgColorEnd,l=void 0===a?"rgba(255, 255, 255, 0.95)":a,c=e.overlayBgColorStart,u=void 0===c?"rgba(255, 255, 255, 0)":c,d=e.portalEl,s=e.onZoomChange,m=e.openText,g=void 0===m?"Zoom image":m,v=e.scrollableEl,p=e.transitionDuration,h=void 0===p?300:p,y=e.wrapElement,b=void 0===y?"div":y,w=e.wrapStyle,E=e.zoomMargin,z=void 0===E?0:E,S=e.zoomZindex,C=void 0===S?2147483647:S,k=(0,o.useState)(!1),x=k[0],A=k[1],L=(0,o.useRef)(null),j=(0,o.useRef)(null),O=(0,o.useCallback)((function(e){!i&&s&&(e.preventDefault(),s(!0))}),[i,s]),R=(0,o.useCallback)((function(){A(!0)}),[]),I=(0,o.useCallback)((function(){A(!1),j.current&&j.current.focus({preventScroll:!0})}),[]),T=x?"hidden":"visible";return o.default.createElement(o.StrictMode,null,o.default.createElement(b,{"data-rmiz-wrap":T,ref:L,style:w},t,o.default.createElement("button",{"aria-label":g,"data-rmiz-btn-open":!0,onClick:O,ref:j,type:"button"}),"undefined"!==typeof window&&o.default.createElement(f,{closeText:r,isActive:i,onLoad:R,onUnload:I,onZoomChange:s,overlayBgColorEnd:l,overlayBgColorStart:u,parentRef:L,portalEl:d,scrollableEl:v,transitionDuration:h,zoomMargin:z,zoomZindex:C},t)))})),(0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom Image":n,i=e.onUnload,u=e.onLoad,s=e.overlayBgColorEnd,f=void 0===s?"rgba(255, 255, 255, 0.95)":s,m=e.overlayBgColorStart,g=void 0===m?"rgba(255, 255, 255, 0)":m,v=e.parentRef,p=e.portalEl,h=void 0===p?document.body:p,y=e.scrollableEl,b=void 0===y?window:y,w=e.transitionDuration,E=void 0===w?300:w,z=e.zoomMargin,S=void 0===z?0:z,C=e.zoomZindex,k=void 0===C?2147483647:C,x=(0,o.useRef)(null),A=(0,o.useState)(0)[1],L=(0,o.useState)(!1),j=L[0],O=L[1],R=(0,o.useState)(!1),I=R[0],T=R[1],B=d(),D=B.width,M=B.height,P=(0,o.useCallback)((function(e){e.preventDefault(),T(!0)}),[]),U=(0,o.useCallback)((function(e){"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),T(!0))}),[]),W=(0,o.useCallback)((function(){A((function(e){return e+1})),I||T(!0)}),[I]);(0,o.useEffect)((function(){return document.addEventListener("keydown",U),function(){document.removeEventListener("keydown",U)}}),[U]),(0,o.useEffect)((function(){var e;return null===(e=null===b||void 0===b?void 0:b.addEventListener)||void 0===e||e.call(b,"scroll",W),function(){var e;null===(e=null===b||void 0===b?void 0:b.removeEventListener)||void 0===e||e.call(b,"scroll",W)}}),[W,b]),(0,o.useEffect)((function(){O(!0),u(),x.current&&x.current.focus({preventScroll:!0})}),[u]),(0,o.useEffect)((function(){var e=I?setTimeout(i,E):null;return function(){e&&clearTimeout(e)}}),[I,i,E]);var H=v.current||c,_=H.getBoundingClientRect(),Z=_.height,q=_.left,N=_.top,F=_.width,V=l({isLoaded:j,isUnloading:I,overlayBgColorEnd:f,overlayBgColorStart:g,transitionDuration:E,zoomZindex:k}),G=a({height:Z,isLoaded:j,innerHeight:M,innerWidth:D,isUnloading:I,left:q,originalTransform:H.style.transform,top:N,transitionDuration:E,width:F,zoomMargin:S});return(0,o.createPortal)(o.default.createElement("div",{"aria-label":"Zoomed image","aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:V},o.default.createElement("div",{"data-rmiz-modal-content":!0,style:G},t),o.default.createElement("button",{"aria-label":r,"data-rmiz-btn-close":!0,onClick:P,ref:x})),h)}))),g=(0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom image":n,i=e.overlayBgColorEnd,a=void 0===i?"rgba(255, 255, 255, 0.95)":i,l=e.overlayBgColorStart,c=void 0===l?"rgba(255, 255, 255, 0)":l,u=e.portalEl,d=e.openText,s=void 0===d?"Zoom image":d,f=e.scrollableEl,g=e.transitionDuration,v=void 0===g?300:g,p=e.wrapElement,h=void 0===p?"div":p,y=e.wrapStyle,b=e.zoomMargin,w=void 0===b?0:b,E=e.zoomZindex,z=void 0===E?2147483647:E,S=(0,o.useState)(!1),C=S[0],k=S[1],x=(0,o.useState)(!1),A=x[0],L=x[1],j=(0,o.useRef)(null),O=(0,o.useRef)(null),R=(0,o.useCallback)((function(e){C||(e.preventDefault(),k(!0))}),[C]),I=(0,o.useCallback)((function(){L(!0)}),[]),T=(0,o.useCallback)((function(){k(!1),L(!1),O.current&&O.current.focus({preventScroll:!0})}),[]),B=C&&A?"hidden":"visible";return o.default.createElement(o.StrictMode,null,o.default.createElement(h,{"data-rmiz-wrap":B,ref:j,style:y},t,o.default.createElement("button",{"aria-label":s,"data-rmiz-btn-open":!0,onClick:R,ref:O}),"undefined"!==typeof window&&C&&o.default.createElement(m,{closeText:r,onLoad:I,onUnload:T,overlayBgColorEnd:a,overlayBgColorStart:c,parentRef:j,portalEl:u,scrollableEl:f,transitionDuration:v,zoomMargin:w,zoomZindex:z},t)))}))}}]);