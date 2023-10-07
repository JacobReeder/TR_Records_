import React, { useState } from 'react';



const PhotoList = ({category}) => {
  const [photos] = useState([
    {
      name: '',
      category: 'albums',
      description: '',
      
     
    },
    {
      name: '',
      category: 'albums',
      description: '',
      
    },
    {
      name: '',
      category: 'albums',
      description: '',
     
    }

  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

return (
    <div>
      <div>
      {currentPhotos.map((image, i) => (
        <img
          src={require(`../../assets/small/${category}/${i}.jpg`).default}
          alt={image.name}
          key={image.name}
        />
      ))}
    </div>
    </div>

);
};



export default PhotoList;
