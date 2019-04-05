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
    toquery: '',
    forCategory: '',
    forCountry: 'country=in',
    query: '',
    loadingcheck: true,
    CountryValue: 'in',
    CategoryValue: 'general',
  }

  getNews = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?${this.state.forCountry}${this.state.toquery}${this.state.forCategory}&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328`)
      .then(response => {
        const articles = response.data.articles;
        console.log();
        this.setState({ articles: articles, loadingcheck: true });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  componentDidMount() {
    this.getNews();
  }

  handleChange = (event) => {
    this.setState({ loadingcheck: false });
    this.setState({ query: event.target.value }, () => {
      console.log(this.state.query);
      this.setState({ toquery: `&q=${this.state.query}` }, () => {
        console.log(this.state.toquery);
        this.getNews();
      });
    });

    if (this.state.query === '') {
      this.setState({ toquery: '' }, () => {
        console.log(this.state.url);
        this.getNews();
      });
    }

  }



  handleCategoryDropdownChange = (event) => {
    this.setState({ loadingcheck: false });
    console.log(event.target.value);
    this.setState({ CategoryValue: event.target.value }, () => {
      console.log(this.state.CategoryValue);
      this.setState({ forCategory: `&category=${this.state.CategoryValue}` }, () => {
        console.log(this.state.forCategory);
        this.getNews();
      });
    });
  }

  handleCountryDropdownChange = (event) => {
    this.setState({ loadingcheck: false });
    console.log(event.target.value);
    this.setState({ CountryValue: event.target.value }, () => {
      console.log(this.state.CountryValue);
      this.setState({ forCountry: `country=${this.state.CountryValue}` }, () => {
        console.log(this.state.forCountry);
        this.getNews();
      });
    });
  }


  render() {
    const articleState = this.state.articles;
    let result = this.state.error ? <p className={ClassNames.loadingpage}><img className={ClassNames.NoNetworkimage} src={NoNetwork} alt='Summerize' />News can't be loaded</p> : <div className={ClassNames.loadingpage}>Loading...<br /><ReactLoading type="bubbles" color="#777" /></div>;
    if (articleState && articleState.length > 1 && this.state.loadingcheck) {
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
        <Header
          selectedValueCountry={this.props.CountryValue}
          handleChangeCountry={this.handleCountryDropdownChange}
          selectedValueCategory={this.state.CategoryValue}
          handleCategoryChange={this.handleCategoryDropdownChange}
          value={this.state.query}
          handleChange={this.handleChange} />
        {result}
      </div>


    );
  }
}

export default AllArticles;