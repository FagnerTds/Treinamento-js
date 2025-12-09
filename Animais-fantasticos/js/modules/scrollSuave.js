export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

  linksInternos.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}