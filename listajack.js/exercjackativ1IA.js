// --- Funções para gerar as listas de teste ---

function gerarListaAleatoria(tamanho) {
    const lista = [];
    for (let i = 0; i < tamanho; i++) {
        lista.push(Math.floor(Math.random() * 10001));
    }
    return lista;
}

function gerarListaOrdenada(tamanho) {
    const lista = [];
    for (let i = 0; i < tamanho; i++) {
        lista.push(i);
    }
    return lista;
}

function gerarListaInvertida(tamanho) {
    const lista = [];
    for (let i = tamanho; i > 0; i--) {
        lista.push(i);
    }
    return lista;
}

// --- As três estratégias (métodos de ordenação) ---

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// --- Executa os testes e imprime os resultados ---

function executarTestes() {
    const tamanho = 1000;
    
    const aleatoria = gerarListaAleatoria(tamanho);
    const ordenada = gerarListaOrdenada(tamanho);
    const invertida = gerarListaInvertida(tamanho);

    const algoritmos = {
        "Bubble Sort": bubbleSort,
        "Seleção Direta": selectionSort,
        "Inserção Direta": insertionSort
    };

    const listas = {
        "Lista Aleatória": aleatoria,
        "Lista Ordenada": ordenada,
        "Lista Invertida": invertida
    };

    console.log("--- Tempos de Ordenação (1000 elementos) ---\n");
    
    for (const nomeAlg in algoritmos) {
        console.log(`--- ${nomeAlg} ---`);
        const algFunc = algoritmos[nomeAlg];

        for (const nomeLista in listas) {
            const copia = [...listas[nomeLista]];
            
            console.time(`  ${nomeLista}`);
            algFunc(copia);
            console.timeEnd(`  ${nomeLista}`);
        }
        console.log("-" .repeat(20));
    }
}

executarTestes();