const e={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),createBtn:document.querySelector("button")};let t=0,o=0,n=0;function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.form.addEventListener("submit",(r=>{if(r.preventDefault(),t=Number(e.delay.value),o=Number(e.step.value),n=Number(e.amount.value),t<0||o<0||n<0)alert("pls enter only positive values");else{e.form.reset();for(let e=1;e<=n;e++)l(e,t).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t} ms`)})),t+=o}}));
//# sourceMappingURL=03-promises.17e1de9c.js.map