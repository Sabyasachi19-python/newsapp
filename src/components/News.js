import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    console.log('Hi, this is constructor!');
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  handlePreviousClick = async () => {
    console.log('previous');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25f116dbfc264c329d6bf8c5cceea572&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed_data = await data.json();
    console.log(parsed_data);
    this.setState({
      page: this.state.page - 1,
      articles: parsed_data.articles,
      loading: false
    });
  }

  handleNextClick = async () => {
    console.log('next');
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25f116dbfc264c329d6bf8c5cceea572&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsed_data = await data.json();
      console.log(parsed_data);
      this.setState({
        page: this.state.page + 1,
        articles: parsed_data.articles,
        loading: false
      });
    }
  }
  async componentDidMount() {
    console.log("CDM");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25f116dbfc264c329d6bf8c5cceea572&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed_data = await data.json();
    console.log(parsed_data);
    this.setState({ articles: parsed_data.articles, totalResults: parsed_data.totalResults, loading: false });
  }
  render() {
    console.log("Render");
    return (
      <div className="container my-3">
        <h1 className="text-center">News SR Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem imageUrl={element.urlToImage} title={element.title ? element.title : ""} description={element.description ? element.description : ""} newsURL={element.url} />
            </div>
          })}
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous Page</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next Page &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
