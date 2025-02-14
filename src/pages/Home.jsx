import React, { useEffect, useState } from "react";
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import Jobs from "./Jobs.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false)
      });
  }, []);

  const filteredItems = jobs.filter(
    (job) => job.jobTitle && job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
const calculatePageRange = ()=>{
  const startIndex = (currentPage - 1) * itemsPerPage ;
  const endIndex = startIndex + itemsPerPage;
  return {startIndex,endIndex}
}

// function for the next page 
const nextPage = ()=>{
  if(currentPage<Math.ceil(filteredItems.length / itemsPerPage)){
    setCurrentPage(currentPage+1) 
  }
}
const prevPage = ()=>{
  if(currentPage>1){
    setCurrentPage(currentPage-1)
  }
}

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter((job) => {
        const {
          jobLocation = "",
          maxPrice = "",
          experienceLevel = "",
          salrayType = "",
          employmentType = "",
          postingDate=""
        } = job;

        return (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salrayType.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        );
      });
    }

    //slice the data based on current page
    const {startIndex,endIndex} = calculatePageRange()
    filteredJobs = filteredJobs.slice(startIndex,endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded-sm">
        {
          isLoading ? (<p className="font-medium">Loading...</p>): result.length > 0 ? <Jobs result={result} /> : <> <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
          <p>No Data Found</p></>

        }
          {
            result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button onClick={prevPage} disabled={currentPage===1} className="hover:underline">Previous </button>
                <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length/itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length/itemsPerPage)} className="hover:underline"> Next</button>
              </div>
            ) : null
          }
        </div>
        <div className="bg-white p-4 rounded"><NewsLetter/></div>
      </div>
    </div>
  );
};

export default Home;
