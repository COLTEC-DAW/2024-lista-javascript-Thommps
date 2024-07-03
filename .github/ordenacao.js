function bubbleSort(arr, compareFn) {
    let n = arr.length;
    let troca;
    do {
        troca = false;
        for (let i = 1; i < n; i++) {
            if (compareFn(arr[i - 1], arr[i]) > 0) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                troca = true;
            }
        }
        n--;
    } while (troca);
    return arr;
}

function crescente(a, b) {
    return a - b;
}

function decrescente(a, b) {
    return b - a;
}

function crescenteImpar(a, b) {
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a - b;
    }
    return 0;
}

function decrescentePar(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return b - a;
    }
    return 0;
}

let arr1 = [5, 3, 8, 4, 2];
console.log("Crescente: ", bubbleSort([...arr1], crescente));

let arr2 = [5, 3, 8, 4, 2];
console.log("Decrescente: ", bubbleSort([...arr2], decrescente));

let arr3 = [5, 3, 8, 4, 2, 1];
console.log("Crescente Ímpares: ", bubbleSort([...arr3], crescenteImpar));

let arr4 = [5, 3, 8, 4, 2, 6];
console.log("Decrescente Pares: ", bubbleSort([...arr4], decrescentePar));