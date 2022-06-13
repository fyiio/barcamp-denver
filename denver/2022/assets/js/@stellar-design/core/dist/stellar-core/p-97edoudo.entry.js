import{r as t,f as i,h as s,g as n,H as o}from"./p-8388b2f5.js";let r;function e(t,i,s,n){return i="ios"===(i=(i||"md").toLowerCase())?"ios":"md",s&&"ios"===i?t=s.toLowerCase():n&&"md"===i?t=n.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=`${i}-${t}`)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function h(t){return"string"==typeof t&&c(t=t.trim())?t:null}function c(t){return t.length>0&&/(\/|\.)/.test(t)}const l=class{constructor(s){t(this,s),this.isVisible=!1,this.lazy=!1,this.isServer=i(this,"isServer"),this.resourcesUrl=i(this,"resourcesUrl"),this.doc=i(this,"document"),this.win=i(this,"window")}componentWillLoad(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidUnload(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,i,s){if(this.lazy&&this.win&&this.win.IntersectionObserver){const n=this.io=new this.win.IntersectionObserver(t=>{t[0].isIntersecting&&(n.disconnect(),this.io=void 0,s())},{rootMargin:i});n.observe(t)}else s()}loadIcon(){if(!this.isServer&&this.isVisible){const t=this.getUrl();t?function(t,i){let s=u.get(i);return s||(s=fetch(i,{cache:"force-cache"}).then(t=>!function(t){return t<=299}(t.status)?Promise.resolve(null):t.text()).then(i=>(function(t,i){if(i){const s=t.createDocumentFragment(),n=t.createElement("div");n.innerHTML=i,s.appendChild(n);for(let t=n.childNodes.length-1;t>=0;t--)"svg"!==n.childNodes[t].nodeName.toLowerCase()&&n.removeChild(n.childNodes[t]);const o=n.firstElementChild;if(o&&"svg"===o.nodeName.toLowerCase()&&(o.setAttribute("class","s-ion-icon"),function t(i){if(1===i.nodeType){if("script"===i.nodeName.toLowerCase())return!1;for(let t=0;t<i.attributes.length;t++){const s=i.attributes[t].value;if("string"==typeof s&&0===s.toLowerCase().indexOf("on"))return!1}for(let s=0;s<i.childNodes.length;s++)if(!t(i.childNodes[s]))return!1}return!0}(o)))return n.innerHTML}return""})(t,i)),u.set(i,s)),s}(this.doc,t).then(t=>this.svgContent=t):console.error("icon was not resolved")}if(!this.ariaLabel){const t=e(this.getName(),this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}}getName(){return void 0!==this.name?this.name:this.icon&&!c(this.icon)?this.icon:void 0}getUrl(){let t=h(this.src);return t||((t=e(this.getName(),this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=h(this.icon))||null)}getNamedUrl(t){return function(){if(!r){const t=window;t.Ionicons=t.Ionicons||{},r=t.Ionicons.map=t.Ionicons.map||new Map}return r}().get(t)||`${this.resourcesUrl}svg/${t}.svg`}hostData(){const t=this.mode||"md",i=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return{role:"img",class:Object.assign({[`${t}`]:!0},(s=this.color,s?{"ion-color":!0,[`ion-color-${s}`]:!0}:null),{[`icon-${this.size}`]:!!this.size,"flip-rtl":i&&"rtl"===this.doc.dir})};var s}__stencil_render(){return s("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})}get el(){return n(this)}static get watchers(){return{icon:["loadIcon"],name:["loadIcon"],src:["loadIcon"]}}render(){return s(o,this.hostData(),this.__stencil_render())}static get style(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"}},u=new Map;export{l as ion_icon};