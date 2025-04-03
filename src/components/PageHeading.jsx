import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const PageHeadingSection = styled.div`
  background-color: teal;
  img {
    transition-duration: 1s;
    transition-timingfunction: linear;
  }
`;

const PageHeading = ({ pageHeading }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [aeroplanePosition, setAeroplanePosition] = useState("0px");

  setTimeout(() => {
    if (aeroplanePosition === "0px") {
      setAeroplanePosition("15px");
    } else {
      setAeroplanePosition("0px");
    }
  }, 1000);
  return (
    <PageHeadingSection>
      <div className="container py-3">
        <div className="row">
          <div className="col col-12 col-lg-6">
            <h2
              className="display-1 text-light fw-bolder h-100 d-flex align-items-center justify-content-center justify-content-lg-start"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {pageHeading}
            </h2>
          </div>
          <div className="col col-12 col-lg-6">
            <div
              className="overflow-hidden d-flex align-items-center justify-content-center justify-content-lg-end"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img
                src="/WanderWay/pageHeadingImage.png"
                className="img-fluid"
                style={{ position: "relative", top: `${aeroplanePosition}` }}
              />
            </div>
          </div>
        </div>
      </div>
    </PageHeadingSection>
  );
};

export default PageHeading;
