import{r as t,h as i,g as s}from"./p-8388b2f5.js";import{I as h}from"./p-1f91b58b.js";const e=class{constructor(i){t(this,i),this.nolazyload=!1,this.width=1280,this.height=720,this.ready=!1}componentDidLoad(){this.image=this.element.querySelector(".image"),this.nolazyload&&this.in()}in(){this.viewer||(this.viewer=new h({source:this.src,container:this.image,width:this.width,height:this.height})),this.viewer.render(),this.ready=!0}out(){this.viewer.destroy(),this.ready=!1}render(){return i("div",null,i("div",{class:"image"}),i("div",{class:"overlay"}),!this.nolazyload&&i("stellar-intersection",{element:this.element,multiple:!0,in:this.in.bind(this),out:this.out.bind(this),margin:"50%"}),!this.ready&&i("skeleton-img",{width:this.width,height:this.height}))}get element(){return s(this)}static get style(){return"stellar-360-image{display:block;position:relative}stellar-360-image canvas{display:block;width:100%!important;height:auto!important}stellar-360-image .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"}};export{e as stellar_360_image};