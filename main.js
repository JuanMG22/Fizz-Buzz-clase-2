const numIngresado = prompt('Ingrese un numero')

if (numIngresado % 3 === 0 && numIngresado % 5 === 0) {
  alert(`Fizz Buzz`)
} else if (numIngresado % 3 === 0) {
  alert(`Fizz`)
} else if (numIngresado % 5 === 0) {
  alert(`Buzz`)
} else {
  alert(`Numero no aceptado`)
}