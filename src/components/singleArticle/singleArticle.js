import React, { Component } from 'react';
import ClassNames from './singleArticle.module.css';

class SingleArticle extends Component {
  render() {
    console.log(this.props.articles);
    return (
      <a className={ClassNames.a} href={this.props.articles.url}>
        <div className={ClassNames.Article}>
          <div>
            {this.props.articles.urlToImage ? <img className={ClassNames.image} src={this.props.articles.urlToImage} alt=' ' title={this.props.articles.title} /> : null}
          </div>
          <div>
            {this.props.articles.title ? <div className={ClassNames.Header}>{this.props.articles.title}</div> : null}
            {this.props.articles.author ? <div className={ClassNames.author}>{this.props.articles.author}</div> : null}
            {this.props.articles.description ? <div className={ClassNames.description}>{this.props.articles.description}</div> : null}
          </div>
        </div>
      </a>
    );
  }
}

export default SingleArticle;
