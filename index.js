import{a as m,S as g,i as p}from"./assets/vendor-BYRgfgUc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=m.create({baseURL:"https://pixabay.com/api/",params:{key:"49094425-ee2da42b6a4a3e6a1c3a9f546",image_type:"photo",orientation:"horizontal",safesearch:!0}});function y(r){return d.get("",{params:{q:r}}).then(s=>{if(s.data.hits.length===0)throw new Error("No images found");return s.data})}function h(r){const{webformatURL:s,largeImageURL:a,tags:o,likes:e,views:t,comments:l,downloads:f}=r;return`<li class="gallery-item">
        <div>
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${s}" alt="${o}" />
        </a>
        </div>
        <ul class="gallery-sublist">
          <li class="gallery-subitem"><p class="sub-text">Likes</p><p class="sub-value">${e}</p></li>
          <li class="gallery-subitem"><p class="sub-text">Views</p><p class="sub-value">${t}</p></li>
          <li class="gallery-subitem"><p class="sub-text">Comments</p><p class="sub-value">${l}</p></li>
          <li class="gallery-subitem"><p class="sub-text">Downloads</p><p class="sub-value">${f}</p></li>
        </ul>
      </li>`}function b(r){return r.map(h).join("")}const i={form:document.querySelector("form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};let n;c();i.form.addEventListener("submit",L);function L(r){r.preventDefault(),i.gallery.innerHTML="",v();const s=r.target.elements.search.value.trim();if(!s){u("Please enter a search term!"),c();return}y(s).then(a=>{i.gallery.innerHTML=b(a.hits),n?n.refresh():n=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(a=>{u("Sorry, there are no images matching <br> your search query. Please, try again!")}).finally(()=>{c()}),r.target.reset()}function c(){i.loader.style.display="none"}function v(){i.loader.style.display="block"}function u(r){p.warning({message:r,titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",iconUrl:"./img/octagon.svg",position:"topRight"})}
//# sourceMappingURL=index.js.map
