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
 function exe3(){
    // recuperar dados do usuario 
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2= Number(document.getElementById("numero2").value)
    
    if (numero1 < numero2){
        document.getElementById("menor").innerText = "O menor é " + numero1
    }
    else if (numero2 < numero1){
        document.getElementById("menor").innerText = "O menor é " + numero2
     }
     else{
        document.getElementById("menor").innerText = "Os dois numeros são iguais"
     }
}
    function exe4(){
        // recuperar dados do usuario 
        let numero1 = Number(document.getElementById("numero1").value)
        let numero2 = Number(document.getElementById("numero2").value)
        let numero3 = Number(document.getElementById("numero3").value)
        // calcular o maior
        if (numero1 >= numero2  && numero1 >= numero3){
            document.getElementById("maior").innerText = "O maior é " + numero1
        }
        else if (numero2 >= numero1 && numero2 >= numero3){
            document.getElementById("maior").innerText = "O maior é " + numero2
        }
        else if (numero3 >= numero1 && numero3 >= numero2){
            document.getElementById("maior").innerText = "O maior é " + numero3
        }
        
    }
    function exe5(){
            // recuperar dados do usuario 
         let numero1 = Number(document.getElementById("numero1").value)
         let numero2 = Number(document.getElementById("numero2").value) 
         let selecao = Number(document.getElementById("selecao").value)
         // escolha
         switch (selecao){
            case 1: document.getElementById("resultado").innerText = "A media é"+(numero1 - numero2)/2
                   break
            case 2 : if (numero1 >= numero2){
                document.getElementById("resultado").innerText = numero1 + numero2
            }
                 else {
                    document.getElementById("resultado").innerText = numero2 - numero1
                 }
                 break
            case 3: document.getElementById("resultado").innerText = numero1 * numero2
                 break
            case 4: if (numero2 != 0){
                document.getElementById("resultado").innerText = numero1 / numero2
            }
                    else {
                        document.getElementById("resultado").innerText = "Divisão por zero"
                    }
    }
}
    function exe6(){
        // recuperar dados do usuario 
        let numero1 = Number(document.getElementById("numero1").value)
        let numero2 = Number(document.getElementById("numero2").value)
        let selecao = Number(document.getElementById("selecao").value)
         // escolha
         switch (selecao){
            case 1: document.getElementById("resultado").innerText = "A potencia e"+ Math.pow(numero1,numero2)
                break
            case 2: document.getElementById("resultado").innerHTML = "A raiz quadrada numero1 é" + Math.sqrt(numero1).toFixed(2)+  "<br>A raiz quadrada numero2" + Math.sqrt(numero2).toFixed(2)
                break
            case 3: document.getElementById("resultado").innerHTML = "A raiz cubica nmero1 é" + Math.cbrt(numero1).toFixed(2) +" <br> A raiz cubica nmero1 é" + Math.cbrt(numero2).toFixed(2)
                break
         }
    }
    function exe7(){
        // recuperar dados do usuario 
        let salario = Number(document.getElementById("salario").value)
        // verificar salario
        if (salario < 500){
            document.getElementById("novo").innerHTML = "novo salario" +(salario +salario *30/100)
        }
        else {
            document.getElementById("novo").innerHTML = "salario maior ou igual a 500, sem reajuste"
        }
    }
    function exe8(){
        // vamos usar template string
        // recuperar dados do usuario 
        let salario = Number(document.getElementById("salario").value)
        if (salario < 0){
            document.getElementById("novo").innerHTML = "salario negativo"
        }
        // vamos usar template string
        
        else if (salario <= 300){
            let novosalario = (salario + salario*35/100)
            document.getElementById("novo").innerHTML = `Novo salario ${novosalario}`
        }
        else{
            let novosalario = (salario + salario*15/100)
            document.getElementById("novo").innerHTML = `Novo salario ${novosalario}`
        }
    }
