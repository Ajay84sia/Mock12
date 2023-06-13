const express = require('express');
const { connection } = require("./db")
const { jobRouter } = require('./routes/Job.routes');
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Basic API Endpoint")
})

app.use("/jobs", jobRouter)


app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("Connected to the Database server")
    } catch (error) {
        console.log(error)
        console.log("Couldn't connect to the Database server")
    }

    console.log(`Server started on port ${process.env.port}`)
})