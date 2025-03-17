function exe1(){
    // recuperar os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcular a média
    let media = (nota1 + nota2 + nota3 + nota4)/4
    if (media >=7){
     document.getElementById("media").innerText = "Aprovado com média " + media
    }
    else {
     document.getElementById("media").innerText = "Reprovado com média " + media
    }
 
 }
 function exe2(){
    // recuperar dadosdo usuario 
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcular média
    let media = (nota1 + nota2)/2
    if ((media >= 0) && (media < 3)){
        document.getElementById("media").innerText = "Reprovado" + media
    }
    else if ((media >=3) && (media < 7)){
        document.getElementById("media").innerText = "Exame " + media
    }
    else if ((media >=7) && (media < 10)){
        document.getElementById("media").innerText = "Aprovado" + media
    }
    else{
        document.getElementById("media").innerText = "Problema com notas " + media
    }
 }