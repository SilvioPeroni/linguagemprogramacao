function entrada(vet){
    for(i = 0; i < 3; i++){
        let objeto = {
            codigo: prompt(`Informe o codigo do produto`),
            estoque: Number(prompt(`Informe a qtde em estoque`)),
            preco: Number(prompt(`Informe a preco em estoque`))
        }
    }
}
function compra(vet){
    for(i = 0; i < 3; i++){
        let objeto = {
            codigo: prompt(`Informe o codigo do produto`),
            estoque: Number(prompt(`Informe a qtde em estoque`)),
            preco: Number(prompt(`Informe a preco em estoque`))
        }
            // adicionar objeto no vetor
            vetor.push(objeto)
    }
    
        // comprando...
        let cliente = Number(prompt( `Informe o codigo do cliente`))
        do{
            cliente = Number(prompt( `Informe o codigo do cliente`))
            let codigo = prompt(`Informe codigo do produto para compra`)
            let qtde = Number (prompt(`Informe a qtde do produto para compra`))
            // produrar para ver se produto existe
            let produtoEncontrado
            let i
            for(let i = 0; i < 3; i++){
                if (vet[i].codigo == codigo){  // produto encontrado
                    produtoEncontrado = vet[i] // guarda produto em produtoEncontrado
                    break  // para de procurar - sair do for
                }
            }
            if (i == 3){ // produto não existe
                alert(`codigo ${codigo} inexistente`)
            }
            else {  // produto existe
                // tem em estoque suficiente
                if (produtoEncontrado.estoque[posicao] >= qtde){
                    // atualizar estoque
                    produtoEncontrado.estoque >= qtde
                    alert (`Pedido atendido. Obrigado e volte sempre`)
                }
                else{
                    alert(`Não temos estoque suficiente desta mercadoria`)
                }
            }
            cliente = Number(prompt ( `Informe codigo do novo cliente; Digite 0 para encerrar `))
        } // fecha cliente o do
        while (cliente != 0)
    }
function saida(vet){
    for(let i = 0; i < vet.length;i++){
        alert(`codigo ${vet[i].codigo} Estoque`)
    }
}

function exe3(){
    // cadastro codigo e qtde em estoque
    let vetor = []
    entrada(vetor)
    compra(vetor)
    saida(vetor)
    
}

