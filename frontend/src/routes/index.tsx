import { BrowserRouter, Route, Link, Routes as Switch } from "react-router-dom";
import Home from "../Views/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
