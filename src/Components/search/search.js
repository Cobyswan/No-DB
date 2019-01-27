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
    };

    this.searchForManga = this.searchForManga.bind (this);
  }

  handleInputChange (val) {
    this.setState ({name: val});
  }

  searchForManga () {
    axios.get (`/api/manga/${this.state.name}`).then (res => {
      this.setState ({mangaReturn: res.data.results});
    });
  }

  render () {
    return (
      <div className="searchContainer">
        <div className="searchInputAndButton">
          <input
            placeholder="Enter a manga.."
            onChange={e => this.handleInputChange (e.target.value)}
          />
          <button
            className="searchButton"
            onClick={() => this.searchForManga ()}
          >
            Search
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
        </div>
      </div>
    );
  }
}

export default Search;
