import{a as f,S as d,i as s}from"./assets/vendor-D5mnuR-h.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="49376461-7308a4eb46f734d3329281beb";function p(o){return f.get("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>(console.error("Error loading images:",r),[]))}const y=document.querySelector(".gallery"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){return o.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:n,downloads:u})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img src="${r}" alt="${a}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${t}</p>
            <p><b>Comments:</b> ${n}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>`).join("")}function b(o){y.innerHTML=h(o),g.refresh()}const L=document.querySelector(".form"),l=document.querySelector('input[name = "search-text"]'),c=document.querySelector(".loader");L.addEventListener("submit",q);function q(o){o.preventDefault();const r=l.value.trim();if(!r){s.info({title:"Hello",message:"Please enter your query"});return}c.classList.remove("hidden"),p(r).then(i=>{if(i.hits.length===0){s.info({title:"Sorry",message:"there are no images matching your search query. Please try again!"});return}b(i.hits),l.value=""}).catch(i=>{console.log("Failed to fetch images. Try again later!",i)}).finally(()=>{c.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
