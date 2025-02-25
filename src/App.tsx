import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './style.css';
// Import other pages as you create them
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
          {/* Add other routes as you create the pages */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/misc" element={<Misc />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
