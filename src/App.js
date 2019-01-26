import React, { Component } from 'react';
import './App.css';
import Search from './Components/search/search';
import PostWindow from './Components/postWindow/postWindow';


class App extends Component {

  render() {
    return (
      <div className='flex-container'>
        <div className='headerContainer'>
          <header className='header'>
            <span className='headerTitle'>
              
            </span>
          </header>
        </div>
        <main>
          <section className='searchWindowContainer'>
            <div className='searchWindow'>
              <Search />
            </div>
          </section>
          <section className='postWindowContainer'> 
            <div className='postWindow'>
              <PostWindow />
            </div>
          </section>
        </main>     
      </div>
    );
  }
}

export default App;
