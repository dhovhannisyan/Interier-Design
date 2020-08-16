const sidebar = document.querySelector('.page__sidebar');
const sidebarClose = document.querySelector('.close-menu-btn');
const sidebarOpen = document.querySelector('.nav-toggle-btn');
const overlay = document.querySelector('.overlay');

const openSidebar = () => {
    sidebar.style.display = 'block';
    overlay.style.display = 'block';
}

const closeSidebar = () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
}

sidebarOpen.addEventListener('click', e => {
    openSidebar();
});

sidebarClose.addEventListener('click', e => {
   closeSidebar();
});

overlay.addEventListener('click', e => {
    closeSidebar();
});

sidebar.addEventListener('click', e => {
    if(e.target.className.includes('nav-link')) {
        closeSidebar();
    }
});

