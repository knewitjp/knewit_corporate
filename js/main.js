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
