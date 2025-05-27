function exe3(){
    // cadastro codigo e qtde em estoque
    let vetor = []
    let i
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
            if (vetor[i].codigo == codigo){  // produto encontrado
                produtoEncontrado = vetor[i] // guarda produto em produtoEncontrado
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
        cliente =Number(prompt ( `Informe codigo do novo cliente; Digite 0 para encerrar `))
    } // fecha cliente o do
    while (cliente != 0)
    console.log(vetor)
}

function exe6(){
    //declarar vetores
    let vetor = []
    let i
    for(i = 0; i < 10; i++){
        let objeto ={
            nome: prompt(`informe o nome ${i+1}o. vendedor`),
            venda: Number(prompt(`informe total vendas ${i+1}o. vendedor`)),
            percentual: Number(prompt(`informe o percentual ${i+1}o. vendedor`))
        }
        // calcular a comissão - vamos utilizar 0 . para acessar o campo/ atributo do objeto
        objeto.comissao = (objeto.venda * objeto.percentual) / 100
        // adicionar o objeto no vetor
        vetor.push(objeto)
    } // fecha o for
    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i =0; i < 10;i++){
        relatorio +=`\nVendedor: ${vetor[i].nome}vai receber ${vetor[i].comissao}`
    } 
    alert(relatorio)
    //total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i =0; i < 10;i++){
        somaVendas = somaVendas + vetor[i].venda
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    // maior e menor valor a receber e nome
    let ObjetoMaior = vetor [0] // primeiro funcionario é o maior
    let ObjetoMenor = vetor [0]  // primeiro funcionario é o menor]
    for(let i =0; i < 10;i++){
        if (vetor[i].comissao > ObjetoMaior.comissao){
            ObjetoMaior = vetor[i]
        }
        if (vetor[i].comissao > ObjetoMenor.comissao){
            ObjetoMenor = vetor[i]   
        }
     }
     alert (`${ObjetoMaior.nome} vai receber maior comissao de ${ObjetoMaior.comissao}`)
     alert (`${ObjetoMenor.nome}} vai receber maior comissao de ${ObjetoMenor.comissao}`)
}
function exe9(){
    let vetor = []
    let i
    for(i = 0; i < 10; i++){
        let objeto ={
            nome: prompt(`Informe nome do produto ${i + 1}`),
            codigo: Number(prompt(`Informe codigo do produto ${i+1}`)),
            preco: Number(prompt(`Informa o preco do produto ${i + 1}`)),
            novo : 0 
        }
        vetor.push(objeto)
    }
        // gerar relatorio com novos preços
        for(i =0;i<10;i++){
            if(vetor[i].codigo % 2 == 0 && vetor[i].preco > 1000){
                vetor[i].novo = vetor[i].preco + vetor[i].preco *20/100
            }
            else if (vetor[i].codigo % 2 == 0){
                vetor[i].novo = vetor[i].preco + vetor[i].preco * 15/100
            }
            else if (vetor[i].preco[i] > 1000){
                vetor[i].novo = vetor[i].preco + vetor[i].preco * 10/100
            }
            else{
                vetor[i].novo = vetor[i].preco
            }
            alert(`${vetor[i].nome} - ${vetor[i].codigo} - ${vetor[i].preco} - ${vetor[i].novo}`)
            alert(`${vetor[i].nome} - ${vetor[i].codigo} - ${vetor[i].preco} - ${vetor[i].novo}`)
        }
}
