import React from "react";
import { Link, useLocation } from "react-router-dom";

const Page2 = () => {
  // // const location = useLocation();
  // // console.log(location);
  return (
    <div>
      Holiiis page2
      <Link to={"/"}>Back to main</Link>
    </div>
  );
};

export default Page2;
