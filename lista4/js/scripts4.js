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
function exe2{
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
