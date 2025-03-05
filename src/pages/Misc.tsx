import Footer from '../components/Footer';

const Misc = () => {
  return (
    <div>
      <div>
        <header>
          <h1>Miscellaneous</h1>
        </header>        
        <section>
          <ul style={{display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>Here's what I'm <a href="https://www.goodreads.com/review/list/188253527?shelf=currently-reading" className="blue-link" target="_blank" rel="noopener noreferrer">reading</a>,  <a href="https://open.spotify.com/playlist/37i9dQZF1FoHAYUbuUZLXk?si=38d41acce5d649e3" className="blue-link" target="_blank" rel="noopener noreferrer">listening to</a>, and <a href="https://boardgamegeek.com/collection/user/mjjiang" className="blue-link" target="_blank" rel="noopener noreferrer">playing</a>.</li>
            <li>My web development skills aren't so bad, but designing is a different beast. This site takes heavy inspiration from <a href="https://rbafna.com" className="blue-link" target="_blank" rel="noopener noreferrer">Rohan Bafna</a>, <a href="https://advaitiyer.com" className="blue-link" target="_blank" rel="noopener noreferrer">Advait Iyer</a>, and <a href="https://writingsugar.co" className="blue-link" target="_blank" rel="noopener noreferrer">Carter</a>.</li>
            <li><a href="https://drive.google.com/drive/folders/1ZSZhM7VsFDlt3bixSqd4pTftKVLVIApx?usp=sharing" className="blue-link" target="_blank" rel="noopener noreferrer">This</a> is a link to all of the note/cheatsheets I've made for U-M CS exams.</li>
            <li>I once ate 10 bananas in a day (learned to not run out of groceries after that).</li>
            <li>I've been privileged to have an abundance of mentors, many of whom have helped shape my goals and life perspective. Special thanks to Claire Jiang, Alec Chen, Esha Khanna, Glenn Stein, Santiago Grijalva, and Tony Dear.</li>
          </ul>
        </section>  
      </div>
      <Footer />
    </div>
  );
};

export default Misc;