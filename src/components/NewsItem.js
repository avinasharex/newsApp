import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, name } = this.props;
    return (
      <>
        <div className='my-4'>
          <div className="card">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIdex: 1, marginLeft: -50 }}>
              <span className="">{name}</span>
            </span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author ? author : 'unknown'} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem
