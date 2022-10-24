import "../Login/Login.css";
import React, { useState } from "react";
import loginin from "../../assets/images2.png";
import logo from "../../assets/logo.jpg";

const Login = ({ login, isLogin }) => {
  // console.log(login);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    userName: userName,
    password: password,
  };
  console.log(params);
  return (
    <>
      <div className="container-fluid p-0">
        <div className="d-flex">
          <div className="login-box text-center" style={{paddingTop: "160px"}}>
                <img className="" style={{borderRadius: "25px"}} src={loginin} alt=""/>
                <h1 className="h1 fw-bold text-white" style={{fontSize: "90px"}}>Login in</h1>
          </div>
          <div className="mx-auto mt-5 pt-3">
            <img  src={logo} alt="" width={400}/>
            <div className="mt-3 mb-3">
              <input
                className="input-login"
                type="text"
                placeholder="Login"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="input-login"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger w-100 mt-3"
              style={{height: "50px"}}
              onClick={() => login(params)}
              required  
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
