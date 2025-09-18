// ordene os números 25 57 48 37 12 92 86 33 
function insercaoDireta(vet) {
    
  for(let i = 1; i < vet.length; i++){
    for(let j = 0; j < i; j++){
      if (vet[i] < vet[j]){
        var aux= vet[i]
        for(var k = i; k > j; k--){
          vet[k] = vet[k-1]
        }
        vet[j] = aux
      }
        
    }
   
  }

}

let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
let ordenado = insercaoDireta(numeros);
console.log("Vetor ordenado:", ordenado);