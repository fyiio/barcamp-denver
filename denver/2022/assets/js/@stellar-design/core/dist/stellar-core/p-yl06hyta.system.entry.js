var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function u(t){try{s(n.next(t))}catch(t){o(t)}}function a(t){try{s(n["throw"](t))}catch(t){o(t)}}function s(t){t.done?r(t.value):i(t.value).then(u,a)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return s([t,e])}}function s(u){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1];o=u;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(u);break}if(o[2])r.ops.pop();r.trys.pop();continue}u=e.call(t,r)}catch(t){u=[6,t];i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var o=arguments[e],u=0,a=o.length;u<a;u++,i++)n[i]=o[u];return n};System.register(["./p-94e3dad1.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var n=t("web_audio_debugger",function(){function t(t){e(this,t);this.history=[];this.count=50}t.prototype.addHistory=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){e=__spreadArrays([t],this.history);if(e.length>this.count){this.history=e.slice(1,this.count)}else{this.history=e}return[2]}))}))};t.prototype.render=function(){return r("div",null,this.history.map((function(t){return r("div",null,r("p",null,t))})))};Object.defineProperty(t,"style",{get:function(){return"web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid #000}web-audio-debugger p{font-size:12px;margin:0 0 1em 0}"},enumerable:true,configurable:true});return t}())}}}));