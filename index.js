import{a as m,S as p,i as a}from"./assets/vendor-BXBCZzWk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="47378752-b657325f73b86ea506e5db7de",g="https://pixabay.com/api/";function y(o){return m.get(g,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error("Error fetch:",r),r})}const u=document.querySelector("#gallery");let c;function L(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
      <a href="${n}" class="gallery-item">
        <img src="${s}" alt="${e}" />
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${i}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${d}</p>
        </div>
      </a>
    `).join("");u.innerHTML=r,c?c.refresh():c=new p(".gallery-item",{captionsData:"alt",captionDelay:250})}function b(){u.innerHTML=""}const q=document.querySelector("#search-form"),l=document.querySelector("#loader");q.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.query.value.trim();if(!r){a.error({message:"Please enter a correct query"});return}b(),l.classList.remove("hidden"),y(r).then(s=>{if(s.hits.length===0){a.info({message:"No images found"});return}L(s.hits)}).catch(s=>{a.error({message:"Error fetching images. Please try again."})}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
