import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as C,i as x}from"./assets/vendor-585fe19e.js";const u=document.querySelector("button"),N=document.querySelector("input#datetime-picker"),d=document.querySelector("[data-days]"),l=document.querySelector("[data-hours]"),m=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");document.querySelector(".timer");let e,a;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],e<Date.now()?(x.error({message:"Please choose a date in the future",position:"topRight"}),y()):h()}};function h(){u.disabled=!1}function y(){u.disabled=!0}function q(){a=setInterval(b,1e3,e)}function b(){const t=new Date,r=e-t,{days:s,hours:i,minutes:c,seconds:n}=M(r);!isNaN(s)&&!isNaN(i)&&!isNaN(c)&&!isNaN(n)&&(d.textContent=o(s),l.textContent=o(i),m.textContent=o(c),f.textContent=o(n)),r<=0&&g()}u.addEventListener("click",()=>{e&&(q(),y())});function g(){a&&(clearInterval(a),a=null,h(),v())}function v(){d.textContent="00",l.textContent="00",m.textContent="00",f.textContent="00"}function o(t){return String(t).padStart(2,"0")}function M(t){const n=Math.floor(t/864e5),p=Math.floor(t%864e5/36e5),D=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:p,minutes:D,seconds:S}}C(N,T);
//# sourceMappingURL=commonHelpers.js.map
