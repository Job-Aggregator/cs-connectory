import { useState } from 'react';
import NavBar from './components/NavBar';
import HeroHeader from './components/HeroHeader';
import Footer from './components/Footer';
import FeatureRight from './components/FeatureRight';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroHeader />
      <FeatureRight />
      <Footer />
    </>
  );
}

export default App;
