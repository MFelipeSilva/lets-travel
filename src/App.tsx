import React, { ReactNode } from "react";

import { LayoutContainer } from "./AppStyles";

import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const App = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default App;
