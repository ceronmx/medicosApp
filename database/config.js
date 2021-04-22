const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
          });

          console.log('Conexión exitosa con la BD');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar con la BD. Revise los logs');
    }

};

module.exports = {
    dbConnection
}