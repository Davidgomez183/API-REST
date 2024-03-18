const express = require('express');
// Servidor con express
const app = express();
// Puerto de eschucha
const port = 3000;
// MongoDB
const mongoose = require('mongoose');
// Para leer datos del cuerpo
const bodyParser = require('body-parser');

// Importar el middleware de autenticación
const { authenticateToken } = require('./authentication');

//Cargar rutas
const hello_routes = require("./routes/hello");
const create_routes = require("./routes/productCreate");
const list_route = require("./routes/productList");
const delete_route = require("./routes/productDelete");
const update_route = require("./routes/productUpdate");
const getProduct_route = require("./routes/productGet");
const productSearch_route = require("./routes/productSearch");
// Indica a Express que sirva los archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Configurar el motor de plantillas Pug
app.set('view engine', 'pug');
// Directorio donde estaran las vistas views
app.set('views', __dirname + '/views'); // Establecer el directorio de las plantillas de vistas

// Configuración del middleware body-parser para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());
//Conectar a la base de datos //mongodb://127.0.0.1:27017/db_name
try {
  mongoose.connect('mongodb://127.0.0.1:27017/producte');
  console.log('La conexión a la base de datos funciona');


 
  app.use('/api/hello', hello_routes);

  app.use('/api/create', create_routes);

  app.use('/api/list', list_route);

  // Usa el enrutador para la ruta de eliminación
  app.use('/api/delete', authenticateToken, delete_route);

  app.use('/api/update', authenticateToken, update_route);

  app.use('/api/get', getProduct_route);
  
  app.use('/api/search', productSearch_route); 

  
  
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




