function bubbleSort(arr) {
  const vetor = [...arr];
  const n = vetor.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
      }
    }
  }

  return vetor;
}

function selectionSort(arr) {
  const vetor = [...arr];
  const n = vetor.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]];
    }
  }

  return vetor;
}

function insertionSort(arr) {
  const vetor = [...arr];
  const n = vetor.length;

  for (let i = 1; i < n; i++) {
    let chave = vetor[i];
    let j = i - 1;

    while (j >= 0 && vetor[j] > chave) {
      vetor[j + 1] = vetor[j];
      j--;
    }

    vetor[j + 1] = chave;
  }

  return vetor;
}
function testarAlgoritmos() {
  const tamanhos = [100, 1000, 10000];
  const tipos = ['ordenado', 'reverso', 'aleatorio'];
  const algoritmos = {
    'Bubble Sort': bubbleSort,
    'Selection Sort': selectionSort,
    'Insertion Sort': insertionSort,
    'Quicksort': quicksort
  };

  for (const tamanho of tamanhos) {
    for (const tipo of tipos) {
      const vetor = gerarVetor(tamanho, tipo);
      console.log(`\nTamanho: ${tamanho} | Tipo: ${tipo}`);

      for (const nome in algoritmos) {
        const tempo = medirTempoExecucao(algoritmos[nome], vetor);
        console.log(`${nome}: ${tempo} ms`);
      }
    }
  }
}
function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quicksort(arr, left, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

// Exemplo de uso
const vetor = [10, 7, 8, 9, 1, 5];
console.log("Antes:", vetor);
quicksort(vetor);
console.log("Depois:", vetor);

function medirTempoExecucao(algoritmo, vetor) {
  const inicio = performance.now();
  algoritmo([...vetor]); // usa cópia para não alterar o original
  const fim = performance.now();
  return (fim - inicio).toFixed(4); // tempo em milissegundos
}

function gerarVetor(tamanho, tipo) {
  const vetor = [];

  if (tipo === 'ordenado') {
    for (let i = 0; i < tamanho; i++) vetor.push(i);
  } else if (tipo === 'reverso') {
    for (let i = tamanho; i > 0; i--) vetor.push(i);
  } else if (tipo === 'aleatorio') {
    for (let i = 0; i < tamanho; i++) vetor.push(Math.floor(Math.random() * tamanho));
  }

  return vetor;
}
