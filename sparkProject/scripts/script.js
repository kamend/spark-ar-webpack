!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=require("Diagnostics")},function(e,t){e.exports=require("Reactive")},function(e,t){e.exports=require("Shaders")},function(e,t){e.exports=require("Materials")},function(e,t){e.exports=require("Scene")},function(e,t){e.exports=require("CameraInfo")},function(e,t){e.exports=require("Textures")},function(e,t){e.exports=require("Time")},function(e,t,r){"use strict";r.r(t);r(0),r(4);const i=r(2),n=r(3),u=r(1),o=r(5),a=r(6),c=r(7);r(0),r(4);const l=r(2),d=r(3),f=r(1),s=(r(5),r(6)),m=(r(7),d.get("material0"),s.get("cameraTexture0"),l.fragmentStage(l.vertexAttribute({variableName:l.VertexAttribute.TEX_COORDS})),f.pack4(1,0,0,1)),p=(r(0),r(1)),v=r(2),x=r(3).get("material0"),b=v.DefaultMaterialTextures.DIFFUSE;x.setTexture(p.mul(function(e,t,r,l){u.div(1,o.previewSize.width),u.div(1,o.previewSize.height),n.get(r);const d=a.get(l),f=i.fragmentStage(i.vertexAttribute({variableName:i.VertexAttribute.TEX_COORDS}));i.textureSampler(d.signal,f);var s=u.pack2(o.previewSize.width,o.previewSize.height),m=u.mul(f,s),p=u.mod(m,e),v=u.sub(m,p),x=u.mul(u.magnitude(u.sub(p,u.mul(e,.5))),.666);x=u.sub(x,u.mul(c.ms,.01));var b=e/t,g=u.round(u.mod(x,b*b)),S=u.round(u.mod(u.add(x,1),b*b)),y=u.div(g,e),O=u.mod(g,e),T=u.div(S,e),h=u.mod(S,e),q=u.pack2(y,O);q=u.add(q,v),q=u.div(q,s);var _=u.pack2(T,h);_=u.add(_,v),_=u.div(_,s);var j=i.textureSampler(d.signal,q),w=i.textureSampler(d.signal,_);return u.mix(j,w,u.mod(x,1))}(32,4,"material0","cameraTexture0"),m),{textureSlotName:b})}]);