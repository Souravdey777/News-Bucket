import React, { Component } from 'react';
import ClassNames from './singleArticle.module.css';
import shareimg from '../../../assets/images/share.png';

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

  share(){
    console.log("clicked")
    if (navigator.share) {
      navigator.share({
          title: 'Summarize: The News App',
          text: 'Check out this news website',
          url: 'https://souravdey777.github.io/News-Bucket/',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }
  
  render() {
    return (
      <div className={ClassNames.Article}>
      <a className={ClassNames.a} href={this.props.articles.url}>
          <div>
            {this.props.articles.urlToImage ? <img className={ClassNames.image} src={this.props.articles.urlToImage} alt={this.props.articles.title} title={this.props.articles.title} /> : null}
          </div>
          <div>
            {this.props.articles.title ? <div className={ClassNames.Header}>{this.props.articles.title}</div> : null}
            {this.props.articles.author ? <div className={ClassNames.author}>{this.props.articles.author}</div> : null}
            {this.props.articles.description ? <div className={ClassNames.description}>{this.props.articles.description}</div> : null}
            
            
          </div>
      </a>
      <div className={ClassNames.articlefooter}>
      <img onClick={this.share} src={shareimg} alt="Share it"/>
        {this.props.articles.publishedAt ? <div className={ClassNames.publishedAt}>
            {this.formatDate(this.props.articles.publishedAt)}</div> : null}
            
      </div>
      </div>
    );
  }
}

export default SingleArticle;
