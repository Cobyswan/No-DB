import React, { Component } from "react";
import "./App.css";
import Search from "./Components/search/search";
import PostWindow from "./Components/postWindow/postWindow";
import Favorites from "./Components/Favorites/Favorites"

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="headerContainer">
          <header className="header">
            <span className="headerTitle" />
          </header>
        </div>
        <main>
          <section className="searchWindowContainer">
            <div className="searchWindow">
              <Search />
            </div>
            <div>
              <Favorites />
            </div>
          </section>
          <section className="postWindowContainer">
            <div className="postWindow">
              <PostWindow />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
