import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchResults, results, error] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchResults(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {results.length} results based on your search</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
