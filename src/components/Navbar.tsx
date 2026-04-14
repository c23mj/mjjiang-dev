import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center py-8">
      <div className="flex flex-col w-full">
        <div className="w-full flex text-xl mb-6">
          <div className="w-1/2 pl-8 min-[950px]:w-3/5">
            <Link to="/">Home</Link>
          </div>
          <div className="flex w-1/2 justify-between min-[950px]:w-2/5">
            <Link to="/work">Work</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/misc">Misc.</Link>
          </div>
        </div>
        <hr className="w-full border-t" />
      </div>
    </nav>
  );
};

export default Navbar;
