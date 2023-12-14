import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageComponent = ({ itemName }) => {
  const imageSources = {
    "T-Shirt": require("../../assets/imageedit_10_7627625279.jpg"),
    "Calculator": require("../../assets/imageedit_6_8018592039.jpg"),
    "Chair": require("../../assets/imageedit_12_6161097361.jpg"),
    "Table": require("../../assets/imageedit_1_3428521881.jpg"),
    "Pen": require("../../assets/imageedit_4_4977772927.jpg"),
    "Printer": require("../../assets/imageedit_8_4501661779.jpg"),
  };

  const source = imageSources[itemName];

  return (
    <View>
      <Image style={styles.image} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 110,
    margin: 6,
  },
});

export default ImageComponent;
