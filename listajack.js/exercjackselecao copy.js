// ordene os números 25 57 48 37 12 92 86 33 
function selecaoDireta(vet) {
   // lopping tamanho da lista e não pode ultrapassar a lista
  // percorrer a lista,
  // verifica  o valor menor 
  // Se for menor troca com o primeiro considerado 
  // fazer isso até que todos estejam ordenados

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
let numeros = [25, 57, 48, 37, 12, 92, 86, 33]
selecaoDireta(vet)
console.log("vetor ordenado:", numeros)