const menu = () => {
  const menu = document.querySelector("menu");

  const handleMenu = (e) => {
    const item = e.target;

    if (item.closest(".menu")) {
      menu.classList.toggle("active-menu");
      return;
    }
    if (item.closest(".close-btn") || item.closest("ul>li>a")) {
      menu.classList.remove("active-menu");
      return;
    }
    if (!item.closest("menu") && !item.closest(".menu")) {
      menu.classList.remove("active-menu");
    }
  };
  document.addEventListener("click", handleMenu);
};

export default menu;
