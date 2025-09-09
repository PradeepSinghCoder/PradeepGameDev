import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'
import Resume from './components/Resume';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>

          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
            {/* <StarsCanvas /> */}
          </div>

          <About />
          <Experience />
          <Tech />
          <Projects />
          {/* <Resume /> */}
          {/* <Feedbacks /> */}

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
