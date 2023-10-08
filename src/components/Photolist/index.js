import React, { useState } from 'react';



const PhotoList = ({category}) => {

  const [photos] = useState([
    {
      name: 'False Figure',
      category: 'Albums',
      description: 'ppppp',
      
     
    },
    {
      name: 'Torture Chamber',
      category: 'Albums',
      description: 'poi',
      
    },
    

  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  return (
    
    <div className="flex-row">
      {currentPhotos.map((image, i) => (
        <img
          src={require(`../../assets/small/${category}/${i}.jpg`).default}
          alt={image.name}
          className="img-thumbnail mx-1"
          key={image.name}
        />
      ))}
    </div>
  );
};



export default PhotoList;
