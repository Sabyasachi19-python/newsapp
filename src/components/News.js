import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  }
  capital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `News SR - ${this.capital(this.props.category)}`;
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d900950daa74a758cf96c8dc964ed41&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({ articles: this.state.articles.concat(parsed_data.articles), totalResults: parsed_data.totalResults });
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d900950daa74a758cf96c8dc964ed41&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsed_data = await data.json();
    console.log(parsed_data);
    this.props.setProgress(50);
    this.setState({ articles: parsed_data.articles, totalResults: parsed_data.totalResults, loading: false });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>News SR - Top {this.capital(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.title}>
                  <NewsItem imageUrl={element.urlToImage} title={element.title ? element.title : ""} description={element.description ? element.description : ""} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
