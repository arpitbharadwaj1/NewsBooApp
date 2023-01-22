import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    articles = []

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        // runs after the render method is completed..
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0bf5c1ab485b494480b5d3341f590796&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        
        })
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0bf5c1ab485b494480b5d3341f590796&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0bf5c1ab485b494480b5d3341f590796&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center mt-3'>NewsBoo - Top News Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
