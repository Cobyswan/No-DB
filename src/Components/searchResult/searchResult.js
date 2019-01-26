import React, {Component} from 'react'
import ('../../App.css')

class searchResults extends Component {
    render(){
        return (
            <div>
                <div>
                    <button className='searchButton' onClick={() => this.props.searchFN()}>Search</button>
                </div>
                <div className='searchResultsContainer'>
                    {this.props.mangaReturn.map((manga) => {
                        return(
                            <div className='searchResults' key={manga.mal_id}>
                                <h1>{manga.title}</h1>
                                <p>{manga.synopsis}</p>
                                <img src={manga.image_url}/>
                            </div>
                        )
                    })}
                </div>
            </div>     
        )
    }
}

export default searchResults;