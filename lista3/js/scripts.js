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
    
     
