export default function clickOutsid(menu, eventos, callback) {
  const html = document.documentElement;
  const dataOutside = "data-outside";

  if (!menu.hasAttribute(dataOutside)) {
    eventos.forEach((evento)=>{
      setTimeout(()=>{html.addEventListener(evento, handleOutsideClick)});
    })
    menu.setAttribute(dataOutside, "");
  }
  function handleOutsideClick(event) {
    if (!menu.contains(event.target)) {
      menu.removeAttribute(dataOutside)
      eventos.forEach((evento)=>{
        html.removeEventListener(evento, handleOutsideClick);
      })
      callback();
    }
  }
}