function seguir(){
    alert(" voce está seguindo Silvio Peroni")
}
// exercicio 1
function exe1() {
    // vamos usa DOM para recuperar os dados do HTML
    // DOM - Document object Model
    // converter texto para número - Number()

    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //vamos fazer a subtração
    let sub = nro1 - nro2
    // Vamos mostrar o resultado ao usuário
    // alert( "A subtração é " + sub )
    document.getElementById("sub").innerText = "O resultado é: " + sub
}
