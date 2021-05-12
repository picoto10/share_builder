var estrategias = [
  estrategia1 = {
    nombre: "Comunicación Asertiva: Fortaleciendo Los Lazos De Comunicación Entre La Escuela Y Las Familias",
    url: "https://sites.google.com/view/femsaestrategia3/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia2 = {
    nombre: "Descubriendo El Mundo En Familia",
    url: "https://sites.google.com/view/femsaestrategia4/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","amor","comunicacion","empatia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia3 = {
    nombre: "Literatiando Ando Con Mis Emociones",
    url: "https://sites.google.com/view/femsaestrategia5/inicio",
    componente: "Autogestión",
    tag: ["todas","autocontrol","perseverancia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia4 = {
    nombre: "¡¡Conectémonos Ya!!",
    url: "https://sites.google.com/view/femsaestrategia6/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia5 = {
    nombre: "El Carrusel De Las Emociones Parentales",
    url: "https://sites.google.com/view/femsaestrategia7/inicio",
    componente: "Autogestión, Conciencia Social y Habilidades para relacionarse",
    tag: ["todas","autocontrol", "paciencia", "atencionplena","tolerancia","respeto", "amor", "perdon", "honestidad", "comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia6 = {
    nombre: "Vivamos Las Emociones Desde El Arte",
    url: "https://sites.google.com/view/femsaestrategia8/inicio",
    componente: "Conciencia de Si mismo",
    tag: ["todas","creatividad", "individualidad", "motivacion","curiosidad"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia7 = {
    nombre: "Jugando y Explorando la Comunicación Vamos Mejorando",
    url: "https://sites.google.com/view/femsaestrategia9/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia8 = {
    nombre: "Hacia una Convivencia Armónica de los Niños y Niñas ",
    url: "https://sites.google.com/view/femsaestrategia10/inicio",
    componente: "Autogestión, Conciencia de Sí mismo y Habilidades para relacionarse",
    tag: ["todas","perseverancia","atencionplena","motivacion","comunicacion","empatia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia9 = {
    nombre: "Fomentar y Fortalecer Acompañamiento de las Familias en los Procesos Pedagógicos de los Hijos",
    url: "https://sites.google.com/view/femsaestrategia12/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia10 = {
    nombre: "Jugando, Jugando... Vamos Todos Avanzando, Aprendiendo y Socializando",
    url: "https://sites.google.com/view/femsaestrategia13/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","liderazgo","solidaridad","empatia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia11 = {
    nombre: "+ Participación - Distancia",
    url: "https://sites.google.com/view/femsaestrategia14/inicio",
    componente: "Autogestión, Conciencia de Sí mismo y Habilidades para relacionarse",
    tag: ["todas","cooperacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia12 = {
    nombre: "Me Reconozco Y Me Expreso",
    url: "https://sites.google.com/view/femsaestrategia15/inicio",
    componente: "Conciencia de Sí mismo y Habilidades para relacionarse",
    tag: ["todas","vision personal", "autoconocimiento", "autoestima", "liderazgo", "solidaridad", "empatia", "asertividad","resiliencia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia13 = {
    nombre: "Autorregulación Emocional En Niños De 6 Años De Edad",
    url: "https://sites.google.com/view/femsaestrategia16/inicio",
    componente: "Autogestión",
    tag: ["todas","autocontrol"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia14 = {
    nombre: "El Arte, una Estrategia para Integrar a la Familia en el Aprendizaje de Nuestros Estudiantes",
    url: "https://sites.google.com/view/femsaestrategia17/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","comunicacion"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia15 = {
    nombre: "Lúdica en Valores Educativos a través de Entornos Virtuales ",
    url: "https://sites.google.com/view/femsaestrategia19/inicio",
    componente: "Autogestión,Conciencia Social y Toma de decisiones responsables",
    tag: ["todas","autocontrol","empatia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia16 = {
    nombre: "Actividades Lúdicas",
    url: "https://sites.google.com/view/femsaestrategia18/inicio",
    componente: "Autogestión y Habilidades para relacionarse",
    tag: ["todas","comunicacion", "resiliencia","empatia"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia17 = {
    nombre: "Juego y Aprendo con Todos",
    url: "https://sites.google.com/view/femsaestrategia20/inicio",
    componente: "Autogestión, Conciencia de Si mismo y Habilidades para relacionarse",
    tag: ["todas","autocontrol", "cooperacion", "humor"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia18 = {
    nombre: "El Arte y la Literatura como Estrategia ce Creación ce Espacios Pedagógicos y Familiares más Felices",
    url: "https://sites.google.com/view/femsaestrategia21/inicio",
    componente: "Autogestión",
    tag: ["todas","autocontrol"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia19 = {
    nombre: "Legomanía, un Juego para Desparcharte en Familia",
    url: "https://sites.google.com/view/femsaestrategia22/inicio",
    componente: "Autogestión y Conciencia de Sí mismo",
    tag: ["todas","autocontrol", "paciencia", "resiliencia","confianza", "gratitud","humor"],
    cargar: function(){
      return ("Estrategia: "+this.nombre);
    }
  },
  estrategia20 = {
    nombre: "Mil Formas de Comunicarnos",
    url: "https://sites.google.com/view/femsaestrategia23/inicio",
    componente: "Habilidades para relacionarse",
    tag: ["todas","comunicacion"],
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
      Componentes<br>`+estrategias[i].componente+`
      </div>
      <div id="card-footer" class="card-footer">
      <a href="#" id="card-button" class="card-button" onclick = "abrirEstrategia('`+estrategias[i].url+`')">Ver estrategia</a>
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
  mostrar('todas');
}
