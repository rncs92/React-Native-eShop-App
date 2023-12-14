import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import BannerComponent from "../components/BannerComponent";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BannerComponent />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text>Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 220,
    height: 40,
    marginTop: 20,
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#057353",
    padding: 10,
    marginBottom: 10,
  },
  banner: {
    flex: 0.15,
    backgroundColor: "#058A64",
    marginBottom: 15,
    marginTop: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F2F2F2",
  },
  logo: {
    width: 100,
    height: 70,
  },
});

export default HomeScreen;
