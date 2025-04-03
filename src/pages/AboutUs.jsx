import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import components
import PageTitle from "../components/PageTitle";
import PageHeading from "../components/PageHeading";

const AboutUsSection = styled.div`
overflow: hidden;
.card{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}
strong{
color: teal;
}
`
const AboutUs = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <AboutUsSection>
      <PageHeading pageHeading="About Us" />
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-6 mt-4 mt-lg-0 d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-delay="100">
            <div className="card overflow-hidden p-3">
            <img src="/WanderWay/about_us_image.jpg" className="rounded"/>
            </div>
          </div>
          <div className="col col-12 col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
              <p>
                <strong>Established:</strong> Wanderway was established in <b>2015</b> with a vision to offer unforgettable travel experiences for adventurers around the world.
              </p>
              <p>
                Wanderway is a company committed to bringing unique travel
                experiences to all our explorers. Whether it's a tranquil
                getaway or an adventurous journey, we focus on offering the best
                experiences for wanderers.
              </p>
              <p>
                <strong>Our Mission:</strong> Our mission is to inspire and facilitate meaningful travel by offering once-in-a-lifetime experiences that create lasting memories. Whether you’re looking to explore pristine landscapes, immerse in diverse cultures, or challenge yourself with exciting activities, Wanderway makes it possible.
              </p>
              <p>
                <strong>Adventure: </strong>We believe that true adventure enriches the soul, and we bring that spirit to every journey.
              </p>
              <p>
                <strong>Discovery: </strong>We’re passionate about helping travelers discover hidden gems across the world.
              </p>
              <p><strong>Sustainability: </strong>We prioritize responsible travel practices that protect the environment and preserve local cultures.
              </p>
            </div>
          </div>
        </div>
    </AboutUsSection>
  );
};

export default AboutUs;
