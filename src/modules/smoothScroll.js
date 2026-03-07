const smooth = () => {
  const menuLinks = document.querySelectorAll("menu a");
  const btnTo = document.querySelector("main a > img");

  menuLinks.forEach((link) => {
    if (link.classList.contains("close-btn")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  if (btnTo) {
    btnTo.addEventListener("click", (e) => {
      e.preventDefault();
      const nextSlide = document.querySelector("#service-block");
      if (nextSlide) {
        nextSlide.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
};
export default smooth;
