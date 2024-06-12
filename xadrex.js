let tamanho = prompt("Digite o tamanho do triangulo: ");
let valor1 = "# # # #";
let valor2 = " # # # #";

for (let i = 0; i <= tamanho; i++) {
    if(i%2 == 0) {
        console.log(valor1)
    } else {
        console.log(valor2)
    }
}