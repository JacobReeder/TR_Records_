import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import About from './components/About';
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
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>

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