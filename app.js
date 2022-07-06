require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000


/**
 * Aqui invocamos las rutas
 */

/**
 * TODO localhost/api/______
 */

app.use("/api", require("./routes"))

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)    
})

dbConnect()
