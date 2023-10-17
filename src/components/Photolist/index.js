import React, { useState } from 'react';
import Modal from '../Modal';




function PhotoList({ category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

      const [photos] = useState([
        {
          name: '1 Citrus',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '2 Kaspyx',
          category: 'releases',
          description: 'Release Date:',
        },
       
       /* {
          name: '3 Yellowcake',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '4 Miserable Creature',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '5 Hellish Form',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '6 Embodied Torment',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '7 Ghorot',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '8 Mortal Embodiment - "Unbound Emptiness"',
          category: 'releases',
          description: 'Release Date: October 6th 2023',
        },
        {
          name: '9 Without Defeat - "Absurd World"',
          category: 'releases',
          description: 'Release Date: October 6th, 2023',
        },
        {
          name: '10 Shitbag - "Submission"',
          category: 'releases',
          description: 'Release Date: October 6 2023',
        },
        {
          name: '11 Talk Show - "Hyperstition"',
          category: 'releases',
          description: 'Release Date: October 6 2023',
        },
        {
          name: '12 Last - "Sifting Through the Ashes For the Belongings of Our Loved Ones"',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '13 Torture Tomb - "Self Titled"',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '14 Oromet - "Self Titled"',
          category: 'releases',
          description: 'Release Date:',
        }, */
        /*{
          name: '15 Shrinkwrap Killers - "Feed the Clones"', 
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '',
          category: 'releases',
          description: 'Releases Date:',
        },
        {
          name: '',
          category: 'releases',
          description: 'Releases Date:',
        },
        {
          name: '',
          category: 'releases',
          description: 'Releases Date:',
        },
        {
          name: '',
          category: 'releases',
          description: 'Releases Date:',
        },
        {
          name: '',
          category: 'releases',
          description: 'Releases Date:',
        },
        {
          name: '',
        category: 'releases',
        description: 'Releases Date:',
        },
        {
          name: '',
        category: 'releases',
        description: 'Releases Date:',
        },
        {
          name: '',
        category: 'releases',
        description: 'Releases Date:',
        },
        {
          name: '',
        category: 'releases',
        description: 'Releases Date:',
        },
        */
      ]);
      
      const currentPhotos = photos.filter((photo) => photo.category === category);

      const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
        
      }
      
    return (
      <div>
        {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}       
          <div className="flex-row">
        {currentPhotos.map((image, i) => ( 
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
      </div>
    );
  };

  export default PhotoList;

