import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
