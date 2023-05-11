<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('layouts.head')
<body>
    @include('layouts.header')

    @yield('content')

    @include('layouts.footer')

{{--    <div id="servicesPopAp" class="modalForm">--}}
{{--        <div class="modal-content-form modal-services">--}}
{{--            <span class="closeForm">--}}
{{--                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">--}}
{{--                    <path d="M9.12485 12.0106L0 2.87786L2.85522 0.0201559L11.9801 9.15293L21.125 0L24 2.87745L14.855 12.0304L23.959 21.1423L21.1038 24L11.9998 14.8881L2.89619 23.9996L0.0212416 21.1221L9.12485 12.0106Z" fill="#C4CDDE"/>--}}
{{--                </svg>--}}
{{--            </span>--}}
{{--            <h2 class="section__title modalForm__title" id="servicePopApTitle"></h2>--}}
{{--            <ul class="list listModal" id="listModal"></ul>--}}
{{--            <div class="modalForm__footer">--}}
{{--                <span class="modalForm__footer-price">от <span id="modalFormfooterPrice"></span> ₽</span>--}}
{{--                <div class="modalForm__footer-button">--}}
{{--                    <a class="button-primary button-footer" id="servicesMoreLink" href="#footer">Оставить заявку</a>--}}
{{--                </div>--}}
{{--            </div>--}}

{{--        </div>--}}
{{--    </div>--}}

    <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
        <div class="modal__overlay" tabindex="-1" data-micromodal-close>
            <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                <button class="modal__close" aria-label="Close modal" data-micromodal-close>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.12485 12.0106L0 2.87786L2.85522 0.0201559L11.9801 9.15293L21.125 0L24 2.87745L14.855 12.0304L23.959 21.1423L21.1038 24L11.9998 14.8881L2.89619 23.9996L0.0212416 21.1221L9.12485 12.0106Z" fill="#C4CDDE"/>
                    </svg>
                </button>
                <header class="modal__header">
                    <h2 class="modal__title" id="servicePopApTitle"> </h2>
                </header>
                <main class="modal__content" id="modal-1-content">
                    <ul class="list listModal" id="listModal"></ul>
                    <div class="modalForm__footer">
                        <span class="modalForm__footer-price">от <span id="modalFormfooterPrice"></span> ₽</span>
                        <div class="modalForm__footer-button">
                            <a class="button-primary button-footer" id="servicesMoreLink" href="#footer">Оставить заявку</a>
                        </div>
                    </div>
                </main>
{{--                <footer class="modal__footer">--}}
{{--                    <button class="modal__btn modal__btn-primary">Continue</button>--}}
{{--                    <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>--}}
{{--                </footer>--}}
            </div>
        </div>
    </div>

    <!--  Модельное окно с вопросом от спама -->

    <div class="modal micromodal-slide" id="modal-2" aria-hidden="true">
        <div class="modal__overlay" tabindex="-1" data-micromodal-close>
            <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                <button class="modal__close" aria-label="Close modal" data-micromodal-close>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.12485 12.0106L0 2.87786L2.85522 0.0201559L11.9801 9.15293L21.125 0L24 2.87745L14.855 12.0304L23.959 21.1423L21.1038 24L11.9998 14.8881L2.89619 23.9996L0.0212416 21.1221L9.12485 12.0106Z" fill="#C4CDDE"/>
                    </svg>
                </button>
                <header class="modal__header">
                    <h2 class="modal__title">Подтвердите что вы не робот</h2>
                </header>
                <main class="modal__content" id="modal-1-content">
                    <p class="text-question-answer" id="modelQuestions"></p>
                    <div class="modal-form-block">
                        <div class="form-group">
                            <input class="form-control contacts-form__input inputModal" type="text" id="inputModal" required>
                            <p class="text-danger" id="formInputPhoneError"></p>
                        </div>
                        <div class="form-group">
                            <button id="questionButton" class="button-primary button-footer buuton-questions">Ответить</button>
                        </div>
                        <p class="errorAnswerQuestion"></p>
                    </div>
                </main>
                <footer class="modal__footer">

                </footer>
            </div>
        </div>
    </div>


{{--    <div id="myQuestions" class="modalForm">--}}
{{--        <div class="modal-content-form questions-model">--}}
{{--            <span class="closeForm">--}}
{{--                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">--}}
{{--                    <path d="M9.12485 12.0106L0 2.87786L2.85522 0.0201559L11.9801 9.15293L21.125 0L24 2.87745L14.855 12.0304L23.959 21.1423L21.1038 24L11.9998 14.8881L2.89619 23.9996L0.0212416 21.1221L9.12485 12.0106Z" fill="#C4CDDE"/>--}}
{{--                </svg>--}}
{{--            </span>--}}
{{--            <p class="text-question">Подтвердите что вы не робот. Ответьте на вопрос</p>--}}
{{--            <p class="text-question-answer" id="modelQuestions"></p>--}}
{{--            <div class="modal-form-block">--}}
{{--                <div class="form-group">--}}
{{--                    <input class="form-control contacts-form__input inputModal" type="text" id="inputModal" required>--}}
{{--                    <p class="text-danger" id="formInputPhoneError"></p>--}}
{{--                </div>--}}
{{--                <div class="form-group">--}}
{{--                    <button id="questionButton" class="button-primary button-footer buuton-questions">Ответить</button>--}}
{{--                </div>--}}
{{--                <p class="errorAnswerQuestion"></p>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}


    <script src="{{ mix('/assets/js/main.js') }}"></script>
    @yield('script')
</body>
</html>

