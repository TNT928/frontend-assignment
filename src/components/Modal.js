import {React, useState} from 'react';
import moment from 'moment';

export default function Modal({details, movie, modalOpen, setModalOpen}) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const date = moment(movie.release_date).format('MMMM Do YYYY');

  console.log(date);

  return (
    <>
      <div className="modal">
        <span className="close" onClick={closeModal}>
          x
        </span>
        <div className="modal-right">
          <h1>{details.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="movie poster"
          />
        </div>
        <div className="modal-left">
          <h2>
            <span style={{fontWeight: 'bold'}}>Relase date :</span> {date}
          </h2>
          <p>{movie.overview}</p>
          <p>
            <span style={{fontWeight: 'bold'}}>{movie.vote_average}</span>/{' '}
           ({movie.vote_count}) total votes
          </p>
        </div>
      </div>
    </>
  );
}
