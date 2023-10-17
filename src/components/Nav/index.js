import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import coverImage from "../../assets/cover/cover-image.jpg";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

 

  return (
    <header className="flex-row px-1">
     
      <h2>
       <a data-testid="link" href="/">
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
          <span role="img" aria-label="banner"></span> 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
            
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>
            Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
               {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav


