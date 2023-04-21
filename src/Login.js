import React, { useState } from "react";
import { auth } from "./Firebase";
import {Link,useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import "./style.css"

const Login = () => {
  const navigate=useNavigate()
  const [loginmail, setLoginmail] = useState("")
  const [loginpass, setLoginpass] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(auth,loginmail,loginpass);
      const token=user?._tokenResponse?.refreshToken
      localStorage.setItem("token",token)
      navigate("/home")
    } catch (error) {
      alert("Email or Password is incorrect")
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title"> Login Here</div>
        <label>Email</label>
        <input
          type="mail"
          value={loginmail}
          onChange={(e) => setLoginmail(e.target.value )}
        />
        <label>Password</label>
        <input
          type="password"
          value={loginpass}
          onChange={(e) => setLoginpass(e.target.value)}
        />
        <input type="submit" className="btn" name="login" value="Login" />
      </form>
      <div className="account">
      Don't have account? <Link to="/signup">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
