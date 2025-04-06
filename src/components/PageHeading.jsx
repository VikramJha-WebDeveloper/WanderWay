import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const PageHeadingSection = styled.div`
  background-color: teal;
  position: relative;
  img {
    transition-duration: .5s;
    transition-timingfunction: linear;
  }
  .ball{
    width: 100px;
    height: 100px;
    background:rgb(2, 151, 151);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    // opacity: .5;
    
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: linear;
    transform: scale(0);
  }
  .ball-1{
    left: 55%;
    top: 10%;
    animation-name: ballOneAnimation;
    animation-delay: 1s;
  }
  .ball-2{
    left: 70%;  
    top: 60%;
    animation-name: ballTwoAnimation;
    animation-delay: 2s;
  }
  .ball-3{
    left: 30%;
    top: 50%;
    animation-name: ballThreeAnimation;
    animation-delay: 3s;
  }
  .ball-4{
    left: 15%;
    top: 20%;
    animation-name: ballFourAnimation;
    animation-delay: 4s;
  }
  .ball-5{
    left: 70%;
    top: 10%;
    animation-name: ballFiveAnimation;
    animation-delay: 5s;
  }
  .ball-6{
    left: 40%;
    top: 5%;
    animation-name: ballSixAnimation;
    animation-delay: 1s;
  }
  .ball-7{
    left: 90%;
    top: 40%;
    animation-name: ballSevenAnimation;
    animation-delay: 2s;
  }
  .ball-8{
    left: 5%;
    top: 60%;
    animation-name: ballEightAnimation;
    animation-delay: 3s;
  }
  .ball-9{
    left: 45%;
    top: 60%;
    animation-name: ballNineAnimation;
    animation-delay: 4s;
  }
  .ball-10{
     left: 2%;
     top: 2%;  
     animation-name: ballTenAnimation;
     animation-delay: 5s;
  }
  .ball-11{
     left: 85%;
     top: 2%;  
     animation-name: ballElevenAnimation;
     animation-delay: 1s;
  }
    .ball-12{
     left: 27%;
     top: 2%;  
     animation-name: ballTwelveAnimation;
     animation-delay: 2s;
  }
  .ball-13{
     left: 58%;
     top: 55%;  
     animation-name: ballThirteenAnimation;
     animation-delay: 3s;
  }
  .ball-14{
     left: 20%;
     top: 60%;  
     animation-name: ballFourteenAnimation;
     animation-delay: 4s;
  }
  .ball-15{
     left: 82%;
     top: 57%;  
     animation-name: ballFifteenAnimation;
     animation-delay: 5s;
  }

  @keyframes ballOneAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
  @keyframes ballTwoAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
  @keyframes ballThreeAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
    @keyframes ballFourAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
    @keyframes ballFiveAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
    @keyframes ballSixAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
    @keyframes ballSevenAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
    @keyframes ballEightAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
    @keyframes ballNineAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
    @keyframes ballTenAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
}
    @keyframes ballElevenAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
}
    @keyframes ballTwelveAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
}
    @keyframes ballThirteenAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
}
    @keyframes ballFourteenAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
}
    @keyframes ballFifteenAnimation{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
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
  const balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <PageHeadingSection>
      {balls.map((ball, index) => (
        <div id={index} className={`ball ball-${index + 1} position-absolute`}></div>
      ))}
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
