import { useState, useEffect } from 'react';

export default function useJsonData(path = '') {
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  function fetchData() {
    fetch(path)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => setError(err));
  }

  useEffect(() => {
    fetchData();
  }, [path]);

  return { data, error };
}
