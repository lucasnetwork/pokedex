import { BrowserRouter, Route, Link, Routes as Switch } from "react-router-dom";
import Header from "../components/Header";
import CreatePokemon from "../Views/CreatePokemon";
import Home from "../Views/Home";
import Pokemon from "../Views/Pokemon";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
      <Route path="/CreatePokemon" element={<CreatePokemon />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
