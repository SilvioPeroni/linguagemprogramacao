function exe1(){
    // recuperar os dados do usuário
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let d = Number(document.getElementById("d").value)
    // 
    let i = 1 // variavel que conta quantas vezes o laço vai se repetir
    let aux  // será utilizada nas trocas das variaveis a,b,c,d
    while (i <= 3){
        if (a > b){
            aux = a; a = b;b = aux
        }
        if (b > c){
            aux = b; b = c;c = aux
        }
        if (c > d){
            aux = c; c = d;d = aux
        }
        i++ // incrementa i
    }
    document.getElementById("ordem").innerHTML= `Ordem crescente ${a} ${b} ${c} ${d}e ordem decrescente ${d} ${c} ${b} ${a}`
}
function exe2(){
  let preco = 5.0
  let quantidade = 120
  const despesa = 200
  let lucro  // guardar o lucro do preço do ingresso
  let saida = ""
  while (preco >= 1.0){
    lucro =(preco * quantidade) - despesa
    saida = saida + `<td>${preco}</td> <td>${quantidade}</td> <td> ${despesa} </td> <td> ${lucro}</td> <br/>`
    preco = preco - 0,5
    quantidade = quantidade + 26
  }
  document.getElementById("tabela").innerHTML = saida
  }

  function exe3(){
    let faixa1 = 0,faixa2 = 0,faixa3 = 0,faixa4 = 0,faixa5 = 0
    let idade
    // estrutura de repeyição for
    // let i = 1 será executado uma unica vez, logo no inicio
    // i <= 8 será executado toda vez, antes de entrar no looping
    // i++ será executado toda vez, antes de ir para a próxima interação
    for (let i = 1; i <= 8; i++){
        idade = Number(prompt(`Informe a idade ${i}`))
        if (idade >=0 &&  idade <= 15){
            faixa1++
        }
        else if (idade >15 &&  idade <= 30){
            faixa2++
        }
        else if (idade > 30 &&  idade <= 45){
            faixa3++
        } 
        else if (idade > 45 &&  idade <= 60){
            faixa4++ 
        }
        else if (idade > 60){
            faixa5++
        }
        else {
            alert(`ìdade negativa`)
        }
    }
        document.getElementById("resultado").innerHYML =
            `F1: ${faixa1} <br/>F2: ${faixa2} <br/>F3: ${faixa3} <br/>
             F4: ${faixa4} <br/>F5: ${faixa5} <br/> %F1:{faixa1/8*100}
             %F5:{faixa5/8*100}%`
}

function exe4(){
    // recuperar o numero fornecido
    let numero = Number(document.getElementById("numero").value)
    let resultado  = ""
    // estrutura de repetição para calcular 
    for(let i = 0; i <= 10; i++){
        resultado +=`${numero} * ${i} = ${numero * i} <br/>`
   
    document.getElementById("resultado").innerHTML = resultado
    }
}

function exe5(){
    let resultado = ""
    for(let numero = 1; numero <= 10; numero++){
        resultado += `Tabuada do ${numero} <br/>`
        for(let i = 0; i <= 10; i++){
            resultado += `${numero} * ${i} = ${numero*i} <br/>`
         }
    }
   document.getElementById("resultado2").innerHTML = resultado
}

