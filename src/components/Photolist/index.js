import React, { useState } from 'react';



const PhotoList = ({category}) => {

  const [photos] = useState([
    {
      name: 'False Figure',
      category: 'Albums',
      description: '../../assets/small/0.jpg',
      
     
    },
    {
      name: 'Torture Chamber',
      category: 'Albums',
      description: 'poi',
      
    },
    

  ]);


  return (
    
    <>
  {photos.map((projectMapped => {
    return (
    <div>
      <h2>{projectMapped.name}</h2>
      <h3>
      <a href={projectMapped.category}>
        <img
          src={projectMapped.description}
          alt={projectMapped.name}
          key={projectMapped.name}
        />
      </a>
      </h3>
      <a>{projectMapped.name} </a>
      
    </div>
    )
  }))}
</>
  );
};



export default PhotoList;  


/*
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



export default PhotoList;  */
