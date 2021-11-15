require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {`Server started at port ${PORT}`})
    } catch (e) {
        console.log('ERROR: ' + e)
    }
}
start();