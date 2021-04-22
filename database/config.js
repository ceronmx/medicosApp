const mongoose = require("mongoose");

const dbConnection = async () => {

    try {
        mongoose.connect('mongodb+srv://dbUser:id4lvt8EImo2rlTH@cluster0.nz2xc.mongodb.net/medicosDb', {
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