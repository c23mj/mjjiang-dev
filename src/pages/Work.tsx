import React from 'react';
import CollapsibleList from '../components/CollapsibleList';
import Footer from '../components/Footer';
const Work = () => {
  return (
    <div>
      <header>
        <h1>Work</h1>
      </header>
      <section>
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
            'Built a web app to streamline uploading 5+ GB of investment memos to an internal chatbot\'s embeddings database.',
            'Read a lot about OAuth 2.0, implemented API scopes, and worked with a wide variety of pieces of Microsoft Azure.',
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
            'Implemented an automated and real time phone-calling system, enabling outreach calls for anything the aforementioned web scrapers missed.',
            'Learned how to communicate concisely and how to make mistakes.',
          ]}
        />
         <h4>Research</h4>
         <CollapsibleList
          title={
            <>
              <a href="https://blablablab.si.umich.edu/" target="_blank" className="blue-link"rel="noopener noreferrer">
                The Blablablab
              </a>{' '}
                {'—>'} Machine Learning Researcher
            </>
          }
          items={[
            'Training GMMs and other probabilistic models to interpret/explain the variety of writing styles across the internet.',
            "Parallelized deep learning models across 10 GPUs to effeciently label 2+ TB of different texts with several linguistic embedding methods.",
            <>
              Only crashed our server once.
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
            'Was constantly reminded that generative models are very pro-synonym, and that the legal industry decidedly is not.',
          ]}
        />
        <h4>Teaching [Assistantships]</h4>
        <>
        @ University of Michigan: <a href="https://eecs376.org/" target="_blank" className="blue-link"rel="noopener noreferrer">
                  CS Theory
              </a>, <a href="https://eecs281staff.github.io/eecs281.org/" target="_blank" className="blue-link"rel="noopener noreferrer"> Data Structures & Algorithms</a>
        
        </>

        <div style={{ marginBottom: '0.2rem' }}/>
        <>
        @ Columbia University: <a href="https://tonydear.com/teaching/coms4701" target="_blank" className="blue-link"rel="noopener noreferrer">
                  Artificial Intelligence
              </a>, <a href="https://tonydear.com/teaching/coms3203" target="_blank" className="blue-link"rel="noopener noreferrer"> Discrete Math</a>
        
        </>
    
      </section>


      <Footer/>
    </div>
  );
};

export default Work;
