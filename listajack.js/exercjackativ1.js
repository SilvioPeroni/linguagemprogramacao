function bubbleSort(vet) {
  let n = vet.length;
  for(let i = 0; i < n - 1; i++){
    for(let j = 0; j < n -i - 1; j++){
      if (vet[j] > vet[j + 1]){
        let temp = vet[j];
        vet[j] = vet[j+1];
        vet[j+1] = temp;
      }
    }
  }
}
function selecaoDireta(vet) {
   
  for(let i = 0; i < vet.length - 1; i++){
    let menor = vet[i]
    let vet = vet.length
    let posicao = i
     for (let j = i + 1; j < vet.length; i++ ){
        if (vet[j] <  menor){
          menor = vet[j]
          posicao = j
        }

      let aux = vet[i]
      vet[i] = vet[posicao]
      vet[posicao] = aux
    }
  } 
}
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
function medirTempo(algoritmo, vet) {
  let vetor = [...vet]; 
  let inicio = perf.now();
  algoritmo(vetor);
  let fim = perf.now();
  return (fim - inicio).toFixed( ); 
}
// função principal

  let vet1 = []
  for (let i = 1000; i > 0; i--) {
    vet1.push[i]
  }
  let i = 1000;
    let vet2 = vet1.slice(i);
    let vet3 = [...vet1];
  
  bubbleSort = [vet1]
  selecao = [vet2]
  insercao = [vet3]

let algoritmos = {
  "Bubble Sort": vet1,
  "Seleção Direta": vet2,
  "Inserção Direta": vet3
};
for (let nomeAlgoritmo in algoritmos) {
  console.log(`\nAlgoritmo: ${nomeAlgoritmo}`);
  for (let tipoVetor in vetores) {
    let tempo = medirTempo(algoritmos[nomeAlgoritmo], vetores[tipoVetor]);
    console.log(`${tipoVetor}: ${tempo} ms`);
  }
}

