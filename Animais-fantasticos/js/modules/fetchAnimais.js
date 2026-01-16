import initAnimaNumeros from "./animaNumeros.js";
export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const div = document.querySelector(".numeros-grid");

      const animaisHtml = animaisJson.map((animalJson) => {
        return `
    <div class="numero-animal">
      <h3>${animalJson.specie}</h3>
      <span data-numero>${animalJson.total}</span>
    </div>
  `;
      });
      div.innerHTML = animaisHtml.join("");
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  //   animaisJson.forEach((animalJson) => {
  //     createAnimais(animalJson);
  //   });
  //   initAnimaNumeros();
  // }
  // function createAnimais(animalJSon) {
  //   const novaDiv = document.createElement("div");

  //   novaDiv.classList.add("numero-animal");
  //   console.log(novaDiv);
  //   novaDiv.innerHTML = `<h3>${animalJSon.specie}</h3><span data-numero>${animalJSon.total}</span>`;
  //   document.querySelector(".numeros-grid").appendChild(novaDiv);
  // }

  fetchAnimais("./animaisapi.json");
}
