import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader.jsx";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value, url } = await Swal.fire({
      input: "url",
      inputLabel: "Enter your CV URL",
      inputPlaceholder: "https://...",
    });
    if (url) {
      Swal.fire(`Entered URL : ${url}`);
    }
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"single job details"} path={"single Job"} />
      <h2 className="text-xl font-semibold mb-2">JobDetails:</h2>
      <h1 className="text-gray-600 font-medium text-lg">Company Name - {job.jobTitle}</h1>
      <h1 className="text-gray-600 font-medium text-[1rem]">Location - {job.jobLocation}</h1>

      <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>
        Apply Now
      </button>

      <div className="flex gap-20 items-start mt-5">
        <div className="md:w-96 w-52 ">
          <h2 className="text-xl font-semibold">Job Description:</h2>
          <p className="text-gray-900 font-sans text-justify">{job.description}</p>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold">Job Requirements:</h2>
          <h3 className="font-bold text-gray-700 ">Experience Level</h3>
          <p>{job.experienceLevel}</p>
          <h5 className="font-bold text-gray-700 ">Employemnt Type</h5>
          <p>{job.employmentType}</p>
        
          
        </div>
        <div className="">
          <h5 className="font-bold text-gray-700 ">Salary</h5>
          <p>{job.minPrice} - {job.maxPrice}</p>
          <h5 className="font-bold text-gray-700 ">Salary Type</h5>
          <h2>{job.salaryType}</h2>
        </div>
      </div>
      <h5 className="font-bold text-gray-700 mt-5">Posted By</h5>
          <p>{job.postedBy}</p>
    </div>
  );
};

export default JobDetails;
