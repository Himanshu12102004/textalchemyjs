var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{Z:()=>r});const r={TextReveal:class{#t;#e;#r;constructor(t,e,{stepCount:r,visibleTime:o,stepDelay:s,loop:i}){if(this.domElement=t,this.words=e,0===this.words.length)throw new Error("RequiredWordsButGotUndefined");this.options={stepCount:r<=0?2:r||2,visibleTime:o||500,stepDelay:s||20,loop:i||!1},this.#t=new Array(this.words.length),e.forEach(((t,e)=>{this.#t[e]=t.split("")})),this.#e=0,this.#r=[...this.#t[0]]}animate(){this.#o()}#o(){this.#s()}#s(){let t=1,e=0;const r=setInterval((()=>{0==this.#e||this.#r.length===this.words[this.#e%this.words.length].length?(t%this.options.stepCount==0&&(this.#r[e]=this.#t[this.#e%this.words.length][e],e+=1),this.#i(this.#r,e,this.#r.length),e==this.#r.length&&(clearInterval(r),setTimeout((()=>{this.#e++,(1==this.options.loop||this.#t.length>=this.#e+1)&&this.#o(),this.words.length==this.#e&&(e=0)}),this.options.visibleTime))):(t%4==0&&this.#n(this.#r,this.#r.length,this.#t[this.#e%this.words.length].length),this.#i(this.#r,0,this.#r.length)),t++,this.#h(this.#r)}),this.options.stepDelay)}#n(t,e,r){e>r?t.pop():e<r&&t.push(" ")}#i(t,e,r){for(let o=e;o<r;o++)t[o]=this.#d()}#a(t,e){return Math.floor(Math.random()*(e-t+1)+t)}#d(){return String.fromCharCode(this.#a(33,126))}#h(t){this.domElement.textContent=t.join("")}}};var o=e.Z;export{o as default};