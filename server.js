const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./connectors/MongoConnector');
require('dotenv').config();
const { PORT } = require('./config/config');
app.use(bodyParser.json());

db.then(()=>console.log('DataBase connected')).catch(()=>console.log("no es posible conectarse a mongo db"));

app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`listen port ${PORT}`)
});
