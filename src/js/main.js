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
