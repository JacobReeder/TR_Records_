import React from 'react';
import PhotoList from './../Photolist'; 
import { capitalizeFirstLetter } from '../../utils/helpers';



function Releases( props ) {
    const { currentCategory } = props;
      return (
        <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}



export default Releases;

