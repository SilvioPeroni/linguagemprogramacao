function entrada(vet){
    // entrada de dados
    for(i = 0; i < 10; i++){
        let objeto ={
            nome: prompt(`Informe nome do produto ${i + 1}`),
            codigo: Number(prompt(`Informe codigo do produto ${i+1}`)),
            preco: Number(prompt(`Informa o preco do produto ${i + 1}`)),
            novo : 0 
        }
        vetor.push(objeto)
    }
}
function relatorio(vet){
    for(i =0;i<10;i++){
        if(vet[i].codigo % 2 == 0 && vet[i].preco > 1000){
            vet[i].novo = vet[i].preco + vet[i].preco *20/100
        }
        else if (vet[i].codigo % 2 == 0){
            vet[i].novo = vet[i].preco + vet[i].preco * 15/100
        }
        else if (vet[i].preco[i] > 1000){
            vet[i].novo = vet[i].preco + vet[i].preco * 10/100
        }
        else{
            vet[i].novo = vet[i].preco
        }
        alert(`${vet[i].nome} - ${vet[i].codigo} - ${vet[i].preco} - ${vet[i].novo}`)
        alert(`${vet[i].nome} - ${vet[i].codigo} - ${vet[i].preco} - ${vet[i].novo}`)
    }
}
function exe9(){
    let vetor = []
    entrada(vetor)
    relatorio(vetor)
}
exe9()