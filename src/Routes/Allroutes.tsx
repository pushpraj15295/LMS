import React from "react";
import { Routes, Route } from "react-router-dom";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={"HOME"} />
      <Route path="/courses" element={"Courses"} />
      <Route path="/my-courses" element={"My-courses"} />
      <Route path="/profile" element={"Profile"} />
      <Route path="/blogs" element={"Blogs"} />
    </Routes>
  );
};

export default Allroutes;
