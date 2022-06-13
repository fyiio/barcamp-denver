System.register(["./p-94e3dad1.system.js","./p-c4dffc26.system.js","./p-69f4f799.system.js","./p-752b9e3e.system.js","./p-b588c5b1.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js"],(function(t){"use strict";var e,o,s,n,r,i;return{setters:[function(t){e=t.r;o=t.h;s=t.H;n=t.g},function(){},function(t){r=t.T},function(){},function(t){i=t.f},function(){},function(){},function(){}],execute:function(){i(document);var l=t("stellar_dropdown",function(){function t(t){e(this,t);this.position="center";this.icon=false;this.iconName="arrow-down";this.label="Dropdown";this.open=false;this.dark=false;this.footer=false}t.prototype.componentWillLoad=function(){this.footer=this.element.querySelectorAll('[slot="footer"]').length!==0};t.prototype.componentDidLoad=function(){i(document)};t.prototype.onToggle=function(){this.open=!this.open};t.prototype.render=function(){return o(s,{"aria-label":this.label,class:"dropdown",title:this.label},o("div",{class:"toggle"},o("slot",{name:"handle"}),this.icon&&o("stellar-asset",{name:this.iconName,class:"caret"})),o("div",{class:"clipper"},o("div",{class:"list-wrap"},o("ul",{class:"list"},o("slot",null),this.footer&&o("div",{class:"footer"},o("slot",{name:"footer"}))))))};Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;--border-radius:0.3rem;--clip-from:polygon(0 0,100% 0,100% 0,0 0);--clip-to:polygon(0 0,100% 0,100% 100%,0 100%);--filter:drop-shadow(0px 2px 2px var(--theme-base1));--icon-rotation:180deg;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear .2s;transition:z-index 0ms linear .2s}:host([dark]){--filter:drop-shadow(0px 2px 2px var(--theme-base9))}:host .clipper{-webkit-filter:var(--filter);filter:var(--filter);position:absolute;top:calc(100% + .5rem);right:50%;left:calc(50% - (var(--dropdown-width) /2));height:0}:host .clipper,:host .list-wrap{width:var(--dropdown-width);-webkit-transition:all .25s var(--ease) .25s;transition:all .25s var(--ease) .25s}:host .list-wrap{z-index:10;display:initial;-webkit-clip-path:var(--clip-from);clip-path:var(--clip-from);border-radius:var(--border-radius);overflow:hidden;display:block}:host .caret{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all .21s var(--ease);transition:all .21s var(--ease);font-size:2rem}:host(:focus-within) .caret,:host(:hover) .caret{-webkit-transform:scale(1) rotate(var(--icon-rotation));transform:scale(1) rotate(var(--icon-rotation));color:var(--dropdown-hover-color)}:host(:active),:host(:focus-within),:host(:hover){z-index:6;color:var(--dropdown-hover-color)}:host(:active) .clipper,:host(:focus-within) .clipper,:host(:hover) .clipper{height:auto}:host(:active) .toggle:after,:host(:focus-within) .toggle:after,:host(:hover) .toggle:after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(.toggle:active),:host(.toggle:hover){z-index:6;color:var(--dropdown-hover-color)}:host(.toggle:active:after),:host(.toggle:hover:after){margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(:active) .list-wrap,:host(:focus-within) .list-wrap,:host(:hover) .list-wrap{-webkit-clip-path:var(--clip-to);clip-path:var(--clip-to);height:100%}:host .dropdown-placeholder{margin:0;width:3rem;height:3rem}:host .toggle{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}:host stellar-asset[slot=handle]{color:var(--dropdown-color)}:host(:focus-within) stellar-asset[slot=handle],:host([focus-within]) stellar-asset[slot=handle],:host stellar-asset[slot=handle]:active,:host stellar-asset[slot=handle]:hover{color:var(--dropdown-color)}:host .toggle span{color:inherit}:host .toggle .hidden{display:inline-block!important}:host .list{margin-top:0;margin-left:0;margin-bottom:0;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;-webkit-box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);background:#fff;list-style-type:none;padding:0}:host .list ::slotted(stellar-item){--item-size:3.25rem}:host .list .loader{cursor:wait;display:none}:host .list .separator{position:relative}:host .list .separator:after{content:\"\";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}:host .icon{margin-right:1em}:host .icon,:host .thumb{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s}:host .thumb{margin-right:1rem;width:2.25em;height:2.25em}:host .notification{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}:host ::slotted(stellar-item){border:0;overflow:hidden;color:var(--gray9);font-size:1rem}:host .footer{border-top:1px solid var(--theme-base1);margin-top:.5rem}:host .footer ::slotted(*){background:transparent!important}:host .footer:empty{display:none}:host([position=left]){--clip-from:polygon(0% 0,0% 50%,0% 50%,0 50%)}:host([position=left]) .clipper{left:0;right:auto}:host([position=left][icon]) .clipper{left:var(--dropdown-offset,-3rem)}:host([position=left]) .list:after,:host([position=left]) .list:before{right:0;left:4rem}:host([position=right]){--clip-from:polygon(0 0,100% 0,100% 0,0 0);--clip-from:polygon(0 0,100% 0%,100% 0%,50% 0)}:host([position=right]) .clipper{left:auto;right:0}:host([position=right][icon]) .clipper{right:var(--dropdown-offset,3rem)}:host([position=right]) .list:after,:host([position=right]) .list:before{right:3rem;left:auto}:host([dark]) .list{background:var(--gray9)}:host([dark]) ::slotted(stellar-item){color:var(--gray0)}:host([dark]) .footer{border-top-color:var(--black)}"},enumerable:true,configurable:true});return t}());r.injectProps(l,["dark"])}}}));