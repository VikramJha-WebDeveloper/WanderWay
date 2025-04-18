import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import components
import PageHeading from "../components/PageHeading";

const PackageSection = styled.div`
  #package .col {
    /* border: 1px solid red; */
    padding: 15px;
  }

  #package .rating i {
    color: #e68618;
  }

  #package .card {
    overflow: hidden;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }

  #package .card p {
    color: rgb(93, 92, 92);
  }

  #package .card button {
    width: 100%;
    background-color: teal;
    color: white;
    transition-duration: 0.5s;
  }

  #package .card button:hover {
    background-color: rgb(0, 72, 72);
  }

  #package .card img {
    transition-duration: 0.5s;
  }

  #package .card:hover img {
    transform: scale(1.07);
  }

  #package .card h5 {
    transition-duration: 0.5s;
  }

  #package .card:hover h6 {
    color: rgb(1, 108, 108);
  }
`;

const India = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const packeges = [
      {
        image: "/WanderWay/package images/India – Taj Mahal, Agra.jpeg.jpg",
        title: "India – Taj Mahal, Agra",
        paragraph: "Visit the iconic symbol of love, the Taj Mahal.",
        price: "$1200 USD"
      },
      {
        image: "/WanderWay/package images/India – Jaipur.jpg",
        title: "India – Jaipur",
        paragraph: "Explore majestic forts, palaces, and vibrant markets.",
        price: "$1100 USD"
      }, 
      {
        image: "/WanderWay/package images/India - Goa.jpg",
        title: "India - Goa",
        paragraph: "Relax on beautiful beaches and explore vibrant nightlife.",
        price: "$1400 USD"
      },
  ]
  return (
    <PackageSection>
        <PageHeading pageHeading="India"/>
      <div id="package" className="container my-5">
        <div className="row">
        {packeges.map((item, index)=>(
          <div key={index} className="col col-12 col-sm-6 col-lg-4">
          <div className="card" data-aos="fade-up">
            <img
              src={item.image}
              className="card-img-top"
            />
            <div className="card-body">
              <h6>{item.title}</h6>
              <p>{item.paragraph}</p>
              <div className="d-flex justify-content-between align-items-center">
                <h5>{item.price}</h5>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
        
        ))}
        </div>
      </div>
    </PackageSection>
  );
};

export default India;