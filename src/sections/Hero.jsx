import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import { toast } from "react-toastify";

const HeroSection = styled.div`
position: relative;
#hero{
    height: calc(90vh + 16px);
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 0px 50px;
    clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 100% 100%, 50% 93%, 0 100%, 0% 70%, 0% 35%, 0 0)
}

#hero .background-overlay{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))
}

#hero video{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; 
    width: 100%;
    object-fit: cover;
    height: 100%;
    }

#hero h1{
    font-size: 2.5rem;
    color: white;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 10vh;
    z-index: 1;
}

#hero h2{
    font-size: 4.5rem;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    font-family: "Lilita One", serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  z-index: 1;
}

#hero button{
    width: 200px;
    padding: 12.5px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    margin-bottom: 30px;
    background-color: teal;
    color: white;
    font-weight: bold;
    font-size: 15px;
    transition-duration: .5s;
    border: 3px solid white;
    z-index: 1;
}

#hero button:hover{
background-color: rgb(0, 72, 72);
}


@media screen and (max-width: 764px){
    #hero h2{
        font-size: 9vw;
    }
}
@media screen and (max-width: 534px){
    #hero h1{
        font-size: 6vw;
    }
}
`;

const Hero = ({userName}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const navigate = useNavigate();
  const placeNames = [
    {
      countryName: "United States",
      color: "#a178de",
    },
    {
      countryName: "India",
      color: "#fc7679",
    },
    {
      countryName: "France",
      color: "#fda477",
    },
    {
      countryName: "Germany",
      color: "#51b7e7",
    },
    {
      countryName: "Switzerland",
      color: "#a9ce80",
    },
    {
      countryName: "Australia",
      color: "#fbdd04",
    },
  ];
  setTimeout(() => {
    if (count === placeNames.length - 1) {
      setCount(0);
      return;
    }
    setCount(count + 1);
  }, 200);

  const goToBookPage = ()=>{
    if(!userName){
      toast.error("Please login first!");
      return;
    }
    navigate("/book")
  }
  return (
    <HeroSection className="mb-3">
      <div id="hero">
        <div className="background-overlay"></div>
        <video autoPlay loop muted>
          <source src="/WanderWay/heroBgVideo.mp4" type="video/mp4"></source>
        </video>
        <h1 data-aos="fade-right" style={{zIndex: 9}}>Welcome to WanderWay</h1>
        <h2 data-aos="fade-left">
          Visit{" "}
          <span
            style={{ color: `${placeNames[count].color}` }}
            className="placeName"
          >
            {placeNames[count].countryName}
          </span>
        </h2>
        <div data-aos="zoom-in">
        <button onClick={goToBookPage}>
          Book now
        </button>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
