import React, { Component } from 'react';
import _0NewsItem from './_0NewsItem';

export class _0api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    // componentDidMount() {
    //     // Fetch data when the component mounts
    //     this.apiFetch();
    // }

    apiFetch = async () => {
        const apiKey = '14bc42826e664185a097a05cc18bfa5a'; // Replace with your actual API key
        const url = `https://newsapi.org/v2/everything?q=apple&from=2023-07-07&to=2023-07-07&sortBy=popularity&apiKey=${apiKey}&pageSize=3`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ articles: data.articles });
            console.log(this.state.articles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {

        const {articles} = this.state
        return (
            <div>
                <button onClick={()=>{this.apiFetch()}} >Fetch News</button>
                
                <div className='row'>
                {articles.map(element=>(
                    <div className='col-md-4 my-1' key={element.url}>
                    <_0NewsItem  
                    
                    title={element.title ? element.title.slice(0, 30) : ''}
                    description = {element.description ? element.description.slice(0, 75) : ''}
                    imgUrl = {element.urlToImage}
                    newsUrl = {element.url}
                    style = {{height:'200px' , width:'300px'}}

                    />
                    </div>
                ))}
                </div>
               
            </div>
        );
    }
}

export default _0api;
