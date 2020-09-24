// Devolver true  si en la cadena  no se repite nigun caracter de lo caontarrio false

let  str = 'hluont';

const unique =(st)=>{
const find = st.split('').find((char,i,arr)=>arr.slice(i+1).includes(char));
return find ? false : true;


}
const e = unique(str);
console.log(e)


