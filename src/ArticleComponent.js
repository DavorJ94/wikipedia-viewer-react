import React from "react";

export default function ArticleComponent({ data }) {
  return (
    <div className="article">
      <a
        className="articleLink"
        href={`https://en.wikipedia.org/?curid=${data.pageid}`}
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="title">{data.title}</h3>
        <p className="text-content">{data.extract}</p>
      </a>
    </div>
  );
}
