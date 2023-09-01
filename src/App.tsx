import React from "react";

import { Container } from "./AppStyles";

import { Navbar } from "./components/Navbar";

import { Home } from "./pages/home";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
};

export default App;
