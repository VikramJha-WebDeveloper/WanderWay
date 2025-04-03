import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const ModalSection = styled.div`
  font-family: "Lilita One", sans-serif;
  .modal h3,
  form label,
  form p,
  form a {
    color: white;
  }

  form a {
    font-family: sans-serif;
    color: white;
  }
  form a:hover {
    color: gray;
  }
  .close {
    cursor: pointer;
    z-index: 6;
  }
  .fullName::after{
    content: "modi";    
  }
`;

const Registration = () => {
    // Register
      const [name, setName] = useState("");
      const [contact, setContact] = useState("");
      const [birthDate, setBirthDate] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [gender, setGender] = useState("male");
    
      const [emailError, setEmailError] = useState("");
      const [nameError, setNameError] = useState("");
      const [contactError, setContactError] = useState("");
      const [passwordError, setPasswordError] = useState("");
      const [birthDateError, setBirthDateError] = useState("");
      const [closeModal, setCloseModal] = useState("");

      const [emailPatternMatched, setEmailPatternMatched] = useState(false);
      const [namePatternMatched, setNamePatternMatched] = useState(false);
      const [contactPatternMatched, setContactPatternMatched] = useState(false);
      const [passwordPatternMatched, setPasswordPatternMatched] = useState(false);
      const [birthDatePatternMatched, setBirthDatePatternMatched] = useState(false);

      useEffect(()=>{
        if(emailPatternMatched && contactPatternMatched && birthDatePatternMatched && namePatternMatched && passwordPatternMatched){
            setCloseModal("modal");
          }
      },[emailPatternMatched, namePatternMatched, contactPatternMatched, passwordPatternMatched, birthDatePatternMatched]);
      
  // email validation
  const emailValidation = (e) => {
    setEmail(e.target.value.trim());
     const pattern = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/gm;
    
    if(pattern.test(e.target.value)){
      setEmailError("");
      setEmailPatternMatched(true);
    }else{
      setEmailError("email format is incorrect⚠️")
    }
  };
  // name validation
  const nameValidation = (e)=>{
    const pattern = /^[a-zA-Z ]{3,}$/gm;
    setName(e.target.value.trim());
    if(pattern.test(e.target.value)){
      setNameError("");

      setNamePatternMatched(true);
    }else{
      setNameError("Enter a valid name⚠️")
    };
  };

  // contact validation
  const contactValidation = (e) => {
    setContact(e.target.value);
    const pattern = /^(\+91[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(pattern.test(e.target.value)){
      setContactError("");
      setContactPatternMatched(true);
    }else{
      setContactError("Enter valid Mobile number⚠️");
    }
  }

  // password validation
  const passwordValidation = (e) => {
    setPassword(e.target.value.trim());
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/gm
    if(pattern.test(e.target.value)){
      setPasswordError("");
      setPasswordPatternMatched(true);
    }else{
      setPasswordError("Please enter strong password and should be 12 characters long⚠️");
    }
  }

  const birthDateValidation = (e) => {
    setBirthDate(e.target.value);
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    if(pattern.test(e.target.value)){
        setBirthDateError(null);
        setBirthDatePatternMatched(true);
    }else{
        setBirthDateError("Please provide a valid date");
    }
  }

  // collect register user Data during registration
   const collectData = async(e) => {
    e.preventDefault()
    try{
        if(!name){
            e.preventDefault();
            setNameError("Please enter full Name⚠️");
          }
          if(!contact){
            setContactError("Please enter contact number⚠️");
          }
          if(!birthDate){
            setBirthDateError("Please enter date of birth⚠️")
          }
          if(!email){
            setEmailError("Please enter email address⚠️");
          }
          if(!password){
            setPasswordError("Please enter password⚠️")
          }
          if(nameError, contactError, birthDateError, emailError, passwordError){
              toast.error("Error during registration");
              return;
          }
          if(name && contact && birthDate && email && password && gender){
            localStorage.setItem("user", JSON.stringify({name, contact, birthDate, email, gender, password}));
            toast.success("Registered successfully. Please Login");
            setName(""); setEmail(""); setPassword(""); setBirthDate(""); setContact("");
          }
    }catch(err){
        console.log(err);
    }
   }
    return(
        <>
          {/* register modal */}
      <ModalSection>
        <div
          className="modal fade"
          id="registerModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl p-0">
            <div
              className="modal-content border-0 p-0"
              style={{ background: "transparent" }}
            >
              <div className="modal-body">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <i
                        className="bi bi-x-lg close text-light display-6 end-0 position-absolute"
                        data-bs-dismiss="modal"
                      ></i>
                      <div className="card" style={{ background: "teal" }}>
                        <div className="card-body">
                          <h3 className="card-title text-center">Register</h3>
                          <form onSubmit={collectData}>
                            <div className="mb-3">
                              <label htmlFor="fullName" className="form-label">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className={`fullName form-control ${nameError? "is-invalid border-2":""}`}
                                id="fullName"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={nameValidation}
                                
                              />
                              <div className="invalid-feedback">{nameError}</div>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="contact" className="form-label">
                                Contact
                              </label>
                              <input
                                type="number"
                                className={`form-control ${contactError? "is-invalid border-2":""}`}
                                id="contact"
                                placeholder="Enter your contact number"
                                value={contact}
                                onChange={contactValidation}
                                
                              />
                              <div className="invalid-feedback">{contactError}</div>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="dob" className="form-label">
                                Date of Birth
                              </label>
                              <input
                                type="date"
                                className={`form-control ${birthDateError? "is-invalid border-2":""}`}
                                id="dob"
                                value={birthDate}
                                onChange={birthDateValidation}
                                
                              />
                              <div className="invalid-feedback">{birthDateError}</div>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="registerEmail" className="form-label">
                                Email ID
                              </label>
                              <input
                                type="email"
                                className={`form-control ${emailError? "is-invalid border-2":""}`}
                                id="registerEmail"
                                placeholder="Enter your email"
                                value={email}
                                onChange={emailValidation}
                                
                              />
                              <div className="invalid-feedback">{emailError}</div>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="registerPassword" className="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                className={`form-control ${passwordError? "is-invalid border-2":""}`}
                                id="registerPassword"
                                placeholder="Enter your password"
                                value={password}
                                onChange={passwordValidation}
                              
                              />
                              <div className="invalid-feedback">{passwordError}</div>
                            </div>

                            <div className="mb-3">
                              <label className="form-label">Gender</label>
                              <br />
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="male"
                                  value={gender}
                                  checked={gender === "male"}
                                  onChange={(e)=>setGender("male")}
                                  
                                />
                                <label className="form-check-label" htmlFor="male">
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="female"
                                  value={gender}
                                  checked={gender === "female"}
                                  onChange={(e)=>setGender("female")}
                                  required
                                />
                                <label className="form-check-label" htmlFor="female">
                                  Female
                                </label>
                              </div>
                            </div>
                            <button
                              data-bs-dismiss={closeModal}
                              type="submit"
                              className="btn btn-dark w-100"
                            >
                              Register
                            </button>

                            <div className="text-center mt-3">
                              <p>
                                Already have an account?{" "}
                                <a
                                  href="#"
                                  data-bs-target="#loginModal"
                                  data-bs-toggle="modal"
                                >
                                  Login here
                                </a>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalSection>

        </>
    );
};

export default Registration;