var estrategias = [
  estrategia1 = {
    nombre: "Explorando el arte",
    url: "https://estrategiasfemsa.000webhostapp.com",
    tag: ["todas","arte","autogestion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia2 = {
    nombre: "Explorando el juego",
    url: "https:www.google.com",
    tag: ["todas","juego","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia3 = {
    nombre: "Explorando el juego",
    url: "https:www.google.com",
    tag: ["todas","juego","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia4 = {
    nombre: "Explorando el juego",
    url: "https:www.google.com",
    tag: ["todas","juego","comunicacion","valentia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia5 = {
    nombre: "Explorando el juego",
    url: "https:www.google.com",
    tag: ["todas","juego","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia6 = {
    nombre: "Explorando el juego",
    url: "https:www.google.com",
    tag: ["todas","juego","comunicacion","valentia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  }
];

function mostrar(tag){
  var contenedor = document.getElementById("container");
  var count = 0;
  contenedor.innerHTML = "";
  for (var i = 0; i < estrategias.length; i++) {
    if (estrategias[i].tag.indexOf(tag) != -1) {
      count++;
      contenedor.innerHTML += `
      <div class="cell-3">
      <div class="card image-header m-2">
      <div class="card-header fg-white" style="background-image: url(http://lorempixel.com/1000/600/)">
        `+estrategias[i].nombre+`
      </div>
      <div class="card-content p-2">
      <p class="fg-gray">Posted on January 21, 2015</p>
      Quisque eget vestibulum nulla. Quisque quis dui quis ex
      ultricies efficitur vitae non felis. Phasellus quis nibh
      hendrerit...
      </div>
      <div class="card-footer">
      <button class="button secondary" onclick = "abrirEstrategia('`+estrategias[i].url+`')">Ver estrategia</button>
      </div>
      </div>
      </div>
      `;
      console.log(estrategias[i].cargar());
    }
  }
  if (count == 0) {
    contenedor.innerHTML = `
      <h1>Opps... No existen estrategias planteadas para esta habilidad</h1>
    `;
  }
}

function abrirEstrategia(url){
  window.open(url,"_blank");
}
