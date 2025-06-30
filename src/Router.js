import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestRouter from "./pages/TestRouter/TestRouter";
import GptAnswer from "./pages/GPT/GptAnswer";
import City from "./pages/City/City";

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<TestRouter />} />
        <Route path="/gpt" element={<GptAnswer />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;