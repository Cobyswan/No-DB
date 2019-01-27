const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const controller = require("./controller/controller")
const axios = require('axios')


app.use(bodyParser.json());

app.set('json', 2);

app.get('/api/posts/', controller.read)
app.post('/api/post/', controller.create)
app.delete('/api/post/:id', controller.delete)
app.put('/api/posts/:id', controller.update)
app.get('/api/manga/:name', controller.search)
app.get('/api/favorites', controller.readFav)
 app.post('/api/favorite', controller.newFav)
app.delete('/api/favorite/:favID', controller.deleteFav)
    

const port = 4000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`))