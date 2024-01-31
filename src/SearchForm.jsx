import React from "react";
import { UseGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = UseGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) {
      return;
    }
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
