import { useState, useEffect } from "react";
import yelp from "../api/yelp";

const useResults = function () {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchResults = async function (searchTerm) {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "toronto",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setError("Something went wrong :(");
    }
  };

  useEffect(() => {
    searchResults("pasta");
  }, []);

  return [searchResults, results, error];
};

export default useResults;
