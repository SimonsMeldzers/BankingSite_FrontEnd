window.addEventListener('scroll', function(){
    let navbar = this.document.querySelector('nav');

    navbar.classList.toggle('scrolling-active', window.scrollY > 0);
})