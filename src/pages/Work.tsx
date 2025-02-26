import React from 'react';
import CollapsibleList from '../components/CollapsibleList';

const Work = () => {
  return (
    <div>
      <header>
        <h1>Work</h1>
        {/* <p>I've had a lot of gigs over the years. Here's a (mostly) categorized list:</p> */}
      </header>
      <section className="mt-6">
        <h4>Industry</h4>
        <CollapsibleList
          title={
            <>
              <a href="https://www.blueowl.com" target="_blank" className="blue-link"rel="noopener noreferrer">
                Blue Owl Capital
              </a>{' '}
                {'—>'} Software Engineering Intern
            </>
          }
          items={[
            'Built a web app to streamline uploading 5+ GB of investment memos to a chatbot\'s embeddings database.',
            'Read a lot about OAuth 2.0, implemented API scopes, and worked with a bunch of different Microsoft Azure features.',
            'Developed a crippling addiction to caramel cold brew.',
          ]}
        />
                <CollapsibleList
          title={
            <>
              <a href="https://www.getnowadays.com/" target="_blank" className="blue-link"rel="noopener noreferrer">
                Nowadays (YC S23)
              </a>{' '}
                {'—>'} Software Engineering Intern
            </>
          }
          items={[
            'Got very good at hacking up web scrapers to grab details from hotel databases using Selenium and BeautifulSoup.',
            'Implemented an automated + real time phone-calling system, enabling outreach calls for anything the aforementioned web scrapers missed.',
            'Learned how to communicate concisely and how to make mistakes.',
          ]}
        />
         <h4>Research</h4>
         <CollapsibleList
          title={
            <>
              <a href="https://www.law.uchicago.edu/" target="_blank" className="blue-link"rel="noopener noreferrer">
                The Blablablab
              </a>{' '}
                {'—>'} Machine Learning Researcher
            </>
          }
          items={[
            'Training GMMs and other probabilistic models to interpret/explain the variety of writing styles across the internet.',
            "Parallelized tagging across 10 GPUs to label 2+ TB of different texts with several linguistic embedding models.",
            <>
              Only crashed our server <s>once</s> twice (last updated Feb. 2025)
            </>,
          ]}
        />
         <CollapsibleList
          title={
            <>
              <a href="https://www.law.uchicago.edu/" target="_blank" className="blue-link"rel="noopener noreferrer">
                University of Chicago Law
              </a>{' '}
                {'—>'} Research Assistant
            </>
          }
          items={[
            'Used computer vision to systematically extract text from scanned PDFs.',
            "Fiddled with transformer models and RAG pipelines to dissect 50+ page opinions and draft up different styles of appellate case briefings.",
            'Was constantly reminded ChatGPT is very pro-synonym, and that the legal industry decidedly is not.',
          ]}
        />
        <h4>Teaching</h4>
        <>
        @ University of Michigan: <a href="https://eecs376.org/" target="_blank" className="blue-link"rel="noopener noreferrer">
                  CS Theory
              </a>, <a href="https://eecs281staff.github.io/eecs281.org/" target="_blank" className="blue-link"rel="noopener noreferrer"> Data Structures & Algorithms</a>
        
        </>

        <br />
        <>
        @ Columbia University: <a href="https://tonydear.com/teaching/coms4701" target="_blank" className="blue-link"rel="noopener noreferrer">
                  Artificial Intelligence
              </a>, <a href="https://tonydear.com/teaching/coms3203" target="_blank" className="blue-link"rel="noopener noreferrer"> Discrete Math</a>
        
        </>
        
        {/* <CollapsibleList
          title={
            <>
              <a href="https://www.umich.edu/" target="_blank" className="blue-link"rel="noopener noreferrer">
                University of Michigan
              </a>{' '}
                {'—>'}  {' '}
                <a href="https://eecs376.org/" target="_blank" className="blue-link"rel="noopener noreferrer">
                  CS Theory
              </a>{' '} TA
            </>
          }
          items={[
          ]}
        />
              <CollapsibleList
          title={
            <>
              <a href="https://www.umich.edu/" target="_blank" className="blue-link"rel="noopener noreferrer">
                University of Michigan
              </a>{' '}
                {'—>'}  {' '}
                <a href="https://eecs376.org/" target="_blank" className="blue-link"rel="noopener noreferrer">
                  Data Structures & Algorithms
              </a>{' '} TA
            </>
          }
          items={[
          ]}
        />
        <CollapsibleList
          title={
            <>
              <a href="https://www.columbia.edu/" target="_blank" className="blue-link"rel="noopener noreferrer">
                Columbia University
              </a>{' '}
                {'—>'}  {' '}
                <a href="https://tonydear.com/teaching/coms4701/" target="_blank" className="blue-link"rel="noopener noreferrer">
                  Artificial Intelligence
              </a>{' '} TA
            </>
          }
          items={[
          ]}
        />
        <CollapsibleList
          title={
            <>
              <a href="https://www.columbia.edu/" target="_blank" className="blue-link"rel="noopener noreferrer">
                Columbia University
              </a>{' '}
                {'—>'}  {' '}
                <a href="https://tonydear.com/teaching/coms3203/" target="_blank" className="blue-link"rel="noopener noreferrer">
                  Discrete Math
              </a>{' '} TA
            </>
          }
          items={[
          ]}
        /> */}
      </section>


      <footer className="mt-10 text-gray-600 text-sm">
        <p>————</p>
      </footer>
    </div>
  );
};

export default Work;
