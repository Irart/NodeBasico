import express, { json } from "express";
import routes from "./routes.js";
 
const app = express();
app.use(json());
 
app.use(routes);
 
app.listen(7777, console.log("Servidor Rodando"));