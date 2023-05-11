document.addEventListener("DOMContentLoaded", () => {
    // Логическая функция вывода анимация
    // elem - массив блоков или отдельный блок для анимации
    // className - класс отвечающий за анимацию

    function animate(elem, className = "animate") {
        let windowCenter = (window.innerHeight / 1) + window.scrollY; // ширина экрана * 1.1 + высота на сколько просролили экран
        elem.forEach(el => {

            let observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        return entry.target.classList.add(className);
                    }
                });
            });

            let scrollOffset = el.offsetParent.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                observer.observe(el);
            }
        });
    }

    // animate__backInDown
    const firstScreenTitle = document.querySelectorAll('.first-screen__title')
    const firstscreenList = document.querySelectorAll('.first-screen__list')
    const firstScreenButton = document.querySelectorAll('.first-screen__button')
    const sectionTitle = document.querySelectorAll('.section__title')
    const iconTitle = document.querySelectorAll('.icon-title')
    const aboutInfoText = document.querySelectorAll('.about__info-text')
    const aboutItemAnimateLeft = document.querySelectorAll('.aboutItemAnimateLeft')
    const aboutItemAnimateRight = document.querySelectorAll('.aboutItemAnimateRight')
    const aboutItemAnimateCenter = document.querySelectorAll('.aboutItemAnimateCenter')
    const servicesItemInimetLeft = document.querySelectorAll('.servicesItemInimetLeft')
    const servicesItemInimetRight = document.querySelectorAll('.servicesItemInimetRight')
    const partnersItemAnimateLeft = document.querySelectorAll('.partnersItemAnimateLeft')
    const partnersItemAnimateRight = document.querySelectorAll('.partnersItemAnimateRight')
    const contactsInfo = document.querySelectorAll('.contacts__info')
    const contactsForm = document.querySelectorAll('.contacts__form')

    if (firstScreenTitle) animate(firstScreenTitle, 'animate__zoomIn')
    if (firstscreenList) animate(firstscreenList, 'animate__zoomIn')
    if (firstScreenButton) animate(firstScreenButton, 'animate__zoomIn')
    if (sectionTitle) animate(sectionTitle, 'animate__backInUp')
    if (iconTitle) animate(iconTitle, 'animate__rotateIn')
    if (aboutInfoText) animate(aboutInfoText, 'animate__zoomIn')
    if (aboutItemAnimateLeft) animate(aboutItemAnimateLeft, 'animate__backInLeft')
    if (aboutItemAnimateRight) animate(aboutItemAnimateRight, 'animate__backInRight')
    if (aboutItemAnimateCenter) animate(aboutItemAnimateCenter, 'animate__zoomIn')
    if (servicesItemInimetLeft) animate(servicesItemInimetLeft, 'animate__backInLeft')
    if (servicesItemInimetRight) animate(servicesItemInimetRight, 'animate__backInRight')
    if (partnersItemAnimateLeft) animate(partnersItemAnimateLeft, 'animate__backInLeft')
    if (partnersItemAnimateRight) animate(partnersItemAnimateRight, 'animate__backInRight')
    if (contactsInfo) animate(contactsInfo, 'animate__backInLeft')
    if (contactsForm) animate(contactsForm, 'animate__backInRight')


    window.addEventListener("scroll", () => {
        if (firstScreenTitle) animate(firstScreenTitle, 'animate__zoomIn')
        if (firstscreenList) animate(firstscreenList, 'animate__zoomIn')
        if (firstScreenButton) animate(firstScreenButton, 'animate__zoomIn')
        if (sectionTitle) animate(sectionTitle, 'animate__backInUp')
        if (iconTitle) animate(iconTitle, 'animate__rotateIn')
        if (aboutInfoText) animate(aboutInfoText, 'animate__zoomIn')
        if (aboutItemAnimateLeft) animate(aboutItemAnimateLeft, 'animate__backInLeft')
        if (aboutItemAnimateRight) animate(aboutItemAnimateRight, 'animate__backInRight')
        if (aboutItemAnimateCenter) animate(aboutItemAnimateCenter, 'animate__zoomIn')
        if (servicesItemInimetLeft) animate(servicesItemInimetLeft, 'animate__backInLeft')
        if (servicesItemInimetRight) animate(servicesItemInimetRight, 'animate__backInRight')
        if (partnersItemAnimateLeft) animate(partnersItemAnimateLeft, 'animate__backInLeft')
        if (partnersItemAnimateRight) animate(partnersItemAnimateRight, 'animate__backInRight')
        if (contactsInfo) animate(contactsInfo, 'animate__backInLeft')
        if (contactsForm) animate(contactsForm, 'animate__backInRight')

    });
});
