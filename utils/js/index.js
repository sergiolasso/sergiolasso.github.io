let url = "https://rickandmortyapi.com/api/character"
let divCatas = document.querySelector("#cartas")
let botonFiltrar = document.querySelector("#buscardor")
let barraBusqueda = document.querySelector("#seleccion")

  function cartas(url) {
    divCatas.innerHTML = "";
    fetch(url)
      .then((e) => e.json())
      .then((e1) => {
        e1.results.forEach((element) => {
          divCatas.innerHTML += `<div class="col">
          <div class="card">
          <img
            src="${element.image}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.species}</p>
            <button class="btn btn-primary">Add</button>
            <button class="btn btn-secondary" id="btn-${element.id}">Detail</button>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">${element.origin.name}</small>
          </div>
        </div>
        </div>`
        });
      })
      .then((e2) => {

        botonAnadir = document.querySelectorAll(".btn-primary");
        anadirPersonaje = document.querySelector(".list-group");

      botonAnadir.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          nombre = btn.parentElement.querySelector(".card-title").textContent;
          especie = btn.parentElement.querySelector(".card-text").textContent;
          item = document.createElement("li");
          item.textContent = `Nombre: ${nombre} Especie: ${especie}`;
          anadirPersonaje.appendChild(item);
        });
      });

      botones = document.querySelectorAll(".btn-secondary");
      botones.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          localStorage.setItem("id", btn.id.split("-")[1])
          location.href = "./segunda.html";
        });
      });
    });
        
  }
  

cartas(url)

botonFiltrar.addEventListener("click", () => {
  if(barraBusqueda.value == "Male"){
    url = "https://rickandmortyapi.com/api/character/?gender=female"
  }else if(barraBusqueda.value == "Female"){
    url = "https://rickandmortyapi.com/api/character/?gender=male"
  }else{
    console.log("Algo salio mal");
    console.log(barraBusqueda.textContent);
  }
  cartas(url)
})



