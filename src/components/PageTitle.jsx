import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from "aos";

const PageTitleSection = styled.div`
  h2:first-letter{
    color: teal;
  }
  h2::after {
    content: "";
    width: 150px;
    height: 5px;
    background-color: teal;
    display: block;
    border-radius: 50%;
    margin: 15px auto;
  }
`

const PageTitle = ({pageTitle}) => {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
        })
    }, [])
  return (
    <PageTitleSection>
      <div className="sectionHeading" data-aos="zoom-in">
        <h2 className="text-center">
          {pageTitle}
        </h2>
      </div>
    </PageTitleSection>
  );
};

export default PageTitle;