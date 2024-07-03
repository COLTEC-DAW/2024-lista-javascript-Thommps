function verificarNum(num, verificacao) {
    return verificacao(num);
}

function impar(num) {
    return num % 2 !== 0;
}

function primo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

const testeNums = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20];

testeNums.forEach(num => {
    console.log(`Número: ${num}`);
    console.log(`É ímpar? ${verificarNum(num, impar)}`);
    console.log(`É primo? ${verificarNum(num, primo)}`);
    console.log('---');
});
