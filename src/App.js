import React, { useState } from 'react';

import About from './components/About';
import Nav from './components/Nav';
import Releases from './components/Releases';




function App() {
  
  const [ currentPage, setCurrentPage ] = useState('About');

  const renderPage = () => {
    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Releases') {
      return <Releases />;
    }
     
  
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <a href='/'></a>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>

      </div>
      <main>
        <div>
          {renderPage()}
       

        </div>
      </main>
    </div>
  );
}

export default App;