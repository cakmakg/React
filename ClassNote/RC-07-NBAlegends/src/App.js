import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />

      <CardContainer />
    </Container>
  );
}

export default App;
