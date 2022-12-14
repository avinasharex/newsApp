
  const NewsItem = (props)=> {

    let { title, description, imageUrl, newsUrl, author, date, name } = props;
    return (
      <>
        <div className='my-4'>
          <div className="card">
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              top: 0,
              right: 0
            }}>
              <span className="badge rounded- bg-danger" >
                <span className="">{name}</span>
              </span>
            </div>

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

export default NewsItem
