import React from 'react';
import PhotoList from '../Photolist'; 
import { capitalizeFirstLetter } from '../../utils/helpers';



function Releases(props) {
   const { currentCategory } = props;

    return (
          <section>
          <h1 data-testid="h1tag" id="releases">{capitalizeFirstLetter(currentCategory.name)}</h1>
           <div>
          <p>{currentCategory.description}</p>

          <PhotoList category={currentCategory.name}/>
                
          </div>
         </section>     
      );
}

export default Releases;