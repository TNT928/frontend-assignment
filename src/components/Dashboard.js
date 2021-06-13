import logo from '../images/logo.svg';
import {React, useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import '../app.css';
import MovieList from './MovieList';
import variable from '../../variable'

const key = variable.api.movieDBKey 

export function Dashboard(props) {
  const [search, setSearch] = useState('');
  const [movieResult, setMovieResult] = useState([]);

  useEffect(() => {
    getLatestMovies();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${search}`
      )
      .then((movie) => {
        setMovieResult(movie.data.results);
      });
    console.log(movieResult);
  };

  const getLatestMovies = async () => {
    const results = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    );
    setMovieResult(results.data.results);
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="Timescale" />
        <SearchBar onSubmit={onSubmit} onChange={onChange} />
      </header>
      <div className="borderBottom"></div>
      <MovieList movies={movieResult} />
    </>
  );
}
