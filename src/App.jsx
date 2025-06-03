import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectShow from "./pages/ProjectShow";
// import Contact from "./pages/Contact";

import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Projects</a></li>
        </ul>
      </nav>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="projects/:id" element={<ProjectShow/>}/>
          {/* <Route path="contact  " element={<Contact/>}/> */}
        </Routes>
      </Router>
    </> 
  );
}

export default App;
