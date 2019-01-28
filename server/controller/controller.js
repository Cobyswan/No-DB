const axios = require('axios')
let posts = [];
let id = 0;
let mangaSearchResults = [];
mangaName = '';
let favoritesArray = [];
let favID = 0;



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
 
    },
    readFav: (req, res) => {
        res.status(200).json(favoritesArray);
    },
    addFav: (req, res) => {
        let {fav} = req.body
        favoritesArray.push ({favID, fav})
        favID++
        console.log(req.body, 'req.body')
        console.log(favoritesArray, 'favoritesarry')
        res.status(200).json(favoritesArray)
    },
    deleteFav: (req, res) => {
        let index = favoritesArray.findIndex((favorite) => favorite.favID == req.params.favID)
        if(index === -1){
            return favoritesArray;
        }
        else{
            favoritesArray.splice(index, 1)
        }
    } 

}