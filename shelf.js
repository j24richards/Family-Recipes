/* Cookbook Shelf art: baked images + clickable category books */
(function(){
  var V='?v=1';
  var B=[[78,44,114,'Breakfast'],[148.8,46,124,'Dinner'],[219.6,46,128,'Meats & Seafood'],[292.4,44,116,'Comfort Food'],[365.2,42,120,'Soups'],[432,44,112,'Desserts'],[502.8,44,122,'Beverages']];
  try{
    var st=document.createElement('style');
    st.textContent='.shelf-real{position:relative;display:block;width:100%}'+
    '.shelf-real .shelf-base{display:block;width:100%;height:auto}'+
    '.shelf-book{position:absolute;display:block;margin:0;padding:0;border:0;background:none;cursor:pointer;transition:transform .18s ease;-webkit-tap-highlight-color:transparent}'+
    'span.shelf-book{cursor:inherit}'+
    '.shelf-book img{display:block;width:100%;height:100%;pointer-events:none}'+
    'button.shelf-book:hover,button.shelf-book:focus-visible{transform:translateY(-8px)}'+
    'button.shelf-book.out{transform:translateY(-12px)}'+
    'button.shelf-book:focus-visible{outline:2px solid #e0bd78;outline-offset:1px}'+
    '.shelf-art .shelf-real,.door-art .shelf-real,.shelf-art .shelf-hint,.door-art .shelf-book,.shelf-art span.shelf-book{flex:none;height:auto;background:none;writing-mode:horizontal-tb;display:block;box-shadow:none;border-radius:0;text-transform:none;letter-spacing:normal;font-weight:400;color:inherit}'+
    '.shelf-art .shelf-real,.door-art .shelf-real{position:relative;width:100%}'+
    '.shelf-real .shelf-book{position:absolute}'+
    '.shelf-art .shelf-hint{text-align:center;font-size:.78rem;opacity:.7;margin:-4px 0 12px;width:auto;height:auto;position:static}';
    document.head.appendChild(st);
  }catch(e){}
  window.shelfArt=function(interactive){
    var h='<span class="shelf-real"><img class="shelf-base" src="shelf-base.webp'+V+'" alt="" width="720" height="176">';
    B.forEach(function(b,i){
      var s='left:'+((b[0]-8)/7.2).toFixed(3)+'%;width:'+((b[1]+16)/7.2).toFixed(3)+'%;top:'+((140-b[2])/1.76).toFixed(3)+'%;height:'+((b[2]+4)/1.76).toFixed(3)+'%';
      var img='<img src="shelf-b'+i+'.webp'+V+'" alt="">';
      h+=interactive
        ? '<button type="button" class="shelf-book" data-shelf-cat="'+b[3]+'" style="'+s+'" aria-label="Show '+b[3]+' recipes" title="'+b[3]+'">'+img+'</button>'
        : '<span class="shelf-book" style="'+s+'">'+img+'</span>';
    });
    h+='</span>';
    if(interactive) h+='<span class="shelf-hint">Tap a book to browse that category</span>';
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
