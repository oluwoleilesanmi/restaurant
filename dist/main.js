!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=e=>{const t=document.createElement("div");t.className="innerDiv",t.appendChild(o()),t.appendChild(l()),t.appendChild(c()),e.appendChild(t)};let o=()=>{const e=document.createElement("h1");return e.innerHTML="Olu's Restaurant",e},c=()=>{const e=document.createElement("p");return e.innerHTML="Here for you since the 80's",e},l=()=>{const e=document.createElement("img");return e.src="./images/restaurant.jpg",e};const u=["POUNDED YAM","AMALA","EBA","RICE","CHICKEN AND CHIPS","FURA DE NUNU","FUFU","CHAPATI"],a=()=>{let e,t=document.createElement("ul"),n=null;for(e=0;e<u.length;e++)(n=document.createElement("li")).innerHTML=u[e],t.appendChild(n);return t},d=()=>{const e=document.createElement("h2");return e.innerHTML="Meals",e};let i=()=>{const e=document.createElement("h2");return e.innerHTML="Reach-out to Us",e},m=()=>{const e=document.createElement("p");return e.innerHTML="123-533-789",e},s=()=>{const e=document.createElement("p");return e.innerHTML="Fatoyibo street ikoyi lagos Nigeria",e},p=()=>{const e=document.createElement("p");return e.innerHTML="007@gmail.com",e};const f=(e,t)=>{const n=document.createElement("button");return n.innerHTML=e,n.id=t,n},v=document.getElementById("content");v.appendChild((()=>{const e=document.createElement("div");return e.appendChild(f("Home","home-nav")),e.appendChild(f("Menu","menu-nav")),e.appendChild(f("Contact","contact-nav")),e})()),document.getElementById("home-nav").classList.add("button"),r(v),document.getElementById("menu-nav").addEventListener("click",function(e){document.querySelectorAll("button").forEach(e=>e.classList.remove("button")),e.target.classList.add("button"),document.querySelectorAll(".innerDiv").forEach(e=>e.remove()),(e=>{const t=document.createElement("div");t.className="innerDiv",t.appendChild(d()),t.appendChild(a()),e.appendChild(t)})(v)}),document.getElementById("home-nav").addEventListener("click",function(e){document.querySelectorAll("button").forEach(e=>e.classList.remove("button")),e.target.classList.add("button"),document.querySelectorAll(".innerDiv").forEach(e=>e.remove()),r(v)}),document.getElementById("contact-nav").addEventListener("click",function(e){document.querySelectorAll("button").forEach(e=>e.classList.remove("button")),e.target.classList.add("button"),document.querySelectorAll(".innerDiv").forEach(e=>e.remove()),(e=>{const t=document.createElement("div");t.className="innerDiv",t.appendChild(i()),t.appendChild(s()),t.appendChild(m()),t.appendChild(p()),e.appendChild(t)})(v)})}]);