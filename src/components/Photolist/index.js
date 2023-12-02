import React, { useState } from 'react';
import Modal from '../Modal';




function PhotoList({ category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

      const [photos] = useState([
        {
          name: '1 Mortuous "Demo 2012"',
          category: 'releases',
          description: 'Release Date: 2012',
        },
        {
          name: '2 Caffa "Day of Disease"',
          category: 'releases',
          description: 'Release Date: 11-20-2013',
        },
       
       {
          name: '3 Cyanic "Litanies of Lust Unholy"',
          category: 'releases',
          description: 'Release Date: 1-11-2014',
        },
        {
          name: '4 Fiend "Demo 2013"',
          category: 'releases',
          description: 'Release Date: "1-11-2014"',
        },

        
        {
          name: '5 Xenotaph "Vitae Lacture"',
          category: 'releases',
          description: 'Release Date: 3-23-2014',
        },
        {
          name: '6 Swamp Witch "Gnosis"',
          category: 'releases',
          description: 'Release Date: 4-20-2014',
        },
        {
          name: '7 Badr Vogu "Agglomeration MMXIV"',
          category: 'releases',
          description: 'Release Date: 7-3-2014',
        },
        {
          name: '8 Naught "GETALBUMNAME"',
          category: 'releases',
          description: 'Release Date: 10-10-2014',
        },
        {
          name: '9 Cease "Humanity"',
          category: 'releases',
          description: 'Release Date: 12-12-2014',
        },

        /*
        {
          name: '10  - ""',
          category: 'releases',
          description: 'Release Date: ',
        },
        {
          name: '11  - ""',
          category: 'releases',
          description: '',
        },
        {
          name: '12  - ""',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '13  - ""',
          category: 'releases',
          description: 'Release Date:',
        },
        {
          name: '14  - ""',
          category: 'releases',
          description: 'Release Date:',
        }, */
        /*{
          name: '15  - ""', 
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

