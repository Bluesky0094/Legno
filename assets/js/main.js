(function(){
  const body=document.body;const root=body.dataset.root||".";const page=body.dataset.page||"home";let content;
  const path=value=>/^(https?:|mailto:|tel:|#)/.test(value)?value:(root==="."?value:`${root}/${value}`);
  async function boot(){
    const [header,footer,data]=await Promise.all([
      fetch(path("components/header.html")).then(r=>r.text()),
      fetch(path("components/footer.html")).then(r=>r.text()),
      fetch(path("data/content.json")).then(r=>r.json())
    ]);content=data;document.querySelector("[data-header]").innerHTML=header;document.querySelector("[data-footer]").innerHTML=footer;
    document.querySelectorAll("[data-route]").forEach(a=>{const key=a.dataset.route;a.href=path(content.routes[key]);});
    const nav=document.querySelector("[data-nav]");nav.innerHTML=content.nav.map(item=>`<li><a class="${item.key===page?'active':''}" ${item.key===page?'aria-current="page"':''} href="${path(content.routes[item.key])}">${item.label}</a></li>`).join("");
    document.querySelectorAll("[data-year]").forEach(n=>n.textContent=new Date().getFullYear());
    initMenu();initReveal();initMaterialPreview();initCatalogue();initQuote();
  }
function initMenu(){
  const btn=document.querySelector(".menu-toggle"),nav=document.querySelector(".site-nav");
  if(!btn||!nav)return;

  const links=()=>[...nav.querySelectorAll("a[href]")];
  const setOpen=(open,{restoreFocus=false}={})=>{
    nav.classList.toggle("open",open);
    body.classList.toggle("menu-open",open);
    btn.setAttribute("aria-expanded",String(open));
    if(open){
      nav.scrollTop=0;
      requestAnimationFrame(()=>links()[0]?.focus());
    }else if(restoreFocus){
      btn.focus();
    }
  };

  btn.addEventListener("click",()=>setOpen(!nav.classList.contains("open")));
  nav.addEventListener("click",event=>{
    if(event.target.closest("a"))setOpen(false);
  });
  document.addEventListener("keydown",event=>{
    if(!nav.classList.contains("open"))return;
    if(event.key==="Escape"){
      event.preventDefault();
      setOpen(false,{restoreFocus:true});
      return;
    }
    if(event.key!=="Tab")return;
    const focusable=links();
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){
      event.preventDefault();
      last.focus();
    }else if(!event.shiftKey&&document.activeElement===last){
      event.preventDefault();
      first.focus();
    }
  });
  window.addEventListener("resize",()=>{
    if(window.innerWidth>900)setOpen(false);
  });
}
  function initReveal(){const nodes=document.querySelectorAll(".reveal");if(matchMedia("(prefers-reduced-motion: reduce)").matches){nodes.forEach(n=>n.classList.add("visible"));return;}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});nodes.forEach(n=>observer.observe(n));}
  function imageUrl(material){return path(material.image);}
  function initMaterialPreview(){const list=document.querySelector("[data-material-preview]");if(!list||!content)return;list.innerHTML=content.materials.slice(0,4).map((m,i)=>`<a href="${path(content.routes.materials)}?material=${m.id}"><em>0${i+1}</em><b>${m.name}</b><span>↗</span></a>`).join("");}
  function card(m){return `<article class="material-card reveal" data-name="${m.name.toLowerCase()}" data-species="${m.species}" data-application="${m.application}" data-format="${m.format}" data-availability="${m.availability}"><img src="${imageUrl(m)}" alt="${m.name}" loading="lazy"><div class="material-copy"><div class="tags"><span class="tag">${m.species}</span><span class="tag">${m.format}</span><span class="tag">${m.grade}</span></div><h2>${m.name}</h2><p>${m.description}</p><button class="btn" type="button" data-add-material="${m.id}">Aggiungi al preventivo <span>+</span></button></div></article>`;}
  function initCatalogue(){const grid=document.querySelector("[data-catalogue]");if(!grid||!content)return;grid.innerHTML=content.materials.map(card).join("");const controls=document.querySelectorAll("[data-filter]");const apply=()=>{const q=(document.querySelector('[data-filter="search"]')?.value||"").toLowerCase();const values={species:document.querySelector('[data-filter="species"]')?.value||"",application:document.querySelector('[data-filter="application"]')?.value||"",format:document.querySelector('[data-filter="format"]')?.value||"",availability:document.querySelector('[data-filter="availability"]')?.value||""};grid.querySelectorAll(".material-card").forEach(card=>{const ok=card.dataset.name.includes(q)&&Object.entries(values).every(([k,v])=>!v||card.dataset[k]===v);card.hidden=!ok;});};controls.forEach(c=>c.addEventListener("input",apply));grid.addEventListener("click",event=>{const button=event.target.closest("[data-add-material]");if(!button)return;sessionStorage.setItem("nordMaterial",button.dataset.addMaterial);location.href=path(content.routes.contact);});initReveal();}
  function initQuote(){const form=document.querySelector("[data-quote-form]");if(!form||!content)return;const materialSelect=form.elements.material;materialSelect.innerHTML='<option value="">Seleziona un materiale</option>'+content.materials.map(m=>`<option value="${m.name}">${m.name}</option>`).join("");const saved=sessionStorage.getItem("nordMaterial");const match=content.materials.find(m=>m.id===saved);if(match)materialSelect.value=match.name;const summary=document.querySelector("[data-summary]");const update=()=>{const d=new FormData(form);summary.textContent=["Riepilogo richiesta",d.get("material")||"Materiale da definire",d.get("dimensions")||"Misure da definire",d.get("quantity")?`Quantità: ${d.get("quantity")}`:"Quantità da definire",d.get("delivery")||"Consegna da definire"].join("\n");};form.addEventListener("input",update);update();form.addEventListener("submit",event=>{event.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const text=["Richiesta dal progetto dimostrativo Nord Legnami",`Nome: ${d.get("name")}`,`Email: ${d.get("email")}`,`Materiale: ${d.get("material")}`,`Misure: ${d.get("dimensions")}`,`Quantità: ${d.get("quantity")}`,`Consegna: ${d.get("delivery")}`,`Note: ${d.get("notes")||"-"}`].join("\n");const channel=d.get("channel");if(channel==="whatsapp")location.href=`https://wa.me/393478349694?text=${encodeURIComponent(text)}`;else location.href=`mailto:stefanocaccamo1@outlook.com?subject=${encodeURIComponent("Richiesta Nord Legnami")}&body=${encodeURIComponent(text)}`;});}
  boot().catch(error=>{console.error(error);body.insertAdjacentHTML("afterbegin",'<p role="alert" style="padding:1rem;background:#fff3cd">Impossibile caricare il sito. Riprova tra poco.</p>');});
})();
