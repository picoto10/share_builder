var estrategias = [
  estrategia1 = {
    nombre: "Comunicación Asertiva: Fortaleciendo Los Lazos De Comunicación Entre La Escuela Y Las Familias",
    url: "https://sites.google.com/view/femsaestrategia3/inicio",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
    tag: ["todas","arte","autogestion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia2 = {
    nombre: "Descubriendo El Mundo En Familia",
    url: "https://sites.google.com/view/femsaestrategia4/inicio",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
    tag: ["todas","juego","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia3 = {
    nombre: "Literatiando Ando Con Mis Emociones",
    url: "https://sites.google.com/view/femsaestrategia5/inicio",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
    tag: ["todas","juego","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia4 = {
    nombre: "¡¡Conectémonos Ya!!",
    url: "https://sites.google.com/view/femsaestrategia6/inicio",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
    tag: ["todas","juego","comunicacion","valentia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia5 = {
    nombre: "El Carrusel De Las Emociones Parentales",
    url: "https://sites.google.com/view/femsaestrategia7/inicio",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
    tag: ["todas","juego","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia6 = {
    nombre: "Vivamos Las Emociones Desde El Arte",
    url: "https://sites.google.com/view/femsaestrategia8/inicio",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
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
      <div id="card" class="card">
      <div id="card-header" class="card-header">
        `+estrategias[i].nombre+`
      </div>
      <div id="card-content" class="card-content">
      Una estrategia hecha por: <br>`+estrategias[i].integrantes+`
      </div>
      <div id="card-footer" class="card-footer">
      <a heref="#" id="card-button" class="card-button" onclick = "abrirEstrategia('`+estrategias[i].url+`')">Ver estrategia</a>
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

window.onload = function(){
  mostrar('juego');
}
