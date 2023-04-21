import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  },[]);
  const Logout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="home">
      <p>Hello World!</p>
      <button onClick={Logout}>LogOut</button>
    </div>
  );
};

export default Home;
