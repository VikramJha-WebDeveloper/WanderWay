import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
i{
color: teal;
transition-duration: .3s;
}

i:hover{
  color: white;
}
`

const Footer = () => {
    return(
        <FooterSection>
        <footer className="bg-dark py-2 px-3">
  <div className="footer-content">
    <div className="my-1">
      <ul className="list-group list-group-horizontal m-0 d-flex justify-content-center">
        <li className="list-group-item bg-dark border-0 p-0"><a href="https://www.instagram.com" target="_blank" className="social-icon"><i className="bi bi-instagram mx-2 fs-5"></i></a></li>
        <li className="list-group-item bg-dark border-0 p-0"><a href="https://www.facebook.com" target="_blank" className="social-icon"><i className="bi bi-facebook mx-2 fs-5"></i></a></li>
        <li className="list-group-item bg-dark border-0 p-0"><a href="https://www.twitter.com" target="_blank" className="social-icon"><i className="bi bi-twitter-x mx-2 fs-5"></i></a></li>
      </ul>
    </div>
    <div className="text-center">
      <p className="m-0 text-light">&copy; 2025 Wanderway. All Rights Reserved.</p>
    </div>
  </div>
</footer>
        </FooterSection>
    );
};

export default Footer;