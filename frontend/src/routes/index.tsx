import { BrowserRouter, Route, Link, Routes as Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../Views/Home";
import Pokemon from "../Views/Pokemon";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
