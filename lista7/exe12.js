exercício12 
function entrada(alunos, total) {
    for (let i = 0; i < total; i++) {
        const codigo = prompt(`Código do aluno ${i + 1}:`)
        const idade = Number(prompt(`Idade do aluno ${codigo}:`))
        const d1 = prompt("Código da 1ª disciplina:")
        const p1 = Number(prompt("Quantidade de provas feitas:"))
        const d2 = prompt("Código da 2ª disciplina:")
        const p2 = Number(prompt("Quantidade de provas feitas:"))

        alunos[i] = {
            codigo: codigo,
            idade: idade,
            disciplinas: [
                { cod: d1, provas: p1 },
                { cod: d2, provas: p2 }
            ]
        }
    }
}

function alunos1825ComMais2Provas(alunos, discAlvo) {
    let contador = 0
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].idade >= 18 && alunos[i].idade <= 25) {
            for (let j = 0; j < alunos[i].disciplinas.length; j++) {
                if (alunos[i].disciplinas[j].cod === discAlvo &&
                    alunos[i].disciplinas[j].provas > 2) {
                    contador++
                    break
                }
            }
        }
    }
    return contador
}

function alunosMenos3Provas(alunos, discAlvo) {
    let lista = ""
    for (let i = 0; i < alunos.length; i++) {
        for (let j = 0; j < alunos[i].disciplinas.length; j++) {
            if (alunos[i].disciplinas[j].cod === discAlvo &&
                alunos[i].disciplinas[j].provas < 3) {
                lista += `Aluno: ${alunos[i].codigo} - Disciplina: ${discAlvo}\n`
                break
            }
        }
    }
    return lista
}

function mediaIdadeSemProva(alunos) {
    let soma = 0
    let total = 0
    for (let i = 0; i < alunos.length; i++) {
        let fezProva = false
        for (let j = 0; j < alunos[i].disciplinas.length; j++) {
            if (alunos[i].disciplinas[j].provas > 0) {
                fezProva = true
                break
            }
        }
        if (!fezProva) {
            soma += alunos[i].idade
            total++
        }
    }
    if (total === 0) {
        return -1
    }
    return soma / total
}

function verificaDisciplina(alunos, discAlvo) {
    for (let i = 0; i < alunos.length; i++) {
        for (let j = 0; j < alunos[i].disciplinas.length; j++) {
            if (alunos[i].disciplinas[j].cod === discAlvo) {
                return true
            }
        }
    }
    return false
}

function exe12() {
    const alunos = []
    const total = 3

    entrada(alunos, total)

    const discAlvo = prompt("Informe o código da disciplina para análise:")

    if (!verificaDisciplina(alunos, discAlvo)) {
        alert(`Erro: disciplina "${discAlvo}" não cadastrada.`)
        return
    }

    const qtd1825 = alunos1825ComMais2Provas(alunos, discAlvo)
    alert(`1. Alunos entre 18 e 25 anos com mais de 2 provas na disciplina ${discAlvo}: ${qtd1825}`)

    const listaMenos3 = alunosMenos3Provas(alunos, discAlvo)
    alert("2. Alunos com menos de 3 provas na disciplina:\n" + listaMenos3)

    const media = mediaIdadeSemProva(alunos)
    if (media === -1) {
        alert("3. Todos os alunos fizeram pelo menos uma prova.")
    } else {
        alert(`3. Média de idade dos alunos que não fizeram nenhuma prova: ${media.toFixed(2)} anos`)
    }
}

exe12()

