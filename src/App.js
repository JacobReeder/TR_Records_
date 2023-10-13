import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Releases from './components/Releases';




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
         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
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



  

  

