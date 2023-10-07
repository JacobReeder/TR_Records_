import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Releases from './components/Releases';
import './App.css';

function App() {
  
  const [categories] = useState([
    {
      name: '',
      description: '',
    }
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [releasesSelected, setReleasesSelected] = useState(false);

  return (
    
      <div> 
        
        <Navigation 
           categories={categories}
           setCurrentCategory={setCurrentCategory}
           currentCategory={currentCategory}
           releasesSelected={releasesSelected}
           setReleasesSelected={setReleasesSelected}
           ></Navigation>
           <main>
            {!releasesSelected ? (
              <>
            <Releases currentCategory={currentCategory}></Releases>
            <About></About>
            </>
            ) : (
              <></>
            )}
           </main>

      </div>
     
  );
}

export default App;