const express = require('express');
const { dbConnection } = require('./database/config')

const app = express();

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'server ok'
    });
});


app.listen(3000, () =>{
    console.log('Servidor en puerto 3000')
});

//dbUser
//id4lvt8EImo2rlTH