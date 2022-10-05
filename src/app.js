const express = require('express');

const db = require('./utils/database')

const app = express()

const port = 8000

db.authenticate()
    .then(() => console.log('DB Authentication Succesfully') )
    .catch((err) => console.log(err))



app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
