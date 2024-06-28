import{a as p,i,S as f}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();p.defaults.baseURL="https://pixabay.com";const w="44363127-b4cd04443a44f0f2a63a731a6";async function h(r,s){const e=new URLSearchParams({key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15});return(await p.get("/api/",{params:e})).data}function y(r){return document.querySelector(".gallery"),r.map(e=>`
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
  `).join("")}const P=document.querySelector(".gallery-form");document.querySelector(".btn");const u=document.querySelector(".gallery"),g=document.querySelector(".js-loader"),m=document.querySelector(".load-more");let n="",c=1,L=1;P.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements.text.value.trim(),console.log(n),c=1,n===""){i.error({message:"Please enter a search query!"});return}b(),v();try{const s=await h(n,c);if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}L=Math.ceil(s.totalHits/15);const e=y(s.hits);u.innerHTML=e,S(),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}catch{i.error({title:"Error",message:"Catch error"})}d(),r.target.elements.text.value=""});m.addEventListener("click",async r=>{c++,v();try{const s=await h(n,c),e=y(s.hits);u.insertAdjacentHTML("beforeend",e),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),x()}catch{i.error({title:"Error",message:"Catch error"})}d()});function S(){c>=L?(b(),i.info({message:"We are sorry, but you have reached the end of search results."})):q()}function v(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}function q(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}function x(){const r=u.children[0];if(r){const s=r.getBoundingClientRect().height;window.scrollBy({top:s*3,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
