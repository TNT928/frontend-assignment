import {React, useState} from 'react';
import axios from 'axios';
import Modal from './Modal';

export default function Movie({movie}) {
  const [details, setDetails] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const getDetails = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=7315ec59ea2264da1fa4f4eb8d647853&language=en-US`
      )
      .then((movie) => {
        setDetails(movie.data);
        setModalOpen(true)
      });
  };

  return (
    <>
      {modalOpen && (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} details={details} movie={movie} />
      )}
      <div className="moviecard">
        <span className="score">{movie.vote_average}</span>
        <img
          onClick={getDetails}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
        <h2>{movie.title}</h2>
      </div>
    </>
  );
}
