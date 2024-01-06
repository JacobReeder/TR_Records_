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
          name: '8 Naught "Tomhyggjublus"',
          category: 'releases',
          description: 'Release Date: 10-10-2014',
        },
        {
          name: '9 Cease "Humanity"',
          category: 'releases',
          description: 'Release Date: 12-12-2014',
        },
        {
          name: '10 ClOAK "Succumb"',
          category: 'releases',
          description: 'Release Date: 3-11-2015',
        },
        {
          name: '11 Church - "Uanswered Hymns"',
          category: 'releases',
          description: 'Releaase Date: 4-12-2015',
        },
        {
          name: '12 Swamp Witch "The Slithering Bog"',
          category: 'releases',
          description: 'Release Date: 5-15-2015',
        },
        {
          name: '13 Swamp Witch "The Slithering Bog Chopped to Shit"',
          category: 'releases',
          description: 'Release Date: 4-12-2015',
        },
        {
          name: '14 Devoid "I & II"',
          category: 'releases',
          description: 'Release Date: 7-11-2015',
        }, 
        {
          name: '15 Beira "Vol.1"', 
          category: 'releases',
          description: 'Release Date: 7-11-2015',
        },
        
        {
          name: '16 Brume "Donkey"',
          category: 'releases',
          description: 'Releases Date: 9-11-2015',
        },
        {
          name: '17 Hallucinator "Primeval Power"',
          category: 'releases',
          description: 'Releases Date: 10-27-2015',
        },
        {
          name: '18 Defecrator "Tales of Defecration"',
          category: 'releases',
          description: 'Releases Date: 11-11-2015',
        },
        {
          name: '19 Cease "Unfold"',
          category: 'releases',
          description: 'Releases Date: 3-11-2016',
        },
        
        {
          name: '20 Rhizome S/T',
          category: 'releases',
          description: 'Releases Date: 3-11-2016',
        },
        {
          name: ' 21 Modraniht "To the Dark Mothers',
        category: 'releases',
        description: 'Releases Date: 6-26-2016',
        },
        {
          name: '22 Body Void "Ruins"',
        category: 'releases',
        description: 'Releases Date: 6-26-2016',
        },
        {
          name: '23 Hands of Thieves "Feasting on Dark Intentions"',
        category: 'releases',
        description: 'Releases Date: 9-11-2016',
        },
        
        {
          name: '24 Oozepus "Lypemania"',
        category: 'releases',
        description: 'Releases Date: 12-12-2016',
        },
        {
          name: '25 Chronaexus "Outreach From a Withered Hand"',
        category: 'releases',
        description: 'Releases Date: 12-12-2016',
        },
        {
          name: '26 WANING "Still Hours"',
        category: 'releases',
        description: 'Releases Date: 2-17-2017',
        },
        {
          name: '27 DISMEMBERED CARNAGE "Deranged Butchery"',
        category: 'releases',
        description: 'Releases Date: 12-21-2016',
        },
        
        {
          name: '28 CAFFA "Mental Enslavement"',
        category: 'releases',
        description: 'Releases Date: 2-22-2017 ',
        },
        {
          name: '29 Rapid Decline "Less Power, More Violence"',
        category: 'releases',
        description: 'Releases Date: 4-20-2017',
        },
        {
          name: '30 Daxma "The Nowhere of Shangri-La"',
        category: 'releases',
        description: 'Releases Date: 4-20-2017',
        },
        {
          name: '31 Ensepulcher "No Sanctity in Death "',
        category: 'releases',
        description: 'Releases Date: 4-20-2017',
        },
        /*
        {
          name: '32 Battle Hag "Tongue of the Earth"',
        category: 'releases',
        description: 'Releases Date: 5-7-2017',
        },
         {
          name: '33 NOSTRUM "Infernal Tomb"',
        category: 'releases',
        description: 'Releases Date: 6-6-2017',
        },
         {
          name: '34 Cosmic Reef Temple "Age of the Spaceborn"',
        category: 'releases',
        description: 'Releases Date: 6-16-2017',
        },
         {
          name: '35 DWEL "Lodestone"',
        category: 'releases',
        description: 'Releases Date: 6-26-2016',
        },
         {
          name: '36 BLAZAR "PHASE OMEGA"',
        category: 'releases',
        description: 'Releases Date: 7-7-2017',
        },
         {
          name: '37 Owl Coven "Cosmic Void"',
        category: 'releases',
        description: 'Releases Date: 7-27-2017',
        },
         {
          name: '38 Demonsmoke "Morphine Moonshine"',
        category: 'releases',
        description: 'Releases Date: 8-1-2017',
        },
         {
          name: '39 Xenotaph "Media Morte in Vita Sumus"',
        category: 'releases',
        description: 'Releases Date: 11-11-2017',
        },
         {
          name: '40 Mystic Priestess "S/T"',
        category: 'releases',
        description: 'Releases Date: 12-22-2017',
        },
         {
          name: '41 Dipygus "Long Pig Feast"',
        category: 'releases',
        description: 'Releases Date: 1-11-2018',
        },
         {
          name: '42 Vile Apparition "Atrocious Captivity"',
        category: 'releases',
        description: 'Releases Date: 1-1-2018',
        },
         {
          name: '43 Dearth "Of Martyrdom and Polluted Faith"',
        category: 'releases',
        description: 'Releases Date: 7-11-2018',
        },
         {
          name: '44 Atone "S/T"',
        category: 'releases',
        description: 'Releases Date: 7-11-2018',
        },
         {
          name: '45 Gravecoven "Coughing Blood"',
        category: 'releases',
        description: 'Releases Date: 7-11-2018',
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

