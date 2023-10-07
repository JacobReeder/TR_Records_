import React from 'react';
import PhotoList from '../Photolist'; 



function Releases(props) {
   const { currentCategory } = props;

    return (
          <section>
              
              <p>{currentCategory.description}</p>
                  <PhotoList category={currentCategory.name}/>
         </section>     
      );
}

export default Releases;