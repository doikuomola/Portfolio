import React from "react";
import {
  About,
  Contact,
  Experience,
  Header,
  Nav,
  Services,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
