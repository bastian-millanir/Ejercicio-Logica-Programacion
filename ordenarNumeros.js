const prompt = require('prompt-sync')();
function ordenarNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número: "))
    let num2 = parseInt(prompt("Ingrese el segundo número: "))
    let num3 = parseInt(prompt("Ingrese el tercer número: "))
      if (num1 == num2 && num1 == num3 && num2 === num3) {
          console.log("Los números son iguales")
      }
      let mayor, centro, menor;
      if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
      } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
      } else {
        mayor = num3;
      }
      if (num1 <= num2 && num1 <= num3) {
      menor = num1;
      } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
      } else {
        menor = num3;
      }
      centro = num1 + num2 + num3 - mayor - menor;
      let ordenMayorAMenor = [mayor, centro, menor]
      let ordenMenorAMayor = [menor, centro, mayor]
  
  // No modificar el código debajo de esta línea
    return {
      mayor,
      centro,
      menor,
      ordenMayorAMenor: [mayor, centro, menor],
      ordenMenorAMayor: [menor, centro, mayor],
    };
  }
  
  let resultado = ordenarNumeros()
  console.log(resultado.ordenMayorAMenor)
  console.log(resultado.ordenMenorAMayor)