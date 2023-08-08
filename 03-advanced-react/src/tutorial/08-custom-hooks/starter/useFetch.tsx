import React, { useEffect, useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson';




export default function useFetch(url: string) {
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchData();
  }, []);
  // order matters
  // don't place user JSX before loading or error

  return { isLoading, isError, data }
}

