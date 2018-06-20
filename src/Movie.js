import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
            <MoviePoster />
            <h1>hello this is a moive</h1>
            </div>
        )

    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="http://static.tvtropes.org/pmwiki/pub/images/the-hunger-games-poster_3961.jpg" />
        )
    }
}

export default Movie;