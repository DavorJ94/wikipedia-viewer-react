import React from "react";

export default function SearchBox({
  articles,
  searchQuery,
  handleQueryChange,
  handleReset,
}) {
  return (
    <div
      className="container"
      style={
        articles.length > 0
          ? { position: "relative", margin: "1em auto" }
          : { position: "absolute", margin: "auto" }
      }
    >
      <input
        type="text"
        value={searchQuery}
        placeholder="Search..."
        onChange={handleQueryChange}
      />
      <div className="search" onClick={handleReset}></div>
    </div>
  );
}
