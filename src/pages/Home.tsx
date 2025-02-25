// import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <header>
          <h1> Hey, I'm Michael.</h1>
          <p> I study computers, math, and complex systems at the University of Michigan. I spend a lot of time thinking about machine learning, infrastructure, and [perhaps too many] greek letters, but I'm also perpetually falling down new technical rabbit holes. More broadly, I'm interested in how we can use technology to wholistically improve the human condition.</p>
          <p>On campus, I spend time with <a href="https://shiftcreator.space/" target="_blank"> Shift Creator Space</a>, a tight-knit group of ~40 of Michigan's most talented creators [of art, languages, shrinky dinks, robots]. &nbsp; I'm also part of <a href = "https://www.michiganinvestmentgroup.com/" target="_blank"> Michigan Investment Group</a>,  <a href = "https://atlasdigital.org/" target="_blank"> Atlas Digital</a>, and <a href = "https://www.meccconsulting.com/" target="_blank"> MECC Consulting</a>, communities where I've met some of my go-to people on campus. I'm a big crossword puzzler, a fan of eating + baking, and mediocre at guitar.</p>
        </header>        
        <section className="mt-6">
          <p>You can choose your own adventure from here:</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="font-bold no-underline">[WORK I DO]</a></li>
            <li><a href="#" className="font-bold no-underline">[STUFF I MAKE]</a></li>
            <li><a href="#" className="font-bold text-green-600 no-underline">[OTHER THINGS]</a></li>
          </ul>
        </section>  

        <footer className="mt-10 text-gray-600 text-sm">
          <p>————</p>
          <p className="mt-4"> Or, if you don't want to click on any of the links, enjoy a watercolor of my favorite street in New York.</p>
          <div className="flex justify-center">
            <img src="pell-street.png" alt="Pell Street" className="mt-4 rounded-lg shadow-lg" />
          </div>
        </footer>
    </div>
  );
};

export default Home;
