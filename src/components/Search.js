import React from "react";

function Search({ searchVal, onChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchVal} onChange={onChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
