const nav = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu-btn')
const burger = document.querySelector('.burger')
// const navItems = document.querySelectorAll('.menu-nav__item')

let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        nav.classList.add('open')
        burger.classList.add('open')
        showMenu = !showMenu
    } else {
        nav.classList.remove('open')
        burger.classList.remove('open')
        showMenu = !showMenu
    }
}


  const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
});