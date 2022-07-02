import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    console.log('Hi, this is constructor!');
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    console.log("CDM");
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=25f116dbfc264c329d6bf8c5cceea572';
    let data = await fetch(url);
    let parsed_data = await data.json();
    console.log(parsed_data);
    this.setState({articles:parsed_data.articles});
  }
  render() {
    console.log("Render");
    return (
      <div className="container my-3">
        <h1>News SR Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem imageUrl={element.urlToImage} title={element.title?element.title:""} description={element.description?element.description:""} newsURL={element.url} />
            </div>
          })}


        </div>
      </div>
    )
  }
}

export default News
