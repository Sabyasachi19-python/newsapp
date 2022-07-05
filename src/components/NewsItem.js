import React from 'react'
import newslogo from './news.webp'
const NewsItem = (props) => {
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-success">{props.source}</span>
                </div>
                <img src={props.imageUrl ? props.imageUrl : newslogo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-danger">By {props.author ? props.author : "unknown"} on {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.newsURL} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                </div>
            </div>
            <img src="./news.webp" alt="" />
        </div >
    )
}

export default NewsItem
