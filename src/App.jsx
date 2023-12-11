import { useState } from "react";

import "./App.css";
import Header from "../Components/Header/Header";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import ArticlesList from "../Components/Articles/ArticlesList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/home"} />} />
        <Route path={"/home"} element={<ArticlesList />} />
      </Routes>
    </>
  );
}

export default App;
