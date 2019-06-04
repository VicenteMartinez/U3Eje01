//Pendiente importar app
const app = require('../server');


//CONFIGURANDO EL SERVIDOR HTTP
const server = require('http').Server(app);
const port = 3002
;

//EJECUTANDO EL SERVIDOR
server.listen(port);
console.log(`Running on port ${port}`);
