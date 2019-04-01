import React, { Component } from 'react';
import './App.css';
import AllArticles from './components/allArticles/allArticles';
import Footer from './components/footer/footer';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <AllArticles />
        <Footer/>
      </div>
    );
  }
}

export default App;
