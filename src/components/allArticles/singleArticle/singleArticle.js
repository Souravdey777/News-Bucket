import React, { Component } from 'react';
import ClassNames from './singleArticle.module.css';

class SingleArticle extends Component {
  
  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }
  
  render() {
    return (
      <a className={ClassNames.a} href={this.props.articles.url}>
        <div className={ClassNames.Article}>
          <div>
            {this.props.articles.urlToImage ? <img className={ClassNames.image} src={this.props.articles.urlToImage} alt={this.props.articles.title} title={this.props.articles.title} /> : null}
          </div>
          <div>
            {this.props.articles.title ? <div className={ClassNames.Header}>{this.props.articles.title}</div> : null}
            {this.props.articles.author ? <div className={ClassNames.author}>{this.props.articles.author}</div> : null}
            {this.props.articles.description ? <div className={ClassNames.description}>{this.props.articles.description}</div> : null}
            {this.props.articles.publishedAt ? <div className={ClassNames.publishedAt}>{this.formatDate(this.props.articles.publishedAt)}</div> : null}
          </div>
        </div>
      </a>
    );
  }
}

export default SingleArticle;
