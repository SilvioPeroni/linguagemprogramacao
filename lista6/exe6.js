function entrada(vet){
    // vet recebe vetor (vet = vetor)
    // entrada de dados
    for(i = 0; i < 10; i++){
        let objeto ={
            nome: prompt(`informe o nome ${i+1}o. vendedor`),
            venda: Number(prompt(`informe total vendas ${i+1}o. vendedor`)),
            percentual: Number(prompt(`informe o percentual ${i+1}o. vendedor`))
        }
        // calcular a comissão - vamos utilizar 0 . para acessar o campo/ atributo do objeto
        objeto.comissao = (objeto.venda * objeto.percentual) / 100
        // adicionar o objeto no vetor
        vet.push(objeto)
    } // fecha o for
}
function gerarRelatorio(vet){
    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i =0; i < 10;i++){
        relatorio +=`\nVendedor: ${vet[i].nome}vai receber ${vet[i].comissao}`
    } 
    alert(relatorio)
}
function totalVendas(vet){
    //total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i =0; i < 10;i++){
        somaVendas = somaVendas + vet[i].venda
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
}
function maiorMenor(vet){
    // maior e menor valor a receber e nome
    let ObjetoMaior = vet [0] // primeiro funcionario é o maior
    let ObjetoMenor = vet [0]  // primeiro funcionario é o menor]
    for(let i =0; i < 10;i++){
        if (vet[i].comissao > ObjetoMaior.comissao){
            ObjetoMaior = vet[i]
        }
        if (vet[i].comissao > ObjetoMenor.comissao){
            ObjetoMenor = vet[i]   
        }
    }
    alert (`${ObjetoMaior.nome} vai receber maior comissao de ${ObjetoMaior.comissao}`)
    alert (`${ObjetoMenor.nome}} vai receber maior comissao de ${ObjetoMenor.comissao}`)
}
function exe6(){
    let vetor = []
    entrada(vetor)
    gerarRelatorio(vetor)
    totalVendas(vetor)
    maiorMenor(vetor)
}
exe6()