System.register(["./p-94e3dad1.system.js","./p-c4dffc26.system.js","./p-9f50cf1d.system.js"],(function(e){"use strict";var t,n,s;return{setters:[function(e){t=e.r;n=e.g},function(){},function(e){s=e.A}],execute:function(){var i=e("stencil_router_prompt",function(){function e(e){t(this,e);this.when=true;this.message=""}e.prototype.enable=function(e){if(this.unblock){this.unblock()}if(this.history){this.unblock=this.history.block(e)}};e.prototype.disable=function(){if(this.unblock){this.unblock();this.unblock=undefined}};e.prototype.componentWillLoad=function(){if(this.when){this.enable(this.message)}};e.prototype.updateMessage=function(e,t){if(this.when){if(!this.when||t!==e){this.enable(this.message)}}else{this.disable()}};e.prototype.componentDidUnload=function(){this.disable()};e.prototype.render=function(){return null};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{message:["updateMessage"],when:["updateMessage"]}},enumerable:true,configurable:true});return e}());s.injectProps(i,["history"])}}}));