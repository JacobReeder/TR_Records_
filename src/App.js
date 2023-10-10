import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Releases from './components/Releases';
//import './App.css';

function App() {
  const [ currentPage, setCurrentPage ] = useState('About')


const renderPage = () => {
  if (currentPage === 'About') {
    return <About />
  }

  if (currentPage ==='Releases') {
    return <Releases />
  }
}

const handlePageChange = (page) => setCurrentPage(page);

return (

  <div>
    <header>
  <div>
    
    <a></a>
  <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
  </div>
  </header>
  <main>
    <div>
      {renderPage()}
    </div>
  </main>
  </div>
  
);
}


export default App;

///TODO: Old code; add new code and cherry pick old code
/*
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

*/

