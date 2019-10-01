System.register(["./p-94e3dad1.system.js"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.r;r=t.h;n=t.g}],execute:function(){var o=t("stellar_group",function(){function t(t){e(this,t);this.overflow=false;this.count=10;this.extras=[]}t.prototype.componentWillLoad=function(){var t=this;this.sizes();this.buttons();if(this.overflow){if(this.element.children.length>this.count){var e=Array.from(this.element.children);e.forEach((function(e,r){if(r+1>t.count){t.size=e.size;t.extras.push(e);t.element.removeChild(e)}}))}}};t.prototype.sizes=function(){var t=this;var e=Array.from(this.element.children);if(e){e.forEach((function(e){e.size=t.size}))}};t.prototype.buttons=function(){var t=this.element.querySelectorAll("stellar-button");if(t){t.forEach((function(t){t.classList.add("h-auto")}))}};t.prototype.resultantExtras=function(){return this.extras.map((function(t){var e={};Array.prototype.slice.call(t.attributes).forEach((function(t){e[t.name]=t.value}));return r(t.tagName,Object.assign({},e))}))};t.prototype.render=function(){return[r("slot",null),this.overflow&&r("stellar-group-overflow",{size:this.size,count:this.extras.length},this.resultantExtras())]};Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;height:auto;min-height:calc(var(--ms6) - .1rem)}:host([fill]){display:-ms-flexbox;display:flex;width:100%}:host([size=tiny]){min-height:calc(var(--ms4) - .1rem)}:host([size=small]){min-height:calc(var(--ms5) - .1rem)}:host([size=medium]){min-height:calc(var(--ms7) - .2rem)}:host([size=large]){min-height:var(--ms7)}:host ::slotted(*){-ms-flex-item-align:stretch;align-self:stretch}:host([fill]) ::slotted(*){width:100%}:host ::slotted(stellar-button),:host ::slotted(stellar-card),:host ::slotted(stellar-input){--border-radius:0;margin:0}:host ::slotted(:first-of-type){margin-left:-1px!important}:host ::slotted([emphasis]){-webkit-transform:scale(1.05);transform:scale(1.05);z-index:1}:host ::slotted(stellar-avatar){margin-left:2px;--drop-shadow:none;position:relative;margin-left:-.5em;--drop-shadow:.1em 0 0 #fff;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s}:host([overflow])>:first-of-type{z-index:10}:host([overflow])>:nth-of-type(2){z-index:9}:host([overflow])>:nth-of-type(3){z-index:8}:host([overflow])>:nth-of-type(4){z-index:7}:host([overflow])>:nth-of-type(5){z-index:6}:host([overflow])>:nth-of-type(6){z-index:5}:host([overflow])>:nth-of-type(7){z-index:4}:host([overflow])>:nth-of-type(8){z-index:3}:host([overflow])>:nth-of-type(9){z-index:2}:host([overflow])>:nth-of-type(10){z-index:1}:host stellar-group-overflow{margin-left:.25em}"},enumerable:true,configurable:true});return t}())}}}));