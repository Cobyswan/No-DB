const axios = require('axios')
let posts = [];
let id = 0;
let mangaSearchResults = [];
mangaName = '';



module.exports = {
    create: (req, res) => {
        let {text} = req.body
        posts.push({id, text})
        id++
        res.status(200).json(posts);
    },
    read: (req, res) => {
        res.status(200).json(posts)
    },
    update: (req, res) => {
        let {text} = req.body;
        let index = posts.findIndex((post) => post.id == req.params.id)
        posts[index] = {
            id: posts[index].id,
            text: text || post[index].text
        }
        res.status(200).json(posts)
    },
    delete: (req, res) => {

        let index = posts.findIndex((post) => {
           return post.id == req.params.id
        })
        if(index === -1){
            return posts
        }
        else{
            posts.splice(index, 1)
        }
        
        res.status(200).json(posts)
    },
    search: (req, res) => {
        let {name} = req.params
        axios.get(`http://api.jikan.moe/v3/search/manga/?q=${name}&page=1&limit=1`).then((response) => {
            mangaSearchResults = response.data
            res.status(200).json(mangaSearchResults)
        })
 
    }
}