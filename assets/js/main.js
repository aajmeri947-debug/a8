(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function all(s){return [].slice.call(document.querySelectorAll(s));}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function clock(m){m=((m%1440)+1440)%1440;var h=Math.floor(m/60),mi=m%60,ap=h>=12?'pm':'am',h12=h%12===0?12:h%12;return h12+':'+(mi<10?'0':'')+mi+' '+ap;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
var ts=$('tm-s');if(ts){var ns=all('.tm-n'),cs=all('.tm-c'),rs=all('.tm-r');
 on([ts].concat(ns,cs,rs),function(){var p=(ts.value||'19:00').split(':'),serve=parseInt(p[0],10)*60+parseInt(p[1],10);if(isNaN(serve))serve=1140;
  var ev=[],first=serve;
  ns.forEach(function(n,i){var name=n.value.trim(),c=Math.max(0,parseInt(cs[i].value,10)||0),r=Math.max(0,parseInt(rs[i].value,10)||0);if(!name||!c)return;
   var st=serve-r-c;first=Math.min(first,st);ev.push([st,'Start '+esc(name)+' ('+c+' min)']);if(r)ev.push([serve-r,esc(name)+' out to rest for '+r+' min']);});
  if(!ev.length){$('tm-o').innerHTML='<p>Add at least one dish with a cooking time.</p>';return;}
  ev.push([first-15,'Preheat the oven or put water on to boil']);ev.push([serve-5,'Warm plates, carve and dish up']);
  ev.sort(function(a,b){return a[0]-b[0];});
  $('tm-o').innerHTML='<strong>Begin at '+clock(first-15)+'</strong><ol class="pl-sched">'+ev.map(function(e){return '<li><b>'+clock(e[0])+'</b><span>'+e[1]+'</span></li>';}).join('')+'<li class="pl-end"><b>'+clock(serve)+'</b><span>Sit down and eat</span></li></ol><p>Allow extra time before the first step for peeling and chopping.</p>';});}
var pa=$('ps-a');if(pa){var pb=$('ps-b'),pq=$('ps-q'),pu=$('ps-u');
 on([pa,pb,pq,pu],function(){var a=Math.max(1,parseInt(pa.value,10)||1),b=Math.max(1,parseInt(pb.value,10)||1),q=Math.max(0,parseFloat(pq.value)||0),f=b/a,v=q*f;
  var out=pu.value==='pieces'?Math.ceil(v):v>=100?Math.round(v/5)*5:Math.round(v*10)/10;
  var tip=f>=1.8?'Use a wider pan or two trays so food browns instead of steaming, and add seasoning gradually, tasting as you go.':f>1.1?'The same pan should cope. Cooking time will rise only slightly.':f<0.7?'Use a smaller pan so sauces do not reduce too fast, and start checking earlier.':'Close enough to cook as written.';
  $('ps-o').innerHTML='<strong>'+out+' '+pu.value+'</strong><p>Multiply every ingredient by <b>'+(Math.round(f*100)/100)+'</b>.</p><p>'+tip+'</p>';});}
var wt=$('wp-t');if(wt){var wm=$('wp-m'),wk=$('wp-k');
 var M={chicken:{pan:'Chicken strips fried with garlic and lemon',tray:'Chicken thighs roasted with paprika',pot:'Chicken and tomato stew'},fish:{pan:'Pan-fried fish fillets with butter and capers',tray:'Fish fillets baked on sliced lemon',pot:'Fish poached in a light tomato broth'},beans:{pan:'Spiced chickpeas crisped in the pan',tray:'Butter beans roasted with tomatoes',pot:'Lentil and vegetable dal'},eggs:{pan:'A thick vegetable frittata',tray:'Eggs baked in nests of greens',pot:'Shakshuka, eggs poached in pepper sauce'},mince:{pan:'Mince fried with onions and cumin',tray:'Meatballs baked with tomato sauce',pot:'A quick chilli with kidney beans'},veg:{pan:'Mushrooms and halloumi fried until golden',tray:'Roasted cauliflower with tahini dressing',pot:'A chunky vegetable and barley soup'}};
 on([wt,wm,wk],function(){var t=parseInt(wt.value,10),m=wm.value,k=wk.value,main=M[m][k];
  var starch=t<=20?(k==='pot'?'crusty bread':'couscous, ready in five minutes'):t<=40?(k==='tray'?'potato wedges on the same tray':'rice or small pasta'):(k==='tray'?'roast potatoes':'buttery mash or brown rice');
  var veg=t<=20?'a quick salad of leaves, cucumber and lemon':k==='tray'?'peppers and courgettes roasted alongside':'steamed broccoli or green beans';
  var note=(m==='chicken'||m==='mince')&&t<=20?'Cut the pieces small so they cook through in the time, and check there is no pink inside.':t>=60?'With an hour, start the starch first and let the main take its time.':'Start whatever takes longest, then chop while it heats.';
  $('wp-o').innerHTML='<strong>'+main+'</strong><ul class="pl-sched"><li><b>Starch</b><span>'+starch+'</span></li><li><b>Vegetable</b><span>'+veg+'</span></li><li><b>To finish</b><span>fresh herbs, a squeeze of lemon and black pepper</span></li></ul><p>'+note+'</p>';});}
})();
