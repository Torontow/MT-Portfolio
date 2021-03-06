import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GreatestHits from "./pages/GreatestHits";
import Contact from "./pages/Contact";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container>
          <Row>
            <Col size="3">
              <Navbar />
              {/* <Route exact path="/" component={Home} /> */}
            </Col>
            <Col size="9">
              <Route exact path="/greatesthits" component={GreatestHits} />
              <Route exact path="/contact" component={Contact} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
