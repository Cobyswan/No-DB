import React, { Component } from 'react';
// import SearchResults from '../searchResult/searchResult';
import axios from 'axios'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state ={
            name: '',
            mangaReturn: []
        }

        this.searchForManga = this.searchForManga.bind(this)
    }

    handleInputChange(val){
        this.setState({name: val})
    }

    searchForManga(){
        axios.get(`/api/manga/${this.state.name}`).then((res) => {
            this.setState({mangaReturn: res.data.results})
        })
    }

    render(){
        return (
            <div className='searchContainer'>  
                <div>
                    <input onChange={(e) => this.handleInputChange(e.target.value)}/>
                </div>
                <div className='searchButtonContainer'>
                    <button className='searchButton' onClick={() => this.searchForManga()}>Search</button>
                </div>
                <div className='searchResultsContainer'>
                    {this.state.mangaReturn.map((manga) => {
                        return(
                            <div className='searchResults' key={manga.mal_id}>
                                <h1>{manga.title}</h1>
                                <img src={manga.image_url}/>
                                <p>{manga.synopsis}</p>
                            </div>
                        )
                    })}
                </div>
            </div> 
        )
    }
}

export default Search