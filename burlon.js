/*
Contrato para el gameObject:
let gameObject = {
  stats : {
    carisma: 20,
    fuerza: 20,
    belleza: 20,
    inteligencia: 20
  },
  items : {
    linternas: 0,
    estacas: 0,
    tijeras: 0,
    globos: 0,
    espejo: false
  },
}
*/

// afecta carisma
function burlon(gameObject) {
  /*
    - burlon puede ser eliminado si se usa una linterna en su contra.
    - Se obtiene +5 en carisma si burlon es eliminado.
    - Si se usa una linterna, recuerda actualizar el inventario.
    - Si no se tiene una linterna, burlon atacara, lo cual disminuira la carisma en -10
    - Si burlon ataca y la carisma es igual o menor a 0, restar -2 en todos los atributos restantes
    Imprimir cada accion en la consola:
    - Si burlon ataca. 
    - Si burlon fue eliminado usando una linterna.
    - Cantidad de linternas restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
  if(gameObject.items.linternas > 0) {
    gameObject.stats.carisma += 5;
    gameObject.items.linternas--;
    console.log('Burlon fue eliminado con una linterna');
    console.log(`Quedan ${gameObject.items.linternas} linternas`);
  } else {
    console.log('Burlon ataca');
    gameObject.stats.carisma -= 10;
    if (gameObject.stats.carisma <= 0) {
      Object.values(gameObject.stats).forEach((stat) => {
        stat -= 2;
    });
    }
  }
  return gameObject;
}

function obtenerLinterna(gameObject) {
  /*
    - Este item se obtiene sobre una relacion del valor de carisma.
    - Si el valor de carisma de la heroina es menor o igual 5: 80% probabilidad de sumar 1 linterna, 20% de no obtener nada.
    - La condicion es inversa si carisma es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerLinterna retorna un game object actualizado (stats e inventario)
  */
  let probabilidad = Math.ceil(Math.random() * 10);
  if(gameObject.stats.carisma <= 5) {
    if(probabilidad > 2){
      gameObject.items.linternas++;
      console.log('Has encontrado una linterna');
    } else {
      console.log('El cofre no tenia nada');
    }
  } else if (gameObject.stats.carisma > 5) {
    if(probabilidad <= 2) {
      gameObject.items.linternas++;
      console.log('Has encontrado una linterna');
    } else {
      console.log('El cofre no tenia nada');
    }
  }
  return gameObject;
}

export {burlon, obtenerLinterna}