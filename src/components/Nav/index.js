import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";



function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
      
    const handleClick = (item) => {
        console.log(item);
        return item;
    }
   
    return (
        <header>
            <h2 className= "flex-row px-1">
                    <a data-testid="link" href="/"><span>Transylvanian Recordings</span></a>
            </h2>

          <nav>
              <ul className="flex-row"> 
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => handleClick('#about')}>
                        About
                        </a>
                   </li>
                   <li className={"mx-2"}>
                    <a data-testid="releases" href="#releases" onClick={() => handleClick('#releases')}>
                    Releases
                    </a>
                  </li>
                  { categories.map((category) => (
                     <li className= { `mx-1 ${currentCategory.name === category.name}`}
                          key={category.name}>
                          <span onClick={() => {
                              setCurrentCategory(category);
                              }}>{capitalizeFirstLetter(category.name)}
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