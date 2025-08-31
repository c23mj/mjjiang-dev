import CollapsibleList from "../components/CollapsibleList";
import Footer from "../components/Footer";
const Projects = () => {
  return (
    <div>
        <header>
          <h1> Projects</h1>
        </header>        
        <section>
        <h4>In progress</h4>
        <CollapsibleList
          title={
            <>
              <a href="https://www.aiphabet.org/" target="_blank" className="blue-link"rel="noopener noreferrer">
                Aiphabet
              </a>{': '} a free, hands-on AI education for K-12 students
                
            </>
          }
          items={[
             "Volunteer #1. Synthesizing the masters-level AI course I taught at Columbia and all of its prerequisites into a series of bite-sized lessons.",
             "Designed Jupyter notebooks and wrote articles for 50+ hours of course content, most of which is getting rolled out today. ",
             "Reached out to way too many schools to pilot test the platform (learned that cold emailing is an art). If you/anyone you know is interested, and you've somehow stumbled this deep, please shoot me a message! "
          ]}
        />
        <CollapsibleList
          title={
            <>
              NYT connections solver  
            </>
          }
          items={[ 
            <>
            Attempting to use NLP (<span className="underline">not</span> LLMs) to solve the <a href="https://www.nytimes.com/games/connections" target="_blank" className="blue-link" rel="noopener noreferrer">New York Times Connections</a> as an exercise in computational linguistics. 
            </>,     
            <>
Inspired by <a href="https://jeremybmerrill.com/blog/2024/08/this-algorithm-solves-nyt-connections.html" target="_blank" className="blue-link" rel="noopener noreferrer">a</a> <a href="https://web.stanford.edu/class/cs224n/final-reports/256847963.pdf" target="_blank" className="blue-link" rel="noopener noreferrer">lot</a> <a href="https://marshalljiang.com/my-not-so-successful-quest-to-conquer-the-nyt-connections-game-with-word2vec/" target="_blank" className="blue-link" rel="noopener noreferrer">of</a> <a href = "https://techxplore.com/news/2024-05-ai-ability-york-puzzle.html" target="_blank" className="blue-link" rel="noopener noreferrer">different</a> <a href="https://gist.github.com/jsundram/63138254a0a378e1706fd77c8bcdf8b4" target="_blank" className="blue-link" rel="noopener noreferrer">folks</a>.
            </>
          ]}

        />
                <CollapsibleList
          title={
            <>
              something with FPGAs..?
            </>
          }
          items={[ 
            <>
            I haven't spent a lot of time close to hardware, but I'm eager to change that.
            </>,
            <>
            Working on getting a basic understanding of Verilog right now—will update this when I have a better idea of what I'm doing/something to show.
            </>
          ]}
        />

        
        <h4>Completed</h4>
        
        <CollapsibleList
          title={
            <>
              <a href="https://www.formistudio.app/" target="_blank" className="blue-link"rel="noopener noreferrer">
                Formi
              </a>{': '} a stage management app for creatives 
                
            </>
          }
          items={[
             "Created the mobile version of Formi's core product, involving building out the app from scratch with Expo and React Native.",
             "Specifically--worked on dashboard/home page, stage tool functionality (dancer movement, poses, etc.) and syncing their motion with music.",
             "Constantly challenged to keep end-users (choreographers with tablets) in mind during the design process."]}
        />
         <CollapsibleList
          title={
            <>  
              Reinforcement learning homework + autograder
            </>
          }
          items={[
            "As a TA, helped co-develop a RL project that involved implementing SARSA and Q-learning as an agent in a simulated grid world with a variety of obstacles and rewards.",
            "Built an autograder to automatically evaluate student code against a comprehensive test suite using pytest + custom wrappers/decorators.",
            "Used by ~150 students per semester."
          ]}
        />
                <CollapsibleList
          title={
            <>
              Kernel-level thread library    
            </>
          }
          items={[
            "Implemented a C++ thread library on Unix, handling CPU booting, thread management, multi (50+) CPU management, timer and inter-processor interrupts, atomicity, and FIFO scheduling order.",
            "Designed spin-locks, mutexes and conditional variables utilizing POSIX context management."
          ]}
        />

<CollapsibleList
          title={
            <>
              Video Content Distribution Network (CDN) 
            </>
          }
          items={[
            "Developed a video CDN using socket programming in C++ which dynamically adjusts video quality (bitrate) based on network throughput.",
            "Implemented a DNS-based load balancer that distributes client-server connections both geographically and based on server load."
          ]}
        />

<CollapsibleList
          title={
            <>
              Misc. other projects
            </>
          }
          items={[
            <>
              Feed-forward neural network for arc-standard <a href="https://web.stanford.edu/~jurafsky/slp3/old_oct19/15.pdf" target="_blank" className="blue-link" rel="noopener noreferrer">dependency parsing</a>
            </>,
            "Image caption generator using a CNN + huggingface transformer",
            "Multithreaded network file server from scratch",
            "RISC-V assembler, simulator, linker",
            "Pipeline and cache simulator in C",
            "SQL-like relational database"
          ]}
        />
        </section>  
        <Footer/>
    </div>
  );
};

export default Projects;