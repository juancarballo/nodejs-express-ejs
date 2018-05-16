
//requerimos los modulos express y morgan
const express = require('express');
const morgan = require('morgan');

//requiriendo rutas
const routes = require('./routes');

//creando mi app como servidor NodeJs express
const app = express();

app.set('appName', 'Mi primer servidor');
app.set('countryHost', 'Costa Rica');

app.set('views', __dirname + '/views');

//usando el motor de vista ejs para renderizar la salida de las rutas
app.set('view engine', 'ejs');
//usando el modulo morgan para obtener informacion de la peticiones entrantes
app.use(morgan('dev'));
app.use(routes);

//ruta en caso que una ruta no exista (siempre debe ser la ultima ruta)
app.get('*', (req, res) => {
  res.end('Esta ruta no existe');
})

//escucha de puerto 3000
app.listen(3000, function () {
  console.log(`Servidor  ${app.get('appName')} funcionando 
  \nPaís donde se aloja el host ${app.get('countryHost')}`);
});

