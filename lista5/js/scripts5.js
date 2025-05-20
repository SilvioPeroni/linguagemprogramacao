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
        // calcular a comissão
        objeto.comissao = (objeto.venda * objeto.percentual) / 100
        // adicionar o objeto no vetor
        vetor.push(objeto)
    }
    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i =0; i < 10;i++){
        relatorio +=`\nVendedor: ${nomes[i]}vai receber ${comissao[i]}`
    } 
    alert(relatorio)
    //total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i =0; i < 10;i++){
        somaVendas = somaVendas + vendas[i]
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    // maior e menor valor a receber e nome
    let maior =  comissao [0] // primeiro é o maior
    let menor =  comissao [0]  // o segundo é o menor]
    for(let i =0; i < 10;i++){
        if (comissao[i] > maior){
            maior = comissao [i]
        }
        if (comissao[i] > menor){
            menor = comissao[i]    
        }
     }
     let iMaior = comissao.indexOf(maior) // posição do maior
     alert (`${nomes[iMaior]} vai receber maior comissao de ${maior}`)
     let iMenor = comissao.indexOf(menor) // posição do menor
     alert (`${nomes[iMenor]} vai receber maior comissao de ${menor}`)
}