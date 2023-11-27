import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}
  


function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Pure relaxation</h2>
      <label htmlFor="name">date:</label>
      <input type="text" id="name" />
      <a href="https://wellnest.me/standort/hamburg/" className="article__link">book now!</a>
    </article>
  );
}
