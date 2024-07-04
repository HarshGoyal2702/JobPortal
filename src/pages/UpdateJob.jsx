import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom'

const UpdateJob = () => {
    const {id} = useParams();
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,compamyLogo,employmentType,description,postedBy,skills}= useLoaderData();
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      data.skills = selectedOption;
      console.log("Submitting Data:", data);
  
      fetch(`http://localhost:3000/update-job/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Server Response:", result);
          if (result.insertedId) {
            alert("Job updated Successfully");
            reset(); // Reset the form
          } else {
            alert("Failed to upload job");
          }
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    };
    const options = [
      { value: "JavaScript", label: "JavaScript" },
      { value: "java", label: "java" },
      { value: "C++", label: "C++" },
      { value: "C", label: "C" },
      { value: "React", label: "React" },
      { value: "Node", label: "Node" },
      { value: "MongoDB", label: "MongoDB" },
      { value: "Mongoose", label: "Mongoose" },
      { value: "Tailwind CSS", label: "Tailwind CSS" },
      { value: "BootStrap", label: "BootStrap" },
    ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#fAFAFA] py-10px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                defaultValue={companyName}
                placeholder="Ex. Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 2nd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                required
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                required
                placeholder="$130k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 3rd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salaryType", { required: true })}
                className="create-job-input"
              >
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                required
                defaultValue={jobLocation}
                placeholder="Ex. New York"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 4th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                required
                defaultValue={postingDate}
                placeholder="2023-11-20"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel", { required: true })}
                className="create-job-input"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">No Experience </option>
                <option value="Internship">Internship</option>
                <option value="work remotely">work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th Row */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Set</label>
            <CreatableSelect
              className="create-job-input py-4"
              defaultValue={skills}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>
          {/* 6th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                required
                defaultValue={compamyLogo}
                placeholder="Paste Your Company Logo URL : https://weShare/img1"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType", { required: true })}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/* 7th Row */}
          <div className="w-full">
            <label className="block mb-2 tezt-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              {...register("description")}
              row={6}
              placeholder="Job Description"
              defaultValue={description}
            />
          </div>

          {/* last Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              defaultValue={postedBy}
              placeholder="your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}

export default UpdateJob
