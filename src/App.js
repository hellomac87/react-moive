import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title : "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title :"Full Metal Jacket",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  {
    title:"Oldboy",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    title:"Star Wars",
    poster:"https://lh3.googleusercontent.com/7j-fXktVQTihEeJGepheXeVeaHnrFcQ4SwmFb0jxPNj2ceRVKNhBTWoMynp0HyDHrQ53=w200-h300"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie,index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
