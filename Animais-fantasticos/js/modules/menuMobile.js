import clickOutside from "./clickOutside.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["touchstart", "click"];

  if (menuButton) {
    function openMenu() {
      menuList.classList.add("active");
      menuButton.classList.add("active");

      clickOutside(menuList, ["touchstart", "click"], () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener("click", openMenu);
    });
  }
}
