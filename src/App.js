import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Releases from './components/Releases';
import './App.css';

function App() {
  
  const [categories] = useState([
    {
      name: 'Albums',
      description: 'Releases',
    }
    
  ]);

  const [currentCategory, setCurrentCategory, ] = useState(categories[0]);
  

  return (
    <div> 
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
            
        <About></About>
        <Releases currentCategory={currentCategory}></Releases>
            
      </main>
    </div>
  );
}

export default App;