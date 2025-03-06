import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="w-full flex justify-center py-8">
      <div className="flex flex-col w-full">
        <div className="w-full flex text-xl mb-6">
          <div className="w-1/2 md:w-3/5 pl-8">
            <a className="" href="/">Home</a>
          </div>
          <div className="w-1/2 md:w-2/5 flex justify-between">
            <a className="" href="/work">Work</a>
            <a className="" href="/projects">Projects</a>
            <a className="" href="/misc">Misc.</a>
          </div>
        </div>
        <hr className="w-full border-t border-title" />
      </div>
    </nav>
  );
};

export default Navbar;
