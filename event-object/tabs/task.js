let tab = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');
let activeCategory = 0;

tab.forEach((el, idx) => {
    el.addEventListener('click', () => {
        tab.forEach(elem => {
            elem.classList.remove('tab_active')
        })
        tabContent.forEach(element => {
            element.classList.remove('tab__content_active')
        })
        activeCategory = idx;
        tab[activeCategory].classList.add('tab_active');
        tabContent[activeCategory].classList.add('tab__content_active');
    })
})