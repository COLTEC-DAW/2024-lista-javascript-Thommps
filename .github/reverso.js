function reverteArray(array) {
    let arrayReverso = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        arrayReverso.push(array[i]);
    }
    
    return arrayReverso;
}