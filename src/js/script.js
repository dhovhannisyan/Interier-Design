const sidebar = document.querySelector('.page__sidebar');
const sidebarClose = document.querySelector('.close-menu-btn');
const sidebarOpen = document.querySelector('.nav-toggle-btn');
const overlay = document.querySelector('.overlay');

sidebarOpen.addEventListener('click', e => {
    sidebar.style.display = 'block';
    overlay.style.display = 'block';
});

sidebarClose.addEventListener('click', e => {
    console.log('close')
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', e => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});