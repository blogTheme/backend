import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="jobs">
        {jobsData.map((job) => (
          <Link>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

export const JobLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if (!res.ok) {
    throw new Error("Failed to fetch job listings");
  }
  return res.json();
};
