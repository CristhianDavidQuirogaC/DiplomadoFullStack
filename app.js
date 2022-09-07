/*const http = require("http"); // Módulo básico de http permite leer peticiones que se hace 
// a un puerto, por ejemplo 3030 y reaccionar a dicha petición
const url = require('url'); // modulo del core 
const axios = require('axios');
const extraFuncion = require("./modules/ExtraFunction");*/
const express = require('express');
//const fs = require('fs'); ya no lo necesitamos ya que todas las funciones Fs fueron movidas a PRODUCTCONTROLER
const morgan = require('morgan'); // morgan es un middleware de terceros 
//morgan muestra informacion de la ruta que la está ejecutando. tiene diversos tipos de modos. UNO es DEV

//const productController= require("./controlers/productController"); ya no lo necesitamos
const productRouter = require("./routes/productRoutes");
const app = express();

// Middleware
app.use(express.json());//permitirá que los parámetros que le enviamos por la aplicación se copien como Json
//Si no usamos el middleware de arriba no se podrá crear el servicio y no se recibira el Json enviado
app.use(morgan("dev")); // muestra la peticion que se hizo en la consola
app.use((req, res, next)=>{
  req.requestTime= new Date().toISOString();
  next();
});

//const port = process.env.PORT; // se fue al serev.js
 //handlers Lo llevamos a CONROLERS


//ROUTES
//abajo se define la ruta del productRouter es decir la raiz
app.use("/api/v1/products/", productRouter);// le digo a la app (a toda la APP) que utilice el productRouter para una ruta específica
//todas las rutas deben de ir en la linea de arriba
module.exports = app;
/*app.listen(port, ()=>{
  console.log(`App running on port ${port}`);
}); //todo el app.listen se fue al serev.js
*/
/*
const servidor = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true); // divide el url que llega de Postman
  const response = {
    success: true,
    message: "API Working es decir api Trabajando",
  };

  res.writeHead(200, {
    "Content-type": "application/json",
  });
  console.log('test',query, pathname);
 extraFuncion();
  res.end(JSON.stringify(response));
  
});*/

/*servidor.listen(3030, "127.0.0.1", () => {
  console.log("Listening to requests on port 3030  " + process.env.URL);
  console.log("Escuchando la solicitid  " + process.env.x);

  extraFuncion();
});

console.log("after server");
*/


//POSTMAN ======> SERVER (NODE)