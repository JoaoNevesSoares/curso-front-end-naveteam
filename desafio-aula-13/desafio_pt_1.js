const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]
const imprime = (element,index,array)=>{

	console.log(element);

}

//desafio a
const nomes = colaboradores.map( (elem) =>{ return elem.name});
//nomes.forEach(imprime);
console.log(nomes);

//desafio b
/*const devFrontEnd = colaboradores.filter( elem =>{
    if(elem.cargo === 'front-end') return elem; 
})*/
const devFrontEnd = colaboradores.filter( elem => {return elem.cargo === 'front-end'});

console.log(devFrontEnd);

//desafio c
const maiorVinteTres = colaboradores.find(elem => elem.idade >23);
console.log(maiorVinteTres);
//desafio d
const allAdult = colaboradores.every(elem => elem.idade >18);
console.log(allAdult);
//desafio e
const isIntern = colaboradores.some(elem => elem.cargo === 'estagiario');
console.log(isIntern);