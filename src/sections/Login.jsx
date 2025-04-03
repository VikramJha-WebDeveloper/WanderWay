import React, {createContext, useState} from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

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
`;

const Login = ({knowName}) => {
    // Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");

  // show user name after login on navbar
  const [userName, setUserName] = useState("");

  // collect login user data
  const handleEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setLoginPassword(e.target.value);
  }
  const collectLoginData = (e)=>{
    e.preventDefault();
    if(!loginEmail){
      setLoginEmailError("Please enter email id⚠️");
    }
    if(!loginPassword){
      setLoginPasswordError("Please enter password⚠️");
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if(storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword){
        toast.success("Login successful");
        setUserName(storedUser.name);
        knowName(storedUser.name);
    }else{
      toast.error("invalid credentials");
    }
  }
    return(
        <>
        {/* Login modal */}
      <ModalSection>
        <div
          className="modal fade"
          id="loginModal"
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
                          <h3 className="card-title text-center">Login</h3>
                          <form onSubmit={collectLoginData}>
                            <div className="mb-3">
                              <label htmlFor="loginEmail" className="form-label">
                                Email address
                              </label>
                              <input
                                type="email"
                                className={`form-control ${loginEmailError? "is-invalid border-2":""}`}
                                id="loginEmail"
                                placeholder="Enter email"
                                value={loginEmail}
                                onChange={handleEmail}
                              />
                              <div className="invalid-feedback">{loginEmailError}</div>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="loginPassword" className="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                className={`form-control ${loginPasswordError? "is-invalid border-2":""}`}
                                id="loginPassword"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={handlePassword}
                              />
                              <div className="invalid-feedback">{loginPasswordError}</div>
                            </div>
                            
                            <button type="submit" className="btn btn-dark w-100">
                              Login
                            </button>
                            <div className="text-center mt-3">
                              <p>
                                Don't have account?{" "}
                                <a
                                  data-bs-target="#registerModal"
                                  data-bs-toggle="modal"
                                  href="#"
                                >
                                  Register here
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

export default Login;