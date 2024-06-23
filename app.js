const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

const express = require('express');
const healthRouter = require('./routes/health.route')
const app = express();
const bodyParser = require('body-parser');

const dbCall = require('./dbLayer/dbConnection');


const port = process.env.PORT 

app.use(bodyParser.json())
app.use(healthRouter)


async function startServer() {
    try {
        await dbCall()

        app.listen(port, async()=> {
            console.log(`app is listening on ${port}`)
        })
    
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

startServer();