function verificaPalindromo(palavra) {
    palavra = palavra.toLowerCase();
    
    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const palavra = prompt("Digite uma palavra: ");
if (verificaPalindromo(palavra)) {
    console.log("'" + palavra + "' é um palíndromo.");
} else {
    console.log("'" + palavra + "' não é um palíndromo.");
}
