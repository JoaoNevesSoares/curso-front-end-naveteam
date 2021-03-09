
const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

const imprimeNome = (element,index,array)=>{

	console.log(element.name);

}
const maisDeVinte = (element,index,array)=>{

	if(element.age > 20) console.log(element.name + " "+element.age);

}
var bolsa = [];
const bolsistas = (element,index,array)=>{

	if(element.scholarship){
	var adicionar = bolsa.push(element.name);
}

}

const imprime = (element,index,array)=>{
  console.log(element);
}

students.forEach(imprimeNome);
console.log("\n");
students.forEach(maisDeVinte);
console.log("\n");
students.forEach(bolsistas);
bolsa.forEach(imprime);