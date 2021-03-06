import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchResults = async function () {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: term,
          limit: 50,
          location: "toronto",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setError("Something went wrong :(");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={searchResults}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {results.length} results based on your search</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
