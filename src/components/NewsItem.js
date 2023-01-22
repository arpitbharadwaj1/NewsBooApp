import React, { Component } from 'react'
export default class NewsItem extends Component {



    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        let backupImage = 'https://images.hindustantimes.com/tech/img/2023/01/22/1600x900/space-624054_1280_1674038784796_1674362814076_1674362814076.jpg';
        return (
            <div className='my-3'>
                <div className="card">
                    <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{ left: '90%', zIndex: '1'}}>{source}</span>
                    <img src={imageUrl?imageUrl: backupImage} className="card-img-top" alt="..." width='414px' height='232px'/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {author?author:'unknown'} on {new Date(date).toLocaleString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
