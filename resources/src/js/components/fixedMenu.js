(() => {
    const navbar = document.getElementById("navbar");
    const navMenu = document.querySelector(".header__nav");
    const navScroll = document.querySelectorAll(".nav__link")
    const scrollNavList = document.querySelector(".nav-list");

    const mQuery = window.matchMedia('(min-width: 769px)')

    // if (mQuery.matches) {
        if (window.scrollY >= 100) {
            scrollMenu();

        }


        window.addEventListener("scroll", e => {
            scrollMenu();
        })
    // }

    function scrollMenu () {
        if(scrollY > 100) {
            navbar.classList.add("navbar_scrolled");
            navMenu.classList.add("scroll-nav");
            scrollNavList.classList.add("scroll-nav");
            navScroll.forEach((element) => {
                if (element) {
                    element.classList.add("navScroll");
                }
            });

        } else {
            navbar.classList.remove("navbar_scrolled");
            navMenu.classList.remove("scroll-nav");
            scrollNavList.classList.remove("scroll-nav");
            navScroll.forEach((element) => {
                element.classList.remove("navScroll");
            })
        }
    }
})()
