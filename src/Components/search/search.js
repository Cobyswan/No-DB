import React, {Component} from 'react';
// import SearchResults from '../searchResult/searchResult';
import axios from 'axios';
import Favorites from '../Favorites/Favorites'

class Search extends Component {
  constructor (props) {
    super (props);

    this.state = {
      name: '',
      mangaReturn: [],
      favorites: []
    };

    this.searchForManga = this.searchForManga.bind (this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  
  componentDidMount () {
    axios.get (`/api/favorites`).then (res => {
      this.setState ({favorites: res.data});
    });
  }

  handleInputChange (val) {
    this.setState ({name: val});
  }

  searchForManga () {
    axios.get (`/api/manga/${this.state.name}`).then (res => {
      this.setState ({mangaReturn: res.data.results});
      console.log(this.state.mangaReturn)
    });
  }

  addToFavorites () {
    axios.post (`/api/favorite/`, {fav: this.state.mangaReturn}).then (res => {
       this.setState({favorites: res.data.results})
       console.log(res.data.results)
       console.log(this.state.favorites)
    })
  }

  

  render () {
    return (
      <div className="searchContainer">
        <div className="searchInputAndButton">
          <input className='searchBar'
            placeholder="Enter a manga.."
            onChange={e => this.handleInputChange (e.target.value)}
          />
          <button
            className="searchButton"
            onClick={() => this.searchForManga ()}
          >
            Search
          </button>
          <button
            className="favoriteButton"
            onClick={() => this.addToFavorites()}
          >
            Add To Favorites
          </button>
        </div>
        <div className="searchResultsContainer">
          {this.state.mangaReturn.map (manga => {
            return (
              <div className="searchResults" key={manga.mal_id}>
                <h1 className="mangaTitleText">{manga.title}</h1>
                <img className="searchImg" src={manga.image_url} />
                <p className="synopsisText">{manga.synopsis}</p>
              </div>
            );
          })}
          <div className='favoritesContainer'>
          <h1 className='favTitle'>Favorites</h1>
          {this.state.favorites.map((manga) => {
            return (
              <div className='favorite' key={manga.mal_id}>
                <p>Title: {manga.title}</p>
                <p>URL: <a href={`${manga.url}`}>{manga.url}</a></p>
                <p>Score: {manga.score}</p>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    );
  }
}

export default Search;
