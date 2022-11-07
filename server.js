const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const corsOptions = {
    origin: 'http://localhost:5001'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({ message: 'Connected...'});
});

const db = require('./src/models');
db.sequelize.authenticate().then(() => {
    console.log("Connected to DB.");
}).catch(err => {
    console.log('Unable to connect to db.', err);
});

require('./src/routes/apiData')(app);

const PORT = 8091;
app.listen(PORT, "0.0.0.0");