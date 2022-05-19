const express = require('express');

const app = express();

//explicação do professor sobre o que foi feito: na linha 1 e 3 ele executou o express 
//na linha 6 ele passou o express pro app e falou para listar na porta 3000 com o .listen
//o get é o comando que obtem algo.
//a barra usada ali é o caminho; método (get) + caminho (/)
//request é enviado pelo cliente
//response é a resposta do servidor

//Métodos HTTP
//get - buscar, obter, trazer - o browser só chama o .get
//post - criar
//put - atualizar
//delete - deletar

const usuarios = [{
    nome: 'fabiojota',
    idade: 27,
}];

app.get('/usuarios', (request, response) => {
    response.json(usuarios);
    
});

app.post('/usuarios', (request, response) => {
    const novoUsuario = [{
        nome:'amigo',
        idade: 'x',

    }]
   usuarios.push(novoUsuario);
   response.json(novoUsuario);

    
});

app.put('/usuarios/:idUsuario', (request, response) => {
    const idUsuario = request.params.idUsuario;

    console.log(idUsuario);

    response.send('Rotas com parametro');
});
    
    app.listen(3000);