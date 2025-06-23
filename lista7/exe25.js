// exercício 25
function entradaDados(precos, matriz) {
    // Vetor de preços dos 10 produtos
    for (let i = 0; i < 10; i++) {
        precos[i] = Number(prompt(`Informe o preço do produto ${i + 1}:`))
    }

    // Matriz 5x10: quantidade em cada armazém (5 linhas) para cada produto (10 colunas)
    for (let i = 0; i < 5; i++) {
        matriz[i] = []
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = Number(prompt(`Qtd do produto ${j + 1} no armazém ${i + 1}:`))
        }
    }
}

function calcularQuantidadePorArmazem(matriz) {
    let resultado = []
    for (let i = 0; i < 5; i++) {
        let soma = 0
        for (let j = 0; j < 10; j++) {
            soma += matriz[i][j]
        }
        resultado[i] = soma
    }
    return resultado
}

function calcularQuantidadePorProduto(matriz) {
    let resultado = []
    for (let j = 0; j < 10; j++) {
        let soma = 0
        for (let i = 0; i < 5; i++) {
            soma += matriz[i][j]
        }
        resultado[j] = soma
    }
    return resultado
}

function produtoComMaiorEstoqueUnico(matriz) {
    let maiorQtd = -1
    let produto = -1
    let armazem = -1

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            if (matriz[i][j] > maiorQtd) {
                maiorQtd = matriz[i][j]
                armazem = i
                produto = j
            }
        }
    }

    return { produto, armazem, maiorQtd }
}

function menorEstoqueArmazenado(matriz) {
    let menor = matriz[0][0]
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            if (matriz[i][j] < menor) {
                menor = matriz[i][j]
            }
        }
    }
    return menor
}

function calcularCustoPorArmazem(matriz, precos) {
    let custos = []
    for (let i = 0; i < 5; i++) {
        let total = 0
        for (let j = 0; j < 10; j++) {
            total += matriz[i][j] * precos[j]
        }
        custos[i] = total
    }
    return custos
}

function exe25() {
    let precos = []
    let matriz = []

    entradaDados(precos, matriz)

    // a) Quantidade de produtos estocados por armazém
    let qtdArmazem = calcularQuantidadePorArmazem(matriz)
    let resultadoA = "a) Quantidade por armazém:\n"
    for (let i = 0; i < qtdArmazem.length; i++) {
        resultadoA += `Armazém ${i + 1}: ${qtdArmazem[i]}\n`
    }
    alert(resultadoA)

    // b) Quantidade de cada produto somando todos os armazéns
    let qtdProduto = calcularQuantidadePorProduto(matriz)
    let resultadoB = "b) Quantidade total por produto:\n"
    for (let i = 0; i < qtdProduto.length; i++) {
        resultadoB += `Produto ${i + 1}: ${qtdProduto[i]}\n`
    }
    alert(resultadoB)

    // c) Produto com maior estoque em um único armazém
    let maior = produtoComMaiorEstoqueUnico(matriz)
    let resultadoC = `c) Produto com maior estoque em único armazém:\n`
    resultadoC += `Produto ${maior.produto + 1}, Armazém ${maior.armazem + 1}, Qtd: ${maior.maiorQtd}, Preço: R$ ${precos[maior.produto].toFixed(2)}`
    alert(resultadoC)

    // d) Menor estoque armazenado
    let menor = menorEstoqueArmazenado(matriz)
    alert(`d) Menor quantidade armazenada entre todos os produtos e armazéns: ${menor}`)

    // e) Custo de cada armazém
    let custos = calcularCustoPorArmazem(matriz, precos)
    let resultadoE = "e) Custo total de cada armazém:\n"
    for (let i = 0; i < custos.length; i++) {
        resultadoE += `Armazém ${i + 1}: R$ ${custos[i].toFixed(2)}\n`
    }
    alert(resultadoE)
}

exe25()





