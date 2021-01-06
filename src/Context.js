import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);

  const url =
    'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setJobs(result));
  }, []);

  console.log(jobs);

  const handleSearch = () => {};

  return (
    <Context.Provider value={{ jobs, handleSearch }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
