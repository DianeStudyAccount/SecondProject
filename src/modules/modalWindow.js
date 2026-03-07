import { animate } from "./helpers";

const modalWindow = () => {
  const modalBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");

  const appear = () => {
    const mobileWidth = window.innerWidth < 768;

    if (mobileWidth) {
      modal.style.display = "block";
      modal.style.opacity = 1;
      return;
    }

    modal.style.display = "block";

    animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.opacity = progress;
      },
    });
  };

  const hide = () => {
    const mobileWidth = window.innerWidth < 768;

    if (mobileWidth) {
      modal.style.display = "none";
      modal.style.opacity = 0;
      return;
    }

    animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.opacity = 1 - progress;

        if (progress === 1) {
          modal.style.display = "none";
        }
      },
    });
  };

  modalBtn.forEach((btn) => {
    btn.addEventListener("click", appear);
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      hide();
    }
  });
};
export default modalWindow;
