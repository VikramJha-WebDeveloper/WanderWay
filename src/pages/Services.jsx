import React, {useEffect} from "react";
import Slider from "react-slick"; // Import the Slider component
import AOS from "aos";

import PageTitle from "../components/PageTitle";
import PageHeading from "../components/PageHeading";

const Services = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000
    })
  }, [])

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    {
      image: "/WanderWay/service Images/affordable-hotel.jpg",
      title: "Affordable Hotel",
      paragraph: "Stay in budget-friendly hotels without compromising on quality. Our partnered hotels provide the best amenities at affordable prices",
    },
    {
      image: "/WanderWay/service Images/foodAndDrinks.jpg",
      title: "Food & Drinks",
      paragraph: "Enjoy local delicacies and international cuisines included in our packages.",
    },
    {
      image: "/WanderWay/service Images/safetyGuide.jpg",
      title: "Safety Guide",
      paragraph: "Receive detailed safety information for each destination, including tips and emergency numbers.",
    },
    {
      image: "/WanderWay/service Images/transportation.jpg",
      title: "Transportation",
      paragraph: "We offer convenient transportation options, from airport transfers to guided tours around the city.",
    }, 
    {
      image: "/WanderWay/service Images/tourGuide.jpg",
      title: "Tour Guides",
      paragraph: "Our expert tour guides take you through famous landmarks and hidden gems in each destination.",
    }, 
    {
      image: "/WanderWay/service Images/travelInsurance.jpg",
      title: "Travel Insurance",
      paragraph: "We provide travel insurance packages for every trip, ensuring you travel safely with peace of mind.",
    }
  ]

  return (
    <>
    <PageHeading pageHeading="Services" />
    <div className="container py-5">
      <Slider {...settings}>
        {
          services.map((item, index)=>(
<div key={index} className="p-3" data-aos="zoom-in">
          <div className="card overflow-hidden border-0">
            <img src={item.image} alt="affordable-hotel" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.paragraph}</p>
            </div>
          </div>
        </div>
          ))
        }
      </Slider>
    </div>
    </>
  );
};

export default Services;
