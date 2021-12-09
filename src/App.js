import { useContext } from "react";
// Components 
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ backgroundColor: darkMode ?"#171717": "white", color: darkMode && "white" }}>
      {/* Toggle */}
      <Toggle />
      {/* Intro  */}
      <Intro />
      {/* About  */}
      <About />
      {/* Product  */}
      <ProductList />
      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
