import React from 'react';
import coverImage from "../../assets/cover/cover-image.png";


const Nav = ({ currentPage, handlePageChange }) => {
   
    
    return (
        <header style={{ backgroundImage: `url(${coverImage})`}}>

            <h2 className= "flex-row px-1">

                <div>
                    <a data-testid="link" href="/">
                    
                    </a>
                </div>
            </h2>
                <nav>
                    <ul className="navigation">
                        
                        <li>
                            <a href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                            About
                            </a>
                        </li>
                        <li>
                        <a href="#releases"
                            onClick={() => handlePageChange('Releases')}
                            className={currentPage === 'Releases' ? 'nav-link active' : 'nav-link'}>
                            Releases
                            </a>
                        </li>

                       
                    </ul>
                </nav>
        
        </header>
       
                   
    )
}

export default Nav;