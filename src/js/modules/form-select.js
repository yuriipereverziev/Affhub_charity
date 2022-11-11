export default function () {
  const selectItem = document.querySelector('.select-js');
  const selectTitle = selectItem.querySelector('.select__title-js');
  const selectLabels = selectItem.querySelectorAll('.select__label-js');

  const popupSelect = document.querySelector('.popup-select');
  const popupSelectTitle = popupSelect.querySelector('.popup-select__title');
  const popupSelectLabels = popupSelect.querySelectorAll('.popup-select__label');
  const popupinnerField = document.querySelector(".popup__input-inner");

  const verticalItem = document.querySelector('.vertical-js');
  const verticalLabels = verticalItem.querySelectorAll('.vertical__label-js');
  const verticalTitle = verticalItem.querySelector('.vertical__title-js');

  const popupVertical = document.querySelector('.popup-vertical-js');
  const popupVerticalTitle = popupVertical.querySelector('.popup-vertical__title-js');
  const popupVerticalLabels = popupVertical.querySelectorAll('.popup-vertical__label-js');

  const popupinnerFieldVertical = document.querySelector(".popup__input-vertical");

  const innerField = document.querySelector(".form__input-inner");
  const verticalField = document.querySelector(".vertical__input-inner");


// Toggle menu
  function getSelect(title, select) {
    title.addEventListener('click', () => {
      if ('active' === select.getAttribute('data-state')) {
        select.setAttribute('data-state', '');
      } else {
        select.setAttribute('data-state', 'active');
      }
    });
  }

  getSelect(popupSelectTitle, popupSelect)
  getSelect(popupVerticalTitle, popupVertical)

  getSelect(selectTitle, selectItem)
  getSelect(verticalTitle, verticalItem)

  const popupId = "singleSelect9";
  const formId = "singleSelect4";
  const verticalId = "verticalSelect3";
  const verticalPopuplId = "verticalSelect7";

  const atrr = $('.position-js');
  const verticalAtrr = $('.vertical-position-js');
  const popupAtrr = $('.popup-position-js');
  const popupVerticalAtrr = $('.popup-vertical-position-js');


  function getLabels(select, title, labels, inner, id, atrr, name) {
    for (let i = 0; i < labels.length; i++) {
      labels[i].addEventListener('click', (evt) => {
        title.textContent = evt.target.textContent;

        select.setAttribute('data-state', '');

        let selectInput = document.querySelector("#" + evt.target.getAttribute("for"))

        if (selectInput.id === id) {
          inner.classList.remove("hidden");
          atrr.attr( 'name', name)
        } else {
          inner.classList.add("hidden")
          atrr.removeAttr('name')
        }
      });
    }
  }

  getLabels(verticalItem, verticalTitle, verticalLabels, verticalField, verticalId, verticalAtrr, 'vertical')

  getLabels(selectItem, selectTitle, selectLabels, innerField, formId, atrr, 'position')

  getLabels(popupSelect, popupSelectTitle, popupSelectLabels, popupinnerField, popupId, popupAtrr, 'position')

  getLabels(popupVertical, popupVerticalTitle, popupVerticalLabels, popupinnerFieldVertical, verticalPopuplId, popupVerticalAtrr, 'vertical')

}
