import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import PropTypes from "prop-types";

const CardList = (props) => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((json) => {
        setHeight(json.height);
        setWeight(json.weight);
        setPhoto(json.sprites.front_default);
        console.log("url " + typeof props.url);
      })
      .catch((error) => console.error(error));
  }, [props.url]);

  return (
    <View key={props.name} style={styles.card}>
      <Image source={{ uri: photo }} style={{ height: 150, width: 150 }} />
      <Text>{props.name.toUpperCase()}</Text>
      <Text>Height: {height / 10}m</Text>
      <Text>Weight: {weight / 10}kg</Text>
    </View>
  );
};

CardList.proptypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

CardList.defaultProps = {
  name: "BLANK",
  url: "https://pokeapi.co/api/v2/pokemon/?offset=8&limit=8",
};

const widthProportion = "50%";

const styles = StyleSheet.create({
  card: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: widthProportion,
  },
});

export default CardList;
