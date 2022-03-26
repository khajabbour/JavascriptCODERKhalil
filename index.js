
alert("Adivinanza, descubre el numero elegido entre 1 y 100, tienes 5 intentos!")

//Variables

var nombre = prompt("Introduce tu nombre")
var numero = prompt("Introduce el numero que creas correcto!");
var intento = 0;

//Reglas 

while (numero != undefined) {
  if (intento < 5) {
//Respuesta correcta
    if (numero == 74) {
      alert("Lo adivinaste! Felicidades " + nombre +" "+"😀")
      break
//Respuesta incorrecta
    } else if (numero != 74) {
      intento++
      if (numero > 74){
          alert("El numero secreto es menor, intente nuevamente")
          var numero = prompt("Introduzca el numero que creas correcto!")
      }
      else {(alert("El numero secreto es mayor, intente nuevamente"))
      var numero = prompt("Introduzca el numero que creas correcto!")
      }
    }
  } 
//Excede limite de intentos
  else {
    alert("Ha intentado demasiadas veces, reinicia la página para juegar de nuevo!")
    break;
  }
}