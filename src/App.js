
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderPage from "./components/HeaderPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeaderPage/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
