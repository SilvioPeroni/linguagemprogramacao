function entrada(mat,vet){
    for(let i=0;i<4;i++){
        vet.push(prompt(`Informe o ${i+1}o. nome`))
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe nota ${j+1} do aluno ${vet[i]}`))
        }
    }
}
function calcularMedia(mat,vet){
    // de 0 a  2,9 (reprovado),de 3 a 5,9 (exame), e maior que 6 (aprovado)
    for(let i=0;i<4;i++){
        let soma = 0  // aluno novo
        for(let j=0;j<5;j++){
            soma = soma + mat[i][j]
        }
        let media = soma / 5
        let situacao
        if (media < 3){
            situacao = 'REprovado'
        }
        else if (media >= 3 && media < 6){
            situacao = 'exame'
        }
        else {
            situacao = 'Aprovado'
        }
        alert(`${vet[i]} teve media ${media}, portanto ${situacao}`)
    }
}
function calcularMediaClasse(){
    let soma = 0
    for(let i=0;i<4;i++){
        for(let j=0;j<5;j++){
            soma += mat[i][j]
        }
    }
    return (soma / 20)
}
function exe4(){
    let mat = []
    let vet = []
    entrada(mat, vet)
    calcularMedias(mat,vet)
    calcularMediaClasse(mat)
}
exe4()