import React from 'react';



function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        releasesSelected,
        setReleasesSelected
    } = props;
      
    
   
    return (
        <header>
            <h2 className= "flex-row px-1">
                    <a data-testid="link" href="/"></a>
            </h2>

          <nav>
              <ul className="navigation"> 
                    <li>
                        <a  href='#about' onClick={() => setReleasesSelected(false)}>
                        About
                        </a>
                        
                   </li>
                   <li>
                   <a  href='#releases' onClick={() => setReleasesSelected(false)}>
                        Releases
                        </a>
                   </li>
                   <li className={`${releasesSelected && 'navActive'}`}>
                    <span onClick={() => setReleasesSelected(true)}>Releases</span>
                   
                  </li>
                  { categories.map((category) => (
                    <li className= { `${currentCategory.name === category.name && !releasesSelected && 'navAvtive'}`}
                    key={category.name}>

                    <span onClick={() => {
                    setCurrentCategory(category);
                    setReleasesSelected(false);
                    }}>

                    </span>
                    </li>
                    )) 
                    }  
              </ul>
         </nav>
        
        </header>
       
                   
    )
}

export default Nav;