import React, { useState } from 'react';



const PhotoList = () => {

  const [photos] = useState([
    {
      name: '',
      url: '',
      repo: '',
      screenshot: '',
      clicklink: 'Click for album release/link to bandcamp?'
     
    },
    {
      name: 'Torture Tomb - "S/T"',
      url: ' https://mighty-temple-15168.herokuapp.com/',
      repo: '',
      screenshot: 'https://user-images.githubusercontent.com/97851357/175190935-5d004a28-bc3f-478b-9fcf-c52bbe9692d2.png',
      /*clicklink: 'Click for Budget Tracker Repo'*/
    },

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