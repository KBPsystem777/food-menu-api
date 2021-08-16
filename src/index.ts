/**
 * Required External Modules
 */


import * as dotenv from 'dotenv'
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')


dotenv.config()
/**

 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()
/**
 *  App Configuration
 */


app.use(helmet())
app.use(cors())
app.use(express.json())


/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})