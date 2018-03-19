import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Articles from "./pages/Articles";
import Header from "./components/Header";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import Jumbotron from "./components/Jumbotron";

const App = () => (
  <div>
    <Header />
    <Router>
      <Route exact path="/" component={Articles} />
    </Router>
  </div>
);

export default App;
