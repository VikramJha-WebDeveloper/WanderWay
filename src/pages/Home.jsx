import React from "react";

// import sections
import Hero from "../sections/Hero";


const Home = ({userName}) => {
    return(
        <>
        <Hero userName={userName}/>
        </>
    );
};

export default Home;