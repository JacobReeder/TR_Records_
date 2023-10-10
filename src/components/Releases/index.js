import React from 'react';
import PhotoList from '../Photolist'; 
//import { capitalizeFirstLetter } from '../../utils/helpers';

const Releases = () => {

      return (

            <div>
                  <h1>
                        <div><PhotoList /></div>
                  </h1>
                  <h3></h3>
            </div>
      )
}

export default Releases;

/*
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

export default Releases; */