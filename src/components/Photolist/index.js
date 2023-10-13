import React, { useState } from 'react';




const PhotoList = () => {

  const [photos] = useState([
    {
      name: 'False Figure',
      img: 'https://github.com/JacobReeder/TR_Records_/blob/main/src/assets/cover/0.png',
      
      
     
    },
    {
      name: 'Torture Chamber',
      img: 'https://github.com/JacobReeder/TR_Records_/blob/main/src/assets/cover/1.png',
     
      
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
