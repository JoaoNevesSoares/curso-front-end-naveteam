const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
  
  //Imprimir usando ponto
  console.log(user.nome);
  console.log(user.endereco.rua);
  console.log(user.projetos[1]);
  
  console.log(user["nome"]);
  console.log(user.endereco["rua"]);
  console.log(user["projetos"][1]);
  
  const n = "numero";
  console.log(user.endereco[n]);