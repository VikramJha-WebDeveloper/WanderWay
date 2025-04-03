import React from "react";

// import sections
import Hero from "../sections/Hero";
// import Book from "../sections/Book";
// import Packages from "../sections/Package";
// import Services from "../sections/Services";
// import Gallery from "../sections/Gallery";
// import AboutUs from "../sections/AboutUs";

const Home = ({userName}) => {
    return(
        <>
        <Hero userName={userName}/>
      {/* <Book />
      <Packages/>
      <Services />
      <Gallery />
      <AboutUs />      */}
        </>
    );
};

export default Home;