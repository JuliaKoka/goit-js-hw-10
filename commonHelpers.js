import{f as m}from"./assets/vendor-2b44ac2e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let l;const a=document.querySelector("[data-start]"),i={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){const n=new Date,r=o[0];r<=n?(window.alert("Please choose a date in the future"),a.disabled=!0):(a.disabled=!1,l=r),console.log(r)}};document.addEventListener("DOMContentLoaded",function(){m("#datetime-picker",h)});function y(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),d=Math.floor(o%864e5%36e5/6e4),f=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:d,seconds:f}}function u(o){return String(o).padStart(2,"0")}a.addEventListener("click",p);function p(o){a.disabled=!0;const n=setInterval(()=>{const c=l-new Date;if(c<=0){clearInterval(n);return}const{days:e,hours:t,minutes:s,seconds:d}=y(c);i.days.textContent=u(e),i.hours.textContent=u(t),i.minutes.textContent=u(s),i.seconds.textContent=u(d)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
