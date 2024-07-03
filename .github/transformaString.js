function transformaString(str, transforma) {
    return str.split('').map(transforma).join('');
}

function vogalMaiuscula(char) {
    const vogais = 'aeiou';
    return vogais.includes(char.toLowerCase()) ? char.toUpperCase() : char;
}

function ConsoanteMaiusculas(char) {
    const vogais = 'aeiou';
    return !vogais.includes(char.toLowerCase()) && /[a-zA-Z]/.test(char) ? char.toUpperCase() : char;
}

function vogalMinuscula(char) {
    const vogais = 'aeiou';
    return vogais.includes(char.toLowerCase()) ? char.toLowerCase() : char;
}

function consoanteMinuscula(char) {
    const vowels = 'aeiou';
    return !vowels.includes(char.toLowerCase()) && /[a-zA-Z]/.test(char) ? char.toLowerCase() : char;
}

const texto = "Hello, World!";

console.log("Texto original: ", texto);
console.log("Caixa alta nas vogais: ", transformaString(texto, vogalMaiuscula));
console.log("Caixa alta nas consoantes: ", transformaString(texto, ConsoanteMaiusculas));
console.log("Caixa baixa nas vogais: ", transformaString(texto, vogalMinuscula));
console.log("Caixa baixa nas consoantes: ", transformaString(texto, consoanteMinuscula));
