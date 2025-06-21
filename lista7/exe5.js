function cadastra(mat, vet){
    for(let i=0;i<12;i++){
        mat[i] = []   // criar espaço na memoria para cada vetor da matriz 
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe valor na semana ${j+1} do mes ${vet[i]}`))
        }
    }
}
function calculaTotalMes (){
    for(let i=0;i<mat.lenght;i++){
        let soma = 0 // vamos iniciar um novo mes
        for(let j=0;j< mat[i].lenght;j++){
            soma = soma + mat[i][j]
        }
        alert(`Total vendido em ${vet[i]} foi de ${soma}`) 

    }
}
function calcularTotalSemana(mat){
    for(let j=0;j<4;j++){
        let soma = 0 // vamos iniciar um nova semana
        for(let i=0;i< 12;i++){
            soma = soma + mat[i][j]
        }
    }
    alert('Total vendido em ${mat[j]} foi de ${soma}')
}
function calculaTotalAno(mat){
    let soma = 0
    for(let i=0;i< mat.lenght;i++){
        for(let j=0;j< 4;j++){
            soma += soma[i][j]
        }
    }
    return soma
}
function calcularVendasMaior5000(mat, vet){
    for(let i=0;i< 12;i++){
        let qtde = 0
         for(let j=0;j< 4;j++){
                if(mat[i][j] > 5000){
                    qtde++
                }
         }
         alert(`Em ${vet[i]} teve ${qtde} vendas maiores que R$ 5.000,00`)
  }
}
function calcularVendasMenor1000(mat, vet){
    for(let i=0;i< 12;i++){
        let qtde = 0
        for(let j=0;j< 4;j++){
                if(mat[i][j] < 1000){
                    qtde++
                }
        
            if (qtde > 0){
            
            }
        }
        alert`Em ${vet[i]}teve ${qtde} vendas menores que R$1.000,00'
    }
}
function exe5(){ 
    let mat = []
    const vet = ["Janeiro", "Fevereiro","Março", "Abril","Maio","junho","julho","agosto","setembro",
        "outubro","novembr","dezembro"]
    cadastra (mat, vet)
    calculaTotalMes(mat, vet)
    calcularTotalSemana(mat)
    calculaTotalAno(mat)
    calcularVendasMaior5000(mat, vet)
    calcularVendasMaior5000(mat, vet)

    alert(' Total vendido no ano ${calcularTotalAno(mat)}')
}
exe5()

// crie uma função que calcula e mostra a qtde de vendas maiores que 5000 em cada mes.
// crie uma função que calcula e mostra os meses que tiveram vendas menores que 1000.
