import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false)
      });
  }, [url]);
  return {loading, data, error}
};

export default useFetch;
