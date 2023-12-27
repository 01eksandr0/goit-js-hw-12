import{a as g,S as h,i as d}from"./assets/vendor-f67ecabd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const v=async r=>await g.get("https://pixabay.com/api/",{params:r}),b=r=>r.reduce((t,o)=>(t.push(` <li class='list-item'><a  href="${o.largeImageURL}"><img width="360"
           height="200"   src="${o.webformatURL}" alt="${o.tags}"></a><div class="cont">
          <div class="mini-cont">
            <p><strong>Likes</strong></p>
            <p>${o.likes}</p> 
          </div>
          <div class="mini-cont">
            <p><strong>Views</strong></p>
            <p>${o.views}</p>
          </div>
          <div class="mini-cont">
            <p><strong>Comment</strong></p>
            <p>${o.comments}</p>
          </div>
          <div class="mini-cont">
             <p><strong>Downloads</strong></p>
            <p>${o.downloads}</p>
          </div>
        </div></li>`),t),[]),L=document.querySelector(".list"),l=document.querySelector(".loader"),u=document.querySelector(".next"),S=new h(".list a"),y=r=>{v(r).then(t=>{if(r.page>=t.data.totalHits/40)d.error({message:"We're sorry, but you've reached the end of search results.",position:"center"}),u.style.display="none",l.style.display="none";else return t.data}).then(t=>{const o=b(t.hits);o.length<1?(d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),l.style.display="none"):(L.insertAdjacentHTML("beforeend",o.join(" ")),u.style.display="block",l.style.display="none",S.refresh(),r.page>1&&window.scrollBy({top:2*document.querySelector(".list-item").getBoundingClientRect().height,behavior:"smooth"}))}).catch(t=>{console.log(t)})},m=document.querySelector(".loader"),c=document.querySelector(".form"),p=document.querySelector(".list"),f=document.querySelector(".next"),s={key:"41368993-aecccf11b76826fadfd0039f8",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,limit:40,page:1},q=r=>{r.preventDefault(),f.style.display="none",p.children.length>0&&(p.innerHTML=""),m.style.display="inline-block",s.q=c.search.value,s.page=1,c.reset(),y(s)},w=()=>{m.style.display="inline-block",s.page++,y(s)};c.addEventListener("submit",q);f.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
