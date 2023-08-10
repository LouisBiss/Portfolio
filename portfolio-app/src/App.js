import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MonExperience from "./components/MonExperience";
import MesProjets from "./components/MesProjets";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
function App() {
  return (
   <Router>
     <NavBar /> {/* Toutes les pages inclueront la bar de navigation  */}
     <Routes>
       <Route path="/" />
       <Route path="/Projets"  />
       <Route path="/Experience" />
       <Route path="/Contact" />
     </Routes>

     <Home></Home>

     <MonExperience></MonExperience>

     <MesProjets></MesProjets>

     <Competences></Competences>

     <Contact></Contact> 


   </Router>


  );
}

export default App;
