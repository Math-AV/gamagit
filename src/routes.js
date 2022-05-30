import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Repositories from "./Repositories";
import Home from "./Home";

export default function RouteRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}

/* export default function Rotas() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Repositories">
            <Repositories />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
*/
