export default function initTooltip(){

}

const tooltips = document.querySelectorAll("[data-tootip]")

function onMouseOver(event){
  criarTooltipBox(this);
  console.log(event);
  
}
tooltips.forEach((item)=>{
  item.addEventListener("mouseover", onMouseOver)
})

function criarTooltipBox(element){
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip")
}