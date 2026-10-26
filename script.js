const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('#navLinks a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('serviceSelect').value = link.dataset.service;
}));
document.querySelectorAll('[data-plan]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('budgetSelect').value = link.dataset.plan;
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('projectForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('clientName').value.trim();
  const service = document.getElementById('serviceSelect').value;
  const plan = document.getElementById('budgetSelect').value;
  const details = document.getElementById('projectDetails').value.trim();
  const message = `Hello EDITZ X Studio!%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0APackage: ${encodeURIComponent(plan)}%0AProject details: ${encodeURIComponent(details || 'I would like to discuss my project.')}`;
  // Update this to your verified full WhatsApp number in international format, digits only.
  const whatsappNumber = '91909866899';
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
});
