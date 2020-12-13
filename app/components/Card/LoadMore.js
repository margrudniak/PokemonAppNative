import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonF from "../../utils/ButtonF";

const LoadMore = ({ getNextValues }) => {
  return (
    <View style={styles.load}>
      {getNextValues && (
        <ButtonF
          onPress={getNextValues}
          text="Load More"
          color="white"
          backColor="blue"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  load: {
    paddingBottom: 20,
  },
});

export default LoadMore;
