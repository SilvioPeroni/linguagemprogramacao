function entrada(mat){
    // sera 3 x 3
    for(let i =0;i<3;i++){
        mat[i] = []  // criar cada linha da matriz
        for( j = 0; j< 6;j++){
            mat[i][j] = Number(prompt(`Informe o elemento [$(i)][$(j)] da matriz`))
        }
   }
}
function calcularSomaDiagonalPrincipal(mat){
    let soma = 0
    for(let i =0;i<3;i++){
        for( j = 0; j< 6;j++){
            if (i == j){
                soma += mat[i][j]
            }
        }
    }
    // função vai retornar a soma
    return soma
}
function exemplo(){
    let mat =[]
    entrada(mat)
    alert(`A soma da diagonal proncipal é ${calcularSomaDiagonalPrincipal(mat)}`)
}