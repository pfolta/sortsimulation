!function(){"use strict";var e,r={5350:function(e,r,t){var n=t(7294),o=t(3935),a=t(3253),i=t.n(a),l=(t(1249),t(405)),u=t(3727),c=t(5977),s=(t(7941),t(2526),t(9601),t(8509)),m=t(8268),d=t(6896),f=t(9163),p=(0,f.F4)(["from{transform:translateY(calc(100% + (100vh - 100%) / 2));}to{transform:translateY(0);}"]),b=(0,f.F4)(["from{transform:translateY(0);}to{transform:translateY(calc(100% + (100vh - 100%) / 2));}"]),g=["className"];function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}var y=250,v=(0,f.ZP)((function(e){var r=e.className,t=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,g);return n.createElement(i(),h({portalClassName:r,className:"".concat(r,"__Content"),overlayClassName:"".concat(r,"__Overlay")},t))})).attrs({closeTimeoutMS:y}).withConfig({displayName:"Modal__StyledReactModal",componentId:"sc-1yg086d-0"})(["&__Overlay{display:grid;place-items:end center;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2;@media (min-width:","px){place-items:center;}&.ReactModal__Overlay--after-open{animation:"," ","ms ease-out forwards;}&.ReactModal__Overlay--before-close{animation:"," ","ms ease-in forwards;}}&__Content{display:grid;position:relative;background:",";box-shadow:0 0.5rem 2rem 0 rgba(0,0,0,0.75);border-radius:1rem 1rem 0 0;width:min(","px,100vw);max-height:calc(100vh - ",");outline:none;overflow:hidden;@media (min-width:","px){border-radius:1rem;}&.ReactModal__Content--after-open{animation:"," ","ms ease-out forwards;}&.ReactModal__Content--before-close{animation:"," ","ms ease-in forwards;}}"],720,(function(e){var r,t=e.theme;return r="".concat(t.colors[t.modal.overlay],"80"),(0,f.F4)(["from{background-color:inherit;}to{background-color:",";}"],r)}),y,(function(e){var r,t=e.theme;return r="".concat(t.colors[t.modal.overlay],"80"),(0,f.F4)(["from{background-color:",";}to{background-color:inherit;}"],r)}),y,(function(e){var r=e.theme;return r.colors[r.modal.background]}),720,(function(e){return e.theme.modal["margin-top"]}),720,p,y,b,y),w=f.ZP.button.withConfig({displayName:"Modal__CloseButton",componentId:"sc-1yg086d-1"})(["all:unset;display:grid;padding:0.25rem;position:absolute;top:1rem;right:1rem;background-color:",";color:",";border-radius:0.25rem;:focus{box-shadow:",";}:hover{background-color:",";color:",";}:active{background-color:",";color:",";}"],(function(e){var r=e.theme;return r.colors[r.modal.close.background]}),(function(e){var r=e.theme;return r.colors[r.modal.close.color]}),(function(e){return e.theme.focus.boxShadow}),(function(e){var r=e.theme;return r.colors[r.modal.close.hover.background]}),(function(e){var r=e.theme;return r.colors[r.modal.close.hover.color]}),(function(e){var r=e.theme;return r.colors[r.modal.close.active.background]}),(function(e){var r=e.theme;return r.colors[r.modal.close.active.color]})),E=f.ZP.div.withConfig({displayName:"Modal__StyledModalBody",componentId:"sc-1yg086d-2"})(["overflow:auto;max-height:calc(100vh - ",");& > *{padding:",";}"],(function(e){return e.theme.modal["margin-top"]}),(function(e){return e.theme.modal.padding})),k=function(e){var r=e.children,t=e.isOpen,o=e.onClose,a=(0,d.Z)(),i=(0,n.useRef)(null);return n.createElement(v,{isOpen:t,onRequestClose:o,onAfterOpen:function(){return(0,s.Qp)(i.current)},onAfterClose:s.tP},n.createElement(w,{title:a.formatMessage({id:"close"}),onClick:o},n.createElement(m.Z,{size:20})),n.createElement(E,{ref:i},r))},A=(t(1817),t(1539),t(2165),t(6992),t(8783),t(3948),t(7042),t(8309),t(1038),t(4916),t(7601),t(49)),S=t(4012),q=f.ZP.div.withConfig({displayName:"ArrayView",componentId:"sc-75wn3y-0"})(["display:grid;grid-template-columns:repeat(",",1fr);align-items:end;height:30vh;"],(function(e){return e.array.length})),O=(t(6699),f.ZP.div.withConfig({shouldForwardProp:function(e){return["children","style"].includes(e)}}).withConfig({displayName:"ArrayViewElement",componentId:"sc-17cykbj-0"})(['transition:transform 100ms ease-out;@media (prefers-reduced-motion:no-preference){:hover{transform:translateY(-1rem);::before{content:"";position:absolute;top:0;left:0;right:0;bottom:-1rem;z-index:-1;}}}'])),_=(0,f.ZP)(O).attrs((function(e){return{style:{backgroundPosition:(e.value-1)/(e.size-1)*100+"% 0%"}}})).withConfig({displayName:"ImageElement__StyledImageElement",componentId:"sc-194fbu7-0"})(['background-image:url("','");background-repeat:no-repeat;background-size:',"% 100%;filter:grayscale(",");height:100%;transform:translateZ(0);"],(function(e){return e.image}),(function(e){return 100*e.size}),(function(e){return e.grayscale?"100%":"0%"})),x=function(e){return n.createElement(_,e)},j=(0,n.memo)(x),C=(t(2222),t(8699));function I(){return I=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},I.apply(this,arguments)}var P=(0,f.ZP)(O).attrs((function(e){var r=e.value,t=e.maxValue;return{style:{fontSize:(e.contentWidth||0)/2+"px",height:r/t*100+"%"}}})).withConfig({displayName:"NumberElement__StyledNumberElement",componentId:"sc-12klxgm-0"})(["background-color:",";background-image:linear-gradient( to bottom,",","," );box-shadow:0 0 0 1px "," inset,0 0 0 2px "," inset;color:",";text-shadow:0 1px 0 ",";font-size:0;font-weight:bold;text-align:center;padding-top:0.2em;"],(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["background-base-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["background-top-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["background-bottom-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["border-outside-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["border-inside-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["text-color-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["text-shadow-weight"])]})),N=f.ZP.span.withConfig({displayName:"NumberElement__StyledNumberElementLabel",componentId:"sc-12klxgm-1"})(["display:block;height:100%;overflow:hidden;"]),Z=function(e){return n.createElement(C.Z,null,(function(r){var t,o=r.contentRect,a=r.measureRef;return n.createElement(P,I({ref:a},e,{contentWidth:null===(t=o.entry)||void 0===t?void 0:t.width}),n.createElement(N,null,e.value))}))},M=(0,n.memo)(Z),T=function(e){var r=e.array,t=e.grayscaleMap,o=e.image;return n.createElement(q,{array:r},r.map((function(e,a){return n.createElement(j,{key:a,value:e,size:r.length,image:o,grayscale:t[a]})})))},L=(0,n.memo)(T),V=["array","colorMap"];function z(){return z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},z.apply(this,arguments)}function R(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var U=(0,f.ZP)(q).withConfig({displayName:"NumberArrayView__StyledNumberArrayView",componentId:"sc-178tw0v-0"})(["column-gap:1px;"]),F=function(e){var r,t=e.array,o=e.colorMap,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,V),i=Math.max.apply(Math,function(e){if(Array.isArray(e))return R(e)}(r=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return R(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?R(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return n.createElement(U,{array:t},t.map((function(e,r){return n.createElement(M,z({key:r,value:e,maxValue:i,color:o[r]},a))})))},H=(0,n.memo)(F),D=(t(9254),f.ZP.a.withConfig({displayName:"Link",componentId:"sc-jbg31d-0"})(["color:",";cursor:pointer;:hover{text-decoration:none;}"],(function(e){var r=e.theme;return r.colors[r.link.color]}))),B=(0,f.ZP)(D).attrs({target:"_blank",rel:"noreferrer"}).withConfig({displayName:"Link__ExternalLink",componentId:"sc-jbg31d-1"})([""]),J=f.ZP.h1.withConfig({displayName:"Typography__Title",componentId:"sc-1p8uj1t-0"})(["font-size:2rem;font-weight:bold;"]),Y=f.ZP.h2.withConfig({displayName:"Typography__Heading",componentId:"sc-1p8uj1t-1"})(["font-size:1.5rem;font-weight:bold;margin-bottom:1rem;"]),$=f.ZP.h3.withConfig({displayName:"Typography__SubHeading",componentId:"sc-1p8uj1t-2"})(["color:",";font-weight:bold;text-transform:uppercase;"],(function(e){var r=e.theme;return r.colors[r.typography.subheading.color]})),W=f.ZP.p.withConfig({displayName:"Typography__Paragraph",componentId:"sc-1p8uj1t-3"})(["margin-bottom:1rem;:last-child{margin-bottom:0;}"]),G=t(7007);function Q(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var X=function(e){var r,t,o=window.matchMedia(e),a=(r=(0,n.useState)(o.matches),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(r,t)||function(e,r){if(e){if("string"==typeof e)return Q(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Q(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],l=a[1],u=function(e){return l(e.matches)};return(0,n.useEffect)((function(){return o.addEventListener("change",u),function(){return o.removeEventListener("change",u)}}),[o]),i},K=function(){return(0,G.I0)()},ee=G.v9,re=JSON.parse('{"body":{"background":"black-500","color":"white-300"},"colors":{"black-100":"#666666","black-300":"#4d4d4d","black-500":"#333333","black-700":"#1a1a1a","black-900":"#000000","blue-100":"#8cd5ff","blue-300":"#64baff","blue-500":"#3689e6","blue-700":"#0d52bf","blue-900":"#002e99","gray-100":"#fafafa","gray-300":"#d4d4d4","gray-500":"#abacae","gray-700":"#7e8087","gray-900":"#555761","green-100":"#d1ff82","green-300":"#9bdb4d","green-500":"#68b723","green-700":"#3a9104","green-900":"#206b00","orange-100":"#ffc27d","orange-300":"#ffa154","orange-500":"#f37329","orange-700":"#cc3b02","orange-900":"#a62100","pink-100":"#fe9ab8","pink-300":"#f4679d","pink-500":"#de3e80","pink-700":"#bc245d","pink-900":"#910e38","purple-100":"#e4c6fa","purple-300":"#cd9ef7","purple-500":"#a56de2","purple-700":"#7239b3","purple-900":"#452981","red-100":"#ff8c82","red-300":"#ed5353","red-500":"#c6262e","red-700":"#a10705","red-900":"#7a0000","teal-100":"#89ffdd","teal-300":"#43d6b5","teal-500":"#28bca3","teal-700":"#0e9a83","teal-900":"#007367","white-100":"#ffffff","white-300":"#e5e5e5","white-500":"#cccccc","white-700":"#b2b2b2","white-900":"#999999","yellow-100":"#fff394","yellow-300":"#ffe16b","yellow-500":"#f9c440","yellow-700":"#d48e15","yellow-900":"#ad5f00"},"focus":{"boxShadow":"0 0 0 0.1875rem rgba(66, 153, 225, 0.5)"},"link":{"color":"blue-300"},"modal":{"background":"black-500","close":{"background":"black-300","color":"white-700","hover":{"background":"black-300","color":"white-300"},"active":{"background":"black-100","color":"white-300"}},"margin-top":"2rem","overlay":"black-900","padding":"1rem"},"number-element":{"background-base-weight":900,"background-top-weight":700,"background-bottom-weight":900,"border-inside-weight":900,"border-outside-weight":300,"text-color-weight":100,"text-shadow-weight":900},"typography":{"subheading":{"color":"white-500"}}}'),te=JSON.parse('{"body":{"background":"white-100","color":"black-500"},"colors":{"black-100":"#666666","black-300":"#4d4d4d","black-500":"#333333","black-700":"#1a1a1a","black-900":"#000000","blue-100":"#8cd5ff","blue-300":"#64baff","blue-500":"#3689e6","blue-700":"#0d52bf","blue-900":"#002e99","gray-100":"#fafafa","gray-300":"#d4d4d4","gray-500":"#abacae","gray-700":"#7e8087","gray-900":"#555761","green-100":"#d1ff82","green-300":"#9bdb4d","green-500":"#68b723","green-700":"#3a9104","green-900":"#206b00","orange-100":"#ffc27d","orange-300":"#ffa154","orange-500":"#f37329","orange-700":"#cc3b02","orange-900":"#a62100","pink-100":"#fe9ab8","pink-300":"#f4679d","pink-500":"#de3e80","pink-700":"#bc245d","pink-900":"#910e38","purple-100":"#e4c6fa","purple-300":"#cd9ef7","purple-500":"#a56de2","purple-700":"#7239b3","purple-900":"#452981","red-100":"#ff8c82","red-300":"#ed5353","red-500":"#c6262e","red-700":"#a10705","red-900":"#7a0000","teal-100":"#89ffdd","teal-300":"#43d6b5","teal-500":"#28bca3","teal-700":"#0e9a83","teal-900":"#007367","white-100":"#ffffff","white-300":"#e5e5e5","white-500":"#cccccc","white-700":"#b2b2b2","white-900":"#999999","yellow-100":"#fff394","yellow-300":"#ffe16b","yellow-500":"#f9c440","yellow-700":"#d48e15","yellow-900":"#ad5f00"},"focus":{"boxShadow":"0 0 0 0.25rem rgba(66, 153, 225, 0.5)"},"link":{"color":"blue-700"},"modal":{"background":"white-100","close":{"background":"white-300","color":"black-100","hover":{"background":"white-300","color":"black-500"},"active":{"background":"white-500","color":"black-500"}},"margin-top":"2rem","overlay":"black-900","padding":"1rem"},"number-element":{"background-base-weight":500,"background-top-weight":300,"background-bottom-weight":500,"border-inside-weight":300,"border-outside-weight":700,"text-color-weight":900,"text-shadow-weight":100},"typography":{"subheading":{"color":"black-100"}}}'),ne=["blue","gray","green","orange","pink","purple","red","teal","yellow"],oe={dark:re,light:te};function ae(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return ie(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function le(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ue(e){return function(e){if(Array.isArray(e))return me(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||se(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,r){if(e){if("string"==typeof e)return me(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?me(e,r):void 0}}function me(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t(3161),t(9653),t(4747),t(6535),t(9244),Array.almostSorted=function(e,r){return Array.sorted(e).chunked(r+1).flatMap((function(e){return e.shuffled()}))},Array.fewUnique=function(e,r){var t=Array.random(e).slice(0,r);return[].concat(ae(t),ae(Array.range(e-r).map((function(){return t.random()})))).shuffled()},Array.random=function(e){return Array.sorted(e).shuffled()},Array.range=function(e,r){return Array.isArray(e)?ae(e.keys()):void 0!==r?Array.from({length:r-e},(function(r,t){return e+t})):ae(Array(e).keys())},Array.reversed=function(e){return Array.sorted(e).reverse()},Array.sorted=function(e){return Array.range(1,e+1)},Array.prototype.chunked=function(e){var r=this;if(!Number.isInteger(e))throw new TypeError("size ".concat(e," must be an integer."));if(e<=0)throw new RangeError("size ".concat(e," must be greater than zero."));return Array.range(Math.ceil(this.length/e)).map((function(t,n){return r.slice(n*e,n*e+e)}))},Array.prototype.first=function(){if(this.isEmpty())throw new RangeError("Array is empty.");return this[0]},Array.prototype.isEmpty=function(){return 0===this.length},Array.prototype.isSorted=function(){for(var e=1;e<this.length;e++)if(this[e-1]>this[e])return!1;return!0},Array.prototype.last=function(){if(this.isEmpty())throw new RangeError("Array is empty.");return this[this.length-1]},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.shuffled=function(){for(var e=function(e){if(Array.isArray(e))return le(e)}(t=this)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,r){if(e){if("string"==typeof e)return le(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?le(e,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=e.length-1;r>0;r--)e.swap(r,Math.floor(Math.random()*(r+1)));var t;return e},Array.prototype.swap=function(e,r){var t=this;[e,r].forEach((function(e){if(!Number.isInteger(e))throw new TypeError("index ".concat(e," must be an integer."));if(e<0||e>=t.length)throw new RangeError("index ".concat(e," must be greater than zero and less than ").concat(t.length))}));var n=this[e];return this[e]=this[r],this[r]=n,this};var de=function(){var e,r,t,o,a,i,l=ce((0,n.useState)(Array.random(30)),2),u=l[0],c=l[1],s=ce((0,n.useState)(Array.range(u).map((function(){return ue(ne).random()}))),2),m=s[0],d=s[1],f=X("(prefers-reduced-motion: reduce)");return e=!f,r=1e3,t=function(){c((function(e){return e.shuffled()})),d(Array.range(u).map((function(){return ue(ne).random()})))},o=(0,n.useRef)(),a=(0,n.useRef)(performance.now()),i=function e(n){var i=n-a.current;i>=r&&(t(i),a.current=n),o.current=requestAnimationFrame(e)},(0,n.useLayoutEffect)((function(){return e&&(o.current=requestAnimationFrame(i)),function(){o.current&&cancelAnimationFrame(o.current)}}),[e,r]),n.createElement("section",null,n.createElement(Y,null,n.createElement(S.Z,{id:"about",values:{productName:"SortSimulation"}})),n.createElement(W,null,n.createElement(S.Z,{id:"version",values:{version:"3.0.0"}})," (","ea38ed8",")",n.createElement("br",null),n.createElement(S.Z,{id:"copyright.all_rights_reserved"}),n.createElement("br",null),n.createElement(A.Ji,{value:1646052161289,timeZone:"UTC",dateStyle:"medium"})," ",n.createElement(A.qN,{value:1646052161289,timeZone:"UTC",timeZoneName:"short",hour:"numeric",minute:"numeric",second:"numeric"})),n.createElement(W,null,n.createElement(B,{href:"https://github.com/pfolta/sortsimulation.git"},"GitHub"),","," ",n.createElement(B,{href:"https://github.com/pfolta/sortsimulation/issues"},"GitHub Issues")),n.createElement(H,{array:u,colorMap:m}))},fe=function(){return n.createElement("section",null,n.createElement(Y,null,n.createElement(S.Z,{id:"help"})),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement(W,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo.XYZ"))},pe=function(){return n.createElement("section",null,n.createElement(Y,null,n.createElement(S.Z,{id:"settings"})),n.createElement($,null,n.createElement(S.Z,{id:"preview"})))},be=function(){var e=(0,c.k6)(),r=(0,c.TH)(),t=function(){return e.push("/")};return n.createElement(n.Fragment,null,n.createElement(k,{onClose:t,isOpen:"/about"===r.pathname},n.createElement(de,null)),n.createElement(k,{onClose:t,isOpen:"/help"===r.pathname},n.createElement(fe,null)),n.createElement(k,{onClose:t,isOpen:"/settings"===r.pathname},n.createElement(pe,null)))},ge=(t(2707),t(9720),t(9826),t(6755),t(3123),t(7327),t(5003),t(9337),JSON.parse('{"about":"Über {productName}","algorithm.bubble_sort.name":"Bubblesort","algorithm.selection_sort.name":"Selectionsort","close":"Schließen","copyright.all_rights_reserved":"Alle Rechte vorbehalten.","help":"Hilfe","phase.compare":"Vergleiche","phase.swap":"Tausche","preview":"Vorschau","settings":"Einstellungen","version":"Version {version}","welcome.title":"Willkommen bei SortSimulation"}')),he=JSON.parse('{"about":"About {productName}","algorithm.bubble_sort.name":"Bubble sort","algorithm.selection_sort.name":"Selection sort","close":"Close","copyright.all_rights_reserved":"All rights reserved.","help":"Help","phase.compare":"Compare","phase.swap":"Swap","preview":"Preview","settings":"Settings","version":"Version {version}","welcome.title":"Welcome to SortSimulation"}');function ye(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ve(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ye(Object(t),!0).forEach((function(r){we(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ye(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function we(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Ee,ke,Ae={"en-US":{language:"English",locale:"en-US",messages:he},"de-DE":{language:"Deutsch",locale:"de-DE",messages:ve(ve({},he),ge)}},Se=t(4594),qe={locale:(Ee=navigator.languages||[navigator.language],ke=Object.keys(Ae),Ee.map((function(e){var r=ke.find((function(r){return r.toLowerCase()===e.toLowerCase()})),t=ke.find((function(r){return r.toLowerCase().startsWith(e.toLowerCase().split(/[-_]/).first())}));return r||t})).find((function(e){return void 0!==e}))||"en-US"),theme:"light"},Oe=(0,Se.oM)({name:"settings",initialState:qe,reducers:{setLocale:function(e,r){e.locale=r.payload},setTheme:function(e,r){e.theme=r.payload},toggleTheme:function(e){e.theme=oe[e.theme]===oe.dark?"light":"dark"}}}),_e=Oe.reducer,xe=Oe.actions,je=xe.setLocale,Ce=xe.setTheme,Ie=xe.toggleTheme,Pe=(0,Se.xC)({reducer:{settings:_e}});function Ne(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var Ze=f.ZP.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-tii99s-0"})(["background-color:#e5e9f0;color:#4c566a;font-size:0.875rem;padding:1rem;"]),Me=function(){var e=ee((function(e){return e.settings})).locale,r=K();return n.createElement(Ze,null,"© Peter Folta. ",n.createElement(S.Z,{id:"copyright.all_rights_reserved"}),n.createElement("br",null),n.createElement("select",{value:e,onChange:function(e){return r(je(e.target.value))}},Object.entries(Ae).sort().map((function(e){var r,t,o=(t=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(r,t)||function(e,r){if(e){if("string"==typeof e)return Ne(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ne(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];return n.createElement("option",{key:a,value:a},i.language)}))))},Te=t(8231),Le=t(2549),Ve=t(7662),ze=t(6103),Re=f.ZP.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1hs4np2-0"})(["background-color:peachpuff;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:1;"]),Ue=f.ZP.ul.withConfig({displayName:"Header__Controls",componentId:"sc-1hs4np2-1"})(["display:flex;"]),Fe=f.ZP.li.withConfig({displayName:"Header__Control",componentId:"sc-1hs4np2-2"})(["list-style-type:none;"]),He=f.ZP.button.withConfig({displayName:"Header__Button",componentId:"sc-1hs4np2-3"})(["background:none;color:#2e3440;border:none;border-radius:0.25rem;display:flex;padding:0.25rem;:hover{background-color:rgba(0,0,0,0.25);}"]),De=(0,f.ZP)(u.rU).withConfig({displayName:"Header__StyledLink",componentId:"sc-1hs4np2-4"})(["background:none;color:#2e3440;border:none;border-radius:0.25rem;cursor:default;display:flex;padding:0.25rem;:hover{background-color:rgba(0,0,0,0.25);}"]),Be=function(){var e=ee((function(e){return e.settings})).theme,r=K();return n.createElement(Re,null,n.createElement(J,null,"SortSimulation"),n.createElement(Ue,null,n.createElement(Fe,null,n.createElement(He,{onClick:function(){return r(Ie())}},oe[e]===oe.dark?n.createElement(Te.Z,null):n.createElement(Le.Z,null))),n.createElement(Fe,null,n.createElement(De,{to:"/settings"},n.createElement(Ve.Z,null))),n.createElement(Fe,null,n.createElement(He,null,n.createElement(ze.Z,null)))))},Je=t(9558),Ye=function(e){var r=e.children,t=ee((function(e){return e.settings})).locale,o=Ae[t];return n.createElement(Je.Z,{locale:o.locale,messages:o.messages},n.createElement(l.ql,{htmlAttributes:{lang:o.locale}}),r)},$e=function(e){var r=e.children;return n.createElement(G.zt,{store:Pe},r)},We=(t(595),(0,f.vJ)(['*,*::before,*::after{box-sizing:border-box;font:inherit;margin:0;padding:0;cursor:default;user-select:none;}html{font:normal 400 14px/1.4 "Inter",system-ui;}@supports (font-variation-settings:normal){html{font-family:"Inter var",system-ui;}}body{background-color:',";color:",";}"],(function(e){var r=e.theme;return r.colors[r.body.background]}),(function(e){var r=e.theme;return r.colors[r.body.color]}))),Ge=function(e){var r=e.children,t=ee((function(e){return e.settings})).theme,o=X("(prefers-color-scheme: dark)"),a=K();return(0,n.useEffect)((function(){a(Ce(o?"dark":"light"))}),[o,a]),n.createElement(f.f6,{theme:oe[t]},n.createElement(We,null),r)},Qe=t(1810),Xe=function(){var e=Array.random(25);return n.createElement(n.StrictMode,null,n.createElement($e,null,n.createElement(l.B6,null,n.createElement(Ye,null,n.createElement(Ge,null,n.createElement(u.UT,null,n.createElement(Be,null),n.createElement(L,{array:e,image:Qe,grayscaleMap:Array.range(e).map((function(){return!1}))}),n.createElement(H,{array:e,colorMap:Array.range(e).map((function(){return"gray"}))}),n.createElement(be,null),n.createElement(Me,null)))))))},Ke=document.querySelector("#app");(0,a.setAppElement)(Ke),(0,o.render)(n.createElement(Xe,null),Ke)},1810:function(e,r,t){e.exports=t.p+"assets/image.c8a6c208be6217524a27.jpg"}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=function(r,t,o,a){if(!t){var i=1/0;for(s=0;s<e.length;s++){t=e[s][0],o=e[s][1],a=e[s][2];for(var l=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,o,a]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",function(){n.b=document.baseURI||self.location.href;var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,a,i=t[0],l=t[1],u=t[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var s=u(n)}for(r&&r(t);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},t=self.webpackChunksortsimulation=self.webpackChunksortsimulation||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[216],(function(){return n(5350)}));o=n.O(o)}();