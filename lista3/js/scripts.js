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
     $ Total à prazo ${TotalPrazo} e total geral ${totalPrazo +totalVista}`
}