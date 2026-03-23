// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// menutup side bar if click outside side bar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})

// fitur search
document.getElementById("input").addEventListener("click", ()=>{
    let data = prompt("Cari Judul:");
});