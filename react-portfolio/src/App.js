import logo from './logo.svg';
import './App.css';
//import {router} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <About/>
          <Contact/>
          <Footer/>
          <Navbar/>
          <Projects/>
        </div>

    </div>
  );
}

export default App;
