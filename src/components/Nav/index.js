import React from 'react';
//import { capitalizeFirstLetter } from "../../utils/helpers";



const Nav = (props) => {
    const { currentPage, handlePageChange} = props;
  

  return (
    <header>
        <h2>
            <div>
                <a data-testid="link" href="/">
                    Transylvanian Recordings
                </a>
            </div>
        </h2>

        <nav>
            <ul>
                <li>
                    <a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About'? 'nav-link active' : 'nav-link'}
                    >About</a>
                </li>

                <li>
                <a href="#releases"
                    onClick={() => handlePageChange('Releases')}
                    className={currentPage === 'Releases'? 'nav-link active' : 'nav-link'}
                    >Releases</a>
                </li>
            </ul>
        </nav>
    </header>

    
  )

}


export default Nav;


