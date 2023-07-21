import express from "express";
import cors from "cors";
import conectarDB from "../database/config.js";
import routerCiclistas from "../router/ciclistas.routes.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.ciclistaPath = "/ciclistas";
    this.connect();
    this.midlewares();
    this.routes();
  }

  async connect() {
    await conectarDB();
  }
  
  midlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.ciclistaPath, routerCiclistas);
  }

 
  
  listen() {
    this.app.listen(this.port, () => {
      console.log(`hola desde puerto ${this.port}`);
    });
  }
}

export default Server;
