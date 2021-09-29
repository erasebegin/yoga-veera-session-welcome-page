import { useState, useEffect } from 'react';

export default function useJsonData(path = '') {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  function fetchData() {
    setLoading(true);
    fetch(path)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
