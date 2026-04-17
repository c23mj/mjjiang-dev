import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <header>
          <h1> Hey, I'm Michael.</h1>
          <p> I study computers, math, and complex systems at the University of Michigan. I spend a lot of time thinking about machine learning, infrastructure, and [perhaps too many] greek letters, but I'm always excited to fall down new rabbit holes, technical or otherwise. More broadly, I'm interested in how technology can be applied to wholistically improve the human condition.</p>
          <p>On campus, I co-directed <a href="https://shiftcreator.space/" target="_blank" rel="noopener noreferrer"> Shift Creator Space</a>, a tight-knit group of ~40 of Michigan's most talented creators [of art, languages, shrinky dinks, robots]. I'm also part of <a href="https://www.michiganinvestmentgroup.com/" target="_blank" rel="noopener noreferrer"> Michigan Investment Group</a>, <a href="https://atlasdigital.org/" target="_blank" rel="noopener noreferrer"> Atlas Digital</a>, and <a href="https://www.meccconsulting.com/" target="_blank" rel="noopener noreferrer"> MECC Consulting Group</a>, communities that have given me go-to people on campus. I'm a big crossword puzzler, a fan of eating + baking, and mediocre at guitar.</p>
        </header>        
        <section>
          <p>You can choose your own adventure from here:</p>
          <ul>
            <li><Link to="/work" className="no-underline">[WORK I DO]</Link></li>
            <li><Link to="/projects" className="no-underline">[STUFF I MAKE]</Link></li>
            <li><Link to="/misc" className="no-underline">[OTHER THINGS]</Link></li>
            <li><a href="mailto:mjjiang@umich.edu" className="no-underline">[CONTACT ME]</a></li>
          </ul>
        </section>  

        <footer>
          <p>————</p>
          <p> Or, if you don't want to click on any of the links, here's a "recent" picture from my camera roll that I find cool (updated 4/2026):</p>
          <div className="flex justify-center">
            <img src="joshua_tree.jpg" alt="joshua tree" className="w-[70%]" loading="lazy" decoding="async" />
          </div>

        </footer>
    </div>
  );
};

export default Home;
