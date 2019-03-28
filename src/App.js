import React, { Component } from 'react';
import './App.css';
import AllArticles from './components/allArticles/allArticles';
import Header from './components/header/header';

class App extends Component {
  state = {
    articles: [],
    error:false,
    query:null,
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <AllArticles />
      </div>
    );
  }
}

export default App;
