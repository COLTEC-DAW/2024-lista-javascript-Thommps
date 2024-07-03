function criarMatriz(linhas, cols, matriz) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matriz(i, j));
        }
        matriz.push(row);
    }
    return matriz;
}

function somaIndices(i, j) {
    return i + j;
}

function multiplicaIndices(i, j) {
    return i * j;
}

function identidadeMatriz(i, j) {
    return i === j ? 1 : 0;
}

function funcao1(i, j) {
    return i ** 2 / (j + 1);
}

function funcao2(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

const linhas = 4;
const cols = 4;

console.log("Matriz m[i,j] = i + j");
console.table(criarMatriz(linhas, cols, somaIndices));

console.log("Matriz m[i,j] = i * j");
console.table(criarMatriz(linhas, cols, multiplicaIndices));

console.log("Matriz m[i,j] = i == j ? 1 : 0");
console.table(criarMatriz(linhas, cols, identidadeMatriz));

console.log("Matriz m[i,j] = i^2 / (j + 1)");
console.table(criarMatriz(linhas, cols, funcao1));

console.log("Matriz m[i,j] = i > j ? 1 : (i < j ? 5 : 0)");
console.table(criarMatriz(linhas, cols, funcao2));