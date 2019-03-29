import React from 'react';
import axios from 'axios';
import SingleArticle from './singleArticle/singleArticle';
import StackGrid from "react-stack-grid";
import ClassNames from "./allArticles.module.css";
import ReactLoading from "react-loading";
import NoNetwork from '../../assets/images/NoNetwork.png';
import Header from '../header/header';
class AllArticles extends React.Component {
  state = {
    key:`1fe94e1f7eb747b3a5879a48ba736409`,
    articles: [],
    error:false,
    query:null,
    url:'https://newsapi.org/v2/top-headlines?country=in&apiKey=1fe94e1f7eb747b3a5879a48ba736409'
  }
  
  getNews=(url)=>{axios
    .get(url)
    .then(response => {
      const articles = response.data.articles;
      console.log(articles);
      this.setState({ articles: articles });
    })
    .catch(error => {
      console.log(error);
      this.setState({ error: error });
    });
  }
  
  componentWillMount() {
    this.getNews(this.state.url);
  }

  handleChange=(event)=> {
    console.log(event.target.value);
    this.setState({query: event.target.value});
    console.log(this.state.query);
    this.setState({url:`https://newsapi.org/v2/everything?q=${this.state.query}&language=en&apiKey=1fe94e1f7eb747b3a5879a48ba736409`})

    this.getNews(this.state.url);
    console.log(this.state.url);
  }



    Query(){
      
    }

  render() {
    const articleState = this.state.articles;
    let result = this.state.error?<p className={ClassNames.loadingpage}><img className={ClassNames.NoNetworkimage} src={NoNetwork} alt = 'Summerize'/>News can't be loaded</p>:<div className={ClassNames.loadingpage}>Loading...<br/><ReactLoading type="bubbles" color="#777" /></div>;
    if (articleState && articleState.length > 1){
      result =<StackGrid
      columnWidth={300}
      monitorImagesLoaded={true}>
      {this.state.articles.map((arg, i) => {
        return <SingleArticle key={i} articles={arg} />;
      })}
    </StackGrid>
    }
    return (
      <div>
        <Header clicked={this.Query} value={this.state.query} handleChange={this.handleChange} />
      <div className={ClassNames.body}>
      {result}
      </div>
      </div>
      

    );
  }
}

export default AllArticles;