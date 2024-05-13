import { useEffect, useState } from "react";
import {useRefSync} from "./useRefSync.js";

/**
 * @param {string} url
 * @param {FetchEventInit} options
 */
export function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const optionsRef = useRefSync(options)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          ...optionsRef.current,
          headers: {
            Accept: "application/json; charset=UTF-8",
            ...optionsRef.current?.headers,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);


  // useEffect(() => {
  //   fetch(url, {
  //     ...optionsRef.current,
  //     headers: {
  //       Accept: "application/json; charset=UTF-8",
  //       ...optionsRef.current?.headers,
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((e) => {
  //       setError(e);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [url]);

  return {
    loading,
    data,
    error,
    setData
  };
}
