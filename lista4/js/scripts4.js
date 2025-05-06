function exe1(){
    let numeros = [] 
    for (let i = 0; i < 6; i++){
        // insere número no vetor
        numeros.push(Number(prompt(`Ìnforme o elemento ${i}`)))
    }
    // calcular os pares e impares
    let pares =[] // guardar os pares]
    let impares = [] // guardar os impares
    // numeros.length
    for (let i = 0; i < numeros.length; i++){
        if (numeros [i] %! 2 == 0){ //par
            pares.push(numeros [i])
        }
        else { 
            impares.push(numeros [i])
        }
    }
    alert(`Numeros pares ${pares} e a qtde ${pares.length}`)
    alert(`Numeros impares ${umpares} e a qtde ${impares.length}`)
}
function exe2(){
    let numeros = [] 
    for (let i = 0; i < 7; i++){
        // insere número no vetor
        numeros.push(Number(prompt(`Ìnforme o elemento ${i}`)))
    }
    // calcular os pares e impares
    let multiplo2 =[], multiplos3 = [], multiplos2e3 = []
    // numeros.length
    for (let i = 0; i < numeros.length; i++){
        if (numeros [i] % 2 == 0 && numeros[i] % 3 == 0) {
            multiplos2e3,push(numeros[i])
            numeros.push(numeros [i])
        }
        else if (numeros[i] % 2 == 0){ 
            multiplos2.push(numeros [i])
        }
        else if (numeros[i] % 2 == 0){ 
            multiplos3.push(numeros [i])  
        }
    }
    alert(`Multiplos de 2 ${multiplos2}|Multiplos de 3 ${multiplos3} e
        multiplos de 2 e 3 ${multiplos2e3}`)
}

function exe3(){
    // cadastro codigo e qtde em estoque
    let codigos =[], estoque = [] // declaração de vetores
    for(let i = 0; i < 3; i++){
        codigos.push(prompt(`Informe o codigo do produto`))
        estoque.push(Number(prompt(`Informe a qtde em estoque`)))
    }
    // comprando...
    let cliente = Number(prompt( `Informe o codigo do cliente`))
    do{
        cliente = Number(prompt( `Informe o codigo do cliente`))
        let codigo = prompt(`Informe codigo do produto para compra`)
        let qtde
        qtde = Number (prompt(`Informe a qtde do produto para compra`))
        // produrar para ver se produto existe
        let posicao = codigos.indexOf(codigo)
        if (posicao == -1){ // produto não existe
            alert("codigo inexistente")
        }
        else {  // produto existe
            // tem em estoque suficiente
            if (estoque[posicao] >= qtde){
                // atualizar estoque
                estoque[posicao] = estoque [posicao] - qtde
                alert (`Pedido atendido. Obrigado e volte sempre`)
            }
            else{
                alert(`Não temos estoque suficiente desta mercadoria`)
            }
        }
        cliente =Number(prompt ( `Informe codigo do novo cliente; Digite 0 para encerrar `))
    } // fechacliente o do
    while (cliente != 0)
        alert(`${codigos}${estoque}`)
}

function exe4(){
    // declara vetor
    let vetor =[]
    // usuário informa 15 números
    for(let i = 0; i<15;i++){
        vetor.push(Number(prompt(`informe o ${i +1}o. numero`)))
    }
    // veirificar os numeros iguais a 30 e mostrar a posiçao
    let posiçoes = []
    for (let i = 0; i<15;i++){
        if (vetor[i] == 30){
            posicoes.push(i)
        }
    }
    alert(`Numero 30 encontrado nas posições ${posicoes}`)
}

function exe5(){
    // declaração dos vetores
    let logica = [], linguagem =[]
    //entrada de dados
    for(let i=0; i < 15;i++){
        logica.push(Number(prompt(`informe o ${i +1}o. aluno de logica`)))
    }
    for(let i=0;i<10;i++){
        linguagem.push(Number(prompt(`informe o ${i +1}o. aluno de linguagem`)))
    }
    // encontra a intersecção
    let intercecao = []
    // percorre o vetor logica
    for(let i=0;i<15; i++){
        // percorre o vetor linguagem
        // indexOf() percorre o vetor linguagem e procura por logica[i]
        let posicao = linguagem.indexOf (logica[i])
        if (poaicao != -1){  // caso contrario
            interseccao.push(logica[i])
        }
    }
    alert(`Alunos que fazem logica e linguagem ${interseccao}`)
}

function exe6(){
    //declarar vetores
    let nome = [], venda =[], percentual = [], comissao =[]
    //entrada de dados
    for (i=0;i<10;i++){
        nome.push(prompt(`informe o nome ${i+1}o. vendedor`))
        venda.push(Number(prompt(`informe total vendas ${i+1}o. vendedor`)))
        percentual.push(Number(prompt(`informe o percentual ${i+1}o. vendedor`)))
        // calcular a comissao
        comissao.push((venda[i] * percentual [i])/100)
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

function exe7(){
    let vetor =[]
    for(let i = 0;i<10;i++){
        vetor.push(Number(prompt(`Informe o numero`)))
    }
    // conta os negativos e soma os positivos
    let conta =0
    let soma = 0
    for(let i = 0;i<10;i++){
        if (vetor[i] < 0){
            conta++
        }
        else {
            soma += vetor[i]
        }
    }
    alert(`Contagem de negativos ${conta}3 soma dos positivos ${soma}`)
}
