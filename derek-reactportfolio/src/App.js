import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";





import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={{Projects}} />
        <Route exact path="/Contact" component={Contact} />
        

        
      </Switch>
    </div>
  </Router>
);

export default App;
