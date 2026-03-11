import "./src/css/bootstrap.min.css";
import "./src/css/style.min.css";
import timer from "./src/modules/timer";
import menu from "./src/modules/menu";
import modalWindow from "./src/modules/modalWindow"
import smooth from "./src/modules/smoothScroll";
import calc from "./src/modules/calculator";
import formValidation from "./src/modules/formValidation";
import tabs from "./src/modules/tabs";
import slider from "./src/modules/slider";
import carousel from "./src/modules/carousel";
import sendForm from "./src/modules/sendForm";

timer("23 march 2026");
menu();
modalWindow();
smooth();
calc(100);
formValidation();
tabs();
slider({
  container: ".portfolio-content",
  slide: ".portfolio-item",
  activeSlide: "portfolio-item-active",
  activeDot: "dot-active",
});
carousel();
["form1", "form2", "form3"].forEach(id => {
  sendForm({
    formId: id,
    someElem: [
      {
        type: "block",
        id: "total"
      }
    ]
  });
});