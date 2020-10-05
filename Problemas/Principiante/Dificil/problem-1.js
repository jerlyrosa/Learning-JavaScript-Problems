// Google preguntó recientemente este problema.

// Dada una lista de números y un número k, devuelve si dos números de la lista suman k.

// Por ejemplo, dado [10, 15, 3, 7] y k de 17, devuelve verdadero ya que 10 + 7 es 17.


const twoSum=(arr,target)=>{
let hash ={}

for (let i = 0; i < arr.length; i++) {
    console.log(hash)
   if(target - arr[i] in hash) return true
    else console.log( hash[arr[i]] = i);

}
    return false
}

const resul = twoSum([1, 15, 3, 7],22);
console.log(resul);