import React, { useState } from 'react';



const PhotoList = () => {

  const [photos] = useState([

  ])

  

return (
    <>
  {photos.map((projectMapped => {
    return (
    <div>
      <h2>{projectMapped.name}</h2>
      <h3>
      <a href={projectMapped.url}>
        <img
          src={projectMapped.screenshot}
          alt={projectMapped.name}
          key={projectMapped.name}
        />
      </a>
      </h3>
      <a href={projectMapped.repo}>{projectMapped.name} </a>
      
    </div>
    )
  }))}
</>
)
}



export default PhotoList;