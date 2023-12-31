import{a as g,S as h,i as d}from"./assets/vendor-f67ecabd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const v=async n=>await g.get("https://pixabay.com/api/",{params:n}),b=n=>n.reduce((e,o)=>(e.push(` <li class='list-item'><a  href="${o.largeImageURL}"><img width="360"
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
        </div></li>`),e),[]),L=document.querySelector(".list"),l=document.querySelector(".loader"),u=document.querySelector(".next"),S=new h(".list a"),y=n=>{v(n).then(e=>(n.page===Math.ceil(e.data.totalHits/40)&&(d.error({message:"We're sorry, but you've reached the end of search results.",position:"center"}),u.style.display="none",l.style.display="none"),e.data)).then(e=>{const o=b(e.hits);o.length<1?(d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),l.style.display="none"):(L.insertAdjacentHTML("beforeend",o.join(" ")),n.page<Math.ceil(e.totalHits/40)&&(u.style.display="block"),l.style.display="none",S.refresh(),n.page>1&&window.scrollBy({top:2*document.querySelector(".list-item").getBoundingClientRect().height,behavior:"smooth"}))}).catch(e=>{console.log(e)})},f=document.querySelector(".loader"),c=document.querySelector(".form"),p=document.querySelector(".list"),m=document.querySelector(".next"),s={key:"41368993-aecccf11b76826fadfd0039f8",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1},q=n=>{n.preventDefault(),m.style.display="none",p.children.length>0&&(p.innerHTML=""),f.style.display="inline-block",s.q=c.search.value,s.page=1,c.reset(),y(s)},w=()=>{f.style.display="inline-block",s.page++,y(s)};c.addEventListener("submit",q);m.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
