import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GreatestHits from "./pages/GreatestHits"
import Contact from "./pages/Contact"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/greatesthits" component={GreatestHits} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
