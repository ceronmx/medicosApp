const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')

const app = express();
app.use(cors());
dbConnection();

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'server ok'
    });
});


app.listen(process.env.PORT, () =>{
    console.log('Servidor en puerto ', process.env.PORT);
});
