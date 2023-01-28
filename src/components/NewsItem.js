import React from 'react'
import imageNotAvailable from '../assets/Image_not_available.png'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: 'flex', right: 0, justifyContent: 'flex-end', position: 'absolute' }}>
                    <span className='badge rounded-pill bg-danger' >{source}</span>
                </div>
                <img src={imageUrl ? imageUrl : imageNotAvailable} className="card-img-top" alt="..." width='414px' height='232px' />
                <div className="card-body" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small>By {author ? author : 'unknown'} on {new Date(date).toLocaleString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
