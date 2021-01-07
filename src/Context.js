import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // https://cors-anywhere.herokuapp.com/https://jobs.github.com
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

  const handleSearch = (keyword, bool = false) => {
    if (keyword === '') {
      setFilteredJobs(jobs);
    }

    if (bool) {
      setFilteredJobs(
        jobs.filter((job) =>
          job.location.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    } else {
      setFilteredJobs(
        jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(keyword.toLowerCase()) ||
            job.company.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }
  };

  return (
    <Context.Provider value={{ filteredJobs, handleSearch, isLoaded }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
