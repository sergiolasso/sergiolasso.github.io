
let id = localStorage.getItem("id");
let url = `https://rickandmortyapi.com/api/character/${id}`;
let img = document.querySelector("#Separacion img");
let nombre = document.querySelector("#informacion #name");
let especie = document.querySelector("#informacion #especie");
let genero = document.querySelector("#informacion #genero");

function damePersonaje(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let personaje = data

      img.src = personaje.image;
      id.textContent = `ID: ${personaje.id}`;
      nombre.textContent = `Nombre: ${personaje.name}`;
      especie.textContent = `Especie: ${personaje.species}`;
      genero.textContent = `Género: ${personaje.gender}`;
    })
    .catch((err) => {
      console.error("Error al cargar personaje:", err);
    });
}


damePersonaje(url);
