import React, { Component } from 'react';
import './App.css';
import AllArticles from './components/allArticles/allArticles';
import Header from './components/header/header';

class App extends Component {
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
