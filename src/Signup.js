import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signmail, setSignmail] = useState("");
  const [signpass, setSignpass] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signmail,
        signpass
      );
      console.log(user);
      alert("Account created sucessfully");
      navigate("/");
    } catch (error) {
      alert("Email is invalid or password length must be 6 or above");
      console.log(error.message);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title"> Register Here</div>
        <label>Email</label>
        <input
          type="mail"
          value={signmail}
          onChange={(e) => setSignmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={signpass}
          onChange={(e) => setSignpass(e.target.value)}
        />
        <input type="submit" className="btn" name="login" value="Register" />
      </form>
      <div className="account">
        Already have account? <Link to="/">Login here</Link>
      </div>
    </div>
  );
};

export default Login;
