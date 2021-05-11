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
    nombre: "Explorando el juego",
    url: "https:www.google.com",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
    tag: ["todas","juego","comunicacion","valentia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia5 = {
    nombre: "Explorando el juego",
    url: "https:www.google.com",
    integrantes: "María Eugenia - Daris Mirela - Mauricio Molina",
    tag: ["todas","juego","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia6 = {
    nombre: "Explorando el juego",
    url: "https:www.google.com",
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
      <div class="card">
      <div class="card-header">
        `+estrategias[i].nombre+`
      </div>
      <div class="card-content">
      Una estrategia hecha por: <br>`+estrategias[i].integrantes+`
      </div>
      <div class="card-footer">
      <button class="card-button" onclick = "abrirEstrategia('`+estrategias[i].url+`')">Ver estrategia</button>
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
