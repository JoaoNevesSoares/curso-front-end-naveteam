
//função anonima 
const subtrai = function(a,b){
   return a-b;
}
//criar uma arrow function que recebe 1 parametro e testa se for zero, e imprime no console.
const testaZero = arg1 =>{
  return (arg1 == 0) ? true:false;//console.log("é zero") : console.log("não é zero");
}
//Uma função chamada testasinal que recebe dois parametro, A funcao deve aplicar a funcao subtrai aos outros 2 parametros, testar esse resultado e imprimir no console um dos seguintes valores
//"é zero" se o resultado for zero;
//"subtração entre numeros de sinais diferentes" se a operação for entre um numero positivo e negativo
// "subtração entre numeros dde mesmo sinal se a operação entre dois números positivos ou dois números negativos"

function testaSinal(a, b){
  
  if(testaZero(subtrai(a,b))){
    console.log("É zero");
  }
  else if(a>=0 && b<0 || a<0 && b>=0){
    console.log("Subtração entre números de sinais diferentes");
  }
  else{
   console.log("Subtração entre numeros de mesmo sinal"); 
  }
}

let x = 10;
let y = 10;
testaSinal(x,y); // 10-10 resultado: É zero
y = 5;
testaSinal(x,y); // 10-5 resultado: sub entre numeros de mesmo sinal
x = -15;
testaSinal(x,y); // -15 - 10 resultado: sub entre numeros de sinais diferentes