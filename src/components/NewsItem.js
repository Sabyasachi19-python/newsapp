import React, { Component } from 'react'
import newslogo from './news.webp'
//api-key: 25f116dbfc264c329d6bf8c5cceea572
export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsURL, author, date, source} = this.props;
        return (
            <div className="my-3">
                <div className="card"> 
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: '90%', zIndex:1}}>{source}</span>
                    <img src={imageUrl?imageUrl:newslogo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsURL} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
                </div>
                <img src="./news.webp" alt="" />
            </div>
        )
    }
}

export default NewsItem
