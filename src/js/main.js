import jquery from './helpers/smooth-scroll.js';
import form from "./modules/form";
import timer from "./modules/timer";
import popup from "./modules/popup";
import lots from "./modules/lots";
import formSelect from "./modules/form-select";

function main() {
  jquery()
  timer.init()
  popup()
  lots()
  form()
  formSelect()

}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
}

$('.form-js').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url: '../php/send.php',
    type: 'POST',
    contentType: false,
    processData: false,
    data: new FormData(this),
    success: function(msg) {
      console.log(msg);
      $('#form').trigger('reset');
    }
  });
});
