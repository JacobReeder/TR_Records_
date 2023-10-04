import React, { useState } from 'react';



const PhotoList = () => {

  const [photos] = useState([
    {
      name: '',
      url: '',
      repo: '',
      screenshot: '',
      clicklink: ''
     
    },
    {
      name: '',
      url: '',
      repo: '',
      screenshot: '',
      clicklink: ''
    },
    {
      name: '',
      url: '',
      repo: '',
      screenshot: '',
      clicklink: ''
    }

  ])

  

return (
    <>
  {photos.map((projectMapped => {
    return (
    <div>
      <h2>{projectMapped.name}</h2>
    
      <a href={projectMapped.url}>
        <img
          src={projectMapped.screenshot}
          alt={projectMapped.name}
          key={projectMapped.name}
        />
      </a>
    
      <a href={projectMapped.repo}>{projectMapped.name} </a>
      
    </div>
    )
  }))}
</>
)
}



export default PhotoList;
