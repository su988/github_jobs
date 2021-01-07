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
        setJobs(result);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(jobs);

  const handleSearch = (keyword, bool = false) => {
    if (keyword === '') {
      fetchData();
    }

    if (bool) {
      setFilteredJobs(
        jobs.filter((job) =>
          job.location.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }

    setFilteredJobs(
      jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword.toLowerCase()) ||
          job.company.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  return (
    <Context.Provider value={{ filteredJobs, handleSearch, isLoaded }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
