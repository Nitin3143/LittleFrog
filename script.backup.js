// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href.startsWith('#') || href === '#') return;
    e.preventDefault();
    const t = document.querySelector(href);
    if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Buy buttons placeholder
const buyBtn = document.getElementById('buy-btn');
const buyHero = document.getElementById('buy-hero');

if(buyBtn){
  buyBtn.addEventListener('click', e => {
    e.preventDefault();
    alert('Buy on Raydium - Coming Soon. Replace button href with your Raydium link when ready.');
  });
}
if(buyHero){
  buyHero.addEventListener('click', e => {
    e.preventDefault();
    alert('Buy on Raydium - Coming Soon. Replace button href with your Raydium link when ready.');
  });
}
