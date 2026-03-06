const modalWindow = () => {
  const modalBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");

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
      opacity += 0.06;
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
      opacity -= 0.06;
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
