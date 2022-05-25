import React from "react";
import { Link, Routes, useNavigate } from "react-router-dom";
import Login from "../../views/Login";
import Page2 from "../page2/Page2";

const LoginPage = () => {
  return (
    <div>
      <Login />
      <Page2 />
      <Link to={"/"}>Back to main</Link>
    </div>
  );
};

export default LoginPage;
