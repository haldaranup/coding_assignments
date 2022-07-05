import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(e => {
          setError(true);
          setLoading(false);
          console.log(e)
        });
    }, [url]);
  
    return {
      loading,
      data,
      error
    };
  }
  export {useFetch}
  