import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestRouter from "./pages/TestRouter/TestRouter";
import GptAnswer from "./pages/GPT/GptAnswer";
import Cityinfo from "./pages/City/Cityinfo";

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<TestRouter />} />
        <Route path="/gpt" element={<GptAnswer />} />
        <Route path="/city" element={<Cityinfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;