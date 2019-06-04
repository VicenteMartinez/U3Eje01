const bodyParser = require('body-parser');
const express = require('express');
const wagner = require('wagner-core');

require('./models/models')(wagner);

//Importar productRouter
const productRouter = require('./routers/product.router')(wagner);
const userRouter = require('./routers/user.router')(wagner);
const brandRouter = require('./routers/brand.router')(wagner);

//CONFIGURANDO SERVIDOR EXPRESS
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); //para acceder a los queryParams

app.use("/products",productRouter);

app.use("/users",userRouter);

app.use('/brands',brandRouter);


module.exports = app;
