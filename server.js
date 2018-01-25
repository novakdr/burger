// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// HANDLEBARS DEPENDENCIES
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, () => {
    console.log('😺 app now listening at localhost: ' + PORT);
});