import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './style.css';
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Misc from "./pages/Misc";

const App = () => {
  return (
    <div className="page-container min-h-screen">
      <Navbar/>
      <main className="container mx-auto px-4 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/misc" element={<Misc />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
