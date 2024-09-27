import{i as u,S as g}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const c={info:"Please enter a value in the search field!",warning:"Sorry, there are no images matching your search query. Please try again!",error:"Sorry, there are no connection to the server. Please try again later! ",exception:"Exception: We have some issue with connection. Please try again later! "},l={blue:"#abd4f8",orange:"#f28111",red:"#e97782"};function f(r,t){u.info({position:"topRight",backgroundColor:`${t}`,message:`${r}`})}const m={method:"GET"},d="46188258-c5cd36c908765f14e73be3753",y="https://pixabay.com/api/?";async function h(r){try{const t=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=await fetch(y+t,m).then();if(!o.ok){f(c.error,l.orange);return}return await o.json()}catch(t){f(`${c.exception} ERROR:  ${t}`,l.orange)}}const L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(r,t){t.innerHTML=w(r),L.refresh()}function w(r){return r.hits.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:n,comments:i,downloads:p})=>`
				<li class="gallery-item hvr-grow">
					<a class="gallery-link" href="${o}">
						<figure class="gallery-figure ">
							<img class="gallery-image" src="${t}" alt="${a}" loading="lazy">
							<figcaption class="gallery-figcaption">
								<ul class="img-content-wrapper">
									<li>Likes<span>${e}</span></li>
									<li>Views<span>${n}</span></li>
									<li>Comments<span>${i}</span></li>
									<li>Downloads<span>${p}</span></li>
								</ul>
							</figcaption>
						</figure>
					</a>
				</li>
		`).join("")}const b=document.querySelector(".search-form"),s=document.querySelector(".gallery");document.createElement("div");b.addEventListener("submit",E);async function E(r){r.preventDefault(),u.destroy(),s.innerHTML="",addLoader();const t=new FormData(r.target),{search:o}=Object.fromEntries(t.entries());if(!o.trim()){f(c.info,l.blue),s.innerHTML="";return}try{const a=await h(o.trim());P(a)&&S(a,s)}catch(a){f(c.exception+a,l.orange)}r.target.reset()}function P(r){return r?r&&r.totalHits===0?(f(c.warning,l.red),s.innerHTML="",!1):!0:(s.innerHTML="",!1)}
//# sourceMappingURL=index.js.map
