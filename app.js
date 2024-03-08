const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Cargar rutas
const hello_routes = require("./routes/hello");
const create_routes = require("./routes/product");


// Configurar el motor de plantillas Pug
app.set('view engine', 'pug');
app.set('views', __dirname + '/views'); // Establecer el directorio de las plantillas de vistas

// Configuración del middleware body-parser para analizar el cuerpo de las solicitudes en formato JSON
//mongodb://127.0.0.1:27017/db_name
app.use(bodyParser.json());
//Conectar a la base de datos
try {
  mongoose.connect('mongodb://127.0.0.1:27017/producte');
  console.log('La conexión a la base de datos funciona');

  app.use('/api/hello', hello_routes);

  app.use('/api/create', create_routes);

  // Manejo de errores 404
  app.use((req, res) => {
    res.status(404).render('error', { texto: 'ERROR 404: Página no encontrada' });
  });

  app.listen(port, () => {
    console.log(`API REST escuchando en el puerto ${port}`);
  });
} catch (error) {
  console.error('Error al conectar a la base de datos:', error);
}




