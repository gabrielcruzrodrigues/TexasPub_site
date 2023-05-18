const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

//definindo a pasta public
app.use(express.static('public'));

//definindo handlebars como template string
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//definindo o uso de json
// app.use(express.json());

//chamando rotas do routes.js
const routes = require('./routes/routes');

//midlewares para usar as rotas vindas do routes
app.use('/', routes);

app.listen(3000, () => {
    console.log('O servidor já esta rodando na porta: 3000');
});