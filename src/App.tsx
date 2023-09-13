import React from "react";

import { Container } from "./AppStyles";

import { Navbar } from "./components/Navbar";

import { Home } from "./pages/home";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
};

export default App;
