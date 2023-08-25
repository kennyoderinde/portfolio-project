import './App.css';
// import {Route, Routes} from 'react-router';
import Navbar from "./Components/Navigation/Navbar.js/Navbar";
import Sidebar from './Components/Navigation/Sidebar/Sidebar';
// import RightBar from './Components/Navigation/RightBar/RightBar';
import Home from "./Components/Pages/Home/Home.js"
import Work from "./Components/Pages/Work/Work"
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Experience from './Components/Pages/Experience/Experience';


function App() {
  return (
    <div className=' w-full min-h-screen bg-[#020c1b] p-0 box-border m-0 transition '>
    <Navbar /> 
      <section name="/" className="min-h-screen flex items-center">
        <Home />
      </section>
      <section name="about" className="min-h-screen flex items-center">
        <About />
      </section>
      <section name="experience" className="min-h-screen flex items-center">
        <Experience />
      </section>
     <section name="work" className="min-h-screen flex items-center">
        <Work />
      </section>
       <section name="contact" className="min-h-screen flex items-end">
        <Contact />
      </section>
      
      <Sidebar />

    </div>
  );
}

export default App;
