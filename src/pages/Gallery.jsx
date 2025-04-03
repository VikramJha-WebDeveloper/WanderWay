import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";

// import components
import PageHeading from "../components/PageHeading";
import Footer from "../components/Footer";

const GallerySection = styled.div`
  .card {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.25rem solid white !important;
    border: 0px;
    cursor: pointer;
    transition-duration: 0.25s;
    z-index: 0;
  }
  .card:hover {
    transform: scale(1.2);
    z-index: 1;
  }
  .card-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    transition-duration: 0.3s;
  }
  .card:hover div.card-overlay {
    top: 0;
  }

  .modal-content {
    background-color: transparent;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .modal-img-body{
    animation-name: animate-border;
    border: 3px solid transparent;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes animate-border{
    0%{
    border-top: 3px solid teal;
    border-right: 3px solid yellow;
    border-bottom: 3px solid white;
    border-left: 3px solid transparent;
    }
    25%{
    border-top: 3px solid transparent;
    border-right: 3px solid teal;
    border-bottom: 3px solid yellow;
    border-left: 3px solid white;
    }
    50%{
    border-top: 3px solid white;
    border-right: 3px solid transparent;
    border-bottom: 3px solid teal;
    border-left: 3px solid yellow;
    }
    75%{
    border-top: 3px solid yellow;
    border-right: 3px solid white;
    border-bottom: 3px solid transparent;
    border-left: 3px solid teal;
    }
    100%{
    border-top: 3px solid teal;
    border-right: 3px solid yellow;
    border-bottom: 3px solid white;
    border-left: 3px solid transparent;
    }
  }

  i {
    cursor: pointer;
  }
`;

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [clickedImage, setClickedImage] = useState("");
  const images = [
    {
      image: "/WanderWay/gallery images/beach_sunset.jpg",
      imageName: "Beach Sunset",
    },
    {
      image: "/WanderWay/gallery images/mountain_view.jpg",
      imageName: "Mountain View",
    },
    {
      image: "/WanderWay/gallery images/new_york_skyline.jpg",
      imageName: "New York Sky Line",
    },
    {
      image: "/WanderWay/gallery images/paris_skyline.jpg",
      imageName: "Paris Skyline",
    },
    {
      image: "/WanderWay/gallery images/family_hiking_on_mountain copy.jpg",
      imageName: "A family hiking on a mountain",
    },
    {
      image: "/WanderWay/gallery images/eating_food.jpg",
      imageName: "people eating local food at a market",
    },
    {
      image: "/WanderWay/gallery images/friends_taking_selfie.jpg",
      imageName: "friends taking a selfie at a landmark",
    },
    {
      image: "/WanderWay/gallery images/hiking.jpg",
      imageName: "hiking",
    },
    {
      image: "/WanderWay/gallery images/kayaking.jpg",
      imageName: "Kayaking",
    },
    {
      image: "/WanderWay/gallery images/surfing.jpeg.jpg",
      imageName: "Surfing",
    },
    {
      image: "/WanderWay/gallery images/people_zip_lining.jpg",
      imageName: "People Zip Lining",
    },
    {
      image: "/WanderWay/gallery images/waterfall.jpg",
      imageName: "Waterfall",
    },

    {
      image: "/WanderWay/gallery images/street_foods.jpg",
      imageName: "Street Foods",
    },
    {
      image: "/WanderWay/gallery images/national park.jpg",
      imageName: "National Park",
    },
    {
      image: "/WanderWay/gallery images/beachside_bungalow.jpg",
      imageName: "Beachside Bungalow",
    },
    {
      image: "/WanderWay/gallery images/cozy_mountain_cabin.jpg",
      imageName: "Cozy Mountain Cabin",
    },
    {
      image: "/WanderWay/gallery images/Luxury_hotel.jpg",
      imageName: "Luxury Hotel",
    },
    {
      image: "/WanderWay/gallery images/local_market.jpg",
      imageName: "Local Market",
    },
    {
      image: "/WanderWay/gallery images/wild_animals.jpg",
      imageName: "Wild Animals",
    },
    {
      image: "/WanderWay/gallery images/rain_forest.jpg",
      imageName: "Rain Forest",
    },
  ];
  const showImage = ({ imageDetails }) => {
    console.log(imageDetails);
    setClickedImage(imageDetails);
  };
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
  return (
    <GallerySection>
      <PageHeading pageHeading="Gallery" />
      <div className="container py-5">
        <div className="row">
          {images.map((imageDetails, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 my-3"
              data-aos="fade-up"
            >
              <div className="card card-img-top overflow-hidden bg-light">
                <div
                  className="card-overlay rounded d-flex align-items-center justify-content-center text-light"
                  onClick={() => showImage({ imageDetails })}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Click to view
                </div>
                <img src={imageDetails.image} className="img-fluid rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Content */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content border-0">
            <div className="modal-header border-0 d-flex align-items-center justify-content-between">
              <h3 className="text-light modalImgName">{clickedImage.imageName}</h3>
              <i
                className="bi bi-x-lg fs-1 fw-bold top-0 end-0 d-block text-light"
                data-bs-dismiss="modal"
              ></i>
            </div>

            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="rounded overflow-hidden p-1 bg-light bg-transparent modal-img-body">
                <img src={clickedImage.image} className="rounded img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </GallerySection>
  );
};

export default Gallery;
