const modalWindow = () => {
  const modalBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalClose = modal.querySelector(".popup-close");

  let animateId;

  const appear = () => {
    const mobileWidth = window.innerWidth < 768;
    if (mobileWidth) {
      modal.style.display = "block";
      modal.style.opacity = 1;
      return;
    }
    modal.style.display = "block";
    let opacity = 0;

    function animate() {
      opacity += 0.03;
      modal.style.opacity = opacity;

      if (opacity < 1) {
        animateId = requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  };

  const hide = () => {
    const mobileWidth = window.innerWidth < 768;
    if (mobileWidth) {
      modal.style.display = "none";
      modal.style.opacity = 0;
      return;
    }
    let opacity = 1;

    function animate() {
      opacity -= 0.03;
      modal.style.opacity = opacity;

      if (opacity > 0) {
        animateId = requestAnimationFrame(animate);
      } else {
        modal.style.display = "none";
      }
    }

    requestAnimationFrame(animate);
  };

  modalBtn.forEach((btn) => {
    btn.addEventListener("click", appear);
  });
  modalClose.addEventListener("click", hide);
};
export default modalWindow;
