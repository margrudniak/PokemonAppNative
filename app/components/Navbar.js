import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ButtonF from "../utils/ButtonF";

const Navbar = () => {
  return (
    <View style={styles.nav}>
      <View>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
      </View>
      <View style={styles.nav}>
        <ButtonF text="Log In" color="blue" backColor="transparent" />
        <ButtonF text="Register" color="white" backColor="blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  login: {
    color: "#3c64b1",
    fontWeight: "bold",
  },
  image: {
    height: 50,
    width: 50,
    padding: 10,
  },
});

export default Navbar;
