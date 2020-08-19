// #100DaysOfCode 2/100

/*Dada una matriz de enteros, devuelve índices de los dos números de modo que sumen un objetivo específico.
Puede suponer que cada entrada tendría exactamente una solución y no puede usar el mismo elemento dos veces.

Example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */


var twoSum = function(nums,target) {
    for(let i = 0; i < nums.length; i++ ){
        for(let j = i + 1; j < nums.length; j++){
                 if( nums[j] == target - nums[i]){   
                var resul = console.log ([j,i]);  
                i = nums.length;
                j = nums.length;
            }
            
        }
    } 
};

twoSum([2,6,11,15],8);
