import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');

  const url = '/positions.json';

  const fetchData = () => {
    setIsLoaded(false);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setJobs(result);
        setFilteredJobs(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (keyword) => {
    setFilteredJobs(
      jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword.toLowerCase()) ||
          job.company.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const filterFullTime = (bool, id) => {
    if (bool) {
      setFilteredJobs(jobs.filter((job) => job.type.includes(id)));
    } else {
      setFilteredJobs(jobs);
    }
  };

  const filterLocation = (city) => {
    setFilteredJobs(
      jobs.filter((job) =>
        job.location.toLowerCase().includes(city.toLowerCase())
      )
    );
  };

  const getJobDetail = (id) => {
    setSelectedJob(jobs.find((job) => job.id === id));
  };

  console.log(filteredJobs);

  return (
    <Context.Provider
      value={{
        filteredJobs,
        isLoaded,
        handleSearch,
        filterFullTime,
        filterLocation,
        getJobDetail,
        selectedJob
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
