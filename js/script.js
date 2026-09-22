(function () {
  'use strict';
  const D = window.VDS;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const money = value => '₹' + Number(value).toLocaleString('en-IN');
  const wa = message => 'https://wa.me/' + D.contact.whatsapp + '?text=' + encodeURIComponent(message);
  const external = ' target="_blank" rel="noopener noreferrer"';
  const icons = {
    website:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13l-2 2 2 2m8-4 2 2-2 2m-5 1 2-6"/>',
    poster:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="m8 13 3-4 5 6H8zm0 5h8"/>',
    social:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
    ad:'<path d="m3 10 16-6v16L3 14zm3 5 2 6h4l-3-5M21 8v8"/>',
    play:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 6 3-6 3z"/>',
    flyer:'<path d="M5 3h10l4 4v14H5zM15 3v5h4M8 12h8m-8 4h6"/>',
    card:'<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5 16c0-3 6-3 6 0m3-6h5m-5 4h4"/>',
    chat:'<path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z"/><path d="M8 8c0 4 4 8 8 8l1-3-3-1-1 1-2-2 1-1-1-3z"/>',
    email:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
    phone:'<path d="m7 3 3 5-3 2c1 3 4 6 7 7l2-3 5 3-1 4C10 23 1 14 3 4z"/>'
  };
  const icon = name => '<svg aria-hidden="true" viewBox="0 0 24 24">' + (icons[name] || icons.poster) + '</svg>';
  function enquiry(label, message, className = 'button') {return '<a class="'+className+'" href="'+escape(wa(message))+'"'+external+'>'+label+'</a>';}
  const original = item => 'assets/' + (item.kind === 'website' ? 'websites' : 'graphic-design') + '/' + item.id + '.png';
  const preview = item => original(item).replace('.png', '-preview.webp');
  const websites = D.websites.map(item => ({...item,kind:'website'}));
  const graphics = D.graphics.map(item => ({...item,kind:'graphic'}));
  const allItems = websites.concat(graphics);
  let filteredGraphics = graphics;
  const imageMarkup = (item, lazy = true) => '<img width="'+(item.width||1122)+'" height="'+(item.height||1402)+'" src="'+preview(item)+'" alt="'+escape(item.name+' — '+item.industry+' concept design')+'" '+(lazy ? 'loading="lazy" decoding="async"' : 'fetchpriority="high"')+'>';
  function portfolioCard(item) {
    const isWeb = item.kind === 'website';
    return '<article class="portfolio-card '+(isWeb ? '' : 'graphic-card')+'"><button type="button" class="image-button '+(isWeb?'website-preview':'')+'" data-view="'+item.id+'" aria-label="View '+escape(item.name)+' full design">'+imageMarkup(item)+'</button><div class="portfolio-body"><span class="tag">Concept Design</span><h3>'+escape(item.name)+'</h3><p class="industry">'+escape(item.industry+(isWeb?'':' / '+item.category))+'</p><p class="portfolio-description">'+escape(item.description)+'</p><div class="portfolio-actions"><button class="button button-white" data-view="'+item.id+'">'+(isWeb?'View Full Design':'View Design')+' <span aria-hidden="true">↗</span></button>'+enquiry((isWeb?'Request Similar Website':'Request Similar Design')+' <span aria-hidden="true">→</span>', 'Hi Vishal, I am interested in '+(isWeb?'a website':'a design')+' similar to your '+item.industry+' concept ('+item.name+'). Please share the details.','text-link')+'</div></div></article>';
  }
  $$('[data-brand-name]').forEach(el => el.textContent = D.brand.name);
  $$('[data-brand-message]').forEach(el => el.textContent = D.brand.message);
  $$('[data-logo]').forEach(el => el.src = D.brand.logo);
  $$('[data-logo-original]').forEach(el => el.src = D.seo.socialImage);
  $$('[data-enquiry]').forEach(el => {el.href=wa(el.dataset.enquiry);el.target='_blank';el.rel='noopener noreferrer';});
  document.title = D.seo.title;
  $('meta[name="description"]').content=D.seo.description;
  $('meta[property="og:title"]').content=D.seo.title;
  $('meta[property="og:description"]').content=D.seo.description;
  $('meta[property="og:image"]').content=D.seo.socialImage;
  $('meta[name="twitter:image"]').content=D.seo.socialImage;
  // A production URL is optional locally. No invented canonical URL is emitted.
  if (D.seo.canonicalUrl) {
    try {
      const url=new URL(D.seo.canonicalUrl);
      if (!/^https?:$/.test(url.protocol)) throw new Error('Use an http(s) URL');
      const link=$('link[rel="canonical"]')||document.createElement('link');link.rel='canonical';link.href=url.href;if(!link.isConnected)document.head.append(link);
      const og=$('meta[property="og:url"]')||document.createElement('meta');og.setAttribute('property','og:url');og.content=url.href;if(!og.isConnected)document.head.append(og);
      const absoluteImage=new URL(D.seo.socialImage,url).href;
      $('meta[property="og:image"]').content=absoluteImage;$('meta[name="twitter:image"]').content=absoluteImage;
    } catch (error) { console.warn('Please enter a valid canonicalUrl in js/data.js.'); }
  }
  const hero=$('#hero-art');
  [websites[0],websites[8],websites[2]].forEach((item,index)=>{
    const button=document.createElement('button');button.className='hero-frame '+['main-frame','small-frame','third-frame'][index];button.dataset.view=item.id;button.setAttribute('aria-label','View '+item.name+' concept');button.innerHTML='<span class="frame-bar" aria-hidden="true"><i></i><i></i><i></i></span>'+imageMarkup(item,false);hero.append(button);
  });
  const services=[{name:'Website Design',price:D.websitePackages[0].price,icon:'website',description:'Thoughtful, responsive websites that tell your story beautifully.'},...D.graphicServices];
  $('#services-grid').innerHTML=services.map((s,index)=>'<article class="service-card"><span class="icon-tile">'+icon(s.icon)+'</span><h3>'+escape(s.name==='Social Media Creative'?'Social Media Design':s.name==='YouTube Thumbnail'?'YouTube Thumbnail Design':s.name)+'</h3><p>'+escape(s.description)+'</p><span class="service-price">From '+money(s.price)+(D.pricingApproved?'':' · Draft')+'</span>'+enquiry('Enquire Now <span aria-hidden="true">↗</span>','Hi Vishal, I am interested in your '+s.name+' service. Please share the details.','text-link')+'</article>').join('');
  const featured=[websites[6],websites[5],graphics.find(item=>item.id==='skincare-serum')];
  $('#featured-grid').innerHTML=featured.map(item=>'<article class="featured-card"><button class="image-button featured-visual" data-view="'+item.id+'" aria-label="View '+escape(item.name)+' full design">'+imageMarkup(item)+'</button><h3>'+escape(item.name)+'</h3><p>'+escape(item.industry)+' · Concept Design</p></article>').join('');
  $('#website-grid').innerHTML=websites.map(portfolioCard).join('');
  function renderGraphics(category) {
    filteredGraphics=category==='All'?graphics:graphics.filter(item=>item.category===category);
    $('#graphic-grid').innerHTML=filteredGraphics.map(portfolioCard).join('');
    $('#filter-status').textContent=filteredGraphics.length+' '+(category==='All'?'graphic':category.toLowerCase())+' concepts shown.';
    $$('#graphic-filters button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===category)));
  }
  const categories=['All',...['Posters','Social Media','Advertisements','Thumbnails','Flyers','Business Cards'].filter(category=>graphics.some(item=>item.category===category))];
  $('#graphic-filters').innerHTML=categories.map((category,index)=>'<button class="filter-button" data-filter="'+category+'" aria-pressed="'+(index===0)+'">'+category+'</button>').join('');
  $('#graphic-filters').addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(button)renderGraphics(button.dataset.filter);});
  renderGraphics('All');
  $('#missing-assets').innerHTML=D.missingGraphicAssets.map(name=>'<div class="missing-slot">'+escape(name)+'<span>Portfolio sample awaiting upload</span></div>').join('');
  $$('[data-draft-notice]').forEach(el=>el.hidden=D.pricingApproved);
  $('#website-pricing').innerHTML=D.websitePackages.map(p=>'<article class="price-card '+(p.featured?'featured-price':'')+'"><h3>'+escape(p.name)+'</h3><p class="package-description">'+escape(p.description)+'</p><div class="price"><span class="price-prefix">'+(p.from?'Starting from':'Project price')+'</span>'+money(p.price)+'</div><ul>'+p.features.map(f=>'<li>'+escape(f)+'</li>').join('')+'</ul>'+(p.note?'<p class="package-note">'+escape(p.note)+'</p>':'')+enquiry('Enquire About This Package','Hi Vishal, I am interested in the '+p.name+' package at '+(p.from?'starting from ':'')+money(p.price)+(D.pricingApproved?'': ' (draft pricing, subject to confirmation)')+'. Please share the details.',p.featured?'button':'button button-white')+'</article>').join('');
  $('#additional-services').innerHTML=D.additionalServices.map(s=>'<div class="extra-row"><div>'+escape(s.name)+(s.note&&s.price?'<p>'+escape(s.note)+'</p>':'')+'</div><strong>'+(s.price?(s.from?'From ':'')+money(s.price)+(s.suffix||''):escape(s.note))+'</strong></div>').join('');
  $('#graphic-pricing-grid').innerHTML=D.graphicServices.map(s=>'<article class="graphic-price-card"><span class="icon-tile">'+icon(s.icon)+'</span><h3>'+escape(s.name)+'</h3><div class="price"><span class="price-prefix">From</span>'+money(s.price)+'</div><p>'+escape(s.description)+'</p>'+enquiry('Request Design <span aria-hidden="true">↗</span>','Hi Vishal, I am interested in your '+s.name+' service. Please share the details.','text-link')+'</article>').join('');
  $('#faq-list').innerHTML=D.faq.map(([question,answer])=>'<details><summary>'+escape(question)+'</summary><p>'+escape(D.pricingApproved&&question==='How much does a website cost?'?'Explore the website packages above. Final pricing depends on your agreed project requirements.':answer)+'</p></details>').join('');
  const contacts=[['WhatsApp',D.contact.whatsappDisplay,wa('Hi Vishal, I would like to discuss a design project.'),'chat'],['Instagram',D.contact.instagramHandle,D.contact.instagram,'social'],['Email',D.contact.email,'mailto:'+D.contact.email,'email'],['Phone',D.contact.phoneDisplay,'tel:'+D.contact.phone,'phone']];
  $('#contact-cards').innerHTML=contacts.map(([label,value,href,iconName])=>'<a class="contact-card" href="'+escape(href)+'"'+(/^https:/.test(href)?external:'')+'>'+icon(iconName)+'<div><strong>'+label+'</strong><span>'+escape(value)+'</span></div><span class="contact-arrow" aria-hidden="true">↗</span></a>').join('');
  $('#footer-contact').insertAdjacentHTML('beforeend',contacts.map(([label,value,href])=>'<a href="'+escape(href)+'"'+(/^https:/.test(href)?external:'')+'>'+escape(label+': '+value)+'</a>').join(''));
  $('#year').textContent=new Date().getFullYear();
  // Native dialog supplies modal focus containment, Escape handling and inert background.
  const dialog=$('#lightbox');let gallery=[],current=0,returnFocus=null,oldOverflow='';
  function showImage() {
    const item=gallery[current];$('#lightbox-image').src=original(item);$('#lightbox-image').alt=item.name+' — '+item.industry+' full concept design';$('#lightbox-title').textContent=item.name;$('#lightbox-count').textContent=(current+1)+' / '+gallery.length+' · Concept Design';$('#lightbox-original').href=original(item);
  }
  function openImage(id,trigger) {
    const item=allItems.find(entry=>entry.id===id);if(!item)return;
    gallery=item.kind==='website'?websites:(filteredGraphics.some(entry=>entry.id===id)?filteredGraphics:graphics);current=gallery.findIndex(entry=>entry.id===id);returnFocus=trigger;showImage();oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();$('#lightbox-close').focus();
  }
  document.addEventListener('click',event=>{const button=event.target.closest('[data-view]');if(button)openImage(button.dataset.view,button);});
  function moveImage(direction){current=(current+direction+gallery.length)%gallery.length;showImage();}
  $('#lightbox-prev').addEventListener('click',()=>moveImage(-1));$('#lightbox-next').addEventListener('click',()=>moveImage(1));$('#lightbox-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();moveImage(1);}if(event.key==='ArrowLeft'){event.preventDefault();moveImage(-1);}});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow=oldOverflow;$('#lightbox-image').removeAttribute('src');if(returnFocus&&returnFocus.isConnected)returnFocus.focus();});
  const toggle=$('.menu-toggle'),nav=$('#main-nav');
  function setMenu(open,restoreFocus=false){toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('is-open',open);if(restoreFocus)toggle.focus();}
  toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
  nav.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')setMenu(false,true);});
  document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))setMenu(false);});
  window.matchMedia('(min-width:1051px)').addEventListener('change',event=>{if(event.matches)setMenu(false);});
  const navLinks=$$('#main-nav a');let framePending=false;
  function updateScroll(){framePending=false;const position=window.scrollY+150;let active='home';navLinks.map(link=>$(link.hash)).filter(Boolean).sort((a,b)=>a.offsetTop-b.offsetTop).forEach(section=>{if(section.offsetTop<=position)active=section.id;});navLinks.forEach(link=>{const selected=link.hash==='#'+active;link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});$('#back-to-top').hidden=window.scrollY<650;}
  window.addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(updateScroll);}},{passive:true});updateScroll();
  // WhatsApp opens a draft for the visitor to review. No sending or database is involved.
  $('#enquiry-form').addEventListener('submit',event=>{
    event.preventDefault();const form=event.currentTarget;
    const phone=form.elements.phone;phone.setCustomValidity((! /^[+0-9() .-]{7,25}$/.test(phone.value) || phone.value.replace(/\D/g,'').length<7)?'Please enter at least 7 digits.':'');
    ['fullName','description'].forEach(name=>{const field=form.elements[name];field.setCustomValidity(field.value.trim().length<(name==='description'?10:1)?'Please enter '+(name==='description'?'at least 10 characters describing your project.':'your name.'):'');});
    if(!form.reportValidity())return;
    const data=new FormData(form);const value=name=>String(data.get(name)||'').trim();
    const message='Hi Vishal, I would like to discuss a design project.\n\nFull Name: '+value('fullName')+'\nBusiness / Brand: '+(value('business')||'Not specified')+'\nEmail: '+value('email')+'\nPhone: '+value('phone')+'\nService: '+value('service')+'\nBudget: '+value('budget')+'\n\nProject Description:\n'+value('description');
    const href=wa(message);window.open(href,'_blank','noopener,noreferrer');
    const result=$('#form-result');result.hidden=false;result.innerHTML='Your WhatsApp enquiry is prepared. Review it and tap Send in WhatsApp. No message has been sent by this website.<a href="'+escape(href)+'"'+external+'>Open your prepared enquiry if WhatsApp did not open ↗</a>';
  });
  $$('#enquiry-form input, #enquiry-form textarea').forEach(field=>field.addEventListener('input',()=>field.setCustomValidity('')));
})();
