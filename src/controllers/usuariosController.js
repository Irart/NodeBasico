import usuarios from "../models/usuarios.js";
 
function mostraUsuarios(request, response) {
 response.json(usuarios);
}

function criaUsuario(request, response) {
    usuarios.push(request.body);
    response.json(request.body);
}

function buscaUsuario(request, response) {
const id = request.params.id;
    response.json(usuarios[id]);
}

function deletaUsuario(request, response) {
const id = request.params.id;
    usuarios[id] = null;
    response.json({mensagem: "Usuário Deletado"});
}
   
 
export default { mostraUsuarios, criaUsuario,  buscaUsuario, deletaUsuario,  };