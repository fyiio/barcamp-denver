var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function u(t){try{s(n.next(t))}catch(t){o(t)}}function a(t){try{s(n["throw"](t))}catch(t){o(t)}}function s(t){t.done?r(t.value):i(t.value).then(u,a)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return s([t,e])}}function s(u){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1];o=u;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(u);break}if(o[2])r.ops.pop();r.trys.pop();continue}u=e.call(t,r)}catch(t){u=[6,t];i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-94e3dad1.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js"],(function(t){"use strict";var e,r,n,i,o;return{setters:[function(t){e=t.r;r=t.h;n=t.H;i=t.g},function(){},function(t){o=t.p}],execute:function(){var u=t("stellar_blur",function(){function t(t){e(this,t);this.vertical=0;this.horizontal=0}t.prototype.supported_match=function(){return navigator.userAgent.toLowerCase().indexOf("firefox")===-1&&!/iPad|iPhone|iPod/.test(navigator.platform)};t.prototype.supported=function(){var t=this;var e=function(){var e;try{if(sessionStorage.getItem("blur-supported")==="true"){return sessionStorage.getItem("blur-supported")==="true"}e=t.supported_match();sessionStorage.setItem("blur-supported",e?"true":"false")}catch(r){e=t.supported_match()}return e};try{sessionStorage.clear()}catch(t){}return e()};t.prototype.setBlurFilter=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){o.set({"--blur-url":"url('#"+this.generatedId+"-filter')"},this.element);return[2]}))}))};t.prototype.componentDidLoad=function(){var t=this;if(this.supported()){this.generatedId=this.element.id||this.generateId();setTimeout((function(){t.setBlurFilter()}),10)}};t.prototype.generateId=function(){function t(t,e){t=Math.ceil(t);e=Math.floor(e);return Math.floor(Math.random()*(e-t))+t}return"blur-"+t(0,1e3)};t.prototype.render=function(){return r(n,{id:this.element.id||this.generatedId},r("slot",null),this.supported()&&r("svg",{class:"blur-svg"},r("defs",null,r("filter",{id:this.generatedId+"-filter"},r("feGaussianBlur",{id:this.generatedId+"-gaussian",in:"SourceGraphic",stdDeviation:this.horizontal+","+this.vertical})))))};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"stellar-blur,stellar-blur *,stellar-blur :after,stellar-blur :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial}stellar-blur .blur-svg{display:none}\@media (prefers-reduced-motion:reduce){stellar-blur{-webkit-filter:none!important;filter:none!important}}"},enumerable:true,configurable:true});return t}())}}}));