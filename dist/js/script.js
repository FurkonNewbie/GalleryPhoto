//navbar blurred

window.onscroll = function(){
    const navbar = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if(window.pageYOffset > fixedNav) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
}