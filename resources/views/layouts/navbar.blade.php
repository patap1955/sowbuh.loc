<div class="my-nav" id="navbar">
    <div class="containers header">
        <div class="header__logo">
            <a href="{{ route('index') }}"><img class="header__logo-img" src="{{ asset('assets/img/logo-header.svg') }}"></a>
            <a href="{{ route('index') }}"><img class="header__logo-img-mini" src="{{ asset('assets/img/logo-mini.svg') }}"></a>
        </div>
        <div class="header__info">
            <nav class="header__nav" role="navigation">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#about" class="nav-link">О нас</a>
                    </li>
                    <li class="nav-item">
                        <a href="#services" class="nav-link">Услуги</a>
                    </li>
                    <li class="nav-item">
                        <a href="#footer" class="nav-link">Контакты</a>
                    </li>
                    <li class="nav-item">
                        <a href="#partners" class="nav-link">Партнеры</a>
                    </li>
                </ul>
                <div class="header__phone">
                    <a id="btnMobile" class="btn btn-base btn-header btnMobile" href="tel:+7 (925) 383-88-00">+7 (925) 383-88-00</a>
                </div>
            </nav>
        </div>
        <div class="burger">
                        <span>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="burger-span burger-span-top" d="M0 2C0 0.895431 0.895431 0 2 0H38C39.1046 0 40 0.895431 40 2C40 3.10457 39.1046 4 38 4H2C0.895431 4 0 3.10457 0 2Z" fill="url(#paint0_linear_198_2162)"/>
                                <path class="burger-span burger-span-center" d="M0 14C0 12.8954 0.895431 12 2 12H38C39.1046 12 40 12.8954 40 14C40 15.1046 39.1046 16 38 16H2C0.895431 16 0 15.1046 0 14Z" fill="url(#paint1_linear_198_2162)"/>
                                <path class="burger-span burger-span-bottom" d="M0 26C0 24.8954 0.895431 24 2 24H38C39.1046 24 40 24.8954 40 26C40 27.1046 39.1046 28 38 28H2C0.895431 28 0 27.1046 0 26Z" fill="url(#paint2_linear_198_2162)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_198_2162" x1="0" y1="0" x2="41.3341" y2="2.13166" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2E58FF"/>
                                        <stop offset="1" stop-color="#582EFF"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_198_2162" x1="0" y1="0" x2="41.3341" y2="2.13166" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2E58FF"/>
                                        <stop offset="1" stop-color="#582EFF"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_198_2162" x1="0" y1="0" x2="41.3341" y2="2.13166" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2E58FF"/>
                                        <stop offset="1" stop-color="#582EFF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
        </div>
    </div>
</div>
