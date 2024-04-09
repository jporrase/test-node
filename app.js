const express = require('express')
const { listen } = require('express/lib/application')
const app = express()

app.get('/', (req, res)=>{
    res.send('I just shipped my app to a container!')
})

app.listen(3000)