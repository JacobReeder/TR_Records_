import React from 'react';
import footerImage from "../../assets/cover/footer-image.jpg";

//TODO: export this component into a footer

function About() {
    return (
      <section className="my-5">
       <h1 id="about"></h1>
       <img src={footerImage} className="my-2" style={{ width: "100%" }} alt="cover" />
       <div className="my-2">
         <p></p>
         </div>   
      </section>
    );
  }
  
  export default About;