const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const menuClose = menu.querySelector(".close-btn");
  const menuItem = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener("click", handleMenu);

  menuClose.addEventListener("click", handleMenu);

  menuItem.forEach((item) => item.addEventListener("click", handleMenu));
};

export default menu;
