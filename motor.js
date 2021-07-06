import { lazy, obtenerTijera } from "./lazy.js"
import { megastofeles, obtenerEscudo } from "./megastofeles.js"
import { unitornio, obtenerGlobo } from "./unitornio.js"
import { zombie, obtenerEstaca } from "./zombie.js"
import { burlon, obtenerLinterna } from "./burlon.js"

let globalGameObject = {
  stats : {
    carisma: 20,
    fuerza: 20,
    belleza: 20,
    inteligencia: 20
  },
  items : {
    linterna: 0,
    estaca: 0,
    tijera: 0,
    globo: 0,
    espejo: false
  },
}


// MISCELANEOS
let numeroNivel = 0;


function abrirCofre(globalGameObject) {
  console.log("%c ¡COFRE! 🎁", 'background-color: orange; color: white; font-size: 20px; padding: 10px')
  let items = [
    obtenerTijera,
    obtenerEscudo,
    obtenerGlobo,
    obtenerEstaca,
    obtenerLinterna
  ];
  let item = items[Math.floor(Math.random() * items.length)];
  let resultados = item(globalGameObject);

  return resultados;
}

let niveles = [lazy, megastofeles, unitornio, zombie, burlon, abrirCofre];

function jugarNivel() {
  // se escoge un nivel al azar entre boss y abrir cofre
  let nivel = niveles[Math.floor(Math.random() * niveles.length)];

  // se aumenta el nivel
  numeroNivel++;

  setTimeout(() => {
    console.log("%c Entrando al nivel " + numeroNivel + "...", 'background-color: black; color: white; font-size: 20px; padding: 10px');
  }, 1000);


  setTimeout(() => {
    let resultados = nivel(globalGameObject);

    globalGameObject = { ...globalGameObject, ...resultados };
  }, 4000)

  setTimeout(() => {
    console.log(`%c - RESULTADOS DESPUES DEL NIVEL ${numeroNivel} -`, 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
  }, 5000);

  setTimeout(() => {
    let {carisma, fuerza, inteligencia, belleza } = globalGameObject.stats;
    console.log(`%c
        - ESTADISTICAS DE VIDA -
        carisma: ${carisma}
        fuerza: ${fuerza}
        inteligencia: ${inteligencia}
        belleza: ${belleza}
        `, "font-size: 16px");

  }, 6000);

  setTimeout(() => {
    let { tijera, globo, linterna, estaca, escudo } = globalGameObject.items;

    console.log(`%c
        - INVENTARIO -
        tijeras: ✂️ ${tijera}
        globos: 🎈 ${globo}
        linternas: 🔦 ${linterna}
        estacas: 📏 ${estaca}
        escudo activado? 🌞 ${escudo ? "Si." : "No."}
        `, "font-size: 16px");
  }, 7000);

  setTimeout(() => {
    let {carisma, fuerza, inteligencia, belleza } = globalGameObject.stats;

    if(carisma + fuerza + belleza + inteligencia <= 0) {
      console.log("GAME OVER")
    } else {
      console.log("¡LA HEROINA SIGUE VIVA! Vamos al siguiente nivel")
    }
  }, 8000)
}

const btn = document.getElementById("btn");
btn.addEventListener("click", jugarNivel)