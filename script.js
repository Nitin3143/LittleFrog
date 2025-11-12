// Responsive menu toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if(mobileBtn && navLinks){
  mobileBtn.addEventListener('click', () => {
    const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
    mobileBtn.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('hidden-mobile');
  });
}

// Smooth anchor scrolling for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href || href === '#') return;
    const target = document.querySelector(href);
    if(target){
      e.preventDefault();
      // close mobile menu after click
      if(navLinks && window.innerWidth < 760) {
        navLinks.classList.add('hidden-mobile');
        if(mobileBtn) mobileBtn.setAttribute('aria-expanded','false');
      }
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Buy placeholders
const buyBtns = document.querySelectorAll('#buy-btn, #buy-hero, .buy-btn');
buyBtns.forEach(b => {
  if(!b) return;
  b.addEventListener('click', e => {
    e.preventDefault();
    alert('Buy on Raydium - Coming Soon. Replace this link with your Raydium pool URL when ready.');
  });
});
