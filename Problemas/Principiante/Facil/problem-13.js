const  sum = (num) => {
    if (num === 0)  return 0; //caso base
     else  return num + sum(--num)//caso recursivo 
    
}

console.log(sum(5));  