import React, { useState } from 'react';



const PhotoList = () => {

  const [photos] = useState([
    {
      name: 'Random Repo',
      url: '',
      repo: '',
      screenshot: 'https://github.com/JacobReeder/Counting-Calz/raw/main/public/images/Screenshot.png',
      clicklink: 'Click for album release/link to bandcamp?'
     
    },
    {
      name: 'Torture Tomb - "S/T"',
      url: '',
      repo: '',
      screenshot: 'https://github.com/JacobReeder/TR_Records_/raw/main/src/assets/small/torture-tomb.png',
      clicklink: ''
    },
    {
      name: 'False Figure',
      url: '',
      repo: '',
      screenshot: 'https://github.com/JacobReeder/TR_Records_/raw/main/public/images/ff.jpeg',
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
