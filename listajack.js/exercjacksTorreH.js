function hanoi(n, origem, destino, aux){
  if(n == 1)
    console.log("mova disco do pino" + origem + " para o pino" + destino)
  else{
    hanoi (n-1, origem,aux, destino)
    console.log ("mova disco do pino" + origem+ "para o pino" + destino)
    hanoi(n-1, aux, destino, origem)
  }
}

hanoi(3, "A", "B", "aux")
