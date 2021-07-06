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

// afecta inteligencia
function unitornio(gameObject) {
  if (gameObject.items.globos > 0) {
    gameObject.stats.inteligencia += 5;
    gameObject.items.globos --;
    console.log('unitornio fue eliminado usando un globo');
  }else{
    gameObject.stats.inteligencia -= 10;
    if (gameObject.stats.inteligencia <= 0) {
     for(let index = 0; index < gameObject.stats.length; index++){
       gameObject.stats[index] -= 2;
     }
     console.log("unitornio ataca");
    }
  }
  console.log(`cantidad de globos restantes ${gameObject.items.globos}`);
  return gameObject;
  /*
    - unitornio puede ser eliminado si se usa un globo en su contra.-
    - Se obtiene +5 en inteligencia si unitornio es eliminado. -
    - Si se usa un globo, recuerda actualizar el inventario.-
    - Si no se tiene un globo, unitornio atacara, lo cual disminuira la inteligencia en -10-
    - Si unitornio ataca y la inteligencia es igual o menor a 0, restar -2 en todos los atributos restantes-
    Imprimir cada accion en la consola:
    - Si unitornio ataca. -
    - Si unitornio fue eliminado usando un globo.-
    - Cantidad de globos restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
}

function obtenerGlobo(gameObject) {
  let aleatorio = Math.ceil(Math.random() * 10);

      if(gameObject.stats.inteligencia <= 5){    
        if(aleatorio>2){
            //probabilidad de 80%
            gameObject.items.globos ++;
        }
        else{
            //probabilidad de 20%;
            console.log('el cofre no tenia nada');
        }
      }
      else{
        if(aleatorio<=2){
            //probabilidad de 20%
            gameObject.items.globos ++;
        }
        else{
            //probabilidad de 80%;
            console.log('el cofre no tenia nada');
        }
      }
      return gameObject;
  /*
    - Este item se obtiene sobre una relacion del valor de inteligencia.
    - Si el valor de inteligencia de la heroina es menor o igual 5: 80% probabilidad de sumar 1 globo, 20% de no obtener nada.
    - La condicion es inversa si inteligencia es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    
    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerGlobo retorna un game object actualizado (stats e inventario)
  */
}

export {unitornio, obtenerGlobo}