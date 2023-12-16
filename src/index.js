import "dotenv/config";
import express from "express";
import { loggerDevelopment, loggerProduction } from "./config/logger.js";

const app = express();

const isDevelopment = process.env.MODO === "desarrollo";

const logger = isDevelopment ? loggerDevelopment : loggerProduction;

// Middleware para agregar el logger al objeto req
app.use((req, res, next) => {
  req.logger = logger;
  next();
});

// Puntos importantes del servidor
app.get("/", (req, res) => {
  req.logger.debug("Inicio de la aplicación");
  res.send("¡Hola, mundo!");
});

app.get("/loggerTest", (req, res) => {
  req.logger.debug("Prueba de log de nivel debug");
  req.logger.info("Prueba de log de nivel info");
  req.logger.warning("Prueba de log de nivel warning");
  req.logger.error("Prueba de log de nivel error");
  req.logger.fatal("Prueba de log de nivel fatal");

  res.send("Logs generados");
});

//puerto
const PORT = 4000;
app.listen(PORT, () => {
   
    logger.info(`Servidor en ejecución en el puerto ${PORT}`);
  });
  
