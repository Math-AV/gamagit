import React from "react";
import { BrowserRouter as Router , Routes, Route, } from "react-router-dom";
import Repositories from "./Repositories";
import Home from "./Home";
import Error from "./Error";

export default function RouteRotas() {
  return (
    <Router>        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repositories" element={<Repositories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
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
