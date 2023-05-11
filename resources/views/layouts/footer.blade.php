<footer id="footer">
    <div class="containers footer">
        <h2 class="section__title footer__title animate__animated">
            Контакты
            <img class="icon-title animate__animated animate__delay-06s" src="{{ asset('/assets/img/icons/Star-green.svg') }}">
        </h2>
        <div class="contacts">
            <div class="contacts__info animate__animated">
                <a class="contacts__info-phone" href="tel:+7 925 383-88-00">+7 925 383-88-00</a>
                <a class="contacts__info-phone-dop" href="tel:+7 499 704-35-82">+7 499 704-35-82</a>
                <a class="contacts__info-email" href="mailto:sowbuh@mail.ru">sowbuh@mail.ru</a>
            </div>
            <div class="contacts__form animate__animated">
                <p class="contacts__form-text">Остались вопросы? Оставьте заявку, мы перезвоним</p>
                <form class="contacts__form-container">
                    <input type="text" name="name" class="contacts__form-input" id="contactInputName" placeholder="Имя">
                    <input type="text" name="email" class="contacts__form-input" id="contactInputPhone" placeholder="Телефон">
                    <div class="contacts__form-button">
                        <a class="button-primary button-header" id="contactInputButton"><span></span>Оставить заявку</a>
                    </div>
                </form>
                <div id="errorInputForm"></div>
            </div>
        </div>
        <div class="footer__logo">
            <a href="{{ route('index') }}"><img src="{{ asset('/assets/img/logo-footer.svg') }}"></a>
        </div>
        <div class="footer__info">
            <p class="footer__info-copy">© Все права защищены, <?=date ( 'Y' )?></p>
            <a class="footer__info-politics" href="{{ route('politics') }}">Политика конфиденциальности</a>
            <p class="footer__info-developer">
                Сайт разработан <a href="https://alex-media.ru/" target="_blank">Alex-Media</a>
            </p>
        </div>
    </div>
</footer>
