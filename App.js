import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Navbar from "./app/components/Navbar";
import Header from "./app/components/Header";
import Card from "./app/components/Card/Card";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Navbar />
      <Header />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
