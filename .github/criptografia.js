function criptografarString(str, criptografar) {
    return str.split('').map(criptografar).join('');
}

function cifraCesar(char, shift = 3) {
    const maiusculo = char >= 'A' && char <= 'Z';
    const minusculo = char >= 'a' && char <= 'z';
    
    if (maiusculo) {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
    } else if (minusculo) {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
    }
    
    return char;
}

const teste = "Hello, World!";
const shift = 3;

const textoCriptografado = criptografarString(teste, (char) => cifraCesar(char, shift));
console.log("Texto original: ", teste);
console.log("Texto criptografado: ", textoCriptografado);
