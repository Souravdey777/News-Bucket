import React from 'react';
import axios from 'axios';
import SingleArticle from '../singleArticle/singleArticle';
import StackGrid from "react-stack-grid";
import ReactLoading from "react-loading";
import ClassNames from "./allArticles.module.css";

class AllArticles extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios
      .get('https://newsapi.org/v2/top-headlines?' +
        'country=in&' +
        'apiKey=1fe94e1f7eb747b3a5879a48ba736409')
      .then(res => {
        const articles = res.data.articles;

        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={ClassNames.body}>
        <StackGrid
          columnWidth={300}
          monitorImagesLoaded={true}>
          {this.state.articles.map((arg, i) => {
            return <SingleArticle key={i} articles={arg} />;
          })}
        </StackGrid>
      </div>

    );
  }
}

export default AllArticles;