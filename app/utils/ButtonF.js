import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const ButtonF = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.backColor,
          borderWidth: 4,
          borderColor: "transparent",
          borderRadius: 6,
          padding: 10,
        }}
        onPress={props.onPress}
      >
        <Text
          style={{
            color: props.color,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

ButtonF.proptypes = {
  backColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ButtonF.defaultProps = {
  backColor: "white",
  color: "black",
  text: "PLACEHOLDER",
};

export default ButtonF;
