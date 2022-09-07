import React from "react";

function Search({ searchVal, onChange }) {

  function handleInput (event) {
    onChange(event);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchVal} onChange={handleInput} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
