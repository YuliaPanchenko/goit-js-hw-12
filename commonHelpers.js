import{a as f,S,i as n}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();f.defaults.baseURL="https://pixabay.com";const P="44363127-b4cd04443a44f0f2a63a731a6";async function p(s,r){const e=new URLSearchParams({key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return(await f.get("/api/",{params:e})).data}function h(s){return document.querySelector(".gallery"),s.map(e=>`
    <li class="card">
    <a class="card-link" href=${e.webformatURL}>
      <img src="${e.webformatURL}" alt="${e.tags}">
      <div class="stats">
        <div class="stats-item">
          <p class="elements">Likes</p>
          ${e.likes}
        </div>
        <div class="stats-item">
          <p class="elements">Views</p>
          ${e.views}
        </div>
        <div class="stats-item">
          <p class="elements">Comments</p>
          ${e.comments}
        </div>
        <div class="stats-item">
          <p class="elements">Downloads</p>
          ${e.downloads}
        </div>
      </div>
    </li>
  `).join("")}const q=document.querySelector(".gallery-form");document.querySelector(".btn");const c=document.querySelector(".gallery"),y=document.querySelector(".js-loader"),m=document.querySelector(".load-more"),g=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});let a="",i=1,L=1;q.addEventListener("submit",async s=>{if(s.preventDefault(),a=s.target.elements.text.value.trim(),console.log(a),i=1,a===""){n.error({message:"Please enter a search query!"});return}w(),b();try{const r=await p(a,i);if(r.hits.length===0){c.innerHTML="",n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),u();return}L=Math.ceil(r.totalHits/15);const e=h(r.hits);c.innerHTML=e,v(),g.refresh()}catch{n.error({title:"Error",message:"Catch error"})}u(),s.target.elements.text.value=""});m.addEventListener("click",async s=>{i++,b();try{const r=await p(a,i),e=h(r.hits);c.insertAdjacentHTML("beforeend",e),v(),g.refresh(),x()}catch{n.error({title:"Error",message:"Catch error"})}u()});function v(){i>=L?(w(),n.info({message:"We are sorry, but you have reached the end of search results."})):E()}function b(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}function E(){m.classList.remove("hidden")}function w(){m.classList.add("hidden")}function x(){const s=c.children[0];if(s){const r=s.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
