import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);

  const url =
    'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

  const fetchData = () => {
    setIsLoaded(false);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setJobs(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(jobs);

  const handleSearch = (keyword) => {
    if (keyword === '') {
      fetchData();
    }

    setJobs((prevJobs) =>
      prevJobs.filter(
        (job) =>
          job.title
            .trim()
            .toLowerCase()
            .includes(keyword.trim().toLowerCase()) ||
          job.company
            .trim()
            .toLowerCase()
            .includes(keyword.trim().toLowerCase())
      )
    );
  };

  return (
    <Context.Provider value={{ jobs, handleSearch, isLoaded }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
