import clickOutside from "./clickOutside.js";

export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((whichEvent) => {
      menu.addEventListener(whichEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    clickOutside(this, ["touchstart", "click"], ()=>{      
      this.classList.remove("active");
    });
  }
}
