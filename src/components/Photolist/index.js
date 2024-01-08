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
          name: '5 Xenotaph "Vitae Lactura"',
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
          name: '10 Cloak "Succumb"',
          category: 'releases',
          description: 'Release Date: 3-11-2015',
        },
        {
          name: '11 Church - "Unanswered Hymns"',
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
          description: 'Release Date: 9-11-2015',
        },
        {
          name: '17 Hallucinator "Primeval Power"',
          category: 'releases',
          description: 'Release Date: 10-27-2015',
        },
        {
          name: '18 Defecrator "Tales of Defecration"',
          category: 'releases',
          description: 'Release Date: 11-11-2015',
        },
        {
          name: '19 Cease "Unfold"',
          category: 'releases',
          description: 'Release Date: 3-11-2016',
        },
        
        {
          name: '20 Rhizome S/T',
          category: 'releases',
          description: 'Release Date: 3-11-2016',
        },
        {
          name: ' 21 Modraniht "To the Dark Mothers',
        category: 'releases',
        description: 'Release Date: 6-26-2016',
        },
        {
          name: '22 Body Void "Ruins"',
        category: 'releases',
        description: 'Release Date: 6-26-2016',
        },
        {
          name: '23 Hands of Thieves "Feasting on Dark Intentions"',
        category: 'releases',
        description: 'Release Date: 9-11-2016',
        },
        
        {
          name: '24 Oozepus "Lypemania"',
        category: 'releases',
        description: 'Release Date: 12-12-2016',
        },
        {
          name: '25 Chronaexus "Outreach From a Withered Hand"',
        category: 'releases',
        description: 'Release Date: 12-12-2016',
        },
        {
          name: '26 Waning "Still Hours"',
        category: 'releases',
        description: 'Release Date: 2-17-2017',
        },
        {
          name: '27 Dismembered Carnage "Deranged Butchery"',
        category: 'releases',
        description: 'Release Date: 12-21-2016',
        },
        
        {
          name: '28 Caffa "Mental Enslavement"',
        category: 'releases',
        description: 'Release Date: 2-22-2017 ',
        },
        {
          name: '29 Rapid Decline "Less Power, More Violence"',
        category: 'releases',
        description: 'Release Date: 4-20-2017',
        },
        {
          name: '30 Daxma "The Nowhere of Shangri-La"',
        category: 'releases',
        description: 'Release Date: 4-20-2017',
        },
        {
          name: '31 Ensepulcher "No Sanctity in Death "',
        category: 'releases',
        description: 'Release Date: 4-20-2017',
        },
        /*
        {
          name: '32 Battle Hag "Tongue of the Earth"',
        category: 'releases',
        description: 'Release Date: 5-7-2017',
        },
         {
          name: '33 NOSTRUM "Infernal Tomb"',
        category: 'releases',
        description: 'Release Date: 6-6-2017',
        },
         {
          name: '34 Cosmic Reef Temple "Age of the Spaceborn"',
        category: 'releases',
        description: 'Release Date: 6-16-2017',
        },
         {
          name: '35 DWEL "Lodestone"',
        category: 'releases',
        description: 'Release Date: 6-26-2016',
        },
         {
          name: '36 Blazar "PHASE OMEGA"',
        category: 'releases',
        description: 'Release Date: 7-7-2017',
        },
         {
          name: '37 Owl Coven "Cosmic Void"',
        category: 'releases',
        description: 'Release Date: 7-27-2017',
        },
         {
          name: '38 Demonsmoke "Morphine Moonshine"',
        category: 'releases',
        description: 'Release Date: 8-1-2017',
        },
         {
          name: '39 Xenotaph "Media Morte in Vita Sumus"',
        category: 'releases',
        description: 'Release Date: 11-11-2017',
        },
         {
          name: '40 Mystic Priestess "S/T"',
        category: 'releases',
        description: 'Release Date: 12-22-2017',
        },
         {
          name: '41 Dipygus "Long Pig Feast"',
        category: 'releases',
        description: 'Release Date: 1-11-2018',
        },
         {
          name: '42 Vile Apparition "Atrocious Captivity"',
        category: 'releases',
        description: 'Release Date: 1-1-2018',
        },
         {
          name: '43 Dearth "Of Martyrdom and Polluted Faith"',
        category: 'releases',
        description: 'Release Date: 7-11-2018',
        },
         {
          name: '44 Atone "S/T"',
        category: 'releases',
        description: 'Release Date: 7-11-2018',
        },
         {
          name: '45 Gravecoven "Coughing Blood"',
        category: 'releases',
        description: 'Release Date: 7-11-2018',
        },
        {
          name: '46 Mortuous "Through Wilderness"',
        category: 'releases',
        description: 'Release Date: 6-22-2018',
        },
          name: '47 Yarrow "Rebirth"',
        category: 'releases',
        description: 'Release Date: 9-11-2018',
        },
          name: '48 Abyssal "Misanthrope"',
        category: 'releases',
        description: 'Release Date: 10-31-2018',
        },
          name: '49 Evulse "Call of the Void"',
        category: 'releases',
        description: 'Release Date: 10-22-2018',
        },
          name: '50 Swamp Witch "Dead Ritauls"',
        category: 'releases',
        description: 'Release Date: 5-10-2019',
        },
          {
          name: '51 Trapped Within Burning Machinery "The Putrid Stench of Decaying Self"',
        category: 'releases',
        description: 'Release Date: 7-4-2019',
        },
          name: '52 Barren Altar "Entrenched in the Faults of the Earth"',
        category: 'releases',
        description: 'Release Date: 7-4-2019',
        },
          name: '53 Denunciation "Garbage Burial"',
        category: 'releases',
        description: 'Release Date: 8-11-2019',
        },
          name: '54 False Figure "A Promised End"',
        category: 'releases',
        description: 'Release Date: 9-29-2019',
        },
          name: '55 Shrinkwrap Killers "Parents + FBI = Cahoots"',
        category: 'releases',
        description: 'Release Date: 11-7-2019',
        },
          {
          name: '56 Exulansis "Sequestered Sympathy"',
        category: 'releases',
        description: 'Release Date: 7-7-2019',
        },
          name: '57 Chrome Ghost "The Diving Bell"',
        category: 'releases',
        description: 'Release Date: 11-30-2019 ',
        },
          name: '58 Letharia "S/T"',
        category: 'releases',
        description: 'Release Date: 11-30-2019',
        },
          name: '59 Cyanic "S/T"',
        category: 'releases',
        description: 'Release Date: 4-12-2020',
        },
          name: 'Pastoral "S/T"',
        category: 'releases',
        description: 'Release Date: 4-19-2020',
        },
         name: 'TZOMPANTLI "S/T"',
        category: 'releases',
        description: 'Release Date: 4-26-2020',
        },
        name: 'Occlith "Gates, Doorways, and Endings"',
        category: 'releases',
        description: 'Release Date: 5-1-2020',
        },
         name: 'Sectarian Bloom "S/T"',
        category: 'releases',
        description: 'Release Date: 6-6-2020',
        },
         name: 'Wasteland Coven "Ruined"',
        category: 'releases',
        description: 'Release Date: 6-26-2020',
        },
         name: 'Torture Tomb "Killing to See How it Feels"',
        category: 'releases',
        description: 'Release Date: 6-6-2020',
        },
        name: 'Hellish Form "MMXX"',
        category: 'releases',
        description: 'Release Date: 7-17-2020',
        },
         name: 'Crushing the Scepter "Echoing Screams of Madness and Delusion"',
        category: 'releases',
        description: 'Release Date: 7-27-2020',
        },
          name: 'Sky Pig "Hell is Inside You"',
        category: 'releases',
        description: 'Release Date: 7-27-2020',
        },
         name: 'Caged "Stricken by Continuance"',
        category: 'releases',
        description: 'Release Date: 8-7-2020',
        },
        name: 'Sepulchral Curse "A Birth in Death"',
        category: 'releases',
        description: 'Release Date: 8-7-2020',
        },
         name: 'Stagnater "The Guillotine Demo"',
        category: 'releases',
        description: 'Release Date: 8-7-2020',
        },
         name: 'Exhumation "Eleventh Formulae"',
        category: 'releases',
        description: 'Release Date: 8-7-2020',
        },
         name: 'Caffa "Compilation"',
        category: 'releases',
        description: 'Release Date: 9-4-2020',
        },
        name: 'Kombat "New Dimensions of Pain"',
        category: 'releases',
        description: 'Release Date: 9-4-2020',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
        },
         name: ' ""',
        category: 'releases',
        description: 'Release Date: ',
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

