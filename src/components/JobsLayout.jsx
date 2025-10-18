import React from "react";
import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div>
      <h2>Jobs Openings</h2>
      <p>Explore our current job openings and find the perfect role for you!</p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
