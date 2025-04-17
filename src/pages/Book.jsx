import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AOS from "aos";
import { toast } from "react-toastify";

// import components
import PageHeading from "../components/PageHeading";

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

  const [destination, setDestination] = useState("United States");
  const [travelerNumbers, setTravelerNumbers] = useState("");
  const [tripDetails, setTripDetails] = useState("");

  // set errors
  const [destinationError, setDestinationError] = useState("");
  const [travelerNumbersError, setTravelerNumbersError] = useState("");
  const [startTripDateError, setStartTripDateError] = useState("");
  const [endTripDateError, setEndTripDateError] = useState("");
  const [tripDetailsError, setTripDetailsError] = useState("");

  // setting trip starting date
  const now = new Date();
  let startingDate = now.getDate();
  let startingYear = now.getFullYear();

  now.setMonth(now.getMonth()+1)
  let startingMonth = now.getMonth();
  console.log(startingMonth)
  if(startingMonth<=9){
    startingMonth = "0"+startingMonth;
  }else if(startingMonth>9){
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
  console.log(startTripDate)
  end.setDate(end.getDate()+1)
  let endingDate = end.getDate();

  end.setMonth(end.getMonth()+1);
  let endingMonth = end.getMonth();
  let endingYear = end.getFullYear();

  if(endingMonth<=9){
    endingMonth = "0"+(endingMonth)
  }else{
    endingMonth = endingMonth
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
  
  const collectData = (e)=>{
    e.preventDefault();
    if(!destination){
      setDestinationError("*Please choose Your Destination⚠️");
    }else{
      setDestinationError("");
    }
    if(!travelerNumbers){
      setTravelerNumbersError("*Please enter number of travelers⚠️");
    }else{
      setTravelerNumbersError("");
    }
    if(!startTripDate){
      setStartTripDateError("*Please choose start trip date⚠️");
    }else{
      setStartTripDateError("");
    }
    if(!endTripDate){
      setEndTripDateError("*Please choose end trip date⚠️");
    }else{
      setEndTripDateError("");
    }
    if(!tripDetails){
      setTripDetailsError("*Description needs to be enter minimum 50 characters and maximum 500 characters⚠️");
    }else{
      setTripDetailsError("");
    }
    if(destination && travelerNumbers && startTripDate && endTripDate && travelerNumbers && tripDetails){
      toast.success("Booking successfful");
      setTravelerNumbers(""); setStartTripDate(""); setEndTripDate(""); setTripDetails(""); setDestinationError(""); 
      setTravelerNumbersError(""); setStartTripDateError(""); setEndTripDateError(""); setTripDetailsError("");
    }
  }
 
  console.log(travelerNumbersError);
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
              <form onSubmit={collectData}>
                <select className={`form-select ${destinationError?"is-invalid":""}`} required onChange={(e)=>setDestination(e.target.value)}>
                  <option value="" disabled defaultValue="Select Your Destination">Select Your Destination</option>
                  <option value="UnitedStates">United States</option>
                  <option value="India">India</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Australia">Australia</option>
                </select>
                <span>{destinationError}</span>
                <div className="mt-3">
                  <label className="form-label" htmlFor="persons">
                    Number of Travelers:
                  </label>
                  <input type="number" className={`form-control ${travelerNumbersError? "is-invalid":""}`} value={travelerNumbers} onChange={(e)=>setTravelerNumbers(e.target.value)} />
                  <span className="invalid-feedback">{travelerNumbersError}</span>
                </div>
                <div className="mt-3">
                  <label className="form-label startDate" htmlFor="startDate">
                    Trip Start Date:
                  </label>
                  <input
                    type="date"
                    className={`form-control ${startTripDateError?"is-invalid":""}`}
                    id="startDate"
                    min={formattedStartingDate}
                    value={startTripDate}
                    onChange={handleStartingTripDate}
                  />
                  <span className="invalid-feedback">{startTripDateError}</span>
                </div>
                <div className="mt-3">
                  <label htmlFor="endDate" className="form-label endDate">
                    Trip End Date:
                  </label>
                  <input
                    disabled={isDisabled}
                    type="date"
                    className={`form-control ${endTripDateError?"is-invalid":""}`}
                    id="endDate"
                    min={formattedEndingDate}
                    value={endTripDate}
                    onChange={handleEndingTrip}
                  />
                  <span className="invalid-feedback">{endTripDateError}</span>
                </div>
                <div className="mt-3">
                  <label className="form-label" htmlFor="message">
                    Trip Details:
                  </label>
                  <textarea
                    id="message"
                    className={`form-control ${travelerNumbersError?"is-invalid":""}`}
                    minLength="50"
                    maxLength="500"
                    value={tripDetails}
                    onChange={(e)=>setTripDetails(e.target.value)}
                  ></textarea>
                  <span className="invalid-feedback">{tripDetailsError}</span>{}
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
    </BookSection>
  );
};

export default Book;