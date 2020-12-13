import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.bold}>Welcome in Pokemon App</Text>
      </View>
      <View style={styles.header}>
        <Text>At the bottom of the page you can load data</Text>
        <Text>Have fun!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
  },
});

export default Header;
