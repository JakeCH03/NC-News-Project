import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import ArticlesList from "./Components/Articles/ArticlesList";
import Loading from "./Components/Loading";
import DisplaySingleArticle from "./Components/Single Article/Article/DisplaySingleArticle";
import { UserProvider } from "./Components/Context/UserContext";
import Login from "./Components/Login/Login";

function App() {
  return (
    <UserProvider>
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
      </Routes>
    </UserProvider>
  );
}

export default App;
