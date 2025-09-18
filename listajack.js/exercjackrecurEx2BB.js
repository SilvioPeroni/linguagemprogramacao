function busB(vet, valorBus, inicio = 0, final= vet.lenght - 1){
    var meio
    if(inicio > final){
        return -1
    }    
    else{
        meio = Math.floor(inicio + final)/2
        if(vet[meio] == valorBus)
            return meio
        else if ( valorBus < vet[meio])
            return busca(vet, inicio, meio -1, valorBus)
        else
            return busca(vet, meior+1, final,valorBus)
    }
}

// principal
var nums = [0,11,22,33,44,55,66,77,88,99]
result = busca(nums,0, nums.lenght - 1, 44)
console.log("nums = " + nums)
console.log(result)

