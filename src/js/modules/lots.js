export default function () {

    let lot1 = document.querySelector('.lot-1')
    let lot2 = document.querySelector('.lot-2')
    let lot3 = document.querySelector('.lot-3')
    let lot4 = document.querySelector('.lot-4')
    let lot5 = document.querySelector('.lot-5')
    let lot6 = document.querySelector('.lot-6')
    let lot7 = document.querySelector('.lot-7')
    let lot8 = document.querySelector('.lot-8')
    let lot9 = document.querySelector('.lot-9')

    // дата текущая в милисекундах на прод
    const msInDay = 86400000;
    const nowData = Date.now() * msInDay;

    const path = window.cdn_path || '';

    function showLot(startDate, pathImg, lot, nameLogo, text) {
        // условие

        if (nowData >= startDate) {
            lot.querySelector('.lots__secret').style = "display: none"
            let htmlCode = `
                 <div class="flip-card-container">
                     <div class="flip">
                          <div class="flip__front">
                              <img src="${path}${pathImg}" alt="lot"/>
                          </div>
                          <div class="flip__back">
                            <h3 class="text-bold">${nameLogo}</h3>
                            <p>
                                ${text}
                            </p>
                          </div>
                    </div>
                </div>
            `
            lot.insertAdjacentHTML("beforeend", htmlCode)
        }
    }

    showLot(new Date('2022-11-16').getTime() * msInDay, "img/lot_01.png", lot1, 'Axela', 'Олійна картина художниці Ганни Богачук. Робота «Триматися» з колекції «Червоне», яка символізує любов та жагу до свободи.')
    showLot(new Date('2022-11-21').getTime() * msInDay, "img/lot_02.png", lot2, 'COSMOLOT', 'Уламок рашистського СУ-34, який було збито біля Бузової під Києвом. Та пояс до снаряду гаубиці 777, що полетів вбивати орків.')
    showLot(new Date('2022-11-23').getTime() * msInDay, "img/lot_03.png", lot3, 'The Aff ', 'Орківські гранатомет та шлем, які ще нещодавно були на фронті в Ізюмі.')
    showLot(new Date('2022-11-25').getTime() * msInDay, "img/lot_04.png", lot4, 'PDL-profit', 'Це справжні воєнні скарби! Дві каски, одна з яких належала вбитому ВДВшному орку зі сумнозвісною літерою Z, два тубуси від РПГ та гільза від снаряду для протитанкової гармати МТ-12 «Рапіра». Усі лоти приїхали просто з поля бою.')
    showLot(new Date('2022-11-27').getTime() * msInDay, "img/lot_05.png", lot5, 'CM affiliates', 'Картина Урбаністичний Тарас Шевченко на контрасті нічного міста, як відображення незламності сили духу українців у наші часи!')
    showLot(new Date('2022-11-29').getTime() * msInDay, "img/lot_06.png", lot6, 'Traffiq Squad', 'Вечеря з  консультацією по веденню бізнесу з Віталієм (СЕО ТS) + 5к інсталів на оренду пріл під Gambling від <a href="https://tsquadapps.com/">TSquad Apps</a>')
    showLot(new Date('2022-12-2').getTime() * msInDay, "img/lot_07.png", lot7, 'Neogara', 'Набір справжнього кияна:  портативна газова плита-обігрівач,  павербанк Xiaomi Mi PowerBank 20000mAh 50W та портативна колонка')
    showLot(new Date('2022-12-4').getTime() * msInDay, "img/lot_08.png", lot8, 'TrafficDevils', '')
    showLot(new Date('2022-12-6').getTime() * msInDay, "img/lot_09.png", lot9, 'TraffBraza', '')


    $(".flip-card-container").click(function () {
        $(this).toggleClass("active")
    });
}
