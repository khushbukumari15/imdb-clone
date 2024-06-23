const mongoose = require('mongoose');

let connection;

const dbConnection = async function () {
    try {
        const uri = process.env.DB_URI;
        const dbName = process.env.DB_NAME;
        
        if (!connection) {
            connection = await mongoose.connect(uri, {
                dbName: dbName,
                // useNewUrlParser: true,
                // useUnifiedTopology: true
            });
            console.log("Database connection established");
        }

        return connection.connection.db;
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

module.exports = dbConnection
