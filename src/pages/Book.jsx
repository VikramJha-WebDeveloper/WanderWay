import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AOS from "aos";

// import components
import PageHeading from "../components/PageHeading";
import Footer from "../components/Footer";

const BookSection = styled.div`
overflow: hidden;
#booking button{
    background-color: teal;
    transition-duration: .5s;
}

#booking button:hover{
    background-color: rgb(0, 72, 72);
}

#booking .card{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}
`

const Book = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000
    })
  }, []);

  const [startTripDate, setStartTripDate] = useState("");
  const [endTripDate, setEndTripDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  // setting trip starting date
  const now = new Date();
  let startingDate = now.getDate();
  let startingYear = now.getFullYear();

  now.setMonth(now.getMonth()+1)
  let startingMonth = now.getMonth();

  if(startingMonth<=8){
    startingMonth = "0"+startingMonth;
  }else if(startingMonth>8){
    startingMonth = startingMonth;
  }

  if(startingDate<=9){
    startingDate="0"+startingDate
  }
  let formattedStartingDate =  `${startingYear}-${startingMonth}-${startingDate}`;

  const handleStartingTripDate = (e) => {
    setStartTripDate(e.target.value);
    setEndTripDate("");
    setIsDisabled(false)
  }


  // setting trip ending date
  const end = new Date(startTripDate);
  end.setDate(end.getDate()+1)
  let endingDate = end.getDate();

  end.setMonth(end.getMonth()+1);
  let endingMonth = end.getMonth();
  let endingYear = end.getFullYear();

  if(endingMonth<=8){
    endingMonth = "0"+(endingMonth)
  }
  if(endingDate<=9){
    endingDate = "0"+(endingDate)
  }else{
    endingDate = endingDate;
  }
  const formattedEndingDate = `${endingYear}-${endingMonth}-${endingDate}`;
  
  const handleEndingTrip = (e) => {
    setEndTripDate(e.target.value);
  }
  return (
    <BookSection>
      <PageHeading pageHeading="Book" />
      
    <div id="booking" className="container py-5">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <div className="card p-3 rounded">
            <img src="/WanderWay/openSky.jpg" className="img-fluid rounded" />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
          <div className="card p-4 border-0">
            <div className="card-body">
              <form>
                <select className="form-select" required>
                  <option value="" disabled defaultValue="Select Your Destination">Select Your Destination</option>
                  <option value="UnitedStates">United States</option>
                  <option value="India">India</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Australia">Australia</option>
                </select>
                <div className="mt-3">
                  <label className="form-label" htmlFor="persons">
                    Number of Travelers:
                  </label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mt-3">
                  <label className="form-label startDate" htmlFor="startDate">
                    Trip Start Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    min={formattedStartingDate}
                    value={startTripDate}
                    onChange={handleStartingTripDate}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="endDate" className="form-label endDate">
                    Trip End Date:
                  </label>
                  <input
                    disabled={isDisabled}
                    type="date"
                    className="form-control"
                    id="endDate"
                    min={formattedEndingDate}
                    value={endTripDate}
                    onChange={handleEndingTrip}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label" htmlFor="message">
                    Trip Details (Optional):
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    minLength="50"
                    maxLength="500"
                    required
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button type="submit" className="text-light btn btn-">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </BookSection>
  );
};

export default Book;