function exe6(){
    let codigo, valor, totalVista = 0, totalPrazo = 0
    for (let i = 1; i <= 5; i++){
        do {
    codigo = prompt(`Digite V (à vista) ou P (à prazo)`).toUpperCase()
        }
        while (codigo != 'V'  && codigo != 'P')
       valor = Number(prompt(`Digite o valor da transação`)) 
       if (codigo == 'V'){
        totalVista += valor
       } 
       else {
        totalPrazo += valor
       }
    }
    document.getElementById("resultado").innerHTML =`Total à Vista ${totalvista}
     $ Total à prazo ${TotalPrazo} e total geral ${totalPrazo +totalVista} e
      valor da primeira parcela ${ totalPrazo / 3}`
}
function exe7(){
    let idade, altura, peso, idade50 = 0, somaAltura = 0
    for(let i = 1; i <=5; i++){
        do{
            idade = Number(prompt(`Informe a idade`))
        }
        while (idade > 0)      
        altura = Number(prompt(`Informe a altura`))
        peso = Number(prompt(`Informe a peso`))
        if (idade > 50){//item 1
            idade50++
        }
        if (idade >= 10 &&  idade <= 20){  //item 2
            idade10e20++ // conta as pessoas com idade entre 10 e 20
            somaAltura += altura
        }
        if (peso > 40) { //  item 3
            peso40++
        }
    }
    document.getElementById("resultado").innerHTML = `<br/>
        item 2 ${somaAltura / idade10e20} <br/> Item 3 ${peso40}`
    
}
function exe8(){
    // declaração de variaveis
    let idade, altura, peso, olhos,cabelos
    let idade50Peso60 = 0, somaIdade = 0, qtdeAltura150 = 0
    let qtdeAzuis = 0, cabelosRuivo = 0
    // entrada e processamento dos dados
    for(let i=1;i <=3;i++){
        idade = Number(prompt(`Informe idade ${i}`))
        altura = Number(prompt(`Informe altura ${i}`))
        peso = Number(prompt(`Informe peso ${i}`))
        do {
            cabelos = prompt (`Informe cor dos cabelos`).toUpperCase()
        }
        while (cabelos != 'p' && cabelos != 'c' && cabelos != 'l' && cabelos != 'r')
        
        do {
            olhos = prompt (`Informe cor dos olhos`).toUpperCase()
        }
        while (olhos != 'A' && olhos != 'P' && olhos != 'V' && olhos != 'C')
          // processamento
        if (idade > 50 && peso < 60){
            idade50Peso60++
        } 
        if (altura < 1.50){
            somaIdade += idade
            qtdeAltura150++
        }
        if (olhos == 'A'){
            qtdeAzuis++
        }
        if (cabelos == 'r' && olhos != 'A'){
            cabelosRuivo++
        }
    }
    document.getElementById("resultado").innerHTML = `Item 1 ${idade50Peso60} 
    Item 2 ${soma/qtdeAltura150} Item 3 ${qtdeAzuis} Item 4 ${qtdeRuivo} `
}

// Exercício 9
function exe9() {
    let somaIdades = 0;
    let pesoAlturaCondicao = 0;
    let idadeEntre10e30_comMaisDe190 = 0;
    let totalMaisDe190 = 0;

    for (let i = 1; i <= 10; i++) {
        let idade = Number(prompt(`Informe a idade da pessoa ${i}:`));
        let peso = Number(prompt(`Informe o peso da pessoa ${i} (em kg):`));
        let altura = Number(prompt(`Informe a altura da pessoa ${i} (em metros):`));

        // Soma de idades para a média
        somaIdades += idade;

        // Condição 2: peso > 90kg e altura < 1.50m
        if (peso > 90 && altura < 1.50) {
            pesoAlturaCondicao++;
        }

        // Condição 3: idade entre 10 e 30 com altura > 1.90
        if (altura > 1.90) {
            totalMaisDe190++;
            if (idade >= 10 && idade <= 30) {
                idadeEntre10e30_comMaisDe190++;
            }
        }
    }

    let mediaIdades = somaIdades / 10;
    let porcentagem = (totalMaisDe190 > 0) 
        ? (idadeEntre10e30_comMaisDe190 / totalMaisDe190) * 100 
        : 0;

    document.getElementById("resultado").innerHTML = `
        Média das idades: ${mediaIdades.toFixed(2)}<br/>
        Qtde peso > 90kg e altura < 1.50m: ${pesoAlturaCondicao}<br/>
        % de pessoas com idade entre 10 e 30 anos com altura > 1.90m: ${porcentagem.toFixed(2)}%
    `;
}
************************************************************************************************************************************
// exercício10: Somar pares e primos
function exe10() {
    let somaPares = 0;
    let somaPrimos = 0;

    // Função auxiliar para verificar se é primo
    function ehPrimo(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 1; i <= 10; i++) {
        let numero = Number(prompt(`Informe o número ${i}:`));

        // Soma dos pares
        if (numero % 2 === 0) {
            somaPares += numero;
        }

        // Soma dos primos
        if (ehPrimo(numero)) {
            somaPrimos += numero;
        }
    }

    // Exibe os resultados
    document.getElementById("resultado").innerHTML = `
        Soma dos números pares: ${somaPares} <br/>
        Soma dos números primos: ${somaPrimos}
    `;
}