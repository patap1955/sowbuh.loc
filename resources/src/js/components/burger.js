(function() {
    const burger = document.querySelector(".burger");
    const mobileNav = document.querySelector('.my-nav')
    const logo = document.querySelector('.header__logo')
    const headerPhone = document.querySelector('.header__phone')
    const header = document.querySelector('.header')
    const navList = document.querySelector('.nav-list')
    const headerNav = document.querySelector('.header__nav')
    const headerInfo = document.querySelector('.header__info')
    const navLink = document.querySelectorAll('.nav-link')
    const burgerSpan = document.querySelectorAll(".burger-span")
    const btnMobile = document.querySelector('.btnMobile')

    burger.addEventListener('click', (e) => {
        header.classList.toggle("active");
        mobileNav.classList.toggle('active')
        logo.classList.toggle('active')
        headerPhone.classList.toggle('active')
        navList.classList.toggle('active')
        headerNav.classList.toggle('active')
        headerInfo.classList.toggle('active')
        btnMobile.classList.toggle('active')
        navLink.forEach((val) => {
            val.classList.toggle('active')
        })

        document.querySelector(".burger").classList.toggle("active");
        document.querySelector("body").classList.toggle("lock");

        burgerSpan.forEach((val) => {
            val.classList.toggle("active");
        });
    })

    navLink.forEach((val) => {
      val.addEventListener("click", (e) => {
          header.classList.remove("active");
          mobileNav.classList.remove('active')
          logo.classList.remove('active')
          headerPhone.classList.remove('active')
          navList.classList.remove('active')
          headerNav.classList.remove('active')
          headerInfo.classList.remove('active')
          btnMobile.classList.remove('active')
          navLink.forEach((val) => {
              val.classList.remove('active')
          })

          document.querySelector(".burger").classList.remove("active");
          document.querySelector("body").classList.remove("lock");

          burgerSpan.forEach((val) => {
              val.classList.remove("active");
          });

      })
  })
})();
