import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

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

  // useEffect(() => {}, [searchTerm]);

  const handleSearch = (keyword, bool = false) => {
    // setSearchTerm(keyword);

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

  // console.log('jobs');
  // console.log(jobs);
  // console.log('filteredJobs');
  console.log(filteredJobs);

  return (
    <Context.Provider value={{ filteredJobs, handleSearch, isLoaded }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
