/* Cookbook Shelf art: baked images + clickable category books */
(function(){
  var V='?v=2';
  var B=[[78, 48, 150, 'Breakfast'], [154.8, 50, 162, 'Dinner'], [231.6, 52, 170, 'Meats & Seafood'], [312.4, 48, 152, 'Comfort Food'], [391.2, 46, 158, 'Soups'], [464.0, 48, 148, 'Desserts'], [513.4, 48, 160, 'Beverages']];
  try{
    var st=document.createElement('style');
    st.textContent='.shelf-real{position:relative;display:block;width:100%}'+
    '.shelf-real .shelf-base{display:block;width:100%;height:auto}'+
    '.shelf-book{position:absolute;display:block;margin:0;padding:0;border:0;background:none;cursor:pointer;transform-origin:50% 100%;transition:transform .18s ease,filter .18s ease;-webkit-tap-highlight-color:transparent}'+
    'span.shelf-book{cursor:inherit}'+
    '.shelf-book img{display:block;width:100%;height:100%;pointer-events:none}'+
    'button.shelf-book.out,button.shelf-book:focus-visible{transform:translateY(-12px) scale(1.03);filter:brightness(1.18) drop-shadow(0 0 8px rgba(224,189,120,.7))}'+
    '@media (hover:hover){button.shelf-book:hover{transform:translateY(-8px) scale(1.02);filter:brightness(1.12) drop-shadow(0 0 6px rgba(224,189,120,.5))}}'+
    'button.shelf-book:focus-visible{outline:2px solid #e0bd78;outline-offset:1px}'+
    '.shelf-art .shelf-real,.door-art .shelf-real,.shelf-art .shelf-hint,.door-art .shelf-book,.shelf-art span.shelf-book{flex:none;height:auto;background:none;writing-mode:horizontal-tb;display:block;box-shadow:none;border-radius:0;text-transform:none;letter-spacing:normal;font-weight:400;color:inherit}'+
    '.shelf-art .shelf-real,.door-art .shelf-real{position:relative;width:100%}'+
    '.shelf-real .shelf-book{position:absolute}'+
    '.shelf-art .shelf-hint{text-align:center;font-size:.78rem;opacity:.7;margin:-4px 0 12px;width:auto;height:auto;position:static}'+
    '@media (max-width:640px){.shelf-art{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none}.shelf-art::-webkit-scrollbar{display:none}.shelf-art .shelf-real{min-width:640px}.shelf-art .shelf-hint{position:sticky;left:0;width:calc(100vw - 32px);box-sizing:border-box}}';
    document.head.appendChild(st);
  }catch(e){}
  window.shelfArt=function(interactive){
    var h='<span class="shelf-real"><img class="shelf-base" src="shelf-base.webp'+V+'" alt="" width="720" height="214">';
    B.forEach(function(b,i){
      var s='left:'+((b[0]-8)/7.2).toFixed(3)+'%;width:'+((b[1]+16)/7.2).toFixed(3)+'%;top:'+((178-b[2])/2.14).toFixed(3)+'%;height:'+((b[2]+4)/2.14).toFixed(3)+'%';
      var img='<img src="shelf-b'+i+'.webp'+V+'" alt="">';
      h+=interactive
        ? '<button type="button" class="shelf-book" data-shelf-cat="'+b[3]+'" style="'+s+'" aria-label="Show '+b[3]+' recipes" title="'+b[3]+'">'+img+'</button>'
        : '<span class="shelf-book" style="'+s+'">'+img+'</span>';
    });
    h+='</span>';
    if(interactive) h+='<span class="shelf-hint">Swipe the shelf and tap a book to browse that category</span>';
    return h;
  };
  function chip(cat){
    var l=document.querySelectorAll('.chips [data-cat]');
    for(var i=0;i<l.length;i++) if(l[i].getAttribute('data-cat')===cat) return l[i];
    return null;
  }
  function sync(){
    var on=document.querySelector('.chips [data-cat][aria-pressed="true"]');
    var cur=on?on.getAttribute('data-cat'):'All';
    var bs=document.querySelectorAll('button.shelf-book');
    for(var i=0;i<bs.length;i++){
      var c=bs[i].getAttribute('data-shelf-cat');
      bs[i].classList.toggle('out',c===cur);
      bs[i].style.display=chip(c)?'':'none';
    }
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('button.shelf-book');
    if(!b) return;
    var c=chip(b.getAttribute('data-shelf-cat'));
    if(!c) return;
    var on=c.getAttribute('aria-pressed')==='true';
    var t=on?chip('All'):c;
    if(t) t.click();
    setTimeout(function(){
      sync();
      var el=document.querySelector('.controls');
      if(el&&el.scrollIntoView) el.scrollIntoView({behavior:'smooth',block:'start'});
    },30);
  });
  var q=0;
  try{
    new MutationObserver(function(){ if(q) return; q=requestAnimationFrame(function(){q=0;sync();}); })
      .observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-pressed']});
  }catch(e){}
})();
