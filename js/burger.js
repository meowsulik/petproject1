const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.header__nav')
const backdrop = document.querySelector('.backdrop')


burger.addEventListener('click', () => {
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-header__nav')
    backdrop.classList.toggle('show-backdrop')
})