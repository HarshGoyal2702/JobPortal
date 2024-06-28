import React, { useEffect, useState } from "react";
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  // filter jobs with data
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  console.log(filteredItems);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experinceLevel,
          salrayType,
          employmenntType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salrayType.toLowerCase() === selected.toLowerCase() ||
          employmenntType.toLowerCase() === selected.toLowerCase() 
      );
    }

    return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return <Banner query={query} handleInputChange={handleInputChange} />;
};

export default Home;
