(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{38:function(e,t,n){var r=n(39),o=n(40),a=n(16),i=n(41);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},39:function(e,t,n){var r=n(17);e.exports=function(e){if(Array.isArray(e))return r(e)}},40:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},41:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(10),o=n.n(r),a=n(11),i=n.n(a),l=n(0),c=n.n(l),s=n(2),u=(n(43),Object(s.cn)("Table")),b=function(e){var t=e.children,n=e.className,r=i()(e,["children","className"]);return c.a.createElement("div",o()({className:u(null,[n])},r),c.a.createElement("table",{className:u("Root")},t))},d=function(e){var t=e.children,n=i()(e,["children"]);return c.a.createElement("thead",o()({className:u("Head")},n)," ",t)},f=function(e){var t=e.children,n=i()(e,["children"]);return c.a.createElement("th",o()({className:u("HeadCell")},n),t)},p=function(e){var t=e.children,n=i()(e,["children"]);return c.a.createElement("tr",o()({className:u("Row")},n),t)},h=function(e){var t=e.children,n=e.color,r=e.align,a=void 0===r?"center":r,l=e.borderLeft,s=e.borderRight,b=e.borderBottom,d=e.borderTop,f=i()(e,["children","color","align","borderLeft","borderRight","borderBottom","borderTop"]);return c.a.createElement("td",o()({className:u("Cell",{color:n,align:a,borderLeft:l,borderRight:s,borderBottom:b,borderTop:d})},f),t)},m=function(e){var t=e.children,n=i()(e,["children"]);return c.a.createElement("tbody",o()({className:u("Body")},n),t)}},43:function(e,t,n){var r=n(7),o=n(44);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},44:function(e,t,n){(t=n(8)(!1)).push([e.i,".Table-Root{width:100%;border-collapse:collapse;table-layout:fixed}.Table-Row{height:30px}.Table-Head .Table-Row:last-child{border:2px solid #1e1e1e}.Table-HeadCell{font-size:16px;font-weight:bold}.Table-Cell{padding:10px;font-size:14px;font-weight:normal;overflow-x:hidden}.Table-Cell_align_center{text-align:center}.Table-Cell_align_left{text-align:left}.Table-Cell_align_right{text-align:right}.Table-Cell_borderRight{border-right:2px solid #1e1e1e}.Table-Cell_borderLeft{border-left:2px solid #1e1e1e}.Table-Cell_color_red{color:#f84960}.Table-Cell_color_green{color:#02c076}@media screen and (max-width: 600px){.Table-Cell{padding:4px;overflow-x:scroll}.Table-Cell::-webkit-scrollbar{width:0;height:0}.Table-Cell::-webkit-scrollbar-thumb{display:block}.Table-Cell::-webkit-scrollbar-track{background:transparent}}",""]),e.exports=t},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){return isNaN(e)?"":Number(e).toFixed(t)}},46:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},47:function(e,t,n){var r=n(48);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},48:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},49:function(e,t,n){var r=n(50),o=n(46);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},50:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},51:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},52:function(e,t,n){var r=n(7),o=n(53);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},53:function(e,t,n){(t=n(8)(!1)).push([e.i,".Landing{display:flex;height:100%;justify-content:center}.Landing-Table{width:100%;max-height:100%;overflow-x:hidden;overflow-y:auto}.Landing-Table::-webkit-scrollbar{width:5px}.Landing-Table::-webkit-scrollbar-thumb{display:none;height:90px;background:#646464;border-radius:10px}.Landing-Table::-webkit-scrollbar-track{background:transparent}.Landing-Table:hover::-webkit-scrollbar-thumb{display:block}@media screen and (max-width: 700px){.Landing-Table::-webkit-scrollbar-thumb{display:block}}",""]),e.exports=t},56:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),a=n(12),i=n.n(a),l=n(1),c=n.n(l),s=n(38),u=n.n(s),b=n(14),d=n.n(b),f=n(3),p=n.n(f),h=n(4),m=n.n(h),y=n(46),g=n.n(y),v=n(47),x=n.n(v),w=n(49),S=n.n(w),k=n(51),E=n.n(k),T=n(0),O=n.n(T),C=n(9),j=n(42),_=n(2),L=(n(52),n(45));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E()(e);if(t){var o=E()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S()(this,n)}}var D=Object(_.cn)("Landing"),M=function(e){x()(n,e);var t=N(n);function n(e){var r;return p()(this,n),(r=t.call(this,e)).binance=C.a.getPlugin("binance"),r.bus=C.a.getPlugin("bus"),r.state={bids:[],asks:[],lastUpdateId:null,selectedSymbol:r.binance.getAvailableSymbols()[0]},r.subscription=null,r.onSymbolChanged=r.onSymbolChanged.bind(g()(r)),r.onDepthUpdate=r.onDepthUpdate.bind(g()(r)),r.onMediaChange=r.onMediaChange.bind(g()(r)),r}return m()(n,[{key:"componentWillUnmount",value:function(){this.bus.removeEventListener("symbol:change",this.onSymbolChanged),this.mql.removeEventListener(this.onMediaChange),this.unsubscribeWSS()}},{key:"componentDidMount",value:function(){this.updateDepth(),this.subscribeWSS(),this.bus.addEventListener("symbol:change",this.onSymbolChanged),this.mql=window.matchMedia("(max-width: 700px)"),this.mql.addListener(this.onMediaChange),this.setState(R(R({},this.state),{},{isMobile:this.mql.matches}))}},{key:"onMediaChange",value:function(e){this.setState(R(R({},this.state),{},{isMobile:e.matches}))}},{key:"onDepthUpdate",value:function(e){var t=this.state,n=t.selectedSymbol,r=t.lastUpdateId;if(e.s===n&&!(e.u<=r)){var o=e.b,a=e.a,i={bids:u()(this.state.bids),asks:u()(this.state.asks)},l={asks:[],bids:[]},s=function(e,t,n){for(var r=function(r){var o=c()(e[r],2),a=o[0],i=o[1],s=t.findIndex((function(e){return c()(e,1)[0]===a}));if(-1===s)return 0!==Number(i)&&(l[n].push({type:"create",prev:[a,0],next:[a,i]}),t.push([a,i])),"continue";var u=c()(t[s],2),b=u[0],d=u[1];if(0===Number(i))return t.splice(s,1),l[n].push({type:"delete",prev:[b,d],next:[b,0]}),"continue";l[n].push({type:"update",prev:[b,d],next:[a,i]}),t[s]=[a,i]},o=0;o<e.length;o++)r(o)};s(o,i.bids,"bids"),s(a,i.asks,"asks"),this.bus.trigger("diff:update",l),this.setState(R(R({},this.state),i))}}},{key:"unsubscribeWSS",value:function(){this.subscription&&this.binance.unsubscribeWSS(this.subscription)}},{key:"subscribeWSS",value:function(){var e,t=this.state.selectedSymbol,n="".concat(t.toLowerCase(),"@depth@1000ms");(null===(e=this.subscription)||void 0===e?void 0:e[n])||(this.unsubscribeWSS(),this.subscription=d()({},n,this.onDepthUpdate),this.binance.subscribeWSS(this.subscription))}},{key:"onSymbolChanged",value:function(e){var t=this;this.setState(R(R({},this.state),{},{selectedSymbol:e}),(function(){t.subscribeWSS(),t.updateDepth()}))}},{key:"updateDepth",value:function(){var e=this;(function(){var t=i()(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.binance.getDepth(e.state.selectedSymbol,100);case 2:if((n=t.sent).json){t.next=5;break}return t.abrupt("return");case 5:e.setState(R(R({},e.state),n.json));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){if(!this.props.enabled)return null;for(var e=this.state,t=e.bids,n=e.asks,r=e.isMobile,o=[],a=Math.max(t.length,n.length),i=u()(t).sort((function(e,t){return t[0]-e[0]})),l=u()(n).sort((function(e,t){return e[0]-t[0]})),s=function(e){return Object(L.a)(e,8)},b=0;b<a;b++){var d,f,p=null!==(d=l[b])&&void 0!==d?d:[],h=c()(p,2),m=h[0],y=h[1],g=null!==(f=i[b])&&void 0!==f?f:[],v=c()(g,2),x=v[0],w=v[1],S=x&&w?s(x*w):null,k=m&&y?s(m*y):null;o.push(O.a.createElement(j.f,{key:b},O.a.createElement(j.c,{align:"left"},s(w)),O.a.createElement(j.c,{color:"red",borderRight:r},s(x)),!r&&O.a.createElement(j.c,{align:"right",borderRight:!0},s(S)),!r&&O.a.createElement(j.c,{align:"left",borderLeft:!0},s(k)),O.a.createElement(j.c,{color:"green",borderLeft:r},s(m)),O.a.createElement(j.c,{align:"right"},s(y))))}return O.a.createElement("div",{className:D()},O.a.createElement(j.a,{className:D("Table")},O.a.createElement(j.d,null,O.a.createElement(j.f,null,O.a.createElement(j.e,{colSpan:r?"2":"3"},"Bids"),O.a.createElement(j.e,{colSpan:r?"2":"3"},"Asks")),O.a.createElement(j.f,null,O.a.createElement(j.e,null,"Amount"),O.a.createElement(j.e,null,"Price"),!r&&O.a.createElement(j.e,null,"Total"),!r&&O.a.createElement(j.e,null,"Total"),O.a.createElement(j.e,null,"Price"),O.a.createElement(j.e,null,"Amount"))),O.a.createElement(j.b,null,o)))}}]),n}(O.a.Component);t.default=M}}]);
//# sourceMappingURL=1.js.map