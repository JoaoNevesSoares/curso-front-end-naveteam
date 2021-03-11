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
//desafio 1-a
const soma = colaboradores.reduce( (acc,elem) => acc+elem.idade,0);
console.log("Desafio 1-a");
console.log(soma);



//------
//desafio 2-b
function agruparPor(objetoArray, propriedade) {
    return objetoArray.reduce(function (acc, elem) {
      if(elem.cargo in acc){
        acc[elem.cargo]++;
      }
      else{
        acc[elem.cargo] = 1;
      }
      return acc;
    },{ });
  }
  const all = agruparPor(colaboradores,'cargo');
  console.log("Desafio 1-b");
  console.log(all);

  //---
  //--- desafio 2-2-a
const sortAgeCres = colaboradores.slice(0).sort((val1,val2)=> {return val1.idade -val2.idade});
console.log("Desafio 2-a");
console.log(colaboradores);
console.log(sortAgeCres);
//---- desafio 2-2-b
const sortAgeDec = colaboradores.slice(0).sort((val1,val2)=> {return val2.idade -val1.idade});
console.log("Desafio 2-b");
console.log(colaboradores);
console.log(sortAgeDec);

/*----------------
desafio 2-2-c
*/
const sortCargo = colaboradores.slice(0).sort((val1,val2)=>{
    const carg = {'estagiario':5,'front-end':4,'back-end':3,'designer':2};
    key1 = val1.cargo;
    key2 = val2.cargo;
    val1 = carg[key1];
    val2 = carg[key2];
    return val2-val1;
  })
  console.log("Desafio 2-c");
  console.log(colaboradores);
  console.log(sortCargo);

//------------
//desafio 2-2-d
const sortByCargo = (val1,val2)=>{
    const carg = {'estagiario':5,'front-end':4,'back-end':3,'designer':2};
    key1 = val1.cargo;
    key2 = val2.cargo;
    val1 = carg[key1];
    val2 = carg[key2];
    return val2-val1;
  }
  
  const sortByAgeAndCargo = colaboradores.slice(0).sort((val1,val2)=> {
    
    if((val1.idade-val2.idade)===0){
      
      return sortByCargo(val1,val2);
    }
    return val1.idade-val2.idade;
  
  });
  console.log("Desafio 2-d");
  console.log(colaboradores);
  console.log(sortByAgeAndCargo);