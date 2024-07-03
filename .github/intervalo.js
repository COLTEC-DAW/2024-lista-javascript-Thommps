function intervalo(min, max, i = 1) {
    let resultado = [];
    
    if (i <= 0) {
      console.log("O intervalo de variação deve ser um número positivo.");
    }
    
    for (let num = min; num <= max; num += i) {
      resultado.push(num);
    }
    
    return resultado;
}