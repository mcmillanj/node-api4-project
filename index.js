require('dotenv').config()
// const path = require('path')
const express = require('express')
const server  = express()
const cors = require('cors')




server.use(cors())
server.use(express.json())

       
    const users = [
        {id: 1, username: 'ralph',password:" lambda" },
        {id: 2, username: 'barin',password:" lambda" },
        {id: 3, username: 'bazooka',password:" lambda" },
        {id: 4, username: 'bazille',password:" lambda" },
        {id: 5, username: 'barry',password:" lambda" },
        {id: 6, username: 'carl',password:" lambda" },
        {id: 7, username: 'brit',password:" lambda" },
        {id: 8, username: 'harry',password:" lambda" },
        {id: 9, username: 'mark',password:" lambda" },
    
    ]
    
    server.get('/api/users', (req, res) => {
        res.json(users)
        }) 


const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})