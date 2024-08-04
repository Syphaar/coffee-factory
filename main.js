function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
};

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};

// jQuery(
function links() {
    let linksss = document.getElementsByClassName('sidebar');
    linksss.classList.toggle('menu-button');
};

// ACTIVE LINKS
const navLinkEls = document.querySelectorAll('.nav_link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }
});


// 
// 
// 
let form = document.getElementById('form-sec');
let inputFields = document.getElementsByClassName('input-field');