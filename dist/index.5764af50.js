function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},l=n.parcelRequire3f98;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},n.parcelRequire3f98=l),l.register("evSCH",(function(n,t){e(n.exports,"master",(()=>o));var i=l("4XtBZ");const o=gsap.timeline({paused:!0,onComplete:i.blink});(0,i.blink)()})),l.register("4XtBZ",(function(n,t){function i(){if(gsap.globalTimeline.getChildren().every((e=>!e.isActive()))){gsap.timeline({defaults:{duration:.1}}).set(".stickman-9-blink",{autoAlpha:1,delay:.5}).to(".stickman-9-blink",{autoAlpha:0,delay:.15,onComplete:()=>{const e=gsap.utils.random(2,6,.1);gsap.delayedCall(e,i)}})}else setTimeout((()=>{i()}),3e3)}e(n.exports,"blink",(()=>i))})),l("evSCH");
//# sourceMappingURL=index.5764af50.js.map