const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mC = require("./controller/controller")
const axios = require('axios')


app.use(bodyParser.json());

app.set('json', 2);

app.get('/api/posts/', mC.read)
app.post('/api/post/', mC.create)
app.delete('/api/post/:id', mC.delete)
app.put('/api/posts/:id', mC.update)
app.get('/api/manga/:name', mC.search)
    

const port = 4000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`))