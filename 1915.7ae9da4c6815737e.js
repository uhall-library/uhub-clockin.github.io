"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1915],{3800:(m,o,e)=>{e.r(o),e.d(o,{ion_img:()=>s});var i=e(7629),n=e(6897),r=e(7015);let s=class{constructor(t){(0,i.r)(this,t),this.ionImgWillLoad=(0,i.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,i.e)(this,"ionImgDidLoad",7),this.ionError=(0,i.e)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=(0,r.i)(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:t,alt:a,onLoad:c,loadError:l,inheritedAttributes:g}=this,{draggable:b}=g;return(0,i.h)(i.H,{class:(0,n.b)(this)},(0,i.h)("img",{decoding:"async",src:t,alt:a,onLoad:c,onError:l,part:"image",draggable:h(b)}))}get el(){return(0,i.i)(this)}static get watchers(){return{src:["srcChanged"]}}};const h=t=>{switch(t){case"true":return!0;case"false":return!1;default:return}};s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);