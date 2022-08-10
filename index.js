const path = require('path');
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const db = require('./src/config/db');
const route = require('./routes/index');
const hbs  = require('express-handlebars');
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

const bodyParser = require('body-parser')
app.use( bodyParser.json() );
 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'));

app.set('views', path.join(__dirname, 'resources/view'));

app.get('/', (req, res) => {
  res.send('Đã login!')
});

db.connect();
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});