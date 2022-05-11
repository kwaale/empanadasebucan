const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3001;
const router = require('./src/routes');
const mongoose = require('mongoose');

//conexion Monoose
mongoose.connect()
// settings
app.set('port', process.env.PORT || PORT);
// middeeleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// routes
app.use('/', router);
// inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}!`);
});
