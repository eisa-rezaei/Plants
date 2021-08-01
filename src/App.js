import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import AddFlower from "./pages/addFlower/AddFlower";
import InformationFlowers from "./pages/information/InformationFlowers";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="container">
        <div className="pages-container">
          <Router>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/information" component={InformationFlowers} />
              <Route path="/addflower" component={AddFlower} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </main>
    </>
  );
}

export default App;
