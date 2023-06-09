import MicroModal from 'micromodal';
(function () {
    MicroModal.init();
    const buttons = document.querySelectorAll('.servicesMore')
    const modalForm = document.getElementById('servicesPopAp')
    const close = document.querySelector(".closeForm")
    const servicePopApTitle = document.getElementById('servicePopApTitle')
    const listModal = document.getElementById('listModal')
    const modalFormfooterPrice = document.getElementById('modalFormfooterPrice')
    const servicesMoreLink = document.getElementById('servicesMoreLink')

    const services = {
        complex: {
            title: "Комплексный сервис",
            price: "10 000",
            array: [
                'Консультирование по налогообложению в рамках применяемого режима (ставки, возможность использования налоговых льгот);',
                'Обработку первичной документации, ее систематизацию;',
                'Отражение сведений об обязательствах, имуществе налогоплательщика в регистрах налогового, бухгалтерского учета (основные средства, товарно-материальные ценности, материально-производственные запасы);',
                'Отражение фактов финансово-хозяйственной деятельности (сделки, НДС);',
                'Расчет основного и других актуальных налогов (налог на прибыль, налог при УСН и ЕСХН, НДФЛ, земельный, транспортный налог);',
                'Расчет заработной платы, социальных выплат;',
                'Закрытие отчетного периода;',
                'Подготовку деклараций, отчетов для Пенсионного фонда, органов статистики и т.п.'
            ]
        },
        wages: {
            title: "Заработная плата и кадры",
            price: "8 000",
            array: [
                'Расчет сотрудника по структуре начислений заработной платы: оклад, доплаты, надбавки, премии, KPI, удержания.',
                'Автоматизация ведения учета начислений заработной платы с описанием назначения, периодичности, способа расчета, классификации для исчисления НДФЛ и страховых взносов.',
                'Формирование расчетных листков: расчет больничных, отпусков, командировок, доплат за совмещения должностей и т.д.',
                'Автоматизация формирования расчетных и платежных ведомостей, комплексная автоматизация расчета зарплаты.',
                'Автоматизация расчета НДФЛ и страховых взносов в программе для каждого сотрудника с учетом его налогового и страхового статусов.',
                'Формирование и ведение личных дел на каждого сотрудника;',
                'Составление приказов о приеме и увольнении, перемещении сотрудников;',
                'Оформление срочных и бессрочных трудовых договоров с новыми сотрудниками;',
                'Оформление трудовых отношений с иностранными гражданами;',
                'Ведение трудовых книжек сотрудников;',
                'Разработка и составление должностных инструкций, штатного расписания компании;',
                'Разработка и введение внутренних локальных нормативных актов: Правила внутреннего трудового распорядка, Положение о защите персональных данных, Положение об оплате труда и прочее.',
                'Разработка и составление графика предоставления отпусков;',
                'Отслеживание и оформление отпусков и листков нетрудоспособности сотрудников;',
                'Ведение форм Т2 на каждого сотрудника компании;',
                'Отслеживание изменений трудового законодательства РФ и постановка кадровой документации компании-клиента в соответствии с новыми положениями.',
                'Взаимодействие с инспекционными органами.'
            ]
        },
        reporting: {
            title: "Отчётность",
            price: "5 000",
            array: [
                'Отправка отчетности в ФНС, ПФР, ФСС, Росстат, Росалкогольрегулирование, Росприроднадзор и ФТС;',
                'Мониторинг доставки отчетности;',
                'Неформализованная переписка с ФНС, ПФР и Росстат;',
                'Сверки с налоговой (запросы ИОН);',
                'Сверки с ПФР (запросы ИОС);',
                'Отправка реестров больничных листов в ФСС;',
                'Получение требований и уведомлений;',
                'Отправка электронных документов в ответ на требования ФНС;',
                'Возможность формирования пакетов с отчетностью в формате для банков и прочих получателей;',
                'Отправка уведомлений о контролируемых сделках;',
                'Онлайн-проверка регламентированной отчетности перед отправкой в контролирующие органы;',
                'Отправка в контролирующие органы отчетов, подготовленных в других программах.',
            ]
        },
        dop: {
            title: "Дополнительные услуги",
            price: "2 000",
            array: [
               'Восстановление бухгалтерского учета;',
                'Постановка бухгалтерского учета с нуля;',
                'Регистрации и ликвидации ООО;',
                'Открытие расчетного расчета;',
                'Банкротство организаций;',
                'Подготовка документов для получения кредитов, банковских гарантий;',
                'Услуги программиста 1С по доработке;',
                'Оптимизация налогов;'
            ]
        }
    }

    buttons.forEach((val) => {
        val.addEventListener('click', (e) => {
            const more = e.target.dataset.more
            MicroModal.show('modal-1')
            const service = services[more]
            let item = ""
            servicePopApTitle.innerText = service.title
            service.array.forEach((val) => {
                item += "<li class='list__item list__item-popAp'>" + val + "</li>"
            })
            listModal.innerHTML = item
            modalFormfooterPrice.innerText = service.price
        })
    })

    servicesMoreLink.addEventListener('click', () => {
        MicroModal.close('modal-1')
    })

    document.querySelectorAll('.modal__close').forEach(((val) => {
        val.addEventListener('click', () => {
            MicroModal.close('modal-1')
        })
    }))

})()
