var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n["throw"](t))}catch(t){o(t)}}function u(t){t.done?i(t.value):r(t.value).then(s,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t];r=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-94e3dad1.system.js","./p-752b9e3e.system.js","./p-b588c5b1.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js","./p-b5ec2b74.system.js","./p-9f1494f1.system.js"],(function(t){"use strict";var e,i,n,r,o,s,a,u;return{setters:[function(t){e=t.r;i=t.h;n=t.g},function(){},function(t){r=t.d},function(t){o=t.p},function(){},function(){},function(t){s=t.e},function(t){a=t.g;u=t.u}],execute:function(){var l=t("stellar_video_interview",function(){function t(t){e(this,t);this.color="white";this.width=800;this.height=800;this.aspectRatio=100;this.visualization="bars2";this.randomId=Math.floor(Math.random()*6)+1;this.loaded=false;this.loading=false;this.seekable=false;this.duration=0;this.current=0;this.visible=false;this.cache=new WeakMap}t.prototype.componentWillLoad=function(){o.set({"--width":this.width+"px","--height":this.height+"px","--aspectRatio":this.aspectRatio+"%"},this.element)};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(!this.interviewLines){this.interviewLines=a(this.element)}u(this.interviewLines,this.cache,this.time);this.visualizer=this.element.shadowRoot.querySelector("web-audio-visualizer");this.video=this.element.shadowRoot.querySelector("stellar-video");return[2]}))}))};t.prototype.handleUpdate=function(t){this.playing=t.detail.playing;this.current=Math.abs(Math.round(t.detail.currentTime*1e3));this.duration=Math.round(t.detail.duration*1e3);u(this.interviewLines,this.cache,this.time)};Object.defineProperty(t.prototype,"time",{get:function(){return this.current},enumerable:true,configurable:true});t.prototype.attachContext=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:if(!!this.context)return[3,3];this.context=new(window.AudioContext||window.webkitAudioContext);t=this.context.createMediaElementSource(this.video.video_tag);if(!this.visualizer){this.visualizer=this.element.shadowRoot.querySelector("web-audio-visualizer")}return[4,this.visualizer.connect(this.context)];case 1:e=i.sent();return[4,t.connect(e.analyser)];case 2:i.sent();e.analyser.connect(this.context.destination);i.label=3;case 3:return[2]}}))}))};t.prototype.in=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:return[4,r(1e3)];case 1:e.sent();this.visible=true;return[4,r(100)];case 2:e.sent();this.visualizer=this.element.shadowRoot.querySelector("web-audio-visualizer");this.video=this.element.shadowRoot.querySelector("stellar-video");this.video.addEventListener("canplaythrough",(function(){t.seekable=true}));return[2]}}))}))};t.prototype.out=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.pause();return[2]}))}))};t.prototype.play=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!this.video)return[3,2];return[4,this.video.play()];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};t.prototype.skipTo=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:if(!this.video)return[3,2];return[4,this.video.skipTo(t)];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.pause=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!this.video)return[3,2];return[4,this.video.pause()];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.attachContext();if(!this.video)return[3,2];return[4,this.video.toggle()];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};t.prototype.handleClick=function(){this.toggle();if(this.current===this.duration){this.skipTo(0)}};t.prototype.handleCurrentClick=function(){s.copyPlain(this.current)};t.prototype.render=function(){var t=this;return i("div",{class:"card",onDblClick:function(){t.handleClick()}},i("skeleton-img",{width:this.width,height:this.height,loading:true}),this.visible&&i("section",null,i("stellar-video",{controls:false,playsinline:true,trackInView:false,onUpdate:function(e){t.handleUpdate(e)}},i("source",{src:this.src})),i("div",{class:"transcript"},i("slot",null)),this.video&&i("web-audio-visualizer",{for:"interview-"+this.randomId,type:this.visualization,width:2048,height:1024,color:this.color}),i("button",{class:this.loading?"loading button":this.playing?"playing button":"button",onClick:function(){t.handleClick()}},i("stellar-asset",{name:this.loading?"sync":this.playing?"pause":"play",class:this.loading?"animation-spin":""})),i("h3",null,i("stellar-unit",{class:"current",value:this.current,from:"ms",to:"s",onClick:function(){t.handleCurrentClick()}})),i("h3",null,i("stellar-unit",{class:"duration",value:this.duration,from:"ms",to:"s"})),this.seekable&&i("stellar-progress",{value:this.current,max:this.duration,noease:true,blurable:false,slender:true,editable:true,onUpdate:function(e){t.skipTo(e.detail.value)}})),i("stellar-intersection",{element:this.element,multiple:true,in:this.in.bind(this),out:this.out.bind(this)}))};Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--width:800px;--height:800px;display:block;position:relative}:host skeleton-img{margin:0;max-width:none;max-height:none}:host div.card{position:relative;display:block;width:auto;height:auto;margin:auto;overflow:hidden}:host div.card section{height:inherit;display:block;position:absolute;height:100%;top:0;right:0;left:0;padding-top:0!important}:host web-audio-visualizer{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}:host web-audio-visualizer[type=circle]{height:100%}:host web-audio-visualizer[type=bars2]{width:80%;left:10%;right:10%}:host stellar-360-image,:host stellar-360-video,:host stellar-image,:host stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}:host stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9;--border-radius:0}:host stellar-progress .progress{border:0}:host h3{color:#fff;margin:0}:host stellar-unit{position:absolute;bottom:1rem;z-index:4;color:#fff!important;font-weight:700}:host stellar-unit.current{left:1rem}:host stellar-unit.duration{right:1rem}:host .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}:host .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}:host .button:focus,:host .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}:host .button stellar-asset{font-size:7rem;margin:auto;display:block}:host .button.loading{padding:0}:host .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}:host .button.playing stellar-asset{font-size:2.8rem}:host:after{content:\"\";display:block;width:100%;height:8rem;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.65)));background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.65));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00000000\",endColorstr=\"#a6000000\",GradientType=0);position:absolute;z-index:2;bottom:0;left:0;right:0}"},enumerable:true,configurable:true});return t}())}}}));