function Fib(num){
  if (num <= 1){
    return 1
  }
  else{
    return Fib(num-1)+Fib(num-2)
  }
}
//principal
var N = 8
var resultado = Fib(N)
console.log (resultado)

