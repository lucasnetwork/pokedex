import { BrowserRouter, Route, Link, Routes as Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../Views/Home";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
