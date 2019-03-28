import React from 'react';
import axios from 'axios';
import SingleArticle from './singleArticle/singleArticle';
import StackGrid from "react-stack-grid";
import ClassNames from "./allArticles.module.css";
import ReactLoading from "react-loading";
import NoNetwork from '../../assets/images/NoNetwork.png';
class AllArticles extends React.Component {
  state = {
    articles: [],
    error:false,
  }


  getNews=articles=>{
    this.setState({ articles: articles });
  }

  componentDidMount() {
    axios
      .get('https://newsapi.org/v2/top-headlines?' +
        'country=us&'+
        'pageSize=40&'+
        'apiKey=1fe94e1f7eb747b3a5879a48ba736409')
      .then(response => {
        const articles = response.data.articles;
        console.log(articles);
        this.getNews(articles);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  render() {
    const articleState = this.state.articles;
    let result = this.state.error?<p className={ClassNames.loadingpage}><img className={ClassNames.NoNetworkimage} src={NoNetwork} alt = 'Summerize'/>News can't be loaded<br/>Network Issue</p>:<div className={ClassNames.loadingpage}>Loading...<br/><ReactLoading type="bubbles" color="#777" /></div>;
    if (articleState && articleState.length > 2){
      result =<StackGrid
      columnWidth={300}
      monitorImagesLoaded={true}>
      {this.state.articles.map((arg, i) => {
        return <SingleArticle key={i} articles={arg} />;
      })}
    </StackGrid>
    }
    return (
      <div className={ClassNames.body}>
      {result}
      </div>

    );
  }
}

export default AllArticles;