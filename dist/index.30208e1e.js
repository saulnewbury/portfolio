var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},n=t.parcelRequire3f98;function o(){const t=gsap.timeline();t.set(".stickman-1, .shadow-1",{autoAlpha:0,delay:.3}).set(".stickman-2, .shadow-2",{autoAlpha:1}).set(".stickman-2, .shadow-2",{autoAlpha:0},">0.1").set(".stickman-3, .shadow-3",{autoAlpha:1}).set(".stickman-3, .shadow-3",{autoAlpha:0},">0.4");for(let e=4;e<=7;e++)t.to(`.stickman-${e}, .shadow-${e}`,{duration:.001,autoAlpha:1,repeat:1,repeatDelay:.01,yoyo:!0});return t.set(".stickman-8, .shadow-8",{autoAlpha:1}).set(".stickman-8, .shadow-8",{autoAlpha:0},">0.1").set(".stickman-9, .shadow-9",{autoAlpha:1}),t}function r(){const t=gsap.timeline({defaults:{duration:0}});return t.to(".stickman-9-eyes-left",{autoAlpha:1,delay:1.3}).to(".stickman-9-eyes-left",{autoAlpha:0,delay:.4}).to(".stickman-9",{autoAlpha:1}),t}null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in a){var n=a[t];delete a[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},t.parcelRequire3f98=n);const i=document.querySelector("body"),s=document.querySelector(".hero"),u=document.querySelector(".stickman-scene"),l=document.querySelector(".custom-cursor"),d=document.querySelector(".arrow-cursor"),h=document.querySelector(".phantom-element"),m=[...document.querySelectorAll("a")];let c,f,g;function p(){const t=h.getBoundingClientRect(),e=t.left+t.width/2,a=t.top+t.height/2,n=e-f,o=a-c,r=Math.atan2(o,n);let i=Math.round(r*(180/Math.PI));i<0&&(i=(i+360)%360),d.style.setProperty("transform",`rotate(${i+90}deg)`)}function v(){g=function(t,e){const a=h.getBoundingClientRect();return a.left,Math.floor(Math.sqrt(Math.pow(t-(a.left+a.width/2),2)+Math.pow(e-(a.top+a.height/2),2)))}(f,c);const t=g/1e3+.6>1?1:g/1e3+.6;gsap.set(".cursor",{"--scale":t})}function b(){gsap.set(".dot-cursor",{autoAlpha:0}),gsap.set(".arrow-cursor",{autoAlpha:1})}function w(){gsap.set(".dot-cursor",{autoAlpha:1}),gsap.to(".cursor",{"--scale":1}),gsap.set(".arrow-cursor",{autoAlpha:0})}function y(){gsap.to(".arrow-cursor",{autoAlpha:0}),gsap.to(".dot-cursor",{autoAlpha:1}),u.removeEventListener("mouseenter",b),u.removeEventListener("mouseleave",w)}function M(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function A(t){M(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function P(t,e){M(2,arguments);var a=A(t),n=A(e),o=a.getTime()-n.getTime();return o<0?-1:o>0?1:o}function x(t,e){M(2,arguments);var a=A(t),n=A(e),o=a.getFullYear()-n.getFullYear(),r=a.getMonth()-n.getMonth();return 12*o+r}function k(t){M(1,arguments);var e=A(t);return e.setHours(23,59,59,999),e}function D(t){M(1,arguments);var e=A(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function S(t){M(1,arguments);var e=A(t);return k(e).getTime()===D(e).getTime()}function T(t,e){M(2,arguments);var a,n=A(t),o=A(e),r=P(n,o),i=Math.abs(x(n,o));if(i<1)a=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-r*i);var s=P(n,o)===-r;S(A(t))&&1===i&&1===P(t,o)&&(s=!1),a=r*(i-Number(s))}return 0===a?0:a}function W(t,e){return M(2,arguments),A(t).getTime()-A(e).getTime()}i.addEventListener("mousemove",(t=>{f=t.clientX,c=t.clientY,l.setAttribute("style",`top: ${t.clientY-17}px; \n      left: ${t.clientX-18}px; \n      opacity: 1;`)})),u.addEventListener("mousemove",(t=>{p(),v()})),document.addEventListener("scroll",(t=>{p(),v()})),u.addEventListener("mouseenter",b),u.addEventListener("mouseleave",w),s.addEventListener("mouseleave",w),document.addEventListener("mouseleave",(()=>{console.log("beautiful"),gsap.set(".custom-cursor",{autoAlpha:0})})),m.forEach((t=>{t.addEventListener("mouseenter",(()=>{gsap.to(".dot-cursor",{scale:0,autoAlpha:0})})),t.addEventListener("mouseleave",(()=>{gsap.to(".dot-cursor",{scale:1,autoAlpha:1})}))}));var X={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function E(t){return t?X[t]:X.trunc}function C(t,e,a){M(2,arguments);var n=W(t,e)/1e3;return E(null==a?void 0:a.roundingMethod)(n)}var Y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},j=function(t,e,a){var n,o=Y[t];return n="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};function q(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}}var F={date:q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},L={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(t){return function(e,a){var n,o=a||{};if("formatting"===(o.context?String(o.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=o.width?String(o.width):r;n=t.formattingValues[i]||t.formattingValues[r]}else{var s=t.defaultWidth,u=o.width?String(o.width):t.defaultWidth;n=t.values[u]||t.values[s]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function N(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,o=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(o);if(!r)return null;var i,s=r[0],u=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(u)?H(u,(function(t){return t.test(s)})):J(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(l):l,i=a.valueCallback?a.valueCallback(i):i;var d=e.slice(s.length);return{value:i,rest:d}}}function J(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function H(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}var R,$={code:"en-US",formatDistance:j,formatLong:F,formatRelative:function(t,e,a,n){return L[t]},localize:{ordinalNumber:function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:O({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:O({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:O({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:O({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:O({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(R={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(R.matchPattern);if(!a)return null;var n=a[0],o=t.match(R.parsePattern);if(!o)return null;var r=R.valueCallback?R.valueCallback(o[0]):o[0];r=e.valueCallback?e.valueCallback(r):r;var i=t.slice(n.length);return{value:r,rest:i}}),era:N({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:N({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:N({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:N({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function z(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in e=e||{})Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function B(t){return z({},t)}function U(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function I(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};M(2,arguments);var n=a.locale||$;if(!n.formatDistance)throw new RangeError("locale must contain formatDistance property");var o=P(t,e);if(isNaN(o))throw new RangeError("Invalid time value");var r,i,s=B(a);s.addSuffix=Boolean(a.addSuffix),s.comparison=o,o>0?(r=A(e),i=A(t)):(r=A(t),i=A(e));var u,l=C(i,r),d=(U(i)-U(r))/1e3,h=Math.round((l-d)/60);if(h<2)return a.includeSeconds?l<5?n.formatDistance("lessThanXSeconds",5,s):l<10?n.formatDistance("lessThanXSeconds",10,s):l<20?n.formatDistance("lessThanXSeconds",20,s):l<40?n.formatDistance("halfAMinute",null,s):l<60?n.formatDistance("lessThanXMinutes",1,s):n.formatDistance("xMinutes",1,s):0===h?n.formatDistance("lessThanXMinutes",1,s):n.formatDistance("xMinutes",h,s);if(h<45)return n.formatDistance("xMinutes",h,s);if(h<90)return n.formatDistance("aboutXHours",1,s);if(h<1440){var m=Math.round(h/60);return n.formatDistance("aboutXHours",m,s)}if(h<2520)return n.formatDistance("xDays",1,s);if(h<43200){var c=Math.round(h/1440);return n.formatDistance("xDays",c,s)}if(h<86400)return u=Math.round(h/43200),n.formatDistance("aboutXMonths",u,s);if((u=T(i,r))<12){var f=Math.round(h/43200);return n.formatDistance("xMonths",f,s)}var g=u%12,p=Math.floor(u/12);return g<3?n.formatDistance("aboutXYears",p,s):g<9?n.formatDistance("overXYears",p,s):n.formatDistance("almostXYears",p+1,s)}function Q(t,e){return M(1,arguments),I(t,Date.now(),e)}gsap.registerPlugin(TextPlugin);const V=gsap.utils.toArray(".icon-text"),_=gsap.utils.toArray(".tech-icon");function G(){gsap.set(_,{pointerEvents:"bounding-box"}),_.forEach(((t,e)=>{gsap.set;const a=V[e],n=a.getAttribute("data-time-elapsed"),o=new Date(n),r=(new Date).getTime()-o.getTime(),i=`${Q(new Date(n))} exp.`;t.anim=function(t,e,a){const n=gsap.timeline({defaults:{transformOrigin:"left"}});return n.to(t,{text:e}).to(t,{text:a}).reversed(!0),n}(a,r,i),t.addEventListener("mouseenter",(()=>{const e=t.getAttribute("class").split(" ")[0];t.anim.reversed(!t.anim.reversed()),gsap.to(".dot-cursor",{scale:0,autoAlpha:0}),gsap.to(`.${e}`,{cursor:"pointer"})})),t.addEventListener("mouseleave",(()=>{t.anim.reversed(!t.anim.reversed()),gsap.to(".dot-cursor",{scale:1,autoAlpha:1})}))}))}function K(){gsap.set(".html5, .css3, .sass, .javascript, .api, .npm, .github, .svg, .greensock, .react",{xPercent:-50,yPercent:-50,visibility:"hidden"});const t=gsap.timeline({defaults:{duration:.6,visibility:"visible",ease:"power.inOut"},onComplete:G,onStart:y});return t.to(".react",{scale:1.2,motionPath:{path:".motion",align:".motion",start:.1,end:.99}},1).to(".react-text",{scale:1.1,motionPath:{path:".motion",align:".motion",start:.1,end:.99,offsetX:65,offsetY:-8}},0).to(".greensock",{scale:.98,motionPath:{path:".motion",align:".motion",start:.1,end:.84}},1).to(".greensock-text",{scale:1.05,motionPath:{path:".motion",align:".motion",start:.1,end:.84,offsetX:55}},0).to(".svg",{scale:.86,motionPath:{path:".motion",align:".motion",start:.1,end:.68}},1).to(".svg-text",{motionPath:{path:".motion",align:".motion",start:.1,end:.68,offsetX:48}},0).to(".github",{scale:.95,motionPath:{path:".motion",align:".motion",start:.1,end:.549}},1).to(".github-text",{motionPath:{path:".motion",align:".motion",start:.1,end:.549,offsetX:48,offsetY:-5}},1).to(".npm",{scale:.86,motionPath:{path:".motion",align:".motion",start:.1,end:.44}},1).to(".npm-text",{motionPath:{path:".motion",align:".motion",start:.1,end:.44,offsetX:49,offsetY:-10}},1).to(".api",{scale:.85,motionPath:{path:".motion",align:".motion",start:.1,end:.34}},1).to(".api-text",{motionPath:{path:".motion",align:".motion",start:.1,end:.34,offsetX:45,offsetY:-5}},1).to(".javascript",{scale:.67,motionPath:{path:".motion",align:".motion",start:.1,end:.21}},1).to(".javascript-text",{motionPath:{path:".motion",align:".motion",start:.1,end:.21,offsetX:38,offsetY:-10}},1).to(".sass",{scale:.72,motionPath:{path:".motion",align:".motion",start:.1,end:.1}},1).to(".sass-text",{motionPath:{path:".motion",align:".motion",start:.1,end:.1,offsetX:35,offsetY:-10}},1),t}function Z(){const t=gsap.timeline({defaults:{duration:0,immediateRender:!1}});return t.to(".shadow-9",{autoAlpha:0}).to(".shadow-morph-1",{autoAlpha:1}).to(".shadow-morph-1",{autoAlpha:0,delay:.1}).to(".shadow-morph-2",{autoAlpha:1}).to(".shadow-morph-2",{autoAlpha:0,delay:.1}).to(".shadow-morph-3",{autoAlpha:1}).to(".shadow-morph-3",{autoAlpha:0,delay:.1}).to(".shadow-morph-4",{autoAlpha:1}),t}function tt(){const t=gsap.timeline();return gsap.set(".bag-1",{transformOrigin:"bottom"}),t.to(".bag-1",{duration:.25,ease:"back.out(4)",scaleX:1.2,scaleY:.9}).to(".bag-1",{duration:.25,ease:"back.out(4)",scaleX:1,scaleY:1}).set(".bag-shadow-1",{autoAlpha:0},0).set(".bag-shadow-d-1",{autoAlpha:1},">").set(".bag-shadow-d-1",{autoAlpha:0},.15).set(".bag-shadow-d-2",{autoAlpha:1},">").set(".bag-shadow-d-2",{autoAlpha:0},.24).set(".bag-shadow-d-1",{autoAlpha:1},">").set(".bag-shadow-d-1",{autoAlpha:0},.33).set(".bag-shadow-1",{autoAlpha:1},">"),t}function et(){const t=gsap.timeline({defaults:{duration:0}});return t.to(".bag-1",{duration:.05,x:"-2%"}).to(".bag-1",{duration:.05,x:"4%"}).to(".bag-1",{duration:.05,x:"-4%"}).to(".bag-1",{duration:.05,x:"4%"}).to(".bag-1",{duration:.05,x:"-4%"}).to(".bag-1",{duration:.05,x:"4%"}).to(".bag-1",{duration:.05,x:"-4%"}).to(".bag-1",{duration:.05,x:"2%"}).to(".bag-1, .bag-shadow-1",{autoAlpha:0}).to(".bag-2, .bag-shadow-2",{autoAlpha:1}).to(".bag-2, .bag-shadow-2",{autoAlpha:0,delay:.1}).to(".bag-3, .bag-shadow-3",{autoAlpha:1}).to(".bag-3, .bag-shadow-3",{autoAlpha:0,delay:.1}).to(".bag-4, .bag-shadow-4",{autoAlpha:1}),t}function at(){const t=gsap.timeline({defaults:{duration:1}});return t.to(".img-overlay",{duration:1,opacity:1}).to(".hill-1, .hill-2, .hill-3, .mountain ",{opacity:0},0).to(".title",{webkitTextFillColor:"#303030"},0).to(".greeting p",{color:"#303030"},0),t}function nt(){const t=gsap.timeline({defaults:{duration:0}});return t.to(".stickman-9",{autoAlpha:0,delay:.1}).to(".stickman-r-1",{autoAlpha:1}).to(".stickman-r-1",{autoAlpha:0,delay:.1}).to(".stickman-r-2",{autoAlpha:1}).to(".stickman-r-2",{autoAlpha:0,delay:.1}).to(".stickman-1",{autoAlpha:1}),t}var ot=n("evSCH");window.addEventListener("load",(()=>{ot.master.add(o()).add(tt()).add(et(),"-=0.4").add(Z(),"-=0.2").add(r()).add(at(),"-=1.9").add(K(),"-=2.9").add(nt())}));[document.querySelector(".phantom-element"),document.querySelector(".bag-1")].forEach((t=>{t.addEventListener("mouseenter",(()=>{ot.master.play()}))}));
//# sourceMappingURL=index.30208e1e.js.map