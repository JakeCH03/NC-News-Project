import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import ArticlesList from "./Components/Articles/ArticlesList";
import Loading from "./Components/Loading";
import DisplaySingleArticle from "./Components/Single Article/Article/DisplaySingleArticle";
import { UserProvider } from "./Components/Context/UserContext";
import Login from "./Components/Login/Login";
import ArticleByTopic from "./Components/Topics/ArticlesByTopic";
import { QuerieProvider } from "./Components/Context/QueriesContext";

function App() {
  return (
    <UserProvider>
      <QuerieProvider>
        <Header />
        <Routes>
          <Route path={"/"} element={<Navigate to={"/login"} />} />
          <Route path={"/"} elemenet={<Loading />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"/home"} element={<ArticlesList />} />
          <Route
            path={"article/:article_id"}
            element={<DisplaySingleArticle />}
          />
          <Route path={"/articles"} element={<ArticleByTopic />} />
        </Routes>
      </QuerieProvider>
    </UserProvider>
  );
}

export default App;
