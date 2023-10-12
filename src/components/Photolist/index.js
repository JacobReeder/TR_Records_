import React, { useState } from 'react';




const PhotoList = () => {

  const [photos] = useState([
    {
      name: 'False Figure',
      img: 'assets/small/Albums/0.jpg',
      
      
     
    },
    {
      name: 'Torture Chamber',
      img: 'assets/small/Albums/1.jpg',
     
      
    },
    

  ]);


  return (
    
    <>
  {photos.map((projectMapped => {
    return (
    <div>
      <h2>{projectMapped.name}</h2>
      <h3>
      <a>
        <img
          src={projectMapped.img}
          alt={projectMapped.name}
          key={projectMapped.name}
        />
      </a>
      </h3>
      <a></a>
      
    </div>
    )
  }))}
</>
  );
};


export default PhotoList;  
