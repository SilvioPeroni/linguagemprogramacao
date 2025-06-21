// Função para ler os dados de 5 pacientes via prompt()
function lerPacientes(pacientes) {
   for (let i = 0; i < 5; i++) {
        let objeto = {
            nome : prompt(`Informe o nome do paciente ${i + 1}:`),
            idade : Number(prompt(`Informe a idade de ${nome}:`)),
            especialidade : prompt(`Informe a especialidade (ex: cardiologia, pediatria, clínico geral) de ${nome}:`).toLowerCase(),
            pressao : parseFloat(prompt(`Informe a pressão arterial de ${nome} (em mmHg):`))
        }
        pacientes.push(objeto);
    }
}
 
// Função que retorna o nome do paciente com maior pressão arterial
function pacienteComMaiorPressao(pacientes) {
    let maior = pacientes[0];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].pressao > maior.pressao) {
            maior = pacientes[i];
        }
    }
    return maior.nome;
}
 
// Função que retorna a quantidade de pacientes com idade > 60 e pressão > 14.0
function idososComPressaoAlta(pacientes) {
    let contador = 0;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].idade > 60 && pacientes[i].pressao > 14.0) {
            contador++;
        }
    }
    return contador;
}
 
// Função que calcula a média de idade dos pacientes atendidos em "cardiologia"
function mediaIdadeCardiologia(pacientes) {
    let soma = 0;
    let cont = 0;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidade === "cardiologia") {
            soma += pacientes[i].idade;
            cont++;
        }
    }
 
    if (cont === 0) {
        return "Nenhum paciente de cardiologia.";
    } else {
        return (soma / cont).toFixed(2);
    }
}
 
// Função principal que chama as demais
function sistemaClinica() {
    let pacientes = []
    lerPacientes(pacientes);
 
    const nomeMaiorPressao = pacienteComMaiorPressao(pacientes);
    const qtdeIdososPressaoAlta = idososComPressaoAlta(pacientes);
    const mediaIdadeCardio = mediaIdadeCardiologia(pacientes);
 
    const resultado = ''
        `Paciente com maior pressão arterial: ${nomeMaiorPressao}`<br>
        `Quantidade de pacientes com mais de 60 anos e pressão > 14.0: ${qtdeIdososPressaoAlta}`<br>
        `Média de idade dos pacientes de cardiologia: ${mediaIdadeCardio}` 

 
    alert(resultado);
}
