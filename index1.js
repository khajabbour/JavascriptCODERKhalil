// Toma un valor inicial y lo multiplica por otros valores, infinitas veces, se puede cancelar

var numero = parseInt(prompt("Ingrese un numero inicial"))
var multiplicacion = 0

for(let i=0;;i++){
        var numero2 = parseInt(prompt("Ingrese un numero para multiplicar, inserte cero (0) para cancelar"))
            if (numero2 == 0){
                alert("Cancelado exitosamente")
                break
            }
            else{
                multiplicacion = numero * numero2
                console.log(multiplicacion);
        }
    }

// Toma palabras concatenando un texto hasta que se escriba dos veces ESC, no necesariamente seguidas

var palabra = prompt("Inserte una palabras")
var resultado = palabra
var palabraTexto = " "

while(palabraTexto != "esc"){
    palabraTexto = prompt("Ingrese mas palabras")
    resultado = resultado + " " + palabraTexto
    console.log(resultado)
    var cantidad = 2
    if (palabraTexto == "ESC" > cantidad){
        break
    }
}