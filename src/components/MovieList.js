import React from 'react'
import Movie from './Movie'

export default function Movielist({movies}) {

    return (
        <div className="movieList">
            {movies && movies.map(movie => (
                <Movie key={movie.id} movie= {movie}/>
            ))}
        </div>
    )
}
