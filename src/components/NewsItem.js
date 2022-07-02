import React, { Component } from 'react'
//api-key: 25f116dbfc264c329d6bf8c5cceea572
export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsURL } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl?imageUrl:"https://www.bing.com/ck/a?!&&p=e89ad79e9cebbe531340ed03529ca11637760a3f25e4d251090e5a8a47393267JmltdHM9MTY1NjczMzk4NSZpZ3VpZD1kNWQyZTk5Mi04ZDg5LTRiZTAtOGFiOS0yNTMzMDEwZDU1MDkmaW5zaWQ9NTQ4OQ&ptn=3&hsh=1&fclid=7a5af3b5-f9ba-11ec-9f63-96c718fdd90f&u=a1L2ltYWdlcy9zZWFyY2g_cT1OZXdzJkZPUk09SVFGUkJBJmlkPTNFRkE3QTgwNjMxOTEwRTlGQUJFMUU4MDIzNTg0NkY1MjM1QjI5OUM&ntb=1"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
