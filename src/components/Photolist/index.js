import React, { useState } from 'react';




const PhotoList = () => {

  const [photos] = useState([
    {
      name: 'False Figure',
      img: 'assets/small/0.jpg',
      
      
     
    },
    {
      name: 'Torture Chamber',
      img: 'assets/small/1.jpg',
     
      
    },
    

  ]);


  return (
    
    <>
    {photos.map((projectMapped => {
        return (
         <div>
           <h2>{projectMapped.name}</h2>
      
            <a>
            <img
            src={projectMapped.img}
            alt={projectMapped.name}
            key={projectMapped.name}
            />
            </a>
      
      
      
          </div>
        )
      } ))
    }
    </>
  );
};


export default PhotoList;  
