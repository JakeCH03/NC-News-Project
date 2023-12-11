import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import ArticlesList from "./Components/Articles/ArticlesList";
import Loading from "./Components/Loading";
import DisplaySingleArticle from "./Components/Single Article/Article/DisplaySingleArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/home"} />} />
        <Route path={"/"} elemenet={<Loading />} />
        <Route path={"/home"} element={<ArticlesList />} />
        <Route
          path={"article/:article_id"}
          element={<DisplaySingleArticle />}
        />
      </Routes>
    </>
  );
}

export default App;
