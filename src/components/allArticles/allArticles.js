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
    articles: [],
    error: false,
    query: '',
    url: 'https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328'
  }

  getNews = (url) => {
    axios
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

  componentDidMount() {
    this.getNews(this.state.url);
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ query: event.target.value }, () => {
      console.log(this.state.query);
      this.setState({ url: `https://newsapi.org/v2/everything?q=${this.state.query}&language=en&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328` }, () => {
        console.log(this.state.url);
        this.getNews(this.state.url);
      });
    });
    if (event.target.value === '') {
      this.setState({ url: 'https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328' }, () => {
        console.log(this.state.url);
        this.getNews(this.state.url);
      });
    }

  }


  render() {
    const articleState = this.state.articles;
    let result = this.state.error ? <p className={ClassNames.loadingpage}><img className={ClassNames.NoNetworkimage} src={NoNetwork} alt='Summerize' />News can't be loaded</p> : <div className={ClassNames.loadingpage}>Loading...<br /><ReactLoading type="bubbles" color="#777" /></div>;
    if (articleState && articleState.length > 1) {
      result = <StackGrid
        columnWidth={300}
        monitorImagesLoaded={true}>
        {this.state.articles.map((arg, i) => {
          return <SingleArticle key={i} articles={arg} />;
        })}
      </StackGrid>
    }
    else if (articleState.length === 0 && this.state.query !== '') {
      result = <p className={ClassNames.loadingpage}>No Search Result Found</p>
    }
    return (
      <div className={ClassNames.body}>
        <Header clicked={this.Query} value={this.state.query} handleChange={this.handleChange} />
        {result}
      </div>


    );
  }
}

export default AllArticles;