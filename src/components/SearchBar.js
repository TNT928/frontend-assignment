import {React, useState} from 'react';

export default function Searchbar({onSubmit, onChange}) {
  return (
    <>
      <form action="submit" onSubmit={onSubmit}>
        <i className="fa fa-solid fa-magnifying-glass">
          {' '}
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={onChange}
          />
        </i>
      </form>
    </>
  );
}
