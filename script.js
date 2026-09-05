document.getElementById('year').textContent = new Date().getFullYear();

const pageOrder = ['home','about','services','gallery','contact'];
const railColors = {
  home:'#C98A45', about:'#C98A45', services:'#C98A45', gallery:'#8a7350', contact:'#4FA7B0'
};

function showPage(id){
  if(!pageOrder.includes(id)) id = 'home';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');

  document.querySelectorAll('nav.links button, .mobile-links button').forEach(b=>{
    b.classList.toggle('active', b.dataset.page === id);
  });

  const idx = pageOrder.indexOf(id);
  const pct = Math.round(((idx+1) / pageOrder.length) * 100);
  const fill = document.getElementById('railFill');
  fill.style.width = pct + '%';
  fill.style.backgroundColor = railColors[id];

  closeMobileNav();
  window.scrollTo({top:0, behavior:'auto'});
  history.replaceState(null, '', '#' + id);
}

function toggleMobileNav(){
  document.getElementById('mobileLinks').classList.toggle('open');
}
function closeMobileNav(){
  document.getElementById('mobileLinks').classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#','');
  showPage(pageOrder.includes(hash) ? hash : 'home');
});

// Paste the Google Apps Script Web app URL here after deploying google-apps-script.js
const SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzNc4DpF9bEAduaFdYiEbZr74OBPF5JtQCYnNOlDZJKbjYjHKkKAi52dzyJWQtMjan1/exec';

document.getElementById('enquiryForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const location = document.getElementById('f-location').value.trim();
  const service = document.getElementById('f-service').value.trim();
  const message = document.getElementById('f-message').value.trim();

  if (SHEET_WEBAPP_URL) {
    fetch(SHEET_WEBAPP_URL, {
      method: 'POST',
      body: new URLSearchParams({ name, phone, location, service, message })
    }).catch(() => {});
  }

  let text = `Hello Sri Kalaiselvi Borewells, I'd like to enquire about a borewell.%0A`;
  text += `Name: ${name}%0APhone: ${phone}`;
  if(location) text += `%0ALocation: ${location}`;
  if(service) text += `%0AService: ${service}`;
  if(message) text += `%0AMessage: ${message}`;

  window.open(`https://wa.me/919944345286?text=${text}`, '_blank');
});
