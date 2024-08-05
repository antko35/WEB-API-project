import { on } from 'process';
import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent, FormEvent } from 'react'
import './Search.css'

interface Props {
  onSearchSubmit : (e : SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange : (e : ChangeEvent<HTMLInputElement>) => void;
}

const Search : React.FC<Props> = ({
  onSearchSubmit, 
  search, 
  handleSearchChange
}: Props) : JSX.Element => {
  return (
    <section className="section-container">
  <div className="form-wrapper">
    <form className="form" onSubmit={onSearchSubmit}>
      <input
        className="search-input"
        id="search-input"
        placeholder="Search companies"
        value={search}
        onChange={handleSearchChange}
      ></input>
    </form>
  </div>
</section>
  )
}

export default Search