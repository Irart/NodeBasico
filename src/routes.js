import express from "express";
import usuariosController from "./controllers/usuariosController.js";
 
const routes = express.Router();
 
routes.get("/usuarios", usuariosController.mostraUsuarios);
 
routes.post("/usuarios", usuariosController.criaUsuario);

routes.get("/usuarios/:id", usuariosController.buscaUsuario);

routes.delete("/usuarios/:id", usuariosController.deletaUsuario);


export default routes;