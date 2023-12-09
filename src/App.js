import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Releases from './components/Releases';
import ContactForm from "./components/Contact";


function App() {
  
  const [categories] = useState([
    {
      name: 'releases',
      description: 'Album Releases',
    },
    { name: 'art gallery', description: 'Artists and their pieces used by Transylvanian Recordings' },
    { name: 'merch', description: 'TR merchandise past and present' },
    { name: 'placeholder', description: 'placeholder category; whatever else you would like to go here' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  

  return (
    <div>
      <Nav
       categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        >
      </Nav>
      <main>
      {!contactSelected ? (
        <>
        <Releases currentCategory={currentCategory}></Releases>
        <About></About>
        </>
        ) : (
        <ContactForm></ContactForm>
        )}
       
      </main>
      
    </div>
  );
}

export default App;
  

  

