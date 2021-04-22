import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import ArticleComponent from "./ArticleComponent";
import SearchBox from "./SearchBox";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = useCallback(
    async function (e) {
      if (searchQuery === "") return;
      if (e.key === "Enter" || e.keyCode === 13) {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=2&gsrsearch=${searchQuery}`
        );
        const data = await response.json();
        setArticles(Object.values(data.query.pages));
      }
    },
    [searchQuery]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleSubmit);

    return () => {
      document.removeEventListener("keydown", handleSubmit);
    };
  }, [handleSubmit]);

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleReset = () => {
    setSearchQuery("");
    setArticles([]);
  };

  return (
    <div className="App">
      <a
        className="random-article"
        href="https://en.wikipedia.org/wiki/Special:Random"
        target="_blank"
        rel="noreferrer"
        style={
          articles.length > 0
            ? { position: "relative", margin: "2em auto 1em auto" }
            : { position: "absolute", margin: "auto" }
        }
      >
        Random article
      </a>
      <SearchBox
        handleReset={handleReset}
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        articles={articles}
      />
      <div className="articles">
        {articles?.map((article) => {
          return <ArticleComponent key={article.index} data={article} />;
        })}
      </div>
    </div>
  );
}

export default App;
