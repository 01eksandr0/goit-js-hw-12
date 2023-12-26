import{S as d,i as p,a as u}from"./assets/vendor-5f0e12e0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=n=>n.reduce((o,r)=>(o.push(` <li class='list-item'><a  href="${r.largeImageURL}"><img width="360"
           height="200"   src="${r.webformatURL}" alt="${r.tags}"></a><div class="cont">
          <div class="mini-cont">
            <p><strong>Likes</strong></p>
            <p>${r.likes}</p>
          </div>
          <div class="mini-cont">
            <p><strong>Views</strong></p>
            <p>${r.views}</p>
          </div>
          <div class="mini-cont">
            <p><strong>Comment</strong></p>
            <p>${r.comments}</p>
          </div>
          <div class="mini-cont">
             <p><strong>Downloads</strong></p>
            <p>${r.downloads}</p>
          </div>
        </div></li>`),o),[]),a=document.querySelector(".loader"),l=document.querySelector(".form"),c=document.querySelector(".list"),m=new d(".list a"),g=n=>{n.preventDefault(),c.children.length>0&&(c.innerHTML=""),a.style.display="inline-block";const o=new URLSearchParams({key:"41368993-aecccf11b76826fadfd0039f8",q:l.search.value,image_type:"photo",orientation:"horizontal",safesearch:!0});l.reset(),(async()=>await u.get(`https://pixabay.com/api/?${o}`,{params:o}))().then(s=>s.json()).then(s=>{const e=f(s.hits);e.length<1?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),a.style.display="none"):(c.insertAdjacentHTML("afterbegin",e.join(" ")),a.style.display="none",m.refresh())}).catch(s=>console.log(s))};l.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
